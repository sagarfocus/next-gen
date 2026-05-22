import { ArrowIcon } from '@/components/icons';
import { FAQS } from '@/content/industries/faqs';

interface FAQProps {
  onBook: () => void;
}

const FAQChevron = () => (
  <span className="faq-chev" aria-hidden="true">
    <span className="plus-h" />
    <span className="plus-v" />
  </span>
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
                <ArrowIcon size={14} strokeWidth={2} />
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
