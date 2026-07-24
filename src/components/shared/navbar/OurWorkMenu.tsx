'use client';

import { cn } from '@/utils/cn';
import CompanyMenuItemLink from './CompanyMenuItemLink';

interface MenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const leftColumnMenuItems: MenuItemProps[] = [
  {
    id: 'case-studies',
    href: '/case-study',
    title: 'Case Studies',
    description: 'Deep-dives into real SaaS video campaigns',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: 'success-stories',
    href: '/success-stories',
    title: 'Success Stories',
    description: 'How our clients grew signups & cut churn',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const rightColumnMenuItems: MenuItemProps[] = [
  {
    id: 'testimonials',
    href: '/testimonial',
    title: 'Client Reviews',
    description: 'What SaaS founders say about First Pixel',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    id: 'customers',
    href: '/customer',
    title: 'Customers & Logos',
    description: "Meet the SaaS teams we've partnered with",
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

const OurWorkMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          'fixed top-full left-1/2 z-40 h-4 w-full max-w-[800px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'ourwork-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="ourwork-mega-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'ourwork-mega-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[800px] rounded-[32px] border border-secondary/10 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <p className="mb-4 text-xs font-semibold text-secondary/40 uppercase tracking-wider">
            Our Work & Client Proof
          </p>
          <div className="grid grid-cols-2 gap-x-8 items-start">
            {/* left column — 2 items */}
            <ul id="ourwork-dropdown-left" className="space-y-1">
              {leftColumnMenuItems.map((item, index) => (
                <CompanyMenuItemLink
                  setMenuDropdownId={setMenuDropdownId}
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  showDivider={index !== leftColumnMenuItems.length - 1}
                />
              ))}
            </ul>

            {/* right column — 2 items */}
            <ul id="ourwork-dropdown-right" className="space-y-1">
              {rightColumnMenuItems.map((item, index) => (
                <CompanyMenuItemLink
                  setMenuDropdownId={setMenuDropdownId}
                  key={item.id}
                  href={item.href}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  showDivider={index !== rightColumnMenuItems.length - 1}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

OurWorkMenu.displayName = 'OurWorkMenu';
export default OurWorkMenu;
