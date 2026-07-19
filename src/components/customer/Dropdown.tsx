'use client';

import { cn } from '@/utils/cn';
import { RefObject } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import DropdownArrow from './DropdownArrow';

export type FilterKey = 'industry' | 'product' | 'service' | 'solution';

interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownConfig {
  id: FilterKey;
  label: string;
  options: DropdownOption[];
}

interface DropdownProps {
  config: DropdownConfig;
  isOpen: boolean;
  selectedValue: string;
  onToggle: () => void;
  onSelect: (value: string) => void;
  optionCounts: Record<string, number>;
  delay: number;
  containerRef: RefObject<HTMLDivElement | null>;
}

export const dropdownData: DropdownConfig[] = [
  {
    id: 'industry',
    label: 'Select industry',
    options: [
      { value: 'all', label: 'All industries' },
      { value: 'ai', label: 'AI' },
      { value: 'saas', label: 'SaaS' },
      { value: 'social', label: 'Social' },
      { value: 'spacetech', label: 'Spacetech' },
      { value: 'fintech', label: 'Fintech' },
      { value: 'media', label: 'Media' },
    ],
  },
  {
    id: 'product',
    label: 'Select product',
    options: [
      { value: 'all', label: 'All products' },
      { value: 'analytics', label: 'Analytics' },
      { value: 'dashboard', label: 'Dashboard' },
      { value: 'api', label: 'API' },
      { value: 'integration', label: 'Integration' },
    ],
  },
  {
    id: 'service',
    label: 'Select service',
    options: [
      { value: 'all', label: 'All services' },
      { value: 'consulting', label: 'Consulting' },
      { value: 'support', label: 'Support' },
      { value: 'training', label: 'Training' },
      { value: 'maintenance', label: 'Maintenance' },
    ],
  },
  {
    id: 'solution',
    label: 'Select solution',
    options: [
      { value: 'all', label: 'All solutions' },
      { value: 'cloud', label: 'Cloud' },
      { value: 'enterprise', label: 'Enterprise' },
      { value: 'custom', label: 'Custom' },
      { value: 'mobile', label: 'Mobile' },
    ],
  },
];

const Dropdown = ({
  config,
  isOpen,
  selectedValue,
  onToggle,
  onSelect,
  optionCounts,
  delay,
  containerRef,
}: DropdownProps) => {
  const selectedOption = config.options.find((option) => option.value === selectedValue) ?? config.options[0];

  return (
    <RevealAnimation delay={delay}>
      <div ref={containerRef} className="relative z-10">
        <button
          type="button"
          aria-label={config.label}
          onClick={onToggle}
          className="dropdown-button border-stroke-10 text-secondary md:text-tagline-1 text-tagline-3 flex cursor-pointer items-center rounded-md border bg-white px-2 py-1 font-medium md:gap-4 md:rounded-[10px] md:px-6 md:py-3.5">
          <span>{selectedOption.label}</span>
          <span className="max-[500px]:hidden">
            <DropdownArrow isOpen={isOpen} />
          </span>
        </button>
        <div
          className={cn(
            'customer-dropdown-menu bg-ns-ivory absolute top-full left-0 z-50 mt-2 w-full min-w-[200px] overflow-hidden rounded-xl p-2 transition-all duration-300 md:min-w-[300px]',
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          )}>
          {config.options.map((option) => {
            const isSelected = option.value === selectedValue;
            return (
              <button
                type="button"
                key={option.value}
                onClick={() => onSelect(option.value)}
                className={cn(
                  'text-secondary text-tagline-1 flex w-full cursor-pointer items-center justify-between rounded-[10px] px-6 py-4 transition-colors',
                  isSelected ? 'bg-ns-linen text-white' : 'hover:bg-ns-linen/50 hover:text-white',
                )}>
                <span>{option.label}</span>
                <span>{optionCounts[option.value] ?? 0}</span>
              </button>
            );
          })}
        </div>
      </div>
    </RevealAnimation>
  );
};

export default Dropdown;
