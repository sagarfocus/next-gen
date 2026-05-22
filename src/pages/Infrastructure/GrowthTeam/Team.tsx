import { ROLES } from './data';

const Team = () => (
  <section className="gtx-team">
    <div className="gt-shell">
      <header className="gtx-sec-head">
        <span className="gtx-eyebrow">
          <span className="gtx-eyebrow-dot" aria-hidden="true" />
          The Specialists
        </span>
        <h2 className="gtx-sec-title">
          Six senior specialists. <em>One mission.</em>
        </h2>
        <p className="gtx-sec-sub">
          Healthcare-fluent operators with named accountability for
          the numbers that move your panel.
        </p>
      </header>

      <div className="gtx-team-grid">
        {ROLES.map((role) => (
          <article key={role.num} className="gtx-team-card">
            <div className="gtx-team-card-img">
              <img src={role.photo} alt="" loading="lazy" decoding="async" />
              <span className="gtx-team-card-num" aria-hidden="true">
                /{role.num}
              </span>
              <span className="gtx-team-card-hours">{role.hours}</span>
            </div>
            <div className="gtx-team-card-body">
              <span className="gtx-team-card-name">{role.name}</span>
              <h3 className="gtx-team-card-title">{role.title}</h3>
              <p className="gtx-team-card-pitch">{role.pitch}</p>
              <div className="gtx-team-card-tags">
                {role.owns.map((o) => (
                  <span key={o} className="gtx-team-card-tag">{o}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
