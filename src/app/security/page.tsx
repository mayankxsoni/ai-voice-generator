import Content from '@/components/security-compliance/Content';
import Hero from '@/components/security-compliance/Hero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Security - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Hero />
      <Content />
    </main>
  );
};

export default page;
