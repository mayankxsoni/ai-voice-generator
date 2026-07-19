'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useTab } from '../../../context/TabContext';

interface TabContentProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  display?: 'flex' | 'block' | 'grid' | 'inline-block';
}

const TabContent: React.FC<TabContentProps> = ({ children, index, className = '', display = 'flex' }) => {
  const { currentIndex, registerTabContent, config } = useTab();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register this specific content element with the tab context
    const element = contentRef.current;
    registerTabContent(index, element);

    // Cleanup on unmount
    return () => {
      registerTabContent(index, null);
    };
  }, [registerTabContent, index]);

  // GSAP animation setup
  useGSAP(() => {
    const element = contentRef.current;
    if (!element) {
      return;
    }

    // Listen for custom reveal event from TabContext
    const handleReveal = (event: CustomEvent) => {
      const { previousIndex, targetIndex } = event.detail;

      // Only animate if this is the target tab and it's actually changing
      if (targetIndex === index && previousIndex !== targetIndex) {
        // Set initial state
        gsap.set(element, {
          opacity: 0,
          y: config.animation.y,
        });

        // Animate to visible state
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: config.animation.duration,
          delay: config.animation.delay,
          ease: config.animation.ease,
        });
      }
    };

    element.addEventListener('tabReveal', handleReveal as EventListener);

    return () => {
      element.removeEventListener('tabReveal', handleReveal as EventListener);
    };
  }, [index, config.animation]);

  const isActive = currentIndex === index;

  return (
    <div
      ref={contentRef}
      id={`tab-content-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
      aria-hidden={!isActive}
      className={cn('tab-content', className, !isActive && 'hidden')}
      style={{ display: isActive ? display : 'none' }}>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';
export default TabContent;
