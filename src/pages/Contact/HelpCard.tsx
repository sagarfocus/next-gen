import { ROWS, SOCIALS } from '@/content/contact/help';

const HelpCard = () => {
  return (
    <aside className="ct-help" aria-labelledby="help-title">
      <span className="ct-help-eyebrow">Hi! We are always here</span>
      <h3 id="help-title" className="ct-help-title">
        to help you.
      </h3>

      <div className="ct-help-rows">
        {ROWS.map((row) => (
          <a key={row.tag} href={row.href} className="ct-help-row">
            <span className="ct-help-row-ico" aria-hidden="true">
              {row.icon}
            </span>
            <div className="ct-help-row-body">
              <span className="ct-help-row-tag">{row.tag}</span>
              <span className="ct-help-row-value">{row.value}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="ct-help-social">
        <span className="ct-help-social-label">Connect with us</span>
        <div className="ct-help-social-icons">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default HelpCard;
