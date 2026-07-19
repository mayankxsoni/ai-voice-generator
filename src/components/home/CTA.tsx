'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const CTA = () => {
  return (
    <section
      className="py-[80px] md:py-[112px]"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/WebPageElement">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory uppercase" aria-label="Call to action section badge" itemProp="name">
              CTA
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Ready to make your SaaS <span className="text-ns-linen">impossible to ignore?</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p itemProp="description">Join 50+ SaaS founders who trust First Pixel to explain their product and drive signups.</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="/contact-us"
              btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
              aria-label="Get a free video brief - Navigate to contact page">
              Get Your Free Video Brief
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
