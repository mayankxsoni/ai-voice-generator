// crypto marketing plan and support menu
import {
  AffiliatePolicyIcon,
  AffiliateProgramIcon,
  GDPRIcon,
  LegalNoticeIcon,
  LoginIcon,
  PrivacyIcon,
  ReferralProgramIcon,
  RefundPolicyIcon,
  SignUpIcon,
  TermsConditionsIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import newArrowWhite from '@public/images/icons/new-arrow-white.svg';
import nsImg423 from '@public/images/ns-img-423.jpg';
import Image from 'next/image';
import Link from 'next/link';
import PlanSupportMenuItemLink from './PlanSupportMenuItemLink';

export interface PlanSupportMenuItem {
  href: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const accountMenuItems: PlanSupportMenuItem[] = [
  { href: '/login', title: 'Login', Icon: LoginIcon },
  { href: '/signup', title: 'Create Account', Icon: SignUpIcon },
  { href: '/referral-program', title: 'Referral Program', Icon: ReferralProgramIcon },
  { href: '/affiliates', title: 'Affiliate', Icon: AffiliateProgramIcon },
  { href: '/affiliate-policy', title: 'Affiliate Policy', Icon: AffiliatePolicyIcon },
];

const legalMenuItems: PlanSupportMenuItem[] = [
  { href: '/terms-conditions', title: 'Terms & Conditions', Icon: TermsConditionsIcon },
  { href: '/privacy-policy', title: 'Privacy Policy', Icon: PrivacyIcon },
  { href: '/refund-policy', title: 'Refund Policy', Icon: RefundPolicyIcon },
  { href: '/gdpr', title: 'GDPR', Icon: GDPRIcon },
  { href: '/legal', title: 'Legal', Icon: LegalNoticeIcon },
];

const PlanAndSupportMenu = ({
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
          'fixed top-full left-1/2 z-40 h-3 w-full -translate-x-1/2 bg-transparent lg:w-[972px]',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="plan-and-support-mega-menu"
        className={cn(
          'border-stroke-1 fixed top-full left-1/2 z-50 mt-2 w-full -translate-x-1/2 rounded-[20px] border bg-white p-6 transition-all duration-300 lg:w-[972px]',
          menuDropdownId === 'plan-and-support-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="grid grid-cols-12 items-start gap-y-6 md:gap-x-6">
          <div className="col-span-4">
            <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Account</p>
            <ul className="space-y-1">
              {accountMenuItems.map((item) => (
                <PlanSupportMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </ul>
          </div>
          <div className="col-span-4">
            <p className="text-tagline-2 text-secondary/60 p-3 font-medium">Legal</p>
            <ul className="space-y-1">
              {legalMenuItems.map((item) => (
                <PlanSupportMenuItemLink key={item.href} {...item} setMenuDropdownId={setMenuDropdownId} />
              ))}
            </ul>
          </div>
          <div className="col-span-4">
            <p className="text-tagline-2 text-secondary/60 mb-2 p-3 font-medium">Featured</p>
            <article
              onClick={() => setMenuDropdownId(null)}
              className="border-stroke-10 group/blog w-full space-y-3 rounded-[30px] border p-2">
              <Link href="/blog/ai-trends-to-watch-in-2025" className="block">
                <figure className="h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src={nsImg423}
                    alt="Featured"
                    className="h-full w-full rounded-3xl object-cover transition-transform duration-500 ease-in-out group-hover/blog:scale-105"
                  />
                </figure>
              </Link>
              <div className="space-y-7 p-2">
                <Link href="/blog/ai-trends-to-watch-in-2025" className="block">
                  <p className="text-tagline-2 text-secondary font-normal">The 2025 client interaction analysis</p>
                </Link>
                <Link
                  href="/blog/ai-trends-to-watch-in-2025"
                  className="group-hover/blog:bg-primary-500 bg-secondary ring-ns-ivory relative flex h-9.5 w-16 items-center justify-center space-y-5 overflow-hidden rounded-[40px] px-5 py-2 ring-[6px] transition-all duration-500 ease-in-out">
                  <figure className="relative size-6 items-center justify-center overflow-hidden">
                    <Image
                      src={newArrowWhite}
                      alt="new-arrow"
                      className="absolute inset-0 size-full -translate-x-6 object-cover transition-transform duration-400 ease-in-out group-hover/blog:translate-x-1"
                    />
                    <Image
                      src={newArrowWhite}
                      alt="new-arrow"
                      className="size-full object-cover transition-transform duration-400 ease-in-out group-hover/blog:translate-x-6"
                    />
                  </figure>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

PlanAndSupportMenu.displayName = 'PlanAndSupportMenu';
export default PlanAndSupportMenu;
