import Hero from './Hero';
import Why from './Why';
import Coverage from './Coverage';
import Anatomy from './Anatomy';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SCHEMA } from './data';

/* ============================================================
   HYPER-LOCAL CONTENT — Cartographic / Field Atlas design.
   Map-pin iconography, coordinate-style typography, photographic
   metro tiles, scoped to .hlc-page with .hlc-* class system.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Hyper-Local Content' },
]);

const HyperLocalContent = () => (
  <main className="hlc-page">
    <Seo
      title="Hyper-Local Content for Healthcare — Programmatic Neighborhood Pages"
      description="Programmatic landing pages — one per municipality, suburb, or catchment your healthcare practice draws from. Built to win long-tail searches hospital networks ignore."
      path="/hyper-local-content"
      schema={[SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Why />
    <Coverage />
    <Anatomy />
    <CTA />
  </main>
);

export default HyperLocalContent;
