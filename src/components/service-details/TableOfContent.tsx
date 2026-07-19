'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import { generateTOC } from '@/utils/generateTOC';
import { useLenis } from 'lenis/react';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface TableOfContentProps {
  markdownContent: string;
}

const TableOfContent = ({ markdownContent }: TableOfContentProps) => {
  const lenis = useLenis();

  // Generate TOC from markdown content
  const tocItems = useMemo(() => generateTOC(markdownContent), [markdownContent]);

  // Get section IDs for tracking active section
  const sectionIds = useMemo(() => tocItems.map((item) => item.id), [tocItems]);

  // Track currently active section
  const activeSection = useActiveSection(sectionIds);

  // Handle smooth scroll to section
  const handleScrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(`#${targetId}`, {
          offset: -100,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    },
    [lenis],
  );
  return (
    <RevealAnimation delay={0.3}>
      <div className="table-of-contents hidden w-full lg:sticky lg:top-20 lg:block lg:max-w-[449px]">
        <div className="bg-ns-ivory/80 w-full space-y-4 rounded-[20px] p-11">
          <h3 className="text-heading-5">Table of Contents</h3>
          <ul className="table-of-list w-full">
            {tocItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isLastItem = index === tocItems.length - 1;

              return (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => handleScrollToSection(e, item.id)}
                    className={cn(
                      'group -mx-2 flex items-center justify-between rounded-lg px-2 py-4 transition-all duration-300 ease-out hover:bg-gray-50/50',
                      !isLastItem && 'border-b-stroke-10 border-b',
                    )}>
                    <span
                      className={cn(
                        'text-lg leading-[27px] transition-all duration-300 ease-out',
                        isActive
                          ? 'text-secondary translate-x-1 transform font-medium'
                          : 'text-secondary/60 group-hover:text-secondary/80 font-normal',
                      )}
                      style={{ paddingLeft: `${(item.level - 2) * 16}px` }} // Indent based on heading level
                    >
                      {item.title}
                    </span>
                    <span
                      className={cn(
                        'transform transition-all duration-300 ease-out',
                        isActive
                          ? 'translate-x-0 scale-100 opacity-100'
                          : 'translate-x-2 scale-95 opacity-0 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-60',
                      )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
                        <path
                          d="M10 8.5L14 12.5L10 16.5"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </RevealAnimation>
  );
};
TableOfContent.displayName = 'TableOfContent';
export default TableOfContent;
