import Breadcrumb from '../../components/Breadcrumb';

interface MetaRow {
  label: string;
  value: string;
}

const META_ROWS: MetaRow[] = [
  { label: 'Edition', value: 'Friday, May 1, 2026' },
  { label: 'Editor', value: 'Aanya Patel' },
  { label: 'Reading time', value: '11 minutes' },
];

const NewsHead = () => {
  return (
    <section className="ph-page-head">
      <div className="container-shell">
        <Breadcrumb
          items={[
            { label: 'Resources', to: '/blog' },
            { label: 'Healthcare News' },
          ]}
        />
        <div className="ph-row">
          <div>
            <div className="ph-eyebrow">
              <span className="ph-issue">№ 047 · Weekly Brief</span>
            </div>
            <h1 className="ph-title">Healthcare News &amp; Insights.</h1>
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

export default NewsHead;
