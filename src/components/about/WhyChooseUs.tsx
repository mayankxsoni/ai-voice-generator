import { cn } from '@/utils/cn';
import circleImg from '@public/images/ns-img-352.png';
import aboutDecentralization2Img from '@public/images/ns-img-617.png';
import profitChartImg from '@public/images/ns-img-618.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featureList = [
  { id: 1, icon: 'ns-shape-8', label: 'Analyze your data' },
  { id: 2, icon: 'ns-shape-9', label: 'Collaborate securely' },
  { id: 3, icon: 'ns-shape-12', label: 'Embedded analytics' },
  { id: 4, icon: 'ns-shape-21', label: 'Easy & intuitive' },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-x-12 gap-y-10 md:flex-row">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory mb-5">Reasons to select us</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">
                A highly effective
                <br className="hidden lg:block" />
                unified platform
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="lg:max-w-[536px]">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before &amp;
                After magazine.
              </p>
            </RevealAnimation>
            <ul className="mt-10 sm:space-y-2 md:mt-14">
              {featureList.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.5 + idx * 0.1}>
                  <li className="flex list-none items-center gap-4 py-2">
                    <span className={cn(item.icon, 'text-secondary text-[36px]')} />
                    <strong className="text-tagline-1 text-secondary font-medium">{item.label}</strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="relative h-full max-h-[598px] min-h-[400px] w-full max-w-[460px] rounded-[20px] bg-linear-[156deg,#FFF_32.92%,#F4EFE7_91%] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[558px]">
            <RevealAnimation delay={0.3}>
              <figure className="absolute bottom-[6%] -left-[12%] w-[85%] rounded-2xl md:-left-[19%] md:w-[120%]">
                <Image src={circleImg} alt="transaction-statistics" className="size-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4} duration={1} direction="right">
              <figure className="shadow-3 absolute top-[5%] -right-2.5 w-full max-w-[244px] overflow-hidden rounded-2xl max-xl:w-[180px] md:-right-[4%] lg:-right-[2%] 2xl:-right-[19%]">
                <Image src={aboutDecentralization2Img} alt="transaction-statistics" className="size-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} duration={1} direction="right" offset={100}>
              <figure className="shadow-3 absolute -right-2.5 bottom-[5%] w-full max-w-[270px] overflow-hidden rounded-[20px] md:-right-[4%] lg:-right-[2%] lg:max-w-[330px] xl:max-w-[395px] 2xl:-right-[20%]">
                <Image src={profitChartImg} alt="transaction-statistics" className="size-full" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
