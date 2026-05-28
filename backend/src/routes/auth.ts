import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { hashPassword, verifyPassword } from '../lib/password.js';
import {
  isAdminEmail,
  normalizeRole,
  requireAuth,
  requireAdmin,
  signAuthToken,
  type AuthedRequest,
} from '../lib/auth.js';

const router = Router();

const cookieOptions = () => ({
  httpOnly: true,
  sameSite: 'lax' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/',
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

router.post('/login', async (req: Request, res: Response) => {
  const { email: rawEmail, password } = req.body || {};
  if (!rawEmail || typeof rawEmail !== 'string' || !password || typeof password !== 'string') {
    return res.status(400).json({ error: 'Email and password required' });
  }
  if (password.length > 128) {
    return res.status(400).json({ error: 'Password too long' });
  }

  const email = rawEmail.trim().toLowerCase().slice(0, 254);

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await verifyPassword(password, user.password || '');
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const role = isAdminEmail(user.email) ? 'admin' : normalizeRole(user.role);
    const token = signAuthToken({ id: user.id, role });

    res.cookie('auth_token', token, cookieOptions());
    return res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role,
        avatar: user.avatar || null,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Login failed' });
  }
});

router.get('/me', requireAuth, (req: AuthedRequest, res: Response) => {
  return res.json(req.user);
});

router.post('/logout', (_req: Request, res: Response) => {
  res.clearCookie('auth_token', { ...cookieOptions(), maxAge: undefined });
  return res.json({ success: true });
});

router.patch('/profile', requireAuth, async (req: AuthedRequest, res: Response) => {
  const { name, avatar } = req.body || {};
  const data: { name?: string; avatar?: string | null } = {};
  if (typeof name === 'string' && name.trim().length > 0) data.name = name.trim().slice(0, 120);
  if (avatar === null || typeof avatar === 'string') data.avatar = avatar || null;

  if (Object.keys(data).length === 0) {
    return res.status(400).json({ error: 'No valid fields to update' });
  }

  try {
    const updated = await prisma.user.update({
      where: { id: req.user!.id },
      data,
    });
    return res.json({
      id: updated.id,
      email: updated.email,
      name: updated.name,
      role: normalizeRole(updated.role),
      avatar: updated.avatar || null,
    });
  } catch (err) {
    console.error('Profile update error:', err);
    return res.status(500).json({ error: 'Failed to update profile' });
  }
});

router.get('/password', requireAuth, async (req: AuthedRequest, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  return res.json({
    hasPassword: !!user?.password,
    role: normalizeRole(user?.role),
  });
});

router.patch('/password', requireAuth, async (req: AuthedRequest, res: Response) => {
  const { currentPassword, newPassword, confirmPassword } = req.body || {};
  if (!currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ error: 'All password fields are required' });
  }
  if (newPassword.length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters' });
  }
  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: 'New password and confirmation do not match' });
  }
  if (newPassword.length > 128) {
    return res.status(400).json({ error: 'Password too long' });
  }

  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (!user) return res.status(401).json({ error: 'User not found' });

  const ok = await verifyPassword(currentPassword, user.password || '');
  if (!ok) return res.status(400).json({ error: 'Current password is incorrect' });

  const newHash = await hashPassword(newPassword);
  await prisma.user.update({ where: { id: user.id }, data: { password: newHash } });

  return res.json({ message: 'Password updated successfully' });
});

router.post('/update-role', requireAdmin, async (req: AuthedRequest, res: Response) => {
  const { id, role } = req.body || {};
  if (!id || !role) return res.status(400).json({ error: 'id and role required' });

  const normalized = normalizeRole(role);
  try {
    const updated = await prisma.user.update({ where: { id }, data: { role: normalized } });
    return res.json({ id: updated.id, role: normalizeRole(updated.role) });
  } catch (err) {
    console.error('Update role error:', err);
    return res.status(500).json({ error: 'Failed to update role' });
  }
});

export default router;
