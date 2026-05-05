import { useState } from 'react';
import type { ReactElement } from 'react';

interface ServiceItem {
  href: string;
  ariaId: string;
  illustration: ReactElement;
  meta: string;
  title: string;
  sub: string;
  extra?: boolean;
}

/* ---- Card illustrations ---- */

const SeoCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="148" cy="118" r="64" fill="none" stroke="#B38B6D" strokeWidth="2.4" />
    <line x1="194" y1="164" x2="226" y2="196" stroke="#B38B6D" strokeWidth="3.5" strokeLinecap="round" />
    <circle cx="226" cy="196" r="3" fill="#B38B6D" />
    <path
      d="M148 84 C 162 84 172 94 172 108 C 172 124 148 148 148 148 C 148 148 124 124 124 108 C 124 94 134 84 148 84 Z"
      fill="#8FBC8F"
    />
    <circle cx="148" cy="106" r="7" fill="#fff" />
  </svg>
);

const AdsCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="60" y1="180" x2="260" y2="180" stroke="#B38B6D" strokeOpacity=".4" strokeWidth="1.4" />
    <rect x="80" y="140" width="32" height="40" rx="4" fill="#fff" stroke="#B38B6D" strokeWidth="1.6" />
    <rect x="124" y="115" width="32" height="65" rx="4" fill="#fff" stroke="#B38B6D" strokeWidth="1.6" />
    <rect x="168" y="90" width="32" height="90" rx="4" fill="#8FBC8F" fillOpacity=".30" stroke="#8FBC8F" strokeWidth="1.6" />
    <rect x="212" y="60" width="32" height="120" rx="4" fill="#576DB5" />
    <path d="M80 70 L 230 70" fill="none" stroke="#B38B6D" strokeWidth="1.6" strokeDasharray="3 4" />
    <polyline
      points="220,62 230,70 220,78"
      fill="none"
      stroke="#B38B6D"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MetaCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M 80 120 C 80 86 124 86 160 120 C 196 154 240 154 240 120 C 240 86 196 86 160 120 C 124 154 80 154 80 120 Z"
      fill="none"
      stroke="#576DB5"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="160" cy="120" r="5" fill="#B38B6D" />
  </svg>
);

const SocialCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M76 80 H160 a16 16 0 0 1 16 16 v40 a16 16 0 0 1 -16 16 H110 l-20 20 v-20 H76 a16 16 0 0 1 -16 -16 v-40 a16 16 0 0 1 16 -16 z"
      fill="#fff"
      stroke="#B38B6D"
      strokeWidth="1.8"
    />
    <circle cx="100" cy="118" r="3.5" fill="#B38B6D" />
    <circle cx="120" cy="118" r="3.5" fill="#B38B6D" />
    <circle cx="140" cy="118" r="3.5" fill="#B38B6D" />
    <path
      d="M170 60 H244 a14 14 0 0 1 14 14 v34 a14 14 0 0 1 -14 14 H202 l-16 16 v-16 H170 a14 14 0 0 1 -14 -14 v-34 a14 14 0 0 1 14 -14 z"
      fill="#576DB5"
    />
    <circle cx="190" cy="89" r="3" fill="#fff" />
    <circle cx="208" cy="89" r="3" fill="#fff" />
    <circle cx="226" cy="89" r="3" fill="#fff" />
  </svg>
);

const ContentCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="98" y="62" width="120" height="138" rx="8" fill="#fff" stroke="#B38B6D" strokeOpacity=".45" strokeWidth="1.5" transform="rotate(-4 158 131)" />
    <rect x="100" y="60" width="120" height="138" rx="8" fill="#fff" stroke="#B38B6D" strokeWidth="1.8" />
    <line x1="118" y1="92" x2="200" y2="92" stroke="#B38B6D" strokeWidth="1.5" opacity=".75" />
    <line x1="118" y1="110" x2="200" y2="110" stroke="#B38B6D" strokeWidth="1.5" opacity=".55" />
    <line x1="118" y1="128" x2="180" y2="128" stroke="#B38B6D" strokeWidth="1.5" opacity=".55" />
    <line x1="118" y1="146" x2="200" y2="146" stroke="#B38B6D" strokeWidth="1.5" opacity=".4" />
    <rect x="118" y="166" width="48" height="16" rx="3" fill="#8FBC8F" fillOpacity=".5" />
  </svg>
);

const GbpCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M160 50 C 188 50 208 70 208 98 C 208 132 160 184 160 184 C 160 184 112 132 112 98 C 112 70 132 50 160 50 Z" fill="#fff" stroke="#B38B6D" strokeWidth="1.8" />
    <circle cx="160" cy="98" r="16" fill="#576DB5" />
    <path d="M152 98 L 158 104 L 168 92" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <g fill="#8FBC8F">
      <circle cx="120" cy="206" r="3.2" />
      <circle cx="140" cy="206" r="3.2" />
      <circle cx="160" cy="206" r="3.2" />
      <circle cx="180" cy="206" r="3.2" />
      <circle cx="200" cy="206" r="3.2" />
    </g>
  </svg>
);

const WebCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="68" y="56" width="184" height="128" rx="10" fill="#fff" stroke="#B38B6D" strokeWidth="1.8" />
    <line x1="68" y1="84" x2="252" y2="84" stroke="#B38B6D" strokeWidth="1.5" />
    <circle cx="82" cy="70" r="3" fill="#B38B6D" />
    <circle cx="94" cy="70" r="3" fill="#B38B6D" fillOpacity=".55" />
    <circle cx="106" cy="70" r="3" fill="#B38B6D" fillOpacity=".30" />
    <rect x="86" y="100" width="56" height="68" rx="4" fill="#8FBC8F" fillOpacity=".30" stroke="#8FBC8F" strokeWidth="1.2" />
    <rect x="156" y="100" width="78" height="14" rx="3" fill="#576DB5" fillOpacity=".75" />
    <rect x="156" y="120" width="78" height="6" rx="2" fill="#B38B6D" fillOpacity=".4" />
    <rect x="156" y="132" width="62" height="6" rx="2" fill="#B38B6D" fillOpacity=".3" />
    <rect x="156" y="150" width="48" height="16" rx="4" fill="#576DB5" />
  </svg>
);

const BrandCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="80" y="60" width="46" height="100" rx="6" fill="#576DB5" />
    <rect x="138" y="60" width="46" height="100" rx="6" fill="#B38B6D" />
    <rect x="196" y="60" width="46" height="100" rx="6" fill="#8FBC8F" />
    <text
      x="160"
      y="195"
      fontFamily="Plus Jakarta Sans, sans-serif"
      fontSize="16"
      fontWeight="700"
      fill="#2D3748"
      letterSpacing="-0.5"
      textAnchor="middle"
    >
      Aa  Bb  Cc
    </text>
  </svg>
);

const PrintCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(70, 60)">
      <rect x="0" y="0" width="58" height="120" rx="4" fill="#fff" stroke="#B38B6D" strokeWidth="1.6" />
      <rect x="61" y="0" width="58" height="120" rx="4" fill="#fff" stroke="#B38B6D" strokeWidth="1.6" />
      <rect x="122" y="0" width="58" height="120" rx="4" fill="#576DB5" />
      <line x1="10" y1="20" x2="48" y2="20" stroke="#B38B6D" strokeOpacity=".55" strokeWidth="1.2" />
      <line x1="10" y1="32" x2="42" y2="32" stroke="#B38B6D" strokeOpacity=".4" strokeWidth="1.2" />
      <rect x="69" y="14" width="42" height="56" rx="2" fill="#8FBC8F" fillOpacity=".35" />
      <line x1="69" y1="80" x2="111" y2="80" stroke="#B38B6D" strokeOpacity=".5" strokeWidth="1.2" />
      <line x1="69" y1="92" x2="105" y2="92" stroke="#B38B6D" strokeOpacity=".4" strokeWidth="1.2" />
      <text x="151" y="38" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="2">
        CARE
      </text>
      <line x1="135" y1="56" x2="167" y2="56" stroke="#fff" strokeOpacity=".7" strokeWidth="1" />
    </g>
  </svg>
);

const StrategyCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="170" cy="120" r="76" fill="none" stroke="#B38B6D" strokeOpacity=".45" strokeWidth="1.5" strokeDasharray="4 6" />
    <circle cx="170" cy="120" r="50" fill="none" stroke="#B38B6D" strokeOpacity=".7" strokeWidth="1.5" />
    <circle cx="170" cy="120" r="26" fill="#fff" stroke="#576DB5" strokeWidth="1.8" />
    <circle cx="170" cy="120" r="8" fill="#576DB5" />
    <line x1="78" y1="50" x2="163" y2="113" stroke="#B38B6D" strokeWidth="2" strokeLinecap="round" />
    <polygon points="74,64 74,42 92,52" fill="#B38B6D" />
  </svg>
);

const FieldCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="160" cy="130" r="86" fill="none" stroke="#B38B6D" strokeOpacity=".30" strokeWidth="1.2" strokeDasharray="3 5" />
    <circle cx="160" cy="130" r="58" fill="none" stroke="#B38B6D" strokeOpacity=".5" strokeWidth="1.2" strokeDasharray="3 5" />
    <rect x="123" y="78" width="74" height="84" rx="3" fill="#fff" stroke="#B38B6D" strokeWidth="1.8" />
    <rect x="153" y="100" width="14" height="40" fill="#8FBC8F" fillOpacity=".50" />
    <rect x="139" y="113" width="42" height="14" fill="#8FBC8F" fillOpacity=".50" />
    <rect x="197" y="110" width="40" height="52" rx="2" fill="#576DB5" fillOpacity=".18" stroke="#576DB5" strokeWidth="1.2" />
    <rect x="83" y="110" width="40" height="52" rx="2" fill="#576DB5" fillOpacity=".18" stroke="#576DB5" strokeWidth="1.2" />
    <circle cx="160" cy="130" r="5" fill="#576DB5" />
  </svg>
);

const AnalyticsCard = (
  <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="160" cy="120" r="60" fill="none" stroke="#B38B6D" strokeWidth="22" strokeDasharray="120 376" transform="rotate(-90 160 120)" />
    <circle cx="160" cy="120" r="60" fill="none" stroke="#576DB5" strokeWidth="22" strokeDasharray="84 376" strokeDashoffset="-120" transform="rotate(-90 160 120)" />
    <circle cx="160" cy="120" r="60" fill="none" stroke="#8FBC8F" strokeWidth="22" strokeDasharray="64 376" strokeDashoffset="-204" transform="rotate(-90 160 120)" />
    <circle cx="160" cy="120" r="46" fill="#FAFAF8" />
    <text x="160" y="116" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="22" fontWeight="700" fill="#2D3748" textAnchor="middle">
      87%
    </text>
    <text x="160" y="136" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="9" fontWeight="700" fill="#718096" textAnchor="middle" letterSpacing="2">
      ROI
    </text>
  </svg>
);

