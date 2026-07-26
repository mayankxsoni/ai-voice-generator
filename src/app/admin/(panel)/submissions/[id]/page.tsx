import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { formatDateTime } from '@/lib/format';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { deleteSubmissionAction, setSubmissionStatusAction } from '../../../actions/submissions';
import ConfirmSubmit from '../../../components/ConfirmSubmit';
import MarkRead from '../../../components/MarkRead';

export const dynamic = 'force-dynamic';

export default async function SubmissionPage({ params }: { params: Promise<{ id: string }> }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    notFound();
  }

  const item = (await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id)).limit(1))[0];
  if (!item) {
    notFound();
  }

  const replySubject = item.subject ? `Re: ${item.subject}` : 'Re: your enquiry';

  return (
    <>
      {/* opening the page marks it read */}
      <MarkRead id={item.id} />
      <div className="admin-page-head">
        <div>
          <h1>{item.subject || 'Contact enquiry'}</h1>
          <p>
            From {item.name} · {formatDateTime(item.createdAt)}
          </p>
        </div>
        <div className="admin-actions">
          <a
            href={`mailto:${item.email}?subject=${encodeURIComponent(replySubject)}`}
            className="admin-btn admin-btn-primary">
            Reply by email
          </a>
          <Link href="/admin/submissions" className="admin-btn admin-btn-secondary">
            Back to inbox
          </Link>
        </div>
      </div>

      <div className="admin-grid-2">
        <section className="admin-card admin-card-pad admin-form">
          <h2>Message</h2>
          <div className="admin-message">{item.message}</div>
        </section>

        <section className="admin-card admin-card-pad admin-form">
          <h2>Contact details</h2>
          <dl className="admin-definition">
            <dt>Name</dt>
            <dd>{item.name}</dd>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${item.email}`} className="admin-btn-link">
                {item.email}
              </a>
            </dd>
            <dt>Phone</dt>
            <dd>
              {item.phone ? (
                <a href={`tel:${item.phone.replace(/[^\d+]/g, '')}`} className="admin-btn-link">
                  {item.phone}
                </a>
              ) : (
                '—'
              )}
            </dd>
            <dt>Subject</dt>
            <dd>{item.subject || '—'}</dd>
            <dt>Status</dt>
            <dd>
              <span className={`admin-badge admin-badge-${item.status}`}>{item.status}</span>
            </dd>
            <dt>Received</dt>
            <dd>{formatDateTime(item.createdAt)}</dd>
          </dl>

          <div className="admin-actions">
            <form action={setSubmissionStatusAction}>
              <input type="hidden" name="id" value={item.id} />
              <input type="hidden" name="status" value={item.status === 'archived' ? 'read' : 'archived'} />
              <button type="submit" className="admin-btn admin-btn-secondary">
                {item.status === 'archived' ? 'Restore to inbox' : 'Archive'}
              </button>
            </form>
            <form action={deleteSubmissionAction}>
              <input type="hidden" name="id" value={item.id} />
              <ConfirmSubmit
                className="admin-btn admin-btn-danger"
                message={`Delete the enquiry from ${item.name}? This cannot be undone.`}>
                Delete
              </ConfirmSubmit>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
