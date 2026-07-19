import learnBanner from '@public/images/ns-img-610.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Banner = () => {
  return (
    <section className="pt-[170px] pb-[100px] md:pb-[200px] xl:pt-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto max-w-[540px] flex-1 space-y-14 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2>Built for your business. Adapted to your workflow.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  NextSaaS is designed to serve a wide range of teams and industries. Whether you’re managing data,
                  scaling operations, optimizing finances, or streamlining customer experiences—NextSaaS is the platform
                  that grows with you.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3} instant>
              <div>
                <LinkButton href="/services" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                  Explore the platform
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3} instant>
              <figure className="w-full max-w-[596px] overflow-hidden rounded-[20px] opacity-0">
                <Image src={learnBanner} className="h-full w-full object-cover" alt="learn banner" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
