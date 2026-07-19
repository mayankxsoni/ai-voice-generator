import { CheckIcon } from '@/icons';
import totalEarnImg from '@public/images/ns-img-356.png';
import roundImage from '@public/images/ns-img-581.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const FeaturesV2 = () => {
  return (
    <section className="pt-32 pb-28 sm:pt-36 md:pt-42 xl:pt-[200px]">
      <div className="main-container flex flex-col-reverse items-center gap-x-24 gap-y-12 overflow-hidden lg:flex-row">
        <div className="relative flex w-full justify-start md:flex-1 lg:w-auto">
          <RevealAnimation delay={0.2}>
            <Image src={roundImage} alt="Finance Hero" className="h-auto w-full max-w-[450px]" />
          </RevealAnimation>
          <RevealAnimation delay={0.3} direction="right" offset={90}>
            <div className="bg-ns-linen text-heading-4 absolute top-[49%] right-[15%] flex max-h-[70px] max-w-[219px] items-center justify-center rounded-2xl p-4 text-white">
              $
              <NumberAnimation number={245450} speed={2000} interval={200} rooms={6} />
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100}>
            <figure className="shadow-10 absolute right-[17%] bottom-[15%] w-full max-w-[186px] overflow-hidden rounded-xl">
              <Image src={totalEarnImg} alt="Finance Hero" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
        <div className="flex flex-col md:flex-1 lg:items-start lg:text-left">
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">Designed to deliver Tangible outcomes</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mb-6">
              Take control of your finances with us and experience the confidence that comes with smart money
              management. Whether you&apos;re looking to budget better
            </p>
          </RevealAnimation>
          <ul className="mb-10 space-y-2 md:mb-14 md:space-y-3.5">
            <RevealAnimation delay={0.4}>
              <li className="text-tagline-1 flex items-center gap-3 font-medium">
                <span className="bg-secondary flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                Clarity Over Clutter
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="text-tagline-1 flex items-center gap-3 font-medium">
                <span className="bg-secondary flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                People Before Features
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="text-tagline-1 flex items-center gap-3 font-medium">
                <span className="bg-secondary flex size-[18px] items-center justify-center rounded-full">
                  <CheckIcon />
                </span>
                Security as a Standard
              </li>
            </RevealAnimation>
          </ul>
          <RevealAnimation delay={0.7}>
            <div>
              <LinkButton href="/signup" btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-xl-v2 ">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

FeaturesV2.displayName = 'FeaturesV2';
export default FeaturesV2;
