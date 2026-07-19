//Success Stories Hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-36 pb-10 md:pt-42 md:pb-24 xl:pt-[180px] xl:pb-28" aria-label="success stories hero section">
      <div className="main-container">
        <div className="space-y-4 text-center lg:mx-auto lg:max-w-[610px]">
          <RevealAnimation delay={0.1} instant>
            <h1 className="lg:text-heading-2">Success stories that inspire innovation</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <p>
              Discover how teams and creators are scaling faster, simplifying workflows, and unlocking growth all
              powered by NextSaaS.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
