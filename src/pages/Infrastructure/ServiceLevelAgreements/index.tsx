import Hero from './Hero';
import Tiers from './Tiers';
import Escalation from './Escalation';
import TrackRecord from './TrackRecord';
import CTA from './CTA';
import { SCHEMA } from './data';

/* ============================================================
   SERVICE LEVEL AGREEMENTS - Image-driven swiss redesign.
   Hero with monitoring image + gauge tiles, 4 severity cards,
   3-step escalation, monitoring grid, image CTA card.
   ============================================================ */

const ServiceLevelAgreements = () => (
  <main className="gt-page gt-page-x sla-page-x">
    <Hero />
    <Tiers />
    <Escalation />
    <TrackRecord />
    <CTA />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  </main>
);

export default ServiceLevelAgreements;
