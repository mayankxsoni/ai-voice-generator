import { Metadata } from 'next';
import { ReactNode } from 'react';
import './admin.css';

export const metadata: Metadata = {
  title: 'Admin — First Pixel',
  // The admin panel must never be indexed or previewed by crawlers.
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <div className="admin-root">{children}</div>;
}
