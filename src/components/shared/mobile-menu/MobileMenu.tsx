'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logoIcon from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen } = useMobileMenuContext();
  return (
    <aside
      className={cn(
        'scroll-bar fixed top-0 right-0 z-9999 h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <Image src={logoIcon} alt="NextSaaS" className="block w-full" />
              <Image src={logoDark} alt="NextSaaS" className="hidden w-full" />
            </figure>
          </Link>
          {/* close btn  */}
          <MenuCloseButton />
        </div>

        {/* menu items list  */}
        <div className="scroll-bar mt-6 h-[85vh] w-full overflow-x-hidden pb-10">
          <p className="text-secondary text-tagline-1 before:bg-stroke-10 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-['']">
            Menu
          </p>
          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem key={item.id} id={item.id} title={item.title} hasSubmenu={item.submenu.length > 0}>
                {/* submenu items list  */}
                <ul>
                  {item?.submenu?.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className="text-tagline-1 text-secondary ml-4 block py-2.5 text-left font-normal transition-all duration-200">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
