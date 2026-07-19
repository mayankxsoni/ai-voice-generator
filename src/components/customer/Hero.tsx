//Customer Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-32 sm:pt-36 md:pt-42 xl:pt-[180px]" aria-label="customer hero section">
      <div className="main-container">
        {/* Hero content */}
        <div className="space-y-4 pb-20 text-center lg:pb-28">
          <RevealAnimation delay={0.1}>
            <h1 className="lg:text-heading-2 font-normal">Customer stories</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-secondary/60 dark:text-accent/60 lg:mx-auto lg:max-w-[518px]">
              Discover case studies on how Supabase is being used around the world to quickly create outstanding
              products and set new industry standards.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
