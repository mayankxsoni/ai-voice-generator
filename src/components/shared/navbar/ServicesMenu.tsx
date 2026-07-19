'use client';
import {
  FeatureIcon,
  IntegrationIcon,
  ProcessICon,
  ServiceIcon,
  PressIcon,
  BrandKitIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg420 from '@public/images/ns-img-420.jpg';
import Image from 'next/image';
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
    id: 'explainer-videos',
    href: '/services',
    title: 'Explainer Videos',
    description: '60–120s videos that convert SaaS visitors into signups',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'motion-graphics',
    href: '/services',
    title: 'Motion Graphics',
    description: 'Sleek, brand-matched animations for product walkthroughs',
    icon: <FeatureIcon className="size-5" />,
  },
  {
    id: 'script-writing',
    href: '/services',
    title: 'Script Writing',
    description: 'Conversion-focused scripts written by SaaS strategists',
    icon: <BrandKitIcon className="size-5" />,
  },
  {
    id: 'brand-videos',
    href: '/services',
    title: 'Brand Videos',
    description: 'Tell your company story and build investor confidence',
    icon: <IntegrationIcon className="size-5" />,
  },
];

const rightColumnMenuItems: MenuItemProps[] = [
  {
    id: 'social-cuts',
    href: '/services',
    title: 'Social Cuts',
    description: 'Short-form edits ready for LinkedIn, Twitter, and ads',
    icon: <ProcessICon className="size-5" />,
  },
  {
    id: 'our-process',
    href: '/process',
    title: 'Our Process',
    description: 'Discovery → Script → Animation → Delivery in 2 weeks',
    icon: <PressIcon className="size-5" />,
  },
];

const ServicesMenu = ({
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
          '0.3 ease ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[752px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'services-mega-menu' ? 'pointer-events-auto! opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="services-mega-menu"
        className={cn(
          'border-stroke-10/80 ease absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[752px] md:gap-x-6 xl:flex',
          menuDropdownId === 'services-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {/* left column */}
        <ul id="services-dropdown-left" className="flex-1 space-y-1">
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

        {/* right column */}
        <div className="flex-1 space-y-[15px]">
          <ul id="services-dropdown-right" className="flex-1 space-y-1">
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
          <figure className="relative min-h-[220px] w-full max-w-full overflow-hidden rounded-[14px]">
            <Image src={nsImg420} alt="First Pixel Services" className="h-full w-full rounded-[14px] object-cover" />
          </figure>
        </div>
      </div>
    </div>
  );
};

ServicesMenu.displayName = 'ServicesMenu';
export default ServicesMenu;
