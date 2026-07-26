/**
 * Create (or reset the password of) an admin account.
 *
 *   npm run admin:create -- <email> <password> [name] [owner|editor]
 */
import './load-env';
import bcrypt from 'bcryptjs';
import { Pool } from 'pg';

async function main() {
  const [email, password, name = 'Admin', role = 'owner'] = process.argv.slice(2);

  if (!email || !password) {
    throw new Error('Usage: npm run admin:create -- <email> <password> [name] [owner|editor]');
  }
  if (password.length < 10) {
    throw new Error('Password must be at least 10 characters.');
  }
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: /localhost|127\.0\.0\.1/.test(process.env.DATABASE_URL) ? false : { rejectUnauthorized: false },
  });

  await pool.query(
    `INSERT INTO admin_users (email, name, password_hash, role, created_at)
     VALUES ($1, $2, $3, $4, now())
     ON CONFLICT (email) DO UPDATE SET
       password_hash = excluded.password_hash,
       name = excluded.name,
       role = excluded.role`,
    [email.toLowerCase(), name, bcrypt.hashSync(password, 12), role === 'owner' ? 'owner' : 'editor'],
  );

  // eslint-disable-next-line no-console
  console.log(`Admin ready: ${email.toLowerCase()} (${role}). Sign in at /admin/login`);

  await pool.end();
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
