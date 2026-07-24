'use client';
import {
  AnalyticsIcon,
  FeatureIcon,
  IntegrationIcon,
  ProcessICon,
  WhitePaperIcon,
  BrandKitIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg427 from '@public/images/ns-img-427.jpg';
import Image from 'next/image';
import PlatformMenuItemLink from './PlatformMenuItemLink';

export interface PlatformMenuItem {
  href: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const firstColumnItems: PlatformMenuItem[] = [
  {
    href: '/features',
    title: 'Fintech',
    description: 'Explainer videos for payments, banking, and trading SaaS.',
    Icon: FeatureIcon,
  },
  {
    href: '/features',
    title: 'DevTools',
    description: 'Product walkthroughs for developer-focused platforms.',
    Icon: IntegrationIcon,
  },
  {
    href: '/features',
    title: 'HR Tech',
    description: 'Onboarding and recruitment SaaS explained clearly.',
    Icon: ProcessICon,
  },
  {
    href: '/features',
    title: 'EdTech',
    description: 'LMS and learning platform demo videos that convert.',
    Icon: AnalyticsIcon,
  },
];

const secondColumnItems: PlatformMenuItem[] = [
  {
    href: '/features',
    title: 'HealthTech',
    description: 'Telemedicine and clinical SaaS explainer videos.',
    Icon: WhitePaperIcon,
  },
  {
    href: '/features',
    title: 'E-commerce',
    description: 'Inventory and merchant platform demo videos.',
    Icon: BrandKitIcon,
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
          'fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent lg:w-[970px]',
          menuDropdownId === 'expertise-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="expertise-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-10 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 transition-all duration-300 lg:w-[820px] xl:block dark:border-white/10',
          menuDropdownId === 'expertise-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          {/* First column — SaaS verticals */}
          <div className="col-span-5 space-y-3">
            <p className="text-tagline-2 text-secondary/50 mb-3 font-medium uppercase tracking-wider">Industries</p>
            {firstColumnItems.map((item) => (
              <PlatformMenuItemLink key={item.title} {...item} setMenuDropdownId={setMenuDropdownId} />
            ))}
          </div>
          <div className="col-span-3 space-y-3">
            <p className="text-tagline-2 text-secondary/50 mb-3 font-medium uppercase tracking-wider">More</p>
            {secondColumnItems.map((item) => (
              <PlatformMenuItemLink key={item.title} {...item} setMenuDropdownId={setMenuDropdownId} />
            ))}
          </div>
          <div className="col-span-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 p-5 text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold text-white">
                SaaS Vertical Experts
              </span>
              <h4 className="mt-3 text-xl font-extrabold text-white">50+ SaaS Launches</h4>
              <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                From Fintech to DevTools, we know how to translate complex software into high-converting video stories.
              </p>
            </div>
            <a href="/use-case" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-white hover:underline">
              Explore Industry Work →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpertiseMenu.displayName = 'ExpertiseMenu';
export default ExpertiseMenu;
