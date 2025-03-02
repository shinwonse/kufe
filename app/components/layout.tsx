import { cn } from '~/libs/utils/cn';
import { Footer } from './footer';
import { Header } from './header';
import { ThemeProvider } from './theme-provider';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <div className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Header />
        <main className={cn('container mx-auto px-4 py-8 md:px-6 lg:px-8')}>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
