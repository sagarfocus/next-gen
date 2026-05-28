import { Router, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth, type AuthedRequest } from '../lib/auth.js';

const router = Router();

const PLAN_MAP: Record<string, { name: string; amount: number }> = {
  silver: { name: 'Starter Care', amount: 5000 },
  gold: { name: 'Growth Pro', amount: 10000 },
  premium: { name: 'Scale Elite', amount: 0 },
  platinum: { name: 'Scale Elite', amount: 0 },
};

// GET /api/stripe/status — reads subscription state from the DB. Works without
// real Stripe credentials; just reports whatever's persisted on User.
router.get('/status', requireAuth, async (req: AuthedRequest, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (!user) return res.status(401).json({ error: 'User not found' });
  return res.json({
    plan: user.plan || null,
    planId: user.planId || null,
    subscriptionStatus: user.subscriptionStatus || null,
    stripeSubscriptionId: user.stripeSubscriptionId || null,
    stripeCustomerId: user.stripeCustomerId || null,
  });
});

// GET /api/stripe/plans — static plan list, no Stripe required
router.get('/plans', (_req, res: Response) => {
  return res.json(
    Object.entries(PLAN_MAP).map(([id, val]) => ({ id, name: val.name, amount: val.amount })),
  );
});

// Stubbed Stripe action routes — they 503 until STRIPE_SECRET_KEY is wired up.
function stripeStub(_req: AuthedRequest, res: Response) {
  return res.status(503).json({
    error:
      'Stripe is not configured in this environment. Set STRIPE_SECRET_KEY and the *_PRICE_ID env vars and replace this stub.',
  });
}

router.post('/process-payment', requireAuth, stripeStub);
router.post('/create-checkout', requireAuth, stripeStub);
router.post('/confirm-checkout', requireAuth, stripeStub);
router.post('/portal', requireAuth, stripeStub);
router.post('/webhook', stripeStub);

export default router;
