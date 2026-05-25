import jayPhoto from '@/assets/jay-1.webp';

/* -----------------------------------------------------------
   Author / E-E-A-T section. Anala's page has none of this.
   Google's helpful-content + E-E-A-T signals reward visible
   author bios with credentials, especially in YMYL-adjacent
   healthcare niches.
   ----------------------------------------------------------- */

const CREDS = [
  { num: '12+', label: 'years in healthcare marketing' },
  { num: '200+', label: 'Texas practices served' },
  { num: '87', label: 'audits delivered this quarter' },
  { num: '$14M+', label: 'in attributable patient revenue' },
];

const Strategist = () => (
  <section className="fga-strategist" aria-labelledby="fga-strat-title">
    <div className="container-shell">
      <div className="fga-strat-grid">
        <figure className="fga-strat-fig">
          <img
            src={jayPhoto}
            alt="Jay Dahal, founder and senior growth strategist who runs every Free Growth Audit"
            className="fga-strat-photo"
            width={520}
            height={620}
            loading="lazy"
            decoding="async"
          />
          <figcaption className="fga-strat-stamp">
            <span>JAY DAHAL</span>
            <span>· Senior strategist ·</span>
          </figcaption>
        </figure>

        <div className="fga-strat-body">
          <span className="fga-section-tag">Who runs your audit</span>
          <h2 id="fga-strat-title" className="fga-section-h2">
            A senior strategist. Not a sales rep with a template.
          </h2>
          <p className="fga-strat-lede">
            Every audit is run end-to-end by Jay or one of two senior strategists with 8+ years in
            healthcare growth. No junior account exec, no AI-generated boilerplate, no white-label
            outsource. You get a person who has actually grown clinics like yours.
          </p>

          <ul className="fga-strat-quotes">
            <li>
              <span aria-hidden="true">&ldquo;</span>I will tell you to keep your current agency if
              the data says you should. The PDF ships either way.
            </li>
          </ul>

          <div className="fga-strat-creds">
            <span className="fga-strat-cred">CPA</span>
            <span className="fga-strat-cred">CTC certified</span>
            <span className="fga-strat-cred">HIPAA-trained</span>
            <span className="fga-strat-cred">Google Ads + GA4 certified</span>
          </div>

          <dl className="fga-strat-stats">
            {CREDS.map((c) => (
              <div key={c.label} className="fga-strat-stat">
                <dt>{c.num}</dt>
                <dd>{c.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default Strategist;
