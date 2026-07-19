import { cn } from '@/utils/cn';
import newArrow from '@public/images/icons/new-arrow.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const StepDirection = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        'bg-background-3 absolute top-1/2 z-10 hidden w-full max-w-[44px] -translate-y-1/2 overflow-hidden rounded-[80px] px-2.5 py-6 ring-8 ring-white',
        className,
      )}>
      <Marquee speed={35} delay={0} direction="right" autoFill className="size-6 overflow-hidden">
        <figure className="flex size-6 items-center justify-center">
          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
        </figure>
      </Marquee>
    </div>
  );
};

StepDirection.displayName = 'StepDirection';
export default StepDirection;
