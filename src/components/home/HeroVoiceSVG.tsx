'use client';

import { cn } from '@/utils/cn';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

interface HeroVoiceSVGProps {
  className?: string;
  svgClassName?: string;
}

const HeroVoiceSVG = ({ className, svgClassName }: HeroVoiceSVGProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const svgContainer = svgRef.current;
    if (!svgContainer) {
      return;
    }

    const voiceBars = svgContainer.querySelectorAll<SVGRectElement>('.voice-bar');

    if (voiceBars.length === 0) {
      return;
    }

    const originalWidths = Array.from(voiceBars).map((rect) => {
      const width = Number.parseFloat(rect.getAttribute('width') || '0');
      return width;
    });

    voiceBars.forEach((singleBar, index) => {
      const originalWidth = originalWidths[index];

      // Skip if original width is 0 or very small
      if (originalWidth <= 1) {
        return;
      }

      // Determine if this is a "high" bar (white) or "low" bar (semi-transparent)
      // Low bars have fill-opacity attribute, high bars don't
      const isHighBar = !singleBar.hasAttribute('fill-opacity');

      const minHeight = isHighBar
        ? originalWidth * 0.2 // High bars start at 20% of original
        : originalWidth * 0.1; // Low bars start at 10% of original

      const maxHeight = originalWidth; // Never exceed original height

      // Create wave effect with staggered delays
      // Use sine wave pattern for more natural voice-like flow
      const position = index / voiceBars.length; // 0 to 1
      const sineOffset = Math.sin(position * Math.PI * 4) * 0.1; // Wave pattern
      const baseDelay = index * 0.012; // Stagger based on position
      const delay = baseDelay + sineOffset;

      // Duration varies to create natural rhythm - faster for high bars
      const duration = isHighBar
        ? 0.4 + Math.random() * 0.25 // High bars: 0.4-0.65s (faster)
        : 0.6 + Math.random() * 0.3; // Low bars: 0.6-0.9s (slower)

      // Set initial width to a random value between min and max for variety
      const initialHeight = minHeight + (maxHeight - minHeight) * (0.3 + Math.random() * 0.2);
      gsap.set(singleBar, {
        attr: { width: initialHeight },
      });

      const tl = gsap.timeline({
        repeat: -1,
        delay: delay,
      });

      tl.to(singleBar, {
        attr: { width: maxHeight },
        duration: duration,
        ease: 'sine.inOut',
      }).to(singleBar, {
        attr: { width: minHeight },
        duration: duration,
        ease: 'linear',
      });
    });
  }, []);

  return (
    <span
      className={cn(
        'lp:max-w-[750px] inline-block h-15 w-full max-w-[450px] lg:max-w-[500px] 2xl:max-w-[869px]',
        className,
      )}>
      <svg
        ref={svgRef}
        viewBox="0 0 869 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('voice-sample-waveform', svgClassName)}>
        <rect
          className="voice-bar"
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 0 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={7}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 7 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={14}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 14 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={21}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 21 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={28}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 28 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={35}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 35 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={42}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 42 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={49}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 49 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={56}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 56 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={63}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 63 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={70}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 70 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect className="voice-bar" x={77} y={60} width={30} height={1} transform="rotate(-90 77 60)" fill="white" />
        <rect className="voice-bar" x={84} y={60} width={40} height={1} transform="rotate(-90 84 60)" fill="white" />
        <rect className="voice-bar" x={91} y={60} width={36} height={1} transform="rotate(-90 91 60)" fill="white" />
        <rect className="voice-bar" x={98} y={60} width={60} height={1} transform="rotate(-90 98 60)" fill="white" />
        <rect className="voice-bar" x={105} y={60} width={53} height={1} transform="rotate(-90 105 60)" fill="white" />
        <rect className="voice-bar" x={112} y={60} width={44} height={1} transform="rotate(-90 112 60)" fill="white" />
        <rect className="voice-bar" x={119} y={60} width={50} height={1} transform="rotate(-90 119 60)" fill="white" />
        <rect className="voice-bar" x={126} y={60} width={32} height={1} transform="rotate(-90 126 60)" fill="white" />
        <rect className="voice-bar" x={133} y={60} width={42} height={1} transform="rotate(-90 133 60)" fill="white" />
        <rect
          className="voice-bar"
          x={140}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 140 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={147}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 147 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={154}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 154 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={161}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 161 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={168}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 168 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={175}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 175 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={182}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 182 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={189}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 189 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={196}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 196 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={203}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 203 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={210}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 210 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={217}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 217 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={224}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 224 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={231}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 231 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={238}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 238 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={245}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 245 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={252}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 252 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect className="voice-bar" x={259} y={60} width={30} height={1} transform="rotate(-90 259 60)" fill="white" />
        <rect className="voice-bar" x={266} y={60} width={40} height={1} transform="rotate(-90 266 60)" fill="white" />
        <rect className="voice-bar" x={273} y={60} width={32} height={1} transform="rotate(-90 273 60)" fill="white" />
        <rect className="voice-bar" x={280} y={60} width={48} height={1} transform="rotate(-90 280 60)" fill="white" />
        <rect className="voice-bar" x={287} y={60} width={38} height={1} transform="rotate(-90 287 60)" fill="white" />
        <rect className="voice-bar" x={294} y={60} width={54} height={1} transform="rotate(-90 294 60)" fill="white" />
        <rect className="voice-bar" x={301} y={60} width={24} height={1} transform="rotate(-90 301 60)" fill="white" />
        <rect className="voice-bar" x={308} y={60} width={40} height={1} transform="rotate(-90 308 60)" fill="white" />
        <rect className="voice-bar" x={315} y={60} width={30} height={1} transform="rotate(-90 315 60)" fill="white" />
        <rect
          className="voice-bar"
          x={322}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 322 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={329}
          y={60}
          width={7}
          height={1}
          transform="rotate(-90 329 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={336}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 336 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={343}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 343 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={350}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 350 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={357}
          y={60}
          width={7}
          height={1}
          transform="rotate(-90 357 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect className="voice-bar" x={364} y={60} width={30} height={1} transform="rotate(-90 364 60)" fill="white" />
        <rect className="voice-bar" x={371} y={60} width={40} height={1} transform="rotate(-90 371 60)" fill="white" />
        <rect className="voice-bar" x={378} y={60} width={32} height={1} transform="rotate(-90 378 60)" fill="white" />
        <rect className="voice-bar" x={385} y={60} width={48} height={1} transform="rotate(-90 385 60)" fill="white" />
        <rect className="voice-bar" x={392} y={60} width={38} height={1} transform="rotate(-90 392 60)" fill="white" />
        <rect className="voice-bar" x={399} y={60} width={54} height={1} transform="rotate(-90 399 60)" fill="white" />
        <rect className="voice-bar" x={406} y={60} width={24} height={1} transform="rotate(-90 406 60)" fill="white" />
        <rect className="voice-bar" x={413} y={60} width={40} height={1} transform="rotate(-90 413 60)" fill="white" />
        <rect className="voice-bar" x={420} y={60} width={30} height={1} transform="rotate(-90 420 60)" fill="white" />
        <rect
          className="voice-bar"
          x={427}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 427 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={434}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 434 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={441}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 441 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={448}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 448 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={455}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 455 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect className="voice-bar" x={462} y={60} width={30} height={1} transform="rotate(-90 462 60)" fill="white" />
        <rect className="voice-bar" x={469} y={60} width={40} height={1} transform="rotate(-90 469 60)" fill="white" />
        <rect className="voice-bar" x={476} y={60} width={32} height={1} transform="rotate(-90 476 60)" fill="white" />
        <rect className="voice-bar" x={483} y={60} width={48} height={1} transform="rotate(-90 483 60)" fill="white" />
        <rect className="voice-bar" x={490} y={60} width={38} height={1} transform="rotate(-90 490 60)" fill="white" />
        <rect className="voice-bar" x={497} y={60} width={54} height={1} transform="rotate(-90 497 60)" fill="white" />
        <rect className="voice-bar" x={504} y={60} width={24} height={1} transform="rotate(-90 504 60)" fill="white" />
        <rect className="voice-bar" x={511} y={60} width={40} height={1} transform="rotate(-90 511 60)" fill="white" />
        <rect className="voice-bar" x={518} y={60} width={30} height={1} transform="rotate(-90 518 60)" fill="white" />
        <rect
          className="voice-bar"
          x={525}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 525 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={532}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 532 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={539}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 539 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={546}
          y={60}
          width={9}
          height={1}
          transform="rotate(-90 546 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={553}
          y={60}
          width={9}
          height={1}
          transform="rotate(-90 553 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={560}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 560 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={567}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 567 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={574}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 574 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={581}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 581 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={588}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 588 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={595}
          y={60}
          width={9}
          height={1}
          transform="rotate(-90 595 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={602}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 602 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={609}
          y={60}
          width={9}
          height={1}
          transform="rotate(-90 609 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={616}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 616 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={623}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 623 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={630}
          y={60}
          width={9}
          height={1}
          transform="rotate(-90 630 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={637}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 637 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect className="voice-bar" x={644} y={60} width={30} height={1} transform="rotate(-90 644 60)" fill="white" />
        <rect className="voice-bar" x={651} y={60} width={40} height={1} transform="rotate(-90 651 60)" fill="white" />
        <rect className="voice-bar" x={658} y={60} width={32} height={1} transform="rotate(-90 658 60)" fill="white" />
        <rect className="voice-bar" x={665} y={60} width={48} height={1} transform="rotate(-90 665 60)" fill="white" />
        <rect className="voice-bar" x={672} y={60} width={38} height={1} transform="rotate(-90 672 60)" fill="white" />
        <rect className="voice-bar" x={679} y={60} width={54} height={1} transform="rotate(-90 679 60)" fill="white" />
        <rect className="voice-bar" x={686} y={60} width={24} height={1} transform="rotate(-90 686 60)" fill="white" />
        <rect className="voice-bar" x={693} y={60} width={40} height={1} transform="rotate(-90 693 60)" fill="white" />
        <rect className="voice-bar" x={700} y={60} width={30} height={1} transform="rotate(-90 700 60)" fill="white" />
        <rect
          className="voice-bar"
          x={707}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 707 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={714}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 714 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={721}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 721 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={728}
          y={60}
          width={5}
          height={1}
          transform="rotate(-90 728 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={735}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 735 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={742}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 742 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={749}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 749 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={756}
          y={60}
          width={5}
          height={1}
          transform="rotate(-90 756 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={763}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 763 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={770}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 770 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={777}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 777 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={784}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 784 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={791}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 791 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={798}
          y={60}
          width={11}
          height={1}
          transform="rotate(-90 798 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={805}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 805 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={812}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 812 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={819}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 819 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={826}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 826 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={833}
          y={60}
          width={7}
          height={1}
          transform="rotate(-90 833 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={840}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 840 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={847}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 847 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={854}
          y={60}
          width={16}
          height={1}
          transform="rotate(-90 854 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={861}
          y={60}
          width={14}
          height={1}
          transform="rotate(-90 861 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar"
          x={868}
          y={60}
          width={20}
          height={1}
          transform="rotate(-90 868 60)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
      </svg>
    </span>
  );
};

export default HeroVoiceSVG;
