import CTA from '@/components/shared/cta/CTA';
import { expertiseDataMap } from '@/data/expertiseData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'SaaS Verticals & Expertise — First Pixel Explainer Video Agency',
  description:
    'Explore our specialized explainer video expertise across AI & ML, B2B SaaS, FinTech, HealthTech, EdTech, Cyber Security, and Web3.',
};

const expertiseList = Object.values(expertiseDataMap);

export default function ExpertiseIndexPage() {
  return (
    <main className="bg-[#fcfcfc] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="main-container">
        
        {/* Header */}
        <div className="mx-auto max-w-[800px] text-center space-y-4 mb-16">
          <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold">
            Industry Focus
          </span>
          <h1 className="text-secondary text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            SaaS Verticals & <span className="text-primary-500">Expertise</span>
          </h1>
          <p className="text-secondary/70 text-base sm:text-lg max-w-[640px] mx-auto font-normal leading-relaxed">
            We build custom, high-converting explainer videos tailored to the exact technical nuances and buying triggers of your SaaS industry.
          </p>
        </div>

        {/* Grid of Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {expertiseList.map((item) => (
            <Link
              key={item.slug}
              href={`/expertise/${item.slug}`}
              className="group rounded-[28px] border border-[#eef0f3] bg-white p-8 shadow-sm hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="inline-block rounded-full bg-primary-50 border border-primary-200 px-3.5 py-1 text-xs font-bold text-primary-600">
                  {item.badge}
                </span>
                <h3 className="text-secondary font-bold text-2xl group-hover:text-primary-500 transition-colors">
                  {item.highlightedTitle}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs font-bold text-primary-500 group-hover:translate-x-1 transition-transform">
                <span>Explore Landing Page</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <CTA
        className="bg-white"
        badgeText="Start Your Video"
        ctaHeading="Ready to turn complex software into instant clarity?"
        description="Book a 20-minute strategy session with our creative team today."
        ctaBtnText="Book Strategy Call"
      />
    </main>
  );
}
