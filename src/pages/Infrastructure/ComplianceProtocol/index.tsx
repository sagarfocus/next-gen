import Hero from './Hero';
import Safeguards from './Safeguards';
import Specs from './Specs';
import CTA from './CTA';
import { SCHEMA } from './data';

/* ============================================================
   COMPLIANCE PROTOCOL - Image-driven swiss redesign.
   Hero with security image, 3 safeguard cards, 6 spec cards
   in a 3x2 grid, image CTA. Brand colors throughout.
   ============================================================ */

const ComplianceProtocol = () => (
  <main className="gt-page gt-page-x cp-page-x">
    <Hero />
    <Safeguards />
    <Specs />
    <CTA />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
    />
  </main>
);

export default ComplianceProtocol;
