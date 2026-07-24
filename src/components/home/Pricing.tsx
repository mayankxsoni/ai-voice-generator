'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useState } from 'react';
import PricingCard from './PricingCard';

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonHref: string;
  highlight: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter-plan',
    title: 'Starter',
    description: 'Perfect for a single launch video',
    features: ['60-second explainer video', 'Conversion-focused script', '1 revision round', 'MP4 delivery', 'Brand color matching'],
    monthlyPrice: 599,
    yearlyPrice: 499,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: false,
  },
  {
    id: 'growth-plan',
    title: 'Growth',
    description: 'For teams ready to scale their story',
    features: [
      '90-second explainer video',
      'Script + storyboard',
      '2 revision rounds',
      'Brand kit matching',
      'Social-ready cuts',
      'MP4 + WebM delivery',
    ],
    monthlyPrice: 999,
    yearlyPrice: 849,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: true,
  },
  {
    id: 'scale-plan',
    title: 'Scale',
    description: 'Full-featured video production',
    features: ['2-minute explainer video', 'Unlimited revisions', '3 social-ready cuts', 'Captions included', 'Commercial license'],
    monthlyPrice: 1799,
    yearlyPrice: 1499,
    buttonText: 'Get started',
    buttonHref: '/contact-us',
    highlight: false,
  },
  {
    id: 'enterprise-plan',
    title: 'Enterprise',
    description: 'Multi-video campaigns & white-label',
    features: ['Multi-video campaigns', 'Dedicated animator', 'White-label delivery', 'Priority turnaround'],
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: 'Contact us',
    buttonHref: '/contact-us',
    highlight: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-[80px] md:py-[150px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-7">
            {/* heading  */}
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-ivory">Pricing plan</span>
              </RevealAnimation>
              <div className="space-y-3 text-center">
                <RevealAnimation delay={0.2}>
                  <h2 className="font-extrabold">
                    Video packages for <span className="text-primary-500">every stage</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-1 text-secondary font-normal">
                    Choose the right video package for your SaaS — no hidden fees, no surprises.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            {/* pricing-toggle  */}
            <RevealAnimation delay={0.4}>
              <div className="relative z-0 mx-auto w-full max-w-[293px]">
                <RevealAnimation delay={1} duration={1} direction="up" offset={200}>
                  <span className="bg-primary-500 text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-20 rounded-[36px] px-3.5 py-1.5 font-semibold text-white capitalize shadow-lg shadow-primary-500/30">
                    save 20%
                  </span>
                </RevealAnimation>
                <label className="shadow-1 bg-white border border-[#eef0f3] relative z-10 inline-flex cursor-pointer items-center rounded-full px-[57px] py-6">
                  <span className="pr-2.5 text-base font-normal text-black">Monthly</span>
                  <input
                    type="checkbox"
                    id="priceCheck"
                    className="peer sr-only"
                    aria-label="Toggle between monthly and yearly pricing"
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                  />
                  <span className="border-stroke-1/30 after:bg-white before:bg-primary-500 relative h-[28px] w-13 rounded-[34px] border bg-transparent before:absolute before:-top-[5px] before:-left-[6px] before:-z-10 before:h-[36px] before:w-[62px] before:rounded-[34px] before:p-[5px] before:transition-all before:content-[''] after:absolute after:start-[2px] after:top-1/2 after:size-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[94%]"></span>
                  <span className="ps-2.5 text-base font-normal text-black">Yearly</span>
                </label>
              </div>
            </RevealAnimation>
          </div>

          {/* plans  */}
          <div className="relative">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan, index) => (
                <RevealAnimation key={plan.id} delay={0.4 + index * 0.1}>
                  <PricingCard
                    title={plan.title}
                    description={plan.description}
                    features={plan.features}
                    monthlyPrice={plan.monthlyPrice}
                    yearlyPrice={plan.yearlyPrice}
                    buttonText={plan.buttonText}
                    buttonHref={plan.buttonHref}
                    highlight={plan.highlight}
                    isYearly={isYearly}
                  />
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
