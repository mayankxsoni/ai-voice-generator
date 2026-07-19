'use client';

import { useEffect, useState } from 'react';

export interface ButtonConfig {
  scrolledClass: string;
  defaultClass: string;
}

export const useNavbarScroll = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
};
