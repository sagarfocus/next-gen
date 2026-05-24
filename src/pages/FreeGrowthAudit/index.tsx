import Hero from './Hero';
import StatsRail from './StatsRail';
import Compare from './Compare';
import Bento from './Bento';
import Timeline from './Timeline';
import Pact from './Pact';
import Outcomes from './Outcomes';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SERVICE_SCHEMA, FAQ_SCHEMA, TAILWIND_ACCENT } from './data';

/* ============================================================
   FREE GROWTH AUDIT - bespoke design
   Layout: asymmetric hero, stats rail, bento grid, timeline,
   pact strip, sticky-feeling closing card. Not the editorial
   template shared by the rest of the site.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Free Growth Audit' },
]);

const FreeGrowthAudit = () => (
  <main className="fga-page">
    <Seo
      title="Free Healthcare Marketing Audit — 5-Day Visibility & Funnel Review"
      description="A senior strategist audits your healthcare practice — visibility, funnel, paid spend — and hands you the ranked 90-day fix as a PDF. Free, 5-day delivery, no card."
      path="/free-growth-audit"
      schema={[SERVICE_SCHEMA, FAQ_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <StatsRail />
    <Compare />
    <Bento />
    <Timeline />
    <Pact />
    <Outcomes />
    <Closing />

    {/* Hidden accent color helper so unused TS constant survives the build */}
    <span hidden data-accent={TAILWIND_ACCENT} />
  </main>
);

export default FreeGrowthAudit;
