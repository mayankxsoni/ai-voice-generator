'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { FooterOneData } from '@/interface';
import lightLogo from '@public/images/shared/light-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '../navbar/data';
import FooterDivider from './FooterDivider';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="w-full bg-inherit px-4 pb-4">
      <div className="bg-ns-ivory rounded-2xl">
        <div className="main-container px-5">
          <div className="grid grid-cols-12 justify-between gap-x-0 gap-y-16 pt-16 pb-12 xl:pt-[90px]">
            <div className="col-span-12 xl:col-span-4">
              <RevealAnimation delay={0.3}>
                <div className="max-w-[306px]">
                  <figure>
                    <Image src={lightLogo} alt="First Pixel Logo" />
                  </figure>
                  <p className="text-secondary/60 text-tagline-1 mt-4 mb-7 font-normal">
                    We create SaaS explainer videos that drive signups, reduce churn, and make your product impossible to ignore.
                  </p>

                  {/* social icons  */}
                  <FooterSocial />
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 xl:col-span-8">
              {footerData?.map((item: FooterOneData, index: number) => (
                <div key={item.title} className="col-span-12 md:col-span-4">
                  <RevealAnimation delay={0.4 + 0.1 * index}>
                    <div className="space-y-8">
                      <p className="sm:text-heading-6 text-tagline-1 text-secondary font-normal">{item.title}</p>
                      <ul className="space-y-3 sm:space-y-5">
                        {item.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="footer-link text-secondary before:bg-secondary">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealAnimation>
                </div>
              ))}
            </div>
          </div>
          <div className="relative pt-[26px] pb-[100px] text-center">
            <FooterDivider />
            <RevealAnimation delay={0.7} offset={10} start="top 105%">
              <p className="text-tagline-1 text-secondary font-normal">
                Copyright &copy; First Pixel — SaaS Explainer Video Agency
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
