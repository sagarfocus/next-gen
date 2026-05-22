import { ArrowIcon } from '../../components/icons';
const CTABanner = () => {
  return (
    <section className="cs-cta-banner">
      <div className="container-shell">
        <div className="ctab-grid">
          <div>
            <h2 className="ctab-title">
              Want a result like these on your practice?
            </h2>
            <p className="ctab-desc">
              Book a 30-minute strategy call. We&rsquo;ll audit your current
              funnel, share the closest case study from this library, and build
              a plan you can implement with us - or without.
            </p>
          </div>
          <a href="#book" className="ctab-btn">
            Book a strategy call
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
