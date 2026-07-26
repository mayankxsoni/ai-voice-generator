import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

/**
 * True when a Postgres connection string is available.
 *
 * The site is designed to boot without one: the blog falls back to the markdown
 * files in src/data/blogs and the admin panel shows a setup screen. That keeps a
 * deploy with no database configured from taking the public site down.
 */
export const isDatabaseConfigured = Boolean(process.env.DATABASE_URL?.trim());

type Db = NodePgDatabase<typeof schema>;

// Next.js dev reloads modules on every edit; cache the pool so we don't leak
// connections. Serverless reuses warm instances, so a small pool is right —
// use a pooled connection string (Neon/Supabase pgBouncer) in production.
const globalForDb = globalThis as unknown as { __pgPool?: Pool; __db?: Db };

function connect(): Db {
  if (!isDatabaseConfigured) {
    throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local and point it at your Postgres database.');
  }

  const url = process.env.DATABASE_URL as string;
  const pool =
    globalForDb.__pgPool ??
    new Pool({
      connectionString: url,
      max: 5,
      // Managed Postgres (Neon, Supabase, Vercel) terminates TLS with its own CA.
      ssl: /localhost|127\.0\.0\.1/.test(url) ? false : { rejectUnauthorized: false },
    });

  const instance = globalForDb.__db ?? drizzle(pool, { schema });

  if (process.env.NODE_ENV !== 'production') {
    globalForDb.__pgPool = pool;
    globalForDb.__db = instance;
  }

  return instance;
}

/**
 * Connects on first use rather than at import time, so a module that merely
 * imports `db` is safe even when no database is configured. Callers that might
 * run without one should check `isDatabaseConfigured` first.
 */
export const db = new Proxy({} as Db, {
  get(_target, prop, receiver) {
    const value = Reflect.get(connect() as object, prop, receiver);
    return typeof value === 'function' ? value.bind(connect()) : value;
  },
});

export { schema };
