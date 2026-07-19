import tutorial1 from '@public/images/ns-img-386.png';
import tutorial2 from '@public/images/ns-img-387.png';
import tutorial3 from '@public/images/ns-img-388.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Tutorials = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 pt-[100px] pb-[100px] xl:pt-[200px] dark:pt-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <h2>Video tutorials</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[620px]">
              Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
              unique blend of expertise
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-8 md:gap-8">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="group relative h-full overflow-hidden rounded-[20px] md:max-h-[408px]">
                <figure className="h-full w-full">
                  <Image
                    src={tutorial1}
                    alt="Intro to NextSaaS video tutorial thumbnail"
                    className="h-full w-full object-cover"
                  />
                </figure>
                <div className="bg-secondary/10 absolute right-0 bottom-2.5 left-0 mx-auto w-[95%] rounded-xl p-6 text-center backdrop-blur-[10px] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-full md:opacity-0">
                  <h3 className="text-heading-5 text-accent">Intro to NextSaaS</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="group relative h-full overflow-hidden rounded-[20px] md:max-h-[408px]">
                <figure>
                  <Image src={tutorial2} alt="Intro to React video tutorial thumbnail" />
                </figure>
                <div className="bg-secondary/10 absolute right-0 bottom-2.5 left-0 mx-auto w-[95%] translate-y-0 rounded-xl p-6 text-center opacity-100 backdrop-blur-[10px] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-full md:opacity-0">
                  <h3 className="text-heading-5 text-accent">Intro to React</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="group relative h-full overflow-hidden rounded-[20px] md:max-h-[408px]">
                <figure>
                  <Image src={tutorial3} alt="Intro to JavaScript video tutorial thumbnail" />
                </figure>
                <div className="bg-secondary/10 absolute right-0 bottom-2.5 left-0 mx-auto w-[95%] translate-y-0 rounded-xl p-6 text-center opacity-100 backdrop-blur-[10px] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-full md:opacity-0">
                  <h3 className="text-heading-5 text-accent">Intro to JavaScript</h3>
                  <p className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10 5.625V10H14.375"
                        stroke="#FCFCFC"
                        strokeOpacity="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-accent/60 text-tagline-3">25 Hours</span>
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
