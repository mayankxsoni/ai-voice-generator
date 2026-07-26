import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { formatDateTime } from '@/lib/format';
import { desc, eq } from 'drizzle-orm';
import Link from 'next/link';
import { deleteSubmissionAction, setSubmissionStatusAction } from '../../actions/submissions';
import ConfirmSubmit from '../../components/ConfirmSubmit';

export const dynamic = 'force-dynamic';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'new', label: 'Unread' },
  { key: 'read', label: 'Read' },
  { key: 'archived', label: 'Archived' },
] as const;

export default async function SubmissionsPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const params = await searchParams;
  const status = ['new', 'read', 'archived'].includes(params.status ?? '')
    ? (params.status as 'new' | 'read' | 'archived')
    : 'all';

  const rows = await db
    .select()
    .from(contactSubmissions)
    .where(status === 'all' ? undefined : eq(contactSubmissions.status, status))
    .orderBy(desc(contactSubmissions.createdAt));

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Contact inbox</h1>
          <p>Every submission from the contact form on the website.</p>
        </div>
      </div>

      <div className="admin-filters">
        {FILTERS.map((filter) => (
          <Link
            key={filter.key}
            href={filter.key === 'all' ? '/admin/submissions' : `/admin/submissions?status=${filter.key}`}
            aria-current={status === filter.key}
            className="admin-filter">
            {filter.label}
          </Link>
        ))}
      </div>

      <div className="admin-card">
        {rows.length === 0 ? (
          <p className="admin-empty">
            Nothing here yet. Submissions from <Link href="/contact-us">/contact-us</Link> will appear automatically.
          </p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Subject</th>
                  <th>Status</th>
                  <th>Received</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link href={`/admin/submissions/${item.id}`} className="admin-cell-title">
                        {item.name}
                      </Link>
                      <span className="admin-cell-sub">{item.email}</span>
                    </td>
                    <td>
                      <span className="admin-cell-sub" style={{ color: 'var(--admin-text)' }}>
                        {item.subject || '—'}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-badge admin-badge-${item.status}`}>{item.status}</span>
                    </td>
                    <td style={{ color: 'var(--admin-muted)', fontSize: 12 }}>{formatDateTime(item.createdAt)}</td>
                    <td>
                      <div className="admin-row-actions">
                        <Link
                          href={`/admin/submissions/${item.id}`}
                          className="admin-btn admin-btn-secondary admin-btn-sm">
                          Open
                        </Link>
                        <form action={setSubmissionStatusAction}>
                          <input type="hidden" name="id" value={item.id} />
                          <input type="hidden" name="status" value={item.status === 'archived' ? 'read' : 'archived'} />
                          <button type="submit" className="admin-btn admin-btn-secondary admin-btn-sm">
                            {item.status === 'archived' ? 'Restore' : 'Archive'}
                          </button>
                        </form>
                        <form action={deleteSubmissionAction}>
                          <input type="hidden" name="id" value={item.id} />
                          <ConfirmSubmit
                            className="admin-btn admin-btn-danger admin-btn-sm"
                            message={`Delete the enquiry from ${item.name}? This cannot be undone.`}>
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
