import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Experience = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <div className="space-y-3">
            <RevealAnimation delay={0.1}>
              <h2>Over a decade of experience in this field.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="mx-auto max-w-[744px]">
                With more than ten years of hands-on experience, we’ve built a strong foundation of knowledge, skill,
                and trust in our industry. Over the years, we’ve navigated evolving trends, embraced new technologies.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="bg-ns-ivory/80 flex flex-col rounded-[20px] py-6 md:flex-row">
            <div className="max-md:border-b-stroke-10 md:border-r-stroke-10 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="mx-auto flex h-[52px] w-20 items-center justify-center rounded-full bg-white px-7 py-3.5">
                <Image src={checkCircle} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-heading-6 text-secondary flex items-center justify-center gap-0.5 font-normal">
                  <NumberAnimation number={80} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    80
                  </NumberAnimation>
                  % Project completed
                </h3>
              </div>
            </div>
            <div className="max-md:border-b-stroke-10 md:border-r-stroke-10 flex-1 space-y-6 py-6 max-md:border-b md:border-r">
              <figure className="mx-auto flex h-[52px] w-20 items-center justify-center rounded-full bg-white px-7 py-3.5">
                <Image src={users} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-heading-6 text-secondary flex items-center justify-center gap-1 font-normal">
                  <NumberAnimation number={25} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    25
                  </NumberAnimation>
                  Team members
                </h3>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <figure className="mx-auto flex h-[52px] w-20 items-center justify-center rounded-full bg-white px-7 py-3.5">
                <Image src={thumbsUp} alt="Satisfied clients" className="size-6" />
              </figure>
              <div className="text-center">
                <h3 className="text-heading-6 text-secondary flex items-center justify-center gap-1 font-normal">
                  <NumberAnimation number={250} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    250
                  </NumberAnimation>
                  Satisfied clients
                </h3>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Experience;
