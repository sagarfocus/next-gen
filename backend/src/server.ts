import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import authRouter from './routes/auth.js';
import clientRouter from './routes/client.js';
import analyticsRouter from './routes/analytics.js';
import adminRouter from './routes/admin.js';
import billingRouter from './routes/billing.js';
import stripeRouter from './routes/stripe.js';
import chatRouter from './routes/chat.js';
import newsletterRouter from './routes/newsletter.js';
import contactLeadRouter from './routes/contact-lead.js';
import postsRouter, { adminPostsRouter } from './routes/posts.js';
import uploadRouter from './routes/upload.js';
import aiBlogRouter from './routes/ai-blog.js';
import stubsRouter from './routes/stubs.js';

const __filename_server = fileURLToPath(import.meta.url);
const __dirname_server = path.dirname(__filename_server);

if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET is not set. Edit backend/.env and restart.');
  process.exit(1);
}

const app = express();
const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRouter);
app.use('/api/client', clientRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/admin', adminRouter);
app.use('/api/billing', billingRouter);
app.use('/api/stripe', stripeRouter);
app.use('/api/chat', chatRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/contact-lead', contactLeadRouter);
app.use('/api/posts', postsRouter);
app.use('/api/admin/posts', adminPostsRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/ai', aiBlogRouter);

// Serve uploaded images at /uploads/* — frontend gets them same-origin via Vite proxy.
app.use('/uploads', express.static(path.resolve(__dirname_server, '../uploads'), { maxAge: '7d' }));

// stubs router contains its own /ai, /admin/gmb, /admin/crawl-site,
// /admin/news, /admin/subscribers paths — mount at /api.
app.use('/api', stubsRouter);

app.listen(PORT, () => {
  console.log(`> Backend ready on http://localhost:${PORT}`);
  console.log(`> Allowing CORS from ${FRONTEND_ORIGIN}`);
});
