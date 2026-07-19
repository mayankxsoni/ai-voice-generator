import { IService } from '@/interface';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

type UserReviewProps = {
  service: IService;
};

const UserReview = ({ service }: UserReviewProps) => {
  return (
    <div className="mt-[70px] space-y-14" id="live-data-insights">
      <div className="space-y-3">
        <RevealAnimation delay={0.1}>
          <h4 className="text-heading-2">What our users say</h4>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <p className="text-tagline-1">
            &ldquo;Nextsaas delivered our entire platform ahead of schedule—flawless execution and real
            partnership.&rdquo;
          </p>
        </RevealAnimation>
      </div>
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary space-y-6 rounded-[20px] p-8">
          <figure className="size-16 overflow-hidden rounded-full bg-(image:--color-gradient-13)">
            <Image
              className="size-full object-cover"
              src={service.userReview.image}
              alt="avatar"
              width={64}
              height={64}
            />
          </figure>
          <blockquote>
            <RevealAnimation delay={0.3}>
              <p className="text-white">{service.userReview.reviewContent}</p>
            </RevealAnimation>
          </blockquote>
          <div>
            <RevealAnimation delay={0.4}>
              <p className="text-lg font-medium text-white">{service.userReview.name}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p className="text-tagline-2 text-accent/60 font-normal">{service.userReview.userRole}</p>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </div>
  );
};

UserReview.displayName = 'UserReview';
export default UserReview;
