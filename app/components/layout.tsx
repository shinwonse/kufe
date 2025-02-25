'use client';

import { useEffect } from 'react';
import { cn } from '~/libs/utils/cn';
import { Footer } from './footer';
import { Header } from './header';
import { ThemeProvider } from './theme-provider';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Add client-side code for dark mode detection
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <div className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
