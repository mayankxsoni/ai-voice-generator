import CTA from '@/components/customer/CTA';
import Hero from '@/components/customer/Hero';
import SuccessStories from '@/components/customer/SuccessStories';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Customers — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <SuccessStories />
      <CTA />
    </main>
  );
};

export default page;
