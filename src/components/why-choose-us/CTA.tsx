import rightGradient from '@public/images/ns-img-614.svg';
import leftGradient from '@public/images/ns-img-615.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

// why choose us cta

const CTA = () => {
  return (
    <section className="py-16 lg:py-22 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-12 relative z-0 mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-4xl px-5 py-28 text-center">
            <RevealAnimation delay={0.3} direction="left" offset={90} useSpring={true} duration={2.4}>
              <figure className="pointer-events-none absolute -bottom-10 -left-[10%] select-none md:-left-[5%] lg:left-0">
                <Image src={leftGradient} alt="cta image" className="pointer-events-none select-none max-sm:scale-75" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="right" offset={90} useSpring={true} duration={2.4}>
              <figure className="pointer-events-none absolute top-0 -right-[16%] select-none md:-right-[10%] lg:right-0">
                <Image
                  src={rightGradient}
                  alt="cta image"
                  className="pointer-events-none select-none max-sm:scale-75"
                />
              </figure>
            </RevealAnimation>
            <div className="space-y-2">
              <RevealAnimation delay={0.1}>
                <h2>
                  Speed up compliance and <br className="max-md:hidden" />
                  accelerate growth
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>
                  Create a resume that’s tailored, professional, and ready to
                  <br className="hidden lg:block" />
                  impress—powered by NestSaaS.
                </p>
              </RevealAnimation>
            </div>
            <ul className="mx-auto flex flex-col items-center justify-center gap-4 max-md:w-full md:mx-0 md:w-auto md:flex-row">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <div>
                  <LinkButton href="/pricing" btnClass="btn-secondary-v2 btn-lg-v2 hover:btn-primary-v2">
                    Get started
                  </LinkButton>
                </div>
              </RevealAnimation>
            </ul>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
