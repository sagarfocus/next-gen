import Breadcrumb from '../../components/Breadcrumb';

interface MetaRow {
  label: string;
  value: string;
}

const META_ROWS: MetaRow[] = [
  {
    label: 'Sections',
    value: 'Getting Started · Pricing · Services · Compliance · Reporting',
  },
  { label: 'Updated', value: 'May 2026' },
  { label: 'Avg. response', value: 'Under 4 hours' },
];

const FAQHead = () => {
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb current="FAQ" />
        <div className="ph-row">
          <div>
            <div className="ph-eyebrow">
              <span className="ph-issue">38 questions, 5 sections</span>
            </div>
            <h1 className="ph-title">Questions, Answered.</h1>
          </div>
          <div className="ph-meta">
            {META_ROWS.map((row) => (
              <div key={row.label} className="ph-meta-row">
                <strong>{row.label}</strong>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHead;
