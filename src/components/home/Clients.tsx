import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface ClientLogo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const clientLogos: ClientLogo[] = [
  { id: 'scapic', src: '/images/icons/scapic-metal.svg', alt: 'Scapic company logo', width: 135, height: 45 },
  { id: 'asana', src: '/images/icons/asana-metal.svg', alt: 'Asana company logo', width: 128, height: 45 },
  { id: 'discord', src: '/images/icons/discord-metal.svg', alt: 'Discord company logo', width: 160, height: 45 },
  { id: 'dropbox', src: '/images/icons/dropbox-metal.svg', alt: 'Dropbox company logo', width: 164, height: 45 },
  { id: 'hotjar', src: '/images/icons/hotjar-metal.svg', alt: 'Hotjar company logo', width: 124, height: 45 },
  { id: 'lattice', src: '/images/icons/lattice-metal.svg', alt: 'Lattice company logo', width: 148, height: 45 },
  { id: 'notion', src: '/images/icons/notion-metal.svg', alt: 'Notion company logo', width: 128, height: 45 },
  { id: 'outreach', src: '/images/icons/outreach-metal.svg', alt: 'Outreach company logo', width: 168, height: 45 },
  { id: 'spotify', src: '/images/icons/spotify-metal.svg', alt: 'Spotify company logo', width: 136, height: 45 },
  {
    id: 'squarespace',
    src: '/images/icons/squarespace-metal.svg',
    alt: 'Squarespace company logo',
    width: 250,
    height: 45,
  },
  { id: 'stripe', src: '/images/icons/stripe-metal.svg', alt: 'Stripe company logo', width: 123, height: 45 },
];

const Clients = () => {
  return (
    <section
      className="py-16 lg:py-28 xl:py-39"
      aria-labelledby="clients-heading"
      aria-label="Trusted clients and partners">
      <div className="main-container">
        <div className="relative overflow-hidden text-center">
          <RevealAnimation delay={0.1}>
            <h2 id="clients-heading" className="mx-auto mb-14 max-w-[800px] text-center font-normal">
              Trusted by
              <span className="text-primary-500"> 50+</span> fast-growing SaaS teams worldwide
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div
              className="logos-marquee-container mt-14 overflow-hidden"
              aria-label="Logos of trusted companies and brands using AI Voice Generator">
              <Marquee autoFill speed={50} gradient={false}>
                <div className="flex items-center justify-center gap-x-14">
                  {clientLogos.map((logo) => (
                    <figure
                      key={logo.id}
                      className="h-[45px] shrink-0 first:ml-14"
                      style={{ width: `${logo.width}px` }}
                      aria-label={`${logo.alt}`}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-auto"
                      />
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>

          {/* left gradient */}
          <div
            className="absolute bottom-[0%] left-0 h-[80px] w-[80px] sm:h-[130px] md:w-[150px] xl:left-[-20%] 2xl:w-[455px]"
            style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)' }}
            aria-hidden="true"
            aria-label="Decorative left gradient fade"
          />

          {/* right gradient */}
          <div
            className="absolute right-0 bottom-[0%] h-[80px] w-[80px] rotate-180 sm:h-[130px] md:w-[150px] xl:right-[-20%] 2xl:w-[455px]"
            style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)' }}
            aria-hidden="true"
            aria-label="Decorative right gradient fade"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
