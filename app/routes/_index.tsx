import { CommunityStats } from '~/components/community-stats';
import { FeatureCards } from '~/components/feature-cards';
import { HeroSection } from '~/components/hero-section';
import { LatestActivities } from '~/components/latest-activities';
import { Layout } from '~/components/layout';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'webKUFE - Front-end Developer Community' },
    {
      name: 'description',
      content:
        'Join the largest front-end developer community at Konkuk University. Share knowledge, find opportunities, and grow together.',
    },
  ];
}

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeatureCards />
      <div className="bg-muted/30">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <CommunityStats />
          <LatestActivities />
        </div>
      </div>
    </Layout>
  );
}
