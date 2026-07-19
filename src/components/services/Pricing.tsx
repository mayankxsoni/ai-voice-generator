'use client';

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface PricingFeature {
  id: string;
  text: string;
  isActive: boolean;
}

interface PricingCard {
  id: string;
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  isFeatured: boolean;
  features: PricingFeature[];
}

const pricingData: PricingCard[] = [
  {
    id: 'simplified',
    title: 'Simplified',
    description: 'For individuals and small teams with unlimited trial access.',
    monthlyPrice: '19.00',
    yearlyPrice: '230.00',
    isFeatured: false,
    features: [
      { id: 'single-payment', text: 'Single Payment', isActive: true },
      { id: 'selling-your-own-items', text: 'Selling your own items', isActive: false },
      { id: 'powerful-integration', text: 'Powerful integration', isActive: false },
    ],
  },
  {
    id: 'basic',
    title: 'Basic',
    description: 'For individuals and small teams with unlimited trial access.',
    monthlyPrice: '37.00',
    yearlyPrice: '4420.00',
    isFeatured: true,
    features: [
      { id: 'unlimited-bandwidth', text: 'Unlimited Bandwidth', isActive: true },
      { id: 'promotional-tools', text: 'Promotional Tools', isActive: true },
      { id: 'single-payment', text: 'Single Payment', isActive: true },
      { id: 'single-payment', text: 'Single Payment', isActive: true },
      { id: 'selling-your-own-items', text: 'Selling your own items', isActive: false },
      { id: 'powerful-integration', text: 'Powerful integration', isActive: false },
    ],
  },
  {
    id: 'enhanced',
    title: 'Enhanced',
    description: 'For individuals and small teams with unlimited trial access.',
    monthlyPrice: '37.00',
    yearlyPrice: '4420.00',
    isFeatured: false,
    features: [
      { id: 'selling-on-your-own-conditions', text: 'Selling on your own conditions', isActive: true },
      { id: 'seamless-integrations', text: 'Seamless integrations', isActive: true },
      { id: 'real-time-streaming', text: 'Real-time streaming', isActive: false },
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section className="relative overflow-hidden py-24 xl:py-[200px]">
      <div className="main-container space-y-[70px]">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">Our Pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-8 max-w-[650px]">Select the pricing plan that best suits your needs.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="relative rounded-[160px] bg-white px-14 py-6">
              <RevealAnimation delay={1} duration={1} direction="up" offset={200}>
                <span className="bg-ns-linen text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-20 rounded-[36px] px-3.5 py-1.5 font-normal text-white capitalize shadow-xs">
                  save 40%
                </span>
              </RevealAnimation>
              <label className="relative z-10 inline-flex cursor-pointer items-center">
                <span className="text-secondary mr-2.5 text-base font-normal">Monthly</span>
                <input
                  type="checkbox"
                  id="priceCheck"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  className="peer sr-only"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="bg-ns-linen after:bg-accent relative h-[28px] w-13 rounded-[34px] after:absolute after:start-[2px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[99%]" />
                <span className="text-secondary ms-2.5 text-base font-normal">Yearly</span>
              </label>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative">
          <div className="flex items-center gap-8 max-lg:flex-col">
            {pricingData.map((card, index) => (
              <RevealAnimation key={card.id} delay={0.4 + index * 0.2}>
                <div
                  className={cn(
                    'flex-1 rounded-[20px] max-lg:w-full',
                    card.isFeatured
                      ? "bg-[url('/images/ns-img-25.png')] bg-cover bg-center bg-no-repeat p-2.5"
                      : 'bg-ns-ivory w-full max-w-full p-8 lg:max-w-[420px]',
                  )}>
                  <div className={cn(card.isFeatured && 'rounded-xl bg-white p-8')}>
                    <h3 className={cn('text-heading-5 font-normal', card.isFeatured ? 'mb-2.5' : 'mb-2')}>
                      {card.title}
                    </h3>
                    <p className="mb-6 max-w-[250px]">{card.description}</p>
                    <div className="price-month mb-7">
                      <h4 className="text-heading-4 font-normal">
                        $<span>{isAnnual ? card.yearlyPrice : card.monthlyPrice}</span>
                      </h4>
                      <p className="text-secondary">{isAnnual ? 'Per Year' : 'Per Month'}</p>
                    </div>

                    <Link
                      href="/contact-us"
                      className={cn(
                        'btn btn-md mb-8 block w-full text-center first-letter:uppercase before:content-none',
                        card.isFeatured ? 'btn-secondary hover:btn-primary' : 'btn-white hover:btn-secondary',
                      )}>
                      Get started
                    </Link>
                    <ul className="relative list-none space-y-2.5">
                      {card.features.map((feature) => {
                        return (
                          <li key={feature.id} className="flex items-center gap-2.5">
                            <span className={cn('size-5 rounded-full', feature.isActive ? 'bg-secondary' : 'bg-white')}>
                              <CheckIcon className={cn(feature.isActive ? 'fill-white' : 'fill-secondary/60')} />
                            </span>
                            <span
                              className={cn(
                                'text-tagline-1 font-normal',
                                feature.isActive ? 'text-secondary' : 'text-secondary/60',
                              )}>
                              {feature.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
