import RevealAnimation from '@/components/animation/RevealAnimation';

import LinkButton from '@/components/ui/button/Button';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Image from 'next/image';
import gradient6 from '../../public/images/ns-img-498.png';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '404 - AI Voice Generator || NextSaaS',
};

const NotFound = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <section className="section-reveal pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-40 xl:pt-60 xl:pb-52">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="bg-background-3 dark:bg-background-5 dark:border-background-9 relative flex flex-col items-center justify-center overflow-hidden rounded-4xl border-[10px] border-white py-10 pr-2.5 text-center md:py-20 lg:py-[100px]">
              <RevealAnimation delay={0.2} direction="right" offset={200}>
                <figure className="hero-gradient-2 pointer-events-none absolute -top-[45%] -right-[68%] -z-0 h-full w-full -rotate-[68deg] opacity-70 select-none sm:-top-[65%] sm:-right-[48%]">
                  <Image src={gradient6} alt="gradient" className="rotate-180" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h1 className="text-[80px] leading-[1.1] font-medium md:text-[120px] lg:!text-[180px] xl:!text-[200px]">
                  404
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <h2 className="pt-6 pb-3">
                  Opps! <br />
                  Lost in the page?
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <p className="mb-10 md:mb-14">Don’t worry, we’ll help you find your way</p>
              </RevealAnimation>
              <RevealAnimation delay={0.6} instant>
                <div>
                  <LinkButton href="/" btnClass="btn-xl-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2">
                    Go to Home
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
