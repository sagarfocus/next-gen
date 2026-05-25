import TeamHero from './TeamHero';
import Founder from './Founder';
import TeamGrid from './TeamGrid';
import Pillars from './Pillars';
import Engage from './Engage';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Team' },
]);

const Team = () => {
  return (
    <main className="ngt-page">
      <Seo
        title="Meet the Team — In-House Healthcare Marketing Specialists"
        description="A nine-person, healthcare-only growth team — SEO, paid media, content, design, code. Texas-headquartered. No freelancers, no junior handoffs."
        path="/team"
        schema={BREADCRUMB_SCHEMA}
      />

      <TeamHero />
      <Founder />
      <TeamGrid />
      <Pillars />
      <Engage />
    </main>
  );
};

export default Team;
