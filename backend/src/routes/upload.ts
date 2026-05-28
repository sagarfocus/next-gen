import { Router, type Response } from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { requireAuth, requireAdmin, type AuthedRequest } from '../lib/auth.js';

/**
 * Local-disk image upload.
 *
 * Files are saved under <repo>/backend/uploads/{blog,avatar}/<unique>.<ext>
 * and served back to the browser by Express at /uploads/* (mounted in server.ts).
 * Vite dev server proxies /uploads to the backend (vite.config.ts).
 *
 * Returns { url: '/uploads/blog/<file>' } — relative URLs so the same value
 * works locally and behind any production domain.
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOADS_ROOT = path.resolve(__dirname, '../../uploads');

function ensureDir(p: string) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}
ensureDir(path.join(UPLOADS_ROOT, 'blog'));
ensureDir(path.join(UPLOADS_ROOT, 'avatar'));

function safeExt(filename: string) {
  const ext = path.extname(filename).toLowerCase();
  // Allow common web image formats only
  if (!['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].includes(ext)) return '.png';
  return ext;
}

function makeStorage(subdir: 'blog' | 'avatar') {
  return multer.diskStorage({
    destination: path.join(UPLOADS_ROOT, subdir),
    filename: (_req, file, cb) => {
      const stamp = Date.now().toString(36);
      const rand = Math.random().toString(36).slice(2, 8);
      const ext = safeExt(file.originalname || '');
      cb(null, `${stamp}-${rand}${ext}`);
    },
  });
}

const imageFileFilter: multer.Options['fileFilter'] = (_req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    cb(new Error('Only image files are allowed'));
    return;
  }
  cb(null, true);
};

const blogUpload = multer({
  storage: makeStorage('blog'),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: imageFileFilter,
});

const avatarUpload = multer({
  storage: makeStorage('avatar'),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: imageFileFilter,
});

const router = Router();

// POST /api/upload/blog-image — admin uploads a blog cover or inline image
router.post(
  '/blog-image',
  requireAdmin,
  blogUpload.single('file'),
  (req: AuthedRequest, res: Response) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    return res.status(201).json({
      url: `/uploads/blog/${req.file.filename}`,
      filename: req.file.filename,
      size: req.file.size,
      mimeType: req.file.mimetype,
    });
  },
);

// POST /api/upload/avatar — any logged-in user can replace their own avatar
router.post(
  '/avatar',
  requireAuth,
  avatarUpload.single('file'),
  (req: AuthedRequest, res: Response) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    return res.status(201).json({
      url: `/uploads/avatar/${req.file.filename}`,
      filename: req.file.filename,
    });
  },
);

// Multer error handler so size/type failures surface as JSON 400s.
router.use((err: unknown, _req: AuthedRequest, res: Response, _next: () => void) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message, code: err.code });
  }
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message });
  }
  return res.status(500).json({ error: 'Upload failed' });
});

export default router;
