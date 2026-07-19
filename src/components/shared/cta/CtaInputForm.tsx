import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface CtaInputFormProps {
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const CtaInputForm = ({ ctaBtnText = 'Get Started', inputFieldClass }: CtaInputFormProps) => {
  return (
    <RevealAnimation delay={0.4}>
      <form
        action="#"
        method="post"
        className="flex flex-col items-center justify-start gap-3 md:flex-row"
        aria-label="cta-form">
        <input
          type="email"
          name="email"
          id="userEmail"
          placeholder="Enter your email"
          required
          className={cn(
            'placeholder:text-secondary/50 border-stroke-10 text-secondary focus-visible:outline-stroke-7 focus:border-ns-linen/80 h-12.5 w-[85%] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none focus-visible:outline-1 md:w-[430px] lg:w-[440px]',
            inputFieldClass,
          )}
          aria-label="cta-input"
        />
        {/* btn  */}
        <div className="group/btn-v2 mx-auto inline-block h-12 w-full rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto">
          <button
            type="submit"
            className={cn(
              'btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto',
            )}>
            <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
              {ctaBtnText}
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
          </button>
        </div>
      </form>
    </RevealAnimation>
  );
};
CtaInputForm.displayName = 'CtaInputForm';

export default CtaInputForm;
