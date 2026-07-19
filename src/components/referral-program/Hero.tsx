//Referral Program Hero
import { StarIconV2 } from '@/icons';
import logo from '@public/images/shared/logo.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Hero = () => {
  return (
    <section className="pt-36 pb-10 md:pt-42 md:pb-24 xl:pt-[180px] xl:pb-28" aria-label="success stories hero section">
      <div className="main-container space-y-10 lg:space-y-16">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h1 className="lg:text-heading-2">
              Earn up to $49.75 in commission for every <br className="hidden lg:block" />
              referral you bring in.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="group mx-auto w-[90%] list-none pt-7 pb-6 md:inline-block md:w-auto lg:pt-14">
              <LinkButton
                href="/customer"
                btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 "
                className="mx-auto w-full md:mx-0 md:w-auto">
                Read customer stories
              </LinkButton>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary">Already an affiliate?</p>
          </RevealAnimation>
        </div>
        <div className="space-y-[14px] text-center">
          <RevealAnimation delay={0.4}>
            <p className="text-secondary mb-3 text-xl">It's easier to promote a tool that appeals</p>
          </RevealAnimation>
          <div className="flex items-start justify-center gap-4">
            <RevealAnimation delay={0.5}>
              <figure className="size-14">
                <Image src={logo} alt="NextSaaS" className="size-full object-cover" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} direction="left">
              <div>
                <div className="flex items-center gap-x-1">
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                  <StarIconV2 className="size-[12px] fill-[#FA9017]" />
                </div>
                <p className="text-tagline-2 text-secondary pt-1">Trusted by 1000+ customers</p>
                <p className="text-tagline-3 text-secondary/60">Turning ideas into scalable apps</p>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
