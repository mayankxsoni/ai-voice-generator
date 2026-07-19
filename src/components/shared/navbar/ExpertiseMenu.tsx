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
          <div className="col-span-4">
            <figure className="mb-2.5 w-full max-w-full overflow-hidden rounded-xl">
              <Image src={nsImg427} alt="SaaS Expertise" className="h-full w-full rounded-xl object-cover" />
            </figure>
            <p className="text-tagline-2 text-secondary/70 mt-2">
              We know every SaaS vertical — and how to make audiences understand your product instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ExpertiseMenu.displayName = 'ExpertiseMenu';
export default ExpertiseMenu;
