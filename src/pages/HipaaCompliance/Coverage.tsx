import { CheckIcon, XIcon } from '@/components/icons';
import { COVERAGE } from './data';

const Coverage = () => (
  <section className="hcp-coverage">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          Coverage Map
        </span>
        <h2 className="gtx-sec-title">
          What's in scope. <em>What's out.</em>
        </h2>
        <p className="gtx-sec-sub">
          A practical map of marketing surface area. The right column
          is where most teams over-promise themselves into a breach.
        </p>
      </header>

      <div className="hcp-coverage-list">
        {COVERAGE.map((row, i) => (
          <article key={row.area} className="hcp-coverage-row">
            <div className="hcp-coverage-area">
              <span className="hcp-coverage-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="hcp-coverage-icon" aria-hidden="true">{row.icon}</span>
              <h3 className="hcp-coverage-area-name">{row.area}</h3>
            </div>
            <div className="hcp-coverage-cell hcp-coverage-in">
              <span className="hcp-coverage-cell-tag">
                <CheckIcon /> What we do
              </span>
              <p>{row.inScope}</p>
            </div>
            <div className="hcp-coverage-cell hcp-coverage-out">
              <span className="hcp-coverage-cell-tag">
                <XIcon /> What we won't do
              </span>
              <p>{row.outScope}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Coverage;
