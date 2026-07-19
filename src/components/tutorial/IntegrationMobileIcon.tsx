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
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
const IntegrationMobileIcon = () => {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 px-6 sm:px-10 md:mt-20 lg:hidden">
      <RevealAnimation delay={0.4}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={googleMeet} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={gmail} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={marvel} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={confluence} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={framer} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={vl} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={edge} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={confluence} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={slack} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={snapchat} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={google} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={msYammer} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={microsoft} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <figure className="bg-ns-ivory flex size-14 items-center justify-center rounded-full sm:size-[75px]">
          <div className="size-10 rounded-full bg-white p-2 sm:size-[60px]">
            <Image src={figma} alt="integration icon" className="size-full" />
          </div>
        </figure>
      </RevealAnimation>
    </div>
  );
};

export default IntegrationMobileIcon;
