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
    q: 'Do you specialize in specific healthcare verticals or work across all of them?',
    a: (
      <>
        We focus exclusively on <strong>healthcare and wellness</strong> -
        from Freestanding ERs and Urgent Care to MedSpas, Dental, Mental Health,
        Chiropractic, Plastic Surgery, Ophthalmology, and Dermatology. Each
        vertical gets its own tailored playbook because patient psychology,
        acquisition cost, and compliance rules differ dramatically across
        specialties.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'How does your strategy change between an Emergency Room and a MedSpa?',
    a: (
      <>
        ERs require <strong>24/7 high-acuity visibility</strong>, trauma-intent
        keyword capture, and competitor overflow strategy. MedSpas live on{' '}
        <strong>aesthetic-led social, Meta campaigns, and LTV-driven email
        nurturing</strong>. We don&rsquo;t reuse templates - ER ad copy
        speaks to urgency and trust; MedSpa creative speaks to outcomes,
        aspiration, and financing options.
      </>
    ),
  },
  {
    q: 'Can you handle multi-specialty practices or location networks?',
    a: (
      <>
        Yes. Multi-location and multi-specialty groups are one of our strengths.
        We build <strong>per-service-line landing pages</strong>, location-level
        GBP optimization, and unified reporting that rolls up by region or
        specialty - so your CMO sees the whole picture and each clinic
        gets credit for its own lift.
      </>
    ),
  },
  {
    q: 'How long until I see results for my specific industry?',
    a: (
      <>
        High-intent verticals (Urgent Care, ER, Dental emergencies) typically
        show paid-media leads within <strong>2&ndash;3 weeks</strong>. Elective
        verticals (MedSpa, Plastic Surgery, LASIK) need 30&ndash;60 days to
        warm up retargeting audiences. Organic + Local SEO compounds across{' '}
        <strong>months 3&ndash;6</strong> for every vertical.
      </>
    ),
  },
  {
    q: 'How do you handle compliance across different industries?',
    a: (
      <>
        Every vertical has different exposure - Mental Health is HIPAA
        plus state telehealth rules, MedSpas balance FDA cosmetic claim limits,
        ERs work with EMTALA-adjacent messaging. We use{' '}
        <strong>server-side tracking, BAA-ready vendors, and pre-approved
        creative libraries</strong> tailored to each specialty&rsquo;s
        regulatory landscape.
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

const IndustriesFAQ = ({ onBook }: FAQProps) => {
  return (
    <section
      className="faq-section"
      id="industries-faq"
      aria-labelledby="ind-faq-title"
    >
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Industry Questions, Answered</span>
            <h2 id="ind-faq-title" className="faq-h2">
              Vertical-specific <br />
              <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              How we tailor strategy, compliance, and timelines for every
              healthcare specialty we serve - from high-acuity ER traffic
              to elective aesthetic acquisition.
            </p>

            <div className="still-card">
              <h3>Don&rsquo;t see your specialty?</h3>
              <p>
                We work across more verticals than we list. If you run a
                healthcare or wellness practice with patients to acquire,
                let&rsquo;s talk - we&rsquo;ll tell you honestly whether
                our playbook fits your specialty.
              </p>
              <p>
                One call. No pitch deck. We&rsquo;ll audit your current funnel
                and tell you the three biggest gaps in your vertical.
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
                name="industries-faq"
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
    </section>
  );
};

export default IndustriesFAQ;
