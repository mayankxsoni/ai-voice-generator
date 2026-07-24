'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import { useState } from 'react';

export interface VoiceSample {
  id?: string;
  name: string;
  imgLink?: string;
  description?: string;
  audioPath?: string;
  youtubeId?: string;
}

interface PortfolioItem {
  id: string;
  name: string;
  youtubeId: string;
}

const row1Videos: PortfolioItem[] = [
  {
    id: 'kortex',
    name: 'Kortex',
    youtubeId: 'tPAJOg0ZHTs',
  },
  {
    id: 'retool',
    name: 'Retool',
    youtubeId: 'JFwYYzI8Pwk',
  },
  {
    id: 'linear',
    name: 'Linear',
    youtubeId: '6-gZtaMQFo4',
  },
];

const row2Videos: PortfolioItem[] = [
  {
    id: 'vercel',
    name: 'Vercel',
    youtubeId: 'XMFHsW0JnX4',
  },
  {
    id: 'attio',
    name: 'Attio',
    youtubeId: '2U6UasrQORg',
  },
  {
    id: 'figma',
    name: 'Figma',
    youtubeId: 'DeUPj4D3WKk',
  },
];

const VoiceSamples = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Determine if a video is playing in either row to pause marquee
  const isRow1Playing = row1Videos.some((v) => 
    activeVideoId === v.id || 
    activeVideoId === `${v.id}-dup1` || 
    activeVideoId === `${v.id}-dup2`
  );
  const isRow2Playing = row2Videos.some((v) => 
    activeVideoId === v.id || 
    activeVideoId === `${v.id}-dup1` || 
    activeVideoId === `${v.id}-dup2`
  );

  const renderVideoCard = (item: PortfolioItem, duplicateSuffix: string) => {
    const cardId = duplicateSuffix ? `${item.id}-${duplicateSuffix}` : item.id;
    const isPlaying = activeVideoId === cardId;
    const thumbnailUrl = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

    return (
      <div 
        key={cardId}
        className="relative aspect-[16/9] w-[320px] sm:w-[420px] md:w-[460px] shrink-0 overflow-hidden rounded-2xl bg-secondary/5 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        ) : (
          <div 
            onClick={() => setActiveVideoId(cardId)}
            className="absolute inset-0 size-full cursor-pointer group"
          >
            {/* Real high-res YouTube thumbnail */}
            <Image
              src={thumbnailUrl}
              alt={item.name}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-103"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors duration-300">
              <div className="flex size-14 items-center justify-center rounded-full bg-white/95 shadow-xl transition-all duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#f97316] translate-x-0.5">
                  <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82Z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="portfolio-heading">
      
      {/* Dynamic CSS styles for horizontal scrolling marquee with perfect looping */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .scroller-row-left {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }
        .scroller-row-right {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollRight 30s linear infinite;
        }
        /* Pause scroller on hover or if a video in that row is playing */
        .scroller-row-container:hover .scroller-row-left,
        .scroller-row-container-paused .scroller-row-left {
          animation-play-state: paused;
        }
        .scroller-row-container:hover .scroller-row-right,
        .scroller-row-container-paused .scroller-row-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="main-container">
        
        {/* ── HEADER SECTION ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16 items-start mb-16">
          
          {/* Header Left: Tag & Title */}
          <div className="lg:col-span-7 space-y-5">
            <RevealAnimation instant delay={0.1}>
              <span className="inline-block rounded-full border border-[#f97316]/20 bg-transparent px-4 py-1.5 text-xs font-semibold text-primary-500">
                Portfolio
              </span>
            </RevealAnimation>

            <RevealAnimation instant delay={0.2}>
              <div className="space-y-4">
                <h2 id="portfolio-heading" className="text-secondary text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                  We <span className="text-primary-500">create videos</span> 🤯<br />
                  that get inside your ICP&apos;s<br />
                  brain cells{' '}
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary-500 px-4 py-2 bg-white shadow-sm rotate-2 hover:rotate-0 transition-all duration-300 ml-2 align-middle text-xs font-bold text-primary-500">
                    <span className="size-2 rounded-full bg-primary-500 animate-pulse" />
                    <span>Videos That Convert</span>
                    <svg className="size-3 text-primary-500 fill-primary-500 rotate-[-45deg] translate-y-0.5" viewBox="0 0 24 24">
                      <path d="M7 2v11l3-3 3 5 2-1-3-5 4-1Z" />
                    </svg>
                  </div>
                </h2>
              </div>
            </RevealAnimation>
          </div>

          {/* Header Right: Description */}
          <div className="lg:col-span-5 lg:pt-12">
            <RevealAnimation instant delay={0.3}>
              <p className="text-secondary/60 text-[1.0625rem] leading-relaxed">
                We&apos;ve worked closely with leading startups to understand their product deeply. Because when done right, your video becomes the only explanation your audience ever needs.
              </p>
            </RevealAnimation>
          </div>

        </div>

        {/* ── SCROLLING ROWS SECTION (No border box, clean margin alignments with edge gradients) ── */}
        <div className="relative w-full space-y-8 overflow-hidden rounded-2xl">
          
          {/* Row 1: Scrolling Left (Confined) */}
          <div className={`scroller-row-container overflow-hidden w-full ${isRow1Playing ? 'scroller-row-container-paused' : ''}`}>
            <div className="scroller-row-left">
              {/* Loop list 3 times to make it endless inside the container width */}
              {row1Videos.map((video) => renderVideoCard(video, ''))}
              {row1Videos.map((video) => renderVideoCard(video, 'dup1'))}
              {row1Videos.map((video) => renderVideoCard(video, 'dup2'))}
            </div>
          </div>

          {/* Row 2: Scrolling Right (Confined) */}
          <div className={`scroller-row-container overflow-hidden w-full ${isRow2Playing ? 'scroller-row-container-paused' : ''}`}>
            <div className="scroller-row-right">
              {/* Loop list 3 times to make it endless inside the container width */}
              {row2Videos.map((video) => renderVideoCard(video, ''))}
              {row2Videos.map((video) => renderVideoCard(video, 'dup1'))}
              {row2Videos.map((video) => renderVideoCard(video, 'dup2'))}
            </div>
          </div>

        {/* Absolute Gradient overlays for left & right fade edges */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      </div>

      {/* ── CTA BUTTON AT BOTTOM ── */}
      <div className="mt-16 flex justify-center">
        <RevealAnimation instant delay={0.4}>
          <a 
            href="/contact-us" 
            className="group inline-flex items-center hover:scale-[1.03] transition-transform duration-300"
            aria-label="Book a free consultation"
          >
            {/* Left side text pill */}
            <span className="flex h-14 items-center bg-white px-8 text-base font-bold text-primary-500 rounded-l-full shadow-[0_8px_30px_rgba(0,0,0,0.03)] border-y border-l border-[#eef0f3] group-hover:border-[#f97316]/20 transition-colors">
              Free Consultation
            </span>
            {/* Right side arrow icon box */}
            <span className="flex size-14 items-center justify-center bg-primary-500 text-white rounded-r-full shadow-[0_8px_30px_rgba(249,115,22,0.15)] group-hover:bg-primary-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </RevealAnimation>
      </div>

      </div>

    </section>
  );
};

export default VoiceSamples;
