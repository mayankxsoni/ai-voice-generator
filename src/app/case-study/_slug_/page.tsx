import CaseStudyDetails from '@/components/case-study/CaseStudyDetails';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const caseStudies = getMarkDownData('src/data/case-study');
  return caseStudies.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Case Study Details — First Pixel | SaaS Explainer Video Agency',
};

interface CaseStudyDetailsPageProps {
  params: Promise<{ slug: string }>;
}

const CaseStudyDetailsPage = async ({ params }: CaseStudyDetailsPageProps) => {
  const slug = (await params).slug;

  return (
    <main className="bg-background-3">
      <CaseStudyDetails slug={slug} />
      <CTA
        className="bg-white"
        badgeText="Get started"
        ctaHeading="Ready to make your SaaS impossible to ignore?"
        description="Join 50+ SaaS founders who trust First Pixel to explain their product and drive signups."
        ctaBtnText="Get your free video brief"
      />
    </main>
  );
};
CaseStudyDetailsPage.displayName = 'CaseStudyDetailsPage';
export default CaseStudyDetailsPage;
