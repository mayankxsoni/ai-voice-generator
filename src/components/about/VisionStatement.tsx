'use client';
import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import vision1Img from '@public/images/ns-img-353.png';
import vision2Img from '@public/images/ns-img-354.png';
import vision3Img from '@public/images/ns-img-355.png';

const VisionStatement = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">

        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[820px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">Our Story</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-secondary text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              We exist to make your product{' '}
              <span className="text-primary-500">impossible to ignore.</span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 mx-auto max-w-[620px] text-lg leading-relaxed">
              First Pixel was built on one belief — that great SaaS products deserve great videos. 
              We don&apos;t make generic explainers. We craft belief-building stories that turn 
              curious visitors into confident buyers.
            </p>
          </RevealAnimation>

          {/* ── QUICK STATS ROW ── */}
          <RevealAnimation delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              {[
                { value: '50+', label: 'Videos Delivered' },
                { value: '3x', label: 'Avg. Conversion Lift' },
                { value: '2 wks', label: 'Avg. Turnaround' },
                { value: '100%', label: 'Custom — No Templates' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-extrabold text-primary-500">{stat.value}</p>
                  <p className="text-secondary/50 mt-0.5 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>

        {/* ── IMAGERY GRID ── */}
        <article className="grid grid-cols-12 justify-center gap-x-8 gap-y-8">
          <div className="col-span-12 space-y-8 md:col-span-6">
            <RevealAnimation delay={0.5} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision1Img} alt="First Pixel — video production studio at work" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="max-w-[630px] overflow-hidden rounded-[20px]">
                <Image src={vision2Img} alt="First Pixel — storyboarding and script writing process" className="h-auto w-full" />
              </figure>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7} instant>
            <figure className="col-span-12 max-w-[630px] overflow-hidden rounded-[20px] md:col-span-6">
              <Image src={vision3Img} alt="First Pixel — animation production and delivery" className="h-auto w-full" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

VisionStatement.displayName = 'VisionStatement';
export default VisionStatement;
