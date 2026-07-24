import PricingCalculator from '@/components/pricing-new/PricingCalculator';
import WorkshopCTA from '@/components/pricing-new/WorkshopCTA';
import HowItWorks from '@/components/pricing-new/HowItWorks';
import ServicesGrid from '@/components/pricing-new/ServicesGrid';
import RetainerPricing from '@/components/pricing-new/RetainerPricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-3 pt-20">
      <PricingCalculator />
      <WorkshopCTA />
      <HowItWorks />
      <ServicesGrid />
      <RetainerPricing />
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
