import { CheckIcon } from '@/icons';
import featureBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

// Feature list
const featureList = [
  {
    id: 1,
    text: 'Centralized analytics for leadership teams',
  },
  {
    id: 2,
    text: 'Workflow automation across sales, ops, and product',
  },
  {
    id: 3,
    text: 'Improved onboarding and client management',
  },
  {
    id: 4,
    text: 'Marketing attribution and ROI reporting',
  },
  {
    id: 5,
    text: 'Secure and compliant data access',
  },
];

const Feature = () => {
  return (
    <section className="pt-[80px] pb-24 md:pb-28 lg:pt-[100px] lg:pb-32 xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image
                src={featureBg}
                alt="Decorative background pattern"
                width={1200}
                height={600}
                quality={90}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-sm:grid-cols-1 max-sm:gap-10 md:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent text-heading-5 mb-8">
                  Here are some of the use cases we&apos;ve successfully addressed: optimizing workflow efficiency,
                  enhancing customer
                </h2>
                <div>
                  <LinkButton
                    href="/services"
                    btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-secondary-v2 border-0">
                    <span>Get started</span>
                  </LinkButton>
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  {featureList.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-3">
                      <span className="bg-accent/17 size-5 rounded-full">
                        <CheckIcon />
                      </span>

                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Feature;
