import Image from 'next/image';
import gradientBg from '@public/images/ns-img-523.png';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

const AboutCTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="About page CTA section">
      <div className="mx-auto px-5 lg:max-w-[980px] xl:max-w-[1260px] xl:px-0 2xl:max-w-[1440px]">
        <RevealAnimation delay={0.1}>
          <div className="bg-ns-ivory/80 relative overflow-hidden rounded-[24px] px-6 py-16 md:px-14 xl:px-20 xl:py-20">

            {/* Background gradient blob */}
            <RevealAnimation delay={0.1} offset={200}>
              <div className="pointer-events-none absolute -bottom-52 left-7 z-0 h-[600px] w-[600px] -translate-x-1/2 rotate-120 select-none opacity-60">
                <figure>
                  <Image src={gradientBg} alt="cta-bg" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-[720px] mx-auto">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-ivory">Let&apos;s make something great</span>
              </RevealAnimation>

              <RevealAnimation delay={0.3}>
                <h2 className="text-secondary text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                  Ready to make your SaaS{' '}
                  <span className="text-primary-500">impossible to ignore?</span>
                </h2>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <p className="text-secondary/60 text-lg leading-relaxed max-w-[520px]">
                  Join 50+ SaaS founders who trust First Pixel to explain their product 
                  and drive signups. Book a free 20-minute discovery call — no commitment, just clarity.
                </p>
              </RevealAnimation>

              <RevealAnimation delay={0.5}>
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-secondary/80 hover:scale-105 transition-all duration-300"
                  >
                    Get Your Free Video Brief
                  </Link>
                  <Link
                    href="/case-study"
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-white px-8 py-4 text-base font-medium text-secondary hover:border-primary-500 hover:text-primary-500 transition-all duration-300"
                  >
                    Explore Our Work →
                  </Link>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <p className="text-secondary/40 text-sm">
                  60-second videos · 100% custom · No templates
                </p>
              </RevealAnimation>
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutCTA;
