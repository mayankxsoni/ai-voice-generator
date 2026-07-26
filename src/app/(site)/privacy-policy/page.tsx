import PrivacyContent from '@/components/privacy/PrivacyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <PrivacyContent />
      <CTA
        className="bg-white"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with First Pixel?"
        description="If you have any questions, feel free to reach out to our team."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
