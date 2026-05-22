import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import { RELATED } from './data';

const Related = () => (
  <section className="atx-related" aria-labelledby="atx-related-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 08 &nbsp; Keep reading</span>
        <h2 id="atx-related-title" className="adv-h2">More from the automation desk.</h2>
        <p className="adv-intro">
          Hand-picked resources that extend the library — process, audit, and
          the operating system the workflows plug into.
        </p>
      </header>
      <div className="atx-related-grid">
        {RELATED.map((r, i) => (
          <Link key={r.to} to={r.to} className="atx-related-card">
            <span className="atx-related-num">/{String(i + 1).padStart(2, '0')}</span>
            <span className="atx-related-cat">{r.cat}</span>
            <h3 className="atx-related-title">{r.title}</h3>
            <p className="atx-related-desc">{r.desc}</p>
            <span className="atx-related-cta">Read <ArrowIcon size={12} /></span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Related;
