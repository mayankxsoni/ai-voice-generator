import { cn } from '@/utils/cn';
import AsanaLogo from '@public/images/icons/asana-metal.svg';
import DiscordLogo from '@public/images/icons/discord-metal.svg';
import DropboxLogo from '@public/images/icons/dropbox-metal.svg';
import HotjarLogo from '@public/images/icons/hotjar-metal.svg';
import LatticeLogo from '@public/images/icons/lattice-metal.svg';
import NotionLogo from '@public/images/icons/notion-metal.svg';
import OutreachLogo from '@public/images/icons/outreach-metal.svg';
import ScapicLogo from '@public/images/icons/scapic-metal.svg';
import SpotifyLogo from '@public/images/icons/spotify-metal.svg';
import SquarespaceLogo from '@public/images/icons/squarespace-metal.svg';
import StripeLogo from '@public/images/icons/stripe-metal.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: string;
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  isFirst?: boolean;
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    src: ScapicLogo,
    alt: 'Scapic company logo',
    width: 135,
    height: 45,
    isFirst: true,
  },
  {
    id: '2',
    src: AsanaLogo,
    alt: 'Asana company logo',
    width: 128,
    height: 45,
  },
  {
    id: '3',
    src: DiscordLogo,
    alt: 'Discord company logo',
    width: 160,
    height: 45,
  },
  {
    id: '4',
    src: DropboxLogo,
    alt: 'Dropbox company logo',
    width: 164,
    height: 45,
  },
  {
    id: '5',
    src: HotjarLogo,
    alt: 'Hotjar company logo',
    width: 124,
    height: 45,
  },
  {
    id: '6',
    src: LatticeLogo,
    alt: 'Lattice company logo',
    width: 148,
    height: 45,
  },
  {
    id: '7',
    src: NotionLogo,
    alt: 'Notion company logo',
    width: 128,
    height: 45,
  },
  {
    id: '8',
    src: OutreachLogo,
    alt: 'Outreach company logo',
    width: 168,
    height: 45,
  },
  {
    id: '9',
    src: SpotifyLogo,
    alt: 'Spotify company logo',
    width: 136,
    height: 45,
  },
  {
    id: '10',
    src: SquarespaceLogo,
    alt: 'Squarespace company logo',
    width: 250,
    height: 45,
  },
  {
    id: '11',
    src: StripeLogo,
    alt: 'Stripe company logo',
    width: 123,
    height: 45,
  },
];

const Clients = () => {
  return (
    <section
      className="py-12 md:py-18 lg:py-22 xl:py-28"
      aria-labelledby="clients-heading"
      itemScope={true}
      itemType="https://schema.org/Organization">
      <div className="main-container relative">
        <RevealAnimation delay={0.1}>
          <h2
            id="clients-heading"
            className="mx-auto max-w-[800px] text-center 2xl:mx-0 2xl:text-left"
            itemProp="description">
            NextSaaS resumes have helped users land jobs at top companies.
          </h2>
        </RevealAnimation>
        <RevealAnimation delay={0.2} instant>
          <div
            className="mt-14 overflow-hidden"
            aria-label="Logos of companies where NextSaaS users have found employment">
            <Marquee speed={40} autoFill>
              <div className="flex items-center justify-center gap-x-14">
                {clientLogos.map((logo) => (
                  <figure
                    key={logo.id}
                    className={cn('shrink-0', {
                      'ml-14': logo.isFirst,
                    })}
                    style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                    itemProp="logo">
                    <Image src={logo.src} alt={logo.alt} className="dark:invert" loading="lazy" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>
        {/* left gradient */}
        <div
          className="dark:from-secondary absolute bottom-[0%] left-0 h-[80px] w-[80px] bg-linear-to-r from-white to-transparent md:w-[150px] 2xl:w-[455px]"
          aria-hidden="true"
        />
        {/* right gradient */}
        <div
          className="dark:to-secondary absolute right-0 bottom-[0%] h-[80px] w-[80px] rotate-180 bg-linear-to-l from-transparent to-white md:w-[150px] 2xl:w-[455px]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

Clients.displayName = 'Clients';
export default Clients;
