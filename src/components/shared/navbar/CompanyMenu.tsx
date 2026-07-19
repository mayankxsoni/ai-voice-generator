// crypto marketing company menu
'use client';
import {
  AboutIcon,
  CareerIcon,
  CaseStudyICon,
  CustomersIcon,
  ManifestoIcon,
  ServiceIcon,
  TeamIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
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
    id: 'about-us',
    href: '/about',
    title: 'About Us',
    description: 'See how others are using NextSaaS',
    icon: <AboutIcon className="size-5" />,
  },
  {
    id: 'services',
    href: '/services',
    title: 'Services',
    description: 'See how others are using NextSaaS',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'our-team',
    href: '/team',
    title: 'Our Team',
    description: 'Dynamic content solutions',
    icon: <TeamIcon className="size-5" />,
  },
  {
    id: 'career',
    href: '/career',
    title: 'Career',
    description: 'Free marketing templates',
    icon: <CareerIcon />,
  },
  {
    id: 'our-manifesto',
    href: '/our-manifesto',
    title: 'Our Manifesto',
    description: 'Our core values and principles',
    icon: <ManifestoIcon />,
  },
  {
    id: 'why-choose-us',
    href: '/why-choose-us',
    title: 'Why Choose Us',
    description: 'Our unique selling points and competitive advantages',
    icon: <WhyChooseUsIcon />,
  },
  {
    id: 'customers',
    href: '/customer',
    title: 'Customers',
    description: 'Schedule your demo today',
    icon: <CustomersIcon />,
  },
];

const CompanyMenu = ({
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
          menuDropdownId === 'company-mega-menu' ? 'pointer-events-auto! opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'border-stroke-10/80 ease absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[752px] md:gap-x-6 xl:flex',
          // when hover show the menu
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {/* left column menu items */}
        <ul id="product-dropdown-menu" className="flex-1 space-y-1">
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

        {/* right column menu items */}
        <div className="flex-1 space-y-[15px]">
          <ul id="product-dropdown-menu" className="flex-1 space-y-1">
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/use-case"
              title="Use Cases"
              description="See how others are using NextSaaS"
              icon={<UseCaseIcon />}
              showDivider={true}
            />

            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/case-study"
              title="Case Studies"
              description="Real-world examples of our work"
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/testimonial"
              title="Testimonials"
              description="What our customers say about us"
              icon={<TestimonialIcon />}
              showDivider={false}
            />
          </ul>
          <figure className="relative min-h-[220px] w-full max-w-full overflow-hidden rounded-[14px]">
            <Image src={nsImg420} alt="What's New" className="h-full w-full rounded-[14px] object-cover" />
          </figure>
        </div>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
