export interface SpecialtyRow {
  name: string;
  desc: string;
}

interface SpecialtiesProps {
  rows: SpecialtyRow[];
}

const Specialties = ({ rows }: SpecialtiesProps) => {
  return (
    <section className="iv-section iv-specialties" aria-labelledby="iv-spec-title">
      <div className="container-shell">
        <header className="iv-section-head">
          <span className="iv-section-num">01</span>
          <h2 id="iv-spec-title" className="iv-section-title">
            Specialties we serve.
          </h2>
        </header>

        <ol className="iv-spec-list" role="list">
          {rows.map((r, i) => (
            <li key={r.name} className="iv-spec-row">
              <span className="iv-spec-idx">{String(i + 1).padStart(2, '0')}</span>
              <span className="iv-spec-name">{r.name}</span>
              <span className="iv-spec-desc">{r.desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Specialties;
