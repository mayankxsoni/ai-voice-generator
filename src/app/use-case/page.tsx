import CTA from '@/components/shared/cta/CTA';
import FeatureIntro from '@/components/use-case/FeatureIntro';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import FinanceAndOperation from '../../components/use-case/FinanceAndOperation';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Use Case - AI Voice Generator || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-5">
      <FeatureIntro />
      <FinanceAndOperation />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeText="Get Started"
        ctaHeading="Ready to start earning with NextSaaS?"
        description="If you have any questions, feel free to reach out to our team."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
