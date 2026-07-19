'use client';

import { useEffect, useState } from 'react';

/**
 * Custom hook to track the currently active section based on scroll position
 * @param sectionIds - Array of section IDs to track
 * @param options - Intersection Observer options
 * @returns The ID of the currently active section
 */
export const useActiveSection = (sectionIds: string[], options: IntersectionObserverInit = {}): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      rootMargin: '-10% 0px -60% 0px', // More sensitive detection for better UX
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      ...options,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the most visible section
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          // Sort by intersection ratio first, then by position
          if (Math.abs(a.intersectionRatio - b.intersectionRatio) < 0.1) {
            // If intersection ratios are similar, prefer the one closer to the center
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          }
          return b.intersectionRatio - a.intersectionRatio;
        });

      if (visibleSections.length > 0) {
        const topSection = visibleSections[0];
        setActiveSection(topSection.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, defaultOptions);

    // Small delay to ensure elements are rendered
    const timeoutId = setTimeout(() => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};

export default useActiveSection;
