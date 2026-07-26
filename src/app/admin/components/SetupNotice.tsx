/**
 * Shown instead of the panel when no database is configured, so an unconfigured
 * deploy explains itself rather than throwing a 500.
 */
const SetupNotice = () => (
  <div className="admin-login">
    <div className="admin-login-card" style={{ maxWidth: 560 }}>
      <div className="admin-login-head">
        <h1>Database not configured</h1>
        <p>The admin panel needs a Postgres connection before you can sign in.</p>
      </div>

      <ol className="admin-form" style={{ paddingLeft: 18, gap: 10, listStyle: 'decimal' }}>
        <li>
          Create a Postgres database — <strong>Neon</strong>, <strong>Supabase</strong> and Vercel Postgres all have a
          free tier.
        </li>
        <li>
          Add its <strong>pooled</strong> connection string as <code>DATABASE_URL</code> in your Vercel project settings
          (Production, Preview and Development), or in <code>.env.local</code> for local development.
        </li>
        <li>
          Run the one-time setup:
          <pre className="admin-message" style={{ marginTop: 8, fontSize: 12 }}>
            {`npm run db:migrate
npm run db:import-blogs
npm run admin:create -- you@example.com 'your-password' 'Your Name' owner`}
          </pre>
        </li>
      </ol>

      <p className="admin-hint" style={{ marginTop: 16 }}>
        Until then the public blog keeps serving the markdown files in <code>src/data/blogs</code>, so the website is
        unaffected. Full instructions are in <code>ADMIN.md</code>.
      </p>
    </div>
  </div>
);

export default SetupNotice;
