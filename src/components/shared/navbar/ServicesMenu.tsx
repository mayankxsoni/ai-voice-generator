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
    id: 'animated-explainer',
    href: '/services/animated-explainer',
    title: 'Animated Explainer Video',
    description: '60–120s videos that turn complex SaaS into instant clarity',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'product-launch',
    href: '/services/product-launch',
    title: 'Product Launch Videos',
    description: 'Build hype and drive signups on launch day',
    icon: <FeatureIcon className="size-5" />,
  },
  {
    id: 'app-demo',
    href: '/services/app-demo',
    title: 'App Demo Videos',
    description: 'Showcase your UI in action and reduce trial friction',
    icon: <IntegrationIcon className="size-5" />,
  },
  {
    id: 'feature-launch',
    href: '/services/feature-launch',
    title: 'Feature Launch Videos',
    description: 'Announce new features that actually drive adoption',
    icon: <BrandKitIcon className="size-5" />,
  },
];

const rightColumnMenuItems: MenuItemProps[] = [
  {
    id: 'product-demo',
    href: '/services/product-demo',
    title: 'Product Demo Videos',
    description: 'Replace live demos with a polished, always-on video',
    icon: <ProcessICon className="size-5" />,
  },
  {
    id: 'promo-ads',
    href: '/services/promo-ads',
    title: 'Animated Promo Video Ads',
    description: 'Short-form animated ads built for paid social channels',
    icon: <PressIcon className="size-5" />,
  },
  {
    id: 'ai-ads',
    href: '/services/ai-ads',
    title: 'AI Powered Video Ads',
    description: 'Scale ad creative with AI-assisted animation at speed',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'tutorial',
    href: '/services/tutorial',
    title: 'Tutorial Video',
    description: 'Onboard users faster with step-by-step visual guides',
    icon: <FeatureIcon className="size-5" />,
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
          'fixed top-full left-1/2 z-40 h-4 w-full max-w-[820px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'services-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="services-mega-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'services-mega-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[820px] rounded-[32px] border border-secondary/10 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <p className="mb-3 text-sm font-semibold text-secondary/40">Services</p>
          <div className="grid grid-cols-2 gap-x-6 items-start">
            {/* left column — 4 services */}
            <ul id="services-dropdown-left" className="space-y-1">
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

            {/* right column — 4 services */}
            <ul id="services-dropdown-right" className="space-y-1">
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

ServicesMenu.displayName = 'ServicesMenu';
export default ServicesMenu;
