import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

const FAQS: FAQItem[] = [
  {
    q: 'What is actually included in the monthly retainer?',
    a: (
      <>
        Every tier covers the full growth stack we&rsquo;re running on your
        behalf -{' '}
        <strong>
          strategy, local SEO, Google Business Profile management, paid media
          management on Google &amp; Meta, content production, server-side
          conversion tracking, monthly reporting, and a dedicated point of
          contact
        </strong>
        . Higher tiers add advanced AI call handling, multi-location
        orchestration, and 24/7 monitoring. Ad spend, custom software builds,
        and one-off website rebuilds are scoped separately.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'Is ad spend included in the retainer, or do I pay Google & Meta separately?',
    a: (
      <>
        <strong>Ad spend is separate.</strong> The retainer covers our team
        time - strategy, creative, campaign builds, optimisation,
        tracking, and reporting. Ad budget is billed directly to your card by
        Google and Meta so you keep full ownership of the accounts, the audit
        trail, and the historical data. Typical starting ad budgets run{' '}
        <strong>$3K&ndash;$15K/month</strong> depending on tier, market, and
        service lines, and we&rsquo;ll recommend a number that&rsquo;s
        defensible against your patient-LTV math.
      </>
    ),
  },
  {
    q: 'What is the minimum contract length and can I cancel?',
    a: (
      <>
        We ask for a <strong>90-day initial commitment</strong> - SEO,
        review velocity, and audience-warming work need at least that to
        compound and prove out. After day 90 you&rsquo;re on a{' '}
        <strong>30-day rolling agreement</strong>, cancel anytime with written
        notice. We hand back full ownership of ad accounts, GBP, website, and
        every asset we built. No clawbacks, no &ldquo;agency lock&rdquo;
        contracts.
      </>
    ),
  },
  {
    q: 'How is Scale Elite priced - what makes it “custom”?',
    a: (
      <>
        Scale Elite is for <strong>multi-location groups, DSOs, and
        healthcare networks</strong> where the marketing engine has to coordinate
        across sites, payer mixes, and service lines. Pricing is scoped to
        location count, ad-spend tier, and whether the engagement includes{' '}
        <strong>custom software, EHR integrations, AI triage builds, or
        multi-state compliance work</strong>. Most Scale Elite retainers land
        between <strong>$18K and $45K/month</strong>; we share an exact number
        after a 60-minute scoping call.
      </>
    ),
  },
  {
    q: 'When should I expect to see ROI, and what does payback look like?',
    a: (
      <>
        Local Pack and GBP wins typically show in{' '}
        <strong>30&ndash;60 days</strong>. Paid media bridges the gap from
        week one so booked appointments start moving immediately. Most clients
        cross retainer break-even on net-new patient revenue between{' '}
        <strong>month 2 and month 4</strong>; SEO and content compound through
        month 6+. We model the LTV-to-spend math during onboarding and put a{' '}
        <strong>specific revenue target on every quarter</strong> - if
        we miss the target two quarters in a row, the next quarter is on us.
      </>
    ),
  },
];

const FAQChevron = () => (
  <span className="faq-chev" aria-hidden="true">
    <span className="plus-h" />
    <span className="plus-v" />
  </span>
);

const ArrowIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PricingFAQ = () => {
  return (
    <section
      className="faq-section pr-faq"
      id="pricing-faq"
      aria-labelledby="pr-faq-title"
    >
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Pricing, Scope &amp; Terms</span>
            <h2 id="pr-faq-title" className="faq-h2">
              Pricing <br />
              <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              What the retainer actually covers, how ad spend works, what
              you&rsquo;re committing to, and when the math typically pays
              back - written for the people signing the cheque.
            </p>

            <div className="still-card">
              <h3>Not sure which tier fits?</h3>
              <p>
                Send us your current ad spend, patient LTV, and the one number
                you&rsquo;d most like to move - we&rsquo;ll recommend
                Starter, Growth, or Scale on the call. No template proposals.
              </p>
              <p>
                One 30-minute call. You leave with a tier recommendation, an
                ad-spend range, and a 90-day revenue target.
              </p>
              <Link to="/contact" className="btn-primary">
                Get a Tier Recommendation
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map(({ q, a, defaultOpen }) => (
              <details
                key={q}
                className="faq-item"
                name="pricing-faq"
                {...(defaultOpen ? { open: true } : {})}
              >
                <summary>
                  <span className="faq-q">{q}</span>
                  <FAQChevron />
                </summary>
                <p className="faq-a">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: extractText(a),
              },
            })),
          }),
        }}
      />
    </section>
  );
};

function extractText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

export default PricingFAQ;
