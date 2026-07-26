'use server';

import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { requireUser } from '@/lib/auth';
import { and, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function setSubmissionStatusAction(formData: FormData) {
  await requireUser();
  const id = Number(formData.get('id'));
  const status = String(formData.get('status') ?? '');

  if (!Number.isInteger(id) || !['new', 'read', 'archived'].includes(status)) {
    return;
  }

  await db
    .update(contactSubmissions)
    .set({ status: status as 'new' | 'read' | 'archived' })
    .where(eq(contactSubmissions.id, id));

  revalidatePath('/admin/submissions');
  revalidatePath('/admin');
}

/** Flip a 'new' enquiry to 'read' when its detail page is opened. */
export async function markSubmissionReadAction(id: number) {
  await requireUser();
  if (!Number.isInteger(id)) {
    return;
  }

  await db
    .update(contactSubmissions)
    .set({ status: 'read' })
    .where(and(eq(contactSubmissions.id, id), eq(contactSubmissions.status, 'new')));

  revalidatePath('/admin/submissions');
  revalidatePath(`/admin/submissions/${id}`);
  revalidatePath('/admin');
}

export async function deleteSubmissionAction(formData: FormData) {
  await requireUser();
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id)) {
    return;
  }

  await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));

  revalidatePath('/admin/submissions');
  revalidatePath('/admin');
}
