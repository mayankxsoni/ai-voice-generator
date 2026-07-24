import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export default function HowItWorks() {
  const logos = [
    { name: 'ANZEN', font: 'font-sans font-bold tracking-widest' },
    { name: 'ALPHA LIQUID', font: 'font-serif font-semibold uppercase' },
    { name: 'OREO', font: 'font-black text-2xl tracking-tighter' },
    { name: 'JobLeap.ai', font: 'font-sans font-bold' },
    { name: 'TORRAM', font: 'font-mono font-bold tracking-widest' },
    { name: 'Mondelez', font: 'font-serif italic text-xl' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative rounded-[3rem] -mt-8 z-10 shadow-sm border border-[#eef0f3]">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <RevealAnimation delay={0.1}>
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
            
            {/* Left Side: Content */}
            <div className="w-full lg:w-[45%]">
              <div className="flex items-start gap-4 mb-8">
                <h2 className="text-5xl lg:text-7xl font-extrabold text-secondary tracking-tight">
                  How it <span className="text-[#633CFF]">works</span>
                </h2>
                <div className="hidden md:flex mt-2 items-center gap-2 px-4 py-2 rounded-full border border-[#633CFF] text-[#633CFF] font-bold text-sm bg-white shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" fill="currentColor"/>
                  </svg>
                  Stories in Motion
                </div>
              </div>

              <p className="text-secondary/70 text-lg mb-6 leading-relaxed max-w-md">
                Turn your ideas into high-impact motion without the usual delays.
              </p>
              
              <p className="text-secondary/70 text-lg mb-10 leading-relaxed max-w-md">
                At First Pixel, we plug into your team as your dedicated motion partner—helping you create, iterate, and scale content faster than ever.
              </p>

              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#633CFF] flex items-center justify-center text-[#633CFF]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-semibold text-secondary">Unlimited motion requests</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#633CFF] flex items-center justify-center text-[#633CFF]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-semibold text-secondary">Lightning-fast delivery (48h turnaround)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#633CFF] flex items-center justify-center text-[#633CFF]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-semibold text-secondary">Flexible & cancel anytime</span>
                </li>
              </ul>

              <Link href="/contact-us" className="inline-block bg-[#633CFF] hover:bg-[#522ce0] text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg shadow-[#633CFF]/30">
                Book a demo
              </Link>
            </div>

            {/* Right Side: Floating Video Player Mockup */}
            <div className="w-full lg:w-[55%]">
              <div className="relative w-full aspect-[16/10] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                {/* Mockup Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-10 flex items-center px-4 gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-bold text-black text-xs">
                    fp
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-bold text-sm truncate">The Secret Behind High-Converting Explainer Videos</p>
                    <p className="text-white/80 text-xs">First Pixel Motion - Top Quality Explainer Videos</p>
                  </div>
                  <div className="flex gap-3 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
                </div>

                {/* Video Content Placeholder */}
                <Image 
                  src="/images/ns-img-397.png" 
                  alt="Video playing mockup" 
                  fill
                  className="object-cover"
                />

                {/* Central Play/Pause Mock */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/10">
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-black/60 flex items-center justify-center text-white backdrop-blur-sm shadow-xl border border-white/20 scale-110">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                  </div>
                </div>

                {/* Mockup Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">0:25 / 1:26</span>
                    <div className="flex-grow h-1.5 bg-white/30 rounded-full relative">
                      <div className="absolute top-0 left-0 h-full bg-red-600 rounded-full w-[30%]">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-white">
                    <div className="flex gap-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h4l3-9 5 18 3-9h4"></path></svg>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div className="flex gap-4 items-center">
                      <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded border border-white/30">More videos</span>
                      <svg width="24" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4s-6.254,0-7.814,0.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15V9l5.2,3L10,15z"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </RevealAnimation>

        {/* Logos Row */}
        <RevealAnimation delay={0.3}>
          <div className="border-t border-[#eef0f3] pt-12 flex flex-wrap justify-center md:justify-between items-center gap-8 text-gray-400 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className={`text-xl md:text-2xl ${logo.font} grayscale transition-all hover:grayscale-0 hover:text-gray-800`}>
                {logo.name}
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
