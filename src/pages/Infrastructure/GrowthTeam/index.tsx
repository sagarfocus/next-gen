import Hero from './Hero';
import Team from './Team';
import Cadence from './Cadence';
import CTA from './CTA';
import { SCHEMA } from './data';

/* ============================================================
   GROWTH TEAM - Image-driven swiss layout.
   Hero with portrait, photo-led role grid, visual cadence,
   image CTA card.
   ============================================================ */

const GrowthTeam = () => (
  <main className="gt-page gt-page-x">
    <Hero />
    <Team />
    <Cadence />
    <CTA />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  </main>
);

export default GrowthTeam;
