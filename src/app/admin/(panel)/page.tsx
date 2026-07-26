import { db } from '@/db';
import { contactSubmissions, posts } from '@/db/schema';
import { count, desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import { formatDate } from '@/lib/format';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const [
    [{ value: totalPosts }],
    [{ value: publishedPosts }],
    [{ value: totalSubmissions }],
    [{ value: newSubmissions }],
    recentSubmissions,
    recentPosts,
  ] = await Promise.all([
    db.select({ value: count() }).from(posts),
    db.select({ value: count() }).from(posts).where(eq(posts.status, 'published')),
    db.select({ value: count() }).from(contactSubmissions),
    db.select({ value: count() }).from(contactSubmissions).where(eq(contactSubmissions.status, 'new')),
    db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)).limit(5),
    db
      .select({ id: posts.id, title: posts.title, status: posts.status, updatedAt: posts.updatedAt })
      .from(posts)
      .orderBy(desc(posts.updatedAt))
      .limit(5),
  ]);

  const stats = [
    {
      label: 'Total posts',
      value: totalPosts,
      hint: `${publishedPosts} published, ${totalPosts - publishedPosts} draft`,
    },
    { label: 'Published', value: publishedPosts, hint: 'Live on /blog' },
    { label: 'Contact submissions', value: totalSubmissions, hint: 'All time' },
    { label: 'Unread enquiries', value: newSubmissions, hint: newSubmissions ? 'Needs a reply' : 'All caught up' },
  ];

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Dashboard</h1>
          <p>Everything you can control on the website from here.</p>
        </div>
        <div className="admin-actions">
          <Link href="/admin/posts/new" className="admin-btn admin-btn-primary">
            New post
          </Link>
        </div>
      </div>

      <div className="admin-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-card admin-card-pad">
            <div className="admin-stat-label">{stat.label}</div>
            <div className="admin-stat-value">{stat.value}</div>
            <div className="admin-stat-hint">{stat.hint}</div>
          </div>
        ))}
      </div>

      <div className="admin-grid-2">
        <section className="admin-card">
          <div className="admin-card-head">
            <h2>Latest enquiries</h2>
            <Link href="/admin/submissions" className="admin-btn-link">
              View all
            </Link>
          </div>
          {recentSubmissions.length === 0 ? (
            <p className="admin-empty">No contact submissions yet.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <tbody>
                  {recentSubmissions.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Link href={`/admin/submissions/${item.id}`} className="admin-cell-title">
                          {item.name}
                        </Link>
                        <span className="admin-cell-sub">{item.subject || item.email}</span>
                      </td>
                      <td>
                        <span className={`admin-badge admin-badge-${item.status}`}>{item.status}</span>
                      </td>
                      <td style={{ color: 'var(--admin-muted)', fontSize: 12 }}>{formatDate(item.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="admin-card">
          <div className="admin-card-head">
            <h2>Recently edited posts</h2>
            <Link href="/admin/posts" className="admin-btn-link">
              View all
            </Link>
          </div>
          {recentPosts.length === 0 ? (
            <p className="admin-empty">No posts yet.</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <tbody>
                  {recentPosts.map((post) => (
                    <tr key={post.id}>
                      <td>
                        <Link href={`/admin/posts/${post.id}`} className="admin-cell-title">
                          {post.title}
                        </Link>
                      </td>
                      <td>
                        <span className={`admin-badge admin-badge-${post.status}`}>{post.status}</span>
                      </td>
                      <td style={{ color: 'var(--admin-muted)', fontSize: 12 }}>{formatDate(post.updatedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
