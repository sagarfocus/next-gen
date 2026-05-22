import { CheckIcon } from '@/components/icons';
import { PROMISES } from './data';

const Promise = () => (
  <section className="atx-promise" aria-labelledby="atx-promise-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 07 &nbsp; The promise</span>
        <h2 id="atx-promise-title" className="adv-h2">What the library will and will not do.</h2>
        <p className="adv-intro">
          Four commitments that hold across every workflow in the library —
          and across every customisation we ship for paying clients too.
        </p>
      </header>
      <ul className="atx-promise-list">
        {PROMISES.map((p, i) => (
          <li key={i} className="atx-promise-item">
            <span className="atx-promise-box"><CheckIcon size={14} strokeWidth={2.6} /></span>
            <span className="atx-promise-num">/{String(i + 1).padStart(2, '0')}</span>
            <span className="atx-promise-text">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Promise;
