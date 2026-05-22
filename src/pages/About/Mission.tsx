import { Link } from 'react-router-dom';
import { VALUE_ENTRIES, valueDetailHref } from '@/content/about/values.data';
import { ArrowIcon } from '@/components/icons';

const Mission = () => (
  <section className="ab-mission" aria-labelledby="ab-mission-title">
    <div className="container-shell">
      <div className="ab-mission-head">
        <span className="ab-mission-eyebrow">Our Mission &amp; Core Values</span>
        <h2 id="ab-mission-title" className="ab-mission-h2">
          Three principles that guide every campaign we launch.
        </h2>
        <p className="ab-mission-sub">
          Every decision we make is guided by these principles - from the campaigns we launch to the
          tools we build.
        </p>
      </div>

      <div className="ab-values-grid">
        {VALUE_ENTRIES.map((v) => (
          <Link
            key={v.slug}
            to={valueDetailHref(v.slug)}
            className="ab-value"
            aria-label={`Read more about ${v.title}`}
          >
            <span className="ab-value-num">{v.num}</span>
            <span className="ab-value-icon" aria-hidden="true">
              {v.icon}
            </span>
            <h3 className="ab-value-title">{v.title}</h3>
            <p className="ab-value-text">{v.text}</p>
            {v.visual}
            <span className="ab-value-cta">
              Read more
              <ArrowIcon size={14} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Mission;
