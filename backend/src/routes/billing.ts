import { Router, type Response } from 'express';
import { requireAuth, type AuthedRequest } from '../lib/auth.js';

// In this codebase the production billing model stores address-book fields on
// Stripe customers, not in our Prisma User table. Since Stripe isn't wired up
// yet, /update accepts the payload and echoes success so the UI can complete
// the flow. Wire it to Stripe later by replacing the body of this handler.

const router = Router();

router.post('/update', requireAuth, async (req: AuthedRequest, res: Response) => {
  const { email, address, city, state, zipCode, country } = req.body || {};
  if (!email && !address && !city && !state && !zipCode && !country) {
    return res.status(400).json({ error: 'No billing fields provided' });
  }
  return res.json({
    success: true,
    billing: { email, address, city, state, zipCode, country },
  });
});

export default router;
