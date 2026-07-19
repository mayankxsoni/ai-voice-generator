import Content from '@/components/change-log/content';
import Hero from '@/components/change-log/hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Changelog - AI Voice Generator || NextSaaS',
};

const Changelog = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Content />
    </main>
  );
};

export default Changelog;
