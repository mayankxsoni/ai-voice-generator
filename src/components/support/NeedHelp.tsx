import support from '@public/images/ns-img-401.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const NeedHelp = () => {
  return (
    <section className="pt-32 pb-[60px] sm:pt-36 md:pt-42 lg:pb-[100px] xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[60px] space-y-8 text-center max-w-[700px] mx-auto">
          <div className="space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
                First Pixel Support Center
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight">
                Need help planning your SaaS video campaign?
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary/70 text-base sm:text-lg leading-relaxed">
                Whether you have questions about custom animation styles, scriptwriting, turnaround times, or video embedding—our creative production team is here to help.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.5}>
            <div>
              <LinkButton href="/contact-us" btnClass="btn-xl-v2 btn-primary-v2">
                Talk to a Producer →
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="section-reveal mx-auto max-w-[900px]">
            <figure className="overflow-hidden rounded-[24px] border border-gray-100 shadow-xl">
              <Image src={support} alt="First Pixel support & producer team" className="w-full object-cover" />
            </figure>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default NeedHelp;
