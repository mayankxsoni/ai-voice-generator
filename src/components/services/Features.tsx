import { cn } from '@/utils/cn';
import authorAvatarBg from '@public/images/ns-author-avatar-bg.png';
import avatar1 from '@public/images/ns-avatar-1.png';
import avatar2 from '@public/images/ns-avatar-2.png';
import avatar3 from '@public/images/ns-avatar-3.png';
import avatar7 from '@public/images/ns-avatar-7.png';
import gradientBg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const featuresListData = [
  {
    id: 'feature-1',
    text: 'Add a feature section about the product.',
  },
  {
    id: 'feature-2',
    text: 'Add a feature section about the product.',
  },
  {
    id: 'feature-3',
    text: 'Single upfront payment.',
  },
];

const Features = ({ className, badgeClassName }: { className?: string; badgeClassName?: string }) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden pt-14 pb-24 md:pt-16 md:pb-36 lg:pt-[88px] lg:pb-40 xl:pt-[100px] xl:pb-[200px]',
        className,
      )}>
      <div className="main-container">
        <div className="flex flex-wrap items-center gap-y-8 lg:flex-nowrap lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <span className={cn('badge badge-ivory mb-5', badgeClassName)}>Feature</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto mb-8 max-w-[520px] lg:mx-0">Streamline your business operations.</h2>
              </RevealAnimation>
              <ul className="mb-14 space-y-4">
                {featuresListData.map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                    <li className="flex items-center justify-center gap-2 lg:justify-start">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        className="shrink-0">
                        <rect width={18} height={18} rx={9} fill="" className="fill-secondary" />
                        <path
                          d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                          fill=""
                          className="fill-white"
                        />
                      </svg>
                      <span className="text-secondary/40">{feature.text}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
              <RevealAnimation delay={0.6}>
                <div>
                  <LinkButton href="/features" btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-xl-v2">
                    Get started
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.3}>
            <div className="mx-auto w-full max-w-max lg:mx-0 lg:w-1/2">
              <div className="bg-ns-ivory relative overflow-hidden rounded-[20px] p-5 lg:p-8">
                <RevealAnimation delay={0.4} offset={100} direction="right">
                  <figure className="pointer-events-none absolute right-[-271px] bottom-[-325px] z-0 h-full w-full -rotate-213 select-none">
                    <Image src={gradientBg} alt="cta-bg" />
                  </figure>
                </RevealAnimation>

                <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-2.5">
                  <div className="w-full rounded-2xl bg-white p-6 sm:w-[55%]">
                    <h5 className="mb-4">
                      Task <br className="hidden lg:block" />
                      management
                    </h5>
                    <div className="mb-7 flex items-center gap-4">
                      <figure className="relative inline-block size-14 overflow-hidden rounded-full bg-(image:--color-gradient-13)">
                        <Image src={avatar7} alt="avatar" className="max-w-full" />
                        <Image src={authorAvatarBg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                      </figure>
                      <div>
                        <h5 className="text-secondary">Curious george</h5>
                        <p className="text-secondary/60">UI UX designer</p>
                      </div>
                    </div>
                    <div className="bg-secondary/10 mb-7 h-px w-full" />
                    <div className="flex items-center justify-between">
                      <p className="text-secondary/60 text-tagline-2 font-medium">1 days Ago</p>
                      <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.34462 13.401L13.2849 15.8974C13.7886 16.2165 14.4139 15.7419 14.2644 15.154L13.126 10.6756C13.0939 10.5509 13.0977 10.4197 13.137 10.297C13.1762 10.1743 13.2492 10.0652 13.3477 9.98222L16.8811 7.04132C17.3453 6.6549 17.1057 5.88439 16.5092 5.84567L11.8949 5.5462C11.7706 5.53732 11.6514 5.49332 11.5511 5.41931C11.4509 5.34531 11.3737 5.24435 11.3286 5.12819L9.60765 0.794357C9.56087 0.671064 9.47769 0.564919 9.36915 0.490017C9.26062 0.415115 9.13187 0.375 9 0.375C8.86813 0.375 8.73938 0.415115 8.63085 0.490017C8.52232 0.564919 8.43914 0.671064 8.39236 0.794357L6.6714 5.12819C6.6263 5.24435 6.54914 5.34531 6.4489 5.41931C6.34865 5.49332 6.22944 5.53732 6.10515 5.5462L1.49078 5.84567C0.894294 5.88439 0.654664 6.6549 1.11894 7.04132L4.65232 9.98222C4.75079 10.0652 4.82383 10.1743 4.86305 10.297C4.90226 10.4197 4.90606 10.5509 4.874 10.6756L3.81824 14.8288C3.63889 15.5343 4.38929 16.1038 4.99369 15.7209L8.65539 13.401C8.75837 13.3354 8.87792 13.3006 9 13.3006C9.12208 13.3006 9.24163 13.3354 9.34462 13.401Z"
                          fill=""
                          className="fill-secondary"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full rounded-2xl bg-white p-6 sm:w-[45%]">
                    <h5 className="mb-4">Progress Tracking</h5>
                    <div className="relative flex w-fit items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="176"
                        height="176"
                        viewBox="0 0 176 176"
                        fill="none">
                        <path
                          d="M15.4106 38.2529C5.02285 53.4103 -0.359462 71.4393 0.0186306 89.8107C0.396723 108.182 6.51625 125.974 17.5188 140.692C28.5213 155.409 43.8549 166.313 61.3685 171.873C78.8822 177.434 97.6973 177.373 115.175 171.699C132.652 166.025 147.914 155.022 158.821 140.234C169.728 125.445 175.732 107.614 175.991 89.2404C176.25 70.8669 170.751 52.8732 160.265 37.7834C149.78 22.6937 134.833 11.2648 117.523 5.10011L116.189 8.84623C132.717 14.7324 146.988 25.6448 157 40.0526C167.012 54.4605 172.262 71.6411 172.015 89.1843C171.768 106.728 166.035 123.753 155.621 137.873C145.207 151.993 130.634 162.499 113.947 167.917C97.2591 173.335 79.2942 173.393 62.572 168.083C45.8497 162.774 31.2091 152.363 20.7037 138.31C10.1984 124.258 4.35538 107.27 3.99437 89.7289C3.63337 72.1876 8.77246 54.9734 18.6908 40.5009L15.4106 38.2529Z"
                          fill="url(#paint0_linear_2267_35030)"
                        />
                        <path
                          d="M20 88C20 102.069 24.3636 115.791 32.4893 127.275C40.615 138.76 52.1028 147.442 65.3695 152.124C78.6361 156.806 93.0283 157.258 106.563 153.417C120.097 149.577 132.107 141.633 140.937 130.681C149.767 119.729 154.983 106.307 155.866 92.2666C156.749 78.2257 153.255 64.2567 145.866 52.2849C138.476 40.313 127.556 30.9277 114.609 25.4225C101.663 19.9173 87.3271 18.5632 73.5785 21.5468L74.4337 25.4873C87.367 22.6805 100.852 23.9543 113.031 29.1331C125.21 34.3119 135.483 43.1407 142.434 54.4027C149.385 65.6646 152.672 78.8053 151.842 92.0136C151.011 105.222 146.105 117.847 137.798 128.15C129.491 138.453 118.194 145.926 105.462 149.538C92.7302 153.151 79.1913 152.726 66.7114 148.321C54.2314 143.917 43.4248 135.75 35.7809 124.947C28.137 114.143 24.0322 101.234 24.0322 88H20Z"
                          fill="url(#paint1_linear_2267_35030)"
                        />
                        <path
                          d="M115.552 48.6952C110.391 45.077 104.567 42.5109 98.4138 41.1433C92.2605 39.7757 85.8981 39.6335 79.6899 40.7248C73.4816 41.8161 67.5491 44.1196 62.231 47.5036C56.9129 50.8876 52.3135 55.286 48.6952 60.4476C45.077 65.6091 42.5109 71.4328 41.1433 77.5861C39.7757 83.7395 39.6335 90.1019 40.7248 96.3101C41.8161 102.518 44.1196 108.451 47.5036 113.769C50.8876 119.087 55.286 123.687 60.4476 127.305L62.756 124.012C58.0268 120.697 53.997 116.483 50.8965 111.61C47.7959 106.738 45.6855 101.302 44.6856 95.6139C43.6858 89.9258 43.816 84.0964 45.069 78.4586C46.322 72.8209 48.6732 67.4851 51.9883 62.756C55.3034 58.0268 59.5175 53.997 64.39 50.8965C69.2625 47.7959 74.698 45.6855 80.3861 44.6856C86.0742 43.6858 91.9036 43.816 97.5414 45.069C103.179 46.322 108.515 48.6732 113.244 51.9883L115.552 48.6952Z"
                          fill="url(#paint2_linear_2267_35030)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_2267_35030"
                            x1="166.222"
                            y1="87.9976"
                            x2="2.31009e-06"
                            y2="87.9976"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ECC5A2" />
                            <stop offset="1" stopColor="#ECC5A2" stopOpacity="0.28" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_2267_35030"
                            x1="148.444"
                            y1="87.9982"
                            x2="20"
                            y2="87.9982"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ECC5A2" />
                            <stop offset="1" stopColor="#ECC5A2" stopOpacity="0.28" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_2267_35030"
                            x1="130.667"
                            y1="87.9987"
                            x2="40"
                            y2="87.9987"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ECC5A2" />
                            <stop offset="1" stopColor="#ECC5A2" stopOpacity="0.28" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <figure className="absolute top-1/2 left-1/2 inline-block size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-(image:--color-gradient-13)">
                        <Image src={avatar2} alt="avatar" className="max-w-full" />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary relative z-10 mt-2.5 flex max-w-[370px] flex-col justify-start gap-5 rounded-2xl p-6 sm:flex-row sm:items-center">
                  <div className="flex cursor-pointer -space-x-3.5">
                    <Image
                      className="ring-ns-linen inline-block size-14 rounded-full bg-(image:--color-gradient-13) ring-4"
                      src={avatar1}
                      alt="Avatar 1"
                    />
                    <Image
                      className="ring-ns-linen inline-block size-14 rounded-full bg-(image:--color-gradient-13) ring-4"
                      src={avatar2}
                      alt="Avatar 2"
                    />
                    <Image
                      className="ring-ns-linen inline-block size-14 rounded-full bg-(image:--color-gradient-13) ring-4"
                      src={avatar3}
                      alt="Avatar 3"
                    />
                  </div>
                  <div>
                    <h5 className="text-accent mb-1">Mischievous</h5>
                    <p className="text-accent/60">UI UX designer</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Features;
