import { KeyTakeWayItem } from '@/interface';
import { Fragment } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

interface KeyTakeWaysProps {
  keyTakeWays: KeyTakeWayItem[];
  keyTakeWaysDescription: string;
  paperLink: string;
}
const KeyTakeWays = ({ keyTakeWays, keyTakeWaysDescription, paperLink }: KeyTakeWaysProps) => {
  return (
    <RevealAnimation delay={0.5}>
      <section className="py-16 xl:py-19">
        <div className="main-container">
          <h2 className="text-heading-5 font-normal">Key takeaways</h2>
          <ul className="py-6">
            {keyTakeWays.map((item, index) => (
              <Fragment key={item.id}>
                <li className="flex items-center gap-2 p-3">
                  <div className="bg-ns-ivory flex size-11 shrink-0 items-center justify-center rounded-full p-1">
                    <div className="text-tagline-1 text-secondary flex size-9 shrink-0 items-center justify-center rounded-full bg-white font-medium shadow-[0_1px_2px_0_rgba(0,0,0,0.15)]">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-secondary/80">{item.text}</p>
                </li>
                {index < keyTakeWays.length - 1 && (
                  <li>
                    <div className="bg-stroke-10 h-px w-full" />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
          <p className="w-full max-w-3xl">{keyTakeWaysDescription}</p>
          <div className="mt-14">
            <RevealAnimation delay={0.4} direction="left" offset={50} instant>
              <div className="max-w-max">
                <LinkButton href={paperLink} btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-lg-v2 ">
                  <span>View whitepaper</span>
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

KeyTakeWays.displayName = 'KeyTakeWays';
export default KeyTakeWays;
