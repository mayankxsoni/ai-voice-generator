'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import { useAccordion } from './Accordion';

export interface AccordionContentProps {
  children: ReactNode;
  value: string;
  className?: string;
  animationDuration?: number;
  animationEase?: string;
}

const AccordionContent: FC<AccordionContentProps> = ({
  children,
  value,
  className,
  animationDuration = 0.3,
  animationEase = 'power2.out',
}) => {
  const { activeItem } = useAccordion();
  const isActive = activeItem === value;
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Animation functions using GSAP
  const animateOpen = useCallback(() => {
    if (!contentRef.current || !innerRef.current) {
      return;
    }

    const content = contentRef.current;
    const inner = innerRef.current;

    // Kill any existing animations
    gsap.killTweensOf(content);

    // Get the natural height
    gsap.set(content, { height: 'auto' });
    const targetHeight = content.scrollHeight;
    gsap.set(content, { height: 0 });

    // Animate to full height
    gsap.to(content, {
      height: targetHeight,
      opacity: 1,
      duration: animationDuration,
      ease: animationEase,
      onComplete: () => {
        gsap.set(content, { height: 'auto' });
      },
    });

    // Animate inner content
    gsap.fromTo(
      inner,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: animationDuration * 0.8,
        delay: animationDuration * 0.2,
        ease: animationEase,
      },
    );
  }, [animationDuration, animationEase]);

  const animateClose = useCallback(() => {
    if (!contentRef.current || !innerRef.current) {
      return;
    }

    const content = contentRef.current;
    const inner = innerRef.current;

    // Kill any existing animations
    gsap.killTweensOf(content);
    gsap.killTweensOf(inner);

    // Get current height and animate to 0
    const currentHeight = content.scrollHeight;
    gsap.set(content, { height: currentHeight });

    // Animate inner content first
    gsap.to(inner, {
      opacity: 0,
      y: -10,
      duration: animationDuration * 0.5,
      ease: animationEase,
    });

    // Then animate height
    gsap.to(content, {
      height: 0,
      opacity: 0,
      duration: animationDuration,
      delay: animationDuration * 0.1,
      ease: animationEase,
    });
  }, [animationDuration, animationEase]);

  // Handle content animations based on active state
  useGSAP(() => {
    if (isActive) {
      animateOpen();
    } else {
      animateClose();
    }
  }, [isActive, animateOpen, animateClose]);

  // Set initial state
  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, {
        height: isActive ? 'auto' : 0,
        opacity: isActive ? 1 : 0,
      });
    }
  }, []);

  return (
    <div
      ref={contentRef}
      id={`accordion-content-${value}`}
      className={cn('overflow-hidden', className)}
      aria-labelledby={`accordion-trigger-${value}`}
      style={{
        height: isActive ? 'auto' : '0px',
        opacity: isActive ? 1 : 0,
      }}>
      <div ref={innerRef} className="border-t-stroke-10 dark:border-t-stroke-6 border-t pt-5 pb-5 sm:pt-6 sm:pb-8">
        <p>{children}</p>
      </div>
    </div>
  );
};

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
