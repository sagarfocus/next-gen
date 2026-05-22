import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import { FAQS } from '@/content/pricing/faqs';

const FAQChevron = () => (
  <span className="faq-chev" aria-hidden="true">
    <span className="plus-h" />
    <span className="plus-v" />
  </span>
);


const PricingFAQ = () => {
  return (
    <section
      className="faq-section pr-faq"
      id="pricing-faq"
      aria-labelledby="pr-faq-title"
    >
      <div className="container-shell">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="faq-eyebrow">Pricing, Scope &amp; Terms</span>
            <h2 id="pr-faq-title" className="faq-h2">
              Pricing <br />
              <span className="accent-text">Questions</span>.
            </h2>
            <p className="faq-intro">
              What the retainer actually covers, how ad spend works, what
              you&rsquo;re committing to, and when the math typically pays
              back - written for the people signing the cheque.
            </p>

            <div className="still-card">
              <h3>Not sure which tier fits?</h3>
              <p>
                Send us your current ad spend, patient LTV, and the one number
                you&rsquo;d most like to move - we&rsquo;ll recommend
                Starter, Growth, or Scale on the call. No template proposals.
              </p>
              <p>
                One 30-minute call. You leave with a tier recommendation, an
                ad-spend range, and a 90-day revenue target.
              </p>
              <Link to="/contact" className="btn-primary">
                Get a Tier Recommendation
                <ArrowIcon size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>

          <div className="faq-right">
            {FAQS.map(({ q, a, defaultOpen }) => (
              <details
                key={q}
                className="faq-item"
                name="pricing-faq"
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
                text: extractText(a),
              },
            })),
          }),
        }}
      />
    </section>
  );
};

function extractText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (typeof node === 'object' && 'props' in node) {
    return extractText((node as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

export default PricingFAQ;
