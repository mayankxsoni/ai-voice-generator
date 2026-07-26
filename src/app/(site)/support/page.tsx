import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/support/Contact';
import NeedHelp from '@/components/support/NeedHelp';
import Services from '@/components/support/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Support — First Pixel | SaaS Explainer Video Agency',
};

const Support = () => {
  return (
    <main className="bg-background-3">
      <NeedHelp />
      <Services />
      <Contact />
      <CTA
        className="bg-white"
        badgeText="Get Started"
        ctaHeading="Ready to turn your SaaS product into an animated video that converts?"
        description="Join 50+ SaaS founders who trust First Pixel for high-converting explainer videos."
        ctaBtnText="Book 20-Min Strategy Call"
      />
    </main>
  );
};

export default Support;
