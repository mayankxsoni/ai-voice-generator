'use server';

import { db } from '@/db';
import { adminUsers } from '@/db/schema';
import { createSession, destroySession, verifyPassword } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export type LoginState = { error?: string };

export async function loginAction(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  const password = String(formData.get('password') ?? '');
  const next = String(formData.get('next') ?? '/admin');

  if (!email || !password) {
    return { error: 'Enter your email and password.' };
  }

  const user = (await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1))[0];

  // Same message whether the email is unknown or the password is wrong, so the
  // form cannot be used to enumerate which admin emails exist.
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: 'Incorrect email or password.' };
  }

  await db.update(adminUsers).set({ lastLoginAt: new Date() }).where(eq(adminUsers.id, user.id));
  await createSession(user.id);

  // Only allow relative paths — an absolute URL here would be an open redirect.
  redirect(next.startsWith('/admin') ? next : '/admin');
}

export async function logoutAction() {
  await destroySession();
  redirect('/admin/login');
}
