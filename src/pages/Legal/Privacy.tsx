import LegalPage from './LegalPage';
import type { LegalSection } from './LegalPage';
import { SITE } from '@/content/site';

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: '0 0 14px' }}>{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>{children}</ul>
);

const SECTIONS: LegalSection[] = [
  {
    heading: 'Who we are',
    body: (
      <>
        <P>
          TheNextGen Healthcare Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;TheNextGen&rdquo;) operates this website and the marketing
          services described on it. We are a Texas-based agency working
          exclusively with healthcare organizations.
        </P>
      </>
    ),
  },
  {
    heading: 'Information we collect',
    body: (
      <>
        <P>We collect the minimum information needed to deliver our services:</P>
        <UL>
          <li>Contact details you submit through audit, demo, or contact forms.</li>
          <li>Email addresses provided to the newsletter signup.</li>
          <li>Standard server logs (IP, user agent, timestamp) for security and analytics.</li>
          <li>Aggregated, de-identified usage analytics via privacy-respecting tooling.</li>
        </UL>
        <P>
          We do <strong>not</strong> intentionally collect Protected Health
          Information (PHI). If you contact us about your practice, please omit
          patient identifiers from the message.
        </P>
      </>
    ),
  },
  {
    heading: 'How we use it',
    body: (
      <>
        <UL>
          <li>To respond to inquiries and schedule strategy calls.</li>
          <li>To deliver the newsletter you signed up for.</li>
          <li>To improve the site, content, and service offerings.</li>
          <li>To send invoices, contracts, and service communications under an executed engagement.</li>
        </UL>
        <P>
          We do not sell, rent, or trade personal information to third parties.
        </P>
      </>
    ),
  },
  {
    heading: 'Cookies & analytics',
    body: (
      <>
        <P>
          The site uses first-party cookies for session continuity and a
          privacy-respecting analytics package to understand which content is
          useful. You can disable cookies in your browser without losing core
          site functionality.
        </P>
      </>
    ),
  },
  {
    heading: 'Sub-processors',
    body: (
      <>
        <P>
          When we engage with clients, we may rely on the following categories
          of sub-processors. Each is covered by a written agreement (and, where
          PHI is in scope, a BAA):
        </P>
        <UL>
          <li>Cloud hosting and CDN (e.g., Vercel, Cloudflare).</li>
          <li>Email and CRM tooling (e.g., HubSpot, Postmark).</li>
          <li>Analytics and dashboarding platforms.</li>
        </UL>
      </>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <>
        <P>
          You can request access to, correction of, or deletion of any personal
          information you have provided. Email{' '}
          <a href={`mailto:${SITE.email}`} style={{ color: '#576DB5' }}>
            {SITE.email}
          </a>{' '}
          and we will respond within 10 business days.
        </P>
      </>
    ),
  },
  {
    heading: 'Changes to this policy',
    body: (
      <>
        <P>
          We may update this policy as our services evolve. Material changes
          will be flagged at the top of this page for at least 30 days before
          taking effect.
        </P>
      </>
    ),
  },
];

const Privacy = () => (
  <LegalPage
    eyebrow="Legal · Privacy"
    title="Privacy Policy"
    summary="How TheNextGen Healthcare Marketing collects, uses, and protects information when you visit this site or engage us as a marketing partner."
    effectiveDate="January 1, 2026"
    reviewedDate="May 1, 2026"
    contact={{ email: SITE.email }}
    sections={SECTIONS}
    breadcrumb="Privacy"
    metaDescription="Privacy Policy for TheNextGen Healthcare Marketing - what we collect, how we use it, sub-processors, and your rights."
    canonicalPath="/privacy"
  />
);

export default Privacy;
