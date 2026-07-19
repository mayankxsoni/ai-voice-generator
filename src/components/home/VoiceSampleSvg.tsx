'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

const VoiceSampleSvg = () => {
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
      // Check data-bar-type attribute or fill-opacity
      const barType = singleBar.dataset.barType;
      const hasFillOpacity = singleBar.hasAttribute('fill-opacity');
      const isHighBar = barType === 'high' || (!hasFillOpacity && singleBar.getAttribute('fill') === 'white');

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
    <span className="inline-block">
      <svg
        ref={svgRef}
        className="voice-sample-waveform"
        width={257}
        height={26}
        viewBox="0 0 257 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          className="voice-bar voice-bar-low"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 0 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
          data-bar-type="low"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="2.96875"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 2.96875 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="5.94531"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 5.94531 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="8.91406"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 8.91406 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="11.8906"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 11.8906 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="14.8594"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 14.8594 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="17.8359"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 17.8359 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="20.8047"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 20.8047 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="23.7812"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 23.7812 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="26.75"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 26.75 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="29.7266"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 29.7266 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="32.6953"
          y="25.4775"
          width="12.7388"
          height="0.424626"
          transform="rotate(-90 32.6953 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="35.6641"
          y="25.4775"
          width="16.985"
          height="0.424626"
          transform="rotate(-90 35.6641 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="38.6406"
          y="25.4775"
          width="15.2865"
          height="0.424627"
          transform="rotate(-90 38.6406 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="41.6094"
          y="25.4775"
          width="25.4776"
          height="0.424626"
          transform="rotate(-90 41.6094 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="44.5859"
          y="25.4775"
          width="22.5052"
          height="0.424627"
          transform="rotate(-90 44.5859 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="47.5547"
          y="25.4775"
          width="18.6835"
          height="0.424627"
          transform="rotate(-90 47.5547 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="50.5312"
          y="25.4775"
          width="21.2313"
          height="0.424626"
          transform="rotate(-90 50.5312 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="53.5"
          y="25.4775"
          width="13.588"
          height="0.424627"
          transform="rotate(-90 53.5 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="56.4766"
          y="25.4775"
          width="17.8343"
          height="0.424627"
          transform="rotate(-90 56.4766 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="59.4453"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 59.4453 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="62.4141"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 62.4141 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="65.3906"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 65.3906 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="68.3594"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 68.3594 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="71.3359"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 71.3359 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="74.3047"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 74.3047 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="77.2812"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 77.2812 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="80.25"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 80.25 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="83.2266"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 83.2266 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="86.1953"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 86.1953 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="89.1719"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 89.1719 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="92.1406"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 92.1406 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="95.1172"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 95.1172 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="98.0859"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 98.0859 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="101.062"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 101.062 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="104.031"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 104.031 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x={107}
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 107 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="109.977"
          y="25.4775"
          width="12.7388"
          height="0.424626"
          transform="rotate(-90 109.977 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="112.945"
          y="25.4775"
          width="16.985"
          height="0.424626"
          transform="rotate(-90 112.945 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="115.922"
          y="25.4775"
          width="13.588"
          height="0.424626"
          transform="rotate(-90 115.922 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="118.891"
          y="25.4775"
          width="20.382"
          height="0.424626"
          transform="rotate(-90 118.891 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="121.867"
          y="25.4775"
          width="16.1358"
          height="0.424626"
          transform="rotate(-90 121.867 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="124.836"
          y="25.4775"
          width="22.9298"
          height="0.424626"
          transform="rotate(-90 124.836 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="127.812"
          y="25.4775"
          width="10.191"
          height="0.424626"
          transform="rotate(-90 127.812 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="130.781"
          y="25.4775"
          width="16.985"
          height="0.424626"
          transform="rotate(-90 130.781 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="133.758"
          y="25.4775"
          width="12.7388"
          height="0.424626"
          transform="rotate(-90 133.758 25.4775)"
          fill="white"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="136.727"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 136.727 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="139.695"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 139.695 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="142.672"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 142.672 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="145.641"
          y="25.4775"
          width="3.82163"
          height="0.424626"
          transform="rotate(-90 145.641 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="148.617"
          y="25.4775"
          width="3.82163"
          height="0.424626"
          transform="rotate(-90 148.617 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="151.586"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 151.586 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="154.562"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 154.562 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="157.531"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 157.531 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="160.508"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 160.508 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="163.477"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 163.477 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="166.453"
          y="25.4775"
          width="3.82163"
          height="0.424626"
          transform="rotate(-90 166.453 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="169.422"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 169.422 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="172.398"
          y="25.4775"
          width="3.82163"
          height="0.424626"
          transform="rotate(-90 172.398 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="175.367"
          y="25.4775"
          width="4.67089"
          height="0.424626"
          transform="rotate(-90 175.367 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="178.344"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 178.344 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="181.312"
          y="25.4775"
          width="3.82163"
          height="0.424626"
          transform="rotate(-90 181.312 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="184.281"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 184.281 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="187.258"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 187.258 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="190.227"
          y="25.4775"
          width="4.67089"
          height="0.424626"
          transform="rotate(-90 190.227 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="193.203"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 193.203 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="196.172"
          y="25.4775"
          width="2.12313"
          height="0.424626"
          transform="rotate(-90 196.172 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="199.148"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 199.148 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="202.117"
          y="25.4775"
          width="4.67089"
          height="0.424626"
          transform="rotate(-90 202.117 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="205.094"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 205.094 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="208.062"
          y="25.4775"
          width="2.12313"
          height="0.424626"
          transform="rotate(-90 208.062 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="211.039"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 211.039 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="214.008"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 214.008 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="216.984"
          y="25.4775"
          width="4.67089"
          height="0.424626"
          transform="rotate(-90 216.984 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="219.953"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 219.953 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="222.93"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 222.93 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="225.898"
          y="25.4775"
          width="4.67089"
          height="0.424626"
          transform="rotate(-90 225.898 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="228.875"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 228.875 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="231.844"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 231.844 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="234.812"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 234.812 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="237.789"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 237.789 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="240.758"
          y="25.4775"
          width="2.97238"
          height="0.424626"
          transform="rotate(-90 240.758 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="243.734"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 243.734 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="246.703"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 246.703 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="249.68"
          y="25.4775"
          width="6.79402"
          height="0.424626"
          transform="rotate(-90 249.68 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="252.648"
          y="25.4775"
          width="5.94476"
          height="0.424626"
          transform="rotate(-90 252.648 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
        <rect
          className="voice-bar voice-bar-high"
          data-bar-type="high"
          x="255.625"
          y="25.4775"
          width="8.49252"
          height="0.424626"
          transform="rotate(-90 255.625 25.4775)"
          fill="#FCFCFC"
          fillOpacity="0.4"
        />
      </svg>
    </span>
  );
};

export default VoiceSampleSvg;
