'use client';

import { useMobileMenu } from '@/hooks/useMobileMenu';
import { createContext, ReactNode, useContext } from 'react';

interface MobileMenuContextType {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  activeSubmenu: string | null;
  toggleSubmenu: (menuId: string) => void;
  closeAllSubmenus: () => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider = ({ children }: MobileMenuProviderProps) => {
  const mobileMenuState = useMobileMenu();

  return <MobileMenuContext.Provider value={mobileMenuState}>{children}</MobileMenuContext.Provider>;
};

export const useMobileMenuContext = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error('useMobileMenuContext must be used within a MobileMenuProvider');
  }
  return context;
};
