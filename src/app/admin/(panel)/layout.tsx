import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';
import { getCurrentUser } from '@/lib/auth';
import { count, eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';
import AdminSidebar from '../components/AdminSidebar';

/**
 * Guards every signed-in admin screen. The middleware only checks that a
 * cookie exists; this is where the token is actually validated.
 */
export default async function PanelLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/admin/login');
  }

  const [{ value: newSubmissions }] = await db
    .select({ value: count() })
    .from(contactSubmissions)
    .where(eq(contactSubmissions.status, 'new'));

  return (
    <div className="admin-shell">
      <AdminSidebar user={user} newSubmissions={newSubmissions} />
      <main className="admin-main">{children}</main>
    </div>
  );
}
