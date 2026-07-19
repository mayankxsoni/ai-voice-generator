import { cn } from '@/utils/cn';
import Link from 'next/link';

interface ButtonProps {
  className?: string;
  href: string;
  btnClass?: string;
  children: React.ReactNode;
}

const LinkButton = ({ className, href, btnClass, children }: ButtonProps) => {
  return (
    <div
      className={cn(
        'group/btn-v2 mx-auto inline-block w-[85%] rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto',
        className,
      )}>
      <Link
        href={href}
        className={cn(
          'mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto',
          btnClass,
        )}>
        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
          {children}
        </span>
        <div className="relative size-6 overflow-hidden">
          {/* one  */}
          <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11 5H13V7H11V5Z" />
              <path d="M5 5H7V7H5V5Z" />
              <path d="M14 8H16V10H14V8Z" />
              <path d="M8 8H10V10H8V8Z" />
              <path d="M17 11H19V13H17V11Z" />
              <path d="M11 11H13V13H11V11Z" />
              <path d="M14 14H16V16H14V14Z" />
              <path d="M8 14H10V16H8V14Z" />
              <path d="M11 17H13V19H11V17Z" />
              <path d="M5 17H7V19H5V17Z" />
            </svg>
          </span>
          {/* two  */}
          <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M11 5H13V7H11V5Z" />
              <path d="M5 5H7V7H5V5Z" />
              <path d="M14 8H16V10H14V8Z" />
              <path d="M8 8H10V10H8V8Z" />
              <path d="M17 11H19V13H17V11Z" />
              <path d="M11 11H13V13H11V11Z" />
              <path d="M14 14H16V16H14V14Z" />
              <path d="M8 14H10V16H8V14Z" />
              <path d="M11 17H13V19H11V17Z" />
              <path d="M5 17H7V19H5V17Z" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
};
LinkButton.displayName = 'LinkButton';
export default LinkButton;
