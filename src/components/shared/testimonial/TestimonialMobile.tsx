import RevealAnimation from '@/components/animation/RevealAnimation';
import avatar1 from '@public/images/ns-avatar-15.png';
import avatar6 from '@public/images/ns-avatar-16.png';
import avatar2 from '@public/images/ns-avatar-17.png';
import avatar3 from '@public/images/ns-avatar-21.png';
import avatar4 from '@public/images/ns-avatar-22.png';
import avatar5 from '@public/images/ns-avatar-23.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import TestimonialStar from '../TestimonialStar';

interface TestimonialData {
  id: string;
  name: string;
  position: string;
  avatar: StaticImageData;
  quote: string;
  xUrl: string;
}

const testimonialsData: TestimonialData[] = [
  {
    id: '1',
    name: 'Michael J.',
    position: 'Graphic Designer',
    avatar: avatar1,
    quote:
      'This platform transformed my creative process. The intuitive design tools and AI assistance helped me create stunning visuals in half the time.',
    xUrl: 'https://x.com/',
  },
  {
    id: '2',
    name: 'Anna S.',
    position: 'Marketing Manager',
    avatar: avatar2,
    quote:
      'The analytics dashboard gives me insights I never had before. Our campaign performance improved by 40% in just two months.',
    xUrl: 'https://x.com/',
  },
  {
    id: '3',
    name: 'Samuel K.',
    position: 'Operations Manager',
    avatar: avatar3,
    quote:
      'Streamlined our entire workflow. What used to take hours now takes minutes. The team productivity has skyrocketed.',
    xUrl: 'https://x.com/',
  },
  {
    id: '4',
    name: 'Brian C.',
    position: 'Financial Analyst',
    avatar: avatar4,
    quote:
      'The automated reporting features saved me 15 hours per week. I can now focus on strategic analysis instead of data crunching.',
    xUrl: 'https://x.com/',
  },
  {
    id: '5',
    name: 'Terry J.',
    position: 'Sales Manager',
    avatar: avatar5,
    quote:
      'Our sales pipeline visibility improved dramatically. The CRM integration made tracking deals effortless and increased our close rate by 25%.',
    xUrl: 'https://x.com/',
  },
  {
    id: '6',
    name: 'James D.',
    position: 'Software Engineer',
    avatar: avatar6,
    quote:
      'The development tools and integrations are top-notch. Deploying code has never been this smooth and reliable.',
    xUrl: 'https://x.com/',
  },
];

const TestimonialMobile = () => {
  return (
    <div className="block lg:hidden" aria-label="Customer testimonials">
      <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <RevealAnimation key={testimonial.id} delay={0.2 + index * 0.1}>
            <div
              key={testimonial.id}
              aria-label={`Testimonial from ${testimonial.name}, ${testimonial.position}`}
              className="max-sm:w-full">
              <div className="border-stroke-10 flex w-full flex-col items-start justify-center gap-y-6 rounded-[20px] border bg-white p-6 shadow-[0_6px_8px_0_rgba(4,10,51,0.03)] sm:w-[362px]">
                <div className="flex items-center justify-center gap-x-3">
                  <figure className="size-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={`Profile photo of ${testimonial.name}, ${testimonial.position}`}
                      className="h-full w-full object-cover"
                      width={48}
                      height={48}
                      loading="lazy"
                    />
                  </figure>
                  <div>
                    <h3 className="text-secondary text-tagline-1 font-semibold">{testimonial.name}</h3>
                    <p className="text-tagline-2">{testimonial.position}</p>
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <TestimonialStar className="fill-ns-linen" />
                    <Link
                      href={testimonial.xUrl}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Follow ${testimonial.name} on Twitter`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
                        <path
                          d="M17.8441 5.15234H20.6042L14.5741 11.9297L21.668 21.1523H16.1136L11.7631 15.5589L6.7852 21.1523H4.02341L10.4731 13.9031L3.66797 5.15234H9.36342L13.2959 10.265L17.8441 5.15234ZM16.8753 19.5277H18.4048L8.53238 6.69162H6.89117L16.8753 19.5277Z"
                          fill="#12161F"
                        />
                      </svg>
                    </Link>
                  </div>
                  <blockquote
                    className="font-inter-tight text-tagline-1 text-secondary line-clamp-3 font-normal"
                    cite={testimonial.xUrl}>
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
};

TestimonialMobile.displayName = 'TestimonialMobile';
export default TestimonialMobile;
