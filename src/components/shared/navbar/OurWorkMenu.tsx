'use client';
import {
  CaseStudyICon,
  CustomersIcon,
  TestimonialIcon,
  UseCaseIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import CompanyMenuItemLink from './CompanyMenuItemLink';
import nsImg420 from '@public/images/ns-img-420.jpg';
import Image from 'next/image';

interface MenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const workItems: MenuItemProps[] = [
  {
    id: 'case-studies',
    href: '/case-study',
    title: 'Case Studies',
    description: 'Deep-dives into real SaaS video campaigns we delivered',
    icon: <CaseStudyICon className="size-5" />,
  },
  {
    id: 'success-stories',
    href: '/success-stories',
    title: 'Success Stories',
    description: 'How our clients grew signups and cut churn with video',
    icon: <UseCaseIcon className="size-5" />,
  },
  {
    id: 'testimonials',
    href: '/testimonial',
    title: 'Testimonials',
    description: 'What SaaS founders say about working with First Pixel',
    icon: <TestimonialIcon className="size-5" />,
  },
  {
    id: 'customers',
    href: '/customer',
    title: 'Customers',
    description: "Meet the SaaS teams we've partnered with",
    icon: <CustomersIcon className="size-5" />,
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
          '0.3 ease ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[600px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'ourwork-mega-menu' ? 'pointer-events-auto! opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="ourwork-mega-menu"
        className={cn(
          'border-stroke-10/80 ease absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[620px] md:gap-x-6 xl:flex',
          menuDropdownId === 'ourwork-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <ul id="ourwork-dropdown" className="flex-1 space-y-1">
          {workItems.map((item, index) => (
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              key={item.id}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={item.icon}
              showDivider={index !== workItems.length - 1}
            />
          ))}
        </ul>
        <div className="hidden w-[180px] shrink-0 xl:flex flex-col justify-between rounded-[14px] bg-gradient-to-br from-primary-500 to-primary-600 p-4 text-white">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Case Studies</span>
            <p className="mt-1 text-xs font-bold text-white leading-snug">
              3x Average Conversion Lift
            </p>
          </div>
          <a href="/case-study" className="text-[11px] font-bold text-white hover:underline mt-4">
            View All Work →
          </a>
        </div>
      </div>
    </div>
  );
};

OurWorkMenu.displayName = 'OurWorkMenu';
export default OurWorkMenu;
