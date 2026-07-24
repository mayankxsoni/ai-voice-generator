import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="py-[80px]">
      <div className="main-container">
        <div className="mb-[60px] space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
              Proven Production Impact
            </span>
          </RevealAnimation>
          <div className="space-y-3 max-w-[760px] mx-auto">
            <RevealAnimation delay={0.3}>
              <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Designed to maximize video conversion & ROI
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/70 text-base">
                Our videos combine ICP storytelling, high-energy UI motion design, and psychological hooks that turn curious visitors into active product users.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="bg-secondary flex flex-col space-y-8 rounded-[28px] py-10 px-6 md:flex-row md:space-y-0 shadow-xl text-white">
            
            {/* Stat 1 */}
            <div className="max-md:border-b border-white/10 md:border-r flex-1 space-y-4 py-4 text-center">
              <figure className="bg-white/10 mx-auto flex size-14 items-center justify-center rounded-2xl p-3 border border-white/20">
                <Image src={checkCircle} alt="Satisfied clients" className="size-7 brightness-200" />
              </figure>
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold flex items-center justify-center text-white">
                  <NumberAnimation
                    number={98}
                    speed={1000}
                    interval={180}
                    rooms={2}
                    heightSpaceRatio={2.5}
                  >
                    98
                  </NumberAnimation>
                  % Client Retention Rate
                </h3>
                <p className="text-white/60 text-xs max-w-[260px] mx-auto">
                  Trusted by founders and product leaders across 50+ B2B SaaS platforms.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="max-md:border-b border-white/10 md:border-r flex-1 space-y-4 py-4 text-center">
              <figure className="bg-white/10 mx-auto flex size-14 items-center justify-center rounded-2xl p-3 border border-white/20">
                <Image src={users} alt="Production timeline" className="size-7 brightness-200" />
              </figure>
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold flex items-center justify-center text-white">
                  <NumberAnimation number={14} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    14
                  </NumberAnimation>
                  -Day Average Delivery
                </h3>
                <p className="text-white/60 text-xs max-w-[260px] mx-auto">
                  Fast 2-week rush turnaround available for product launches and ad campaigns.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex-1 space-y-4 py-4 text-center">
              <figure className="bg-white/10 mx-auto flex size-14 items-center justify-center rounded-2xl p-3 border border-white/20">
                <Image src={thumbsUp} alt="Conversion boost" className="size-7 brightness-200" />
              </figure>
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold flex items-center justify-center text-white">
                  <NumberAnimation number={5} speed={1000} interval={180} rooms={1} heightSpaceRatio={2.5}>
                    5
                  </NumberAnimation>
                  X Average Conversion Lift
                </h3>
                <p className="text-white/60 text-xs max-w-[260px] mx-auto">
                  Higher engagement and faster trial activations across landing pages and ad channels.
                </p>
              </div>
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Features;
