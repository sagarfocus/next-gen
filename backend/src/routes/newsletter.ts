import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';

const router = Router();

// POST /api/newsletter — public subscribe endpoint.
// Mirrors the old project's behavior:
//   - validates email
//   - if email exists and active: returns "Already subscribed" (200)
//   - if email exists but inactive: reactivates (200)
//   - else creates a new subscriber row (201)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { email: rawEmail, source } = req.body || {};
    if (typeof rawEmail !== 'string' || !rawEmail.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }
    const email = rawEmail.trim().toLowerCase().slice(0, 254);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email } });
    if (existing) {
      if (existing.active) {
        return res.status(200).json({ message: 'Already subscribed' });
      }
      await prisma.newsletterSubscriber.update({
        where: { email },
        data: { active: true },
      });
      return res.status(200).json({ message: 'Subscription reactivated' });
    }

    const subscriber = await prisma.newsletterSubscriber.create({
      data: {
        email,
        source: typeof source === 'string' ? source.slice(0, 60) : 'footer',
      },
    });

    return res.status(201).json({ message: 'Successfully subscribed', subscriber });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

export default router;
