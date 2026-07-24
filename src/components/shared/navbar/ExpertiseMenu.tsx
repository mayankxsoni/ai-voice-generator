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
    id: 'ai-ml',
    href: '/expertise/ai-ml',
    title: 'AI & ML',
    description: 'Autonomous agents, LLMs, and neural networks',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 010 3.182l-5.5 5.5a2.25 2.25 0 01-3.182 0l-5.5-5.5a2.25 2.25 0 010-3.182" />
      </svg>
    ),
  },
  {
    id: 'saas',
    href: '/expertise/saas',
    title: 'SaaS Platforms',
    description: 'B2B workflows, dashboards, and product tours',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925-3.546 5.974 5.974 0 00-4.133-1.486A5.974 5.974 0 008.304 8.49 4.5 4.5 0 002.25 15z" />
      </svg>
    ),
  },
  {
    id: 'fintech',
    href: '/expertise/fintech',
    title: 'FinTech',
    description: 'Payments, banking ledgers, and trading tools',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5pt18.75A2.25 2.25 0 0021 6.75H3A2.25 2.25 0 00.75 9v9A2.25 2.25 0 003 20.25h18A2.25 2.25 0 0020.25 18V9z" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    href: '/expertise/healthcare',
    title: 'Healthcare',
    description: 'Telemedicine, clinical workflows, and medtech',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
  },
];

const rightColumnMenuItems: MenuItemProps[] = [
  {
    id: 'edtech',
    href: '/expertise/edtech',
    title: 'Ed-Tech',
    description: 'LMS platforms, courseware, and learning tools',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    id: 'cybersecurity',
    href: '/expertise/cybersecurity',
    title: 'Cyber Security',
    description: 'Zero-trust, cloud security, and IAM platforms',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
      </svg>
    ),
  },
  {
    id: 'web3',
    href: '/expertise/web3',
    title: 'Web3 & Crypto',
    description: 'DeFi protocols, dApps, and blockchain tech',
    icon: (
      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

const ExpertiseMenu = ({
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
          menuDropdownId === 'expertise-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="expertise-mega-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'expertise-mega-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[800px] rounded-[32px] border border-secondary/10 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <p className="mb-4 text-xs font-semibold text-secondary/40 uppercase tracking-wider">
            SaaS Verticals & Expertise
          </p>
          <div className="grid grid-cols-2 gap-x-8 items-start">
            {/* left column — 4 items */}
            <ul id="expertise-dropdown-left" className="space-y-1">
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

            {/* right column — 3 items */}
            <ul id="expertise-dropdown-right" className="space-y-1">
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

ExpertiseMenu.displayName = 'ExpertiseMenu';
export default ExpertiseMenu;
