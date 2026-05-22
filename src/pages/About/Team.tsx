import { Link } from 'react-router-dom';

import jayPhoto from '../../assets/jay-1.webp';
import { ArrowIcon } from '../../components/icons';
import { FOUNDER_CREDS } from '../../content/about/team';

const Team = () => {
  return (
    <section className="ab-team" aria-labelledby="ab-team-title">
      <div className="container-shell">
        <div className="ab-team-head">
          <span className="ab-team-eyebrow">Leadership</span>
          <h2 id="ab-team-title" className="ab-team-h2">
            A small team that does big work for healthcare.
          </h2>
          <p className="ab-team-sub">
            No overstaffed account managers. No outsourced execution. Every
            account is run by senior practitioners who have actually grown a
            clinic.
          </p>
        </div>

        <article className="ab-founder">
          <div className="ab-founder-portrait">
            <img src={jayPhoto} alt="Jay Dahal" loading="lazy" decoding="async" />
          </div>

          <div className="ab-founder-body">
            <span className="ab-founder-tag">Founder &amp; CEO</span>
            <h3 className="ab-founder-name">Jay Dahal</h3>
            <p className="ab-founder-role">
              15 years in healthcare growth marketing
            </p>
            <blockquote className="ab-founder-quote">
              Healthcare marketing isn&rsquo;t about being clever. It&rsquo;s
              about being specific - specific to the specialty, specific
              to the patient, specific to the moment of decision.
            </blockquote>
            <p className="ab-founder-bio">
              Jay started his career running marketing for a regional urgent
              care chain before founding TheNextGen in 2019. He&rsquo;s spoken
              at AAFP and AHCA conferences, contributed to industry publications
              on compliant patient acquisition, and personally consults on every
              major account.
            </p>
            <div className="ab-founder-footer">
              <div className="ab-founder-creds">
                {FOUNDER_CREDS.map((c) => (
                  <span key={c} className="ab-founder-cred">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="ab-team-cta-wrap">
          <Link to="/team" className="ab-team-cta">
            See all teams
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
