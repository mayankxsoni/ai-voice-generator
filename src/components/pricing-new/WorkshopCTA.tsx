import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export default function WorkshopCTA() {
  return (
    <section className="py-16 md:py-24 bg-background-3">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <RevealAnimation delay={0.1}>
          <div className="bg-white rounded-[2rem] shadow-sm border border-[#eef0f3] overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Video Mockup */}
            <div className="w-full lg:w-1/2 p-6 lg:p-10 relative bg-[#633CFF] rounded-tl-[2rem] lg:rounded-bl-[2rem] rounded-tr-[2rem] lg:rounded-tr-none lg:rounded-br-[20rem]">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Fallback image if video not playing */}
                <Image 
                  src="/images/demo/demo-1.jpg" // We will replace with a suitable image if needed, or use a colored placeholder
                  alt="Workshop preview" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Text Overlay */}
                <div className="absolute top-8 left-8">
                  <h3 className="text-3xl font-extrabold text-white leading-tight">
                    Plan first.<br/>Produce<br/>better.
                  </h3>
                  {/* Decorative Arrow (CSS drawn for simplicity) */}
                  <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 ml-4">
                    <path d="M1 1C5.5 15.5 21.5 29 45 27.5C52 27 58.5 21 62 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M54 28L62 16L48 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-[#633CFF] rounded-full flex items-center justify-center shadow-lg transform transition hover:scale-105">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                  </button>
                </div>

                {/* Fake Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="w-full h-1 bg-white/30 rounded-full mb-3">
                    <div className="w-1/3 h-full bg-[#633CFF] rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center text-white text-xs font-medium">
                    <div className="flex items-center gap-3">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5V19L19 12L8 5Z" fill="white" /></svg>
                      <span>00:00</span>
                    </div>
                    <span>90-Minute Workshop</span>
                    <div className="flex items-center gap-3">
                      <span>01:30</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 5L6 9H2V15H6L11 19V5Z" fill="white"/><path d="M15.54 8.46002C16.4774 9.39766 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <span className="px-3 py-1 rounded-full border border-[#e2d8ff] text-[#633CFF] text-xs font-semibold w-fit mb-6">Workshop</span>
              
              <h2 className="text-4xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.1] mb-10">
                Not ready for full <span className="text-[#633CFF]">Production</span> yet?
              </h2>

              <div className="border-l-4 border-[#633CFF] pl-6 mb-10">
                <p className="text-secondary font-bold mb-1">Get started with our</p>
                <p className="text-secondary font-bold">90-Minute <span className="font-normal text-secondary/70">Video Strategy Workshop</span></p>
              </div>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f4f1ff] flex items-center justify-center text-[#633CFF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <p className="text-xs font-bold text-secondary max-w-[80px] leading-tight">Define your video strategy</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f4f1ff] flex items-center justify-center text-[#633CFF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <p className="text-xs font-bold text-secondary max-w-[80px] leading-tight">Identify your audience</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f4f1ff] flex items-center justify-center text-[#633CFF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
                  </div>
                  <p className="text-xs font-bold text-secondary max-w-[100px] leading-tight">Plan distribution with confidence</p>
                </div>
              </div>

              <p className="text-secondary/70 text-sm mb-10 max-w-md leading-relaxed">
                Walk away with a plan your team can execute. We help you define your video strategy, audience, and distribution before a single frame is made.
              </p>

              <Link href="/contact-us" className="inline-flex items-center justify-between w-fit gap-6 bg-[#633CFF] hover:bg-[#522ce0] text-white font-bold py-4 px-6 rounded-2xl transition-colors">
                <span>Book a workshop</span>
                <div className="bg-white rounded-full p-1 text-[#633CFF]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </Link>
            </div>
            
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
