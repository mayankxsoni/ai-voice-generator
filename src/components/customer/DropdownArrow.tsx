import { cn } from '@/utils/cn';

const DropdownArrow = ({ isOpen }: { isOpen?: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className={cn('transition-transform duration-300', isOpen && 'rotate-180')}>
      <path
        d="M6 9L12 15L18 9"
        className="stroke-secondary dark:stroke-accent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropdownArrow;
