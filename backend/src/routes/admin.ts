import { Router, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { hashPassword } from '../lib/password.js';
import { requireAdmin, type AuthedRequest } from '../lib/auth.js';

// Local equivalent of @/lib/service-categories normalizeServiceCategories.
// Mirrors the old helper: takes any input, returns an array of known categories
// in canonical order. Unknown values are dropped.
const SERVICE_CATEGORIES = [
  'SEO & Local Search',
  'Google Business Profile',
  'Google Ads / Paid Search',
  'Social Media',
  'Blog / Content',
  'Email Campaigns',
  'Strategy & Planning',
  'Brand Identity / Graphic Design',
  'Brochure / Print Design',
  'Medical Automation',
  'Custom Software / Dashboard / Integrations',
] as const;

function normalizeServiceCategories(input: unknown): string[] {
  const values = Array.isArray(input) ? input : typeof input === 'string' ? input.split(',') : [];
  const seen = new Set<string>();
  for (const v of values) {
    if (typeof v !== 'string') continue;
    const found = SERVICE_CATEGORIES.find((c) => c.toLowerCase() === v.trim().toLowerCase());
    if (found) seen.add(found);
  }
  return SERVICE_CATEGORIES.filter((c) => seen.has(c));
}

const USER_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  avatar: true,
  plan: true,
  planId: true,
  subscriptionStatus: true,
  createdAt: true,
  updatedAt: true,
} as const;

const router = Router();
router.use(requireAdmin);

// ────────────────────────────────────────────────────────────
// /api/admin/users — GET / POST / PATCH / DELETE
// ────────────────────────────────────────────────────────────

router.get('/users', async (_req: AuthedRequest, res: Response) => {
  try {
    const [users, assignments] = await Promise.all([
      prisma.user.findMany({
        orderBy: [{ role: 'asc' }, { name: 'asc' }],
        select: USER_SELECT,
      }),
      prisma.clientClinic.findMany({
        select: { userId: true, clinicId: true, serviceCategories: true },
      }),
    ]);
    return res.json({ users, assignments });
  } catch (err) {
    console.error('Error fetching admin users:', err);
    return res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.post('/users', async (req: AuthedRequest, res: Response) => {
  try {
    const { name, email, password, role } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    const userRole = role === 'admin' ? 'admin' : 'client';

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: 'A user with this email already exists' });

    const user = await prisma.user.create({
      data: { name, email, password: await hashPassword(password), role: userRole },
      select: USER_SELECT,
    });
    return res.status(201).json(user);
  } catch (err) {
    console.error('Error creating user:', err);
    return res.status(500).json({ error: 'Failed to create user' });
  }
});

router.patch('/users', async (req: AuthedRequest, res: Response) => {
  try {
    const { id, name, email, role, password, membershipRole } = req.body || {};
    if (!id) return res.status(400).json({ error: 'User ID is required' });

    const existing = await prisma.user.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: 'User not found' });

    const data: Record<string, unknown> = {};

    if (typeof name === 'string') {
      const trimmed = name.trim();
      if (!trimmed) return res.status(400).json({ error: 'Name cannot be empty' });
      data.name = trimmed;
    }

    if (typeof email === 'string') {
      const normalizedEmail = email.trim().toLowerCase();
      if (!normalizedEmail) return res.status(400).json({ error: 'Email cannot be empty' });
      if (normalizedEmail !== existing.email) {
        const emailTaken = await prisma.user.findUnique({ where: { email: normalizedEmail } });
        if (emailTaken) return res.status(409).json({ error: 'A user with this email already exists' });
      }
      data.email = normalizedEmail;
    }

    if (typeof role === 'string') {
      if (role !== 'client' && role !== 'admin') {
        return res.status(400).json({ error: 'Invalid role. Use client or admin' });
      }
      data.role = role;
    }

    if (typeof membershipRole === 'string') {
      const m = membershipRole.trim().toLowerCase();
      if (!['free', 'starter-care', 'growth-pro', 'scale-elite'].includes(m)) {
        return res.status(400).json({ error: 'Invalid membership role' });
      }
      if (m === 'free') {
        data.plan = null;
        data.planId = null;
        data.subscriptionStatus = null;
      } else if (m === 'starter-care') {
        data.plan = 'Starter Care';
        data.planId = 'silver';
        data.subscriptionStatus = 'active';
      } else if (m === 'growth-pro') {
        data.plan = 'Growth Pro';
        data.planId = 'gold';
        data.subscriptionStatus = 'active';
      } else if (m === 'scale-elite') {
        data.plan = 'Scale Elite';
        data.planId = 'premium';
        data.subscriptionStatus = 'active';
      }
    }

    if (typeof password === 'string' && password.trim()) {
      data.password = await hashPassword(password);
    }

    if (Object.keys(data).length === 0) {
      return res.status(400).json({ error: 'No valid fields provided for update' });
    }

    const user = await prisma.user.update({ where: { id }, data, select: USER_SELECT });
    return res.json(user);
  } catch (err) {
    console.error('Error updating user:', err);
    return res.status(500).json({ error: 'Failed to update user' });
  }
});

