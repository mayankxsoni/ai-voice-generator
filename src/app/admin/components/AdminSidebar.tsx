'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { logoutAction } from '../actions/auth';

type Props = {
  user: { name: string; email: string; role: string };
  newSubmissions: number;
};

const links = [
  { href: '/admin', label: 'Dashboard', exact: true },
  { href: '/admin/posts', label: 'Blog posts' },
  { href: '/admin/submissions', label: 'Contact inbox', badge: 'submissions' as const },
  { href: '/admin/users', label: 'Admin users', ownerOnly: true },
  { href: '/admin/account', label: 'My account' },
];

const AdminSidebar = ({ user, newSubmissions }: Props) => {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => (exact ? pathname === href : pathname.startsWith(href));

  return (
    <aside className="admin-sidebar">
      <Link href="/admin" className="admin-brand">
        <span className="admin-brand-mark">FP</span>
        <span>
          First Pixel
          <span className="admin-brand-sub">Admin panel</span>
        </span>
      </Link>

      <nav className="admin-nav">
        <span className="admin-nav-label">Manage</span>
        {links
          .filter((link) => !link.ownerOnly || user.role === 'owner')
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href, link.exact) ? 'page' : undefined}
              className="admin-nav-link">
              <span>{link.label}</span>
              {link.badge === 'submissions' && newSubmissions > 0 && (
                <span className="admin-nav-count">{newSubmissions}</span>
              )}
            </Link>
          ))}

        <span className="admin-nav-label">Website</span>
        <a href="/" target="_blank" rel="noopener noreferrer" className="admin-nav-link">
          <span>View live site ↗</span>
        </a>
        <a href="/blog" target="_blank" rel="noopener noreferrer" className="admin-nav-link">
          <span>View blog ↗</span>
        </a>
      </nav>

      <div className="admin-sidebar-footer">
        <div className="admin-user">
          <div className="admin-user-name">{user.name}</div>
          <div className="admin-user-meta">{user.email}</div>
          <div className="admin-user-meta">
            <span className={`admin-badge admin-badge-${user.role}`}>{user.role}</span>
          </div>
        </div>
        <form action={logoutAction}>
          <button type="submit" className="admin-btn admin-btn-secondary admin-btn-sm" style={{ width: '100%' }}>
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
};

export default AdminSidebar;
