import type { ReactNode } from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Capabilities from './Capabilities';
import Industries from './Industries';
import Featured from './Featured';
import Closing from './Closing';
import { COLLECTION_SCHEMA } from './data';

/* ============================================================
   OUR WORK - bespoke gallery page.
   Card clicks navigate to dedicated /our-work/:kind/:slug pages
   so each engagement, industry, and capability has its own
   indexable URL (no overlay/modal pattern - SEO-first).
   ============================================================ */

const _noopNode: ReactNode = null;

const OurWork = () => (
  <main className="ow-page">
    <Hero />
    <Stats />
    <Capabilities />
    <Industries />
    <Featured />
    <Closing />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(COLLECTION_SCHEMA) }}
    />
    <span hidden>{_noopNode}</span>
  </main>
);

export default OurWork;
