import Hero from './Hero';
import Story from './Story';
import Pillars from './Pillars';
import Coverage from './Coverage';
import Loop from './Loop';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SCHEMA } from './data';

/* ============================================================
   HIPAA COMPLIANCE - Image-driven swiss redesign.
   Hero with security image, 3 safeguard pillars, in-scope/out-of-scope
   coverage cards, 4-step compliance loop, image CTA card.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'HIPAA Compliance' },
]);

const HipaaCompliance = () => (
  <main className="gt-page gt-page-x hcp-page">
    <Seo
      title="HIPAA-Compliant Healthcare Marketing — BAA-Covered Toolchain"
      description="HIPAA-aware marketing across forms, hosting, ad platforms, and analytics. 100% BAA-covered toolchain, annual external review, last independent audit Mar 2026."
      path="/hipaa-compliance"
      schema={[SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Story />
    <Pillars />
    <Coverage />
    <Loop />
    <CTA />
  </main>
);

export default HipaaCompliance;
