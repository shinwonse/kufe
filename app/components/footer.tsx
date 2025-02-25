import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './ui/button';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Q&A', href: '/qa' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <span className="text-xl font-bold text-emerald-500">web</span>
              <span className="text-xl font-bold">KUFE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building the future of web development, one line of code at a
              time.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} webKUFE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
