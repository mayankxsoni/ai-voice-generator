import RevealAnimation from '@/components/animation/RevealAnimation';
import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';

interface CTACheckListProps {
  className?: string;
  ctaCheckListData: {
    id: string;
    text: string;
  }[];
  listClass?: string;
  listTextClass?: string;
  listAnimationDelay?: number;
  checkListVariant?: 'default' | 'gray';
}

const CTACheckList = ({
  className,
  ctaCheckListData,
  listTextClass,
  listClass,
  listAnimationDelay = 0.7,
  checkListVariant = 'default',
}: CTACheckListProps) => {
  return (
    <ul className={cn('flex flex-col items-center justify-center sm:flex-row', className)} aria-label="cta-check-list">
      {ctaCheckListData.map((item, index) => (
        <RevealAnimation delay={listAnimationDelay + index * 0.1} key={item.id}>
          <li className={cn('flex items-center justify-center gap-2', listClass)}>
            <span
              className={cn(
                'flex size-[18px] items-center justify-center rounded-full',
                checkListVariant === 'gray' && 'bg-accent/10 dark:bg-accent/10',
                checkListVariant === 'default' && 'bg-secondary dark:bg-accent',
              )}>
              <span className="flex size-5 shrink-0 items-center justify-center">
                <CheckIcon className={cn(checkListVariant === 'gray' && 'dark:fill-accent')} />
              </span>
            </span>
            <p
              className={cn('text-tagline-2 sm:text-tagline-1 font-normal', listTextClass)}
              aria-label="cta-check-list-item">
              {item.text}
            </p>
          </li>
        </RevealAnimation>
      ))}
    </ul>
  );
};

CTACheckList.displayName = 'CTACheckList';
export default CTACheckList;
