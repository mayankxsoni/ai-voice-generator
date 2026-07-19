import { ICustomerSection } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const DetailsBlock = ({ blockData }: { blockData: ICustomerSection }) => {
  const { titleOne, titleTwo, description, testimonial } = blockData;
  return (
    <div className="flex flex-col justify-between gap-y-4 md:flex-row md:gap-x-16 lg:gap-x-10">
      <RevealAnimation delay={0.1}>
        <div>
          <p className="text-heading-4 md:text-heading-5 text-secondary sticky top-20">{titleOne}</p>
        </div>
      </RevealAnimation>
      <div className="space-y-8 lg:w-full lg:max-w-[808px]">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-5 md:text-heading-4 lg:text-heading-3">{titleTwo}</h2>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p>{description}</p>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <article className="border-stroke-10 rounded-[20px] border bg-white p-7 sm:p-14">
            <figure className="flex items-center gap-3">
              <Image
                src={testimonial?.image || ''}
                className="size-11 rounded-full bg-(image:--color-gradient-13) object-cover object-center"
                alt={testimonial?.name || ''}
                width={44}
                height={44}
              />
              <figure>
                <h3 className="text-tagline-1 leading-normal font-semibold sm:text-lg">{testimonial?.name}</h3>
                <p className="text-tagline-2 text-secondary/60 font-normal">{testimonial?.role}</p>
              </figure>
            </figure>
            <div className="flex items-center justify-between pt-6 pb-5">
              <span className="flex items-center gap-1">
                {testimonial?.rating &&
                  Array.from({ length: testimonial.rating }).map((_, index) => (
                    <svg
                      key={index + 'star'}
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[12px]"
                      viewBox="0 0 16 17"
                      fill="none">
                      <g clipPath="url(#clip0_3794_1164)">
                        <path
                          d="M7.25672 1.39741C7.53172 0.749041 8.46832 0.749042 8.74332 1.39741L10.3663 5.22417C10.4823 5.4975 10.7445 5.68426 11.0454 5.70792L15.2582 6.03912C15.9719 6.09524 16.2614 6.96876 15.7175 7.42559L12.5079 10.1218C12.2786 10.3144 12.1784 10.6167 12.2485 10.9046L13.2291 14.936C13.3952 15.6191 12.6375 16.159 12.0264 15.793L8.41965 13.6325C8.16202 13.4782 7.83802 13.4782 7.5804 13.6325L3.9736 15.793C3.3625 16.159 2.60477 15.6191 2.77091 14.936L3.75155 10.9046C3.82159 10.6167 3.72147 10.3144 3.49221 10.1218L0.28245 7.42559C-0.261375 6.96876 0.0280544 6.09524 0.741835 6.03912L4.9547 5.70792C5.25561 5.68426 5.51774 5.4975 5.63367 5.22417L7.25672 1.39741Z"
                          fill="#864FFE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3794_1164">
                          <rect width={16} height={16} fill="white" transform="translate(0 0.911133)" />
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
              </span>
              <Link
                href={testimonial?.xLink || 'https://x.com'}
                target="_blank"
                rel="noopener"
                aria-label="Follow Darrell Steward on Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                  <path
                    d="M17.8441 4.24219H20.6042L14.5741 11.0196L21.668 20.2422H16.1136L11.7631 14.6488L6.7852 20.2422H4.02341L10.4731 12.993L3.66797 4.24219H9.36342L13.2959 9.35481L17.8441 4.24219ZM16.8753 18.6176H18.4048L8.53238 5.78147H6.89117L16.8753 18.6176Z"
                    className="fill-background-8"
                  />
                </svg>
              </Link>
            </div>
            <p className="pb-6">{testimonial?.description}</p>
          </article>
        </RevealAnimation>
      </div>
    </div>
  );
};

DetailsBlock.displayName = 'DetailsBlock';
export default DetailsBlock;
