import Content from '@/components/download/Content';
import Hero from '@/components/download/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Download - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
