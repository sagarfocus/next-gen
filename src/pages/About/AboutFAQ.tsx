import { useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: ReactNode;
  defaultOpen?: boolean;
}

const FAQS: FAQItem[] = [
  {
    q: 'Are you actually HIPAA-compliant, or just claiming it?',
    a: (
      <>
        We sign <strong>Business Associate Agreements (BAAs)</strong> with every
        client. Our infrastructure runs on BAA-ready hosting, encrypted forms,
        and audited data routing. Our Head of Compliance personally reviews
        every funnel before launch - we have a 98% HIPAA audit pass rate.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'Do you only work with healthcare practices?',
    a: (
      <>
        <strong>100% healthcare.</strong> We turn down e-commerce, real estate,
        and general SaaS clients. Specialization is what lets us go deep on
        patient acquisition models, regulatory edges, and clinical workflow
        integration that generalists can&rsquo;t match.
      </>
    ),
  },
  {
    q: 'What kind of practices do you typically work with?',
    a: (
      <>
        Freestanding ERs, urgent care, MedSpas, dental, primary care, mental
        health, chiropractic, plastic surgery, ophthalmology, and dermatology
        - mostly Texas-based. We&rsquo;ve served{' '}
        <strong>200+ practices</strong> ranging from single-location clinics to
        multi-site groups.
      </>
    ),
  },
  {
    q: 'How fast do you typically deliver results?',
    a: (
      <>
        Paid channels usually drive measurable patient leads within{' '}
        <strong>14&ndash;30 days</strong> of launch. Local SEO is a 90&ndash;180
        day curve depending on your starting position. Our average client sees a{' '}
        <strong>3&times; ROI lift within 90 days</strong> - though
        high-acuity verticals (FSEDs, urgent care) often move faster.
      </>
    ),
  },
  {
    q: 'Do you replace or work alongside our internal team?',
    a: (
      <>
        Either model works. Most clients use us as their{' '}
        <strong>full marketing department</strong> (no internal hires needed).
        Larger groups embed us alongside a marketing director for execution
        muscle. We&rsquo;re flexible - what matters is the patient
        acquisition outcome.
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

const AboutFAQ = () => {
  const defaultIndex = FAQS.findIndex((f) => f.defaultOpen);
  const [openIndex, setOpenIndex] = useState<number | null>(defaultIndex >= 0 ? defaultIndex : null);

  return (
    <section className="faq-section" id="faq" aria-labelledby="ab-faq-title">
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Your Questions, Answered</span>
            <h2 id="ab-faq-title" className="faq-h2">
              Frequently <br />
              Asked <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              Everything you need to know about working with TheNextGen -
              from compliance and reporting to clinic specialties and engagement
              models.
            </p>

            <div className="still-card">
              <h3>Still have questions?</h3>
              <p>
                Every healthcare practice has different operational realities
                and compliance edges. If there&rsquo;s anything you&rsquo;d like
                to clarify about how we work, pricing, or fit, our team is here
                to help.
              </p>
              <p>
                Reach out anytime - we&rsquo;ll walk you through every
                detail before any commitment.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className="faq-item"
                open={openIndex === i}
                onToggle={(e) => {
                  const isOpen = (e.currentTarget as HTMLDetailsElement).open;
                  if (isOpen && openIndex !== i) setOpenIndex(i);
                  else if (!isOpen && openIndex === i) setOpenIndex(null);
                }}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(openIndex === i ? null : i);
                  }}
                >
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

export default AboutFAQ;
