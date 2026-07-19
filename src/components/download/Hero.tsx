import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[140px] pb-16 lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <RevealAnimation delay={0.1} instant>
          <h1 className="text-center font-normal">Download Page</h1>
        </RevealAnimation>
      </div>
    </section>
  );
};
Hero.displayName = 'Hero';
export default Hero;
