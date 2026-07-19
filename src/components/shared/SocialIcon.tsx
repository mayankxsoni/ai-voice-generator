import { DribbleIcon, FacebookIcon, GithubIcon, LinkedinIcon } from '@/icons';
import { FC } from 'react';

export type Platform = 'facebook' | 'dribble' | 'github' | 'linkedin';

const SocialIcon: FC<{ platform: Platform; className?: string }> = ({ platform, className }) => {
  switch (platform) {
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'dribble':
      return <DribbleIcon className={className} />;
    case 'github':
      return <GithubIcon className={className} />;
    case 'linkedin':
      return <LinkedinIcon className={className} />;
  }
};
SocialIcon.displayName = 'SocialIcon';
export default SocialIcon;
