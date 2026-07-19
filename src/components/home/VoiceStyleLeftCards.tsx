import RevealAnimation from '@/components/animation/RevealAnimation';
import eLearningImage from '@public/images/ns-img-542.png';
import customerSupportImage from '@public/images/ns-img-543.png';
import videoNarrationImage from '@public/images/ns-img-544.png';
import podcastingImage from '@public/images/ns-img-545.png';
import Image from 'next/image';

const VoiceStyleLeftCards = () => {
  return (
    <div
      className="flex flex-col items-center gap-y-6 overflow-hidden md:h-[327px] md:flex-row md:gap-x-3 md:gap-y-0"
      aria-label="E-learning use cases">
      <div className="flex w-full flex-col items-center justify-center gap-y-6 md:w-auto md:gap-y-3">
        {/* card one  */}
        <RevealAnimation delay={0.1} direction="left" offset={80}>
          <div className="group relative overflow-hidden">
            <figure className="w-full overflow-hidden rounded-3xl md:max-w-[218px] md:rounded-4xl">
              <Image
                src={eLearningImage}
                alt="E-learning use case example for AI voice generator"
                width={218}
                height={327}
                className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
                title="E-learning AI voice application"
              />
            </figure>
            <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[80%] -translate-x-1/2 -translate-y-12 rounded-full bg-white px-4 py-2 backdrop-blur-[15px] transition-all duration-600 ease-in-out md:w-[202px] lg:-translate-y-2 lg:opacity-0 lg:group-hover:-translate-y-12 lg:group-hover:opacity-100">
              E-learning
            </h3>
          </div>
        </RevealAnimation>
        {/* card two  */}
        <RevealAnimation delay={0.2} direction="left" offset={80}>
          <div className="group relative overflow-hidden">
            <figure className="w-full overflow-hidden rounded-3xl md:max-w-[218px] md:rounded-4xl">
              <Image
                src={customerSupportImage}
                alt="Customer Support use case example for AI voice generator"
                width={218}
                height={327}
                className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
                title="Customer Support AI voice application"
              />
            </figure>
            <h3 className="text-tagline-1 text-secondary absolute bottom-2 left-1/2 h-10 w-[80%] -translate-x-1/2 translate-y-0 rounded-full bg-white px-4 py-2 backdrop-blur-[15px] transition-all duration-600 ease-in-out md:w-[202px] lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              Customer Support
            </h3>
          </div>
        </RevealAnimation>
      </div>
      {/* card three  */}
      <RevealAnimation delay={0.3} direction="right" offset={80}>
        <div className="group relative overflow-hidden">
          <figure className="w-full overflow-hidden rounded-3xl md:max-w-[218px] md:rounded-4xl">
            <Image
              src={videoNarrationImage}
              alt="Video Narration use case example for AI voice generator"
              width={218}
              height={327}
              className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
              title="Video Narration AI voice application"
            />
          </figure>
          <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[80%] -translate-x-1/2 -translate-y-12 rounded-full bg-white px-4 py-2 backdrop-blur-[15px] transition-all duration-600 ease-in-out md:w-[202px] lg:translate-y-0 lg:opacity-0 lg:group-hover:-translate-y-12 lg:group-hover:opacity-100">
            Video Narration
          </h3>
        </div>
      </RevealAnimation>

      {/* card four  */}
      <RevealAnimation delay={0.5} direction="right" offset={80}>
        <div className="group relative block overflow-hidden xl:hidden" aria-label="Podcasting use case">
          <figure className="w-full overflow-hidden rounded-3xl md:max-w-[218px] md:rounded-4xl">
            <Image
              src={podcastingImage}
              alt="Podcasting use case example for AI voice generator"
              width={218}
              height={327}
              className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
              title="Podcasting AI voice application"
            />
          </figure>
          <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[80%] -translate-x-1/2 -translate-y-12 rounded-full bg-white px-4 py-2 backdrop-blur-[15px] transition-all duration-600 ease-in-out md:w-[202px] lg:translate-y-0 lg:opacity-0 lg:group-hover:-translate-y-12 lg:group-hover:opacity-100">
            Podcasting
          </h3>
        </div>
      </RevealAnimation>
    </div>
  );
};

export default VoiceStyleLeftCards;
