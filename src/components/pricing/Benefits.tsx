import features2 from '@public/images/ns-img-619.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Benefits = () => {
  return (
    <section className="py-[80px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row-reverse lg:gap-[70px]">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
                  Why Choose First Pixel
                </span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                  High-Converting Videos Delivered Without the Hassle
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary/70 text-base leading-relaxed">
                  We handle end-to-end production so your team can focus on shipping product. From script to final 4K export, we deliver videos that move the needle.
                </p>
              </RevealAnimation>
            </div>

            <ul className="space-y-6">
              <RevealAnimation delay={0.5}>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-lg border border-primary-100">
                    📈
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">30% to 180% Conversion Lift</h3>
                    <p className="text-xs text-secondary/60 mt-1 leading-relaxed">
                      Replace boring text walls with a 60-second explainer video that addresses ICP objections immediately.
                    </p>
                  </div>
                </li>
              </RevealAnimation>

              <RevealAnimation delay={0.6}>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-lg border border-primary-100">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">Zero Hassle & 100% Async Review</h3>
                    <p className="text-xs text-secondary/60 mt-1 leading-relaxed">
                      A single 30-minute kickoff call is all we need. All script and storyboard reviews are handled asynchronously via Docs & Loom.
                    </p>
                  </div>
                </li>
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <li className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-lg border border-primary-100">
                    🔓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary">100% Commercial Ownership</h3>
                    <p className="text-xs text-secondary/60 mt-1 leading-relaxed">
                      You own 100% of the video rights, voiceover buyout, and background music licenses forever across all channels.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
            </ul>
          </div>

          <div className="w-full lg:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="overflow-hidden rounded-[24px] border border-gray-100 shadow-xl">
                <Image src={features2} alt="First Pixel SaaS Explainer Production Workflow" className="w-full object-cover" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
