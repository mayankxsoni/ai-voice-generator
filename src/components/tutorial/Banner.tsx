import learnBanner from '@public/images/ns-img-610.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Banner = () => {
  return (
    <section className="pt-[170px] pb-[80px] md:pb-[120px] xl:pt-[200px]">
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto max-w-[540px] flex-1 space-y-8 text-center lg:mx-0 lg:max-w-full lg:text-left">
            <div className="space-y-4">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
                  SaaS Video Playbook
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="text-secondary text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Mastering SaaS Video Strategy: Step-by-Step Playbooks
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 text-base sm:text-lg leading-relaxed">
                  Learn how top B2B SaaS teams write high-converting scripts, simplify complex software UI, and launch explainer videos that turn visitors into demo requests.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.4}>
              <div>
                <LinkButton href="/#services" btnClass="btn-xl-v2 btn-primary-v2">
                  Explore Agency Services →
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="flex-1">
            <RevealAnimation delay={0.3}>
              <figure className="w-full max-w-[596px] overflow-hidden rounded-[24px] border border-gray-100 shadow-xl">
                <Image src={learnBanner} className="h-full w-full object-cover" alt="SaaS video production playbook preview" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
