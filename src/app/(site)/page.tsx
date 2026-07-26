import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Result from '@/components/home/Result';
import Steps from '@/components/home/Steps';
import VoiceSamples from '@/components/home/VoiceSamples';
import Problem from '@/components/home/Problem';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'First Pixel — SaaS Explainer Video Agency',
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Problem />
      <VoiceSamples />
      <Features />
      <FeaturesV2 />
      <Steps />
      <Integration />
      <Result />
    </main>
  );
};

export default page;
