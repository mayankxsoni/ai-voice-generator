import { IContactInformation, ISocialLinks, ITeamMember } from '@/interface';
import gradient06 from '@public/images/ns-img-498.png';
import gradient from '@public/images/ns-img-516.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import ContactInformation from './ContactInformation';
const TeamMemberImg = ({ data }: { data: Partial<ITeamMember> }) => {
  const { contactInformation, social } = data;

  return (
    <RevealAnimation delay={0.2}>
      <div className="bg-secondary border-background-4 dark:border-background-8 dark:bg-background-8 relative col-span-12 space-y-2.5 overflow-hidden rounded-[20px] border backdrop-blur-[12.5px] md:col-span-5">
        <div className="pointer-events-none absolute -right-[125%] -bottom-[25%] -z-100 size-[860px] -rotate-75 sm:-right-[85%] sm:-bottom-[15%] md:-right-[135%] md:-bottom-[25%] xl:-right-[105%] xl:-bottom-[15%]">
          <Image src={gradient} alt="gradient" />
        </div>
        <figure className="bg-background-1 relative z-1 -ml-px flex justify-center overflow-hidden rounded-b-[20px]">
          {/* gradient bg  */}
          <RevealAnimation delay={0.3} duration={0.8} direction="left" offset={100}>
            <figure className="pointer-events-none absolute top-[-35%] left-[-31%] -z-1 w-[700px] select-none md:w-[550px] lg:top-[-32%] lg:w-[750px] xl:w-[940px]">
              <Image src={gradient06} alt="bg image" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <Image src={data.userImg as string} alt="team-member-single img" width={600} height={600} />
        </figure>
        <ContactInformation
          contactInformation={contactInformation as IContactInformation}
          social={social as ISocialLinks}
        />
      </div>
    </RevealAnimation>
  );
};

export default TeamMemberImg;
