import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-ivory">Reasons to select us</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Unmatched security performance</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[744px]">
                This level of security is essential for businesses handling confidential information, financial
                transactions, and personal user data. With continuous monitoring and ai-driven threat analysis.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="bg-ns-linen flex flex-col space-y-8 rounded-[20px] py-6 md:flex-row md:space-y-0">
            <div className="max-md:border-b-stroke-10 md:border-r-stroke-10 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="bg-ns-ivory mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={checkCircle} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation
                    number={99}
                    speed={1000}
                    data-speed={1000}
                    interval={180}
                    rooms={2}
                    heightSpaceRatio={2.5}>
                    99
                  </NumberAnimation>
                  % malware protection rate
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  Defend against infections, data breaches, and cyber-attacks.
                </p>
              </div>
            </div>
            <div className="max-md:border-b-stroke-10 md:border-r-stroke-10 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="bg-ns-ivory mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={users} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={100} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.5}>
                    100
                  </NumberAnimation>
                  % software integrity
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  Shield systems from the most advanced cyber threats.
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <figure className="bg-ns-ivory mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={thumbsUp} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={5} speed={1000} interval={180} rooms={1} heightSpaceRatio={2.5}>
                    5
                  </NumberAnimation>
                  X Lighter system footprint
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  Ensuring seamless operations without slowing down devices.
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
