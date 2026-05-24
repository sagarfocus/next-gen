import TeamHero from './TeamHero';
import Founder from './Founder';
import TeamGrid from './TeamGrid';
import Principles from './Principles';
import Stack from './Stack';
import JoinUs from './JoinUs';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Team' },
]);

const Team = () => {
  return (
    <main className="tm-page">
      <Seo
        title="Meet the Team — In-House Healthcare Marketing Specialists"
        description="Nine in-house healthcare marketing specialists — SEO, paid media, content, design, code. Texas-headquartered. 100% in-house, no freelancers, no junior handoffs."
        path="/team"
        schema={BREADCRUMB_SCHEMA}
      />

      <TeamHero />
      <Founder />
      <TeamGrid />
      <Principles />
      <Stack />
      <JoinUs />
    </main>
  );
};

export default Team;
