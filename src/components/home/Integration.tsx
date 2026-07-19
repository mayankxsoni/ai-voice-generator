import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import IntegrationCircle from './IntegrationCircle';

const Integration = () => {
  return (
    <section className="py-[80px] md:h-[750px] md:py-[120px] lg:py-[156px] xl:h-[956px]">
      <RevealAnimation delay={0.1}>
        <div className="relative mx-auto h-[620px] max-w-[1600px] overflow-hidden">
          <div className="main-container lp:pb-4 relative z-30">
            <div className="mt-[180px] space-y-[76px] md:mt-[200px] lg:mt-[280px]">
              <div className="space-y-4 text-center">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-ivory">Workflow</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2>
                      Works with your <span className="text-ns-linen">existing stack</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="mx-auto max-w-[367px] text-center">
                      We deliver videos ready for your website, Loom, Product Hunt, LinkedIn, and ad platforms — wherever your audience is.
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.5} offset={10}>
                <div className="text-center">
                  <LinkButton
                    href="/services"
                    btnClass="btn-lg-v2 lg:btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    See delivery formats
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* circle  */}
          <div className="absolute top-2 left-1/2 -z-10 -translate-x-1/2">
            <div className="w-[800px] md:w-[750px] lg:w-[990px] xl:w-[1300px] 2xl:w-[1400px]">
              <IntegrationCircle />
            </div>
          </div>

          {/* bottom gradient overlay  */}
          <div
            className="lp:-bottom-5 absolute bottom-0 z-0 h-[258px] w-full rotate-180"
            style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 49.16%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Integration;
