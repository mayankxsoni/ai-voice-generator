'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import { ExpertiseDetail } from '@/data/expertiseData';
import Link from 'next/link';
import { useState } from 'react';

interface ExpertiseLandingPageProps {
  expertise: ExpertiseDetail;
}

const processSteps = [
  {
    step: 'Step 01',
    title: 'Deep-Dive Discovery & Vertical Positioning',
    description:
      'We analyze your software architecture, target ICP, price point, and competitive positioning to define the core story hook.',
    icon: '💡',
  },
  {
    step: 'Step 02',
    title: 'Objection-Focused Script & Storyboard',
    description:
      'We write a high-converting script built around your buyers real objections, sketching visual scenes frame-by-frame.',
    icon: '📝',
  },
  {
    step: 'Step 03',
    title: 'Custom Brand Animation & UI Graphics',
    description:
      'We design sleek motion graphics, cursor walkthroughs, and UI highlights that bring your software interface to life.',
    icon: '🎨',
  },
  {
    step: 'Step 04',
    title: 'Voiceover, Sound Design & Delivery',
    description:
      'We pair your video with native studio voiceover and sound effects, delivering production-ready MP4/WebM files in 2 weeks.',
    icon: '🚀',
  },
];

export default function ExpertiseLandingPage({ expertise }: ExpertiseLandingPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#fcfcfc] overflow-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
        <div className="main-container">
          <div className="relative mx-auto max-w-[920px] text-center space-y-6">
            
            {/* Top Badge */}
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory text-primary-600 font-semibold border border-primary-200 px-4 py-1.5 rounded-full inline-block">
                {expertise.badge}
              </span>
            </RevealAnimation>

            {/* Title */}
            <RevealAnimation delay={0.2}>
              <h1 className="text-secondary text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                {expertise.titlePrefix}
                <span className="text-primary-500">{expertise.highlightedTitle}</span>
                {expertise.titleSuffix}
              </h1>
            </RevealAnimation>

            {/* Description */}
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 mx-auto max-w-[720px] text-base sm:text-lg leading-relaxed font-normal">
                {expertise.description}
              </p>
            </RevealAnimation>

            {/* Hero Video Player Card */}
            <RevealAnimation delay={0.4}>
              <div className="mt-12 relative mx-auto max-w-[880px] overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#eef0f3] bg-white p-3 shadow-[0_32px_64px_-16px_rgba(20,15,35,0.12)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px] sm:rounded-[28px] bg-gradient-to-tr from-primary-100 via-primary-50 to-orange-100 flex items-center justify-center">
                  <video
                    src={expertise.videoUrl}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group absolute flex size-20 items-center justify-center rounded-full bg-primary-500/90 text-white shadow-xl shadow-primary-500/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary-500"
                      aria-label="Play Video"
                    >
                      <svg className="size-8 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ── 2. METRICS & STATS BANNER ── */}
      <section className="py-12 md:py-16">
        <div className="main-container">
          <div className="rounded-[32px] bg-gradient-to-br from-primary-500 to-primary-600 p-8 sm:p-12 text-white shadow-xl shadow-primary-500/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 lg:divide-x divide-white/20">
              <div className="space-y-1">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white">{expertise.stats.clients}</h3>
                <p className="text-white/80 text-sm font-medium">Vertical Clients</p>
              </div>
              <div className="space-y-1 pt-6 sm:pt-0">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white">{expertise.stats.conversionLift}</h3>
                <p className="text-white/80 text-sm font-medium">Avg. Conversion Lift</p>
              </div>
              <div className="space-y-1 pt-6 lg:pt-0">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white">{expertise.stats.satisfaction}</h3>
                <p className="text-white/80 text-sm font-medium">Client Satisfaction</p>
              </div>
              <div className="space-y-1 pt-6 lg:pt-0">
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white">{expertise.stats.views}</h3>
                <p className="text-white/80 text-sm font-medium">Collective Views</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY FEATURES / OBJECTION SOLUTION CARDS ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="text-center max-w-[750px] mx-auto mb-14 space-y-4">
            <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block">
              Why First Pixel
            </span>
            <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              Built Specifically For <span className="text-primary-500">{expertise.badge}</span> Growth
            </h2>
            <p className="text-secondary/60 text-base sm:text-lg">
              We design videos tailored to the exact purchasing triggers and technical nuances of your buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-[28px] border border-[#eef0f3] bg-white p-8 shadow-sm hover:border-primary-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-lg border border-primary-100">
                  0{idx + 1}
                </div>
                <h3 className="text-secondary font-bold text-xl">{feat.title}</h3>
                <p className="text-secondary/60 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIAL BANNER ── */}
      <section className="py-16 md:py-20">
        <div className="main-container">
          <div className="rounded-[32px] bg-gradient-to-br from-primary-500 via-orange-500 to-primary-600 p-8 sm:p-14 text-white shadow-2xl shadow-primary-500/25 relative overflow-hidden">
            <span className="absolute -top-10 -left-6 text-[180px] font-serif leading-none text-white/10 select-none pointer-events-none">
              “
            </span>

            <div className="relative z-10 max-w-[850px] mx-auto space-y-8 text-center sm:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed">
                “{expertise.testimonial.quote}{' '}
                <span className="bg-white text-secondary font-bold rounded-xl px-3 py-1 inline-block mt-2 sm:mt-0">
                  {expertise.testimonial.highlightedText}
                </span>”
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{expertise.testimonial.author}</h4>
                  <p className="text-white/80 text-sm">{expertise.testimonial.role}, {expertise.testimonial.company}</p>
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-wider uppercase border border-white/30 rounded-full px-4 py-1.5">
                  Verified Client
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. OUR WORK PROCESS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left sticky header */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block">
                Process
              </span>
              <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Our work <span className="text-primary-500">process</span>
              </h2>
              <p className="text-secondary/60 text-base leading-relaxed">
                A thoughtfully designed, step-by-step process built to turn your ideas into high-quality motion content with speed, clarity, and precision.
              </p>
              <div className="pt-2">
                <LinkButton href="/contact-us" btnClass="btn-md-v2 btn-primary-v2">
                  Get Project Blueprint →
                </LinkButton>
              </div>
            </div>

            {/* Right column step cards */}
            <div className="lg:col-span-7 space-y-6">
              {processSteps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] border border-[#eef0f3] bg-[#fcfcfc] p-6 sm:p-8 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary-50 border border-primary-200 px-3.5 py-1 text-xs font-bold text-primary-600">
                      {stepItem.step}
                    </span>
                    <span className="text-2xl">{stepItem.icon}</span>
                  </div>
                  <h3 className="text-secondary font-bold text-xl">{stepItem.title}</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">{stepItem.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM DISCUSS CTA BANNER ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="relative rounded-[32px] border border-[#eef0f3] bg-white p-10 md:p-16 text-center shadow-lg shadow-gray-100 space-y-6 overflow-hidden">
            
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-500 text-xl font-bold border border-primary-100">
              ↓
            </div>

            <h2 className="text-secondary text-3xl sm:text-4xl lg:text-6xl font-extrabold max-w-[800px] mx-auto leading-tight">
              You have a great <span className="text-primary-500">idea.</span> lets{' '}
              <span className="text-primary-500">discuss</span> it !
            </h2>

            <p className="text-secondary/60 text-base sm:text-lg max-w-[550px] mx-auto">
              Book a 20-minute strategy call with our creative lead. We&apos;ll map out your video script and visual style on the spot.
            </p>

            <div className="pt-4">
              <LinkButton href="/contact-us" btnClass="btn-xl-v2 btn-primary-v2">
                Contact with us →
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
