'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const Problem = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="problem-heading">
      <div className="main-container">
        
        {/* ── TOP HEADER SECTION: Clean & Centered/Aligned ── */}
        <div className="relative mb-20 max-w-[850px]">
          {/* Tagline above the header */}
          <div className="mb-4">
            <RevealAnimation instant delay={0.1}>
              <span className="inline-block rounded-full border border-[#f97316]/20 bg-transparent px-4.5 py-1 text-sm font-medium text-primary-500">
                Problem
              </span>
            </RevealAnimation>
          </div>

          {/* Heading with perfectly aligned floating audio wave badge */}
          <RevealAnimation instant delay={0.2}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
              <h2 id="problem-heading" className="text-secondary text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Your product is solid, <br className="hidden sm:inline" />
                <span className="text-primary-500 inline-flex items-center gap-3">
                  so why no traction?
                </span>
              </h2>

              {/* Audio wave SVG badge */}
              <div className="relative shrink-0 ml-4 mt-2 sm:mt-0 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/icons/problem-audio.svg"
                  alt="pitch_concept.wav audio badge"
                  width={155}
                  height={74}
                  priority
                  className="h-auto w-[155px]"
                />
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* ── GRID CONTENT SECTION ── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* LEFT: 3 Sleek Problem Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Card 1: Unclear Video Strategy */}
            <RevealAnimation instant delay={0.2} direction="left" offset={40}>
              <div className="group relative flex gap-5 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-[#eef0f3] hover:border-[#f97316]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fff7f0] border border-[#ffe9d6] text-[#f97316] transition-all duration-300 group-hover:scale-105">
                  <svg className="size-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-[#f97316] transition-colors duration-300">Unclear Video Strategy</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">
                    Your videos look good, but lack direction. They get lost in the feed instead of leading customers to action.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            {/* Card 2: Zero Distribution Plan */}
            <RevealAnimation instant delay={0.3} direction="left" offset={40}>
              <div className="group relative flex gap-5 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-[#eef0f3] hover:border-[#0284c7]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f9ff] border border-[#e0f2fe] text-[#0284c7] transition-all duration-300 group-hover:scale-105">
                  <svg className="size-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-[#0284c7] transition-colors duration-300">Zero Distribution Plan</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">
                    Posting once isn&apos;t enough. Without targeted placement, your video never reaches the audience ready to convert.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            {/* Card 3: Inconsistent Story & Messaging */}
            <RevealAnimation instant delay={0.4} direction="left" offset={40}>
              <div className="group relative flex gap-5 rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-[#eef0f3] hover:border-[#16a34a]/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f0fdf4] border border-[#dcfce7] text-[#16a34a] transition-all duration-300 group-hover:scale-105">
                  <svg className="size-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM21.375 9.75a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM18.75 15.75a9 9 0 0 0-13.5 0" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-[#16a34a] transition-colors duration-300">Inconsistent Story &amp; Messaging</h3>
                  <p className="text-secondary/60 text-sm leading-relaxed">
                    Your message isn&apos;t aligned across channels, making your audience confused instead of motivated to act.
                  </p>
                </div>
              </div>
            </RevealAnimation>

          </div>

          {/* RIGHT: Exact Same Illustration (SVG file) */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <RevealAnimation instant delay={0.3} direction="right" offset={60}>
              <div className="relative mx-auto w-full max-w-[500px] aspect-[598/561] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/icons/problem-graph-red.svg"
                  alt="Traction Analytics Illustration"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;
