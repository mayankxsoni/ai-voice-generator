import Contact from '@/components/faq/Contact';
import FaqTab from '@/components/faq/FaqTab';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'FAQ — First Pixel | SaaS Explainer Video Agency',
};

const FAQ = () => {
  return (
    <main className="bg-background-3">
      <FaqTab />
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

export default FAQ;
