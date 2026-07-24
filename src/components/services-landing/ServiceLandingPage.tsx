'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import { ServiceDetail, servicesDataMap } from '@/data/servicesData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceLandingPageProps {
  service: ServiceDetail;
}

const servicesListAll = [
  {
    id: 'animated-explainer',
    title: 'Animated Explainer Video',
    description: 'Simplify complex ideas and drive action with conversion-focused explainer videos.',
    mediaUrl: '/videos/services/explainer.mp4',
    href: '/services/animated-explainer',
  },
  {
    id: 'product-launch',
    title: 'Product Launch Videos',
    description: 'Build hype and drive day-one signups with high-impact product launch videos.',
    mediaUrl: '/videos/services/feature-launch.mp4',
    href: '/services/product-launch',
  },
  {
    id: 'app-demo',
    title: 'App Demo Videos',
    description: 'Showcase your mobile or web app interface with fluid motion design & UI walkthroughs.',
    mediaUrl: '/videos/services/app-demo.mp4',
    href: '/services/app-demo',
  },
  {
    id: 'feature-launch',
    title: 'Feature Launch Videos',
    description: 'Announce new features in a way that drives user adoption and upgrades.',
    mediaUrl: '/videos/services/feature-launch.mp4',
    href: '/services/feature-launch',
  },
  {
    id: 'product-demo',
    title: 'Product Demo Videos',
    description: 'Replace live demos with a polished, always-on video that converts 24/7.',
    mediaUrl: '/videos/services/product-demo.mp4',
    href: '/services/product-demo',
  },
  {
    id: 'promo-ads',
    title: 'Animated Promo Video Ads',
    description: 'Short-form animated ads engineered for Meta, LinkedIn, and YouTube ROI.',
    mediaUrl: '/videos/services/ai-ads.gif',
    href: '/services/promo-ads',
  },
  {
    id: 'ai-ads',
    title: 'AI Powered Video Ads',
    description: 'Scale ad creatives fast with AI-assisted animation and direct-response hooks.',
    mediaUrl: '/videos/services/ai-ads.gif',
    href: '/services/ai-ads',
  },
  {
    id: 'tutorial',
    title: 'Tutorial Video',
    description: 'Onboard users faster and reduce support ticket volume with step-by-step videos.',
    mediaUrl: '/videos/services/explainer.mp4',
    href: '/services/tutorial',
  },
];

const portfolioItems = [
  {
    title: 'Torram',
    category: 'SaaS Explainer Video',
    videoUrl: '/videos/services/explainer.mp4',
  },
  {
    title: 'Fynite AI',
    category: 'AI SaaS Explainer Video',
    videoUrl: '/videos/services/product-demo.mp4',
  },
  {
    title: 'Fostra AI',
    category: 'Product Launch Video',
    videoUrl: '/videos/services/feature-launch.mp4',
  },
  {
    title: 'Acme Motion',
    category: 'App Demo Video',
    videoUrl: '/videos/services/app-demo.mp4',
  },
];

const processSteps = [
  {
    step: 'Step 01',
    title: 'Discovery & Product Brief',
    description:
      'We dive deep into your software, target ICP, objections, and core value proposition to outline the video strategy.',
    icon: '💡',
  },
  {
    step: 'Step 02',
    title: 'Scene Planning & Scripting',
    description:
      'We write a high-converting script focused on clarity and retention, mapping out visual storyboard scenes frame-by-frame.',
    icon: '📝',
  },
  {
    step: 'Step 03',
    title: 'Visual Design & Motion Graphics',
    description:
      'We design custom assets, UI mockups, and smooth animations perfectly matched to your brand colors and typography.',
    icon: '🎨',
  },
  {
    step: 'Step 04',
    title: 'Voiceover, Sound & Delivery',
    description:
      'We add professional voiceover, sound design, and deliver render-ready MP4/WebM files ready for your website and ad campaigns.',
    icon: '🚀',
  },
];

