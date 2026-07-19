import featureIntroImg from '@public/images/ns-img-353.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureIntro = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mx-auto mb-14 max-w-[660px] space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>Built for your business. Adapted to your workflow.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>
              NextSaaS is designed to serve a wide range of teams and industries. Whether you’re managing data, scaling
              operations, optimizing finances, or streamlining customer experiences—NextSaaS is the platform that grows
              with you.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <figure className="h-auto w-full overflow-hidden rounded-[20px]">
            <Image src={featureIntroImg} alt="feature-intro" className="size-full object-cover object-center" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

FeatureIntro.displayName = 'FeatureIntro';
export default FeatureIntro;
