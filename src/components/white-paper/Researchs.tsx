import { IWhitePaper } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedCard from './FeaturedCard';
import ResearchCard from './ResearchCard';

const Research = () => {
  const whitepaperData = getMarkDownData<IWhitePaper & { [key: string]: unknown }>('src/data/whitepaper');

  const featuredCard = whitepaperData.find((item) => item.featured === true);

  return (
    <section>
      <div className="mx-5">
        <div className="bg-background-12 mx-auto max-w-[1880px] rounded-[30px] py-16 md:py-20 lg:py-[120px] xl:py-[174px]">
          <div className="main-container">
            <div className="grid grid-cols-12 items-stretch gap-6">
              {/* FEATURED CARD    */}
              <RevealAnimation delay={0.1}>
                <FeaturedCard card={featuredCard as IWhitePaper} />
              </RevealAnimation>

              {whitepaperData
                .filter((item) => item.featured === false)
                .map((item, index) => {
                  const delay = 0.2 + index * 0.1;
                  return (
                    <RevealAnimation key={item.slug} delay={delay}>
                      <ResearchCard item={item} />
                    </RevealAnimation>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Research.displayName = 'Research';
export default Research;
