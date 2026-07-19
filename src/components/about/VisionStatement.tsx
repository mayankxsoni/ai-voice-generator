import vision1Img from '@public/images/ns-img-353.png';
import vision2Img from '@public/images/ns-img-354.png';
import vision3Img from '@public/images/ns-img-355.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="mx-auto max-w-[780px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-ivory mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>NextSaaS is defining the future landscape of business.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p>
              In a rapidly evolving digital world, NextSaaS stands at the forefront of innovation, transforming how
              businesses operate, connect, and grow.By delivering intelligent, scalable, and user-focused SaaS
              solutions,
            </p>
          </RevealAnimation>
        </div>
        <article className="grid grid-cols-12 justify-center gap-x-8 gap-y-8">
          <div className="col-span-12 space-y-8 md:col-span-6">
            <RevealAnimation delay={0.5} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision1Img} alt="vision-1" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision2Img} alt="vision-2" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7} instant>
            <figure className="col-span-12 max-w-[630px] overflow-hidden rounded-[20px] md:col-span-6">
              <Image src={vision3Img} alt="vision-3" className="h-auto w-full" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

VisionStatement.displayName = 'VisionStatement';
export default VisionStatement;
