// affiliate-program section
import affiliatesCover from '@public/images/ns-img-371.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const AffiliateProgram = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-[70px]">
          <RevealAnimation delay={0.1}>
            <div className="mx-auto max-w-[602px] space-y-1.5 md:space-y-3 md:text-center">
              <h2>NextSaaS affiliate program</h2>
              <h3 className="text-heading-4">Earn up to $200 per referral!</h3>
              <p>
                Become part of the NextSaaS family by joining our Affiliate Program. Help businesses grow while you earn
                generous commissions — it’s a win-win!
              </p>
              <div className="mt-7 md:mt-14">
                <LinkButton
                  href="/affiliate-policy"
                  className="block w-full md:inline-block md:w-auto"
                  btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                  Join now
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2} instant>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliatesCover}
                className="h-full w-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
          <div className="max-w-[830px] space-y-3">
            <RevealAnimation delay={0.3}>
              <h4>Why join the NextSaaS affiliate program?</h4>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Our rapidly growing platform, high customer satisfaction, and strong renewal rates make promoting <br />
                NextSaaS easy and profitable.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <ul className="space-y-2">
                <li className="text-tagline-1 text-secondary/60 before:bg-secondary font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary font-medium">Earn money doing what you love: </strong>
                  <span>
                    Whether you&apos;re an SEO expert, content creator, community leader, or ad specialist, there’s an
                    opportunity for you.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 before:bg-secondary font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary font-medium">Trusted by businesses worldwide: </strong>
                  <span>
                    Our solutions are designed to scale, making them attractive for a wide variety of clients.
                  </span>
                </li>
                <li className="text-tagline-1 text-secondary/60 before:bg-secondary font-normal before:relative before:left-0 before:mr-1 before:inline-block before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:content-['']">
                  <strong className="text-secondary font-medium">Attractive lifetime deals: </strong>
                  <span> Make it easier for your audience to invest and grow with NextSaaS. </span>
                </li>
              </ul>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

AffiliateProgram.displayName = 'AffiliateProgram';
export default AffiliateProgram;
