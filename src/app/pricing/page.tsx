import Benefits from '@/components/pricing/Benefits';
import Contact from '@/components/pricing/Contact';
import Features from '@/components/pricing/Features';
import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Pricing />
      <Benefits />
      <Features />
      <Contact />
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
