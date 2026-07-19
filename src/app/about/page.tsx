import AboutCTA from '@/components/about/CTA';
import OurMission from '@/components/about/OurMission';
import OurSuccess from '@/components/about/OurSuccess';
import Team from '@/components/about/Team';
import VisionStatement from '@/components/about/VisionStatement';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Reviews from '@/components/shared/reviews/Reviews';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-white">
      <VisionStatement />
      <OurMission />
      <OurSuccess />
      <WhyChooseUs />
      <Team />
      <Reviews />
      <AboutCTA />
    </main>
  );
};

export default page;
