import CareerDetailsBody from '@/components/career/CareerDetailsBody';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const careers = getMarkDownData('src/data/career');
  return careers.map((career) => ({
    slug: career.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Apply Now - AI Voice Generator || NextSaaS',
};

const CareerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3">
      <CareerDetailsBody slug={slug} />
      <CTA
        className="bg-white"
        badgeText="Get Started"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default CareerDetails;
