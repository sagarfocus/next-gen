import { Link } from 'react-router-dom';
import { CARDS } from '@/content/industries/overview';
import { industryDetailHref } from '@/content/industries/details.data';
import { ArrowIcon } from '@/components/icons';

const IndustriesOverview = () => (
  <section className="ind-overview" aria-labelledby="ind-ov-title">
    <div className="container-shell">
      <div className="ind-ov-head">
        <span className="ind-ov-eyebrow">Who We Serve</span>
        <h2 id="ind-ov-title" className="ind-ov-h2">
          We currently serve three healthcare verticals.
        </h2>
        <p className="ind-ov-sub">
          Each industry has its own patient psychology, regulatory landscape, and acquisition
          dynamics. We build playbooks - not templates - for each one.
        </p>
        <a href="#deep-dive" className="ind-ov-link">
          Explore industry deep-dives
          <span className="ico" aria-hidden="true">
            <ArrowIcon size={14} />
          </span>
        </a>
      </div>

      <div className="ind-ov-grid">
        {CARDS.map((card) => (
          <Link
            key={card.ariaId}
            to={industryDetailHref(card.slug)}
            className="ind-ov-card"
            aria-labelledby={card.ariaId}
            aria-label={`Read more about ${card.titleText}`}
          >
            <div className="ind-ov-img has-img">
              <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
              <span className="ind-ov-arrow" aria-hidden="true">
                <ArrowIcon size={14} strokeWidth={2} />
              </span>
            </div>
            <span className="ind-ov-meta">
              <span className="date">{card.meta}</span>
            </span>
            <h3 id={card.ariaId} className="ind-ov-title">
              {card.title}
            </h3>
            <p className="ind-ov-sub-text">{card.text}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesOverview;
