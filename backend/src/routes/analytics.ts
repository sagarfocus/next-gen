import { Router, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth, requireAdmin, type AuthedRequest } from '../lib/auth.js';
import { getCanonicalWeekData } from '../lib/analytics-week.js';

const router = Router();

const ALLOWED_WEEKLY_FIELDS = [
  'blogsPublished', 'avgRanking', 'totalTraffic', 'callsRequested',
  'websiteVisits', 'directionClicks', 'metaImpressions', 'metaClicks',
  'metaCTR', 'metaCPC', 'metaConversions', 'metaCostPerConversion',
  'metaAdSpend', 'googleImpressions', 'googleClicks', 'googleCTR',
  'googleCPC', 'googleConversions', 'googleCVR', 'googleCostPerConversion',
  'googleTotalCost', 'socialPosts', 'socialViews', 'patientCount',
  'digitalConversion', 'conversionRate', 'dailyPatientAvg',
] as const;

router.get('/weekly/all', requireAuth, async (_req: AuthedRequest, res: Response) => {
  try {
    const analytics = await prisma.weeklyAnalytics.findMany({
      orderBy: [{ year: 'desc' }, { weekNumber: 'desc' }],
      take: 1000,
    });
    return res.json({ analytics });
  } catch (err) {
    console.error('[Analytics API] weekly/all error:', err);
    return res.status(500).json({ error: 'Failed to fetch all analytics' });
  }
});

router.get('/weekly', requireAuth, async (req: AuthedRequest, res: Response) => {
  const clinicId = (req.query.clinicId as string | undefined)?.trim();
  if (!clinicId) return res.status(400).json({ error: 'Clinic ID required' });

  const year = req.query.year as string | undefined;
  const month = req.query.month as string | undefined;
  const weekNumber = req.query.weekNumber as string | undefined;
  const weekLabel = (req.query.weekLabel as string | undefined)?.trim();

  const where: {
    clinicId: string;
    year?: number;
    month?: number;
    weekNumber?: number;
    weekLabel?: { contains: string };
  } = { clinicId };
  if (year && year !== 'all') where.year = Number(year);
  if (month && month !== 'all') where.month = Number(month);
  if (weekNumber && weekNumber !== 'all') where.weekNumber = Number(weekNumber);
  if (weekLabel && weekLabel.length > 0) where.weekLabel = { contains: weekLabel };

  try {
    const analytics = await prisma.weeklyAnalytics.findMany({
      where,
      orderBy: [{ year: 'asc' }, { weekNumber: 'asc' }],
    });
    return res.json({ analytics });
  } catch (err) {
    console.error('[Analytics API] Error:', err);
    return res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

router.post('/weekly', requireAdmin, async (req: AuthedRequest, res: Response) => {
  const body = req.body || {};
  const { clinicId, year, weekNumber } = body;

  if (!clinicId || !year || !weekNumber) {
    return res.status(400).json({ error: 'Missing required fields: clinicId, year, weekNumber' });
  }

  const numericYear = Number(year);
  const numericWeekNumber = Number(weekNumber);
  if (Number.isNaN(numericYear) || Number.isNaN(numericWeekNumber)) {
    return res.status(400).json({ error: 'Year and weekNumber must be valid numbers' });
  }

  const safeData: Record<string, number> = {};
  for (const field of ALLOWED_WEEKLY_FIELDS) {
    if (body[field] !== undefined) {
      safeData[field] = Number(body[field]) || 0;
    }
  }

  const canonical = getCanonicalWeekData(numericYear, numericWeekNumber);

  try {
    const existing = await prisma.weeklyAnalytics.findFirst({
      where: { clinicId, year: numericYear, weekNumber: numericWeekNumber },
      orderBy: { updatedAt: 'desc' },
    });

    const analytics = existing
      ? await prisma.weeklyAnalytics.update({
          where: { id: existing.id },
          data: {
            weekLabel: canonical.weekLabel,
            month: canonical.month,
            ...safeData,
            updatedAt: new Date(),
          },
        })
      : await prisma.weeklyAnalytics.create({
          data: {
            clinicId,
            year: numericYear,
            month: canonical.month,
            weekNumber: numericWeekNumber,
            weekLabel: canonical.weekLabel,
            ...safeData,
          },
        });

    return res.json({ success: true, analytics });
  } catch (err) {
    console.error('[Analytics API POST] error:', err);
    return res.status(500).json({ error: 'Failed to save analytics' });
  }
});

router.delete('/weekly', requireAdmin, async (req: AuthedRequest, res: Response) => {
  const id = (req.query.id as string | undefined)?.trim();
  if (!id) return res.status(400).json({ error: 'Analytics ID required' });

  try {
    await prisma.weeklyAnalytics.delete({ where: { id } });
    return res.json({ success: true });
  } catch (err) {
    console.error('[Analytics API DELETE] error:', err);
    return res.status(500).json({ error: 'Failed to delete analytics' });
  }
});

export default router;
