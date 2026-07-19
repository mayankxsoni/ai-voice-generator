import affiliateCover from '@public/images/ns-img-370.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Guideline = () => {
  return (
    <section className="pt-32 pb-28 sm:pt-36 md:pt-42 md:pb-36 lg:pb-44 xl:pt-[180px] 2xl:pb-[200px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-20 lg:space-y-[100px]">
          <div className="mx-auto max-w-[780px] space-y-3 text-center">
            <RevealAnimation delay={0.3}>
              <span className="badge badge-ivory mb-5">Passion meets purpose</span>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <h2>Affiliate terms &amp; conditions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p>
                Welcome to the NextSaaS Affiliate Program! <br />
                Please read these terms carefully to ensure you fully understand how our program works and what is
                expected.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="max-w-full overflow-hidden rounded-[20px]">
              <Image
                src={affiliateCover}
                quality={100}
                className="h-full w-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
