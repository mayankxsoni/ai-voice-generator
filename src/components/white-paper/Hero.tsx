//white paper hero
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="space-y-6 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory">Whitepapers &amp; Insights</span>
          </RevealAnimation>
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="font-normal">
                Deep research. real data.
                <br />
                actionable SaaS strategies.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Explore our exclusive whitepapers packed with expert insights, case studies, and growth playbooks for{' '}
                <br />
                modern SaaS businesses. Stay ahead with knowledge that drives performance.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
