import RevealAnimation from '@/components/animation/RevealAnimation';
import podcastingImage from '@public/images/ns-img-545.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import VoiceStyleBadges from './VoiceStyleBadges';
import VoiceStyleLeftCards from './VoiceStyleLeftCards';

interface Language {
  flagSrc: string;
  flagAlt: string;
  name: string;
}

const VoiceStyle = () => {
  const videoFormats: Language[] = [
    { flagSrc: '/images/icons/united-kindom-flag.svg', flagAlt: '2D Animation icon', name: '2D Animation' },
    { flagSrc: '/images/icons/germany-flag.svg', flagAlt: 'Motion Graphics icon', name: 'Motion Graphics' },
    { flagSrc: '/images/icons/china-flag.svg', flagAlt: 'Whiteboard icon', name: 'Whiteboard' },
    { flagSrc: '/images/icons/south-korea-flag.svg', flagAlt: 'Screen Recording icon', name: 'Screen Recording' },
    { flagSrc: '/images/icons/united-kindom-flag.svg', flagAlt: 'Kinetic Typography icon', name: 'Kinetic Typography' },
    { flagSrc: '/images/icons/germany-flag.svg', flagAlt: '3D Animation icon', name: '3D Animation' },
    { flagSrc: '/images/icons/china-flag.svg', flagAlt: 'Character Animation icon', name: 'Character Animation' },
    { flagSrc: '/images/icons/south-korea-flag.svg', flagAlt: 'Live Action icon', name: 'Live Action' },
  ];

  return (
    <section className="py-[80px] xl:py-[112px]" aria-labelledby="voice-styles-section-heading">
      <div className="main-container">
        <div className="space-y-8 md:space-y-16 xl:space-y-24">
          <div className="flex flex-col items-center justify-center gap-y-10 xl:flex-row xl:justify-between">
            {/* content  */}
            <div className="ml-0 w-full space-y-3 text-center xl:max-w-[398px] xl:text-left">
              <RevealAnimation delay={0.1}>
                <h2 className="font-normal" id="voice-styles-section-heading">
                  Choose from our <span className="text-ns-linen">video</span> styles
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>Select from a diverse range of video styles — from clean motion graphics to character-driven 2D animation. Each tailored to your SaaS brand.</p>
              </RevealAnimation>
            </div>

            {/* card  badge  */}
            <VoiceStyleBadges />
          </div>

          {/* cards  */}
          <div
            className="flex flex-col items-center justify-center gap-y-8 overflow-hidden xl:flex-row xl:gap-x-8 xl:gap-y-0"
            aria-label="Use case examples">
            {/* left area  */}
            <VoiceStyleLeftCards />

            {/* middle area  */}
            <RevealAnimation delay={0.4}>
              <div
                className="w-full max-w-[695px] space-y-[89px] rounded-4xl border border-[#F4EFE7] p-6 xl:max-w-[560px]"
                aria-labelledby="languages-heading">
                <div className="space-y-2">
                  <p className="text-secondary text-tagline-1 font-normal">Production formats for every platform</p>
                  <h3 id="languages-heading" className="text-heading-5 font-normal">
                    From product demos to social-ready cuts.
                  </h3>
                </div>

                {/* marquee  */}
                <div
                  className="relative w-full space-y-[14px] overflow-hidden rounded-2xl bg-[#F4EFE7] p-4 xl:max-w-[512px]"
                  aria-labelledby="language-marquee-heading">
                  <h4 id="language-marquee-heading" className="text-heading-6 relative z-20 font-normal">
                    Video Format
                  </h4>

                  <div className="overflow-hidden" aria-label="Available video formats">
                    <Marquee autoFill speed={50} gradient={false}>
                      <div className="ml-3 flex items-center justify-center gap-x-3">
                        {videoFormats.map((format) => (
                          <div
                            key={format.name}
                            className="shadow-14 flex h-12 w-auto min-w-[131px] shrink-0 items-center justify-start gap-x-3 rounded-full bg-white px-4"
                            aria-label={`${format.name} video format`}>
                            <span className="size-3 rounded-full bg-ns-linen shrink-0" />
                            <p className="text-secondary font-normal whitespace-nowrap">{format.name}</p>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                  </div>

                  {/* left bg  */}

                  <div
                    className="absolute top-0 left-0 z-10 h-36 w-[126px] rotate-180"
                    style={{ background: 'linear-gradient(270deg, #f4efe7 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                  {/* right bg  */}

                  <div
                    className="absolute top-0 right-0 z-10 h-36 w-[126px]"
                    style={{ background: 'linear-gradient(270deg, #f4efe7 16.67%, rgba(244, 239, 231, 0) 100%)' }}
                  />
                </div>
              </div>
            </RevealAnimation>

            {/* right area  */}
            <RevealAnimation delay={0.5} direction="right" offset={80}>
              <div className="group relative hidden overflow-hidden xl:block" aria-label="Podcasting use case">
                <figure className="w-full max-w-[218px] overflow-hidden rounded-4xl">
                  <Image
                    src={podcastingImage}
                    alt="Podcasting use case example for AI voice generator"
                    width={218}
                    height={327}
                    className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
                    title="Podcasting AI voice application"
                  />
                </figure>
                <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[202px] -translate-x-1/2 translate-y-0 rounded-full bg-white px-4 py-2 opacity-0 backdrop-blur-[15px] transition-all duration-600 ease-in-out group-hover:-translate-y-12 group-hover:opacity-100">
                  Motion Graphics
                </h3>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceStyle;
