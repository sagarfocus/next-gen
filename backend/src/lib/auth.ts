import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from './prisma.js';

const ADMIN_EMAILS = ['shree@focusyourfinance.com'];

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not set');
  return secret;
}

export function normalizeRole(role?: string | null): 'admin' | 'client' {
  return String(role || '').toLowerCase() === 'admin' ? 'admin' : 'client';
}

export function isAdminEmail(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

export function signAuthToken(payload: { id: string; role: string }, expiresIn: string = '7d') {
  return jwt.sign(payload, getJwtSecret(), { expiresIn } as jwt.SignOptions);
}

export function verifyAuthToken(token: string): { id: string; role: string } | null {
  try {
    return jwt.verify(token, getJwtSecret()) as { id: string; role: string };
  } catch {
    return null;
  }
}

export interface AuthedRequest extends Request {
  user?: { id: string; email: string; name: string; role: 'admin' | 'client'; avatar: string | null };
}

export async function requireAuth(req: AuthedRequest, res: Response, next: NextFunction) {
  const token = req.cookies?.auth_token;
  if (!token) return res.status(401).json({ error: 'Not authenticated' });

  const decoded = verifyAuthToken(token);
  if (!decoded?.id) return res.status(401).json({ error: 'Invalid token' });

  const dbUser = await prisma.user.findUnique({ where: { id: decoded.id } });
  if (!dbUser) return res.status(401).json({ error: 'User not found' });

  req.user = {
    id: dbUser.id,
    email: dbUser.email,
    name: dbUser.name,
    role: normalizeRole(dbUser.role),
    avatar: dbUser.avatar || null,
  };
  next();
}

export async function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction) {
  await requireAuth(req, res, () => {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }
    next();
  });
}
