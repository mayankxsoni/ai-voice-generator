import AnalyticsDetails from '@/components/analytics/AnalyticsDetails';
import AnalyticsHero from '@/components/analytics/AnalyticsHero';
import AnalyticsTestimonial from '@/components/analytics/AnalyticsTestimonial';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <AnalyticsHero />
      <AnalyticsDetails />
      <AnalyticsTestimonial />
      <CTA
        className="bg-white"
        badgeText="Get started"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
