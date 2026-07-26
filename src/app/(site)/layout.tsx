import SiteChrome from '@/components/shared/SiteChrome';
import { ReactNode } from 'react';

/** Chrome for every public marketing page. Not applied to /admin. */
export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <SiteChrome>{children}</SiteChrome>;
}
