import { Router, type Response } from 'express';
import { requireAuth, requireAdmin, type AuthedRequest } from '../lib/auth.js';

// All routes here return 503 with a clear message. They exist so the ported
// dashboard UI doesn't crash on unknown 404s — clicking the button surfaces a
// meaningful "not configured" error. Replace any of these with real
// implementations as the corresponding external services are wired up.

function notConfigured(service: string) {
  return (_req: AuthedRequest, res: Response) =>
    res.status(503).json({
      error: `${service} is not configured in this environment. Wire the relevant env vars and replace this stub.`,
      service,
    });
}

const router = Router();

// Upload routes moved to backend/src/routes/upload.ts (local-disk storage).

// ── AI (OpenAI / Replicate / Gemini) ─────────────────────────
const ai = Router();
ai.post('/text', requireAuth, notConfigured('OpenAI text generation'));
ai.post('/image', requireAuth, notConfigured('OpenAI / Replicate image generation'));
ai.post('/video', requireAuth, notConfigured('Replicate video generation'));
ai.post('/analytics-chat', requireAuth, notConfigured('Analytics AI chat'));
// AI blog generation moved to backend/src/routes/ai-blog.ts (real Gemini-backed).
ai.post('/generate-news', requireAdmin, notConfigured('AI news generator'));
ai.post('/generate-news-oneshot', requireAdmin, notConfigured('AI news one-shot'));
router.use('/ai', ai);

// ── Admin GMB (Google OAuth + Search Console + GMB + GA4 + Ads) ──────
const gmb = Router();
gmb.use(requireAdmin);
const gmbStub = notConfigured('Google OAuth / GMB / GA4 / Search Console / Google Ads');
gmb.get('/accounts', gmbStub);
gmb.get('/ads-accounts', gmbStub);
gmb.get('/analytics-data', gmbStub);
gmb.get('/auth-url', gmbStub);
gmb.get('/callback', gmbStub);
gmb.get('/config-check', (_req, res) => res.json({ configured: false }));
gmb.post('/connect', gmbStub);
gmb.get('/connection', gmbStub);
gmb.post('/disconnect', gmbStub);
gmb.get('/ga4-properties', gmbStub);
gmb.get('/locations', gmbStub);
gmb.get('/sc-sites', gmbStub);
gmb.post('/select-ads', gmbStub);
gmb.post('/select-analytics', gmbStub);
gmb.post('/select-location', gmbStub);
gmb.post('/sync-analytics', gmbStub);
gmb.post('/sync', gmbStub);
router.use('/admin/gmb', gmb);

// ── Admin RAG crawl ──────────────────────────────────────────
router.post('/admin/crawl-site', requireAdmin, notConfigured('Site crawler / RAG'));

// ── Admin Blog/News CMS ──────────────────────────────────────
// Blog post routes moved to backend/src/routes/posts.ts.
router.get('/admin/news', requireAdmin, async (_req, res) => res.json({ news: [] }));
router.post('/admin/news', requireAdmin, notConfigured('News create'));
router.patch('/admin/news/:id', requireAdmin, notConfigured('News update'));
router.delete('/admin/news/:id', requireAdmin, notConfigured('News delete'));

// Contact-lead routes moved to backend/src/routes/contact-lead.ts (mounted in server.ts).


export default router;
