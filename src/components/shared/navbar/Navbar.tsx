'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/light-logo.svg';
import logoIcon from '@public/images/shared/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import ExpertiseMenu from './ExpertiseMenu';
import OurWorkMenu from './OurWorkMenu';
import ResourcesMenu from './ResourcesMenu';
import { mobileMenuData } from './data';

// Services has no pages of its own — it scrolls to the services section on the home page.
const SERVICES_HREF = '/#services';

const dropdownNavItems = [
  { label: 'Expertise', dataMenu: 'expertise-mega-menu', MenuComponent: ExpertiseMenu },
  { label: 'Our Work', dataMenu: 'ourwork-mega-menu', MenuComponent: OurWorkMenu },
  { label: 'Resources', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
];

const Navbar = ({ showTopNav }: { showTopNav: boolean }) => {
  const routePathName = usePathname();

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:max-w-[1290px]! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          showTopNav ? 'top-8 md:top-12 lg:top-15' : 'top-5',
          isScrolled && 'top-2!',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          {/* Glossy light pill wrapper */}
          <div className="rounded-full backdrop-blur-[20px]"
               style={{ background: 'rgba(255,255,255,0.85)', boxShadow: '0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)', border: '1px solid rgba(0,0,0,0.07)' }}>
            <div
              className={cn(
                'mx-auto flex items-center justify-between rounded-full px-2.5 py-2.5 transition-colors duration-500 xl:py-0',
                isScrolled && 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]',
              )}>
              <div className="flex items-center justify-center">
                <Link href="/" className="inline-flex items-center">
                  <span className="sr-only">Home</span>

                  <figure className="hidden lg:block lg:max-w-[180px]">
                    <Image src={mainLogo} alt="First Pixel" className="h-auto w-full" priority />
                  </figure>
                  <figure className="block max-w-[44px] lg:hidden">
                    <Image src={logoIcon} alt="First Pixel" className="block h-auto w-full" priority />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  <li className="relative py-2.5">
                    <Link
                      href={SERVICES_HREF}
                      className="text-tagline-1 hover:bg-secondary/5 text-secondary/80 hover:text-secondary flex items-center rounded-full px-4 py-2 font-normal transition-all duration-400">
                      Services
                    </Link>
                  </li>
                  {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                    <li
                      key={label}
                      className="group relative cursor-pointer py-2.5"
                      data-menu={dataMenu}
                      onMouseEnter={() => handleMenuHover(dataMenu)}>
                      <button
                        type="button"
                        className="text-tagline-1 hover:bg-secondary/5 text-secondary/80 flex items-center gap-1 rounded-full px-4 py-2 font-normal transition-all duration-400 hover:text-secondary">
                        <span>{label}</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                      <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="hidden items-center justify-center gap-2 xl:flex">
                {/* Pricing — outlined pill */}
                <Link
                  href="/pricing"
                  className="text-tagline-1 rounded-full border border-secondary/20 px-5 py-2.5 font-normal text-secondary/80 transition-all duration-300 hover:border-[#f97316] hover:text-[#f97316]">
                  Pricing
                </Link>

                {/* Schedule a call — dark filled pill */}
                <Link
                  href="/contact-us"
                  className="text-tagline-1 rounded-full bg-secondary px-5 py-2.5 font-normal text-accent transition-all duration-300 hover:bg-secondary/80">
                  Schedule a call
                </Link>
              </div>

              {/* mobile menu ham burger icon  */}
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
        {/* mobile menu component */}
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
