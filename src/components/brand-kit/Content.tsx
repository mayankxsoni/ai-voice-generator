import nsImg376 from '@public/images/ns-img-376.svg';
import nsImg377 from '@public/images/ns-img-377.svg';
import nsImg378 from '@public/images/ns-img-378.svg';
import mainLogoDark from '@public/images/shared/main-logo-dark.svg';
import mainLogoLight from '@public/images/shared/main-logo-light.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface BrandCard {
  id: string;
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  delay: number;
}

const brandCards: BrandCard[] = [
  {
    id: '1',
    image: nsImg376,
    alt: 'NextSaaS.ai logo',
    title: 'NextSaaS.ai: redefining the future of art and technology',
    description:
      "ArtReview spoke with the founders of NextSaaS.ai about how their platform bridges creativity and AI. The discussion explored artists' rights, ethical AI model training, and the collaboration between technology and creative innovation.",
    delay: 0.4,
  },
  {
    id: '2',
    image: nsImg377,
    alt: 'Arts Club logo',
    title: 'Reimagining the AI rulebook for creators with NextSaaS.ai',
    description:
      'After a successful showcase at Shoreditch Arts Club last year, NextSaaS.ai returns for Digital Art Week 2025. This time, the team focuses on empowering creators with transparent, ethical tools that give full control over their AI-driven creative process.',
    delay: 0.5,
  },
  {
    id: '3',
    image: nsImg378,
    alt: 'Wavey logo',
    title: 'Top AI tools transforming the creative industry',
    description:
      'Recognized by TechRound as one of the most promising creative AI platforms, NextSaaS.ai enables illustrators and designers to use AI to scale their work, save time, and grow new revenue streams all while keeping complete ownership of their art.',
    delay: 0.6,
  },
];

const Content = () => {
  return (
    <section>
      <div className="main-container">
        <div className="mx-auto w-full max-w-[850px] space-y-17.5 pb-16 lg:pb-20 xl:pb-28">
          <RevealAnimation delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-heading-4 font-normal">Download NextSaaS.ai logo</h2>
              <div className="flex flex-col items-start gap-y-5 md:gap-y-8 lg:flex-row lg:gap-x-8">
                <div className="w-full space-y-4">
                  <figure className="bg-secondary flex w-full items-center justify-center overflow-hidden rounded-[20px] px-[92px] py-[127px]">
                    <Image src={mainLogoDark} alt="NextSaaS.ai logo" />
                  </figure>
                  <Link
                    download=""
                    href="/images/shared/main-logo-dark.svg"
                    className="text-tagline-1 text-secondary px-5 font-normal underline underline-offset-2">
                    Download (SVG + PNG)
                  </Link>
                </div>
                <div className="w-full space-y-4">
                  <figure className="bg-background-3 flex w-full items-center justify-center overflow-hidden rounded-[20px] px-[92px] py-[127px]">
                    <Image src={mainLogoLight} alt="NextSaaS.ai logo" />
                  </figure>
                  <Link
                    download=""
                    href="/images/shared/main-logo-light.svg"
                    className="text-tagline-1 text-secondary px-5 font-normal underline underline-offset-2">
                    Download (SVG + PNG)
                  </Link>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-heading-4 font-normal">NextSaaS.ai</h2>
              <div>
                <p className="text-secondary/80">
                  Low-quality generative imagery created from stolen or unlicensed artworks is rapidly flooding the
                  digital world, threatening the livelihoods and originality of countless creators. NextSaaS.ai stands
                  as a powerful alternative an ethical AI platform designed specifically for illustrators, designers,
                  and visual artists who want to embrace AI without compromising their integrity or ownership.
                </p>
                <p className="text-secondary/80">
                  Instead of taking from artists, NextSaaS.ai empowers them. The platform allows creators to train AI
                  models using their own artwork, ensuring that every generated image stays true to their unique style
                  and vision. Artists gain the freedom to experiment with new directions, automate repetitive design
                  tasks, and enhance their creative output without losing control of their intellectual property.
                </p>
                <p className="text-secondary/80">
                  With NextSaaS.ai, illustrators can streamline their workflow from sketching and ideation to final
                  production all while preserving the authenticity of their craft. The platform also opens doors to new
                  income opportunities, letting artists license their AI-trained models or sell exclusive creative
                  outputs to clients and brands worldwide.
                </p>
                <p className="text-secondary/80">
                  Built on transparency, ownership, and respect for creativity, NextSaaS.ai represents the future of
                  ethical AI in the creative industry. It's not about replacing artists it's about giving them smarter
                  tools to work faster, explore further, and earn more from what they already do best: create.
                </p>
                <p className="text-secondary/80">
                  Whether you're a professional illustrator, concept artist, or studio seeking efficiency with
                  integrity, NextSaaS.ai helps you turn your art into a sustainable, AI-powered creative ecosystem where
                  innovation and ethics go hand in hand.
                </p>
              </div>
            </div>
          </RevealAnimation>
          <div className="space-y-6">
            <RevealAnimation delay={0.3}>
              <h2 className="text-heading-4 font-normal">NextSaaS.ai</h2>
            </RevealAnimation>
            <div className="space-y-2">
              {brandCards.map((card) => (
                <RevealAnimation key={card.id} delay={card.delay}>
                  <div className="border-stroke-10 bg-background-3 flex flex-col items-center gap-x-6 rounded-[20px] border p-2 lg:flex-row">
                    <div className="flex w-full max-w-full items-center justify-center rounded-xl bg-white px-[124px] py-[100px] lg:max-w-[358px]">
                      <figure className="w-full max-w-[145px]">
                        <Image src={card.image} alt={card.alt} className="size-full object-cover" />
                      </figure>
                    </div>
                    <div className="space-y-2 py-5 pr-5 pl-5 lg:pl-0">
                      <h3 className="text-heading-5 font-normal">{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
Content.displayName = 'Content';
export default Content;
