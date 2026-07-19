import Content from '@/components/brand-kit/Content';
import Hero from '@/components/brand-kit/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Brand Kit - AI Voice Generator || NextSaaS',
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
