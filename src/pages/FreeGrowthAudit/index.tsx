import Hero from './Hero';
import StatsRail from './StatsRail';
import Compare from './Compare';
import Bento from './Bento';
import Timeline from './Timeline';
import Pact from './Pact';
import Outcomes from './Outcomes';
import Closing from './Closing';
import { SERVICE_SCHEMA, FAQ_SCHEMA, TAILWIND_ACCENT } from './data';

/* ============================================================
   FREE GROWTH AUDIT - bespoke design
   Layout: asymmetric hero, stats rail, bento grid, timeline,
   pact strip, sticky-feeling closing card. Not the editorial
   template shared by the rest of the site.
   ============================================================ */

const FreeGrowthAudit = () => (
  <main className="fga-page">
    <Hero />
    <StatsRail />
    <Compare />
    <Bento />
    <Timeline />
    <Pact />
    <Outcomes />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
    />

    {/* Hidden accent color helper so unused TS constant survives the build */}
    <span hidden data-accent={TAILWIND_ACCENT} />
  </main>
);

export default FreeGrowthAudit;
