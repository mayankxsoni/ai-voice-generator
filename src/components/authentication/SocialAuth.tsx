import appleImage from '@public/images/icons/apple.svg';
import facebookImage from '@public/images/icons/facebook-v2.svg';
import googleImage from '@public/images/icons/google.svg';
import microsoftImage from '@public/images/icons/microsoft.svg';
import Image from 'next/image';

const SocialAuth = () => {
  return (
    <div className="space-y-4">
      <button className="border-stroke-10 hover:bg-primary-500 group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 transition-colors duration-500 ease-in-out">
        <span className="block size-6">
          <Image src={googleImage} alt="google" className="size-full" />
        </span>
        <span className="text-tagline-2 text-secondary group-hover:text-accent font-medium transition-colors duration-500 ease-in-out">
          Continue with Google
        </span>
      </button>
      <button className="border-stroke-10 hover:bg-primary-500 group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 transition-colors duration-500 ease-in-out">
        <span className="block size-6">
          <Image src={facebookImage} alt="facebook" className="size-full" />
        </span>
        <span className="text-tagline-2 text-secondary group-hover:text-accent font-medium transition-colors duration-500 ease-in-out">
          Continue with facebook
        </span>
      </button>
      <button className="border-stroke-10 hover:bg-primary-500 group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 transition-colors duration-500 ease-in-out">
        <span className="block size-6">
          <Image src={appleImage} alt="apple" className="size-full" />
        </span>
        <span className="text-tagline-2 text-secondary group-hover:text-accent font-medium transition-colors duration-500 ease-in-out">
          Continue with apple
        </span>
      </button>
      <button className="border-stroke-10 hover:bg-primary-500 group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border px-8 py-3 transition-colors duration-500 ease-in-out">
        <span className="block size-6">
          <Image src={microsoftImage} alt="microsoft" className="size-full" />
        </span>
        <span className="text-tagline-2 text-secondary group-hover:text-accent font-medium transition-colors duration-500 ease-in-out">
          Continue with microsoft
        </span>
      </button>
    </div>
  );
};

export default SocialAuth;
