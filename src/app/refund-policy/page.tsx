import RefundPolicyContent from '@/components/refund-policy/RefundPolicyContent';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Refund Policy - AI Voice Generator || NextSaaS',
};

const RefundPolicy = () => {
  return (
    <main className="bg-background-3">
      <RefundPolicyContent />
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

export default RefundPolicy;
