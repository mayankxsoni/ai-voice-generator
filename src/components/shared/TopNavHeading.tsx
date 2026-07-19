import { useAppContext } from '@/context/AppContext';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const TopNavHeading = ({ className }: { className?: string }) => {
  const { showTopNavMarquee, setShowTopNavMarquee } = useAppContext();

  if (!showTopNavMarquee) {
    return null;
  }

  return (
    <RevealAnimation delay={0.1} direction="up" instant>
      <div className={cn('bg-ns-ivory absolute top-0 left-0 z-50 w-full px-5 py-1.5', className)}>
        <div className="relative mx-auto px-5 md:mr-10 md:px-5">
          <div className="from-ns-ivory dark:from-background-5 absolute top-0 left-0 z-10 h-full w-[15%] bg-linear-to-r to-transparent md:w-[20%]" />
          <div className="from-ns-ivory dark:from-background-5 absolute top-0 right-0 z-10 h-full w-[15%] bg-linear-to-l to-transparent md:w-[20%]" />
          <div className="flex items-center justify-center">
            <Marquee autoFill speed={40}>
              <p className="text-secondary text-tagline-2 font-inter-tight mr-2 leading-[150%] font-normal">
                Introducing our AI-powered voice generator –
                <Link href="#" className="cursor-pointer underline hover:underline-offset-2">
                  discover now
                </Link>{' '}
                and upgrade your voice generation.
              </p>
              <p className="text-secondary text-tagline-2 font-inter-tight leading-[150%] font-normal">
                Try the latest voice generator for modern voice generation{' '}
                <Link href="#" className="cursor-pointer underline hover:underline-offset-2">
                  see details{' '}
                </Link>
                and stand out to voice generation.{' '}
              </p>
            </Marquee>
          </div>
        </div>
        <div className="absolute top-1/2 right-2.5 z-20 -translate-y-1/2 md:right-4 2xl:right-10">
          <button
            onClick={() => setShowTopNavMarquee(false)}
            className="close-top-nav flex size-6 cursor-pointer items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
              <path
                d="M22.8358 22.3639L22.3643 22.8353C22.104 23.0956 21.6819 23.0956 21.4215 22.8353L16.0004 17.4141L10.5792 22.8352C10.3189 23.0956 9.89675 23.0956 9.6364 22.8352L9.16499 22.3638C8.90464 22.1035 8.90464 21.6814 9.16499 21.421L14.5862 15.9999L9.16499 10.5787C8.90464 10.3184 8.90464 9.89626 9.16499 9.63591L9.63639 9.16451C9.89674 8.90416 10.3189 8.90416 10.5792 9.16451L16.0004 14.5857L21.4215 9.1645C21.6819 8.90415 22.104 8.90415 22.3643 9.1645L22.8358 9.6359C23.0961 9.89625 23.0961 10.3184 22.8358 10.5787L17.4146 15.9999L22.8358 21.421C23.0961 21.6814 23.0961 22.1035 22.8358 22.3639Z"
                className="fill-secondary"
              />
            </svg>
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

TopNavHeading.displayName = 'TopNavHeading';
export default TopNavHeading;
