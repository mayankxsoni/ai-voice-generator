import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import gradientImg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const Client = () => {
  return (
    <section className="mx-5 xl:mx-0">
      <RevealAnimation delay={0.2}>
        <div className="main-container relative z-0 overflow-hidden rounded-4xl bg-white py-[100px] text-center">
          {/* left gradient */}
          <figure
            className="pointer-events-none absolute top-[-64%] left-[-65%] -z-10 size-[500px] rotate-267 select-none md:left-[-34%] lg:top-[-60%] lg:left-[-23%] xl:-left-[19%]"
            aria-hidden="true">
            <Image src={gradientImg} alt="voice cloning" className="size-full object-cover" />
          </figure>

          {/* Customer Testimonial */}
          <article className="mb-6 space-y-4 text-center">
            {/* Customer Avatars */}
            <div className="flex cursor-pointer justify-center -space-x-2.5" aria-label="Customer avatars">
              <Image
                className="ring-stroke-10 bg-ns-ivory inline-block size-[38px] rounded-full ring-2"
                src={avatar1Img}
                alt="Customer avatar 1"
                width={38}
                height={38}
              />
              <Image
                className="ring-stroke-10 bg-ns-ivory inline-block size-[38px] rounded-full ring-2"
                src={avatar2Img}
                alt="Customer avatar 2"
                width={38}
                height={38}
              />
              <Image
                className="ring-stroke-10 bg-ns-ivory relative z-0 inline-block size-[38px] rounded-full ring-2"
                src={avatar3Img}
                alt="Customer avatar 3"
                width={38}
                height={38}
              />
              <div className="ring-stroke-10 bg-ns-ivory text-secondary/80 text-tagline-3 relative z-10 inline-flex size-[38px] items-center justify-center rounded-full font-medium ring-2">
                99+
              </div>
            </div>

            {/* Trust Metrics */}
            <div>
              <p className="text-tagline-2 text-secondary font-medium">Tushed by 20k+</p>
              <p className="text-tagline-3">Customers Across the Globe</p>
            </div>
          </article>

          {/* Client Logos */}
          <div className="relative mx-auto max-w-[1130px]">
            {/* logo left gradient */}
            <div className="absolute top-5 left-0 z-40 h-full w-[7%] bg-linear-to-r from-white to-transparent" />

            {/* logo right gradient */}
            <div className="absolute top-5 right-0 z-40 h-full w-[7%] bg-linear-to-l from-white to-transparent" />

            <div className="logos-marquee-container">
              <Marquee autoFill speed={60}>
                <div className="border-stroke-10 flex items-center justify-center gap-8 border-t pt-10">
                  <figure className="ml-8 min-w-[140px] md:min-w-[201px]">
                    <Image
                      src={clientLogo6}
                      alt="Client company logo 1"
                      className="inline-block lg:w-auto"
                      width={120}
                      height={40}
                    />
                  </figure>
                  <figure className="min-w-[140px] md:min-w-[201px]">
                    <Image
                      src={clientLogo7}
                      alt="Client company logo 2"
                      className="inline-block lg:w-auto"
                      width={120}
                      height={40}
                    />
                  </figure>
                  <figure className="min-w-[140px] md:min-w-[201px]">
                    <Image
                      src={clientLogo8}
                      alt="Client company logo 3"
                      className="inline-block lg:w-auto"
                      width={120}
                      height={40}
                    />
                  </figure>
                  <figure className="min-w-[140px] md:min-w-[201px]">
                    <Image
                      src={clientLogo9}
                      alt="Client company logo 4"
                      className="inline-block lg:w-auto"
                      width={120}
                      height={40}
                    />
                  </figure>
                  <figure className="min-w-[140px] md:min-w-[201px]">
                    <Image
                      src={clientLogo10}
                      alt="Client company logo 5"
                      className="inline-block lg:w-auto"
                      width={120}
                      height={40}
                    />
                  </figure>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Client;
