import support from '@public/images/ns-img-401.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const NeedHelp = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 lg:pb-[200px] xl:pt-[180px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-14 text-center">
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>Need help with NextSaaS?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Welcome to the NextSaaS Support Center! We&apos;re ready to assist you if you have an issue or a
                question.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.5}>
            <div>
              <LinkButton href="/contact-us" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                Get help
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6} instant>
          <div className="section-reveal">
            <figure className="overflow-hidden rounded-[20px]">
              <Image src={support} alt="support" />
            </figure>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default NeedHelp;
