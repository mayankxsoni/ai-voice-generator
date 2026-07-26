# Admin panel

Manage blog posts and contact-form enquiries at **`/admin`**.

## First run

You need a Postgres database. Any will do — Neon and Supabase both have a free tier,
and `brew services start postgresql@16` works for local development.

```bash
cp .env.example .env.local               # then set DATABASE_URL
npm run db:migrate                       # create the tables
npm run db:import-blogs                  # import src/data/blogs/*.md into the DB
npm run admin:create -- you@firstpixel.media 'a-strong-password' 'Your Name' owner
npm run dev                              # sign in at http://localhost:3000/admin/login
```

`npm run admin:create` is also how you reset a forgotten password — re-run it with
the same email and a new password.

## What you can do

| Screen | Path | What it does |
|---|---|---|
| Dashboard | `/admin` | Post and enquiry counts, latest activity |
| Blog posts | `/admin/posts` | Create, edit, delete, publish/unpublish, feature |
| Contact inbox | `/admin/submissions` | Read, archive, delete, reply by email |
| Admin users | `/admin/users` | Add/remove admins (owners only) |
| My account | `/admin/account` | Change your own password |

**Roles.** `owner` manages admin accounts as well as content. `editor` manages
content only and never sees the Admin users screen. The last remaining owner
cannot be deleted, and you cannot delete yourself.

**Drafts** are invisible to the public — excluded from `/blog` and their URL
renders the 404 page.

## How it fits together

- **Database** — Postgres via Drizzle ORM, connection string in `DATABASE_URL`.
- **Schema** — `src/db/schema.ts`. Migrations in `drizzle/`; after changing the
  schema run `npm run db:generate` then `npm run db:migrate`.
- **Auth** — bcrypt password hashes, server-side sessions in the `sessions`
  table, 7-day httpOnly cookie. The cookie holds a random token; the DB stores
  only its SHA-256 digest, so a database leak cannot be replayed as a login.
- **Route protection** — `src/middleware.ts` bounces anyone without a session
  cookie away from `/admin`. That is only a cheap edge check; every admin page
  and server action independently calls `requireUser()`.
- **Layouts** — public pages live under `src/app/(site)/` and get the marketing
  header/footer/chatbot. `/admin` sits outside that group with its own
  self-contained CSS (`src/app/admin/admin.css`), so the two cannot bleed into
  each other.
- **Public blog** — `/blog` and `/blog/[slug]` read published rows through
  `src/lib/blog.ts`. Both are `force-dynamic` so an edit in the panel shows up
  on the next request with no rebuild.
- **Contact form** — posts to the `submitContactAction` server action
  (`src/app/actions/contact.ts`), which validates, drops honeypot hits, and
  stores the row the inbox reads.

## Deploying to Vercel

1. Create a Postgres database (Neon, Supabase, or Vercel Postgres) and copy its
   **pooled** connection string — serverless functions open many short-lived
   connections, so the pgBouncer/pooler endpoint is the one you want.
2. Add it in Vercel under *Settings → Environment Variables* as `DATABASE_URL`,
   for Production, Preview and Development.
3. Point your local `.env.local` at the same database and run the one-time setup:

   ```bash
   npm run db:migrate
   npm run db:import-blogs
   npm run admin:create -- you@firstpixel.media 'a-strong-password' 'Your Name' owner
   ```

4. Push. The build reads `DATABASE_URL` and will fail loudly if it is missing,
   rather than deploying a site with an empty blog.

`/blog`, `/blog/[slug]` and every `/admin` route are `force-dynamic`, so they run
as serverless functions and always reflect the current database.

## The markdown files

`src/data/blogs/*.md` are no longer read at runtime; the database is the source
of truth. They are kept as a backup of the original import. Re-running
`scripts/import-blogs.ts` is safe — it matches on slug and updates rather than
duplicating.
