import Hero from './Hero';
import Team from './Team';
import Cadence from './Cadence';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SCHEMA } from './data';

/* ============================================================
   GROWTH TEAM - Image-driven swiss layout.
   Hero with portrait, photo-led role grid, visual cadence,
   image CTA card.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Infrastructure' },
  { name: 'Growth Team' },
]);

const GrowthTeam = () => (
  <main className="gt-page gt-page-x">
    <Seo
      title="The Growth Team — Embedded Healthcare Marketing Specialists"
      description="Six dedicated healthcare-fluent specialists — embedded into your engagement, no junior handoffs, no freelancer churn. 105+ weekly hours per account, 3.1× median first-year ROAS."
      path="/infrastructure/growth-team"
      schema={[SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Team />
    <Cadence />
    <CTA />
  </main>
);

export default GrowthTeam;
