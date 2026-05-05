interface PillarItem {
  num: string;
  name: string;
  desc: string;
  tags: string[];
}

const PILLARS: PillarItem[] = [
  {
    num: '01',
    name: 'Local Authority',
    desc: 'Google Business Profile, citations, reviews — the trust signals Map Pack ranking depends on.',
    tags: ['GBP', 'Citations', 'Reviews'],
  },
  {
    num: '02',
    name: 'Technical Foundation',
    desc: 'Speed, schema, mobile UX, crawlability. The plumbing patients never see — but Google does.',
    tags: ['Core Web Vitals', 'Schema', 'Sitemap'],
  },
  {
    num: '03',
    name: 'Content Relevance',
    desc: 'Condition pages, procedure deep-dives, location pages — clinically accurate, search-aligned.',
    tags: ['Conditions', 'Procedures', 'FAQs'],
  },
  {
    num: '04',
    name: 'Off-Site Trust',
    desc: 'Backlinks from medical directories, local press, partner clinics. Built manually — never bought.',
    tags: ['Backlinks', 'Directories', 'PR'],
  },
];

const Pillars = () => {
  return (
    <section className="sl-section sl-pillars">
      <div className="container-shell">
        <div className="sl-sec-head">
          <div>
            <div className="sl-sec-num">02 — How we work</div>
            <h2 className="sl-sec-title">
              Four pillars. <em>Nothing else.</em>
            </h2>
          </div>
          <div className="sl-sec-meta">
            Every retainer
            <br />
            covers all four
          </div>
        </div>

        <div className="sl-pillars-grid">
          {PILLARS.map((p) => (
            <div key={p.num} className="sl-pillar">
              <div className="sl-pillar-num">{p.num}</div>
              <h3 className="sl-pillar-name">{p.name}</h3>
              <p className="sl-pillar-desc">{p.desc}</p>
              <div className="sl-pillar-tags">
                {p.tags.map((t) => (
                  <span key={t} className="sl-pillar-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
