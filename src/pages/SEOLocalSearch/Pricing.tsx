interface Tier {
  name: string;
  price: string;
  unit: string;
  tagline: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'Starter',
    price: '$2,500',
    unit: '/mo',
    tagline: 'Single-location practices, first real SEO program.',
    features: [
      'Local Pack & GBP',
      'Technical SEO',
      '2 condition pages / month',
      'Monthly report',
    ],
    cta: 'Talk to us',
    href: '/contact',
  },
  {
    name: 'Growth',
    price: '$4,500',
    unit: '/mo',
    tagline: '2–10 locations ready to compound quarter over quarter.',
    features: [
      'Everything in Starter',
      'Per-location pages + GBP',
      'Authority backlink program',
      'Live dashboard + weekly Loom',
    ],
    cta: 'Book a call',
    href: '/contact',
    featured: true,
  },
  {
    name: 'Scale',
    price: '$7,500',
    unit: '+/mo',
    tagline: 'Specialty networks and groups with custom data needs.',
    features: [
      'Everything in Growth',
      'Dedicated lead + analyst',
      'Custom EHR/CRM integrations',
      'HIPAA architecture review',
    ],
    cta: 'Request scope',
    href: '/contact',
  },
];

const Check = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="sl-section sl-pricing">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">05 - Pricing</div>
            <h2 className="sl-sec-title">
              Three plans. <em>Same playbook.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            3-month minimum
            <br />
            then month-to-month
          </div>
        </div>

        <div className="sl-pr-grid">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`sl-pr-card${t.featured ? ' featured' : ''}`}
            >
              {t.featured && <span className="sl-pr-tag">Most popular</span>}
              <div className="sl-pr-name">{t.name}</div>
              <div className="sl-pr-price">
                {t.price}
                <small>{t.unit}</small>
              </div>
              <p className="sl-pr-tagline">{t.tagline}</p>
              <ul className="sl-pr-list">
                {t.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={t.href} className="sl-pr-btn">
                {t.cta}
                <ArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
