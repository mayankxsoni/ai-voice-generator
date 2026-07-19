import gradientBg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTA from '../shared/cta/CTA';

const AboutCTA = () => {
  return (
    <section className="py-[50px] md:py-20 lg:py-[100px]" aria-label="cta section wrapper">
      <div className="mx-auto px-5 lg:max-w-[980px] xl:max-w-[1260px] xl:px-0 2xl:max-w-[1440px]">
        <RevealAnimation delay={0.1}>
          <div className="bg-ns-ivory/80 relative overflow-hidden rounded-[20px] px-6 md:px-10 xl:px-20">
            <RevealAnimation delay={0.1} offset={200}>
              <div className="pointer-events-none absolute -bottom-52 left-7 z-0 h-[600px] w-[600px] -translate-x-1/2 rotate-120 select-none">
                <figure>
                  <Image src={gradientBg} alt="cta-bg" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>

            <CTA
              className="py-[50px] md:py-20 lg:py-[100px]"
              badgeClass="text-secondary bg-white"
              description="Start your free trial today and see your ideas come to life easily and creatively."
              ctaHeading="Build a complete website using the assistance"
              ctaBtnText="Get started"
              badgeText="Get started"
            />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AboutCTA;
