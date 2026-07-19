'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface TypewriterAnimationProps {
  children: React.ReactNode;
  typingDuration?: number;
  start?: string;
  once?: boolean;
  className: string;
}

const TypewriterAnimation = ({
  children,
  typingDuration = 3,
  start = 'top 80%',
  once = true,
  className,
}: TypewriterAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const typewriterElement = textRef.current;
    if (!container || !typewriterElement) {
      return;
    }

    const split = new SplitText(typewriterElement, {
      type: 'chars',
      tag: 'span',
    });

    gsap.set(split.chars, { opacity: 0 });

    const charDelay = typingDuration / split.chars.length;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: start,
        once: once,
      },
    });

    split.chars.forEach((char, index) => {
      tl.to(char, { opacity: 1, duration: 0.01 }, index * charDelay);
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, [typingDuration, start, once]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <span ref={textRef} className={cn(className)}>
        {children}
      </span>
    </div>
  );
};

export default TypewriterAnimation;
