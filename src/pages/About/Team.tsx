import type { ReactElement } from 'react';

interface Member {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  portrait: ReactElement;
}

const TEAM: Member[] = [
  {
    name: 'Marcus Rodriguez',
    role: 'Director of Strategy',
    bio: 'Former growth lead at a Texas-based MedSpa group. Specializes in high-LTV verticals and aesthetic patient acquisition.',
    tags: ['MedSpa', 'Wellness', 'Strategy'],
    portrait: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="38" r="14" fill="none" stroke="#576DB5" strokeWidth="2.5" />
        <path
          d="M26 80 C 26 64 36 58 50 58 C 64 58 74 64 74 80"
          fill="none"
          stroke="#576DB5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'Priya Patel',
    role: 'Head of Compliance',
    bio: 'HIPAA Privacy Officer with 12 years auditing healthcare digital systems. Reviews every funnel before it touches a real patient.',
    tags: ['HIPAA', 'Audit', 'Privacy'],
    portrait: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="38" r="14" fill="none" stroke="#B38B6D" strokeWidth="2.5" />
        <path
          d="M26 80 C 26 64 36 58 50 58 C 64 58 74 64 74 80"
          fill="none"
          stroke="#B38B6D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'David Kim',
    role: 'Engineering Lead',
    bio: 'Builds the custom integrations and automation infrastructure. EHR integrations, BAA-ready hosting, and AI intake systems.',
    tags: ['Engineering', 'AI', 'Infrastructure'],
    portrait: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="38" r="14" fill="none" stroke="#8FBC8F" strokeWidth="2.5" />
        <path
          d="M26 80 C 26 64 36 58 50 58 C 64 58 74 64 74 80"
          fill="none"
          stroke="#8FBC8F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const FOUNDER_CREDS = [
  'HIPAA Certified',
  'Google Premier Partner',
  '15 Years Healthcare',
  'AAFP Speaker',
];

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
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="50" cy="36" r="16" fill="none" stroke="#576DB5" strokeWidth="2.5" />
              <path
                d="M22 88 C 22 70 32 60 50 60 C 68 60 78 70 78 88"
                fill="none"
                stroke="#576DB5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#B38B6D"
                strokeWidth="1"
                strokeDasharray="3 5"
                opacity=".6"
              />
              <circle cx="86" cy="22" r="3" fill="#8FBC8F" />
              <circle cx="14" cy="78" r="3" fill="#B38B6D" />
            </svg>
          </div>

          <div className="ab-founder-body">
            <span className="ab-founder-tag">Founder &amp; CEO</span>
            <h3 className="ab-founder-name">Sarah Chen</h3>
            <p className="ab-founder-role">
              15 years in healthcare growth marketing
            </p>
            <blockquote className="ab-founder-quote">
              Healthcare marketing isn&rsquo;t about being clever. It&rsquo;s
              about being specific &mdash; specific to the specialty, specific
              to the patient, specific to the moment of decision.
            </blockquote>
            <p className="ab-founder-bio">
              Sarah started her career running marketing for a regional urgent
              care chain before founding TheNextGen in 2019. She&rsquo;s spoken
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

        <div className="ab-team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="ab-member">
              <div className="ab-member-portrait" aria-hidden="true">
                {m.portrait}
              </div>
              <h3 className="ab-member-name">{m.name}</h3>
              <p className="ab-member-role">{m.role}</p>
              <p className="ab-member-bio">{m.bio}</p>
              <div className="ab-member-divider" />
              <div className="ab-member-tags">
                {m.tags.map((t) => (
                  <span key={t} className="ab-member-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
