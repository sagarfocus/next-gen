import Hero from './Hero';
import Story from './Story';
import Pillars from './Pillars';
import Coverage from './Coverage';
import Loop from './Loop';
import CTA from './CTA';
import { SCHEMA } from './data';

/* ============================================================
   HIPAA COMPLIANCE - Image-driven swiss redesign.
   Hero with security image, 3 safeguard pillars, in-scope/out-of-scope
   coverage cards, 4-step compliance loop, image CTA card.
   ============================================================ */

const HipaaCompliance = () => (
  <main className="gt-page gt-page-x hcp-page">
    <Hero />
    <Story />
    <Pillars />
    <Coverage />
    <Loop />
    <CTA />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
  </main>
);

export default HipaaCompliance;
