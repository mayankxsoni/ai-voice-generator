'use client';

import { cn } from '@/utils/cn';
import React from 'react';
import { useAccordion } from './Accordion';

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ children, value, className, disabled = false }) => {
  const { activeItem } = useAccordion();
  const isActive = activeItem === value;

  return (
    <div
      className={cn('accordion-item', disabled && 'pointer-events-none opacity-50', className)}
      data-value={value}
      data-state={isActive ? 'open' : 'closed'}
      aria-labelledby={`accordion-trigger-${value}`}>
      {children}
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
