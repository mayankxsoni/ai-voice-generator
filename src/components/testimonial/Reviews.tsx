import testimonials from '@/data/json/testimonials/testimonials.json';
import { XIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface ReviewsProps {
  className?: string;
  badgeClass?: string;
}

const Reviews = ({ className, badgeClass }: ReviewsProps) => {
  return (
    <section
      className={cn(
        'bg-background-2 pt-[60px] pb-[60px] md:pt-[100px] md:pb-[100px] lg:pt-[130px] lg:pb-[120px]',
        className,
      )}>
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* heading  */}
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge badge-ivory', badgeClass)}>Reviews</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 id="reviews-heading">Success stories from happy clients</h2>
            </RevealAnimation>
          </div>

          {/* reviews cards  */}
          <div className="columns-1 gap-6 md:columns-2 md:gap-8 lg:columns-3">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={testimonial.id} delay={0.3 + index * 0.1}>
                <article className="bg-ns-ivory mb-8 break-inside-avoid rounded-[20px] p-2.5">
                  <div className="space-y-6 rounded-xl bg-white p-4 sm:p-8">
                    {/* user info  */}
                    <div className="border-b-stroke-10 flex items-center justify-between border-b pb-6">
                      {/* user name  */}
                      <div className="flex items-center gap-3">
                        <figure className="size-11 overflow-hidden rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            loading="lazy"
                            width={44}
                            height={44}
                            className="size-full object-cover"
                          />
                        </figure>
                        <div>
                          <p className="text-secondary text-lg font-medium">{testimonial.name}</p>
                          <p className="text-tagline-2">{testimonial.position}</p>
                        </div>
                      </div>

                      {/* social link  */}
                      <Link
                        href="#"
                        aria-label={`Follow ${testimonial.name} on Twitter`}
                        className="bg-ns-ivory flex size-9 items-center justify-center rounded-full">
                        <span className="size-[13px]">
                          <XIcon />
                        </span>
                      </Link>
                    </div>

                    {/* user review  */}
                    <p>{testimonial.quote}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
