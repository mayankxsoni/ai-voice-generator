'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';

const MenuCloseButton = () => {
  const { closeMenu } = useMobileMenuContext();
  return (
    <button
      onClick={closeMenu}
      className="nav-hamburger-close bg-background-4 dark:bg-background-9 relative flex size-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full">
      <span className="sr-only">Close Menu</span>
      <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 rotate-45" />
      <span className="bg-stroke-9/60 dark:bg-stroke-1 absolute block h-0.5 w-4 -rotate-45" />
    </button>
  );
};

MenuCloseButton.displayName = 'MenuCloseButton';
export default MenuCloseButton;
