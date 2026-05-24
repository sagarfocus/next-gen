import type { ReactNode } from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Capabilities from './Capabilities';
import Industries from './Industries';
import Featured from './Featured';
import Closing from './Closing';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { COLLECTION_SCHEMA } from './data';

/* ============================================================
   OUR WORK - bespoke gallery page.
   Card clicks navigate to dedicated /our-work/:kind/:slug pages
   so each engagement, industry, and capability has its own
   indexable URL (no overlay/modal pattern - SEO-first).
   ============================================================ */

const _noopNode: ReactNode = null;

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Our Work' },
]);

const OurWork = () => (
  <main className="ow-page">
    <Seo
      title="Our Healthcare Marketing Work — Selected Projects 2019–2026"
      description="A retrospective of marketing, branding, web, and automation work shipped for clinics, medspas, urgent care, and multi-location healthcare brands."
      path="/our-work"
      schema={[COLLECTION_SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Stats />
    <Capabilities />
    <Industries />
    <Featured />
    <Closing />

    <span hidden>{_noopNode}</span>
  </main>
);

export default OurWork;