router.delete('/users', async (req: AuthedRequest, res: Response) => {
  try {
    const id = (req.query.id as string | undefined)?.trim();
    if (!id) return res.status(400).json({ error: 'User ID is required' });
    if (id === req.user!.id) return res.status(400).json({ error: 'You cannot delete your own account' });

    await prisma.clientClinic.deleteMany({ where: { userId: id } });
    await prisma.user.delete({ where: { id } });
    return res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    return res.status(500).json({ error: 'Failed to delete user' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/clinics — GET (list with assignments)
// ────────────────────────────────────────────────────────────

router.get('/clinics', async (_req, res: Response) => {
  try {
    const clinics = await prisma.clinic.findMany({
      orderBy: { name: 'asc' },
      include: {
        clientAssignments: {
          select: {
            id: true,
            userId: true,
            clinicId: true,
            serviceCategories: true,
            assignedAt: true,
          },
        },
      },
    });
    return res.json({ clinics });
  } catch (err) {
    console.error('Error fetching clinics:', err);
    return res.status(500).json({ error: 'Failed to fetch clinics' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/clinics/create — POST
// ────────────────────────────────────────────────────────────

router.post('/clinics/create', async (req: AuthedRequest, res: Response) => {
  try {
    const { name, type, location, assignedUsers, serviceCategories } = req.body || {};
    const normalized = normalizeServiceCategories(serviceCategories);

    if (!name || !type || !location) {
      return res.status(400).json({ error: 'Name, type, and location are required' });
    }

    const clinic = await prisma.clinic.create({
      data: { name, type, location, leads: 0, appointments: 0 },
    });

    if (Array.isArray(assignedUsers) && assignedUsers.length > 0) {
      await Promise.all(
        assignedUsers.map((userId: string) =>
          prisma.clientClinic.upsert({
            where: { userId_clinicId: { userId, clinicId: clinic.id } },
            update: {},
            create: { userId, clinicId: clinic.id, serviceCategories: normalized },
          }),
        ),
      );
    }

    const full = await prisma.clinic.findUnique({
      where: { id: clinic.id },
      include: { clientAssignments: true },
    });
    return res.status(201).json(full);
  } catch (err) {
    console.error('Error creating clinic:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Failed to create clinic' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/clinics/:id — PATCH / DELETE
// ────────────────────────────────────────────────────────────

router.patch('/clinics/:id', async (req: AuthedRequest, res: Response) => {
  try {
    const clinicId = req.params.id;
    const body = req.body || {};
    const { name, type, location, assignedUsers } = body;
    const hasServiceCategories = Object.prototype.hasOwnProperty.call(body, 'serviceCategories');
    const normalized = hasServiceCategories ? normalizeServiceCategories(body.serviceCategories) : null;

    const clinic = await prisma.clinic.findUnique({
      where: { id: clinicId },
      include: { clientAssignments: true },
    });
    if (!clinic) return res.status(404).json({ error: 'Clinic not found' });

    const inherited = normalizeServiceCategories(clinic.clientAssignments[0]?.serviceCategories ?? []);

    await prisma.clinic.update({
      where: { id: clinicId },
      data: {
        ...(name && { name }),
        ...(type && { type }),
        ...(location && { location }),
      },
    });

    if (assignedUsers !== undefined && Array.isArray(assignedUsers)) {
      const current = clinic.clientAssignments.map((ca) => ca.userId);
      for (const userId of current) {
        if (!assignedUsers.includes(userId)) {
          await prisma.clientClinic.deleteMany({ where: { userId, clinicId } });
        }
      }
      for (const userId of assignedUsers) {
        if (!current.includes(userId)) {
          await prisma.clientClinic.upsert({
            where: { userId_clinicId: { userId, clinicId } },
            update: hasServiceCategories ? { serviceCategories: normalized ?? [] } : {},
            create: { userId, clinicId, serviceCategories: normalized ?? inherited },
          });
        }
      }
    }

    if (hasServiceCategories) {
      await prisma.clientClinic.updateMany({
        where: { clinicId },
        data: { serviceCategories: normalized ?? [] },
      });
    }

    const full = await prisma.clinic.findUnique({
      where: { id: clinicId },
      include: { clientAssignments: true },
    });
    return res.json(full);
  } catch (err) {
    console.error('Error updating clinic:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Failed to update clinic' });
  }
});

router.delete('/clinics/:id', async (req: AuthedRequest, res: Response) => {
  try {
    const clinicId = req.params.id;
    const clinic = await prisma.clinic.findUnique({ where: { id: clinicId } });
    if (!clinic) return res.status(404).json({ error: 'Clinic not found' });

    const result = await prisma.$transaction(async (tx) => {
      const gmb = await tx.gMBConnection.findUnique({ where: { clinicId } });
      if (gmb) {
        await tx.gMBData.deleteMany({ where: { gmbConnectionId: gmb.id } });
        await tx.gMBConnection.delete({ where: { id: gmb.id } });
      }
      await tx.clientClinic.deleteMany({ where: { clinicId } });
      await tx.weeklyAnalytics.deleteMany({ where: { clinicId } });
      return await tx.clinic.delete({ where: { id: clinicId } });
    });

    return res.json({ message: 'Clinic deleted successfully', clinic: result });
  } catch (err) {
    console.error('Error deleting clinic:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Failed to delete clinic' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/clinics/assign — POST / DELETE
// ────────────────────────────────────────────────────────────

router.post('/clinics/assign', async (req: AuthedRequest, res: Response) => {
  try {
    const { userId, clinicId, serviceCategories } = req.body || {};
    if (!userId || !clinicId) return res.status(400).json({ error: 'userId and clinicId are required' });

    const [user, clinic] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.clinic.findUnique({ where: { id: clinicId } }),
    ]);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (!clinic) return res.status(404).json({ error: 'Clinic not found' });

    const inherited = await prisma.clientClinic.findFirst({
      where: { clinicId },
      select: { serviceCategories: true },
      orderBy: { assignedAt: 'asc' },
    });
    const normalized = normalizeServiceCategories(
      serviceCategories ?? inherited?.serviceCategories ?? [],
    );

    const assignment = await prisma.clientClinic.upsert({
      where: { userId_clinicId: { userId, clinicId } },
      update: { serviceCategories: normalized },
      create: { userId, clinicId, serviceCategories: normalized },
    });

    return res.status(201).json({ message: 'Clinic assigned successfully', assignment });
  } catch (err) {
    console.error('Error assigning clinic:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Failed to assign clinic' });
  }
});

router.delete('/clinics/assign', async (req: AuthedRequest, res: Response) => {
  try {
    const { userId, clinicId } = req.body || {};
    if (!userId || !clinicId) return res.status(400).json({ error: 'userId and clinicId are required' });

    const existing = await prisma.clientClinic.findUnique({
      where: { userId_clinicId: { userId, clinicId } },
    });
    if (!existing) return res.status(404).json({ error: 'Assignment not found' });

    await prisma.clientClinic.delete({ where: { userId_clinicId: { userId, clinicId } } });
    return res.json({ message: 'Clinic unassigned successfully' });
  } catch (err) {
    console.error('Error removing assignment:', err);
    return res.status(500).json({ error: err instanceof Error ? err.message : 'Failed to remove assignment' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/stats/command-center — GET
// ────────────────────────────────────────────────────────────

function isoWeek(date: Date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDays = (date.getTime() - firstDayOfYear.getTime()) / 86_400_000;
  return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
}

router.get('/stats/command-center', async (_req, res: Response) => {
  try {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    const currentWeek = isoWeek(now);
    const lastWeek = currentWeek - 1;
    const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const lastMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;

    const [thisWeekData, lastWeekData, thisMonthData, lastMonthData, allClinics, recentUsers, recentClinics] =
      await Promise.all([
        prisma.weeklyAnalytics.findMany({
          where: { year: currentYear, month: currentMonth, weekNumber: currentWeek },
          include: { clinic: true },
        }),
        prisma.weeklyAnalytics.findMany({
          where: {
            OR: [
              { year: currentYear, month: currentMonth, weekNumber: lastWeek },
              { year: currentYear, month: lastMonth, weekNumber: lastWeek },
            ],
          },
        }),
        prisma.weeklyAnalytics.findMany({
          where: { year: currentYear, month: currentMonth },
          include: { clinic: true },
        }),
        prisma.weeklyAnalytics.findMany({ where: { year: lastMonthYear, month: lastMonth } }),
        prisma.clinic.findMany({ select: { id: true, name: true } }),
        prisma.user.findMany({
          orderBy: { createdAt: 'desc' },
          take: 5,
          select: { name: true, email: true, createdAt: true, role: true },
        }),
        prisma.clinic.findMany({
          orderBy: { updatedAt: 'desc' },
          take: 5,
          select: { name: true, location: true, updatedAt: true, createdAt: true },
        }),
      ]);

    const sum = (rows: typeof thisWeekData, key: keyof (typeof thisWeekData)[number]) =>
      rows.reduce((s, d) => s + ((d[key] as number) || 0), 0);

    const weeklyPatients = sum(thisWeekData, 'patientCount');
    const lastWeekPatients = sum(lastWeekData, 'patientCount');
    const weeklyPatientsTrend =
      lastWeekPatients > 0 ? Math.round(((weeklyPatients - lastWeekPatients) / lastWeekPatients) * 100) : 0;

    const weeklyMetaSpend = sum(thisWeekData, 'metaAdSpend');
    const weeklyGoogleSpend = sum(thisWeekData, 'googleTotalCost');

    const monthlyPatients = sum(thisMonthData, 'patientCount');
    const lastMonthPatients = sum(lastMonthData, 'patientCount');
    const monthlyPatientsTrend =
      lastMonthPatients > 0
        ? Math.round(((monthlyPatients - lastMonthPatients) / lastMonthPatients) * 100)
        : 0;

    const monthlyMetaSpend = sum(thisMonthData, 'metaAdSpend');
    const monthlyGoogleSpend = sum(thisMonthData, 'googleTotalCost');

    const totalTraffic = sum(thisMonthData, 'totalTraffic');
    const callsRequested = sum(thisMonthData, 'callsRequested');
    const websiteVisits = sum(thisMonthData, 'websiteVisits');
    const directionClicks = sum(thisMonthData, 'directionClicks');

    const clinicMap = new Map<string, { name: string; location: string; patients: number; trend: number }>();
    for (const d of thisMonthData) {
      if (!d.clinic) continue;
      const existing = clinicMap.get(d.clinicId) || {
        name: d.clinic.name,
        location: d.clinic.location,
        patients: 0,
        trend: 0,
      };
      existing.patients += d.patientCount || 0;
      clinicMap.set(d.clinicId, existing);
    }
    for (const d of lastMonthData) {
      if (clinicMap.has(d.clinicId)) {
        const c = clinicMap.get(d.clinicId)!;
        const lastTotal = lastMonthData
          .filter((ld) => ld.clinicId === d.clinicId)
          .reduce((s, ld) => s + (ld.patientCount || 0), 0);
        if (lastTotal > 0) {
          c.trend = Math.round(((c.patients - lastTotal) / lastTotal) * 100);
        }
      }
    }
    const topClinics = Array.from(clinicMap.entries())
      .map(([id, data]) => ({ clinicId: id, ...data }))
      .sort((a, b) => b.patients - a.patients)
      .slice(0, 5);

    const alerts: { type: string; message: string; details: string }[] = [];
    const clinicsWithData = new Set(thisWeekData.map((d) => d.clinicId));
    const clinicsWithoutData = allClinics.filter((c) => !clinicsWithData.has(c.id));
    if (clinicsWithoutData.length > 0) {
      alerts.push({
        type: 'warning',
        message: `${clinicsWithoutData.length} clinic(s) missing data this week`,
        details: clinicsWithoutData.map((c) => c.name).join(', '),
      });
    }

    const clinicNames = allClinics.map((c) => c.name.toLowerCase());
    const duplicates = clinicNames.filter((n, i) => clinicNames.indexOf(n) !== i);
    if (duplicates.length > 0) {
      alerts.push({
        type: 'warning',
        message: `${duplicates.length} duplicate clinic name(s) detected`,
        details: [...new Set(duplicates)].join(', '),
      });
    }

    const recentActivity = [
      ...recentUsers.map((u) => ({
        type: 'user',
        action: 'User created',
        name: u.name,
        details: u.email,
        timestamp: u.createdAt,
      })),
      ...recentClinics.map((c) => ({
        type: 'clinic',
        action: c.createdAt.getTime() === c.updatedAt.getTime() ? 'Clinic created' : 'Clinic updated',
        name: c.name,
        details: c.location,
        timestamp: c.updatedAt,
      })),
    ]
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, 10);

    return res.json({
      weeklyPatients,
      weeklyPatientsTrend,
      monthlyPatients,
      monthlyPatientsTrend,
      weeklyAdSpend: {
        meta: Math.round(weeklyMetaSpend * 100) / 100,
        google: Math.round(weeklyGoogleSpend * 100) / 100,
        total: Math.round((weeklyMetaSpend + weeklyGoogleSpend) * 100) / 100,
      },
      monthlyAdSpend: {
        meta: Math.round(monthlyMetaSpend * 100) / 100,
        google: Math.round(monthlyGoogleSpend * 100) / 100,
        total: Math.round((monthlyMetaSpend + monthlyGoogleSpend) * 100) / 100,
      },
      topClinics,
      traffic: { total: totalTraffic, calls: callsRequested, websiteVisits, directionClicks },
      alerts,
      recentActivity,
    });
  } catch (err) {
    console.error('Error fetching command center data:', err);
    return res.status(500).json({ error: 'Failed to fetch command center data' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/stats/platform-health — GET (fully parallel)
// ────────────────────────────────────────────────────────────

router.get('/stats/platform-health', async (_req, res: Response) => {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const [
      totalUsers,
      totalClinics,
      totalPosts,
      totalNews,
      totalLeads,
      totalSubscribers,
      totalChatSessions,
      totalChatMessages,
      recentLeads24h,
      recentUsers7d,
      recentPosts7d,
      connectedClinics,
      activeSessions7d,
      recentLeadsFeed,
      recentUsersFeed,
      recentPostsFeed,
      recentChatsFeed,
      recentNewsFeed,
      recentSubsFeed,
      publishedPosts,
      draftPosts,
      publishedNews,
      newLeads,
      contactedLeads,
      qualifiedLeads,
      closedLeads,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.clinic.count(),
      prisma.post.count(),
      prisma.newsArticle.count(),
      prisma.contactLead.count(),
      prisma.newsletterSubscriber.count({ where: { active: true } }),
      prisma.chatSession.count(),
      prisma.chatMessage.count(),
      prisma.contactLead.count({ where: { createdAt: { gte: twentyFourHoursAgo } } }),
      prisma.user.count({ where: { createdAt: { gte: sevenDaysAgo } } }),
      prisma.post.count({ where: { publishedAt: { gte: sevenDaysAgo } } }),
      prisma.gMBConnection.count({ where: { connectionStatus: 'connected' } }),
      prisma.chatSession.count({ where: { startedAt: { gte: sevenDaysAgo } } }),
      prisma.contactLead.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, name: true, email: true, status: true, businessType: true, createdAt: true },
      }),
      prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, name: true, email: true, role: true, createdAt: true },
      }),
      prisma.post.findMany({
        orderBy: { publishedAt: 'desc' },
        take: 5,
        select: { id: true, title: true, publishedAt: true },
      }),
      prisma.chatSession.findMany({
        orderBy: { startedAt: 'desc' },
        take: 5,
        include: { _count: { select: { messages: true } } },
      }),
      prisma.newsArticle.findMany({
        orderBy: { publishedAt: 'desc' },
        take: 3,
        select: { id: true, title: true, publishedAt: true },
      }),
      prisma.newsletterSubscriber.findMany({
        orderBy: { subscribedAt: 'desc' },
        take: 3,
        where: { active: true },
        select: { id: true, email: true, source: true, subscribedAt: true },
      }),
      prisma.post.count({ where: { publishedAt: { not: null } } }),
      prisma.post.count({ where: { publishedAt: null } }),
      prisma.newsArticle.count({ where: { publishedAt: { not: null } } }),
      prisma.contactLead.count({ where: { status: 'new' } }),
      prisma.contactLead.count({ where: { status: 'contacted' } }),
      prisma.contactLead.count({ where: { status: 'qualified' } }),
      prisma.contactLead.count({ where: { status: 'closed' } }),
    ]);

    const activityFeed = [
      ...recentLeadsFeed.map((l) => ({
        type: 'lead' as const,
        icon: 'mail',
        title: `New lead: ${l.name}`,
        detail: l.businessType || l.email,
        status: l.status,
        timestamp: l.createdAt,
      })),
      ...recentUsersFeed.map((u) => ({
        type: 'user' as const,
        icon: 'user',
        title: `User registered: ${u.name}`,
        detail: u.role,
        status: 'active',
        timestamp: u.createdAt,
      })),
      ...recentPostsFeed.map((p) => ({
        type: 'post' as const,
        icon: 'file',
        title: `Blog: ${p.title?.slice(0, 50)}`,
        detail: p.publishedAt ? 'published' : 'draft',
        status: p.publishedAt ? 'published' : 'draft',
        timestamp: p.publishedAt || new Date(),
      })),
      ...recentChatsFeed.map((c) => ({
        type: 'chat' as const,
        icon: 'message',
        title: `Chat session (${c._count.messages} msgs)`,
        detail: c.summary?.slice(0, 60) || 'No summary',
        status: 'active',
        timestamp: c.startedAt,
      })),
      ...recentNewsFeed.map((n) => ({
        type: 'news' as const,
        icon: 'newspaper',
        title: `News: ${n.title?.slice(0, 50)}`,
        detail: n.publishedAt ? 'published' : 'draft',
        status: n.publishedAt ? 'published' : 'draft',
        timestamp: n.publishedAt || new Date(),
      })),
      ...recentSubsFeed.map((s) => ({
        type: 'subscriber' as const,
        icon: 'bell',
        title: `Newsletter subscriber`,
        detail: s.email,
        status: 'active',
        timestamp: s.subscribedAt,
      })),
    ]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 20);

    return res.json({
      counts: {
        users: totalUsers,
        clinics: totalClinics,
        posts: totalPosts,
        news: totalNews,
        leads: totalLeads,
        subscribers: totalSubscribers,
        chatSessions: totalChatSessions,
        chatMessages: totalChatMessages,
        connectedClinics,
      },
      recent: {
        leads24h: recentLeads24h,
        users7d: recentUsers7d,
        posts7d: recentPosts7d,
        sessions7d: activeSessions7d,
      },
      content: { publishedPosts, draftPosts, publishedNews },
      leadPipeline: { new: newLeads, contacted: contactedLeads, qualified: qualifiedLeads, closed: closedLeads },
      activityFeed,
    });
  } catch (err) {
    console.error('Error fetching platform health:', err);
    return res.status(500).json({ error: 'Failed to fetch platform health' });
  }
});

// ────────────────────────────────────────────────────────────
// /api/admin/chat-reports — GET (array of sessions with messages)
// ────────────────────────────────────────────────────────────

router.get('/chat-reports', async (_req, res: Response) => {
  try {
    const sessions = await prisma.chatSession.findMany({
      orderBy: { lastMessageAt: 'desc' },
      take: 100,
      include: {
        messages: { orderBy: { createdAt: 'asc' }, take: 30 },
      },
    });
    return res.json(
      sessions.map((s) => ({
        id: s.id,
        sessionKey: s.sessionKey,
        visitorId: s.visitorId,
        language: s.language,
        startedAt: s.startedAt,
        lastMessageAt: s.lastMessageAt,
        summary: s.summary,
        report: s.report,
        totalMessages: s.messages.length,
        messages: s.messages.map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          createdAt: m.createdAt,
        })),
      })),
    );
  } catch (err) {
    console.error('Admin chat reports error:', err);
    return res.json([]);
  }
});

// ────────────────────────────────────────────────────────────
// Convenience: /api/admin/leads + /api/admin/newsletter
// (kept for the dedicated sub-pages I added earlier)
// ────────────────────────────────────────────────────────────

router.get('/leads', async (_req, res: Response) => {
  try {
    const leads = await prisma.contactLead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 500,
    });
    return res.json({ leads });
  } catch (err) {
    console.error('Leads error:', err);
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

router.get('/newsletter', async (_req, res: Response) => {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { subscribedAt: 'desc' },
      take: 500,
    });
    return res.json({ subscribers });
  } catch (err) {
    console.error('Newsletter list error:', err);
    return res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

export default router;
