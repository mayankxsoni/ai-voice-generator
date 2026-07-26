'use server';

import { db } from '@/db';
import { posts } from '@/db/schema';
import { requireUser } from '@/lib/auth';
import { slugify } from '@/lib/slugify';
import { and, eq, ne } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export type PostFormState = { error?: string };

const readForm = (formData: FormData) => ({
  title: String(formData.get('title') ?? '').trim(),
  slug: String(formData.get('slug') ?? '').trim(),
  description: String(formData.get('description') ?? '').trim(),
  content: String(formData.get('content') ?? ''),
  tag: String(formData.get('tag') ?? '').trim(),
  author: String(formData.get('author') ?? '').trim(),
  authorImage: String(formData.get('authorImage') ?? '').trim(),
  thumbnail: String(formData.get('thumbnail') ?? '').trim(),
  readTime: String(formData.get('readTime') ?? '').trim(),
  publishDate: String(formData.get('publishDate') ?? '').trim(),
  status: (String(formData.get('status') ?? 'draft') === 'published' ? 'published' : 'draft') as 'draft' | 'published',
  featured: formData.get('featured') === 'on',
});

/** Refresh every public surface that lists or renders posts. */
const revalidateBlog = (slug?: string) => {
  revalidatePath('/blog');
  revalidatePath('/admin/posts');
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
};

async function slugTaken(slug: string, exceptId?: number) {
  const clash = await db
    .select({ id: posts.id })
    .from(posts)
    .where(exceptId ? and(eq(posts.slug, slug), ne(posts.id, exceptId)) : eq(posts.slug, slug))
    .limit(1);
  return clash.length > 0;
}

export async function createPostAction(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  await requireUser();
  const values = readForm(formData);

  if (!values.title) {
    return { error: 'Title is required.' };
  }

  const slug = slugify(values.slug || values.title);
  if (!slug) {
    return { error: 'Could not build a URL slug from that title — enter one manually.' };
  }
  if (await slugTaken(slug)) {
    return { error: `The slug "${slug}" is already used by another post.` };
  }

  await db.insert(posts).values({
    ...values,
    slug,
    publishDate: values.publishDate || formatToday(),
    updatedAt: new Date(),
  });

  revalidateBlog(slug);
  redirect('/admin/posts?created=1');
}

export async function updatePostAction(_prev: PostFormState, formData: FormData): Promise<PostFormState> {
  await requireUser();
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id)) {
    return { error: 'Missing post id.' };
  }

  const values = readForm(formData);
  if (!values.title) {
    return { error: 'Title is required.' };
  }

  const slug = slugify(values.slug || values.title);
  if (!slug) {
    return { error: 'Could not build a URL slug from that title — enter one manually.' };
  }
  if (await slugTaken(slug, id)) {
    return { error: `The slug "${slug}" is already used by another post.` };
  }

  const previous = (await db.select({ slug: posts.slug }).from(posts).where(eq(posts.id, id)).limit(1))[0];

  await db
    .update(posts)
    .set({ ...values, slug, updatedAt: new Date() })
    .where(eq(posts.id, id));

  revalidateBlog(slug);
  // A renamed post leaves a stale cache entry at the old path.
  if (previous && previous.slug !== slug) {
    revalidatePath(`/blog/${previous.slug}`);
  }
  redirect('/admin/posts?saved=1');
}

export async function deletePostAction(formData: FormData) {
  await requireUser();
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id)) {
    return;
  }

  const previous = (await db.select({ slug: posts.slug }).from(posts).where(eq(posts.id, id)).limit(1))[0];
  await db.delete(posts).where(eq(posts.id, id));

  revalidateBlog(previous?.slug);
  redirect('/admin/posts?deleted=1');
}

/** Quick publish/unpublish toggle from the list view. */
export async function togglePostStatusAction(formData: FormData) {
  await requireUser();
  const id = Number(formData.get('id'));
  if (!Number.isInteger(id)) {
    return;
  }

  const current = (
    await db.select({ status: posts.status, slug: posts.slug }).from(posts).where(eq(posts.id, id)).limit(1)
  )[0];
  if (!current) {
    return;
  }

  await db
    .update(posts)
    .set({ status: current.status === 'published' ? 'draft' : 'published', updatedAt: new Date() })
    .where(eq(posts.id, id));

  revalidateBlog(current.slug);
}

function formatToday() {
  return new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
