import { cn } from '@/utils/cn';
import clientLogo1 from '@public/images/icons/client-logo-1.svg';
import clientLogo2 from '@public/images/icons/client-logo-2.svg';
import clientLogo3 from '@public/images/icons/client-logo-3.svg';
import clientLogo4 from '@public/images/icons/client-logo-4.svg';
import clientLogo5 from '@public/images/icons/client-logo-5.svg';
import Image, { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ClientLogo {
  id: string;
  src: StaticImageData | string;
}

const clientLogos: ClientLogo[] = [
  {
    id: '1',
    src: clientLogo1,
  },
  {
    id: '2',
    src: clientLogo2,
  },
  {
    id: '3',
    src: clientLogo3,
  },
  {
    id: '4',
    src: clientLogo4,
  },
  {
    id: '5',
    src: clientLogo5,
  },
];

const Clients = () => {
  return (
    <section className="bg-white py-16 lg:py-20 xl:py-28">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-3">Transforming business success with NextSaaS</h2>
          </RevealAnimation>
        </div>
      </div>
      <div className="py-14">
        <RevealAnimation delay={0.2}>
          <Marquee autoFill speed={30}>
            <div className="flex items-center justify-center gap-8">
              {clientLogos.map((logo, index) => (
                <figure key={logo.id} className={cn('w-28 md:w-36', index === 0 && 'ml-8')}>
                  <Image src={logo.src} alt="Client logo" className="inline-block lg:w-auto" />
                </figure>
              ))}
            </div>
          </Marquee>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Clients;
