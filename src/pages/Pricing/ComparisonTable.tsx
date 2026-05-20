import { Fragment } from 'react';

type CellValue = boolean;

interface FeatureRow {
  feature: string;
  values: [CellValue, CellValue, CellValue];
}

interface FeatureGroup {
  label: string;
  rows: FeatureRow[];
}

const GROUPS: FeatureGroup[] = [
  {
    label: 'Marketing & Acquisition',
    rows: [
      { feature: 'SEO & Local Search', values: [true, true, true] },
      { feature: 'Google My Business Management', values: [true, true, true] },
      { feature: 'Google Ads Management', values: [true, true, true] },
      { feature: 'Meta / Facebook Ads', values: [true, true, true] },
      { feature: 'Social Media Content', values: [true, true, true] },
      { feature: 'Content & Copywriting', values: [true, true, true] },
    ],
  },
  {
    label: 'Automation & Operations',
    rows: [
      { feature: 'AI Chatbot Setup', values: [true, true, true] },
      { feature: 'Monthly Strategy Reports', values: [true, true, true] },
      { feature: 'Advanced AI Call Handling', values: [false, true, true] },
      { feature: 'Insurance Verification Bots', values: [false, true, true] },
    ],
  },
  {
    label: 'Scale & Support',
    rows: [
      { feature: 'Multi-Location Campaigns', values: [false, true, true] },
      { feature: '24/7 Performance Monitoring', values: [false, true, true] },
      { feature: 'Dedicated Account Manager', values: [false, true, true] },
      { feature: 'Priority SLA Response', values: [false, true, true] },
    ],
  },
  {
    label: 'Enterprise Tier',
    rows: [
      { feature: 'Custom Software Development', values: [false, false, true] },
      { feature: 'HIPAA-Compliant API Integrations', values: [false, false, true] },
      { feature: 'Multi-State Network Management', values: [false, false, true] },
      { feature: 'Advanced BI Dashboards', values: [false, false, true] },
      { feature: 'Dedicated Development Team', values: [false, false, true] },
      { feature: 'White-Glove Onboarding', values: [false, false, true] },
    ],
  },
];

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
            Side-by-side breakdown across all features - from foundational
            SEO to enterprise-grade infrastructure and dedicated development
            teams.
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
