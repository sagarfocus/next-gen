import type { ReactNode } from 'react';
import { ArrowIcon } from '@/components/icons';
import { FAQS } from '@/content/services/faqs';

interface FAQProps {
  onBook: () => void;
}

const FAQChevron = () => (
  <span className="faq-chev" aria-hidden="true">
    <span className="plus-h" />
    <span className="plus-v" />
  </span>
);

const ServicesFAQ = ({ onBook }: FAQProps) => {
  return (
    <section className="faq-section" id="services-faq" aria-labelledby="svc-faq-title">
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Services, Pricing &amp; Scope</span>
            <h2 id="svc-faq-title" className="faq-h2">
              Service <br />
              <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              How scope, timelines, ad budgets, compliance, and engagement model actually work when
              you bring on a healthcare growth partner - written for the people doing the hiring.
            </p>

            <div className="still-card">
              <h3>Need a custom scope?</h3>
              <p>
                Multi-location group, brand-new launch, or an existing agency you&rsquo;re ready to
                replace - we&rsquo;ll size the engagement to your stage. No template proposals.
              </p>
              <p>
                One call. We&rsquo;ll audit your current funnel, name the three biggest revenue
                leaks, and tell you which services would actually move them.
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
