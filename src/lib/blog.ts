import { db, isDatabaseConfigured } from '@/db';
import { posts } from '@/db/schema';
import type { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { desc, eq } from 'drizzle-orm';

/**
 * Posts come from Postgres when DATABASE_URL is set, and from the original
 * markdown files in src/data/blogs when it is not. The fallback exists so the
 * public blog keeps working on a deploy that has no database configured yet —
 * without it, /blog would render empty and every post URL would 404.
 */

/** Shape a DB row into exactly what the existing blog components expect. */
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

const markdownPosts = (): IBlogPost[] =>
  getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs').map((post) => ({
    ...post,
    featured: post.featured === true,
  }));

/** Every published post. Drafts never leave the admin panel. */
export async function getPublishedPosts(): Promise<IBlogPost[]> {
  if (!isDatabaseConfigured) return markdownPosts();

  const rows = await db.select().from(posts).where(eq(posts.status, 'published')).orderBy(desc(posts.createdAt));
  return rows.map(toBlogPost);
}

export async function getPublishedPostBySlug(slug: string): Promise<IBlogPost | null> {
  if (!isDatabaseConfigured) {
    return markdownPosts().find((post) => post.slug === slug) ?? null;
  }

  const row = (await db.select().from(posts).where(eq(posts.slug, slug)).limit(1))[0];
  if (!row || row.status !== 'published') return null;
  return toBlogPost(row);
}

export async function getPublishedSlugs(): Promise<string[]> {
  if (!isDatabaseConfigured) return markdownPosts().map((post) => post.slug);

  const rows = await db.select({ slug: posts.slug }).from(posts).where(eq(posts.status, 'published'));
  return rows.map((r) => r.slug);
}
