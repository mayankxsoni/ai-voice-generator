import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import ChangePasswordForm from '../../components/ChangePasswordForm';

export const dynamic = 'force-dynamic';

export default async function AccountPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/admin/login');
  }

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>My account</h1>
          <p>Signed in as {user.email}</p>
        </div>
      </div>

      <div className="admin-grid-2">
        <section className="admin-card admin-card-pad admin-form">
          <h2>Details</h2>
          <dl className="admin-definition">
            <dt>Name</dt>
            <dd>{user.name}</dd>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Role</dt>
            <dd>
              <span className={`admin-badge admin-badge-${user.role}`}>{user.role}</span>
            </dd>
          </dl>
        </section>

        <section className="admin-card admin-card-pad">
          <h2 style={{ marginBottom: 14 }}>Change password</h2>
          <ChangePasswordForm />
        </section>
      </div>
    </>
  );
}
