import type { ReactNode } from 'react';

interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

interface FAQProps {
  onBook: () => void;
}

const FAQS: FAQItem[] = [
  {
    q: 'What healthcare marketing services do you actually deliver?',
    a: (
      <>
        We run a full healthcare growth stack under one roof -{' '}
        <strong>local SEO, Google Business Profile optimization, Google &amp;
        Meta paid media, content + schema, conversion-focused website builds,
        review and reputation engines, and HIPAA-aware tracking</strong>. On
        top of that, we ship <strong>custom software and clinical automation
        / AI workflows</strong> when your growth bottleneck is operational, not
        marketing. Most clients engage us as their outsourced growth team
        rather than a single-channel vendor.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'How long does SEO take to grow patient bookings?',
    a: (
      <>
        Local Pack and Google Business Profile wins typically show in the first{' '}
        <strong>30&ndash;60 days</strong> - category accuracy, photo
        cadence, review velocity, NAP consistency, and on-page schema fixes
        move fast. Organic search rankings for high-intent service keywords
        compound through <strong>months 3&ndash;6</strong>, and the long-tail
        content / authority work lifts traffic across{' '}
        <strong>months 6&ndash;12</strong>. Paid media bridges the gap from day
        one so you have booked appointments while organic catches up.
      </>
    ),
  },
  {
    q: 'Should we run Google Ads, Meta Ads, or both?',
    a: (
      <>
        It depends on intent. <strong>Google Ads</strong> captures patients
        already searching (urgent care, ER, emergency dental, "near me" terms)
        - high CPC but high intent.{' '}
        <strong>Meta &amp; Instagram Ads</strong> create demand for elective
        and aesthetic services (MedSpa, plastic surgery, orthodontics) where
        the patient hasn&rsquo;t typed a search query yet. Most multi-service
        clinics run both, weighted by service line. We rebuild your tracking
        with <strong>server-side conversions and offline conversion uploads</strong>{' '}
        so spend gets attributed to actual booked revenue, not just form fills.
      </>
    ),
  },
  {
    q: 'What custom software, automations, and AI workflows can you build for a clinic?',
    a: (
      <>
        Anything that lives between your marketing engine and your clinical
        ops. Common builds:{' '}
        <strong>AI patient triage chatbots, intake form automations, EHR /
        practice-management API integrations, automated recall and no-show
        recovery sequences, real-time reporting dashboards, and HIPAA-compliant
        patient portals</strong>. We deploy these on top of your existing stack
        (Athena, eClinicalWorks, NextGen, Epic, OpenDental, etc.) so the front
        desk runs lighter and marketing data flows back into the EHR cleanly.
      </>
    ),
  },
  {
    q: 'How do you keep tracking, retargeting, and ad creative HIPAA-compliant?',
    a: (
      <>
        We rebuilt our tracking stack after Meta&rsquo;s 2023 healthcare audit
        and the FTC&rsquo;s pixel guidance. Standard kit:{' '}
        <strong>server-side GTM, hashed conversions, IP redaction, BAA-covered
        vendors, custom-event-only retargeting (never PHI-based audiences),
        and clinical-claim review on every paid ad</strong>. We also stand up
        consent banners and explicit opt-ins where state telehealth or
        therapy rules require them. If a vendor in your funnel can&rsquo;t
        sign a BAA, we route around it.
      </>
    ),
  },
  {
    q: 'Do you charge per service or as a bundled monthly retainer?',
    a: (
      <>
        Mostly <strong>monthly retainers</strong> - that&rsquo;s how
        compounding channels (SEO, content, review velocity, retargeting
        audiences) actually pay back. Retainers are scoped by service mix and
        ad-spend tier, with a flat strategy fee on top so the agency makes
        money on outcomes, not ad-buying volume. One-off engagements
        (website rebuilds, custom software, automation projects, audit-only
        engagements) are quoted as <strong>fixed-fee projects</strong>. We share
        pricing on the discovery call once we&rsquo;ve seen your funnel.
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

const ServicesFAQ = ({ onBook }: FAQProps) => {
  return (
    <section
      className="faq-section"
      id="services-faq"
      aria-labelledby="svc-faq-title"
    >
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Services, Pricing &amp; Scope</span>
            <h2 id="svc-faq-title" className="faq-h2">
              Service <br />
              <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              How scope, timelines, ad budgets, compliance, and engagement
              model actually work when you bring on a healthcare growth
              partner - written for the people doing the hiring.
            </p>

            <div className="still-card">
              <h3>Need a custom scope?</h3>
              <p>
                Multi-location group, brand-new launch, or an existing agency
                you&rsquo;re ready to replace - we&rsquo;ll size the
                engagement to your stage. No template proposals.
              </p>
              <p>
                One call. We&rsquo;ll audit your current funnel, name the
                three biggest revenue leaks, and tell you which services would
                actually move them.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={onBook}
                aria-haspopup="dialog"
                aria-controls="bookingModal"
              >
                Book a Free Audit
                <ArrowIcon />
              </button>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map(({ q, a, defaultOpen }) => (
              <details
                key={q}
                className="faq-item"
                name="services-faq"
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
                text: typeof a === 'string' ? a : extractText(a),
              },
            })),
          }),
        }}
      />
    </section>
  );
};

// Strip JSX/markup to plain text for the FAQPage schema payload.
function extractText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

export default ServicesFAQ;
