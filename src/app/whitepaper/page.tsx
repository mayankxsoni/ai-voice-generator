import Client from '@/components/white-paper/Client';
import Hero from '@/components/white-paper/Hero';
import Research from '@/components/white-paper/Researchs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Whitepaper — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Hero />
      <Research />
      <Client />
    </main>
  );
};

export default page;
