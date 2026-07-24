import Image from 'next/image';
import avatar1Img from '@public/images/ns-avatar-1.png';
import avatar2Img from '@public/images/ns-avatar-2.png';
import avatar3Img from '@public/images/ns-avatar-3.png';
import RevealAnimation from '../animation/RevealAnimation';

const statItems = [
  { icon: '🎬', label: 'Videos Scripted', value: '200+' },
  { icon: '🚀', label: 'Clients Launched', value: '50+' },
  { icon: '⚡', label: 'Avg. Delivery Time', value: '14 days' },
  { icon: '♻️', label: 'Repeat Clients', value: '80%' },
];

const OurMission = () => {
  return (
    <section className="relative pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap lg:gap-12 xl:gap-16">

          {/* ── LEFT: Text ── */}
          <div className="w-full lg:w-1/2">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-ivory mb-5">Our Mission</span>
            </RevealAnimation>
            <div className="space-y-4 md:max-w-[540px]">
              <RevealAnimation delay={0.2}>
                <h2 className="text-secondary text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
                  Craft videos that close the gap between{' '}
                  <span className="text-primary-500">value and understanding.</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/60 text-lg leading-relaxed">
                  We partner with SaaS founders to translate complex, powerful products into 
                  60–120 second stories that resonate, convert, and create belief. No fluff. 
                  No templates. Just precision storytelling that drives signups.
                </p>
              </RevealAnimation>

              {/* ── VALUES LIST ── */}
              <RevealAnimation delay={0.4}>
                <ul className="mt-6 space-y-3">
                  {[
                    'Conversion-first scripts, not just pretty animation',
                    'Deep product discovery before a single frame is drawn',
                    'Brand-aligned visuals that feel native to your design',
                    'Structured revision rounds — always on schedule',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-secondary/70 text-[15px] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>
          </div>

          {/* ── RIGHT: Stats Card ── */}
          <RevealAnimation delay={0.4}>
            <div className="bg-background-2 w-full max-w-[580px] rounded-[24px] p-6 md:p-8 xl:p-10 lg:w-1/2">

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {statItems.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-5 shadow-sm hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <span className="text-2xl">{stat.icon}</span>
                    <p className="mt-2 text-2xl font-extrabold text-secondary">{stat.value}</p>
                    <p className="text-secondary/50 text-xs font-medium mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Social proof bar */}
              <div className="bg-secondary rounded-2xl p-5 flex items-center gap-4">
                <div className="flex -space-x-3.5 shrink-0">
                  <Image
                    className="ring-secondary inline-block size-12 rounded-full ring-4 object-cover"
                    src={avatar1Img}
                    alt="First Pixel team member"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="ring-secondary inline-block size-12 rounded-full ring-4 object-cover"
                    src={avatar2Img}
                    alt="First Pixel team member"
                    width={48}
                    height={48}
                  />
                  <Image
                    className="ring-secondary inline-block size-12 rounded-full ring-4 object-cover"
                    src={avatar3Img}
                    alt="First Pixel team member"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Small team. Big output.</p>
                  <p className="text-white/50 text-xs mt-0.5">Dedicated to your launch, start to finish.</p>
                </div>
              </div>

            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
