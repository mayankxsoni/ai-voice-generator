import { CheckIcon } from '@/icons';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

interface FeatureListItem {
  id: string;
  text: string;
}

const FeatureList = () => {
  const featuresListData: FeatureListItem[] = [
    {
      id: 'innovative-startups',
      text: 'Innovative startups and ambitious scale-ups are redefining',
    },
    {
      id: 'enterprise-teams',
      text: 'Enterprise teams are the backbone of large organizations',
    },
    {
      id: 'agencies-consultants',
      text: 'Agencies and consultants play a crucial role in helping businesses',
    },
    {
      id: 'finance-marketing',
      text: 'Finance, marketing, and product teams collaborate to create',
    },
  ];

  return (
    <section className="pt-[100px]">
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBg} alt="about bg" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-lg:grid-cols-1 max-sm:gap-10 lg:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent sm:text-heading-5 text-heading-6 mb-8">
                  We appreciate our valued clients and strive to provide them with the best service possible.
                </h2>
                <LinkButton href="/services" btnClass="btn-v2-white hover:btn-primary-v2 btn-md-v2 border-0">
                  Get started
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {featuresListData.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <span className="bg-accent/17 dark:bg-accent/10 flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="dark:fill-accent" />
                      </span>
                      <span className="text-accent">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

FeatureList.displayName = 'FeatureList';
export default FeatureList;
