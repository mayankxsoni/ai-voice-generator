import gradientImg from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Services = () => {
  return (
    <section className="py-[80px]">
      <div className="main-container">
        <div className="mb-[60px] space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory text-primary-600 border border-primary-200 px-4 py-1.5 rounded-full inline-block font-semibold text-xs">
              Client Support & Assistance
            </span>
          </RevealAnimation>
          <div className="space-y-3 max-w-[800px] mx-auto">
            <RevealAnimation delay={0.2}>
              <h2 className="text-secondary text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Dedicated support for every stage of your video production
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 text-base max-w-[580px] mx-auto">
                Whether you need help preparing UI assets, reviewing script drafts, or embedding videos on Webflow and Framer—our team is here for you.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          
          {/* Card 1 */}
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
              <div className="border-stroke-10/60 relative z-10 space-y-6 overflow-hidden rounded-[24px] border bg-white px-6 py-8 shadow-sm flex flex-col justify-between h-full">
                <figure className="pointer-events-none absolute -top-[66%] left-[-85%] -z-10 size-[410px] rotate-304 select-none opacity-30">
                  <Image src={gradientImg} className="size-full object-cover" alt="Creative Strategy Call" />
                </figure>
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-xl border border-primary-100">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Creative Strategy Consultation</h3>
                  <p className="text-xs text-secondary/60 leading-relaxed">
                    Have questions before kicking off? Book a 1-on-1 session with our creative director to discuss script hooks and visual style.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <LinkButton href="/contact-us" btnClass="btn-md-v2 btn-primary-v2">
                    Book Strategy Call →
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Card 2 */}
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
              <div className="border-stroke-10/60 relative z-10 space-y-6 overflow-hidden rounded-[24px] border bg-white px-6 py-8 shadow-sm flex flex-col justify-between h-full">
                <figure className="pointer-events-none absolute -top-[74%] right-[-63%] -z-10 size-[410px] rotate-343 select-none opacity-30">
                  <Image src={gradientImg} className="size-full object-cover" alt="Active Project Support" />
                </figure>
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-xl border border-primary-100">
                    📂
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Active Project & Revisions</h3>
                  <p className="text-xs text-secondary/60 leading-relaxed">
                    Already a client? Submit storyboard feedback, request voiceover adjustments, or upload new UI design assets directly.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <LinkButton href="/contact-us" btnClass="btn-md-v2 btn-primary-v2">
                    Contact Producer →
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>

          {/* Card 3 */}
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
              <div className="border-stroke-10/60 relative z-10 space-y-6 overflow-hidden rounded-[24px] border bg-white px-6 py-8 shadow-sm flex flex-col justify-between h-full">
                <figure className="pointer-events-none absolute top-[-81%] right-[-78%] -z-10 size-[410px] rotate-62 select-none opacity-30">
                  <Image src={gradientImg} className="size-full object-cover" alt="Technical Embed Support" />
                </figure>
                <div className="space-y-3 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 font-bold text-xl border border-primary-100">
                    ⚙️
                  </div>
                  <h3 className="text-xl font-bold text-secondary">Web Embed & Tech Assistance</h3>
                  <p className="text-xs text-secondary/60 leading-relaxed">
                    Need help embedding video players or optimizing video load speed on Webflow, Framer, or Next.js? Our dev team is on standby.
                  </p>
                </div>
                <div className="text-center pt-4">
                  <LinkButton href="/documentation" btnClass="btn-md-v2 btn-primary-v2">
                    View Embed Docs →
                  </LinkButton>
                </div>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default Services;
