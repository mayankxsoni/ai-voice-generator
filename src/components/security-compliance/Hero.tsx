import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[140px] pb-16 lg:pb-20 xl:pt-[200px] xl:pb-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h1 className="text-center font-normal">Security and compliance at NextSaaS</h1>
        </RevealAnimation>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
