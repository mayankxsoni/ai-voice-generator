'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Simple state interface
interface AppState {
  showTopNav: boolean;
  showTopNavDescription: boolean;
  showTopNavMarquee: boolean;
}

// Context type
interface AppContextType extends AppState {
  setShowTopNav: (show: boolean) => void;
  setShowTopNavDescription: (show: boolean) => void;
  setShowTopNavMarquee: (show: boolean) => void;
}

// Default state
const defaultState: AppState = {
  showTopNav: true,
  showTopNavDescription: true,
  showTopNavMarquee: true,
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<AppState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('app-state');
      if (stored) {
        setState(JSON.parse(stored));
      }
    } catch {
      // Silently handle localStorage errors
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('app-state', JSON.stringify(state));
      } catch {
        // Silently handle localStorage errors
      }
    }
  }, [state, isLoaded]);

  // Simple setters
  const setShowTopNav = (show: boolean) => {
    setState((prev) => ({ ...prev, showTopNav: show }));
  };

  const setShowTopNavDescription = (show: boolean) => {
    setState((prev) => ({ ...prev, showTopNavDescription: show }));
  };

  const setShowTopNavMarquee = (show: boolean) => {
    setState((prev) => ({ ...prev, showTopNavMarquee: show }));
  };

  const value: AppContextType = {
    ...state,
    setShowTopNav,
    setShowTopNavDescription,
    setShowTopNavMarquee,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
};
