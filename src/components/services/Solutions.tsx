import userActivity from '@public/images/ns-img-620.png';
import revenue from '@public/images/ns-img-621.png';
import netSales from '@public/images/ns-img-622.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const solutionsData = [
  { id: 1, text: 'On Demand Support' },
  { id: 2, text: 'Information Sharing' },
  { id: 3, text: 'Cloud Technology' },
];

const Solutions = () => {
  return (
    <section>
      <div className="bg-background-3 mx-5 max-w-[1400px] overflow-hidden rounded-[20px] px-5 py-24 sm:mx-auto md:px-12 xl:py-[200px]">
        <div className="grid grid-cols-12 items-end gap-y-24 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-5 sm:text-center lg:mt-[114px] lg:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-ivory">Strong solutions</span>
              </RevealAnimation>
              <div className="mx-auto max-w-[595px] space-y-3 lg:mx-0">
                <RevealAnimation delay={0.2}>
                  <h2>Ensure strong solutions are available at all times</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>
                    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                    Latin though it looks like nothing.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <div className="mt-8 mb-14">
              <ul className="flex flex-col items-start justify-start gap-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                {solutionsData.map((item, index) => (
                  <RevealAnimation key={item.id} delay={0.4 + index * 0.1}>
                    <li className="flex items-center gap-2">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={10} viewBox="0 0 15 10" fill="none">
                          <path
                            d="M13.1875 1.0625L5.3125 8.93715L1.375 5"
                            className="stroke-secondary"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-secondary font-medium">{item.text}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center lg:text-left">
                <LinkButton href="/login" btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-xl-v2">
                  Get started
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative z-20 mx-auto mt-40 w-full max-w-[595px] lg:mx-0 xl:mt-0">
              <RevealAnimation delay={0.3}>
                <figure className="relative z-10 w-full max-w-[340px] overflow-hidden rounded-[20px] xl:ml-9 xl:max-w-[408px]">
                  <Image src={revenue} className="size-full object-cover" alt="solutions" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} useSpring={true} duration={1.9} direction="right">
                <figure className="absolute -top-20 right-6 -z-10 w-full max-w-[190px] overflow-hidden rounded-2xl xl:-top-28 xl:right-0 xl:max-w-[227px]">
                  <Image src={netSales} className="size-full object-cover" alt="solutions" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.2} direction="left">
                <figure className="drop-shadow-11 absolute -top-44 left-0 -z-10 w-full max-w-[280px] overflow-hidden rounded-2xl xl:-top-52 xl:max-w-[350px]">
                  <Image src={userActivity} className="size-full object-cover" alt="solutions" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
