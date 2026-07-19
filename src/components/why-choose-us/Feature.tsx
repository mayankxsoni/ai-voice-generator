// why choose us feature
import { cn } from '@/utils/cn';
import nsImg208 from '@public/images/ns-img-613.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: string;

  text: string;
  iconClass: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 'understand',
    text: 'Understand your options clearly',
    iconClass: 'ns-shape-10',
  },
  {
    id: 'coverage',
    text: 'Choose your own coverage limits',
    iconClass: 'ns-shape-12',
  },
  {
    id: 'claims',
    text: 'File claims in minutes, not days',
    iconClass: 'ns-shape-14',
  },
  {
    id: 'support',
    text: 'Access support from any device',
    iconClass: 'ns-shape-16',
  },
];

const Feature = () => {
  return (
    <section className="pt-16 pb-16 md:pt-20 md:pb-[100px] lg:py-[100px] lg:pb-[200px]">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="mx-auto max-w-[500px] space-y-5 sm:space-y-8 lg:mx-0 lg:max-w-full">
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2>
                    Personalized coverage that makes sense
                    <span className="sr-only"> — tailored insurance guidance</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    Your lifestyle is unique—your insurance should be too. Our team helps you find the perfect policy by
                    analyzing your needs, explaining your options, and guiding you through every step.
                  </p>
                </RevealAnimation>
              </div>
              <ul className="space-y-1 sm:space-y-2">
                {featureItems.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-4 p-2">
                      <span className={cn('text-secondary text-[36px]', item.iconClass)} aria-hidden="true" />
                      <span className="text-tagline-1 text-secondary font-medium">{item.text}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.2}>
              <figure className="mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-[669px]">
                <Image src={nsImg208} alt="Customer reviewing tailored coverage options" className="size-full" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Feature.displayName = 'Feature';
export default Feature;
