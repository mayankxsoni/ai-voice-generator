//Customer CTA Section
import { CheckIcon } from '@/icons';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Certification {
  id: string;
  text: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    text: 'SOC2 Type 2 Certified',
  },
  {
    id: '2',
    text: 'HIPAA Compliant',
  },
];

const CTA = () => {
  return (
    <section className="py-16 lg:py-22 xl:py-28">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center gap-y-5 text-center md:flex-row md:gap-x-14.5">
          <RevealAnimation delay={0.1}>
            <p className="text-secondary text-tagline-1">
              <span className="pr-5.5">We protect your data.</span>
              <Link href="/security" className="text-ns-linen underline">
                More on Security
              </Link>
            </p>
          </RevealAnimation>
          <ul className="flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:justify-start sm:gap-x-6 sm:gap-y-0">
            {certifications.map((cert, index) => {
              const delay = 0.2 + index * 0.1;
              return (
                <RevealAnimation key={cert.id} delay={delay}>
                  <li className="flex items-center gap-2">
                    <span className="bg-secondary flex size-5 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="fill-white" />
                    </span>
                    <span className="text-secondary text-tagline-3 sm:text-tagline-2 font-normal">{cert.text}</span>
                  </li>
                </RevealAnimation>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
