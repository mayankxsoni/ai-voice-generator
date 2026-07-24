import ServiceLandingPage from '@/components/services-landing/ServiceLandingPage';
import { defaultServiceDetail, servicesDataMap } from '@/data/servicesData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return Object.keys(servicesDataMap).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const service = servicesDataMap[slug] || defaultServiceDetail;

  return {
    ...defaultMetadata,
    title: `${service.badge} — First Pixel | SaaS Explainer Video Agency`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const service = servicesDataMap[slug] || defaultServiceDetail;

  return (
    <main>
      <ServiceLandingPage service={service} />
    </main>
  );
}
