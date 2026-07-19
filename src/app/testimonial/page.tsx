import CTA from '@/components/shared/cta/CTA';
import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <Reviews className="bg-background-1 py-[100px] md:py-[100px] lg:py-[200px]" />
      <Client />
      <Integration />
      <CTA
        className="bg-white"
        badgeText="Get started"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
