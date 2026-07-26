import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local and point it at your Postgres database.');
}

/**
 * One pool per process. Next.js dev reloads modules on every edit, so the pool
 * is cached on globalThis to avoid leaking connections on each hot reload.
 * Serverless platforms reuse warm instances, so a small pool is the right size —
 * use a pooled connection string (Neon/Supabase pgBouncer) in production.
 */
const globalForDb = globalThis as unknown as { __pgPool?: Pool };

const pool =
  globalForDb.__pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    // Managed Postgres (Neon, Supabase, Vercel) terminates TLS with its own CA.
    ssl: /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL) ? false : { rejectUnauthorized: false },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.__pgPool = pool;
}

export const db = drizzle(pool, { schema });
export { schema };
