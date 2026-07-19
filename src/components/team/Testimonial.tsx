import testimonials from '@/data/json/testimonials/testimonials.json';
import trustPilotLogo from '@public/images/icons/trustpilot-logo.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Testimonial = () => {
  return (
    <section className="bg-background-2 pt-20 pb-14 md:pt-24 md:pb-16 lg:pt-[150px] lg:pb-[88px] xl:pt-[200px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-[67px]">
        <div className="mb-14 text-center lg:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">What our users say</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto mb-3 max-w-[750px]">Hear from our customers about their experiences with us</h2>
          </RevealAnimation>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <div className="relative">
          <div className="from-background-2 absolute top-0 left-0 z-40 h-full w-[15%] bg-linear-to-r to-transparent md:w-[20%]" />
          <div className="from-background-2 absolute top-0 right-0 z-40 h-full w-[15%] bg-linear-to-l to-transparent md:w-[20%]" />

          <Marquee autoFill pauseOnHover className="w-full overflow-hidden">
            <div className="flex items-center justify-center gap-8 py-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`group relative min-h-[245px] max-w-[340px] min-w-[340px] perspective-[1000px] sm:max-w-[358px] sm:min-w-[358px] ${index === 0 ? 'ml-8' : ''}`}>
                  <div className="flipper h-full w-full">
                    {/* Front of Card */}
                    <div className="front bg-ns-ivory absolute top-0 left-0 h-fit w-full space-y-8 rounded-[20px] p-8">
                      <p className="text-secondary line-clamp-3 max-w-[297px] text-wrap">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="border-stroke-10 border-t" />
                      <figure className="flex items-center gap-3">
                        <Image
                          src={testimonial.avatar}
                          className="size-11 rounded-full bg-(image:--color-gradient-13) object-cover object-center"
                          alt={`${testimonial.name}'s avatar`}
                          width={44}
                          height={44}
                          loading="lazy"
                        />
                        <figcaption>
                          <h3 className="text-tagline-1 font-medium">{testimonial.name}</h3>
                          <p className="text-tagline-2">{testimonial.position}</p>
                        </figcaption>
                      </figure>
                    </div>

                    {/* Back of Card */}
                    <div className="back bg-secondary absolute top-0 left-0 flex h-full min-h-[245px] w-full max-w-[340px] min-w-[340px] flex-col items-center justify-center space-y-2 overflow-hidden rounded-[20px] p-8 sm:max-w-[358px] sm:min-w-[358px]">
                      <div className="absolute -top-[185px] -left-[184px] z-10 h-full w-full -rotate-90 bg-[url('/images/ns-img-501.png')] bg-contain bg-no-repeat" />
                      <h3 className="text-ns-green relative z-20 text-[64px] leading-[1.1] font-light">
                        {testimonial.rating}
                      </h3>
                      <figure className="relative z-20 h-10 w-20">
                        <Image
                          src={trustPilotLogo}
                          alt="Trust Pilot logo"
                          className="h-full w-full object-contain"
                          width={80}
                          height={40}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};
Testimonial.displayName = 'Testimonial';
export default Testimonial;
