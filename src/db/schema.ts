import { boolean, index, integer, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';

/**
 * Admin accounts that can sign in to /admin.
 * Passwords are bcrypt hashes — never store plaintext.
 */
export const adminUsers = pgTable(
  'admin_users',
  {
    id: serial('id').primaryKey(),
    email: text('email').notNull(),
    name: text('name').notNull(),
    passwordHash: text('password_hash').notNull(),
    // 'owner' can manage other admins; 'editor' can only manage content.
    role: text('role', { enum: ['owner', 'editor'] })
      .notNull()
      .default('editor'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .$defaultFn(() => new Date()),
    lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
  },
  (table) => [uniqueIndex('admin_users_email_idx').on(table.email)],
);

/** Server-side sessions so a login can be revoked without rotating a global secret. */
export const sessions = pgTable(
  'sessions',
  {
    // Hash of the cookie token — a leaked DB row cannot be replayed as a cookie.
    tokenHash: text('token_hash').primaryKey(),
    userId: integer('user_id')
      .notNull()
      .references(() => adminUsers.id, { onDelete: 'cascade' }),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => [index('sessions_user_id_idx').on(table.userId)],
);

/** Blog posts. Mirrors the markdown frontmatter the site already renders. */
export const posts = pgTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    slug: text('slug').notNull(),
    title: text('title').notNull(),
    description: text('description').notNull().default(''),
    content: text('content').notNull().default(''),
    tag: text('tag').notNull().default(''),
    author: text('author').notNull().default(''),
    authorImage: text('author_image').notNull().default(''),
    thumbnail: text('thumbnail').notNull().default(''),
    readTime: text('read_time').notNull().default(''),
    // Human-readable date the template prints verbatim, e.g. "Jan 28, 2025".
    publishDate: text('publish_date').notNull().default(''),
    status: text('status', { enum: ['draft', 'published'] })
      .notNull()
      .default('draft'),
    featured: boolean('featured').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .$defaultFn(() => new Date()),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => [uniqueIndex('posts_slug_idx').on(table.slug), index('posts_status_idx').on(table.status)],
);

/** Every submission from the public contact form. */
export const contactSubmissions = pgTable(
  'contact_submissions',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull().default(''),
    subject: text('subject').notNull().default(''),
    message: text('message').notNull(),
    status: text('status', { enum: ['new', 'read', 'archived'] })
      .notNull()
      .default('new'),
    createdAt: timestamp('created_at', { withTimezone: true })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => [index('contact_submissions_status_idx').on(table.status)],
);

export type AdminUser = typeof adminUsers.$inferSelect;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
