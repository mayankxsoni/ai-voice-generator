import ExpertiseLandingPage from '@/components/expertise-landing/ExpertiseLandingPage';
import { defaultExpertiseDetail, expertiseDataMap } from '@/data/expertiseData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return Object.keys(expertiseDataMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const expertise = expertiseDataMap[slug] || defaultExpertiseDetail;

  return {
    ...defaultMetadata,
    title: `${expertise.badge} — First Pixel | SaaS Explainer Video Agency`,
    description: expertise.description,
  };
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const expertise = expertiseDataMap[slug] || defaultExpertiseDetail;

  return (
    <main>
      <ExpertiseLandingPage expertise={expertise} />
    </main>
  );
}
