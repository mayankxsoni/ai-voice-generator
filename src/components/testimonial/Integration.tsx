import { cn } from '@/utils/cn';
import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import google_meet from '@public/images/icons/google-meet.svg';
import google from '@public/images/icons/google.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import ms_yammer from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import vl from '@public/images/icons/vl.svg';
import Image, { type StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

type LogoItem = {
  id: string;
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

const figureClasses = 'ml-8 flex size-20 items-center justify-center rounded-full bg-ns-ivory md:size-[120px]';

const marqueeOneLogos: LogoItem[] = [
  { id: 'google', src: google, alt: 'Google logo' },
  { id: 'slack', src: slack, alt: 'Slack logo' },
  { id: 'confluence', src: confluence, alt: 'Confluence logo' },
  { id: 'snapchat', src: snapchat, alt: 'Snapchat logo' },
  { id: 'ms-yammer', src: ms_yammer, alt: 'Yammer logo' },
  { id: 'figma', src: figma, alt: 'Figma logo' },
  { id: 'microsoft', src: microsoft, alt: 'Microsoft logo' },
];

const marqueeTwoLogos: LogoItem[] = [
  { id: 'google-meet', src: google_meet, alt: 'Google Meet logo' },
  { id: 'edge', src: edge, alt: 'Microsoft Edge logo', width: 48, height: 48 },
  { id: 'vl', src: vl, alt: 'LV logo' },
  { id: 'framer', src: framer, alt: 'Framer logo' },
  { id: 'marvel', src: marvel, alt: 'Marvel logo' },
  { id: 'confluence-2', src: confluence, alt: 'Confluence logo' },
  { id: 'gmail', src: gmail, alt: 'Gmail logo' },
];

const Integration = () => {
  return (
    <section
      className="bg-background-2 py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
      aria-label="Integration Partners">
      <div className="main-container">
        <div className="space-y-[70px]">
          {/* integration heading  */}
          <div className="mx-auto w-full max-w-[1028px] text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-ivory mb-5">Integration</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-3 lg:text-heading-2 mb-3">
                Enhance your productivity effortlessly with over 50 integrations.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/60 mx-auto w-full max-w-[582px]">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin
                though it looks like nothing.
              </p>
            </RevealAnimation>
          </div>
          {/* brand logos  */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-7">
              {/* marquee logo one  */}
              <div className="relative mx-auto max-w-[1128px]">
                {/* left gradient overlay  */}
                <div className="from-background-2/90 absolute top-0 left-0 z-40 h-[120px] w-[15%] bg-linear-to-r to-transparent md:w-[20%]" />
                {/* right gradient overlay  */}
                <div className="from-background-2/90 absolute top-0 right-0 z-40 h-[120px] w-[15%] bg-linear-to-l to-transparent md:w-[20%]" />
                <Marquee autoFill speed={70}>
                  <div className="flex items-center justify-center gap-5 md:gap-[34px]">
                    {marqueeOneLogos.map(({ id, src, alt, width, height }) => (
                      <figure key={id} className={figureClasses}>
                        <Image
                          src={src}
                          alt={alt}
                          loading="lazy"
                          className={cn(id !== 'edge' && 'size-12')}
                          width={width}
                          height={height}
                        />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>

              {/* marquee logo two  */}
              <div className="relative mx-auto max-w-[985px]">
                {/* left side gradient overlay  */}
                <div className="from-background-2/90 absolute top-0 left-0 z-40 h-[120px] w-[15%] bg-linear-to-r to-transparent md:w-[20%]" />
                {/* right side gradient overlay  */}
                <div className="from-background-2/90 absolute top-0 right-0 z-40 h-[120px] w-[15%] bg-linear-to-l to-transparent md:w-[20%]" />
                <Marquee autoFill speed={70} direction="right">
                  <div className="flex items-center justify-center gap-[34px]">
                    {marqueeTwoLogos.map(({ id, src, alt, width, height }) => (
                      <figure key={id} className={figureClasses}>
                        <Image
                          src={src}
                          alt={alt}
                          loading="lazy"
                          className={cn(id !== 'edge' && 'size-12')}
                          width={width}
                          height={height}
                        />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
