'use client';
import { cn } from '@/utils/cn';
import { useLenis } from 'lenis/react';
import Link from 'next/link';
import HoverBgTransform from '../shared/hover-bg-transform';

const TOC = ({ tocData, activeMonth }: { tocData: { id: string; title: string }[]; activeMonth: string | null }) => {
  const lenis = useLenis();

  const handleScroll = (id: string) => {
    lenis?.scrollTo('#' + id, {
      offset: -120,
    });
  };

  return (
    <div className="sticky top-28 col-span-12 space-y-8 lg:col-span-3">
      <div className="relative z-0 space-y-3">
        <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Jump to month</p>
        <div className="relative z-0 space-y-1">
          {tocData.map((item, index) => (
            <Link
              key={index + 1}
              href={`#${item.id}`}
              onClick={() => handleScroll(item.id)}
              className={cn(
                'group text-secondary text-tagline-1 relative z-0 flex items-center justify-start rounded-[10px] px-6 py-3.5 font-normal transition-colors duration-300 ease-out',
                activeMonth?.toLocaleLowerCase() === item.title.toLocaleLowerCase()
                  ? 'bg-ns-ivory text-secondary'
                  : 'hover:bg-ns-ivory hover:text-secondary',
              )}>
              <HoverBgTransform className="group-hover:bg-ns-ivory group-hover:text-secondary" />
              <span className="relative z-10 first-letter:uppercase">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

TOC.displayName = 'TOC';
export default TOC;
