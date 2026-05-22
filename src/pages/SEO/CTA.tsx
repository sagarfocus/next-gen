import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const CTA = () => {
  return (
    <section className="seo-cta-section" id="audit">
      <div className="container-shell">
        <div className="seo-cta-panel">
          <div className="seo-cta-left">
            <div className="seo-cta-eyebrow">
              <span className="dot" aria-hidden="true" />
              Free SEO audit · 5 business days
            </div>
            <h2 className="seo-cta-title">
              Get a 12-page audit of your practice&rsquo;s SEO.
            </h2>
            <p className="seo-cta-desc">
              Submit your website. We&rsquo;ll send back a technical, on-page,
              local, and AEO read-out - plus the three highest-leverage moves
              you could make this quarter. Whether you sign with us or not.
            </p>
            <div className="seo-cta-ctas">
              <Link to="/contact" className="sl-btn-primary">
                Request my audit
                <ArrowIcon />
              </Link>
              <Link to="/pricing" className="sl-btn-ghost">
                See pricing
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="seo-cta-right">
            <div className="seo-cta-stat">
              <span className="seo-cta-stat-num">+62<em>%</em></span>
              <span className="seo-cta-stat-lbl">Avg. bookings lift · 6 mo</span>
            </div>
            <div className="seo-cta-stat">
              <span className="seo-cta-stat-num">94<em>%</em></span>
              <span className="seo-cta-stat-lbl">Client retention</span>
            </div>
            <div className="seo-cta-stat">
              <span className="seo-cta-stat-num">5<em>d</em></span>
              <span className="seo-cta-stat-lbl">Audit turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
