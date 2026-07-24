import LoginHero from '@/components/authentication/LoginHero';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Login — First Pixel | SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <LoginHero />
      <CTA
        className="bg-white"
        badgeText="Get Started"
        ctaHeading="Ready to make your SaaS impossible to ignore?"
        description="Join 50+ SaaS founders who trust First Pixel to explain their product and drive signups."
        ctaBtnText="Get your free video brief"
      />
    </main>
  );
};
export default page;
