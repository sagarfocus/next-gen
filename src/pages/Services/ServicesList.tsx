import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@/components/icons';
import { SERVICES } from '@/content/services/list';

const CardArrow = () => (
  <span className="svc-card-arrow" aria-hidden="true">
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </span>
);

const ServicesList = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      className="svc-list"
      id="all-services"
      data-expanded={expanded}
      aria-labelledby="svc-list-title"
    >
      <div className="container-shell">
        <div className="svc-list-head">
          <span className="svc-list-eyebrow">Our Services</span>
          <h2 id="svc-list-title" className="svc-list-h2">
            Our Services.
          </h2>
          <p className="svc-list-sub">
            Everything your healthcare practice needs to own the digital space
            - from search visibility to brand identity.
          </p>
          <div className="svc-list-all">
            <span>12 Capabilities</span>
            <span className="bar" />
            <span>Full-Service Coverage</span>
          </div>
        </div>

        <div className="svc-cards">
          {SERVICES.map(({ ariaId, illustration, image, meta, title, sub, to, extra }) => (
            <Link
              key={ariaId}
              to={to}
              className={`svc-card${extra ? ' is-extra' : ''}`}
              aria-labelledby={ariaId}
            >
              <div className={`svc-card-img${image ? ' has-img' : ''}`}>
                {image ? (
                  <img src={image} alt={title} loading="lazy" decoding="async" />
                ) : (
                  illustration
                )}
                <CardArrow />
              </div>
              <span className="svc-card-meta">{meta}</span>
              <h3 id={ariaId} className="svc-card-title">
                {title}
              </h3>
              <p className="svc-card-sub">{sub}</p>
            </Link>
          ))}
        </div>

        <div className="svc-more-row">
          <button
            type="button"
            className="svc-more-btn"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="all-services"
          >
            {expanded ? 'Show less' : 'See more services'}
            <span className="ico" aria-hidden="true">
              <ChevronDownIcon size={14} strokeWidth={2.4} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
