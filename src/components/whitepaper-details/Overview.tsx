import { CheckIcon } from '@/icons';
import { LearnItem } from '@/interface';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface OverviewProps {
  overviewText: string;
  img: string | StaticImageData;
  learningPoints: LearnItem[];
}

const Overview = ({ overviewText, img, learningPoints }: OverviewProps) => {
  return (
    <RevealAnimation delay={0.4}>
      <section>
        <div className="main-container">
          <div className="bg-background-3 flex flex-col-reverse items-center justify-between gap-x-10 rounded-4xl p-2 lg:flex-row xl:gap-x-14">
            <div className="w-full p-6 lg:max-w-[560px]">
              <div className="mb-8 space-y-5">
                <h2 className="text-heading-5 font-normal">Overview</h2>
                <p className="text-secondary/80">{overviewText}</p>
              </div>
              <div>
                <h3 className="text-heading-5 font-normal">You'll learn how to</h3>
                <ul className="mt-4 mb-10.5 space-y-3">
                  {learningPoints.map((point) => (
                    <li key={point.id} className="flex items-center gap-x-2">
                      <span className="bg-secondary flex size-5 shrink-0 items-center justify-center rounded-full">
                        <CheckIcon className="fill-accent" />
                      </span>
                      <p className="text-secondary/80">{point.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <figure className="min-h-[300px] w-full overflow-hidden rounded-[20px] lg:min-h-[490px] lg:max-w-[613px]">
              <Image
                src={img}
                alt="whitepaper-details"
                width={613}
                height={490}
                className="h-full min-h-[300px] w-full object-cover lg:min-h-[490px]"
              />
            </figure>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

Overview.displayName = 'Overview';
export default Overview;
