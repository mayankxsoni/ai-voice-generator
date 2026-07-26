import { db } from '@/db';
import { adminUsers, sessions } from '@/db/schema';
import bcrypt from 'bcryptjs';
import { eq, lt } from 'drizzle-orm';
import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { SESSION_COOKIE } from './auth.shared';

export { SESSION_COOKIE };
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
const BCRYPT_ROUNDS = 12;

export const hashPassword = (plain: string) => bcrypt.hash(plain, BCRYPT_ROUNDS);
export const verifyPassword = (plain: string, hash: string) => bcrypt.compare(plain, hash);

/** Cookie holds the raw token; the DB only ever sees its SHA-256 digest. */
const hashToken = (token: string) => crypto.createHash('sha256').update(token).digest('hex');

export async function createSession(userId: number) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await db.insert(sessions).values({ tokenHash: hashToken(token), userId, expiresAt });
  // Opportunistic cleanup so expired rows don't accumulate.
  await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));

  const jar = await cookies();
  jar.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    expires: expiresAt,
  });
}

export async function destroySession() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (token) {
    await db.delete(sessions).where(eq(sessions.tokenHash, hashToken(token)));
  }
  jar.delete(SESSION_COOKIE);
}

/** Returns the signed-in admin, or null. Expired sessions are treated as signed out. */
export async function getCurrentUser() {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) {return null;}

  const rows = await db
    .select({
      id: adminUsers.id,
      email: adminUsers.email,
      name: adminUsers.name,
      role: adminUsers.role,
      expiresAt: sessions.expiresAt,
    })
    .from(sessions)
    .innerJoin(adminUsers, eq(sessions.userId, adminUsers.id))
    .where(eq(sessions.tokenHash, hashToken(token)))
    .limit(1);

  const row = rows[0];
  if (!row) {return null;}
  if (row.expiresAt.getTime() < Date.now()) {
    await db.delete(sessions).where(eq(sessions.tokenHash, hashToken(token)));
    return null;
  }

  return { id: row.id, email: row.email, name: row.name, role: row.role };
}

/** Use in every admin page/action. Throws rather than returning null so a
 *  forgotten check cannot silently expose data. */
export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {throw new Error('UNAUTHORIZED');}
  return user;
}

export async function requireOwner() {
  const user = await requireUser();
  if (user.role !== 'owner') {throw new Error('FORBIDDEN');}
  return user;
}
