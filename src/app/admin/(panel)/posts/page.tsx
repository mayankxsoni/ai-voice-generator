import { db } from '@/db';
import { posts } from '@/db/schema';
import { formatDateTime } from '@/lib/format';
import { desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import { deletePostAction, togglePostStatusAction } from '../../actions/posts';
import ConfirmSubmit from '../../components/ConfirmSubmit';

export const dynamic = 'force-dynamic';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'published', label: 'Published' },
  { key: 'draft', label: 'Drafts' },
] as const;

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; created?: string; saved?: string; deleted?: string }>;
}) {
  const params = await searchParams;
  const status = params.status === 'published' || params.status === 'draft' ? params.status : 'all';

  const rows = await db
    .select()
    .from(posts)
    .where(status === 'all' ? undefined : eq(posts.status, status))
    .orderBy(desc(posts.updatedAt));

  const notice = params.created
    ? 'Post created.'
    : params.saved
      ? 'Changes saved.'
      : params.deleted
        ? 'Post deleted.'
        : null;

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Blog posts</h1>
          <p>Create, edit and publish everything that appears on /blog.</p>
        </div>
        <Link href="/admin/posts/new" className="admin-btn admin-btn-primary">
          New post
        </Link>
      </div>

      {notice && (
        <p className="admin-alert admin-alert-success" style={{ marginBottom: 16 }}>
          {notice}
        </p>
      )}

      <div className="admin-filters">
        {FILTERS.map((filter) => (
          <Link
            key={filter.key}
            href={filter.key === 'all' ? '/admin/posts' : `/admin/posts?status=${filter.key}`}
            aria-current={status === filter.key}
            className="admin-filter">
            {filter.label}
          </Link>
        ))}
      </div>

      <div className="admin-card">
        {rows.length === 0 ? (
          <p className="admin-empty">No posts here yet.</p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Tag</th>
                  <th>Status</th>
                  <th>Updated</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <Link href={`/admin/posts/${post.id}`} className="admin-cell-title">
                        {post.title}
                      </Link>
                      <span className="admin-cell-sub">/blog/{post.slug}</span>
                    </td>
                    <td>{post.tag || '—'}</td>
                    <td>
                      <span className={`admin-badge admin-badge-${post.status}`}>{post.status}</span>
                      {post.featured && (
                        <span className="admin-badge admin-badge-read" style={{ marginLeft: 6 }}>
                          featured
                        </span>
                      )}
                    </td>
                    <td style={{ color: 'var(--admin-muted)', fontSize: 12 }}>{formatDateTime(post.updatedAt)}</td>
                    <td>
                      <div className="admin-row-actions">
                        <form action={togglePostStatusAction}>
                          <input type="hidden" name="id" value={post.id} />
                          <button type="submit" className="admin-btn admin-btn-secondary admin-btn-sm">
                            {post.status === 'published' ? 'Unpublish' : 'Publish'}
                          </button>
                        </form>
                        <Link href={`/admin/posts/${post.id}`} className="admin-btn admin-btn-secondary admin-btn-sm">
                          Edit
                        </Link>
                        <form action={deletePostAction}>
                          <input type="hidden" name="id" value={post.id} />
                          <ConfirmSubmit
                            className="admin-btn admin-btn-danger admin-btn-sm"
                            message={`Delete "${post.title}"? This cannot be undone.`}>
                            Delete
                          </ConfirmSubmit>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
