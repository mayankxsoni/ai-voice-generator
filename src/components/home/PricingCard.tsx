'use client';

import LinkButton from '@/components/ui/button/Button';
import { CheckIconV3 } from '@/icons';
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
        'bg-ns-ivory flex h-[598px] flex-col gap-6 rounded-4xl px-6 py-8 max-lg:w-full',
        highlight && 'p-1.5',
      )}>
      <div className={cn('flex h-full flex-col gap-6', highlight && 'rounded-[28px] bg-white p-6 dark:bg-black')}>
        <div className="mb-6">
          <h3 className="text-heading-5 mb-2 font-normal">{title}</h3>
          <p className="mb-6 max-w-[270px]">{description}</p>
          <ul className="relative list-none space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <CheckIconV3 fill={highlight ? 'accent' : 'default'} />
                <span className="text-secondary text-tagline-2 font-normal">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-stroke-10 mt-auto border-t pt-6">
          <div className={cn('mb-6', isYearly ? 'price-year' : 'price-month')}>
            <h4 className="text-heading-4 font-normal">
              ${price}
              <span className="text-tagline-2">{pricePeriod}</span>
            </h4>
          </div>
          <div className={cn('mb-6 hidden', isYearly ? 'price-month' : 'price-year')}>
            <h4 className="text-heading-4 font-normal">
              ${isYearly ? monthlyPrice : yearlyPrice}
              <span className="text-tagline-2">{isYearly ? '/Month' : '/Year'}</span>
            </h4>
          </div>
          <div className="w-full">
            <LinkButton
              href={buttonHref}
              className="w-full!"
              btnClass={cn(
                'btn-md  !w-full',
                highlight
                  ? 'btn-secondary-v2 group-hover/btn-v2:btn-primary-v2'
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
