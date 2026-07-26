import { ISocialLinks } from '@/interface';
import Link from 'next/link';

const LINKEDIN_PATH =
  'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 21h4V9H3v12zM10 21h4v-6.5c0-1.66.67-2.5 2-2.5s2 .84 2 2.5V21h4v-7.2c0-3.2-1.7-4.8-4.2-4.8-1.6 0-2.6.72-3.3 1.86V9h-4c.05 1.1 0 12 0 12z';

const WHATSAPP_PATH =
  'M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.02 8.02 0 0 1-1.26-4.24c0-4.46 3.63-8.09 8.09-8.09zm-3.7 4.36c-.17 0-.45.06-.69.31-.24.25-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.8 2.75 4.37 3.85.61.26 1.09.42 1.46.54.61.2 1.17.17 1.61.1.49-.07 1.51-.62 1.72-1.21.21-.6.21-1.11.15-1.21-.06-.11-.24-.17-.49-.29-.25-.13-1.51-.75-1.74-.83-.24-.09-.41-.13-.58.12-.17.25-.66.83-.81 1-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.26-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.42h-.05z';

type Variant = 'hover' | 'static';

const wrapperClass: Record<Variant, string> = {
  hover: 'ease-team-ease-1 flex items-center justify-center gap-4 transition-all duration-[400ms] lg:scale-75 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100',
  static: 'flex items-center gap-2',
};

const linkClass: Record<Variant, string> = {
  hover: 'group/social-link',
  static:
    'border-accent/10 dark:border-stroke-7 hover:bg-background-1 dark:hover:bg-accent group/social-link flex size-10 items-center justify-center rounded-full border p-2.5 transition-all duration-500 ease-in-out hover:-translate-y-2',
};

const iconClass: Record<Variant, string> = {
  hover: 'fill-secondary/40 dark:fill-accent/40 group-hover/social-link:fill-secondary dark:group-hover/social-link:fill-accent ease-team-ease-1 transition-colors duration-300',
  static:
    'fill-accent dark:fill-accent/60 group-hover/social-link:fill-secondary group-hover/social-link:dark:fill-black transition-all duration-500 ease-in-out',
};

/**
 * LinkedIn + WhatsApp links for a team member.
 * `hover` reveals them on card hover (team grid); `static` renders them inline.
 */
const TeamSocialLinks = ({
  social,
  name,
  variant = 'hover',
}: {
  social: ISocialLinks;
  name?: string;
  variant?: Variant;
}) => {
  if (!social?.linkedin && !social?.whatsapp) {
    return null;
  }

  const size = variant === 'hover' ? 18 : 20;

  return (
    <div className={wrapperClass[variant]}>
      {social?.linkedin && (
        <Link href={social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass[variant]}>
          <span className="sr-only">{name ? `${name} on LinkedIn` : 'LinkedIn profile'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d={LINKEDIN_PATH} className={iconClass[variant]} />
          </svg>
        </Link>
      )}
      {variant === 'hover' && social?.linkedin && social?.whatsapp && (
        <div className="bg-stroke-1 dark:bg-accent/10 h-[22px] w-px" />
      )}
      {social?.whatsapp && (
        <Link href={social.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass[variant]}>
          <span className="sr-only">{name ? `${name} on WhatsApp` : 'WhatsApp'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <path d={WHATSAPP_PATH} className={iconClass[variant]} />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default TeamSocialLinks;
