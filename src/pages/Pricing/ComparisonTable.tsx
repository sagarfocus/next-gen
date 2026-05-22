import { Fragment } from 'react';
import { GROUPS } from '@/content/pricing/comparison';

const CheckCell = () => (
  <span className="pr-cell-check">
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

const DashCell = () => <span className="pr-cell-dash">-</span>;

const ComparisonTable = () => {
  return (
    <section className="pr-compare" aria-labelledby="pr-cmp-title">
      <div className="container-shell">
        <div className="pr-section-head">
          <span className="pr-section-eyebrow">Feature Comparison</span>
          <h2 id="pr-cmp-title" className="pr-section-h2">
            See exactly what each tier includes.
          </h2>
          <p className="pr-section-sub">
            Side-by-side breakdown across all features - from foundational SEO to enterprise-grade
            infrastructure and dedicated development teams.
          </p>
        </div>

        <div className="pr-compare-wrap">
          <table className="pr-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>
                  <span className="col-name">Starter Care</span>
                  <span className="col-price">$5,000 / mo</span>
                </th>
                <th className="is-featured">
                  <span className="col-name">Growth Pro</span>
                  <span className="col-price">$10,000 / mo</span>
                </th>
                <th>
                  <span className="col-name">Scale Elite</span>
                  <span className="col-price">Custom</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((group) => (
                <Fragment key={group.label}>
                  <tr className="is-divider">
                    <td colSpan={4}>
                      <span className="pr-table-group">{group.label}</span>
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td>{row.values[0] ? <CheckCell /> : <DashCell />}</td>
                      <td className="is-featured-col">
                        {row.values[1] ? <CheckCell /> : <DashCell />}
                      </td>
                      <td>{row.values[2] ? <CheckCell /> : <DashCell />}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
