import { Router, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth, type AuthedRequest } from '../lib/auth.js';

const router = Router();

router.get('/analytics-data', requireAuth, async (req: AuthedRequest, res: Response) => {
  const clinicId = (req.query.clinicId as string | undefined)?.trim();
  const where: { userId: string; clinicId?: string } = { userId: req.user!.id };
  if (clinicId) where.clinicId = clinicId;

  try {
    const analytics = await prisma.analyticsData.findMany({
      where,
      orderBy: { date: 'desc' },
      take: 90,
    });
    return res.json(analytics);
  } catch (err) {
    console.error('Analytics-data fetch error:', err);
    return res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
});

router.get('/weekly-ongoing-work', requireAuth, async (req: AuthedRequest, res: Response) => {
  const clinicId = (req.query.clinicId as string | undefined)?.trim();
  const year = req.query.year ? Number(req.query.year) : undefined;
  const weekNumber = req.query.weekNumber ? Number(req.query.weekNumber) : undefined;

  const where: { userId: string; clinicId?: string; weekYear?: number; weekNumber?: number } = {
    userId: req.user!.id,
  };
  if (clinicId) where.clinicId = clinicId;
  if (year !== undefined && !Number.isNaN(year)) where.weekYear = year;
  if (weekNumber !== undefined && !Number.isNaN(weekNumber)) where.weekNumber = weekNumber;

  try {
    const tasks = await prisma.weeklyOngoingTask.findMany({
      where,
      orderBy: [{ weekYear: 'desc' }, { weekNumber: 'desc' }],
    });
    return res.json({ tasks });
  } catch (err) {
    console.error('Weekly-ongoing-work fetch error:', err);
    return res.status(500).json({ error: 'Failed to fetch weekly ongoing work' });
  }
});

router.get('/clinics', requireAuth, async (req: AuthedRequest, res: Response) => {
  const userId = (req.query.userId as string | undefined)?.trim();
  if (!userId) return res.status(400).json({ error: 'User ID required' });

  // Users can only view their own clinics unless they are admin.
  if (userId !== req.user!.id && req.user!.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const assignments = await prisma.clientClinic.findMany({
      where: { userId },
      include: { clinic: true },
    });

    const clinics = assignments.map((a) => ({
      ...a.clinic,
      serviceCategories: a.serviceCategories,
    }));

    return res.json({ clinics });
  } catch (err) {
    console.error('Error fetching client clinics:', err);
    return res.status(500).json({ error: 'Failed to fetch clinics' });
  }
});

export default router;
