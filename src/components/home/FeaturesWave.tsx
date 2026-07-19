'use client';

/* =========================
Wave Animation
=========================== */

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

const FeaturesWave = () => {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const paths = [path1Ref.current, path2Ref.current, path3Ref.current, path4Ref.current].filter(
      (path): path is SVGPathElement => path !== null,
    );

    if (paths.length === 0) {
      return;
    }

    const animations: gsap.core.Tween[] = [];

    paths.forEach((path, index) => {
      const amplitude = 4 + index * 0.5;
      const duration = 1.2 + index * 0.1;
      const delay = index * 0.15;

      const animation = gsap.to(path, {
        y: -amplitude,
        duration: duration,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: delay,
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((anim) => anim.kill());
    };
  }, []);

  return (
    <span className="flex size-full items-center justify-center">
      <svg
        id="voice-wave-svg"
        width="640"
        viewBox="0 0 640 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave-svg h-[100px]">
        <path
          ref={path1Ref}
          className="wave-path wave-1"
          d="M-28 74.2597C-12.4779 63.004 32.8609 46.6502 90.0399 71.2803C161.514 102.068 216.499 68.9961 232.274 55.5255C271.973 21.6263 306.094 4.73152 345.612 21.6263C410.147 49.2159 435.496 115.479 522.131 64.8279C528.628 61.0291 542.707 52.0163 568.697 52.4136C601.185 52.9101 610.931 40.0902 651 44.0659"
          stroke="#ECC5A2"
          strokeWidth="2"
        />
        <path
          ref={path2Ref}
          className="wave-path wave-2"
          d="M-13 65.9425C2.4673 55.5664 47.6462 40.4906 104.623 63.1959C175.845 91.5776 230.637 38.2018 246.356 25.7839C285.915 -5.46634 332.316 -4.42944 359.294 13.7599C409.425 47.5601 448.861 103.941 535.19 57.2478C541.665 53.7458 555.693 45.4373 581.592 45.8035C613.965 46.2613 629.073 62.2775 669 65.9425"
          stroke="#ECC5A2"
          strokeWidth="2"
        />
        <path
          ref={path3Ref}
          className="wave-path wave-3"
          d="M655 29.0337C639.524 37.5877 594.318 50.0161 537.308 31.298C466.045 7.90029 411.221 33.0339 395.492 43.2711C355.911 69.0336 309.482 84.0289 282.488 69.0336C232.328 41.169 192.869 -2.2918 106.49 36.2016C100.011 39.0886 85.9745 45.938 60.0606 45.6361C27.6683 45.2587 17.9506 55.0016 -22 51.9801"
          stroke="#ECC5A2"
          strokeWidth="2"
        />
        <path
          ref={path4Ref}
          className="wave-path wave-4"
          d="M640 37.712C624.533 46.5457 579.354 59.3806 522.377 40.0504C451.155 15.8876 396.363 61.3291 380.644 71.9011C341.085 98.506 294.684 97.6232 267.706 82.1377C217.575 53.3619 178.139 5.36226 91.8101 45.1143C85.3354 48.0957 71.3069 55.1691 45.4082 54.8573C13.0348 54.4676 -2.0728 40.8322 -42 37.712"
          stroke="#ECC5A2"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
};

export default FeaturesWave;
