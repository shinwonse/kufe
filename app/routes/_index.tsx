import { cn } from '~/libs/utils/cn';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'KUFE - Home' },
    { name: 'description', content: 'Welcome to KUFE!' },
  ];
}

export default function Home() {
  return <div className={cn('bg-background')}>Home</div>;
}
