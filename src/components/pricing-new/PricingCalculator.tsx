'use client';

import React, { useState, useEffect } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

export default function PricingCalculator() {
  const [duration, setDuration] = useState(60); // 5 to 240 seconds
  const [rate, setRate] = useState(40); // 30 to 200
  const [timeline, setTimeline] = useState('Standard'); // Standard, Accelerated, Rush
  const [formats, setFormats] = useState<string[]>(['16:9']);

  const timelineOptions = [
    { id: 'Standard', label: 'Standard', time: '20-24 days', multiplier: 1, tag: 'Free' },
    { id: 'Accelerated', label: 'Accelerated', time: '16-20 days', multiplier: 1.1, tag: '+10%' },
    { id: 'Rush', label: 'Rush', time: '12-14 days', multiplier: 1.25, tag: '+25%' },
  ];

  const formatOptions = [
    { id: '16:9', label: '16:9', desc: 'Website, YouTube, product pages', price: 0, tag: 'Free' },
    { id: '5:4', label: '5:4', desc: 'LinkedIn and paid social feeds', price: 200, tag: '$200' },
    { id: '9:16', label: '9:16', desc: 'TikTok, Reels, Shorts', price: 200, tag: '$200' },
  ];

  const calculateTotal = () => {
    const baseCost = duration * rate;
    const selectedTimeline = timelineOptions.find((t) => t.id === timeline);
    const timelineCost = baseCost * (selectedTimeline?.multiplier || 1);
    
    // First format is free (usually 16:9), additional formats are $200
    const additionalFormats = formats.filter(f => f !== '16:9');
    const formatCost = additionalFormats.length * 200;

    return Math.round(timelineCost + formatCost);
  };

  const handleFormatToggle = (id: string) => {
    if (formats.includes(id)) {
      if (formats.length > 1) { // Prevent deselecting all
        setFormats(formats.filter((f) => f !== id));
      }
    } else {
      setFormats([...formats, id]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background-3">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <RevealAnimation delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-2 rounded-3xl shadow-sm border border-[#eef0f3]">
            
            {/* Left Column: Calculator Inputs */}
            <div className="lg:col-span-8 p-6 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full border border-primary-200 text-primary-600 bg-primary-50 text-sm font-semibold tracking-tight">Pricing calculator</span>
                <div className="flex items-center bg-[#f3f4f6] rounded-full p-1">
                  <button className="px-4 py-1.5 rounded-full bg-primary-500 text-white text-sm font-medium shadow-sm">Motion-Led</button>
                  <button className="px-4 py-1.5 rounded-full text-secondary text-sm font-medium hover:bg-gray-200 transition-colors">Founder-Led</button>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight leading-tight mb-4">
                Build your <span className="text-primary-500">video<br/>estimate</span>
              </h2>
              <p className="text-secondary/70 text-lg mb-10 max-w-md">
                Select the video type, duration, delivery speed, and delivery formats. Then copy a shareable estimate link with every value saved in the URL.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Duration Slider */}
                <div className="border border-[#eef0f3] rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-secondary">Final video duration</h4>
                    <span className="text-primary-600 font-bold">{duration}s</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="240" 
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-secondary/50 mt-2 font-medium">
                    <span>5 sec</span>
                    <span>4 min</span>
                  </div>
                </div>

                {/* Rate Slider */}
                <div className="border border-[#eef0f3] rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-secondary">Rate per second</h4>
                    <span className="text-primary-600 font-bold">${rate}/s</span>
                  </div>
                  <input 
                    type="range" 
                    min="30" 
                    max="200" 
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-xs text-secondary/50 mt-2 font-medium">
                    <span>$30 minimum</span>
                    <span>$200 premium</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Timeline */}
                <div>
                  <h4 className="font-bold text-secondary mb-4">Delivery timeline</h4>
                  <div className="space-y-3">
                    {timelineOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setTimeline(opt.id)}
                        className={`w-full flex justify-between items-center p-4 rounded-2xl border transition-all ${
                          timeline === opt.id 
                            ? 'bg-primary-500 border-primary-500 text-white shadow-md' 
                            : 'bg-white border-[#eef0f3] text-secondary hover:border-primary-500/30'
                        }`}
                      >
                        <span className="font-bold text-sm">{opt.label}</span>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs ${timeline === opt.id ? 'text-white/80' : 'text-secondary/60'}`}>{opt.time}</span>
                          <span className={`text-xs font-bold ${timeline === opt.id ? 'text-white' : 'text-secondary'}`}>{opt.tag}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Formats */}
                <div>
                  <h4 className="font-bold text-secondary mb-1">Delivery formats</h4>
                  <p className="text-xs text-secondary/60 mb-4">One format is included. Each additional format adds $200.</p>
                  <div className="space-y-3">
                    {formatOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleFormatToggle(opt.id)}
                        className={`w-full flex justify-between items-center p-4 rounded-2xl border text-left transition-all ${
                          formats.includes(opt.id)
                            ? 'bg-primary-50 border-primary-300 shadow-sm' 
                            : 'bg-white border-[#eef0f3] hover:border-primary-500/30'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-sm text-secondary">{opt.label}</p>
                          <p className="text-xs text-secondary/60 mt-0.5">{opt.desc}</p>
                        </div>
                        <span className={`text-xs font-bold ${formats.includes(opt.id) ? 'text-primary-600' : 'text-primary-600'}`}>{opt.tag}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Estimate Display */}
            <div className="lg:col-span-4 bg-secondary rounded-[1.8rem] p-8 lg:p-10 flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex-grow">
                <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase mb-4">Estimated Project Fee</p>
                <h3 className="text-5xl lg:text-6xl font-extrabold text-white mb-10 tracking-tight">
                  ${calculateTotal().toLocaleString()}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-white/60 text-sm">Video type</span>
                    <span className="text-white font-bold text-sm">Motion-Led</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-white/60 text-sm">Duration</span>
                    <span className="text-white font-bold text-sm">{duration}s</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-white/60 text-sm">Rate</span>
                    <span className="text-white font-bold text-sm">${rate}/s</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-white/60 text-sm">Delivery</span>
                    <span className="text-white font-bold text-sm">
                      {timelineOptions.find(t => t.id === timeline)?.time}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl border border-white/10 bg-white/5">
                    <span className="text-white/60 text-sm">Formats</span>
                    <span className="text-white font-bold text-sm">{formats.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <button className="w-full bg-white hover:bg-gray-100 text-secondary font-bold py-4 rounded-full transition-colors">
                  Copy estimate link
                </button>
              </div>

              {/* Decorative Orange Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
