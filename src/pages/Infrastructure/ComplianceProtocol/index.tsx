import Hero from './Hero';
import Safeguards from './Safeguards';
import Specs from './Specs';
import CTA from './CTA';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SCHEMA } from './data';

/* ============================================================
   COMPLIANCE PROTOCOL - Image-driven swiss redesign.
   Hero with security image, 3 safeguard cards, 6 spec cards
   in a 3x2 grid, image CTA. Brand colors throughout.
   ============================================================ */

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Infrastructure' },
  { name: 'Compliance Protocol' },
]);

const ComplianceProtocol = () => (
  <main className="gt-page gt-page-x cp-page-x">
    <Seo
      title="Compliance Protocol — HIPAA-Aligned Marketing Infrastructure"
      description="Every engagement runs on a HIPAA-aligned stack — BAA-covered tools, encrypted intake (AES-256), TLS 1.3 transit, PHI-safe analytics, audited logs. Documentation pack on request."
      path="/infrastructure/compliance-protocol"
      schema={[SCHEMA, BREADCRUMB_SCHEMA]}
    />

    <Hero />
    <Safeguards />
    <Specs />
    <CTA />
  </main>
);

export default ComplianceProtocol;
