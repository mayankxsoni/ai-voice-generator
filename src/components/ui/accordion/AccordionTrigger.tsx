'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { useAccordion } from './Accordion';

export interface AccordionTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  iconType?: 'arrow' | 'plus' | 'custom';
  customIcon?: React.ReactNode;
  disabled?: boolean;
  titleClassName?: string;
  iconClassName?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  value,
  className,
  iconType = 'arrow',
  customIcon,
  disabled = false,
  titleClassName,
  iconClassName,
}) => {
  const { activeItem, setActiveItem, disabled: accordionDisabled } = useAccordion();
  const isActive = activeItem === value;
  const isDisabled = disabled || accordionDisabled;

  const arrowRef = useRef<HTMLDivElement>(null);
  const plusIconRef = useRef<HTMLDivElement>(null);

  // Handle icon animations with GSAP
  useGSAP(() => {
    if (iconType === 'arrow' && arrowRef.current) {
      gsap.to(arrowRef.current, {
        rotation: isActive ? -180 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    if (iconType === 'plus' && plusIconRef.current) {
      const plusSpans = plusIconRef.current.querySelectorAll('span');
      if (plusSpans.length >= 2) {
        gsap.to(plusSpans[1], {
          rotation: isActive ? 0 : 90,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    }
  }, [isActive, iconType]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isDisabled) {
      setActiveItem(isActive ? null : value);
    }
  };

  const renderIcon = () => {
    if (customIcon) {
      return <div className="ml-2.5 sm:ml-auto">{customIcon}</div>;
    }

    switch (iconType) {
      case 'arrow':
        return (
          <span
            ref={arrowRef}
            className={cn('stroke-secondary dark:stroke-accent ml-2.5 block sm:ml-auto', iconClassName)}
            data-state={isActive ? 'open' : 'closed'}>
            <svg
              data-state={isActive ? 'open' : 'closed'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="16"
              height="16">
              <path
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        );

      case 'plus':
        return (
          <span
            ref={plusIconRef}
            className={cn('ml-auto block', iconClassName)}
            data-state={isActive ? 'open' : 'closed'}>
            <span className="bg-secondary dark:bg-accent block h-0.5 w-4"></span>
            <span className="bg-secondary dark:bg-accent -mt-0.5 block h-0.5 w-4"></span>
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <button
      className={cn(isDisabled && 'cursor-not-allowed opacity-50', className)}
      onClick={handleClick}
      aria-expanded={isActive}
      aria-controls={`accordion-content-${value}`}
      id={`accordion-trigger-${value}`}
      disabled={isDisabled}>
      <span className={cn(titleClassName)}>{children}</span>
      {renderIcon()}
    </button>
  );
};

AccordionTrigger.displayName = 'AccordionTrigger';

export default AccordionTrigger;
