import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="bg-background-2 pt-[120px] pb-[200px]">
      <div className="main-container">
        <div className="">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory mb-5 inline-block">Get started</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[1042px]">
                NextSaaS – your ultimate email &amp; transactional messaging platform
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[600px]">
                Drive more engagement. improve deliverability. automate your emails.
              </p>
            </RevealAnimation>
          </div>
          <div className="mt-[62px] space-y-8 max-sm:mx-auto max-sm:w-[80%]">
            <RevealAnimation delay={0.4}>
              <form action="#" method="post" className="flex items-center justify-center gap-3 max-sm:flex-col">
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  placeholder="Enter your email"
                  required
                  className="shadow-1 placeholder:text-secondary/50 border-stroke-10 text-secondary/60 focus:border-ns-linen h-12 w-full max-w-[440px] rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:ring-0 focus:outline-0"
                />
                <div className="group/btn-v2 mx-auto inline-block h-12 w-full rounded-full transition-transform duration-500 ease-in-out md:mx-0 md:w-auto">
                  <button
                    type="submit"
                    className="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium text-nowrap lowercase transition-all duration-500 ease-in-out md:mx-0 md:h-auto md:w-auto">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Get started
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
            <ul className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-[42px] md:gap-y-0">
              <RevealAnimation delay={0.2}>
                <li className="flex items-center justify-center gap-2">
                  <span className="bg-secondary flex size-[18px] items-center justify-center rounded-full">
                    <CheckIcon />
                  </span>
                  <p className="text-tagline-2">No credit card required</p>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <li className="flex items-center justify-center gap-2">
                  <span className="bg-secondary flex size-[18px] items-center justify-center rounded-full">
                    <CheckIcon />
                  </span>
                  <p className="text-tagline-2">14-Day free trial</p>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
