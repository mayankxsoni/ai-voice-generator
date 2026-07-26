import { db } from '@/db';
import { adminUsers } from '@/db/schema';
import { getCurrentUser } from '@/lib/auth';
import { formatDateTime } from '@/lib/format';
import { asc } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { deleteUserAction } from '../../actions/users';
import ConfirmSubmit from '../../components/ConfirmSubmit';
import NewUserForm from '../../components/NewUserForm';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
  const actor = await getCurrentUser();
  if (!actor) {
    redirect('/admin/login');
  }
  // Editors can manage content but not other people's access.
  if (actor.role !== 'owner') {
    redirect('/admin');
  }

  const users = await db.select().from(adminUsers).orderBy(asc(adminUsers.id));
  const ownerCount = users.filter((u) => u.role === 'owner').length;

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Admin users</h1>
          <p>Who can sign in to this panel.</p>
        </div>
      </div>

      <div className="admin-grid-2">
        <section className="admin-card">
          <div className="admin-card-head">
            <h2>Accounts</h2>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Last login</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const isSelf = user.id === actor.id;
                  const isLastOwner = user.role === 'owner' && ownerCount <= 1;
                  return (
                    <tr key={user.id}>
                      <td>
                        <span className="admin-cell-title">{user.name}</span>
                        <span className="admin-cell-sub">{user.email}</span>
                      </td>
                      <td>
                        <span className={`admin-badge admin-badge-${user.role}`}>{user.role}</span>
                      </td>
                      <td style={{ color: 'var(--admin-muted)', fontSize: 12 }}>
                        {user.lastLoginAt ? formatDateTime(user.lastLoginAt) : 'Never'}
                      </td>
                      <td>
                        <div className="admin-row-actions">
                          {isSelf || isLastOwner ? (
                            <span className="admin-cell-sub" style={{ fontSize: 12 }}>
                              {isSelf ? 'You' : 'Last owner'}
                            </span>
                          ) : (
                            <form action={deleteUserAction}>
                              <input type="hidden" name="id" value={user.id} />
                              <ConfirmSubmit
                                className="admin-btn admin-btn-danger admin-btn-sm"
                                message={`Remove ${user.name}'s access?`}>
                                Remove
                              </ConfirmSubmit>
                            </form>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-card admin-card-pad">
          <h2 style={{ marginBottom: 14 }}>Add an admin</h2>
          <NewUserForm />
        </section>
      </div>
    </>
  );
}
