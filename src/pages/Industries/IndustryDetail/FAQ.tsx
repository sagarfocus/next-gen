import DetailSectionHead from '@/components/DetailSectionHead';
import type { IndustryDetailEntry } from '@/content/industries/details.data';

const FAQ = ({ entry }: { entry: IndustryDetailEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ind-detail-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ind-detail-faq-title"
        eyebrow="Frequently asked"
        title={<>Questions we hear about {entry.label.toLowerCase()}.</>}
        intro={`Recurring questions from ${entry.label.toLowerCase()} owners and growth leads — answered before the first conversation.`}
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
