import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';

const Engage = () => {
  return (
    <section className="ngt-section ngt-engage">
      <div className="container-shell">
        <div className="ngt-mark">
          <span className="ngt-mark-num">04</span>
          <span className="ngt-mark-lbl">Engage</span>
          <span className="ngt-mark-line" />
          <span className="ngt-mark-meta">Free 30-min call</span>
        </div>

        <div className="ngt-en-grid">
          <div>
            <h2 className="ngt-en-h2">
              Want this team on <em>your practice?</em>
            </h2>
            <p className="ngt-en-sub">
              The way to find out if we&rsquo;re a fit is to talk to the people doing the work.
            </p>
          </div>

          <aside className="ngt-en-aside">
            <p className="ngt-en-text">
              Every engagement starts with a free 30-minute strategy call. We audit your current
              funnel and walk away with three concrete moves — whether you sign with us or not.
            </p>
            <Link to="/contact" className="ngt-en-link">
              <span>Book a strategy call</span>
              <ArrowIcon strokeWidth={1.8} />
            </Link>
            <div className="ngt-en-foot">
              <span>NEXTGEN HEALTHCARE</span>
              <span>·</span>
              <span>Irving, TX</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Engage;
