//press client

import RevealAnimation from '../animation/RevealAnimation';
import { AsteriskIcon, ConnectIcon, FastAidIcon, ProecoIcon, SpalatterIcon, SpeedIcon } from './ClientIcon';

const Client = () => {
  return (
    <section>
      <div className="main-container">
        <div className="grid grid-cols-12 items-stretch gap-2">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <ProecoIcon />
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <AsteriskIcon />
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <SpeedIcon />
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <FastAidIcon />
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <SpalatterIcon />
              </div>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-stroke-10 bg-ns-ivory flex h-full items-center justify-center rounded-[20px] border px-10 py-14 sm:px-14 sm:py-20 md:px-23 md:py-32">
                <ConnectIcon />
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Client.displayName = 'Client';
export default Client;
