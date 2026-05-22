import { CheckIcon } from '@/components/icons';
import { PILLARS } from './data';

const Pillars = () => (
  <section className="hcp-pillars">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          The Safeguard Pillars
        </span>
        <h2 className="gtx-sec-title">
          Three categories. <em>One commitment.</em>
        </h2>
        <p className="gtx-sec-sub">
          The HIPAA Security Rule organises the work into three
          categories of safeguards. Each has its own deliverables,
          owners, and review cycle.
        </p>
      </header>

      <div className="hcp-pillar-grid">
        {PILLARS.map((p) => (
          <article key={p.num} className={`hcp-pillar-card tone-${p.tone}`}>
            <div className="hcp-pillar-head">
              <span className="hcp-pillar-icon" aria-hidden="true">{p.icon}</span>
              <span className="hcp-pillar-num" aria-hidden="true">/{p.num}</span>
            </div>
            <h3 className="hcp-pillar-tag">{p.tag}</h3>
            <p className="hcp-pillar-desc">{p.description}</p>
            <ul className="hcp-pillar-list">
              {p.items.map((item) => (
                <li key={item}>
                  <span className="hcp-pillar-check" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Pillars;
