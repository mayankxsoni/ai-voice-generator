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
  title: 'Tutorial - AI Voice Generator || NextSaaS',
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
        ctaHeading="Ready to start earning with NextSaaS?"
        description="If you have any questions, feel free to reach out to our team."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default Tutorial;
