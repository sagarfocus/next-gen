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
    heading: 'Acceptance of terms',
    body: (
      <P>
        By using this site or engaging TheNextGen Healthcare Marketing for any
        service, you agree to these Terms of Use and to any executed Statement
        of Work between us. If you do not agree, please do not use the site or
        services.
      </P>
    ),
  },
  {
    heading: 'Site content & accuracy',
    body: (
      <>
        <P>
          Information on this site is for general guidance. It is not legal,
          medical, or compliance advice. Case-study figures are taken from real
          engagements and are accurate as of the dates noted; future results
          will vary.
        </P>
        <P>
          We refresh case studies and benchmarks on a rolling basis. Specific
          performance claims in engagements are governed by the Statement of
          Work, not this site.
        </P>
      </>
    ),
  },
  {
    heading: 'Intellectual property',
    body: (
      <P>
        Site copy, illustrations, layouts, and methodology language are
        copyrighted by TheNextGen Healthcare Marketing. You may share short
        excerpts with attribution; please do not republish full pages without
        written permission.
      </P>
    ),
  },
  {
    heading: 'Acceptable use',
    body: (
      <>
        <P>You agree not to:</P>
        <UL>
          <li>Scrape, mirror, or rebuild the site or its content.</li>
          <li>Submit Protected Health Information (PHI) through forms.</li>
          <li>Use any form for unsolicited commercial messaging.</li>
          <li>Attempt to bypass security controls or access non-public areas.</li>
        </UL>
      </>
    ),
  },
  {
    heading: 'Engagements & deliverables',
    body: (
      <P>
        When we sign a Statement of Work, deliverables, billing, ownership of
        assets, and termination terms are governed by that SOW. The SOW
        supersedes these site Terms where they conflict.
      </P>
    ),
  },
  {
    heading: 'Disclaimers',
    body: (
      <P>
        The site is provided &ldquo;as is.&rdquo; We disclaim implied warranties
        of merchantability and fitness for a particular purpose to the extent
        permitted by law. Marketing outcomes depend on many variables outside
        our control.
      </P>
    ),
  },
  {
    heading: 'Limitation of liability',
    body: (
      <P>
        To the maximum extent permitted by law, TheNextGen Healthcare Marketing
        is not liable for indirect, incidental, or consequential damages arising
        from use of this site. Liability under any executed Statement of Work is
        governed by that document.
      </P>
    ),
  },
  {
    heading: 'Governing law',
    body: (
      <P>
        These Terms are governed by the laws of the State of Texas, USA. Venue
        for any dispute is Dallas County, Texas, unless the parties agree in
        writing to alternative dispute resolution.
      </P>
    ),
  },
];

const Terms = () => (
  <LegalPage
    eyebrow="Legal · Terms"
    title="Terms of Use"
    summary="The terms that apply when you use this site and the relationship between this site and the engagements we sign with healthcare clients."
    effectiveDate="January 1, 2026"
    reviewedDate="May 1, 2026"
    contact={{ email: 'hello@thenextgenhealth.com' }}
    sections={SECTIONS}
    breadcrumb="Terms"
    metaDescription="Terms of Use for TheNextGen Healthcare Marketing - site content, acceptable use, engagements, disclaimers, and governing law."
    canonicalPath="/terms"
  />
);

export default Terms;
