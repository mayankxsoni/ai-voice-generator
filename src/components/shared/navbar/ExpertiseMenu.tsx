'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';

interface ExpertiseItem {
  id: string;
  title: string;
  href: string;
  icon: string;
}

const expertiseList: ExpertiseItem[] = [
  { id: 'ai-ml', title: 'AI & ML', href: '/use-case', icon: '💼' },
  { id: 'healthcare', title: 'Healthcare', href: '/use-case', icon: '🖋️' },
  { id: 'saas', title: 'SaaS', href: '/use-case', icon: '💬' },
  { id: 'fintech', title: 'FinTech', href: '/use-case', icon: '💡' },
  { id: 'edtech', title: 'Ed-Tech', href: '/use-case', icon: '🎓' },
  { id: 'cybersecurity', title: 'Cyber Security', href: '/use-case', icon: '🛡️' },
  { id: 'web3', title: 'Web3', href: '/use-case', icon: '✨' },
];

const ExpertiseMenu = ({
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
          'fixed top-full left-1/2 z-40 h-4 w-full max-w-[840px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'expertise-mega-menu' ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* Mega Menu Dropdown */}
      <div
        id="expertise-mega-menu"
        className={cn(
          'fixed top-full left-1/2 z-50 mt-3 hidden -translate-x-1/2 transition-all duration-300 xl:block',
          menuDropdownId === 'expertise-mega-menu'
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}>
        <div className="w-[820px] rounded-[32px] border border-secondary/10 bg-white p-6 shadow-[0_24px_60px_-15px_rgba(20,15,35,0.15)]">
          <div className="grid grid-cols-12 items-stretch gap-6">
            
            {/* ── LEFT COLUMN: Expertise List ── */}
            <div className="col-span-5 space-y-1">
              <p className="mb-3 text-sm font-semibold text-secondary/40">Expertise</p>
              
              <div className="space-y-1">
                {expertiseList.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMenuDropdownId(null)}
                    className="group flex items-center gap-3.5 rounded-2xl px-3 py-2.5 transition-all duration-200 hover:bg-primary-50/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-base transition-transform duration-200 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold text-secondary transition-colors duration-200 group-hover:text-primary-500">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── VERTICAL DIVIDER ── */}
            <div className="col-span-1 flex items-center justify-center">
              <div className="h-full w-px bg-secondary/10" />
            </div>

            {/* ── RIGHT COLUMN: Featured Case Study Card ── */}
            <div className="col-span-6 rounded-[24px] border border-primary-100 bg-[#fbfaff] p-5 space-y-4 flex flex-col justify-between">
              
              <div className="space-y-3">
                <p className="text-xs font-semibold text-secondary/40 uppercase tracking-wider">
                  Featured Case Study
                </p>

                {/* Thumbnail card */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-primary-600 via-primary-500 to-orange-400 p-5 text-white shadow-md flex flex-col justify-between group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                      SaaS Video
                    </span>
                    <span className="flex size-8 items-center justify-center rounded-full bg-white/30 text-white shadow-sm backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                      ▶
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-extrabold leading-tight text-white drop-shadow-sm">
                      7 Video Marketing Trends
                    </h4>
                    <p className="text-xs font-medium text-white/80 mt-0.5">
                      How marketers can leverage them
                    </p>
                  </div>
                </div>

                {/* Pill badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                  <span>💼</span>
                  <span>Case Study</span>
                </span>

                {/* Headline & paragraph */}
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-secondary leading-snug">
                    Designing SaaS experiences that get inside your ICP&apos;s mind
                  </h3>
                  <p className="text-xs text-secondary/60 leading-relaxed">
                    Discover how we helped a B2B SaaS platform improve activation by 38% with user-centric video design.
                  </p>
                </div>
              </div>

              {/* Link CTA */}
              <Link
                href="/case-study"
                onClick={() => setMenuDropdownId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-500 hover:text-primary-600 transition-colors duration-200 group"
              >
                <span>Read Case Study</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

ExpertiseMenu.displayName = 'ExpertiseMenu';
export default ExpertiseMenu;
