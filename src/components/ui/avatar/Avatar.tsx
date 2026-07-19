import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface AvatarProps {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <Image
      className={cn(
        'dark:ring-stroke-7 bg-background-2 dark:bg-background-5 inline-block size-12 rounded-full ring-2 ring-white',
        className,
      )}
      src={src}
      alt={alt}
      width={48}
      height={48}
    />
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
