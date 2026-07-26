import BlogContent from '@/components/blog-details/BlogContent';
import CTA from '@/components/shared/cta/CTA';
import { getPublishedPostBySlug } from '@/lib/blog';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Posts are edited from the admin panel at unpredictable times, so this route
// reads the database on every request instead of being baked at build time.
// The query is a local SQLite lookup — the cost is negligible.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPublishedPostBySlug((await params).slug);
  // Calling notFound() here as well as in the page is what makes Next return a
  // real 404 status — from the page alone the response is already committed
  // as 200 and only the not-found UI swaps in.
  if (!post) notFound();

  return {
    ...defaultMetadata,
    title: `${post.title} — First Pixel`,
    description: post.description || defaultMetadata.description,
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const post = await getPublishedPostBySlug((await params).slug);
  if (!post) notFound();

  // BlogContent was written against gray-matter's output, so hand it that shape.
  const blog = { data: post, content: post.content };

  return (
    <main className="bg-white">
      <BlogContent blog={blog} />
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

export default page;
