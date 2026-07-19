import CareerContent from '@/components/career/CareerContent';
import Features from '@/components/career/Features';
import Positions from '@/components/career/Positions';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Career - AI Voice Generator || NextSaaS',
};

const Career = () => {
  return (
    <main className="bg-background-3">
      <CareerContent />
      <Features />
      <Positions />
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

export default Career;
