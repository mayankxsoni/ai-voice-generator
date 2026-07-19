// crypto marketing platform menu
'use client';
import {
  AnalyticsIcon,
  BrandKitIcon,
  DownloadIcon,
  FeatureIcon,
  IntegrationIcon,
  PressIcon,
  ProcessICon,
  SecurityIcon,
  WhitePaperIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg427 from '@public/images/ns-img-427.jpg';
import Image from 'next/image';

import LinkButton from '@/components/ui/button/Button';
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
    title: 'Features',
    description: 'Make cool SaaS experiences for your users!',
    Icon: FeatureIcon,
  },
  {
    href: '/integration',
    title: 'Integrations',
    description: 'Increase engagement and growth while reducing churn.',
    Icon: IntegrationIcon,
  },
  {
    href: '/process',
    title: 'Process',
    description: 'Unify data, operations, and insights into a single source of truth.',
    Icon: ProcessICon,
  },
  {
    href: '/press',
    title: 'Press',
    description: 'See what others are saying about us.',
    Icon: PressIcon,
  },
];

const secondColumnItems: PlatformMenuItem[] = [
  {
    href: '/analytics',
    title: 'Analytics',
    description: 'Guide users through seamless setup.',
    Icon: AnalyticsIcon,
  },
  {
    href: '/security',
    title: 'Security',
    description: 'Automate tasks and boost engagement.',
    Icon: SecurityIcon,
  },
  {
    href: '/whitepaper',
    title: 'Whitepaper',
    description: 'Store and manage data securely.',
    Icon: WhitePaperIcon,
  },
];

const thirdColumnItems: PlatformMenuItem[] = [
  {
    href: '/brandkit',
    title: 'Brandkit',
    description: 'Extend workflows with one-click app connections.',
    Icon: BrandKitIcon,
  },
  {
    href: '/download',
    title: 'Download',
    description: 'Scale fast with flexibility and performance combined.',
    Icon: DownloadIcon,
  },
];

// crypto marketing platform menu
const PlatformMenu = ({
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
          menuDropdownId === 'platform-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="platform-mega-menu"
        className={cn(
          'dark:bg-background-6 border-stroke-10 fixed top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 transition-all duration-300 lg:w-[970px] xl:block dark:border-white/10',
          // when hover show the menu
          menuDropdownId === 'platform-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 gap-x-8 gap-y-6">
          <div className="col-span-4 space-y-3">
            {firstColumnItems.map((item) => (
              <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
            ))}
          </div>
          <div className="col-span-4">
            <div className="space-y-3">
              {secondColumnItems.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
            <div className="mt-7">
              <LinkButton
                btnClass="btn-xl-v2 !border-0 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
                href="/signup ">
                Build overview
              </LinkButton>
            </div>
          </div>
          <div className="col-span-4">
            <figure className="mb-2.5 w-full max-w-full overflow-hidden rounded-xl">
              <Image src={nsImg427} alt="What's New" className="h-full w-full rounded-xl object-cover" />
            </figure>
            <div className="space-y-3">
              {thirdColumnItems.map((item) => (
                <PlatformMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlatformMenu.displayName = 'PlatformMenu';
export default PlatformMenu;
