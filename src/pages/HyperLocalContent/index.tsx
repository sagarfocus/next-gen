import Hero from './Hero';
import Why from './Why';
import Coverage from './Coverage';
import Anatomy from './Anatomy';
import CTA from './CTA';
import { SCHEMA } from './data';

/* ============================================================
   HYPER-LOCAL CONTENT — Cartographic / Field Atlas design.
   Map-pin iconography, coordinate-style typography, photographic
   metro tiles, scoped to .hlc-page with .hlc-* class system.
   ============================================================ */

const HyperLocalContent = () => (
  <main className="hlc-page">
    <Hero />
    <Why />
    <Coverage />
    <Anatomy />
    <CTA />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
  </main>
);

export default HyperLocalContent;
