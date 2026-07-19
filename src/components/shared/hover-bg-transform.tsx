import { cn } from '@/utils/cn';

const HoverBgTransform = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'bg-background-3 dark:bg-background-7 absolute top-1/2 left-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[10px] opacity-0 transition-all duration-300',
        className,
      )}
    />
  );
};

HoverBgTransform.displayName = 'HoverBgTransform';
export default HoverBgTransform;
