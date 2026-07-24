import CTA from '@/components/shared/cta/CTA';
import Contact from '@/components/team-details/Contact';
import Details from '@/components/team-details/Details';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team Details — First Pixel | SaaS Explainer Video Agency',
};

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3">
      <Details slug={slug} />
      <Contact />
      <CTA
        className="bg-white py-28"
        ctaHeading="Start creating stunning "
        spanText="voices today"
        description="Join thousands using First Pixel to create lifelike voices—no mic, no hassle."
        ctaBtnText="Get started"
      />
    </main>
  );
};

export default page;
