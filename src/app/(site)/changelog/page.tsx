import Content from '@/components/change-log/content';
import Hero from '@/components/change-log/hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Changelog — First Pixel | SaaS Explainer Video Agency',
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
