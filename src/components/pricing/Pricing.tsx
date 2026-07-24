import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const pricingPlans = [
  {
    name: 'Essential Explainer',
    price: '$1,499',
    duration: '60-Second Video',
    description: 'Perfect for website hero sections, product launches, and Product Hunt campaigns.',
    popular: false,
    ctaText: 'Get Started',
    href: '/contact-us',
    features: [
      '60-Second 2D Motion Graphics Video',
      'ICP Scriptwriting & Value Hook',
      'Custom Frame-by-Frame Storyboard',
      'Native Studio Voiceover (Choice of Accent)',
      'Licensed Background Music & Sound Effects',
      '2–3 Week Standard Production',
      '100% Full Commercial Rights Included',
      '4K & 1080p Webflow/Framer Exports',
    ],
  },
  {
    name: 'Growth Explainer',
    price: '$2,499',
    duration: '90-Second Video',
    description: 'Our most popular tier. Full product walkthrough designed to turn visitors into free trial signups.',
    popular: true,
    ctaText: 'Book Strategy Call',
    href: '/contact-us',
    features: [
      '90-Second 2D + 3D Motion Graphics Video',
      'ICP Script & Sales Objection Handling',
      'Interactive Storyboard with UI Micro-Animations',
      'Native Studio Voiceover & Custom Audio Mix',
      '2-Week Rush Production Delivery',
      'Multi-Format Exports (16:9, 1:1, 9:16 Vertical)',
      'Unlimited Script & Storyboard Revisions',
      '100% Commercial Rights + After Effects Source Files',
    ],
  },
  {
    name: 'Enterprise Suite',
    price: '$3,999',
    duration: '120s + Video Ad Pack',
    description: 'Designed for scale-ups and multi-product SaaS platforms launching paid social & video ad campaigns.',
    popular: false,
    ctaText: 'Talk to Creative Lead',
    href: '/contact-us',
    features: [
      '120-Second Flagship Explainer Video',
      '3x Short-Form Video Ads (15s Cutdowns for LinkedIn/Meta)',
      '3D Product Renders & Custom UI Graphics',
      'Dedicated Creative Director & Async Slack Channel',
      '7-Day Express Production Option',
      'Multi-Language Voiceover Dubbing (Optional)',
      'Full Perpetual Worldwide Broadcast Rights',
      'Complete Asset Package & Audio Stems',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pt-[140px] pb-16 md:pt-[170px] md:pb-20 xl:pt-[190px]">
      <div className="main-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-4 text-center mb-14 sm:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs mb-2">
              Transparent Pricing & Packages
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-secondary text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Simple, Fixed-Fee Explainer Video Production
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 text-base sm:text-lg leading-relaxed">
              No hidden fees. Every package includes scriptwriting, storyboard approval, studio voiceover, motion graphics, and 100% commercial rights.
            </p>
          </RevealAnimation>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <RevealAnimation key={idx} delay={0.3 + idx * 0.1}>
              <div
                className={`relative flex flex-col justify-between h-full rounded-[28px] bg-white p-8 sm:p-9 transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-primary-500 shadow-[0_20px_50px_-10px_rgba(249,115,22,0.2)] scale-102'
                    : 'border border-[#eef0f3] shadow-sm hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-md uppercase tracking-wider">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{plan.name}</h3>
                    <p className="text-xs text-primary-600 font-semibold mt-1">{plan.duration}</p>
                    <p className="text-xs text-secondary/60 mt-3 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="border-t border-b border-[#f0f2f6] py-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-secondary tracking-tight">{plan.price}</span>
                      <span className="text-xs text-secondary/50 font-medium">/ per video</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider">What&apos;s Included:</p>
                    <ul className="space-y-2.5 text-xs text-secondary/70">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <svg className="size-4 shrink-0 text-primary-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={plan.href}
                    className={`btn btn-md w-full text-center rounded-full font-semibold transition-all ${
                      plan.popular
                        ? 'btn-primary-v2 shadow-md shadow-primary-500/20'
                        : 'bg-secondary text-white hover:bg-secondary/90'
                    }`}
                  >
                    {plan.ctaText} →
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
