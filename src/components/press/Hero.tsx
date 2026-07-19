//press hero
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Hero = () => {
  return (
    <section className="pt-[100px] pb-16 lg:pt-[140px] lg:pb-20 xl:pt-[170px] xl:pb-28">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge bg-ns-linen mb-5 text-white"> Press </span>
          </RevealAnimation>
          <div className="mt-5 mb-14 space-y-4 text-center">
            <RevealAnimation delay={0.2}>
              <h1 className="font-normal">
                Stay <span className="text-ns-linen">updated</span> with the latest <br />
                from NextSaaS
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Explore official press releases, product announcements,
                <br />
                and media coverage all in one place.
              </p>
            </RevealAnimation>
          </div>
          <div className="flex flex-col items-center justify-center gap-x-4 gap-y-3 md:flex-row md:gap-y-0">
            <RevealAnimation delay={0.4} direction="left" offset={50} instant>
              <div>
                <LinkButton href="/brandkit" btnClass="btn-secondary-v2 btn-xl-v2 hover:btn-primary-v2">
                  <span>Download press kit</span>
                </LinkButton>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50} instant>
              <div>
                <LinkButton href="/pricing" btnClass="btn-v2-white btn-xl-v2 hover:btn-primary-v2">
                  <span>Build Ai</span>
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
