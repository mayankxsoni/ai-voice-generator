import { db } from '@/db';
import { posts } from '@/db/schema';
import type { IBlogPost } from '@/interface';
import { desc, eq } from 'drizzle-orm';

/** Shape the DB row into exactly what the existing blog components expect. */
const toBlogPost = (row: typeof posts.$inferSelect): IBlogPost => ({
  slug: row.slug,
  title: row.title,
  description: row.description,
  content: row.content,
  tag: row.tag,
  author: row.author,
  authorImage: row.authorImage,
  thumbnail: row.thumbnail,
  readTime: row.readTime,
  publishDate: row.publishDate,
  featured: row.featured,
});

/** Every published post, newest edit first. Drafts never leave the admin panel. */
export async function getPublishedPosts(): Promise<IBlogPost[]> {
  const rows = await db.select().from(posts).where(eq(posts.status, 'published')).orderBy(desc(posts.createdAt));
  return rows.map(toBlogPost);
}

export async function getPublishedPostBySlug(slug: string): Promise<IBlogPost | null> {
  const row = (await db.select().from(posts).where(eq(posts.slug, slug)).limit(1))[0];
  if (!row || row.status !== 'published') {return null;}
  return toBlogPost(row);
}

export async function getPublishedSlugs(): Promise<string[]> {
  const rows = await db.select({ slug: posts.slug }).from(posts).where(eq(posts.status, 'published'));
  return rows.map((r) => r.slug);
}
