import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[140px] pb-14 md:pt-[192px] md:pb-28">
      <div className="main-container">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="md:text-heading-2 text-heading-3 font-normal">A/B testing</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[600px] text-center">
              A method of comparing two versions of a webpage, email, or feature to determine which performs better
              based on user behavior.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
