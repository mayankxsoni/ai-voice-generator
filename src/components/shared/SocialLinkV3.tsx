import { ISocialLinks } from '@/interface';
import Link from 'next/link';
import SocialIcon, { Platform } from './SocialIcon';

const SocialLinkV3 = ({ social }: { social: ISocialLinks }) => {
  return (
    <div className="flex items-center justify-center gap-2.5">
      {['facebook', 'dribble', 'github', 'linkedin'].map((platform) => {
        const href = social[platform as keyof typeof social];
        if (!href) {
          return null;
        }
        return (
          <Link
            key={platform}
            href={href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-secondary/10 hover:bg-ns-ivory hover:border-stroke-10 flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-110 hover:shadow-lg"
            aria-label={`Follow user on ${platform}`}>
            <span>
              <SocialIcon platform={platform as Platform} className="group-hover:fill-secondary" />
            </span>
          </Link>
        );
      })}
    </div>
  );
};

SocialLinkV3.displayName = 'SocialLinkV3';
export default SocialLinkV3;
