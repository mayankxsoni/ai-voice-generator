//Success Stories Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-36 pb-10 md:pt-42 md:pb-16 xl:pt-[180px] xl:pb-20" aria-label="success stories hero section">
      <div className="main-container">
        <div className="space-y-4 text-center mx-auto max-w-[720px]">
          <RevealAnimation delay={0.1}>
            <div>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs mb-2">
                Proven Results
              </span>
              <h1 className="text-secondary text-4xl sm:text-5xl font-extrabold tracking-tight">
                SaaS Success Stories That Drive Real ROI
              </h1>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/70 text-base sm:text-lg leading-relaxed">
              Discover how B2B SaaS teams increased signups, boosted trial activations, and accelerated sales pipeline with custom First Pixel explainer videos.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