export default function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#fcfcfc] overflow-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
        <div className="main-container">
          <div className="relative mx-auto max-w-[920px] text-center space-y-6">
            
            {/* Arrow accent top left */}
            <div className="hidden lg:flex absolute -left-20 top-4 size-16 items-center justify-center rounded-full border border-primary-200 bg-white shadow-sm text-primary-500 text-2xl">
              ↗
            </div>

            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory text-primary-600 font-semibold border border-primary-200 px-4 py-1.5 rounded-full inline-block">
                {service.badge}
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-secondary text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.75rem]">
                {service.titlePrefix}
                <span className="text-primary-500">{service.highlightedTitle}</span>
                {service.titleSuffix}
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 mx-auto max-w-[700px] text-base sm:text-lg leading-relaxed font-normal">
                {service.description}
              </p>
            </RevealAnimation>

            {/* Video Player Hero Card */}
            <RevealAnimation delay={0.4}>
              <div className="mt-12 relative mx-auto max-w-[880px] overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#eef0f3] bg-white p-3 shadow-[0_32px_64px_-16px_rgba(20,15,35,0.12)]">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[22px] sm:rounded-[28px] bg-gradient-to-tr from-primary-100 via-primary-50 to-orange-100 flex items-center justify-center">
                  <video
                    src={service.videoUrl}
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

      {/* ── 2. METRICS & CLIENT SHOWCASE GRID SECTION ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="rounded-[32px] border border-[#eef0f3] bg-white p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Primary Orange Stat Card */}
              <div className="lg:col-span-4 rounded-[28px] bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white flex flex-col justify-between shadow-xl shadow-primary-500/20">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{service.stats.clients}</h2>
                    <p className="text-white/80 text-sm font-medium mt-1">Clients Served</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{service.stats.coffee}</h2>
                    <p className="text-white/80 text-sm font-medium mt-1">Cups of Coffee Consumed</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{service.stats.satisfaction}</h2>
                    <p className="text-white/80 text-sm font-medium mt-1">Client Satisfaction Rate</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white">{service.stats.views}</h2>
                    <p className="text-white/80 text-sm font-medium mt-1">Collective Video Views</p>
                  </div>
                </div>
              </div>

              {/* Right Column: 8 Client Cards Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.clientShowcase.map((client, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#f0f2f6] bg-[#fdfdfd] p-5 hover:border-primary-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="text-secondary font-bold text-lg">{client.name}</h3>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600 border border-primary-100">
                        {client.tag}
                      </span>
                    </div>
                    <p className="text-secondary/60 text-xs font-medium">{client.meta}</p>
                  </div>
                ))}

                {/* 8th Card: Next Yours CTA */}
                <Link
                  href="/contact-us"
                  className="group rounded-2xl border-2 border-dashed border-primary-300 bg-primary-50/50 p-5 hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-primary-600 font-bold text-lg">Next Yours</h3>
                    <p className="text-secondary/50 text-xs mt-0.5">Let&apos;s build your video →</p>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-500 text-white group-hover:scale-110 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PROVEN WORK PORTFOLIO SHOWCASE SECTION ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="text-center max-w-[800px] mx-auto mb-14 space-y-4">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block">
                Portfolio
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Our Proven Work:{' '}
                <span className="text-primary-500">The Best {service.badge}</span> That Drive Growth
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-secondary/60 text-base sm:text-lg">
                {service.portfolioSubheadline}
              </p>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <RevealAnimation key={idx} delay={0.2 + idx * 0.1}>
                <div className="group overflow-hidden rounded-[24px] border border-[#eef0f3] bg-white p-3 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] bg-slate-900">
                    <video
                      src={item.videoUrl}
                      className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="text-secondary font-bold text-xl">{item.title}</h3>
                    <p className="text-secondary/50 text-sm">{item.category}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>

          <div className="mt-12 text-center">
            <LinkButton href="/case-study" btnClass="btn-md-v2 btn-primary-v2">
              See More Work →
            </LinkButton>
          </div>
        </div>
      </section>

      {/* ── 4. TESTIMONIAL BANNER CARD ── */}
      <section className="py-16 md:py-20">
        <div className="main-container">
          <div className="rounded-[32px] bg-gradient-to-br from-primary-500 via-orange-500 to-primary-600 p-8 sm:p-14 text-white shadow-2xl shadow-primary-500/25 relative overflow-hidden">
            
            {/* Big quote mark graphic */}
            <span className="absolute -top-10 -left-6 text-[180px] font-serif leading-none text-white/10 select-none pointer-events-none">
              “
            </span>

            <div className="relative z-10 max-w-[850px] mx-auto space-y-8 text-center sm:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed">
                “Working with First Pixel was a pleasure! The team made our video production process smooth and efficient.{' '}
                <span className="bg-white text-secondary font-bold rounded-xl px-3 py-1 inline-block mt-2 sm:mt-0">
                  {service.testimonial.highlightedText}
                </span>{' '}
                Easily one of the best agencies we&apos;ve worked with, we&apos;ll definitely be back.”
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
                <div>
                  <h4 className="text-white font-bold text-lg">{service.testimonial.author}</h4>
                  <p className="text-white/80 text-sm">{service.testimonial.role}, {service.testimonial.company}</p>
                </div>
                <span className="text-white/90 text-sm font-semibold tracking-wider uppercase border border-white/30 rounded-full px-4 py-1.5">
                  Verified SaaS Client
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. ALL SERVICES SHOWCASE GRID ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="text-center max-w-[750px] mx-auto mb-14 space-y-4">
            <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block">
              Services
            </span>
            <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              <span className="text-primary-500">Videos?</span> You name it, we have it
            </h2>
            <p className="text-secondary/60 text-base sm:text-lg">
              High-performance video marketing agency that goes beyond producing videos to turn viewers into leads and customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesListAll.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group rounded-[24px] border border-[#eef0f3] bg-white p-4 shadow-sm hover:border-primary-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-slate-900">
                    <video
                      src={item.mediaUrl}
                      className="size-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div>
                    <h3 className="text-secondary font-bold text-lg group-hover:text-primary-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-secondary/60 text-xs mt-1.5 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary-500">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR WORK PROCESS ── */}
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
              <p className="text-secondary/60 text-base leading-relaxed">
                From understanding your vision to crafting the final output, every stage is streamlined to remove unnecessary complexity.
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

      {/* ── 7. BOTTOM DISCUSS CTA BANNER ── */}
      <section className="py-16 md:py-24">
        <div className="main-container">
          <div className="relative rounded-[32px] border border-[#eef0f3] bg-white p-10 md:p-16 text-center shadow-lg shadow-gray-100 space-y-6 overflow-hidden">
            
            {/* Down arrow badge top */}
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
