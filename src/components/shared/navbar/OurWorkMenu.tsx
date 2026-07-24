'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

interface WorkMenuItem {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: string;
}

const workItems: WorkMenuItem[] = [
  {
    id: 'case-studies',
    href: '/case-study',
    title: 'Case Studies',
    description: 'Deep-dives into real SaaS video campaigns we delivered',
    icon: '📊',
  },
  {
    id: 'success-stories',
    href: '/success-stories',
    title: 'Success Stories',
    description: 'How our clients grew signups and cut churn with video',
    icon: '📈',
  },
  {
    id: 'testimonials',
    href: '/testimonial',
    title: 'Testimonials',
    description: 'What SaaS founders say about working with First Pixel',
    icon: '⭐',
  },
  {
    id: 'customers',
    href: '/customer',
    title: 'Customers',
    description: "Meet the SaaS teams we've partnered with",
    icon: '🤝',
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
      {/* Hover bridge */}
      <div
        className={cn(
          'fixed top-full left-1/2 z-40 h-4 w-full max-w-[700px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'ourwork-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Dropdown Card */}
      <div
        id="ourwork-mega-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'ourwork-mega-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[680px] rounded-[32px] border border-secondary/10 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <div className="grid grid-cols-12 items-stretch gap-6">
            
            {/* Left list */}
            <div className="col-span-7 space-y-1">
              <p className="mb-3 text-sm font-semibold text-secondary/40">Our Work</p>
              
              <div className="space-y-1">
                {workItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMenuDropdownId(null)}
                    className="group flex items-start gap-3.5 rounded-2xl px-3 py-2.5 transition-all duration-200 hover:bg-primary-50/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-base transition-transform duration-200 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-secondary transition-colors duration-200 group-hover:text-primary-500">
                        {item.title}
                      </h4>
                      <p className="text-xs text-secondary/50 mt-0.5 line-clamp-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="col-span-5 rounded-[24px] bg-gradient-to-br from-primary-500 to-primary-600 p-5 text-white flex flex-col justify-between shadow-md">
              <div className="space-y-3">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Proven Impact
                </span>
                <h4 className="text-xl font-extrabold text-white leading-tight">
                  3x Average Signup Lift
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Our explainer videos help SaaS companies clarify their message and boost conversions.
                </p>
              </div>

              <Link
                href="/case-study"
                onClick={() => setMenuDropdownId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline mt-4"
              >
                <span>View Case Studies</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

OurWorkMenu.displayName = 'OurWorkMenu';
export default OurWorkMenu;
