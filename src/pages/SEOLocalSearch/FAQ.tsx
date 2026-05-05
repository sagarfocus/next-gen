import { useState } from 'react';

interface QA {
  num: string;
  q: string;
  a: string;
}

const QAS: QA[] = [
  {
    num: '06.01',
    q: 'How soon will I see results?',
    a: 'Local Pack movement in weeks 4–6. Organic traffic from condition pages compounds over 3–4 months. Authority gains land at 6–9 months.',
  },
  {
    num: '06.02',
    q: 'Do you guarantee rankings?',
    a: 'No honest agency does. We guarantee process — audits, deliverables, weekly reviews — and measure ourselves against booked appointments and revenue, not vanity rankings.',
  },
  {
    num: '06.03',
    q: 'What if we have multiple locations?',
    a: 'Each location gets its own GBP, landing page, and review program — under one shared brand authority and content engine. No template-copy traps.',
  },
  {
    num: '06.04',
    q: 'What happens if we stop the engagement?',
    a: "Foundational work stays with you. You'll feel slowdown in 4–6 months as fresh content stops shipping. We hand off all assets clean — accounts, dashboards, drafts — at exit.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<string | null>(QAS[0].num);

  const toggle = (num: string) => {
    setOpen((cur) => (cur === num ? null : num));
  };

  return (
    <section className="sl-section sl-faq">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">06 — Common questions</div>
            <h2 className="sl-sec-title">The four most asked.</h2>
          </div>
          <div className="sl-sec-meta">
            More on the
            <br />
            resources page
          </div>
        </div>

        <div className="sl-faq-list">
          {QAS.map((qa) => {
            const isOpen = open === qa.num;
            return (
              <div
                key={qa.num}
                className={`sl-faq-item${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="sl-faq-q"
                  onClick={() => toggle(qa.num)}
                  aria-expanded={isOpen}
                >
                  <span className="sl-faq-q-num">{qa.num}</span>
                  <span className="sl-faq-q-text">{qa.q}</span>
                  <span className="sl-faq-q-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div className="sl-faq-a">
                  <div className="sl-faq-a-inner">{qa.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
