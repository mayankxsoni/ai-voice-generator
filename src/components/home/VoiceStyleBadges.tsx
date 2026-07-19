import RevealAnimation from '@/components/animation/RevealAnimation';
import { PlayIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export interface VoiceStyleCard {
  imgLink: string;
  name: string;
  description: string;
}

const voiceStyleBadges: { row1: VoiceStyleCard[]; row2: VoiceStyleCard[]; row3: VoiceStyleCard[] } = {
  row1: [
    { imgLink: '/images/ns-avatar-16.png', name: 'Ava', description: 'Soft & natural' },
    { imgLink: '/images/ns-avatar-15.png', name: 'Liam', description: 'Bold & energetic' },
    { imgLink: '/images/ns-avatar-17.png', name: 'Maya', description: 'Warm & calm' },
  ],
  row2: [
    { imgLink: '/images/ns-avatar-29.png', name: 'Ethan', description: 'Clear' },
    { imgLink: '/images/ns-avatar-28.png', name: 'Zoe', description: 'Bright & Light' },
    { imgLink: '/images/ns-avatar-31.png', name: 'Daniel', description: 'Confident & Crispy' },
    { imgLink: '/images/ns-avatar-32.png', name: 'Noah', description: 'Warm' },
  ],
  row3: [
    { imgLink: '/images/ns-avatar-35.png', name: 'Chloe', description: 'Cool & friendly' },
    { imgLink: '/images/ns-avatar-33.png', name: 'Luna', description: 'Gentle & dreamy' },
    { imgLink: '/images/ns-avatar-34.png', name: 'Oliver', description: 'Clear & dynamic' },
  ],
};

const VoiceStyleBadges = () => {
  return (
    <div className="flex w-full max-w-[811px] flex-col gap-y-3 overflow-hidden">
      {/* row one  */}
      <RevealAnimation delay={0.3} direction="left" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {voiceStyleBadges.row1.map((style) => (
            <div
              key={style.name}
              className="shadow-14 flex min-w-[160px] items-center justify-start gap-x-3 rounded-full border border-[#DFD1C5] bg-white py-1 pr-4 pl-1 lg:min-w-[192px]">
              <figure className="relative z-10 size-11 overflow-hidden rounded-full sm:size-14">
                <Image
                  src={style.imgLink}
                  alt={`${style.name} voice style avatar`}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 z-20 size-7 shrink-0 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon />
                </span>
              </figure>
              <div>
                <p className="text-tagline-1 text-secondary font-normal">{style.name}</p>
                <p className="text-tagline-2 font-normal text-nowrap">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealAnimation>

      {/* row two  */}
      <RevealAnimation delay={0.4} direction="right" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {voiceStyleBadges.row2.map((style, index) => (
            <div
              key={style.name}
              className={cn(
                'shadow-14 flex min-w-[160px] items-center justify-start gap-x-3 rounded-full border border-[#DFD1C5] bg-white py-1 pr-4 pl-1 lg:min-w-[192px]',
                index === 1 && 'max-[376px]:hidden',
              )}>
              <figure className="relative z-10 size-11 overflow-hidden rounded-full sm:size-14">
                <Image
                  src={style.imgLink}
                  alt={`${style.name} voice style avatar`}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 z-20 size-7 shrink-0 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon />
                </span>
              </figure>
              <div>
                <p className="text-tagline-1 text-secondary font-normal">{style.name}</p>
                <p className="text-tagline-2 font-normal text-nowrap">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealAnimation>

      {/* row three  */}
      <RevealAnimation delay={0.5} direction="left" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {voiceStyleBadges.row3.map((style, index) => (
            <div
              key={style.name}
              className={cn(
                'shadow-14 flex min-w-[160px] items-center justify-start gap-x-3 rounded-full border border-[#DFD1C5] bg-white py-1 pr-4 pl-1 lg:min-w-[192px]',
                index === 0 && 'max-[376px]:hidden',
              )}>
              <figure className="relative z-10 size-11 overflow-hidden rounded-full sm:size-14">
                <Image
                  src={style.imgLink}
                  alt={`${style.name} voice style avatar`}
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
                <span className="absolute top-1/2 left-1/2 z-20 size-7 shrink-0 -translate-x-1/2 -translate-y-1/2">
                  <PlayIcon />
                </span>
              </figure>
              <div>
                <p className="text-tagline-1 text-secondary font-normal">{style.name}</p>
                <p className="text-tagline-2 font-normal text-nowrap">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
};

export default VoiceStyleBadges;
