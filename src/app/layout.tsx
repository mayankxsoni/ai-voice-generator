import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

/**
 * Root layout is intentionally bare — it only owns <html>/<body>.
 * The marketing chrome (header, footer, chatbot, smooth scroll) lives in
 * (site)/layout.tsx so the admin panel at /admin can opt out of all of it.
 */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
