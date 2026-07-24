import Awards from '@/components/press/Awards';
import Client from '@/components/press/Client';
import Hero from '@/components/press/Hero';
import SaasInnovation from '@/components/press/SaasInnovation';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Press — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Client />
      <SaasInnovation />
      <Awards />
    </main>
  );
};

export default page;
