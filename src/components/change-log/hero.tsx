import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[140px] pb-16 lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-4 text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <h1 className="font-normal">Changelog</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-full sm:max-w-[550px] lg:mx-0 lg:max-w-full">
              Automatically track product updates, bug fixes, and release notes so your team
              <br className="hidden lg:block" />
              and customers stay informed.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
