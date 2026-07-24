import React from 'react';
import RevealAnimation from '../animation/RevealAnimation';

export default function ServicesGrid() {
  const services = [
    {
      title: 'SaaS Videos',
      desc: 'Turning product tours into conversions.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      iconBg: 'bg-[#f472b6]/20 text-[#f472b6]',
      bg: 'bg-[#633CFF]',
      text: 'text-white',
      descText: 'text-white/80',
      rotate: '-rotate-2',
      zIndex: 'z-40',
      translate: 'translate-y-4 md:translate-y-8 lg:-translate-x-10 lg:translate-y-0'
    },
    {
      title: 'Social Media Videos',
      desc: 'Making complex tech easier and clearer.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
      iconBg: 'bg-blue-100 text-blue-500',
      bg: 'bg-white',
      text: 'text-secondary',
      descText: 'text-secondary/60',
      rotate: 'rotate-0',
      zIndex: 'z-30',
      translate: 'translate-y-2 md:translate-y-4 lg:-translate-x-4 lg:translate-y-0'
    },
    {
      title: 'Explainer Videos',
      desc: 'Humanizing emotion through storytelling.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      ),
      iconBg: 'bg-purple-100 text-purple-500',
      bg: 'bg-white',
      text: 'text-secondary',
      descText: 'text-secondary/60',
      rotate: 'rotate-1',
      zIndex: 'z-20',
      translate: 'translate-y-0 lg:translate-x-2 lg:-translate-y-2'
    },
    {
      title: 'Ad & Marketing Videos',
      desc: 'Demystifying the future with clarity.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>
        </svg>
      ),
      iconBg: 'bg-emerald-100 text-emerald-500',
      bg: 'bg-white',
      text: 'text-secondary',
      descText: 'text-secondary/60',
      rotate: 'rotate-[6deg]',
      zIndex: 'z-10',
      translate: 'translate-y-6 md:translate-y-8 lg:translate-x-8 lg:translate-y-12'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#f4f5f7] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <RevealAnimation delay={0.1}>
          <div>
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight mb-4">
                Get more spend <span className="text-primary-500">less</span>
              </h2>
              <p className="text-secondary/60 text-lg">
                tell us your monthly content needs and get a custom quote from us
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 mt-8 relative max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`w-full max-w-[280px] lg:w-[240px] xl:w-[260px] p-8 rounded-3xl shadow-xl border border-gray-100/50 flex-shrink-0 transition-transform hover:scale-105 duration-300 ${service.bg === 'bg-[#633CFF]' ? 'bg-primary-500' : service.bg} ${service.rotate} ${service.zIndex} ${service.translate}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 tracking-tight ${service.text}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${service.descText}`}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
