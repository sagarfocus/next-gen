import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import { FAQS } from '@/content/about/faqs';

const FAQChevron = () => (
  <span className="faq-chev" aria-hidden="true">
    <span className="plus-h" />
    <span className="plus-v" />
  </span>
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
                <ArrowIcon size={14} strokeWidth={2} />
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
