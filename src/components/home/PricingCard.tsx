'use client';

import LinkButton from '@/components/ui/button/Button';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonHref: string;
  highlight?: boolean;
  isYearly: boolean;
}

const PricingCard = ({
  title,
  description,
  features,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  buttonHref,
  highlight = false,
  isYearly,
}: PricingCardProps) => {
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const pricePeriod = isYearly ? '/Year' : '/Month';

  return (
    <div
      className={cn(
        'flex h-[598px] flex-col gap-6 rounded-4xl max-lg:w-full transition-all duration-300',
        highlight
          ? 'bg-gradient-to-b from-primary-500 to-primary-600 p-1.5 shadow-xl shadow-primary-500/25'
          : 'bg-[#f4f5f8]',
      )}>
      <div
        className={cn(
          'flex h-full flex-col gap-6 rounded-[28px] px-6 py-8',
          highlight ? 'bg-white' : 'bg-transparent',
        )}>
        {/* Most Popular badge */}
        {highlight && (
          <span className="self-start inline-block rounded-full bg-primary-50 border border-primary-200 px-3 py-1 text-[11px] font-semibold text-primary-600">
            ⭐ Most Popular
          </span>
        )}

        <div className="mb-6">
          <h3
            className={cn(
              'text-heading-5 mb-2 font-bold',
              highlight ? 'text-secondary' : 'text-secondary',
            )}>
            {title}
          </h3>
          <p className="mb-6 max-w-[270px] text-secondary/60 text-sm">{description}</p>
          <ul className="relative list-none space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                {/* Orange check icon */}
                <span
                  className={cn(
                    'flex size-4 shrink-0 items-center justify-center rounded-full',
                    highlight ? 'bg-primary-500' : 'bg-secondary/10',
                  )}>
                  <svg className={cn('size-2.5', highlight ? 'text-white' : 'text-secondary/60')} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-secondary text-tagline-2 font-normal">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            'mt-auto border-t pt-6',
            highlight ? 'border-primary-100' : 'border-secondary/10',
          )}>
          <div className={cn('mb-6', isYearly ? 'price-year' : 'price-month')}>
            <h4 className={cn('text-heading-4 font-extrabold', highlight && 'text-primary-500')}>
              {price === 0 ? 'Custom' : `$${price}`}
              {price !== 0 && (
                <span className="text-tagline-2 font-normal text-secondary/50">{pricePeriod}</span>
              )}
            </h4>
          </div>
          <div className={cn('mb-6 hidden', isYearly ? 'price-month' : 'price-year')}>
            <h4 className="text-heading-4 font-extrabold">
              {isYearly ? monthlyPrice : yearlyPrice === 0 ? 'Custom' : `$${isYearly ? monthlyPrice : yearlyPrice}`}
              <span className="text-tagline-2 font-normal text-secondary/50">
                {isYearly ? '/Month' : '/Year'}
              </span>
            </h4>
          </div>
          <div className="w-full">
            <LinkButton
              href={buttonHref}
              className="w-full!"
              btnClass={cn(
                'btn-md !w-full',
                highlight
                  ? 'btn-primary-v2'
                  : 'btn-gray-v2 group-hover/btn-v2:btn-secondary-v2',
              )}>
              {buttonText}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
