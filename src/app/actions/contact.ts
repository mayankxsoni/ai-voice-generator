'use server';

import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export type ContactState = { error?: string; success?: string };

const MAX = { name: 120, email: 200, phone: 40, subject: 200, message: 5000 };

export async function submitContactAction(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('fullname') ?? '').trim();
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase();
  const phone = String(formData.get('number') ?? '').trim();
  const subject = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  // Honeypot: real users never see this field, bots fill everything in.
  if (String(formData.get('company') ?? '').trim()) {
    return { success: 'Thanks — your message has been sent.' };
  }

  if (!name || !email || !message) {
    return { error: 'Please fill in your name, email and message.' };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return { error: 'Please enter a valid email address.' };
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    phone.length > MAX.phone ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return { error: 'That message is too long — please shorten it and try again.' };
  }

  try {
    await db.insert(contactSubmissions).values({ name, email, phone, subject, message });
  } catch {
    return { error: 'Something went wrong saving your message. Please try again or email us directly.' };
  }

  revalidatePath('/admin/submissions');
  revalidatePath('/admin');

  return { success: "Thanks — we've got your message and will reply shortly." };
}
