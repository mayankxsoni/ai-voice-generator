import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">Our Manifesto</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal">Our manifesto</h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
