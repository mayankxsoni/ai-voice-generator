import CTA from '@/components/shared/cta/CTA';
import Client from '@/components/testimonial/Client';
import Integration from '@/components/testimonial/Integration';
import Reviews from '@/components/testimonial/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial — First Pixel | SaaS Explainer Video Agency',
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
        ctaHeading="Ready to make your SaaS impossible to ignore?"
        description="Join 50+ SaaS founders who trust First Pixel to explain their product and drive signups."
        ctaBtnText="Get your free video brief"
      />
    </main>
  );
};

export default page;
