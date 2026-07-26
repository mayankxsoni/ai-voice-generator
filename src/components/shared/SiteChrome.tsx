import ChatbotWidget from '@/components/shared/chatbot/ChatbotWidget';
import HeaderWrapper from '@/components/shared/HeaderWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import Footer from '@/components/shared/footer/Footer';
import { AppContextProvider } from '@/context/AppContext';
import { ReactNode, Suspense } from 'react';

/**
 * Header / footer / chatbot / smooth-scroll wrapper for the public site.
 * Shared by (site)/layout.tsx and the root not-found page — the 404 has to live
 * at the app root to return a real 404 status, so it can't inherit (site)'s layout.
 */
const SiteChrome = ({ children }: { children: ReactNode }) => (
  <AppContextProvider>
    <Suspense>
      <SmoothScrollProvider>
        <HeaderWrapper />
        {children}
        <Footer />
        <ChatbotWidget />
      </SmoothScrollProvider>
    </Suspense>
  </AppContextProvider>
);

export default SiteChrome;
