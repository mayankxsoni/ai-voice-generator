import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialIcon, { Platform } from '../shared/SocialIcon';
import LinkButton from '../ui/button/Button';

const teamMembers = [
  {
    name: 'Arjun Mehta',
    designation: 'Founder & Creative Director',
    image: '/images/ns-avatar-2.png',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      dribble: 'https://dribbble.com',
    },
    tag: '🎬 Strategy',
  },
  {
    name: 'Priya Sharma',
    designation: 'Lead Motion Designer',
    image: '/images/ns-avatar-12.png',
    social: {
      linkedin: 'https://linkedin.com',
      dribble: 'https://dribbble.com',
    },
    tag: '✨ Animation',
  },
  {
    name: 'Rahul Nair',
    designation: 'Script Strategist',
    image: '/images/ns-avatar-3.png',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
    tag: '📝 Copywriting',
  },
  {
    name: 'Meera Kapoor',
    designation: 'Client Success Lead',
    image: '/images/ns-avatar-5.png',
    social: {
      linkedin: 'https://linkedin.com',
    },
    tag: '🤝 Client Success',
  },
];

const Team = () => {
  return (
    <section className="bg-background-3 py-[100px] lg:py-[150px] xl:py-[180px]">
      <div className="main-container">
        {/* ── HEADER ── */}
        <div className="mx-auto mb-[70px] max-w-[680px] text-center md:w-full">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory mb-5">Our Team</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
              Small team.{' '}
              <span className="text-primary-500">Serious output.</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/60 text-lg leading-relaxed">
              We&apos;re a tight-knit crew of strategists, writers, and motion designers obsessed 
              with making your product the obvious choice in your market.
            </p>
          </RevealAnimation>
        </div>

        {/* ── TEAM GRID ── */}
        <div className="mb-14 grid grid-cols-1 items-start justify-center gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <RevealAnimation key={member.name} delay={0.4 + index * 0.1}>
              <div className="group mx-auto w-full max-w-[298px] rounded-[24px] border border-[#eef0f3] bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">

                {/* Role tag */}
                <span className="inline-block mb-4 rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-600">
                  {member.tag}
                </span>

                {/* Avatar */}
                <figure className="mx-auto mb-5 flex size-[120px] items-center justify-center overflow-hidden rounded-full bg-[#f0f2f6] ring-4 ring-white shadow-md">
                  <Image
                    src={member.image}
                    className="size-full object-cover"
                    alt={`${member.name} — ${member.designation}`}
                    loading="lazy"
                    width={120}
                    height={120}
                    quality={90}
                  />
                </figure>

                {/* Info */}
                <div className="mb-5">
                  <h3 className="text-secondary text-lg font-bold group-hover:text-primary-500 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-secondary/50 mt-1 text-sm">{member.designation}</p>
                </div>

                {/* Social links */}
                <div className="flex items-center justify-center gap-2">
                  {Object.entries(member.social).map(([platform, href]) => (
                    <Link
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-secondary/10 hover:bg-ns-ivory hover:border-stroke-10 flex size-9 items-center justify-center rounded-full border p-2 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                      aria-label={`Follow ${member.name} on ${platform}`}
                    >
                      <SocialIcon platform={platform as Platform} className="group-hover:fill-secondary size-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* ── CTA ── */}
        <RevealAnimation delay={0.8}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-secondary/50 text-sm">We&apos;re a growing team — always looking for sharp creative minds.</p>
            <LinkButton href="/career" btnClass="btn-secondary-v2 group-hover/btn-v2:btn-primary-v2 btn-md-v2">
              View Open Roles
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Team.displayName = 'Team';
export default Team;
