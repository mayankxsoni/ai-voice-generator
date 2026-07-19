'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import Image from 'next/image';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import heroImg from '@public/images/ns-img-523.png';

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-white pt-[130px] pb-10 lg:pt-[160px] lg:pb-12"
      aria-label="First Pixel Hero Section">

      {/* === MAIN CONTAINER: two columns === */}
      <div className="main-container">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16 lg:items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">

            {/* Badge */}
            <RevealAnimation instant delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-[#f9f9f7] px-4 py-2 shadow-sm">
                <div className="flex -space-x-1.5">
                  <Image src={avatar1} alt="Founder" width={20} height={20} className="size-5 rounded-full object-cover ring-2 ring-[#f9f9f7]" />
                  <Image src={avatar2} alt="Founder" width={20} height={20} className="size-5 rounded-full object-cover ring-2 ring-[#f9f9f7]" />
                  <Image src={avatar3} alt="Founder" width={20} height={20} className="size-5 rounded-full object-cover ring-2 ring-[#f9f9f7]" />
                </div>
                <span className="text-tagline-2 text-secondary/70 font-normal">Loved by 50+ Backed Founders</span>
              </div>
            </RevealAnimation>

            {/* Headline */}
            <div className="space-y-3">
              <RevealAnimation instant delay={0.2}>
                <h1 className="text-secondary text-[2.75rem] font-bold leading-[1.12] tracking-tight lg:text-[3.5rem]">
                  We make videos<br />
                  that create belief<br />
                  for{' '}
                  <span className="text-primary-500">SaaS, AI &amp; Tech</span>
                </h1>
              </RevealAnimation>
              <RevealAnimation instant delay={0.3}>
                <p className="text-secondary/60 mx-auto max-w-[420px] text-[1.0625rem] leading-relaxed lg:mx-0">
                  Your product is already strong, and we help position it as the obvious choice in your niche through videos we create.
                </p>
              </RevealAnimation>
            </div>

            {/* CTA Buttons */}
            <RevealAnimation instant delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                {/* Primary CTA */}
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-[1rem] font-medium text-white shadow-lg shadow-primary-500/30 transition-all duration-300 hover:bg-primary-600 hover:scale-105">
                  Let&apos;s talk 👋
                </Link>
                {/* Secondary CTA */}
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4d4d4] bg-white px-7 py-3.5 text-[1rem] font-medium text-secondary transition-all duration-300 hover:border-primary-500 hover:text-primary-500">
                  Explore Portfolio
                </Link>
              </div>
            </RevealAnimation>

            {/* Trust line */}
            <RevealAnimation instant delay={0.5}>
              <p className="text-tagline-2 text-secondary/40 font-normal">
                60-second videos · 100% custom · No templates
              </p>
            </RevealAnimation>
          </div>

          {/* ── RIGHT: Visual Card ── */}
          <div className="relative w-full lg:w-1/2">
            <RevealAnimation instant delay={0.3} direction="right" offset={60}>

              {/* Main card */}
              <div className="relative mx-auto max-w-[540px] overflow-hidden rounded-3xl bg-[#ede9ff] shadow-2xl shadow-primary-500/10 lg:mx-0">

                {/* "Available" status badge */}
                <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-medium text-secondary backdrop-blur-sm shadow-sm">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                  Available For New Projects
                </div>

                {/* Hero image */}
                <figure className="relative w-full min-h-[320px] lg:min-h-[400px]">
                  <Image
                    src={heroImg}
                    alt="First Pixel explainer video production"
                    fill
                    className="object-cover object-center"
                    priority
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-primary-500 translate-x-0.5">
                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82Z" />
                      </svg>
                    </div>
                  </div>
                </figure>

                {/* Floating chip 1 — top left */}
                <div className="absolute top-10 left-4 z-20 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-sm max-w-[180px]">
                  <p className="text-[10px] font-semibold text-secondary/50 mb-0.5">AI Optimizer for Meetings</p>
                  <div className="flex items-center gap-2">
                    <div className="size-8 shrink-0 rounded-xl overflow-hidden bg-primary-100">
                      <Image src={avatar1} alt="preview" width={32} height={32} className="size-full object-cover" />
                    </div>
                    <div className="size-8 shrink-0 rounded-xl overflow-hidden bg-primary-100">
                      <Image src={avatar2} alt="preview" width={32} height={32} className="size-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Floating chip 2 — bottom left */}
                <div className="absolute bottom-8 left-4 z-20 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-sm w-[150px]">
                  <p className="text-[10px] font-semibold text-secondary/50 mb-1.5">Speaker Insights</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-secondary/40">Avg summary</span>
                      <span className="text-[9px] font-semibold text-secondary">2:10 min</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary-100">
                      <div className="h-full w-[70%] rounded-full bg-primary-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-secondary/40">Key mentions</span>
                      <span className="text-[9px] font-semibold text-secondary">18</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-primary-100">
                      <div className="h-full w-[45%] rounded-full bg-primary-400" />
                    </div>
                  </div>
                </div>

                {/* Floating chip 3 — right side */}
                <div className="absolute right-4 bottom-16 z-20 rounded-2xl bg-white/95 p-3 shadow-lg backdrop-blur-sm max-w-[160px]">
                  <p className="text-[10px] font-semibold text-secondary/50 mb-1">Transcripts</p>
                  <p className="text-[11px] text-secondary/70 leading-snug">
                    Hey, everyone we have something important to share, but lets start...
                  </p>
                </div>
              </div>

            </RevealAnimation>
          </div>
        </div>
      </div>

      {/* ── BOTTOM: Company Logos ── */}
      <div className="mt-16 border-t border-[#f0f0f8] pt-10">
        <div className="main-container">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-between opacity-50 grayscale transition-all duration-300">
            <Image src="/images/icons/scapic-metal.svg" alt="Scapic logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/asana-metal.svg" alt="Asana logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/discord-metal.svg" alt="Discord logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/dropbox-metal.svg" alt="Dropbox logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/hotjar-metal.svg" alt="Hotjar logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/lattice-metal.svg" alt="Lattice logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/notion-metal.svg" alt="Notion logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            <Image src="/images/icons/stripe-metal.svg" alt="Stripe logo" width={110} height={35} className="h-6 w-auto hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
