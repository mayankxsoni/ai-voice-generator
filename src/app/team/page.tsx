import CTA from '@/components/team/CTA';
import Experience from '@/components/team/Experience';
import FAQ from '@/components/team/FAQ';
import Teams from '@/components/team/Teams';
import Testimonial from '@/components/team/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Teams />
      <Experience />
      <Testimonial />
      <FAQ />
      <CTA />
    </main>
  );
};

export default page;
