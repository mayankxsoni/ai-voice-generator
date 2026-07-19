import hotjarIcon from '@public/images/icons/hotjar.svg';
import notionIcon from '@public/images/icons/notion-v2.svg';
import scapicIcon from '@public/images/icons/scapic.svg';
import stripeIcon from '@public/images/icons/stripe.svg';
import nsAvatar17 from '@public/images/ns-avatar-17.png';
import nsAvatar20 from '@public/images/ns-avatar-20.png';
import nsAvatar21 from '@public/images/ns-avatar-21.png';
import nsAvatar23 from '@public/images/ns-avatar-23.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const SpotlightStories = () => {
  return (
    <section className="py-12 md:py-18 lg:pb-24 xl:py-28" aria-label="spotlight stories section">
      <div className="main-container space-y-17.5">
        <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div>
            <RevealAnimation delay={0.1}>
              <h2>Spotlight Stories</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>Real results from real teams</p>
            </RevealAnimation>
          </div>
          {/* btns */}
          <ul className="flex flex-col items-center justify-start gap-x-4 gap-y-3 max-md:w-full md:flex-row md:gap-y-0">
            <li className="w-[90%] md:w-auto">
              <RevealAnimation delay={0.3} direction="left" offset={70}>
                <div>
                  <LinkButton
                    href={'/customer'}
                    btnClass="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 "
                    className="mx-auto w-full md:mx-0 md:w-auto">
                    Read customer stories
                  </LinkButton>
                </div>
              </RevealAnimation>
            </li>
            <li className="w-[90%] list-none md:w-auto">
              <RevealAnimation delay={0.4} direction="left" offset={70}>
                <div>
                  <LinkButton
                    href={'/contact-us'}
                    btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 "
                    className="mx-auto w-full md:mx-0 md:w-auto">
                    Share your story
                  </LinkButton>
                </div>
              </RevealAnimation>
            </li>
          </ul>
        </div>
        {/* stories */}
        <article className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-2">
          <RevealAnimation delay={0.1}>
            <div className="bg-ns-ivory max-w-full rounded-xl p-6 xl:max-w-[316px]">
              <figure>
                <Image src={hotjarIcon} alt="story" />
              </figure>
              <p className="text-secondary pt-16 pb-8">
                We easily converted scripts into natural voices and scaled our ad campaigns faster than ever.
              </p>
              <figure className="flex items-center gap-3">
                <Image
                  src={nsAvatar20}
                  className="size-11 rounded-full object-cover object-center"
                  alt="Andrew Gasiorowski's avatar"
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <figure>
                  <h3 className="text-tagline-1 leading-normal font-semibold sm:text-lg">Andrew Gasiorowski</h3>
                  <p className="text-tagline-2 text-secondary/60 font-normal">NLP Engineer Goodcall</p>
                </figure>
              </figure>
            </div>
          </RevealAnimation>
          <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
            <RevealAnimation delay={0.2}>
              <div className="bg-ns-ivory rounded-xl p-6 xl:max-w-[316px]">
                <RevealAnimation delay={0.1}>
                  <span
                    className="bg-ns-linen text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap text-white"
                    role="text"
                    aria-label="Section category">
                    Case study
                  </span>
                </RevealAnimation>
                <p className="text-secondary pt-16 pb-8">
                  SoundWave Studios boosts video output by 40% using AI-generated voices.
                </p>
                <div className="w-[90%] md:w-auto">
                  <LinkButton
                    href="case-study/ai-powered-patient-care-solutions-in-healthcare"
                    className="mx-auto w-full md:mx-0 md:w-auto"
                    btnClass="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    Read now
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="bg-ns-linen space-y-3 rounded-xl p-6 xl:max-w-[316px]">
                <h2 className="pt-6 text-4xl font-light text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[110%]">
                  <NumberAnimation number={50} speed={1000} interval={180} rooms={2} heightSpaceRatio={2}>
                    50%
                  </NumberAnimation>
                </h2>
                <p>less time spent on dubbing compared to traditional workflows.</p>
              </div>
            </RevealAnimation>
          </div>
          <div className="max-w-full space-y-5 max-lg:w-full lg:space-y-2">
            <RevealAnimation delay={0.4}>
              <div className="bg-ns-ivory rounded-xl p-6 xl:max-w-[316px]">
                <figure>
                  <Image src={stripeIcon} alt="story" />
                </figure>
                <p className="text-secondary pt-37.5 pb-8">The voice clarity and tone customization blew us away!</p>
                <figure className="flex items-center gap-3">
                  <Image
                    src={nsAvatar21}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Carlos M.'s avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h3 className="text-tagline-1 leading-normal font-semibold sm:text-lg">Carlos M.</h3>
                    <p className="text-tagline-2 text-secondary/60 font-normal">Business Owner</p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div className="bg-ns-ivory rounded-xl p-6 xl:max-w-[316px]">
                <figure>
                  <Image src={notionIcon} alt="story" />
                </figure>
                <p className="text-secondary pt-31 pb-8">
                  We instantly localize our campaigns with natural accents — no extra cost, no delays.
                </p>
                <figure className="flex items-center gap-3">
                  <Image
                    src={nsAvatar23}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Nora Kim.'s avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h3 className="text-tagline-1 leading-normal font-semibold sm:text-lg">Nora Kim.</h3>
                    <p className="text-tagline-2 text-secondary/60 font-normal">Marketing Lead, AdPulse Global</p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="max-w-full space-y-5 lg:space-y-2">
            <RevealAnimation delay={0.4}>
              <div className="bg-secondary rounded-xl p-6 xl:max-w-[316px]">
                <RevealAnimation delay={0.1}>
                  <span
                    className="bg-accent/10 text-tagline-3 rounded-full px-5 py-1.5 font-medium text-nowrap text-white"
                    role="text"
                    aria-label="Section category">
                    Case study
                  </span>
                </RevealAnimation>
                <p className="pt-5 pb-8 text-white">
                  SoundWave Studios boosts video output by 40% using AI-generated voices.
                </p>
                <div className="w-[90%] md:w-auto">
                  <LinkButton
                    href="case-study/bright-path-customer-engagement-and-retention"
                    className="mx-auto w-full md:mx-0 md:w-auto"
                    btnClass="btn-lg-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2 border-0">
                    Read now
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <div className="bg-ns-ivory rounded-xl p-6 xl:max-w-[316px]">
                <figure>
                  <Image src={scapicIcon} alt="story" />
                </figure>
                <p className="text-secondary pt-19 pb-8">
                  Our explainer videos now sound professional without hiring multiple voice actors. It's a total
                  game-changer.
                </p>
                <figure className="flex items-center gap-3">
                  <Image
                    src={nsAvatar17}
                    className="size-11 rounded-full object-cover object-center"
                    alt="Liam Brooks's avatar"
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                  <figure>
                    <h3 className="text-tagline-1 leading-normal font-semibold sm:text-lg">Liam Brooks</h3>
                    <p className="text-tagline-2 text-secondary/60 font-normal">Video Producer, BrightMotion</p>
                  </figure>
                </figure>
              </div>
            </RevealAnimation>
          </div>
        </article>
      </div>
    </section>
  );
};

SpotlightStories.displayName = 'SpotlightStories';
export default SpotlightStories;
