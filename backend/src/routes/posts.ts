import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, type AuthedRequest } from '../lib/auth.js';
import { sanitizeText } from '../lib/sanitize.js';

const router = Router();

// ─── Public read endpoints ───────────────────────────────────
// GET /api/posts          → list all
// GET /api/posts?slug=x   → fetch single by slug (with relations)
router.get('/', async (req: Request, res: Response) => {
  try {
    const slug = (req.query.slug as string | undefined)?.trim();
    if (slug) {
      const post = await prisma.post.findUnique({
        where: { slug },
        include: { author: true, categories: true, tags: true },
      });
      if (!post) return res.status(404).json({ error: 'Not found' });
      // Single post: longer cache since slugs are stable.
      res.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=600');
      return res.json(post);
    }
    // List view: only return fields the feed actually renders.
    // Dropping `content` (which can be 50KB+ per row) shrinks the payload 10-100×
    // and meaningfully cuts the time the browser spends parsing the response.
    const posts = await prisma.post.findMany({
      where: { publishedAt: { not: null } },
      orderBy: { publishedAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        coverImageAlt: true,
        publishedAt: true,
        updatedAt: true,
      },
    });
    // Short max-age + SWR — the browser shows cached list instantly on repeat
    // visits while a fresh request runs in the background.
    res.set('Cache-Control', 'public, max-age=30, stale-while-revalidate=300');
    return res.json(posts);
  } catch (err) {
    console.error('GET /api/posts error:', err);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// POST /api/posts — admin creates a new post
router.post('/', requireAdmin, async (req: AuthedRequest, res: Response) => {
  try {
    const body = req.body || {};
    if (!body.title || !body.slug) {
      return res.status(400).json({ error: 'title and slug are required' });
    }
    const existing = await prisma.post.findUnique({ where: { slug: body.slug } });
    if (existing) {
      return res.status(409).json({ error: 'A post with that slug already exists' });
    }
    const post = await prisma.post.create({
      data: {
        title: String(body.title).slice(0, 250),
        slug: String(body.slug).slice(0, 250),
        excerpt: body.excerpt ? String(body.excerpt).slice(0, 500) : null,
        content: body.content ? sanitizeText(body.content, 50000) : '',
        coverImage: body.coverImage || null,
        coverImageAlt: body.coverImageAlt || null,
        seoTitle: body.seoTitle || null,
        metaDesc: body.metaDesc || null,
        canonical: body.canonical || null,
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : null,
      },
    });
    return res.status(201).json(post);
  } catch (err) {
    console.error('POST /api/posts error:', err);
    return res.status(500).json({ error: 'Failed to create post' });
  }
});

// ─── Admin-only single-post operations ───────────────────────
// Mounted at /api/admin/posts via the second use() in server.ts
export const adminPostsRouter = Router();
adminPostsRouter.use(requireAdmin);

adminPostsRouter.get('/:id', async (req: AuthedRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) return res.status(404).json({ error: 'Not found' });
    return res.json(post);
  } catch (err) {
    console.error('GET /api/admin/posts/:id error:', err);
    return res.status(500).json({ error: 'Failed to fetch post' });
  }
});

const updatePostHandler = async (req: AuthedRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    const body = req.body || {};
    const data: Record<string, unknown> = {};
    if (body.title !== undefined) data.title = String(body.title).slice(0, 250);
    if (body.slug !== undefined) data.slug = String(body.slug).slice(0, 250);
    if (body.excerpt !== undefined)
      data.excerpt = body.excerpt ? String(body.excerpt).slice(0, 500) : null;
    if (body.content !== undefined) data.content = body.content ? sanitizeText(body.content, 50000) : '';
    if (body.coverImage !== undefined) data.coverImage = body.coverImage || null;
    if (body.coverImageAlt !== undefined) data.coverImageAlt = body.coverImageAlt || null;
    if (body.seoTitle !== undefined) data.seoTitle = body.seoTitle || null;
    if (body.metaDesc !== undefined) data.metaDesc = body.metaDesc || null;
    if (body.canonical !== undefined) data.canonical = body.canonical || null;
    if (body.publishedAt !== undefined)
      data.publishedAt = body.publishedAt ? new Date(body.publishedAt) : null;

    const post = await prisma.post.update({ where: { id }, data });
    return res.json(post);
  } catch (err) {
    console.error('Update /api/admin/posts/:id error:', err);
    return res.status(500).json({ error: 'Failed to update post' });
  }
};

// Accept both PATCH (partial-update convention) and PUT (what the migrated
// BlogEdit.tsx form uses — old project used PUT). Same handler for both.
adminPostsRouter.patch('/:id', updatePostHandler);
adminPostsRouter.put('/:id', updatePostHandler);

adminPostsRouter.delete('/:id', async (req: AuthedRequest, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid id' });
    await prisma.post.delete({ where: { id } });
    return res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('DELETE /api/admin/posts/:id error:', err);
    return res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Admin LIST — quick endpoint for the admin Blog list page.
adminPostsRouter.get('/', async (_req, res: Response) => {
  try {
    const posts = await prisma.post.findMany({ orderBy: { publishedAt: 'desc' } });
    return res.json({ posts });
  } catch (err) {
    console.error('GET /api/admin/posts error:', err);
    return res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;
