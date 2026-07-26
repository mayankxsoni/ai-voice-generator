import Content from '@/components/our-manifesto/Content';
import Hero from '@/components/our-manifesto/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Manifesto — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
