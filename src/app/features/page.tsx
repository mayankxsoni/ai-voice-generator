import FeatureList from '@/components/features/FeatureList';
import FeatureCard from '@/components/features/Features';
import FeaturesV2 from '@/components/features/FeaturesV2';
import Team from '@/components/features/Team';
import CTA from '@/components/shared/cta/CTA';
import ReviewsV2 from '@/components/shared/reviews/ReviewsV2';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features — First Pixel | SaaS Explainer Video Agency',
};

const Features = () => {
  return (
    <main className="bg-background-1">
      <FeatureCard />
      <Team />
      <FeatureList />
      <FeaturesV2 />
      <ReviewsV2 />
      <CTA
        className="bg-white"
        badgeClass="hidden"
        ctaHeading="Ready to make your SaaS impossible to ignore?"
        spanText="assistance"
        description="Join 50+ SaaS founders who trust First Pixel to explain their product and drive signups."
        ctaBtnText="Get your free video brief"
      />
    </main>
  );
};

export default Features;
