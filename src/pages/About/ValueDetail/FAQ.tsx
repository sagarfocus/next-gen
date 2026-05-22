import DetailSectionHead from '@/components/DetailSectionHead';
import type { ValueEntry } from '@/content/about/values.data';

const FAQ = ({ entry }: { entry: ValueEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ab-value-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ab-value-faq-title"
        eyebrow="Frequently asked"
        title="Questions we hear about this principle."
        intro="Recurring questions from leadership teams about how this principle is enforced — and what happens when something crosses the line."
      />
      <ol className="ow-detail-faq-list">
        {entry.faqs.map((f, i) => (
          <li key={f.q}>
            <span className="ow-detail-faq-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default FAQ;
