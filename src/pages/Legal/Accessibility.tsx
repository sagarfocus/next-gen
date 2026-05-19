import LegalPage from './LegalPage';
import type { LegalSection } from './LegalPage';

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ margin: '0 0 14px' }}>{children}</p>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul style={{ margin: '0 0 14px', paddingLeft: 22 }}>{children}</ul>
);

const SECTIONS: LegalSection[] = [
  {
    heading: 'Our commitment',
    body: (
      <P>
        Healthcare marketing should be readable by everyone who needs care.
        TheNextGen Healthcare Marketing commits to ongoing conformance with{' '}
        <strong>WCAG 2.2 Level AA</strong> across this site and every client
        site we build.
      </P>
    ),
  },
  {
    heading: 'What that means in practice',
    body: (
      <>
        <UL>
          <li>Semantic HTML with one H1 per page and a logical heading order.</li>
          <li>Keyboard-operable navigation, modals, and accordions with visible focus states.</li>
          <li>Color contrast of at least 4.5:1 for body text, 3:1 for large text and UI components.</li>
          <li>Descriptive alt text on every meaningful image; decorative images marked aria-hidden.</li>
          <li>Reduced-motion preferences respected on animations and scrolling effects.</li>
          <li>Form fields with explicit labels, error messages, and ARIA descriptions.</li>
        </UL>
      </>
    ),
  },
  {
    heading: 'Testing & tooling',
    body: (
      <P>
        We run automated accessibility checks on every release with axe-core
        and Lighthouse, paired with quarterly manual screen-reader audits using
        NVDA and VoiceOver. Issues are tracked publicly in our internal backlog
        with named owners and target dates.
      </P>
    ),
  },
  {
    heading: 'Known limitations',
    body: (
      <P>
        Some third-party embeds (map widgets, video players) ship their own
        accessibility behavior. We choose vendors that publish conformance
        statements; where a gap exists we provide a text alternative.
      </P>
    ),
  },
  {
    heading: 'Report a barrier',
    body: (
      <P>
        If you encounter a barrier on this site or on any site we have built,
        email{' '}
        <a href="mailto:hello@thenextgenhealth.com" style={{ color: '#576DB5' }}>
          hello@thenextgenhealth.com
        </a>{' '}
        with the page URL and a short description. We respond within two
        business days and aim to fix critical issues within ten.
      </P>
    ),
  },
];

const Accessibility = () => (
  <LegalPage
    eyebrow="Legal · Accessibility"
    title="Accessibility Statement"
    summary="How TheNextGen Healthcare Marketing builds, tests, and maintains accessible experiences for this site and every client site we ship."
    effectiveDate="January 1, 2026"
    reviewedDate="May 1, 2026"
    contact={{ email: 'hello@thenextgenhealth.com' }}
    sections={SECTIONS}
    breadcrumb="Accessibility"
    metaDescription="Accessibility Statement for TheNextGen Healthcare Marketing — WCAG 2.2 AA commitment, testing process, and how to report a barrier."
    canonicalPath="/accessibility"
  />
);

export default Accessibility;
