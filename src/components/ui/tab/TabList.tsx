'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef } from 'react';
import { useTab } from '../../../context/TabContext';

interface TabListProps {
  children: React.ReactNode;
  variant?: 'desktop' | 'mobile';
  className?: string;
}

const TabList: React.FC<TabListProps> = ({ children, variant = 'desktop', className = '' }) => {
  const { registerTabBar, currentIndex } = useTab();
  const activeTabBarRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'desktop') {
      registerTabBar(activeTabBarRef.current);
    }
  }, [registerTabBar, variant]);

  // Set initial width and translate based on active tab's offsetWidth and position
  useEffect(() => {
    if (variant === 'desktop' && activeTabBarRef.current && tabListRef.current) {
      const activeTabButton = tabListRef.current.querySelector<HTMLButtonElement>(
        `button[role="tab"][data-state="selected"]`,
      );

      if (activeTabButton && activeTabBarRef.current) {
        const width = activeTabButton.offsetWidth;
        const left = activeTabButton.offsetLeft - activeTabBarRef.current.offsetLeft;

        activeTabBarRef.current.style.width = `${width}px`;
        activeTabBarRef.current.style.translate = `${left}px 0`;
      }
    }
  }, [variant, currentIndex]);

  // Active tab bar positioning is now handled by the TabContext when tabs switch

  const getClassName = (): string => {
    if (variant === 'desktop') {
      return cn(
        ' border-stroke-10 relative mb-14 hidden items-center justify-center border-b lg:mb-[72px] lg:flex',
        className,
      );
    } else {
      return cn(
        'mb-14 flex flex-wrap items-center justify-start gap-4 sm:mx-auto sm:max-w-[500px] lg:mb-[72px] lg:hidden',
        className,
      );
    }
  };

  return (
    <div ref={tabListRef} role="tablist" className={getClassName()}>
      {/* Active tab bar indicator for desktop */}
      {variant === 'desktop' && (
        <div
          ref={activeTabBarRef}
          className="bg-ns-linen absolute right-0 bottom-[-0.8px] left-[26%] h-[2px] origin-left transition-[translate] duration-500 ease-in-out"></div>
      )}

      {children}
    </div>
  );
};

TabList.displayName = 'TabList';
export default TabList;
