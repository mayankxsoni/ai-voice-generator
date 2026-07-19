// press awards
import badge1 from '@public/images/badge/badge-1.svg';
import badge2 from '@public/images/badge/badge-2.svg';
import badge3 from '@public/images/badge/badge-3.svg';
import badge4 from '@public/images/badge/badge-4.svg';
import badge5 from '@public/images/badge/badge-5.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const badges = [
  { id: '1', image: badge1, alt: 'g2-award-1' },
  { id: '2', image: badge2, alt: 'g2-award-2' },
  { id: '3', image: badge3, alt: 'g2-award-3' },
  { id: '4', image: badge4, alt: 'g2-award-4' },
  { id: '5', image: badge5, alt: 'g2-award-5' },
];

const Awards = () => {
  return (
    <section className="pb-16 lg:pb-20 xl:pb-28">
      <div className="main-container">
        <div className="space-y-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <h2>
              G2 <span className="text-ns-linen">Awards</span>
            </h2>
          </RevealAnimation>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 md:flex-nowrap md:gap-y-0 xl:gap-x-9.5">
            {badges.map((badge, index) => (
              <RevealAnimation key={badge.id} delay={0.2 + index * 0.1}>
                <figure className="w-full max-w-[120px]">
                  <Image
                    className="h-full w-full object-cover"
                    src={badge.image}
                    alt={badge.alt}
                    width={120}
                    height={120}
                  />
                </figure>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Awards.displayName = 'Awards';
export default Awards;
