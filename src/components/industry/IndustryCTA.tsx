import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IndustryCTAProps {
  tag: string;
  title: ReactNode;
  body: ReactNode;
}

const IndustryCTA = ({ tag, title, body }: IndustryCTAProps) => {
  return (
    <section className="iv-cta" aria-labelledby="iv-cta-title">
      <div className="iv-cta-inner">
        <span className="iv-cta-tag">{tag}</span>
        <h2 id="iv-cta-title" className="iv-cta-title">{title}</h2>
        <p className="iv-cta-body">{body}</p>
        <Link to="/contact" className="iv-cta-btn">
          Book a strategy call
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default IndustryCTA;
