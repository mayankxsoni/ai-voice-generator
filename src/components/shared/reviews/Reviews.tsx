'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import reviews from '@/data/json/testimonials/testimonials.json';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientOverlay from './GradientOverlay';

type Review = {
  id?: string | number;
  name: string;
  title?: string;
  quote: string;
  avatar?: string;
  position?: string;
};

const Reviews = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-ivory mb-5">Customer Success</span>
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <h2>Real people. Real results.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[472px] md:w-full">
                “Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership.”
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                speed={1500}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                navigation={false}
                pagination={false}
                scrollbar={false}
                className="swiper reviews-swiper">
                <div className="swiper-wrapper">
                  {reviews.map((review: Review, i: number) => {
                    return (
                      <SwiperSlide className="swiper-slide" key={review.id ?? `${review.name}-${i}`}>
                        <div className="bg-ns-ivory relative z-0 flex flex-col gap-y-8 overflow-hidden rounded-[20px] p-8">
                          {/* Gradient overlay for active slide */}
                          <GradientOverlay />

                          <figure className="relative inline-block size-14 overflow-hidden rounded-full bg-(image:--color-gradient-13)">
                            <Image
                              src={review.avatar ?? 'images-v2/avatar-1.png'}
                              alt={review.name ?? 'avatar'}
                              className="max-w-full"
                              width={56}
                              height={56}
                            />
                          </figure>

                          <p className="text-secondary/60 review-text line-clamp-2">{`"${review.quote}"`}</p>

                          <div>
                            <p className="text-secondary review-name text-lg leading-normal font-medium">
                              {review.name}
                            </p>
                            {review.position && (
                              <p className="text-secondary/60 text-tagline-2 review-title">{review.position}</p>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.5}>
          <div className="mt-10 text-center lg:mt-14">
            <LinkButton
              href="/testimonial"
              btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-md-v2 w-full ">
              View all reviews
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Reviews;
