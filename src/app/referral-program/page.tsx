import FAQ from '@/components/referral-program/FAQ';
import Hero from '@/components/referral-program/Hero';
import Steps from '@/components/referral-program/Steps';
import Testimonial from '@/components/shared/testimonial/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Referral Program — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Steps />
      <Testimonial title="What our users are saying" />
      <FAQ />
    </main>
  );
};

export default page;
