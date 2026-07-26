import Content from '@/components/legal-notice/Content';
import Hero from '@/components/legal-notice/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Legal — First Pixel | SaaS Explainer Video Agency',
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
