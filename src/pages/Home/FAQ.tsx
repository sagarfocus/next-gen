import type { ReactNode } from 'react';
import { ArrowIcon } from '@/components/icons';

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
    q: 'How quickly will I see results from your healthcare marketing?',
    a: (
      <>
        Most clients see <strong>tangible movement within 30 days</strong> - improved Google
        Business Profile visibility, faster page loads, and the first paid-media leads. Sustained
        organic growth from SEO typically compounds across months 3&ndash;6 as content, backlinks,
        and on-page work mature.
      </>
    ),
    defaultOpen: true,
  },
  {
    q: 'Are your campaigns and tools HIPAA-aware?',
    a: (
      <>
        Yes. We follow HIPAA-aware practices across tracking, ad targeting, intake forms, and
        reporting - including server-side conversion tracking, compliant pixel use, and BAA-ready
        vendor selection where applicable. We are not a covered entity, so we work alongside your
        compliance officer to ensure end-to-end alignment.
      </>
    ),
  },
  {
    q: 'What size practices do you typically work with?',
    a: (
      <>
        From <strong>single-location clinics and medspas</strong> to{' '}
        <strong>multi-location healthcare networks</strong>. Our methodology scales: smaller
        practices benefit from the full Clinic Growth OS, while larger networks plug us into
        existing teams to amplify performance and reporting.
      </>
    ),
  },
  {
    q: "What's included in your monthly engagement?",
    a: (
      <>
        Strategy, execution, and reporting across SEO, paid media (Google &amp; Meta), social,
        content, automation, and weekly optimization - plus a dedicated growth lead and a real-time
        analytics dashboard. Every plan is tailored to your goals; nothing is bolted on.
      </>
    ),
  },
  {
    q: 'Do I need a long-term contract to work with you?',
    a: (
      <>
        No long lock-ins. We recommend a <strong>minimum 90-day engagement</strong> so the system
        has time to compound, but month-to-month options are available after the initial setup
        phase. Cancel, downgrade, or scale anytime - no hidden fees.
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

const FAQ = ({ onBook }: FAQProps) => {
  return (
    <section className="faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container-shell">
        <div className="faq-grid">
          {/* LEFT: heading + still-have-questions card */}
          <div className="faq-left">
            <span className="faq-eyebrow">Your Questions, Answered</span>
            <h2 id="faq-title" className="faq-h2">
              Frequently <br />
              Asked <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              Everything you need to know about working with TheNextGen - from compliance and
              reporting to timelines and engagement length.
            </p>

            <div className="still-card">
              <h3>Still have questions?</h3>
              <p>
                We understand every clinic is different. If there&rsquo;s anything you&rsquo;d like
                to clarify about pricing, services, or how we&rsquo;ll fit into your workflow, our
                team is here to help.
              </p>
              <p>
                Reach out anytime - we&rsquo;ll walk you through every detail to make sure you get
                the most out of our platform.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={onBook}
                aria-haspopup="dialog"
                aria-controls="bookingModal"
              >
                Book a Demo
                <ArrowIcon size={14} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* RIGHT: accordion */}
          <div className="faq-right">
            {FAQS.map(({ q, a, defaultOpen }) => (
              <details
                key={q}
                className="faq-item"
                name="home-faq"
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

export default FAQ;
