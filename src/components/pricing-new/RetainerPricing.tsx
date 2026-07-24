'use client';

import React, { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import Link from 'next/link';

export default function RetainerPricing() {
  const [activeTab, setActiveTab] = useState('Basic');

  const plans = [
    {
      id: 'Basic',
      name: 'Basic',
      price: '$800',
      oldPrice: '$1,200',
      desc: 'Perfect for simple product explanations and early-stage brands looking to communicate their ideas clearly, build a strong first impression, and effectively introduce their product to the right audience.',
      features: [
        '10-15 sec video',
        'Script + storyboard',
        'Custom visuals',
        'Basic animation',
        'Limited revisions'
      ],
      popular: true
    },
    {
      id: 'Starter',
      name: 'Starter',
      price: '$1,500',
      oldPrice: '$2,200',
      desc: 'Ideal for growing startups needing higher quality motion graphics and a strong narrative to boost conversions across their landing pages and social channels.',
      features: [
        '30-60 sec video',
        'Advanced scripting',
        'Premium voiceover',
        '2D motion graphics',
        '2 revision rounds'
      ],
      popular: false
    },
    {
      id: 'Advanced',
      name: 'Advanced',
      price: '$3,200',
      oldPrice: '$4,500',
      desc: 'Our most comprehensive package for enterprise clients requiring top-tier 2D/3D mixed media, multiple aspect ratios, and full broadcast commercial rights.',
      features: [
        'Up to 120 sec video',
        '2D + 3D mixed media',
        'Multi-language support',
        'Source files included',
        'Unlimited revisions'
      ],
      popular: false
    }
  ];

  const activePlan = plans.find(p => p.id === activeTab) || plans[0];

  return (
    <section className="py-16 md:py-24 bg-[#f4f5f7]">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <RevealAnimation delay={0.1}>
          <div className="bg-white rounded-[2.5rem] p-4 lg:p-6 shadow-sm border border-[#eef0f3] flex flex-col md:flex-row gap-6">
            
            {/* Left Side: Active Plan Details */}
            <div className="w-full md:w-[70%] bg-[#633CFF] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between min-h-[400px]">
              
              {/* Ribbon */}
              {activePlan.popular && (
                <div className="absolute top-6 -left-8 -rotate-45 bg-white text-secondary text-[10px] font-bold py-1 px-10 shadow-lg border border-gray-100 flex items-center gap-1">
                  Most Popular <span className="text-[#f97316]">🔥</span>
                </div>
              )}

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4 mt-4 md:mt-0">
                  <h3 className="text-4xl font-extrabold text-white tracking-tight">{activePlan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">{activePlan.price}</span>
                    {activePlan.oldPrice && (
                      <span className="text-xl font-bold text-white/50 line-through decoration-white/50">{activePlan.oldPrice}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-white/80 text-sm leading-relaxed pr-4">
                      {activePlan.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      {activePlan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white text-sm font-medium">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15 8L21 9L16 14L18 20L12 17L6 20L8 14L3 9L9 8L12 2Z" fill="white"/>
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact-us" className="block w-full bg-white hover:bg-gray-100 text-[#633CFF] text-center font-bold py-4 rounded-full transition-colors text-sm">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Side: Tabs */}
            <div className="w-full md:w-[30%] flex flex-col justify-center gap-4 px-4 py-8 relative">
              {/* Vertical line indicator for active state (desktop only) */}
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-3/4 bg-gray-100">
                <div 
                  className="w-full bg-[#633CFF] rounded-full transition-all duration-300"
                  style={{ 
                    height: '33.33%', 
                    transform: `translateY(${plans.findIndex(p => p.id === activeTab) * 100}%)` 
                  }}
                ></div>
              </div>

              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActiveTab(plan.id)}
                  className={`w-full py-4 rounded-full border text-center font-medium transition-all ${
                    activeTab === plan.id 
                      ? 'bg-[#633CFF] border-[#633CFF] text-white shadow-md' 
                      : 'bg-transparent border-[#e2d8ff] text-[#633CFF] hover:bg-[#f4f1ff]'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
