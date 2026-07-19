'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef } from 'react';
import { useTab } from '../../../context/TabContext';

interface TabProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  variant?: 'desktop' | 'mobile';
}

const Tab: React.FC<TabProps> = ({ index, children, className = '', variant = 'desktop' }) => {
  const { currentIndex, switchToTab, registerTabButton, config } = useTab();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Register this button with the tab context (only for desktop variant)
    if (variant === 'desktop') {
      registerTabButton(index, buttonRef.current);

      // Cleanup on unmount
      return () => {
        registerTabButton(index, null);
      };
    }
  }, [registerTabButton, index, variant]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    switchToTab(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      switchToTab(index);
    }
  };

  const isActive = currentIndex === index;

  // Desktop variant styles
  const getDesktopClassName = (): string => {
    return cn(
      'data-[state=selected]:text-secondary text-secondary/60 dark:data-[state=selected]:text-accent dark:text-accent/60 -mb-px cursor-pointer px-10 py-3 focus-visible:outline-0',
      className,
    );
  };

  // Mobile variant styles and inline styles
  const getMobileClassName = (): string => {
    const baseClasses =
      'text-tagline-2 border-stroke-10 min-w-16 cursor-pointer rounded-full border px-3.5 py-2 font-medium transition-all duration-200 ease-out';

    if (isActive) {
      return cn(baseClasses, className);
    }

    return cn(baseClasses, 'text-secondary/60 dark:text-accent/60', className);
  };

  const getMobileStyle = (): React.CSSProperties => {
    if (variant === 'mobile' && isActive) {
      return {
        backgroundColor: config.mobile.activeBg,
        color: config.mobile.activeColor,
        borderColor: config.mobile.activeBorder,
        transform: `scale(${config.mobile.scale})`,
      };
    }
    return {};
  };

  return (
    <button
      ref={buttonRef}
      role="tab"
      aria-controls={`tab-content-${index}`}
      aria-selected={isActive}
      data-state={isActive ? 'selected' : ''}
      tabIndex={isActive ? 0 : -1}
      className={variant === 'desktop' ? getDesktopClassName() : getMobileClassName()}
      style={getMobileStyle()}
      onClick={handleClick}
      onKeyDown={handleKeyDown}>
      {variant === 'desktop' ? <span className="text-tagline-1 font-medium">{children}</span> : children}
    </button>
  );
};

Tab.displayName = 'Tab';
export default Tab;
