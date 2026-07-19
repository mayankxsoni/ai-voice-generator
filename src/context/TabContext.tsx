'use client';

import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

interface TabConfig {
  animation: {
    duration: number;
    delay: number;
    ease: string;
    y: number;
  };
  mobile: {
    activeBg: string;
    activeColor: string;
    activeBorder: string;
    scale: number;
  };
}

interface TabContextType {
  currentIndex: number;
  switchToTab: (index: number) => void;
  registerTabBar: (element: HTMLDivElement | null) => void;
  registerTabContent: (index: number, element: HTMLDivElement | null) => void;
  registerTabButton: (index: number, element: HTMLButtonElement | null) => void;
  config: TabConfig;
}

const defaultConfig: TabConfig = {
  animation: {
    duration: 0.3,
    delay: 0.05,
    ease: 'power2.out',
    y: 20,
  },
  mobile: {
    activeBg: '#beab9a',
    activeColor: 'white',
    activeBorder: '#dfd1c5',
    scale: 1.05,
  },
};

const TabContext = createContext<TabContextType | undefined>(undefined);

interface TabProviderProps {
  children: React.ReactNode;
  defaultValue?: number;
  config?: Partial<TabConfig>;
}

export const TabProvider: React.FC<TabProviderProps> = ({ children, defaultValue = 0, config: customConfig = {} }) => {
  const [currentIndex, setCurrentIndex] = useState(defaultValue);
  const activeTabBarRef = useRef<HTMLDivElement | null>(null);
  const tabContentRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const tabButtonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const previousIndexRef = useRef<number>(-1);

  const config = { ...defaultConfig, ...customConfig };

  const registerTabBar = useCallback((element: HTMLDivElement | null) => {
    activeTabBarRef.current = element;
  }, []);

  const registerTabContent = useCallback((index: number, element: HTMLDivElement | null) => {
    if (element) {
      tabContentRefs.current.set(index, element);
    } else {
      tabContentRefs.current.delete(index);
    }
  }, []);

  const registerTabButton = useCallback((index: number, element: HTMLButtonElement | null) => {
    if (element) {
      tabButtonRefs.current.set(index, element);
    } else {
      tabButtonRefs.current.delete(index);
    }
  }, []);

  const updateActiveTabBar = useCallback((activeButton: HTMLButtonElement) => {
    const activeTabBar = activeTabBarRef.current;
    if (!activeTabBar || !activeButton) {
      return;
    }

    const left = activeButton.offsetLeft - activeTabBar.offsetLeft;
    const width = activeButton.offsetWidth;

    activeTabBar.style.width = `${width}px`;
    activeTabBar.style.translate = `${left}px 0`;
  }, []);

  const switchTabContent = useCallback((targetIndex: number, previousIndex: number) => {
    const contentMap = tabContentRefs.current;

    // Handle all registered tab contents
    contentMap.forEach((content, index) => {
      if (targetIndex === index) {
        // Get display type from the element's current style or default to flex
        const currentDisplay = content.style.display === 'none' ? 'flex' : content.style.display || 'flex';
        content.style.display = currentDisplay;
        content.setAttribute('aria-hidden', 'false');

        // Trigger animation event for TabContent components to handle
        content.dispatchEvent(
          new CustomEvent('tabReveal', {
            detail: { previousIndex, targetIndex },
          }),
        );
      } else {
        content.style.display = 'none';
        content.setAttribute('aria-hidden', 'true');
      }
    });
  }, []);

  const switchToTab = useCallback(
    (targetIndex: number) => {
      if (targetIndex < 0 || targetIndex === currentIndex) {
        return;
      }

      const previousIndex = previousIndexRef.current;
      previousIndexRef.current = currentIndex;
      setCurrentIndex(targetIndex);

      // Switch content immediately
      switchTabContent(targetIndex, previousIndex);

      // Update active tab bar for desktop using registered button
      const activeButton = tabButtonRefs.current.get(targetIndex);
      if (activeButton) {
        updateActiveTabBar(activeButton);
      }
    },
    [currentIndex, switchTabContent, updateActiveTabBar],
  );

  // Initialize first tab on mount
  useEffect(() => {
    if (previousIndexRef.current === -1) {
      previousIndexRef.current = currentIndex;
      switchTabContent(currentIndex, -1);
    }
  }, [currentIndex, switchTabContent]);

  // Initialize active tab bar position when tab buttons are registered
  useEffect(() => {
    const activeButton = tabButtonRefs.current.get(currentIndex);
    if (activeButton && activeTabBarRef.current) {
      updateActiveTabBar(activeButton);
    }
  }, [currentIndex, updateActiveTabBar]);

  const value: TabContextType = {
    currentIndex,
    switchToTab,
    registerTabBar,
    registerTabContent,
    registerTabButton,
    config,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTab = (): TabContextType => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};
