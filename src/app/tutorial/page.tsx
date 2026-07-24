import CTA from '@/components/shared/cta/CTA';
import Banner from '@/components/tutorial/Banner';
import Blog from '@/components/tutorial/Blog';
import Community from '@/components/tutorial/Community';
import Features from '@/components/tutorial/Features';
import Integration from '@/components/tutorial/Integration';
import Services from '@/components/tutorial/Services';
import Tutorials from '@/components/tutorial/Tutorials';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Tutorial — First Pixel | SaaS Explainer Video Agency',
};

const Tutorial = () => {
  return (
    <main className="bg-background-3 overflow-x-hidden">
      <Banner />
      <Blog />
      <Features />
      <Tutorials />
      <Services />
      <Integration />
      <Community />
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

export default Tutorial;
