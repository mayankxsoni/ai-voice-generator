import { ArrowIcon } from '@/icons';
import figmaLogo from '@public/images/icons/figma.svg';
import shopifyLogo from '@public/images/icons/shopify.svg';
import slackLogo from '@public/images/icons/slack.svg';
import snapchatLogo from '@public/images/icons/snapchat.svg';
import tiktokLogo from '@public/images/icons/tiktok.svg';
import zapierLogo from '@public/images/icons/zapier.svg';
import integrationBg from '@public/images/ns-img-24.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

interface Integration {
  id: string;
  logo: string;
  title: string;
  description: string;
  href: string;
}

const integrations: Integration[] = [
  {
    id: 'zapier',
    logo: zapierLogo,
    title: 'Zapier',
    description: 'Communication',
    href: '/pricing',
  },
  {
    id: 'snapchat',
    logo: snapchatLogo,
    title: 'Snapchat',
    description: 'Messaging App',
    href: '/pricing',
  },
  {
    id: 'shopify',
    logo: shopifyLogo,
    title: 'Shopify',
    description: 'e-commerce',
    href: '/pricing',
  },
  {
    id: 'figma',
    logo: figmaLogo,
    title: 'Figma',
    description: 'Design Tool',
    href: '/integration',
  },
  {
    id: 'slack',
    logo: slackLogo,
    title: 'Slack',
    description: 'Communication',
    href: '/pricing',
  },
  {
    id: 'tiktok',
    logo: tiktokLogo,
    title: 'Tiktok',
    description: 'Video Tool',
    href: '/pricing',
  },
];

const Integration = () => {
  return (
    <section className="pt-[120px] pb-24 md:pt-[160px] md:pb-32 lg:pb-40 xl:pt-[180px] xl:pb-48 2xl:pb-[200px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary relative z-0 mx-auto w-[95%] overflow-hidden rounded-4xl px-4 py-10 md:px-10 md:py-16 2xl:max-w-[1440px] 2xl:px-[100px] 2xl:py-[100px]">
          <div className="absolute inset-0 -z-10 h-full w-full">
            <Image src={integrationBg} alt=" about bg" className="h-full w-full object-cover" />
          </div>
          <div className="mx-auto max-w-[850px]">
            <div className="mb-14 flex flex-col items-center gap-y-3 text-center md:mb-[70px]">
              <RevealAnimation delay={0.1}>
                <span className="badge bg-ns-linen mb-5 text-white">Integration</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-accent mx-auto max-w-[750px]">Link up with your favorite tools.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-accent/60 max-w-[510px]">
                  We assist startups in standing out with exceptional messaging that effectively engages their audience.
                </p>
              </RevealAnimation>
            </div>
            <div className="integration-container mb-10 grid grid-cols-1 gap-8 sm:gap-4 md:mb-14 md:grid-cols-2 md:gap-8">
              {integrations.map((integration, index) => (
                <RevealAnimation key={integration.title} delay={0.1 * index + 0.1} instant={index <= 2}>
                  <div className="group" key={integration.id}>
                    <Link
                      href={integration.href}
                      className="group-hover:shadow-1 flex justify-between rounded-[20px] bg-white/14 p-4 transition-all duration-500 ease-in-out group-hover:scale-[102%] md:p-4 lg:p-8">
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 grow-0 rounded-lg bg-white transition-transform duration-500 group-hover:scale-[103%] group-hover:rotate-12">
                          <Image src={integration.logo} alt={`${integration.title} Logo`} width={56} height={56} />
                        </div>
                        <div className="transform transition-transform duration-500 group-hover:translate-x-1.5">
                          <h5 className="text-accent">{integration.title}</h5>
                          <p className="text-accent/60">{integration.description}</p>
                        </div>
                      </div>
                      <div className="bg-ns-linen group-hover:bg-ns-linen group-hover:shadow-1 relative flex size-14 items-center justify-center overflow-hidden rounded-full transition-all duration-600 ease-in-out">
                        <ArrowIcon className="absolute size-6 -translate-x-11 stroke-white opacity-0 transition-all duration-600 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
                        <ArrowIcon className="absolute size-6 translate-x-0 stroke-white opacity-100 transition-all duration-600 ease-in-out group-hover:translate-x-10 group-hover:opacity-0" />
                      </div>
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.7}>
              <div className="text-center">
                <LinkButton
                  href="/services"
                  btnClass="btn-v2-white group-hover/btn-v2:btn-primary-v2 btn-xl-v2 border-0">
                  See in Action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Integration.displayName = 'Integration';
export default Integration;
