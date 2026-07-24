import Content from '@/components/download/Content';
import Hero from '@/components/download/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Download — First Pixel | SaaS Explainer Video Agency',
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
