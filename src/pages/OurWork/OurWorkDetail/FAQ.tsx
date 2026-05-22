import DetailSectionHead from '../../../components/DetailSectionHead';
import { type DetailEntry } from '../details.data';
import { KIND_FAQ_INTRO } from './data';

const FAQ = ({ entry }: { entry: DetailEntry }) => (
  <section className="ow-detail-faq" aria-labelledby="ow-detail-faq-title">
    <div className="container-shell">
      <DetailSectionHead
        id="ow-detail-faq-title"
        eyebrow="Frequently asked"
        title="Questions we hear about this work."
        intro={KIND_FAQ_INTRO[entry.kind]}
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
