import featureAsset1 from '@public/images/ns-img-604.png';
import featureAsset2 from '@public/images/ns-img-605.png';
import featureAsset3 from '@public/images/ns-img-606.png';
import featureAsset4 from '@public/images/ns-img-607.png';
import featureAsset5 from '@public/images/ns-img-608.png';
import featureAsset6 from '@public/images/ns-img-609.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Smart expense tracking',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset1,
  },
  {
    id: 2,
    title: 'Real-time analytics',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset2,
  },
  {
    id: 3,
    title: 'Secure payment processing',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset3,
  },
  {
    id: 4,
    title: 'Automated budgeting tools',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset4,
  },
  {
    id: 5,
    title: 'Multi-currency support',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset5,
  },
  {
    id: 6,
    title: 'Investment portfolio tracking',
    description: 'Lorem ipsum dolor sit amet consectetur. quis sed duis duis purus quisque.',
    lightImage: featureAsset6,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="mb-8 text-center md:mb-[52px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">More Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>
              Managing your money has
              <br className="hidden md:block" />
              never been easier
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              Streamline your workflow, automate tasks, and create professional-grade voiceovers instantly with our
              advanced AI Voice Generator features.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <div className="bg-background-2 space-y-6 rounded-[20px] p-6">
                <figure>
                  <Image src={item.lightImage} alt="feature" className="h-full w-full rounded-2xl object-cover" />
                </figure>
                <div>
                  <h3 className="text-heading-6 sm:text-heading-5 mb-1 font-normal sm:mb-3">{item.title}</h3>
                  <p className="mb-2">{item.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
