import AffiliateContent from '@/components/affiliate-policy/AffiliateContent';
import Guideline from '@/components/affiliate-policy/Guideline';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Affiliate Policy - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <Guideline />
      <AffiliateContent />
      <CTA
        className="bg-white"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with NextSaaS?"
        description="If you have any questions, feel free to reach out to our team."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
