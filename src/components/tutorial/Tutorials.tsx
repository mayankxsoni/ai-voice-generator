import tutorial1 from '@public/images/ns-img-386.png';
import tutorial2 from '@public/images/ns-img-387.png';
import tutorial3 from '@public/images/ns-img-388.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const tutorialItems = [
  {
    title: 'How to Write a 90-Second SaaS Explainer Script',
    duration: '12 Min Read',
    image: tutorial1,
    description: 'Learn the exact 5-part script formula that addresses ICP objections in under 90 seconds.',
  },
  {
    title: 'Turning Complex Software UI into Sleek Motion Graphics',
    duration: '18 Min Read',
    image: tutorial2,
    description: 'How to simplify dense dashboards, data tables, and workflows for video without losing detail.',
  },
  {
    title: 'Optimizing Video Placements for Homepage & Paid Social Ads',
    duration: '15 Min Read',
    image: tutorial3,
    description: 'Best practices for embedding hero videos and running short-form animated video ads on LinkedIn.',
  },
];

const Tutorials = () => {
  return (
    <section className="bg-background-3 pt-[80px] pb-[100px]">
      <div className="main-container">
        <div className="mb-[60px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <div>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs mb-2">
                Featured Guides
              </span>
              <h2 className="text-secondary text-3xl sm:text-4xl font-extrabold">SaaS Video Production Tutorials</h2>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[620px] text-secondary/60 text-base">
              Actionable guides written by our creative leads to help your product and marketing teams maximize video conversion.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-8">
          {tutorialItems.map((item, idx) => (
            <RevealAnimation key={idx} delay={0.3 + idx * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                <div className="group relative flex flex-col h-full overflow-hidden rounded-[24px] border border-[#eef0f3] bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-300">
                  <figure className="aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </figure>
                  <div className="space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-primary-600 font-semibold mb-2">
                        <span>Video Guide</span>
                        <span>{item.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-secondary/60 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
