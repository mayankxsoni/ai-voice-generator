import RevealAnimation from '../animation/RevealAnimation';

const differentiators = [
  {
    icon: '🎯',
    title: 'Conversion-First Scripting',
    description:
      'Every word we write is designed to move viewers from curious to confident. Our strategists interview your team to find the exact message that converts.',
  },
  {
    icon: '⚡',
    title: '2-Week Turnaround',
    description:
      "We move fast. From brief to final delivery in 14 days — without sacrificing an ounce of quality. Perfect for product launches and fundraising rounds.",
  },
  {
    icon: '🎨',
    title: 'Brand-Native Motion Design',
    description:
      'Your video looks like you built it. We match your typography, color palette, and design language so the animation feels like a natural extension of your product.',
  },
  {
    icon: '📝',
    title: 'Deep Product Discovery',
    description:
      "We don't skim the surface. Our discovery session goes deep into your ICP, objections, and core value prop before a single frame of animation is touched.",
  },
];

const proofStats = [
  { number: '50+', label: 'Founders Served' },
  { number: '3x', label: 'Avg. Conversion Lift' },
  { number: '100%', label: 'Custom-Made' },
  { number: '4.9★', label: 'Client Satisfaction' },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden py-[80px] md:py-[120px] lg:py-[156px] bg-[#fcfcfc]">
      <div className="main-container">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-20">

          {/* ── LEFT: Text + Feature List ── */}
          <div className="w-full lg:w-1/2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory mb-5">Why First Pixel</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                Not another video agency —{' '}
                <span className="text-primary-500">your conversion partner.</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/60 mb-10 text-lg leading-relaxed">
                Most agencies hand you a script template and fill in your product name. We build 
                your video from the ground up — starting with strategy, ending with a result your 
                sales team can actually measure.
              </p>
            </RevealAnimation>

            <div className="space-y-5">
              {differentiators.map((item, idx) => (
                <RevealAnimation key={item.title} delay={0.4 + idx * 0.1} direction="left">
                  <div className="group flex items-start gap-4 rounded-2xl border border-[#eef0f3] bg-white p-5 shadow-sm hover:border-primary-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-xl">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-secondary mb-1 text-base font-bold group-hover:text-primary-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-secondary/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Stats visual card ── */}
          <RevealAnimation delay={0.3} direction="right" offset={60}>
            <div className="w-full max-w-[500px] lg:w-1/2">

              {/* Main card */}
              <div className="rounded-[28px] border border-[#eef0f3] bg-white p-8 shadow-[0_28px_60px_-20px_rgba(20,15,35,0.1)]">

                <p className="text-secondary/40 text-xs font-semibold uppercase tracking-widest mb-6">
                  What our clients experience
                </p>

                {/* Stats Grid 2×2 */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {proofStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-[#f9fafb] p-5 text-center border border-[#f0f2f6]"
                    >
                      <p className="text-3xl font-extrabold text-primary-500">{stat.number}</p>
                      <p className="text-secondary/50 text-xs font-medium mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Timeline preview */}
                <div className="rounded-2xl bg-[#f9fafb] border border-[#f0f2f6] p-5 space-y-3">
                  <p className="text-secondary/40 text-xs font-semibold uppercase tracking-widest">
                    Your 14-day production timeline
                  </p>
                  {[
                    { day: 'Day 1–2', label: 'Discovery & Brief', done: true },
                    { day: 'Day 3–5', label: 'Script & Storyboard', done: true },
                    { day: 'Day 6–11', label: 'Animation & Voiceover', done: false },
                    { day: 'Day 12–14', label: 'Revisions & Delivery', done: false },
                  ].map((step) => (
                    <div key={step.day} className="flex items-center gap-3">
                      <span className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${step.done ? 'bg-primary-500 text-white' : 'bg-[#e5e7eb] text-secondary/40'}`}>
                        {step.done ? '✓' : '○'}
                      </span>
                      <div className="flex flex-1 items-center justify-between">
                        <span className="text-secondary/70 text-xs font-medium">{step.label}</span>
                        <span className="text-secondary/30 text-[10px]">{step.day}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA nudge */}
                <div className="mt-6 rounded-2xl bg-secondary p-5">
                  <p className="text-white text-sm font-semibold">
                    🎬 Ready to start your video?
                  </p>
                  <p className="text-white/50 text-xs mt-1">
                    Book a free 20-min discovery call and we&apos;ll map out your video strategy.
                  </p>
                  <a
                    href="/contact-us"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-xs font-bold text-white hover:bg-primary-600 transition-colors duration-300"
                  >
                    Book Free Call →
                  </a>
                </div>
              </div>

            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

WhyChooseUs.displayName = 'WhyChooseUs';
export default WhyChooseUs;
