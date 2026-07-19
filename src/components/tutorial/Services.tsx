import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import ServiceCard, { type ServiceStat } from './ServiceCard';

const serviceStats: ServiceStat[] = [
  {
    label: 'Total users',
    value: '2.18+',
    description: 'Million active users',
  },
  {
    label: 'System uptime',
    value: '89.7%',
    description: 'Average system availability',
  },
  {
    label: 'Global reach',
    value: '70+',
    description: 'Countries served worldwide',
  },
  {
    label: 'Response time',
    value: '3 minutes',
    description: 'Average support response',
  },
  {
    label: 'Enterprise clients',
    value: '150+',
    description: 'Active enterprise customers',
  },
];

const Services = () => {
  return (
    <section className="bg-background-3 py-[50px] sm:py-[100px] md:py-[200px]">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="from-background-3 absolute top-0 left-0 z-40 h-full w-[15%] bg-linear-to-r to-transparent md:w-[20%]" />
          <div className="from-background-3 absolute top-0 right-0 z-40 h-full w-[15%] bg-linear-to-l to-transparent md:w-[20%]" />
          <Marquee className="cards-marquee-container" pauseOnHover={true} autoFill={true}>
            <div className="mb-14 flex items-center justify-center gap-8">
              {serviceStats.map((stat, index) => (
                <ServiceCard key={`${stat.label}-${index}`} stat={stat} isFirst={index === 0} />
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Services;
