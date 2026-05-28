import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAdmin, type AuthedRequest } from '../lib/auth.js';

const router = Router();

// ────────────────────────────────────────────────────────────
// POST /api/contact-lead — PUBLIC
// Called by both contact forms:
//   - QuoteWizard.tsx (5-step wizard, source='quote-wizard')
//   - InquiryForm.tsx (free-text form, source='contact-inquiry')
// Creates a ContactLead row that immediately appears in admin Lead Pipeline.
// ────────────────────────────────────────────────────────────
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, businessType, budget, message, source } = req.body || {};

    if (typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const lead = await prisma.contactLead.create({
      data: {
        name: name.trim().slice(0, 200),
        email: email.trim().toLowerCase().slice(0, 254),
        phone: typeof phone === 'string' && phone.trim() ? phone.trim().slice(0, 40) : null,
        businessType:
          typeof businessType === 'string' && businessType.trim()
            ? businessType.trim().slice(0, 120)
            : null,
        budget: typeof budget === 'string' && budget.trim() ? budget.trim().slice(0, 80) : null,
        message:
          typeof message === 'string' && message.trim() ? message.trim().slice(0, 4000) : null,
        source:
          typeof source === 'string' && source.trim() ? source.trim().slice(0, 60) : 'contact-form',
        status: 'new',
      },
    });
    return res.status(201).json({ message: 'Lead submitted successfully', lead });
  } catch (err) {
    console.error('Contact-lead POST error:', err);
    return res.status(500).json({ error: 'Failed to submit lead' });
  }
});

// ────────────────────────────────────────────────────────────
// GET /api/contact-lead — ADMIN ONLY
// Used by AdminDashboard's Lead Pipeline section on initial mount.
// ────────────────────────────────────────────────────────────
router.get('/', requireAdmin, async (_req: AuthedRequest, res: Response) => {
  try {
    const leads = await prisma.contactLead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return res.json({ leads, count: leads.length });
  } catch (err) {
    console.error('Contact-lead GET error:', err);
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// ────────────────────────────────────────────────────────────
// PATCH /api/contact-lead — ADMIN ONLY
// Used by admin/Leads.tsx to update a lead's status (new → contacted → qualified → closed).
// ────────────────────────────────────────────────────────────
router.patch('/', requireAdmin, async (req: AuthedRequest, res: Response) => {
  try {
    const { id, status } = req.body || {};
    if (!id || !status) {
      return res.status(400).json({ error: 'id and status required' });
    }
    if (!['new', 'contacted', 'qualified', 'closed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const lead = await prisma.contactLead.update({
      where: { id: Number(id) },
      data: { status },
    });
    return res.json({ lead });
  } catch (err) {
    console.error('Contact-lead PATCH error:', err);
    return res.status(500).json({ error: 'Failed to update lead' });
  }
});

export default router;
