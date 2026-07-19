import getMarkDownContent from '@/utils/getMarkDownContent';
import Hero from './Hero';
import KeyTakeWays from './KeyTakeaways';
import Overview from './Overview';

const Content = ({ slug }: { slug: string }) => {
  const whitepaper = getMarkDownContent('src/data/whitepaper/', slug);

  return (
    <>
      <Hero badgeText={whitepaper.data.badgeText} content={whitepaper.content} />
      <Overview
        overviewText={whitepaper.data.OverviewText}
        img={whitepaper.data.img}
        learningPoints={whitepaper.data.learn}
      />
      <KeyTakeWays
        keyTakeWays={whitepaper.data.keyTakeWays}
        keyTakeWaysDescription={whitepaper.data.keyTakeWaysDescription}
        paperLink={whitepaper.data.paperLink}
      />
    </>
  );
};

Content.displayName = 'Content';
export default Content;
