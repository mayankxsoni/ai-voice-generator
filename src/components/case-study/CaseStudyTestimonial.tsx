import { ICaseStudy } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CaseStudyTestimonial = ({ userReview }: { userReview: ICaseStudy['userReview'] }) => {
  return (
    <section>
      <div className="mx-auto max-w-[950px]">
        <div className="space-y-14">
          {/* heading  */}
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h4 className="text-heading-2" id="testimonials-title">
                What our users say
              </h4>
            </RevealAnimation>
            <blockquote>
              <RevealAnimation delay={0.2}>
                <p>
                  &quot;Nextsaas delivered our entire platform ahead of schedule—flawless execution and real
                  partnership.&quot;
                </p>
              </RevealAnimation>
            </blockquote>
          </div>
          {/* testimonial card  */}
          <RevealAnimation delay={0.3}>
            <div className="bg-ns-ivory/80 max-w-[950px] space-y-6 rounded-[20px] p-8">
              <figure className="size-14 overflow-hidden rounded-full bg-(image:--color-gradient-13)">
                <Image
                  src={userReview.userImage}
                  className="size-full object-cover"
                  width={56}
                  height={56}
                  priority
                  alt={userReview.userName}
                />
              </figure>
              <blockquote cite="https://velocityfinance.com">
                <p className="text-secondary">{userReview.reviewText}</p>
              </blockquote>
              <div className="pb-4">
                <p className="text-secondary text-lg leading-[150%] font-medium">{userReview.userName}</p>
                <p className="text-tagline-2">{userReview.userRole}</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonial;
