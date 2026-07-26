'use server';

import { db } from '@/db';
import { adminUsers } from '@/db/schema';
import { hashPassword, requireOwner, requireUser, verifyPassword } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export type UserFormState = { error?: string; success?: string };

const MIN_PASSWORD = 10;

export async function createUserAction(_prev: UserFormState, formData: FormData): Promise<UserFormState> {
  await requireOwner();

  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  const password = String(formData.get('password') ?? '');
  const role = String(formData.get('role') ?? 'editor') === 'owner' ? 'owner' : 'editor';

  if (!name || !email) {
    return { error: 'Name and email are required.' };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { error: 'Enter a valid email address.' };
  }
  if (password.length < MIN_PASSWORD) {
    return { error: `Password must be at least ${MIN_PASSWORD} characters.` };
  }

  const existing = await db.select({ id: adminUsers.id }).from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  if (existing.length) {
    return { error: 'An admin with that email already exists.' };
  }

  await db.insert(adminUsers).values({ name, email, role, passwordHash: await hashPassword(password) });

  revalidatePath('/admin/users');
  return { success: `${name} can now sign in.` };
}

export async function deleteUserAction(formData: FormData) {
  const actor = await requireOwner();
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id)) {
    return;
  }

  // Deleting yourself would lock you out mid-session.
  if (id === actor.id) {
    return;
  }

  // Never remove the last owner — that would leave nobody able to manage admins.
  const owners = await db.select({ id: adminUsers.id }).from(adminUsers).where(eq(adminUsers.role, 'owner'));
  const target = (await db.select().from(adminUsers).where(eq(adminUsers.id, id)).limit(1))[0];
  if (!target) {
    return;
  }
  if (target.role === 'owner' && owners.length <= 1) {
    return;
  }

  await db.delete(adminUsers).where(eq(adminUsers.id, id));
  revalidatePath('/admin/users');
}

export async function changePasswordAction(_prev: UserFormState, formData: FormData): Promise<UserFormState> {
  const actor = await requireUser();

  const current = String(formData.get('currentPassword') ?? '');
  const next = String(formData.get('newPassword') ?? '');
  const confirm = String(formData.get('confirmPassword') ?? '');

  if (next.length < MIN_PASSWORD) {
    return { error: `New password must be at least ${MIN_PASSWORD} characters.` };
  }
  if (next !== confirm) {
    return { error: 'New passwords do not match.' };
  }

  const user = (await db.select().from(adminUsers).where(eq(adminUsers.id, actor.id)).limit(1))[0];
  if (!user || !(await verifyPassword(current, user.passwordHash))) {
    return { error: 'Current password is incorrect.' };
  }

  await db
    .update(adminUsers)
    .set({ passwordHash: await hashPassword(next) })
    .where(eq(adminUsers.id, actor.id));
  return { success: 'Password updated.' };
}
