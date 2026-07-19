'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface DividerExpandOptions {
  start?: string;
  end?: string;
  duration?: number;
  delay?: number;
}

export const useDividerExpand = (options?: DividerExpandOptions) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  const { start = 'top 100%', end = 'top 50%', duration = 1, delay = 0.7 } = options || {};

  useGSAP(() => {
    const divider = dividerRef.current;
    if (!divider) {
      return;
    }

    gsap.to(divider, {
      scrollTrigger: {
        trigger: divider,
        start,
        end,
        scrub: false,
        toggleActions: 'play none none none',
      },
      width: '100%',
      duration,
      delay,
      ease: 'power2.out',
    });
  });

  return dividerRef;
};
