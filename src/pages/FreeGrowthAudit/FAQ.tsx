import { useState } from 'react';
import { FAQ_ITEMS } from './data';

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="fga-faq" aria-labelledby="fga-faq-title">
      <div className="container-shell">
        <header className="fga-section-head">
          <span className="fga-section-tag">Common questions</span>
          <h2 id="fga-faq-title" className="fga-section-h2">
            Everything practice owners ask before booking.
          </h2>
          <p className="fga-section-lede">
            If your question isn&rsquo;t here, the answer is almost always &ldquo;yes, and the audit
            will confirm it.&rdquo; Submit the form and ask in the request notes.
          </p>
        </header>

        <ol className="fga-faq-list">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={`fga-faq-item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className="fga-faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`fga-faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="fga-faq-q-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fga-faq-q-text">{item.q}</span>
                  <span className="fga-faq-q-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`fga-faq-a-${i}`}
                  className="fga-faq-a"
                  role="region"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default FAQ;
