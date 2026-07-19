'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import { useState } from 'react';

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  iconPath: string;
  glowColor: string;
  className?: string;
  wittyHooks: string[];
}

const industryList: IndustryItem[] = [
  {
    id: 'saas',
    title: 'SaaS',
    description: 'Turning product tours into conversions.',
    iconBg: 'bg-[#ffe7f0]',
    iconColor: 'text-[#fb5cb4]',
    iconPath: '/images/icons/saas.svg',
    glowColor: 'rgba(251,92,180,0.12)',
    className: 'xl:-rotate-[3deg] xl:-translate-y-1',
    wittyHooks: [
      "Show your actual UI, not abstract shapes. People buy what they can see.",
      "Hey founders, why is your churn rate higher than your morning coffee consumption? Let's fix that.",
      "Tired of explainers that sound like a software manual? Let's write a story instead."
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    description: 'Making complex tech easier and clearer.',
    iconBg: 'bg-[#e6efff]',
    iconColor: 'text-[#4e86ff]',
    iconPath: '/images/icons/ai-ml.svg',
    glowColor: 'rgba(78,134,255,0.12)',
    wittyHooks: [
      "AI is complex. Your video shouldn't be. Skip the neural network jargon; show the user ROI.",
      "Because 'We build autonomous agentic models' doesn't mean anything to your buyers. Show, don't tell."
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Humanizing emotion through storytelling.',
    iconBg: 'bg-[#f3e8ff]',
    iconColor: 'text-[#a855f7]',
    iconPath: '/images/icons/healthcare.svg',
    glowColor: 'rgba(168,85,247,0.12)',
    wittyHooks: [
      "Trust isn't built on graphs. Show the human impact of your digital healthcare solution.",
      "Humanize your platform. Patient care is about emotions, not just server uptimes."
    ]
  },
  {
    id: 'fintech',
    title: 'Fintech',
    description: 'Simplifying finance and amplifying trust.',
    iconBg: 'bg-[#FEEBC3]',
    iconColor: 'text-[#f59e0b]',
    iconPath: '/images/icons/fintech.svg',
    glowColor: 'rgba(245,158,11,0.12)',
    className: 'xl:rotate-[6deg] xl:translate-y-3',
    wittyHooks: [
      "Security that keeps your ledger clean and your compliance audit team bored.",
      "Compliance is dry. We make transaction logs and ledger APIs feel like magic."
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Building confidence with web identities.',
    iconBg: 'bg-[#dff6ff]',
    iconColor: 'text-[#06b6d4]',
    iconPath: '/images/icons/cybersecurity.svg',
    glowColor: 'rgba(6,182,212,0.12)',
    className: 'xl:-rotate-[6deg] xl:translate-y-2',
    wittyHooks: [
      "Don't scare them with hackers. Show them how peaceful a secure cloud feels.",
      "Because 'admin123' isn't a firewall strategy. Let's make security educational yet fun."
    ]
  },
  {
    id: 'web3',
    title: 'Web3',
    description: 'Converting disruptions into user engagement.',
    iconBg: 'bg-[#FFE6D5]',
    iconColor: 'text-[#ea580c]',
    iconPath: '/images/icons/web3.svg',
    glowColor: 'rgba(234,88,12,0.12)',
    wittyHooks: [
      "Make block confirmation times and ledger APIs understandable to grandma.",
      "Skip the tokenomics slides. Show the exact utility of your decentralized network."
    ]
  },
  {
    id: 'edtech',
    title: 'EdTech',
    description: 'Revolutionizing digital education through motion.',
    iconBg: 'bg-[#ffe5e5]',
    iconColor: 'text-[#ef4444]',
    iconPath: '/images/icons/edtech.svg',
    glowColor: 'rgba(239,68,68,0.12)',
    wittyHooks: [
      "Attention spans are short. We build motion triggers to keep students glued to the screen.",
      "Education is visual. Transform boring lecture slides into dynamic, animated stories."
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    description: 'Demystifying the future with clarity.',
    iconBg: 'bg-[#def9e6]',
    iconColor: 'text-[#16a34a]',
    iconPath: '/images/icons/blockchain.svg',
    glowColor: 'rgba(22,163,74,0.12)',
    wittyHooks: [
      "Simplify decentralization. Walk them through the actual ledger value, step by step.",
      "Explain trustless layers in 60 seconds without putting your investors to sleep."
    ]
  },
];

const FeaturesV2 = () => {
  const [activeHooks, setActiveHooks] = useState<Record<string, string>>({});
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleRevealHook = (id: string, hooks: string[]) => {
    const currentHook = activeHooks[id];
    let newHook = hooks[Math.floor(Math.random() * hooks.length)];
    while (hooks.length > 1 && newHook === currentHook) {
      newHook = hooks[Math.floor(Math.random() * hooks.length)];
    }
    setActiveHooks(prev => ({ ...prev, [id]: newHook }));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="relative py-28 lg:py-36 bg-[#fcfcfc] overflow-hidden" aria-labelledby="industries-heading">
      
      {/* Subdued background vector orbit - lower opacity and contained dimensions for high-end professional look */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-[95%] pointer-events-none z-0 opacity-[0.14]"
        style={{
          backgroundImage: "url('/images/icons/industries-bg.svg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />

      <div className="main-container relative z-10 space-y-16">
        
        {/* ── HEADER SECTION ── */}
        <div className="max-w-[680px] space-y-4">
          <RevealAnimation instant delay={0.1}>
            <span className="inline-block rounded-full border border-[#7C3AED]/20 bg-transparent px-4 py-1.5 text-xs font-semibold text-[#7C3AED] uppercase tracking-wide">
              Industries
            </span>
          </RevealAnimation>

          <RevealAnimation instant delay={0.2}>
            <h2 id="industries-heading" className="relative text-secondary text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4rem]">
              <span className="whitespace-nowrap">If you&apos;re one of these...</span>
              
              {/* Floating Transparent Heart Icon */}
              <div className="absolute left-[8.8em] top-[0.8em] w-20 h-20 transition-transform duration-300 hover:scale-110 pointer-events-none hidden sm:block">
                <Image
                  src="/images/landing/heart-transparent.png"
                  alt="Red heart"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              
              <br />
              we <span className="text-[#7C3AED]">love you</span> already
            </h2>
          </RevealAnimation>
        </div>

        {/* ── INDUSTRIES GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {industryList.map((item) => {
            const revealedHook = activeHooks[item.id];

            return (
              <RevealAnimation key={item.id} instant delay={0.15}>
                <div 
                  className={`group block rounded-[28px] border border-[#e5e5ea] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[300px] shadow-[0_22px_50px_-44px_rgba(20,15,35,0.2)] ${item.className || ''}`}
                  style={{
                    ['--hover-glow-shadow' as any]: `0 20px 45px ${item.glowColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `var(--hover-glow-shadow)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 22px 50px -44px rgba(20,15,35,0.2)';
                  }}
                >
                  <div>
                    {/* Top Header: Icon & Title */}
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex size-14 items-center justify-center rounded-[18px] transition-transform duration-300 group-hover:scale-105 ${item.iconBg} ${item.iconColor}`}>
                        <Image
                          src={item.iconPath}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="size-8 object-contain"
                        />
                      </span>
                      <h3 className="font-sans text-[24px] font-medium leading-[140%] text-[#140F23] group-hover:text-[#7C3AED] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {/* Standard Description */}
                    <p className="mt-4 font-sans text-[18px] font-normal leading-[150%] text-[#828088]">
                      {item.description}
                    </p>

                    {/* Witty Hook concept display box */}
                    {revealedHook && (
                      <div className="mt-4 p-3.5 bg-[#fbfbfb] rounded-xl border border-[#eef0f3] relative group/hook animate-fadeIn">
                        <p className="text-xs font-semibold text-secondary/70 italic leading-relaxed">
                          &ldquo;{revealedHook}&rdquo;
                        </p>
                        <button 
                          onClick={() => handleCopy(revealedHook)}
                          className="absolute top-2 right-2 text-[10px] text-[#7C3AED] font-bold opacity-0 group-hover/hook:opacity-100 transition-opacity"
                        >
                          {copiedText === revealedHook ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Concept Generator Button */}
                  <button
                    onClick={() => handleRevealHook(item.id, item.wittyHooks)}
                    className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#7C3AED]/20 text-[12px] font-bold text-[#7C3AED] bg-transparent hover:bg-[#7C3AED]/5 transition-colors duration-300 shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 animate-pulse text-[#7C3AED]">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    <span>{revealedHook ? 'Generate Another Concept' : 'Get Video Script Concept'}</span>
                  </button>

                </div>
              </RevealAnimation>
            );
          })}
        </div>

        {/* ── BOTTOM SCRIPT CTA BAR ── */}
        <RevealAnimation instant delay={0.3}>
          <div className="mx-auto flex w-full max-w-[577px] items-center gap-2 rounded-[84px] border border-[#e5e5ea] bg-white p-2 shadow-sm mt-8 hover:shadow-md transition-shadow duration-300">
            <span className="min-w-0 flex-1 rounded-[32px] bg-white py-4 pl-6 pr-4 text-base leading-[1.5] font-semibold text-[#828088]">
              Get your Free Script
            </span>
            <a 
              className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6D28D9] shadow-[0_8px_20px_rgba(124,58,237,0.15)] hover:shadow-[0_12px_24px_rgba(124,58,237,0.25)]"
              href="#contact"
            >
              <span>Try Now</span>
              <svg viewBox="0 0 18 18" fill="none" className="size-4 text-white group-hover/btn:rotate-12 transition-transform duration-200" aria-hidden="true">
                <path d="M9 1.8 10.86 6.14 15.2 8 10.86 9.86 9 14.2 7.14 9.86 2.8 8l4.34-1.86L9 1.8Z" fill="currentColor"></path>
                <path d="m14 12 .62 1.38L16 14l-1.38.62L14 16l-.62-1.38L12 14l1.38-.62L14 12Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
};

export default FeaturesV2;
