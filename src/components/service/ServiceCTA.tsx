import { Link } from 'react-router-dom';

const Arrow = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export type ServiceCTAVariant = 'panel' | 'band' | 'editorial';

interface ServiceCTAProps {
  /**
   * Visual treatment. Distributing variants across services breaks the
   * "every service ends with the same CTA card" pattern.
   *   panel      - original centered dark panel (Section)
   *   band       - wide split band, copy left + button right
   *   editorial  - two-column with bullet rail + dual buttons
   */
  variant?: ServiceCTAVariant;
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Primary CTA destination. Defaults to /contact. */
  primaryTo?: string;
  primaryLabel?: string;
  /** Optional secondary CTA, only used by the editorial variant. */
  secondaryTo?: string;
  secondaryLabel?: string;
  /** Optional bullet items for editorial variant. */
  bullets?: string[];
}

const ServiceCTA = ({
  variant = 'panel',
  eyebrow = 'Free audit · No commitment',
  title = "Let's make this work.",
  description = "A 30-minute call. We'll audit your current setup and share the closest case study from this library - whether you sign with us or not.",
  primaryTo = '/contact',
  primaryLabel = 'Book strategy call',
  secondaryTo,
  secondaryLabel,
  bullets,
}: ServiceCTAProps) => {
  if (variant === 'band') {
    return (
      <section className="sv-cta sv-cta--band" id="audit">
        <div className="container-shell">
          <div className="sv-cta-band">
            <div>
              <span className="sv-cta-band-eyebrow">{eyebrow}</span>
              <h2 className="sv-cta-band-title">{title}</h2>
              <p className="sv-cta-band-sub">{description}</p>
            </div>
            <Link to={primaryTo} className="sv-cta-band-btn">
              {primaryLabel}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'editorial') {
    return (
      <section className="sv-cta sv-cta--editorial" id="audit">
        <div className="container-shell">
          <div className="sv-cta-editorial">
            <div>
              <span className="sv-cta-editorial-eyebrow">{eyebrow}</span>
              <h2 className="sv-cta-editorial-h">{title}</h2>
            </div>
            <div className="sv-cta-editorial-aside">
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: '#4A5568' }}>
                {description}
              </p>
              {bullets && bullets.length ? (
                <div>
                  {bullets.map((b) => (
                    <div key={b} className="sv-cta-editorial-line">
                      <span aria-hidden="true" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="sv-cta-editorial-actions">
                <Link to={primaryTo}>
                  {primaryLabel}
                  <Arrow />
                </Link>
                {secondaryTo && secondaryLabel ? (
                  <Link to={secondaryTo}>{secondaryLabel}</Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // panel (default - keeps existing class names for the legacy centered design)
  return (
    <section className="sv-cta" id="audit">
      <div className="container-shell">
        <div className="sv-cta-panel">
          <div className="sv-cta-eyebrow">{eyebrow}</div>
          <h2 className="sv-cta-title">{title}</h2>
          <p className="sv-cta-desc">{description}</p>
          <Link to={primaryTo} className="sv-btn-primary">
            {primaryLabel}
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
