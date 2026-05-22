import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../components/icons';

const CTA = () => {
  return (
    <section className="sl-cta" id="audit">
      <div className="container-shell">
        <div className="sl-cta-panel">
          <div className="sl-cta-eyebrow">Free audit · No commitment</div>
          <h2 className="sl-cta-title">Get a 12-page audit of your practice.</h2>
          <p className="sl-cta-desc">
            Submit your website. We&rsquo;ll send back the three
            highest-leverage moves you could make this quarter - whether
            you sign with us or not.
          </p>
          <Link to="/contact" className="sl-btn-primary">
            Request my audit
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
