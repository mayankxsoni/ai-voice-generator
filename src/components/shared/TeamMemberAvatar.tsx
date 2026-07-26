import Image from 'next/image';

/**
 * Renders a team member's photo, falling back to an initials tile when no
 * image has been supplied yet (next/image throws on an empty src).
 */
const TeamMemberAvatar = ({
  src,
  name,
  className = '',
  fallbackClassName = '',
}: {
  src?: string;
  name: string;
  className?: string;
  fallbackClassName?: string;
}) => {
  if (!src) {
    return (
      <div
        aria-label={`${name} profile placeholder`}
        role="img"
        className={`bg-background-1 dark:bg-background-8 flex aspect-square w-full items-center justify-center rounded-2xl p-6 ${fallbackClassName}`}>
        <span className="text-secondary/25 dark:text-accent/25 text-center text-3xl font-medium tracking-tight text-balance select-none">
          {name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} profile img`}
      loading="lazy"
      width={600}
      height={600}
      quality={100}
      className={className}
    />
  );
};

export default TeamMemberAvatar;
