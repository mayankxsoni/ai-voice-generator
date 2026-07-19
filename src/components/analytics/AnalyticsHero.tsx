import hero1 from '@public/images/ns-img-596.png';
import hero2 from '@public/images/ns-img-597.png';
import hero3 from '@public/images/ns-img-598.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const AnalyticsHero = () => {
  return (
    <section className="relative pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[72px] flex flex-col items-center justify-center">
          <div className="mx-auto w-[95%] max-w-[850px] space-y-4 text-center">
            <RevealAnimation delay={0.3}>
              <h2>
                Your business. Your metrics. <br className="hidden md:block" />
                All in one view.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                With NextSaaS, you don’t need a dozen tools to understand what’s working. Our intuitive dashboard
                centralizes your key metrics, helping you monitor performance, spot trends, and make smarter, faster
                decisions.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <RevealAnimation delay={0.5}>
        <div className="mx-auto w-[98%] max-w-[1540px] rounded-2xl bg-white py-[100px] xl:px-[100px]">
          <div className="lp:max-w-[1416px] relative mx-auto max-w-[980px] lg:max-w-[1140px] xl:max-w-[1280px]">
            <RevealAnimation delay={0.4} direction="left">
              <figure className="absolute -top-10 left-10 z-20 max-w-[120px] overflow-hidden rounded-[20px] sm:max-w-[200px] lg:top-20 lg:left-20 lg:max-w-[282px] xl:top-1/2 xl:left-0 xl:-translate-y-1/2">
                <Image src={hero1} alt="hero" className="h-full w-full object-cover" />
              </figure>
            </RevealAnimation>
            <figure className="relative z-10 mx-auto max-w-[860px] overflow-hidden rounded-[20px] px-10 lg:px-0 xl:mx-0 xl:translate-x-[36%]">
              <Image src={hero2} alt="hero" className="h-full w-full rounded-[20px] object-cover lg:rounded-none" />
            </figure>
            <RevealAnimation delay={0.5} direction="right">
              <figure className="shadow-3 absolute right-0 bottom-0 z-20 max-w-[150px] overflow-hidden rounded-[20px] sm:right-14 sm:bottom-14 sm:max-w-[200px] lg:right-20 lg:bottom-5 lg:max-w-[320px] xl:top-1/2 xl:right-0 xl:bottom-auto xl:-translate-y-1/2">
                <Image src={hero3} alt="hero" className="h-full w-full" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

AnalyticsHero.displayName = 'AnalyticsHero';
export default AnalyticsHero;
