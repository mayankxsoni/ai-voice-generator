import gradient4 from '@public/images/ns-img-496.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const Pricing = () => {
  return (
    <section className="pt-[120px] pb-16 md:pt-[160px] md:pb-20 lg:pb-[95px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-background-2 mx-auto w-full max-w-[1440px] space-y-[70px] rounded-2xl px-5 py-[100px] md:px-6 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-ivory">Our pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Select the pricing plan that best suits your needs.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4}>
                <div>
                  <div className="md:h-[195px] md:w-[290px]" />
                  <div className="space-y-2.5">
                    <h3 className="text-heading-6">What’s included</h3>
                    <ul>
                      <li className="text-secondary/60 text-tagline-1 border-b-stroke-10/80 border-b py-4 pr-6 font-normal">
                        Pages included
                      </li>
                      <li className="text-secondary/60 text-tagline-1 border-b-stroke-10/80 border-b py-4 pr-6 font-normal">
                        Custom design
                      </li>
                      <li className="text-secondary/60 text-tagline-1 border-b-stroke-10/80 border-b py-4 pr-6 font-normal">
                        SEO optimization
                      </li>
                      <li className="text-secondary/60 text-tagline-1 border-b-stroke-10/80 border-b py-4 pr-6 font-normal">
                        Branding support
                      </li>
                      <li className="text-secondary/60 text-tagline-1 py-4 pr-6 font-normal">
                        Social media integration
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.5}>
                <div>
                  <div className="bg-ns-ivory space-y-8 rounded-[20px] px-6 py-8">
                    <div>
                      <p className="text-tagline-1 mb-3 font-medium">Essential</p>
                      <h3 className="text-heading-5 font-normal">Free</h3>
                      <p className="">Free plan for all users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white hover:btn-primary btn-md w-full first-letter:uppercase before:content-none">
                      Get started
                    </Link>
                  </div>
                  <div className="bg-background-1 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-10/80 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 font-medium">Up to 5</p>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 dark:border-stroke-8 h-14 border-b px-6 py-4 text-center" />
                      <li className="h-14 px-6 py-4 text-center" />
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.6}>
                <div>
                  <div className="bg-secondary relative space-y-8 overflow-hidden rounded-[20px] px-6 py-8">
                    <div className="absolute -top-28 -right-20 z-0 h-full w-full">
                      <Image src={gradient4} alt="pricing bg" priority />
                    </div>
                    <div>
                      <p className="text-tagline-1 text-accent/60 mb-3 font-medium">Advanced</p>
                      <h3 className="text-heading-5 text-accent font-normal">$99</h3>
                      <p className="text-accent/60">Plans for advanced users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-primary btn-md hover:btn-white relative z-10 w-full first-letter:uppercase before:content-none">
                      Get started
                    </Link>
                  </div>
                  <div className="bg-background-1 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-10/80 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 font-medium">Up to 10</p>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center" />
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.7}>
                <div>
                  <div className="bg-ns-ivory space-y-8 rounded-[20px] px-6 py-8">
                    <div>
                      <p className="text-tagline-1 mb-3 font-medium">Enterprise</p>
                      <h3 className="text-heading-5 font-normal">Enterprise</h3>
                      <p className="">Contact us for enterprise users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white dark:btn-white-dark hover:btn-primary btn-md w-full first-letter:uppercase before:content-none">
                      Get started
                    </Link>
                  </div>
                  <div className="bg-background-1 rounded-[20px]">
                    <ul>
                      <li className="border-b-stroke-10/80 h-14 border-b px-6 py-4 text-center">
                        <p className="text-secondary/60 font-medium">Unlimited</p>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="border-b-stroke-10/80 flex h-14 items-center justify-center border-b px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                      <li className="flex h-14 items-center justify-center px-6 py-4 text-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