const SERVICES: ServiceItem[] = [
  { href: 'https://thenextgenhealth.com/services/seo-local-search', ariaId: 'svc-1', illustration: SeoCard, meta: 'Search', title: 'SEO & Local Search', sub: 'Rank for the searches that bring patients to your door.' },
  { href: 'https://thenextgenhealth.com/services/google-ads', ariaId: 'svc-2', illustration: AdsCard, meta: 'Paid Media', title: 'Google Ads & Paid Search', sub: 'High-intent traffic with weekly ROI optimization.' },
  { href: 'https://thenextgenhealth.com/services/meta-ads', ariaId: 'svc-3', illustration: MetaCard, meta: 'Social Ads', title: 'Meta Ads', sub: 'Conversion-focused campaigns on Facebook & Instagram.' },
  { href: 'https://thenextgenhealth.com/services/social-media-marketing', ariaId: 'svc-4', illustration: SocialCard, meta: 'Social', title: 'Social Media Marketing', sub: 'Show up where your patients spend their time.' },
  { href: 'https://thenextgenhealth.com/services/content-copywriting', ariaId: 'svc-5', illustration: ContentCard, meta: 'Content', title: 'Content & Copywriting', sub: 'Healthcare content that ranks & converts.' },
  { href: 'https://thenextgenhealth.com/services/google-business-profile', ariaId: 'svc-6', illustration: GbpCard, meta: 'Local', title: 'Google Business Profile', sub: 'Dominate the Local Pack with weekly GBP optimization.' },
  { href: 'https://thenextgenhealth.com/services/website-design-dev', ariaId: 'svc-7', illustration: WebCard, meta: 'Web', title: 'Website Design & Development', sub: 'Fast, accessible sites built to convert.', extra: true },
  { href: 'https://thenextgenhealth.com/services/brand-identity-design', ariaId: 'svc-8', illustration: BrandCard, meta: 'Identity', title: 'Brand Identity Design', sub: 'Memorable visual systems for healthcare brands.', extra: true },
  { href: 'https://thenextgenhealth.com/services/brochure-print-design', ariaId: 'svc-9', illustration: PrintCard, meta: 'Print', title: 'Brochure & Print Design', sub: 'Patient-facing print collateral that builds trust.', extra: true },
  { href: 'https://thenextgenhealth.com/services/strategy-planning', ariaId: 'svc-10', illustration: StrategyCard, meta: 'Strategy', title: 'Strategy & Planning', sub: 'Roadmaps grounded in data & clinical reality.', extra: true },
  { href: 'https://thenextgenhealth.com/services/onsite-field-marketing', ariaId: 'svc-11', illustration: FieldCard, meta: 'Field', title: 'Onsite Field Marketing', sub: 'Community presence that drives walk-in volume.', extra: true },
  { href: 'https://thenextgenhealth.com/services/analytics-reporting', ariaId: 'svc-12', illustration: AnalyticsCard, meta: 'Insights', title: 'Analytics & Reporting', sub: 'Real-time dashboards tied to revenue.', extra: true },
];

const CardArrow = () => (
  <span className="svc-card-arrow" aria-hidden="true">
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const ServicesList = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="svc-list"
      id="all-services"
      data-expanded={expanded}
      aria-labelledby="svc-list-title"
    >
      <div className="container-shell">
        <div className="svc-list-head">
          <span className="svc-list-eyebrow">Our Services</span>
          <h2 id="svc-list-title" className="svc-list-h2">
            Our Services.
          </h2>
          <p className="svc-list-sub">
            Everything your healthcare practice needs to own the digital space
            &mdash; from search visibility to brand identity.
          </p>
          <div className="svc-list-all">
            <span>12 Capabilities</span>
            <span className="bar" />
            <span>Full-Service Coverage</span>
          </div>
        </div>

        <div className="svc-cards">
          {SERVICES.map(({ href, ariaId, illustration, meta, title, sub, extra }) => (
            <a
              key={ariaId}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`svc-card${extra ? ' is-extra' : ''}`}
              aria-labelledby={ariaId}
            >
              <div className="svc-card-img">
                {illustration}
                <CardArrow />
              </div>
              <span className="svc-card-meta">{meta}</span>
              <h3 id={ariaId} className="svc-card-title">
                {title}
              </h3>
              <p className="svc-card-sub">{sub}</p>
            </a>
          ))}
        </div>

        <div className="svc-more-row">
          <button
            type="button"
            className="svc-more-btn"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="all-services"
          >
            {expanded ? 'Show less' : 'See more services'}
            <span className="ico" aria-hidden="true">
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
