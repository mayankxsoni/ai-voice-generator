//   Affiliate Process section
import RevealAnimation from '../animation/RevealAnimation';
import AffiliatesList from './AffiliatesList';
import AffiliatesStep from './AffiliatesStep';

const AffiliateProcess = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="mx-auto max-w-[602px] space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory mb-5">process</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>How it works</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Becoming a NextSaaS affiliate and earning money is simple</p>
            </RevealAnimation>
          </div>
          <AffiliatesStep />
        </div>
        <AffiliatesList />
      </div>
    </section>
  );
};

AffiliateProcess.displayName = 'AffiliateProcess';
export default AffiliateProcess;
