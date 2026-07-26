/**
 * One-time import: move every markdown post in src/data/blogs into the DB.
 * Safe to re-run — posts are matched on slug and updated rather than duplicated.
 *
 *   npm run db:import-blogs
 */
import './load-env';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';
import { Pool } from 'pg';

const BLOG_DIR = path.join(process.cwd(), 'src', 'data', 'blogs');

const SQL = `
  INSERT INTO posts (slug, title, description, content, tag, author, author_image, thumbnail,
                     read_time, publish_date, status, featured, created_at, updated_at)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 'published', $11, now(), now())
  ON CONFLICT (slug) DO UPDATE SET
    title = excluded.title,
    description = excluded.description,
    content = excluded.content,
    tag = excluded.tag,
    author = excluded.author,
    author_image = excluded.author_image,
    thumbnail = excluded.thumbnail,
    read_time = excluded.read_time,
    publish_date = excluded.publish_date,
    featured = excluded.featured,
    updated_at = now()
`;

async function main() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL) ? false : { rejectUnauthorized: false },
  });

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const client = await pool.connect();
  let imported = 0;

  try {
    await client.query('BEGIN');
    for (const file of files) {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8');
      const { data, content } = matter(raw);

      await client.query(SQL, [
        file.replace(/\.md$/, ''),
        String(data.title ?? file.replace(/\.md$/, '')),
        String(data.description ?? ''),
        content,
        String(data.tag ?? ''),
        String(data.author ?? ''),
        String(data.authorImage ?? ''),
        String(data.thumbnail ?? ''),
        String(data.readTime ?? ''),
        String(data.publishDate ?? ''),
        data.featured === true,
      ]);
      imported += 1;
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }

  const { rows } = await pool.query<{ count: string }>('SELECT COUNT(*) AS count FROM posts');
  // eslint-disable-next-line no-console
  console.log(`Imported ${imported} markdown post(s). Posts table now holds ${rows[0].count}.`);

  await pool.end();
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error);
  process.exit(1);
});
