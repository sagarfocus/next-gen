import type { ReactElement } from 'react';

interface PillarLink {
  href: string;
  label: string;
}

interface Pillar {
  tag: string;
  title: string;
  text: string;
  icon: ReactElement;
  links: PillarLink[];
}

const ArrowMini = () => (
  <svg
    className="arrow-mini"
    width={11}
    height={11}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const PILLARS: Pillar[] = [
  {
    tag: 'Digital Acquisition',
    title: 'Patient Acquisition Channels',
    text: 'Dominate organic rankings, drive immediate appointment volume, and build sustained community engagement — across every channel where patients search.',
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    links: [
      { href: 'https://thenextgenhealth.com/services/seo-local-search', label: 'SEO & Local Search' },
      { href: 'https://thenextgenhealth.com/services/google-ads', label: 'Google Ads Management' },
      { href: 'https://thenextgenhealth.com/services/meta-ads', label: 'Meta & Facebook Ads' },
      { href: 'https://thenextgenhealth.com/services/social-media-marketing', label: 'Social Media Marketing' },
      { href: 'https://thenextgenhealth.com/services/email-drip-campaigns', label: 'Email & Drip Campaigns' },
    ],
  },
  {
    tag: 'Infrastructure & Brand',
    title: 'Operational Foundation',
    text: 'HIPAA-compliant websites, healthcare-aware brand systems, conversion-focused content, and analytics that connect every dollar to clinical outcomes.',
    icon: (
      <svg
        width={26}
        height={26}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    links: [
      { href: 'https://thenextgenhealth.com/services/website-design-dev', label: 'HIPAA-Compliant Website Design' },
      { href: 'https://thenextgenhealth.com/services/brand-identity-design', label: 'Healthcare Brand Identity' },
      { href: 'https://thenextgenhealth.com/services/content-copywriting', label: 'Medical Content & Copywriting' },
      { href: 'https://thenextgenhealth.com/services/analytics-reporting', label: 'Real-Time Analytics Dashboards' },
      { href: 'https://thenextgenhealth.com/services/strategy-planning', label: 'Strategy & Planning' },
    ],
  },
];

const ServicesSpectrum = () => {
  return (
    <section className="ab-spectrum" aria-labelledby="ab-spec-title">
      <div className="container-shell">
        <div className="ab-spec-head">
          <span className="ab-spec-eyebrow">What We Do</span>
          <h2 id="ab-spec-title" className="ab-spec-h2">
            From digital patient acquisition to operational automation.
          </h2>
          <p className="ab-spec-sub">
            We cover every aspect of clinical growth &mdash; the full spectrum
            of healthcare marketing under one operating system.
          </p>
        </div>

        <div className="ab-spec-split">
          {PILLARS.map((pillar) => (
            <article key={pillar.tag} className="ab-spec-pillar">
              <div className="ab-spec-pillar-head">
                <span className="ab-spec-pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </span>
                <div>
                  <span className="ab-spec-pillar-tag">{pillar.tag}</span>
                  <h3 className="ab-spec-pillar-title">{pillar.title}</h3>
                </div>
              </div>
              <p className="ab-spec-pillar-text">{pillar.text}</p>
              <ul className="ab-spec-list">
                {pillar.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ArrowMini />
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="ab-spec-closing">
          We also provide offline channels including{' '}
          <a
            href="https://thenextgenhealth.com/services/brochure-print-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            print design
          </a>{' '}
          and{' '}
          <a
            href="https://thenextgenhealth.com/services/on-site-field-marketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            field marketing
          </a>
          . Explore{' '}
          <a
            href="https://thenextgenhealth.com/proven-results"
            target="_blank"
            rel="noopener noreferrer"
          >
            our proven results
          </a>{' '}
          or view detailed{' '}
          <a
            href="https://thenextgenhealth.com/case-studies"
            target="_blank"
            rel="noopener noreferrer"
          >
            case studies
          </a>{' '}
          to see how this integrated approach delivers measurable patient
          acquisition growth.
        </div>
      </div>
    </section>
  );
};

export default ServicesSpectrum;
