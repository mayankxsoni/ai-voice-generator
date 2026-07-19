'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';

const MobileMenuButton = () => {
  const { openMenu } = useMobileMenuContext();

  return (
    <div className="block xl:hidden">
      <button
        onClick={openMenu}
        className="bg-ns-ivory dark:bg-background-6 dark:hover:bg-background-7 flex size-12 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full transition-all duration-200 hover:scale-105"
        aria-label="Open mobile menu">
        <span className="sr-only">Menu</span>
        <span className="bg-stroke-9 block h-0.5 w-6 transition-all duration-200"></span>
        <span className="bg-stroke-9 block h-0.5 w-6 transition-all duration-200"></span>
        <span className="bg-stroke-9 block h-0.5 w-6 transition-all duration-200"></span>
      </button>
    </div>
  );
};

MobileMenuButton.displayName = 'MobileMenuButton';
export default MobileMenuButton;
