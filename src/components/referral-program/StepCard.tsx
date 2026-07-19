import { cn } from '@/utils/cn';

export interface StepCardProps {
  id?: string;
  stepNumber: number;
  title: string;
  description: string;
  className?: string;
}

const StepCard = ({ id, stepNumber, title, description, className }: StepCardProps) => {
  return (
    <div
      className={cn('col-span-12 w-full space-y-24 rounded-[20px] p-6 md:col-span-4 md:p-10.5', className)}
      itemType="https://schema.org/HowToStep"
      id={id}>
      <h3 className="text-heading-3" itemProp="position" aria-label="Step 1">
        {stepNumber}
      </h3>
      <div className="space-y-1">
        <h4 className="text-heading-5" itemProp="name">
          {title}
        </h4>
        <p className="max-w-[222px]" itemProp="text">
          {description}
        </p>
      </div>
    </div>
  );
};

StepCard.displayName = 'StepCard';
export default StepCard;
