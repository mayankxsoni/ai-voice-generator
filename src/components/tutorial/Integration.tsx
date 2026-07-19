import confluence from '@public/images/icons/confluence.svg';
import edge from '@public/images/icons/edge.svg';
import figma from '@public/images/icons/figma.svg';
import framer from '@public/images/icons/framer.svg';
import gmail from '@public/images/icons/gmail.svg';
import googleMeet from '@public/images/icons/google-meet.svg';
import google from '@public/images/icons/google.svg';
import marvel from '@public/images/icons/marvel.svg';
import microsoft from '@public/images/icons/microsoft.svg';
import msYammer from '@public/images/icons/ms_yammer.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import vl from '@public/images/icons/vl.svg';
import gradientImg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';
import IntegrationMobileIcon from './IntegrationMobileIcon';

const Integration = () => {
  return (
    <section className="pb-[50px] sm:pb-[100px] md:pt-[100px] md:pb-[200px]">
      <div className="relative z-10 mx-5 overflow-hidden rounded-4xl bg-white py-[35px] sm:mx-10 md:py-[70px] lg:mx-auto lg:min-h-[740px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
        {/* gradient bg */}
        <RevealAnimation delay={0.6}>
          <figure className="pointer-events-none absolute bottom-[-52%] left-1/2 -z-10 mx-auto size-[600px] -translate-x-1/2 rotate-[-146deg] select-none xl:size-[650px]">
            <Image src={gradientImg} alt="gradient" className="size-full" />
          </figure>
        </RevealAnimation>

        <div className="space-y-8 text-center md:space-y-14">
          <div className="space-y-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory">Integration</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2>Templates & tools</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[490px] px-5 md:px-0">
                  Make setup simple with ready-to-use templates for various projects, ensuring you can hit the ground
                  running without any hassle. Whether you&apos;re launching a new website
                </p>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="integration-button text-center">
              <LinkButton
                href="/pricing"
                btnClass="btn-lg-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
                className="mx-auto inline-block">
                See it in action
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        {/* Left side icons - Desktop */}
        <div className="bottom-0 left-5 hidden lg:absolute lg:top-0 lg:bottom-auto lg:left-10 lg:block lg:w-1/2 lg:max-w-[400px] xl:left-20 2xl:left-0 2xl:max-w-[582px]">
          <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:ps-[70px]">
            <div className="flex gap-5 lg:ms-[60px] lg:gap-8 xl:ms-[100px] xl:gap-[75px]">
              <RevealAnimation delay={0.2}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={googleMeet} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-5 lg:gap-8 lg:self-start xl:gap-[75px]">
              <RevealAnimation delay={0.3}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={gmail} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={marvel} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-5 lg:ms-[60px] lg:gap-8 xl:ms-[100px] xl:gap-[75px]">
              <RevealAnimation delay={0.5}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={confluence} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={framer} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-5 lg:ms-[100px] lg:gap-8 xl:ms-[185px] xl:gap-[75px]">
              <RevealAnimation delay={0.7}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={vl} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={edge} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Right side icons - Desktop */}
        <div className="right-5 bottom-0 hidden lg:absolute lg:top-0 lg:right-10 lg:bottom-auto lg:block lg:w-1/2 lg:max-w-[400px] xl:right-28 2xl:right-0 2xl:max-w-[582px]">
          <div className="relative flex h-full flex-row flex-wrap gap-5 py-10 lg:flex-col lg:gap-[40px] lg:py-[70px] 2xl:pe-[70px]">
            <div className="flex lg:me-[60px] lg:self-end xl:me-[100px]">
              <RevealAnimation delay={0.2}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={confluence} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-8 lg:gap-[50px] lg:self-end xl:gap-[75px]">
              <RevealAnimation delay={0.3}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={slack} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={snapchat} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-8 lg:me-[60px] lg:gap-[50px] lg:self-end xl:me-[100px] xl:gap-[75px]">
              <RevealAnimation delay={0.5}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={google} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={msYammer} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
            <div className="flex gap-8 self-end lg:me-[100px] lg:gap-[50px] xl:me-[185px] xl:gap-[75px]">
              <RevealAnimation delay={0.7}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={microsoft} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="bg-ns-ivory flex size-[100px] items-center justify-center rounded-full 2xl:size-[120px]">
                  <div className="size-[80px] rounded-full bg-white p-6 2xl:size-[100px]">
                    <Image src={figma} alt="integration icon" className="size-full" />
                  </div>
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Mobile icons */}
        <IntegrationMobileIcon />
      </div>
    </section>
  );
};

export default Integration;
