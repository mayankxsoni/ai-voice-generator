import Features from '@/components/services/Features';
import Pricing from '@/components/services/Pricing';
import Services from '@/components/services/Services';
import Solutions from '@/components/services/Solutions';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1">
      <Services />
      <Features />
      <Solutions />
      <Pricing />
      <CTA
        className="bg-white"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
