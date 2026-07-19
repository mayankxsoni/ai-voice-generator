import { ITeamMember } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinks from '../shared/SocialLinks';

const Teams = () => {
  const teams = getMarkDownData<ITeamMember & { [key: string]: unknown }>('src/data/team', false, 'name').slice(0, 9);
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory">Our team</span>
          </RevealAnimation>
          <div className="mx-auto max-w-[620px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Our innovative, dynamic and talented team</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a
                unique blend of expertise
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 max-sm:gap-y-8 sm:gap-5 md:gap-8">
          {teams.map((team, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={team.slug}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="group bg-ns-ivory relative z-10 overflow-hidden rounded-[20px] p-3">
                  <figure className="mx-auto overflow-hidden lg:max-w-[408px]">
                    <Link href={`/team/${team.slug}`}>
                      <Image
                        src={team.userImg}
                        alt={`${team.name} profile img`}
                        loading="lazy"
                        width={600}
                        height={600}
                        quality={100}
                        className="bg-background-1 h-full w-full rounded-2xl object-cover"
                      />
                    </Link>
                  </figure>
                  <div className="shadow-1 ease-team-ease-1 bg-ns-ivory absolute bottom-7 left-1/2 z-20 mx-auto w-[calc(100%-44px)] max-w-[384px] -translate-x-1/2 cursor-pointer space-y-3 rounded-xl p-6 transition-all duration-400 sm:bottom-5 lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <div className="text-center">
                      <h3 className="text-heading-5 text-secondary font-normal">
                        <Link href={`/team/${team.slug}`}> {team.name} </Link>
                      </h3>
                      <p className="text-tagline-2 text-secondary/40 font-normal">{team.role}</p>
                    </div>
                    <SocialLinks social={team.social} />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
