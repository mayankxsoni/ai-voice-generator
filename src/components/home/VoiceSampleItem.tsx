'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { memo, useEffect, useRef } from 'react';
import { VoiceSample } from './VoiceSamples';
import VoiceSampleSvg from './VoiceSampleSvg';

interface VoiceSampleItemProps {
  data: VoiceSample;
  index: number;
  isPlaying: boolean;
  onPlayPause: (index: number) => void;
}

const VoiceSampleItem = memo(({ data, index, isPlaying, onPlayPause }: VoiceSampleItemProps) => {
  const { imgLink, name, description, audioPath } = data;

  // Refs
  const itemRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const playIconRef = useRef<SVGSVGElement>(null);
  const pauseIconRef = useRef<SVGSVGElement>(null);

  // Initialize audio and setup event handlers
  useEffect(() => {
    const audio = new Audio(audioPath);
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleEnded = () => onPlayPause(index);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', handleEnded);
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioPath, index, onPlayPause]);

  // Sync audio playback with isPlaying state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.play().catch(() => onPlayPause(index));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isPlaying, index, onPlayPause]);

  // Animation with GSAP
  useGSAP(() => {
    if (!contentRef.current || !svgRef.current || !playIconRef.current || !pauseIconRef.current) {
      return;
    }

    const duration = 0.5;
    const ease = 'power2.inOut';

    if (isPlaying) {
      gsap.to(contentRef.current, { y: -100, duration, ease });
      gsap.to(svgRef.current, { y: -36, duration, ease });
      gsap.to(playIconRef.current, { y: -35, duration, ease });
      gsap.to(pauseIconRef.current, { y: 0, duration, ease });
    } else {
      gsap.to(contentRef.current, { y: 0, duration, ease });
      gsap.to(svgRef.current, { y: 0, duration, ease });
      gsap.to(playIconRef.current, { y: -9, duration, ease });
      gsap.to(pauseIconRef.current, { y: 25, duration, ease });
    }
  }, [isPlaying]);

  const handleClick = () => {
    onPlayPause(index);
  };

  return (
    <RevealAnimation delay={0.1 + index * 0.1}>
      <div
        ref={itemRef}
        className={`group flex w-full max-w-[417px] items-center justify-between gap-x-3 rounded-full p-2 transition-colors duration-500 ease-in-out ${
          isPlaying ? 'bg-ns-linen' : 'bg-ns-ivory'
        }`}
        aria-label={`Voice sample: ${name}`}>
        <div className="flex flex-auto items-center justify-start gap-x-3">
          <figure className="size-[56px] shrink-0 overflow-hidden rounded-full">
            <Image
              src={imgLink}
              alt={`Avatar for ${name} voice sample`}
              width={56}
              height={56}
              className="size-full object-cover"
              title={`${name} voice avatar`}
            />
          </figure>
          <div className="relative w-full max-w-[257px] overflow-hidden">
            <div ref={contentRef} className="voice-sample-item-content relative">
              <h3 className="text-tagline-1 font-normal">{name}</h3>
              <p className="text-tagline-3 font-normal">{description}</p>
            </div>
            {/* Voice visualization SVG */}
            <div
              ref={svgRef}
              className="absolute left-1/2 z-20 w-[257px] -translate-x-1/2 translate-y-0"
              aria-hidden="true">
              {isPlaying && <VoiceSampleSvg />}
            </div>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="relative flex size-16 cursor-pointer items-center justify-center rounded-full bg-white p-4 transition-transform duration-300 ease-in-out group-hover:scale-107 focus:outline-none"
          aria-label={isPlaying ? `Pause voice sample for ${name}` : `Play voice sample for ${name}`}
          aria-pressed={isPlaying}>
          <div className="relative size-7 overflow-hidden">
            {/* Play icon */}
            <svg
              ref={playIconRef}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              className="play-icon absolute top-1/2 left-1/2 ml-px -translate-x-1/2 -translate-y-1/2"
              style={{ y: -9 }}
              aria-hidden="true">
              <foreignObject x="-4" y="-4" width="23.6328" height="26.6816">
                <div
                  style={{
                    backdropFilter: 'blur(2px)',
                    clipPath: 'url(#bgblur_play_clip_path)',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </foreignObject>
              <path
                data-figma-bg-blur-radius="4"
                d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z"
                fill="#BEAB9A"
                stroke="#BEAB9A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <clipPath id="bgblur_play_clip_path" transform="translate(4 4)">
                  <path d="M0.5 2.50415C0.5 0.921819 2.25049 -0.0338637 3.58151 0.821794L14.2163 7.65846C15.441 8.44573 15.441 10.2359 14.2163 11.0232L3.58152 17.8598C2.2505 18.7155 0.5 17.7598 0.5 16.1775V2.50415Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Pause icon */}
            <svg
              ref={pauseIconRef}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              className="pause-icon absolute left-1/2 -translate-x-1/2 translate-y-[25px]"
              style={{ y: 25 }}
              aria-hidden="true">
              <foreignObject x="12.3359" y="0.666504" width="12.6641" height="26.6665">
                <div
                  style={{
                    backdropFilter: 'blur(2px)',
                    clipPath: 'url(#bgblur_pause_1_clip_path)',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </foreignObject>
              <path
                data-figma-bg-blur-radius="4"
                d="M19.0026 4.6665H18.3359C17.2314 4.6665 16.3359 5.56193 16.3359 6.6665V21.3332C16.3359 22.4377 17.2314 23.3332 18.3359 23.3332H19.0026C20.1072 23.3332 21.0026 22.4377 21.0026 21.3332V6.6665C21.0026 5.56193 20.1072 4.6665 19.0026 4.6665Z"
                fill="#BEAB9A"
              />
              <foreignObject x="3" y="0.666504" width="12.6641" height="26.6665">
                <div
                  style={{
                    backdropFilter: 'blur(2px)',
                    clipPath: 'url(#bgblur_pause_2_clip_path)',
                    height: '100%',
                    width: '100%',
                  }}
                />
              </foreignObject>
              <path
                data-figma-bg-blur-radius="4"
                d="M9.66667 4.6665H9C7.89543 4.6665 7 5.56193 7 6.6665V21.3332C7 22.4377 7.89543 23.3332 9 23.3332H9.66667C10.7712 23.3332 11.6667 22.4377 11.6667 21.3332V6.6665C11.6667 5.56193 10.7712 4.6665 9.66667 4.6665Z"
                fill="#BEAB9A"
              />
              <defs>
                <clipPath id="bgblur_pause_1_clip_path" transform="translate(-12.3359 -0.666504)">
                  <path d="M19.0026 4.6665H18.3359C17.2314 4.6665 16.3359 5.56193 16.3359 6.6665V21.3332C16.3359 22.4377 17.2314 23.3332 18.3359 23.3332H19.0026C20.1072 23.3332 21.0026 22.4377 21.0026 21.3332V6.6665C21.0026 5.56193 20.1072 4.6665 19.0026 4.6665Z" />
                </clipPath>
                <clipPath id="bgblur_pause_2_clip_path" transform="translate(-3 -0.666504)">
                  <path d="M9.66667 4.6665H9C7.89543 4.6665 7 5.56193 7 6.6665V21.3332C7 22.4377 7.89543 23.3332 9 23.3332H9.66667C10.7712 23.3332 11.6667 22.4377 11.6667 21.3332V6.6665C11.6667 5.56193 10.7712 4.6665 9.66667 4.6665Z" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </div>
    </RevealAnimation>
  );
});

VoiceSampleItem.displayName = 'VoiceSampleItem';

export default VoiceSampleItem;
