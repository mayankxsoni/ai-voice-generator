import Clients from '@/components/success-stories/clients';
import GlobalStoriesPerformance from '@/components/success-stories/GlobalStoriesPerformance';
import Hero from '@/components/success-stories/hero';
import SpotlightStories from '@/components/success-stories/SpotlightStories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Success Stories - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <SpotlightStories />
      <GlobalStoriesPerformance />
    </main>
  );
};

export default page;
