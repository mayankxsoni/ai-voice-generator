import Contents from '@/components/service-details/Contents';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const services = getMarkDownData('src/data/services');
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Services Details - AI Voice Generator || NextSaaS',
};

const OurServicesDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-1">
      <Contents slug={slug} />
      <CTA
        className="bg-white"
        badgeClass="hidden"
        ctaHeading="Build a complete website using the"
        spanText="assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default OurServicesDetails;
