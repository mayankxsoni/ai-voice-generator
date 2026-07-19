import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// legal notice content
const Content = () => {
  return (
    <section className="pb-16 lg:pb-20 xl:pb-28">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[950px]">
          <RevealAnimation delay={0.1}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Publisher:</h2>
              <p>
                The{' '}
                <Link href="/" className="text-ns-linen">
                  https://www.nextsaas.ai
                </Link>{' '}
                website is published by: <br />
                NextSaaS is registered in the Trade and Companies Register under number 000000000. <br />
                Registered office: 45 Innovation Avenue, Level 3 – San Francisco, CA 94107, USA <br />
                Intracommunity VAT number: US000000000 <br />
                E-mail address:
                <Link href="mailto:contact@nextsaas.ai" className="text-ns-linen">
                  contact@nextsaas.ai
                </Link>
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Director of publication :</h2>
              <p>Mr. Alex Turner, Chief Executive Officer</p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Hosting provider:</h2>
              <p>
                The{' '}
                <Link href="/" className="text-ns-linen">
                  https://www.nextsaas.ai
                </Link>
                <br />
                website is hosted by: Vercel, Inc. <br />
                Headquarters: 440 N Barranca Ave #4133, Covina, CA 91723, USA
                <br />
                Email:
                <Link href="mailto:support@vercel.com" className="text-ns-linen">
                  support@vercel.com
                </Link>
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Development:</h2>
              <p>
                This website has been designed and developed by NextSaaS Design Studio. <br />
                Website:{' '}
                <Link href="/" className="text-ns-linen">
                  https://www.nextsaas.design
                </Link>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
