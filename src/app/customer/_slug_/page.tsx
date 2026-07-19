import Content from '@/components/customer-details/Content';
import { defaultMetadata } from '@/utils/generateMetaData';
import getMarkDownData from '@/utils/getMarkDownData';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const customers = getMarkDownData('src/data/customer');
  return customers.map((customer) => ({
    slug: customer.slug,
  }));
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Customer Details - AI Voice Generator || NextSaaS',
};

const CustomerDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  return (
    <main className="bg-white">
      <Content slug={slug} />
    </main>
  );
};

export default CustomerDetails;
