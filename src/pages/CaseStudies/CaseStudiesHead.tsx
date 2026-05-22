import Breadcrumb from '@/components/Breadcrumb';

interface MetaRow {
  label: string;
  value: string;
}

const META_ROWS: MetaRow[] = [
  {
    label: 'Verticals',
    value: 'ER, Urgent, Aesthetic, Family, Mental Health, Dental',
  },
  { label: 'Avg. Result', value: '+78% patient growth' },
  { label: 'Updated', value: 'May 2026' },
];

const CaseStudiesHead = () => {
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb current="Case Studies" />
        <div className="ph-row">
          <div>
            <div className="ph-eyebrow">
              <span className="ph-issue">38 partner stories</span>
            </div>
            <h1 className="ph-title">Case Studies &amp; Growth Stories.</h1>
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

export default CaseStudiesHead;
