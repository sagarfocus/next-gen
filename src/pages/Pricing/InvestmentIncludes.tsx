import { CheckIcon } from '../../components/icons';
import { CARDS } from '../../content/pricing/includes';

const InvestmentIncludes = () => {
  return (
    <section className="pr-includes" aria-labelledby="pr-inc-title">
      <div className="container-shell">
        <div className="pr-section-head">
          <span className="pr-section-eyebrow">
            What Your Investment Includes
          </span>
          <h2 id="pr-inc-title" className="pr-section-h2">
            Not just services. A full-stack growth team.
          </h2>
          <p className="pr-section-sub">
            Every retainer integrates an entire department of medical growth
            experts into your clinic - with HIPAA infrastructure and
            onboarding included.
          </p>
        </div>

        <div className="pr-includes-grid">
          {CARDS.map((card) => (
            <article key={card.tag} className="pr-include-card">
              <span className="pr-include-icon" aria-hidden="true">
                {card.icon}
              </span>
              <span className="pr-include-tag">{card.tag}</span>
              <h3 className="pr-include-title">{card.title}</h3>
              <p className="pr-include-text">{card.text}</p>
              <ul className="pr-include-list">
                {card.bullets.map((bullet, i) => (
                  <li key={i}>
                    <CheckIcon />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentIncludes;
