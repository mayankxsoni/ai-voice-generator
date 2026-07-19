import featureAsset1 from '@public/images/ns-img-590.png';
import featureAsset2 from '@public/images/ns-img-591.png';
import featureAsset3 from '@public/images/ns-img-592.svg';
import featureAsset4 from '@public/images/ns-img-593.svg';
import featureAsset5 from '@public/images/ns-img-594.png';
import featureAsset6 from '@public/images/ns-img-595.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Trusted by 20k+ Customers',
    description: 'Join thousands of satisfied customers who rely on our platform to streamline operations.',
    img: featureAsset1,
  },
  {
    id: 2,
    title: 'Tailored billing solutions',
    description: 'Create custom invoices and billing cycles with flexible payment options and automated reminders.',
    img: featureAsset2,
  },
  {
    id: 3,
    title: 'Inventory oversight',
    description: 'Track stock levels in real-time with automated alerts and comprehensive inventory reports.',
    img: featureAsset3,
  },
  {
    id: 4,
    title: 'Smartphone application',
    description: 'Manage your business on the go with our intuitive mobile app for iOS and Android.',
    img: featureAsset4,
  },
  {
    id: 5,
    title: 'Structured expenses',
    description: 'Organize expenses with smart categorization, receipt scanning, and budget tracking.',
    img: featureAsset5,
  },
  {
    id: 6,
    title: 'Analytics and reports',
    description: 'Make data-driven decisions with comprehensive analytics and customizable reports.',
    img: featureAsset6,
  },
];

const FeatureCard = () => {
  return (
    <section className="overflow-hidden pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-14 space-y-3 text-center">
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[742px]">Everything you need. All in one platform.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[482px]">Powerful tools to help you grow, optimize, and scale your business.</p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {data.map((feature, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={feature.id}>
              <div className="bg-background-2 col-span-12 space-y-6 rounded-[20px] p-6 md:col-span-6 lg:col-span-4">
                <figure className="w-full max-w-[360px]">
                  <Image src={feature.img} alt={feature.title} className="h-full w-full rounded-2xl object-cover" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};
FeatureCard.displayName = 'FeatureCard';
export default FeatureCard;
