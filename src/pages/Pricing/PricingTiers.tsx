interface Tier {
  featured?: boolean;
  badge?: string;
  name: string;
  amount: string;
  period?: string;
  tagline: string;
  bestFor: string;
  ctaLabel: string;
  ctaHref: string;
  includesLabel: string;
  includes: string[];
  notLabel?: string;
  notIncluded?: string[];
  notesLabel?: string;
  notes?: string[];
}

const TIERS: Tier[] = [
  {
    name: 'Starter Care',
    amount: '$5,000',
    period: '/ month',
    tagline:
      'Perfect for elective procedures and high-research patient journeys.',
    bestFor:
      'Single-location clinics ready to build their digital foundation.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://thenextgenhealth.com/signup',
    includesLabel: 'Package Includes',
    includes: [
      'Advanced SEO & Local Search Optimization',
      'Google My Business Management',
      'Targeted Google Ads & Meta Campaigns',
      'AI Chatbot & Call Tracking Setup',
      'Monthly Strategy & Performance Reports',
      'Content Creation & Social Media',
    ],
    notLabel: 'Not Included',
    notIncluded: [
      'Advanced AI call handling',
      'Multi-location campaigns',
      'Custom software development',
    ],
  },
  {
    featured: true,
    badge: 'Most Popular',
    name: 'Growth Pro',
    amount: '$10,000',
    period: '/ month',
    tagline:
      'High-acuity, rapid-response systems for immediate-need facilities.',
    bestFor: 'Clinics ready to scale acquisition fast.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://thenextgenhealth.com/signup',
    includesLabel: 'Everything in Starter, plus',
    includes: [
      'High-Budget Google Ads Management',
      'Advanced AI Call Handling & Triage',
      'Real-Time Insurance Verification Bots',
      'Priority Support & Rapid SLA Response',
      'Multi-Location Campaign Orchestration',
      '24/7 Performance Monitoring',
      'Dedicated Account Manager',
    ],
    notLabel: 'Not Included',
    notIncluded: [
      'Custom software development',
      'Multi-state network management',
    ],
  },
  {
    name: 'Scale Elite',
    amount: 'Custom',
    tagline: 'Comprehensive growth engine for large healthcare networks.',
    bestFor: 'Multi-location teams needing advanced automation.',
    ctaLabel: 'Get Started',
    ctaHref: 'https://thenextgenhealth.com/signup',
    includesLabel: 'Everything in Pro, plus',
    includes: [
      'Custom Software Development',
      'HIPAA-Compliant API Integrations',
      'Multi-State Network Management',
      'Advanced Analytics & BI Dashboards',
      'Custom Automation Workflows',
      'White-Glove Onboarding',
      'Dedicated Development Team',
      'Enterprise SLA & Support',
    ],
    notesLabel: 'Pricing Notes',
    notes: ['Custom-scoped per network size', 'Dedicated implementation lead'],
  },
];

const CheckIcon = () => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg
    width={9}
    height={9}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PricingTiers = () => {
  return (
    <section className="pr-tiers" aria-labelledby="pr-tiers-title">
      <div className="container-shell">
        <div className="pr-section-head">
          <span className="pr-section-eyebrow">Choose Your Retainer</span>
          <h2 id="pr-tiers-title" className="pr-section-h2">
            Three tiers. One philosophy: outcomes over hours.
          </h2>
          <p className="pr-section-sub">
            All retainers are HIPAA-compliant by default with a 30-day launch
            sprint. Choose the tier that matches your scale and growth velocity.
          </p>
        </div>

        <div className="pr-tiers-grid">
          {TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`pr-tier${tier.featured ? ' is-featured' : ''}`}
            >
              {tier.badge && (
                <span className="pr-tier-badge">{tier.badge}</span>
              )}
              <span className="pr-tier-name">{tier.name}</span>
              <div className="pr-tier-price">
                <span className="pr-tier-amount">{tier.amount}</span>
                {tier.period && (
                  <span className="pr-tier-period">{tier.period}</span>
                )}
              </div>
              <p className="pr-tier-tagline">{tier.tagline}</p>

              <div className="pr-tier-bestfor">
                <span className="pr-tier-bestfor-label">Best For</span>
                <span className="pr-tier-bestfor-text">{tier.bestFor}</span>
              </div>

              <a
                href={tier.ctaHref}
                className="pr-tier-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {tier.ctaLabel}
                <ArrowRight />
              </a>

              <span className="pr-tier-section-label">
                {tier.includesLabel}
              </span>
              <ul className="pr-tier-list">
                {tier.includes.map((item) => (
                  <li key={item}>
                    <span className="check">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {tier.notIncluded && tier.notIncluded.length > 0 && (
                <>
                  <div className="pr-tier-divider" />
                  <span className="pr-tier-section-label">{tier.notLabel}</span>
                  <ul className="pr-tier-list is-not">
                    {tier.notIncluded.map((item) => (
                      <li key={item}>
                        <span className="x">
                          <XIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {tier.notes && tier.notes.length > 0 && (
                <>
                  <div className="pr-tier-divider" />
                  <span className="pr-tier-section-label">
                    {tier.notesLabel}
                  </span>
                  <ul className="pr-tier-list">
                    {tier.notes.map((item) => (
                      <li key={item}>
                        <span className="check">
                          <CheckIcon />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
