import { useState } from 'react';

export interface ServiceFAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  sectionNum?: string;
  title?: string;
  meta?: string;
  items: ServiceFAQItem[];
  /**
   * Service name used to compose the FAQPage JSON-LD @id. Pass the same
   * string used by the parent SERVICE_SCHEMA so search engines correlate
   * the questions with the service.
   */
  serviceName: string;
}

const pad = (n: number) => String(n + 1).padStart(2, '0');

const ServiceFAQ = ({
  sectionNum = '05',
  title = 'Questions we hear most.',
  meta,
  items,
  serviceName,
}: ServiceFAQProps) => {
  const [open, setOpen] = useState<string | null>(`${sectionNum}.01`);

  const toggle = (id: string) => {
    setOpen((cur) => (cur === id ? null : id));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${serviceName} - frequently asked questions`,
    mainEntity: items.map((qa) => ({
      '@type': 'Question',
      name: qa.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.a,
      },
    })),
  };

  return (
    <section
      className="sl-section sl-faq"
      aria-labelledby={`svfaq-${sectionNum}-title`}
    >
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">{sectionNum} - Common questions</div>
            <h2
              id={`svfaq-${sectionNum}-title`}
              className="sl-sec-title"
            >
              {title}
            </h2>
          </div>
          {meta ? (
            <div className="sl-sec-meta">{meta}</div>
          ) : (
            <div className="sl-sec-meta">
              More on the
              <br />
              resources page
            </div>
          )}
        </div>

        <div className="sl-faq-list">
          {items.map((qa, idx) => {
            const id = `${sectionNum}.${pad(idx)}`;
            const isOpen = open === id;
            return (
              <div
                key={id}
                className={`sl-faq-item${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="sl-faq-q"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                >
                  <span className="sl-faq-q-num">{id}</span>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};

export default ServiceFAQ;
