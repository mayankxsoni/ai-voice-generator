import { CheckIcon } from '@/icons';
import RevealAnimation from '../animation/RevealAnimation';

// manifesto  content
const Content = () => {
  const coreBeliefs = [
    { id: 'creativity', text: 'Creativity fosters growth and connection.' },
    { id: 'transparency', text: 'Transparency builds trust and accountability.' },
    { id: 'sustainability', text: 'Sustainability is essential for lasting impact.' },
    { id: 'collaboration', text: 'Collaboration leads to stronger communities.' },
  ];

  const aimsToAchieve = [
    { id: 'integrity', text: 'Deliver groundbreaking solutions with integrity.' },
    { id: 'empowerment', text: 'Empower individuals and teams to think boldly.' },
    { id: 'environmental', text: 'Champion environmental responsibility in all projects.' },
  ];

  return (
    <section className="pb-28">
      <div className="main-container">
        <div className="mx-auto max-w-[1100px] space-y-[42px]">
          <div className="space-y-2">
            <RevealAnimation delay={0.1}>
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">Built for the makers, dreamers, and doers</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="w-full max-w-[590px]">
                We believe great products start with bold ideas and the courage to bring them to life. NextSaaS exists
                to empower creators, startups, and teams to launch faster, scale smarter, and design experiences that
                matter.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-2">
            <RevealAnimation delay={0.3}>
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">Clarity over complexity</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="w-full max-w-[750px]">
                Software should simplify, not overwhelm. Every line of code, every pixel, and every interaction in
                NextSaaS is designed to make your workflow smoother and your decisions clearer.
              </p>
            </RevealAnimation>
          </div>
          <div className="space-y-6">
            <RevealAnimation delay={0.5}>
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">Our core beliefs</h2>
            </RevealAnimation>
            <ul className="space-y-3">
              {coreBeliefs.map((belief) => (
                <RevealAnimation key={belief.id} delay={0.6}>
                  <li className="flex items-center gap-2.5">
                    <span className="bg-secondary dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="dark:fill-secondary h-[7px] w-2.5 fill-white" />
                    </span>
                    <p>{belief.text}</p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <RevealAnimation delay={0.7}>
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">What we aim to achieve</h2>
            </RevealAnimation>
            <ul className="space-y-3">
              {aimsToAchieve.map((aim) => (
                <RevealAnimation delay={0.8} key={aim.id}>
                  <li className="flex items-center gap-2.5">
                    <span className="bg-secondary dark:bg-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                      <CheckIcon className="dark:fill-secondary h-[7px] w-2.5 fill-white" />
                    </span>
                    <p>{aim.text}</p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <RevealAnimation delay={0.9}>
            <div className="space-y-2">
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">Built for the future</h2>
              <p className="w-full max-w-[590px]">
                We design for what’s next. As technology evolves, NextSaaS evolves too ensuring you always stay ahead,
                never behind.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={1}>
            <div className="space-y-2">
              <h2 className="lg:text-heading-5 sm:text-heading-6 text-lg">Together, we create impact</h2>
              <p className="w-full max-w-[590px]">
                This isn’t just a theme it’s a movement. A toolkit for builders who believe that digital products can
                change how we work, connect, and grow.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
