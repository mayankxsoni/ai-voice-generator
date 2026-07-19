'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  mediaType: 'video' | 'gif';
  mediaUrl: string;
}

const servicesList: ServiceItem[] = [
  {
    id: 'explainer',
    title: 'Explainer Videos',
    description: 'Simplify complex ideas and drive action. Our premier animated explainer video company delivers high-converting animated explainer video production. Partner with a top explainer video company for your explanation video.',
    mediaType: 'video',
    mediaUrl: '/videos/services/explainer.mp4',
  },
  {
    id: 'ai-ads',
    title: 'AI Powered Video Ads',
    description: 'Scale digital campaigns instantly. We combine animated explainer video production with commercial strategy for high-impact business explainer ads delivering product launch videos that maximise ad spend ROI.',
    mediaType: 'gif',
    mediaUrl: '/videos/services/ai-ads.gif',
  },
  {
    id: 'feature-launch',
    title: 'Feature Launch Videos',
    description: 'Transform abstract tech concepts into unforgettable visual experiences. We deliver high-end tech explainer videos and corporate explainer videos using advanced motion mechanics and seamless data visualisation.',
    mediaType: 'video',
    mediaUrl: '/videos/services/feature-launch.mp4',
  },
  {
    id: 'product-demo',
    title: 'Product Demo Videos',
    description: 'Showcase creative precision with a high-octane portfolio showreel. We’re among the best explainer video companies, packing animated explainer video work, product launch videos, and brand launch videos.',
    mediaType: 'video',
    mediaUrl: '/videos/services/product-demo.mp4',
  },
  {
    id: 'app-demo',
    title: 'App Demo Videos',
    description: 'Bring your interface to life with premium product demo videos and interactive video demo assets. We showcase real-world functionality and value to boost adoption rates and drive high-converting results.',
    mediaType: 'video',
    mediaUrl: '/videos/services/app-demo.mp4',
  },
];

const Features = () => {
  const renderServiceCard = (item: ServiceItem, indexKey: string) => {
    return (
      <div 
        key={indexKey}
        className="w-[310px] sm:w-[340px] shrink-0 overflow-hidden rounded-[30px] border border-[#eef0f3] bg-white p-3 shadow-[0_28px_60px_-56px_rgba(20,15,35,0.12)] hover:shadow-[0_28px_60px_-40px_rgba(20,15,35,0.2)] hover:-translate-y-1 transition-all duration-300"
      >
        {/* Media Block */}
        <div className="relative aspect-[372/236] overflow-hidden rounded-[22px] bg-[#f5f2ff]">
          {item.mediaType === 'video' ? (
            <video
              src={item.mediaUrl}
              className="absolute inset-0 size-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          ) : (
            <Image
              src={item.mediaUrl}
              alt={item.title}
              fill
              unoptimized
              className="object-cover"
            />
          )}
        </div>

        {/* Details */}
        <div className="space-y-3 px-3 pt-4 pb-5">
          <h3 className="font-sans text-[22px] leading-[130%] font-medium text-[#140F23]">
            {item.title}
          </h3>
          <p className="text-secondary/60 font-sans text-[13.5px] leading-[142%] font-normal line-clamp-4">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden" aria-labelledby="services-heading">
      
      {/* CSS Stylesheet for horizontal scrolling marquee */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .services-scroller-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollLeft 30s linear infinite;
        }
        .services-scroller-container:hover .services-scroller-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="main-container">
        
        {/* ── TOP HEADER SECTION ── */}
        <div className="text-center max-w-[850px] mx-auto mb-16 space-y-5">
          <RevealAnimation instant delay={0.1}>
            <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-transparent px-4 py-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-wide">
              Services
            </span>
          </RevealAnimation>

          <RevealAnimation instant delay={0.2}>
            <h2 id="services-heading" className="text-secondary text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              <span className="text-[#7C3AED]">Videos?</span><br />
              You name it, we have it
            </h2>
          </RevealAnimation>

          <RevealAnimation instant delay={0.3}>
            <p className="text-secondary/60 text-base sm:text-lg max-w-[650px] mx-auto leading-relaxed">
              High-performance video marketing agency that goes beyond producing videos to turn viewers into leads and customers.
            </p>
          </RevealAnimation>
        </div>

        {/* ── SERVICES HORIZONTAL SCROLLER (With left & right fade) ── */}
        <div className="services-scroller-container relative w-full overflow-hidden">
          
          <div className="services-scroller-track py-4">
            {/* Loop list 3 times for endless marquee scroll */}
            {servicesList.map((item, idx) => renderServiceCard(item, `${item.id}-0-${idx}`))}
            {servicesList.map((item, idx) => renderServiceCard(item, `${item.id}-1-${idx}`))}
            {servicesList.map((item, idx) => renderServiceCard(item, `${item.id}-2-${idx}`))}
          </div>

          {/* Absolute Gradient overlays for left & right fade edges */}
          <div className="absolute top-0 left-0 h-full w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        </div>

      </div>
    </section>
  );
};

export default Features;
