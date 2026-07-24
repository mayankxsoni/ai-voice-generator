import ServiceLandingPage from '@/components/services-landing/ServiceLandingPage';
import { defaultServiceDetail } from '@/data/servicesData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main>
      <ServiceLandingPage service={defaultServiceDetail} />
    </main>
  );
};

export default page;
