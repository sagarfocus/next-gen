import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/components/icons';
import { CategoryArt, type Template } from './data';

const TemplateCard = ({ t, index }: { t: Template; index: number }) => (
  <li id={`tpl-${t.num}`} className={`atx-card tone-${t.tone}`}>
    <div className="atx-card-art" aria-hidden="true">
      <CategoryArt cat={t.cat} />
      <span className="atx-card-num">/{t.num}</span>
      <span className="atx-card-cat-pill">{t.cat}</span>
    </div>
    <div className="atx-card-body">
      <div className="atx-card-head">
        <span className="atx-card-mono">FIG. {String(index + 2).padStart(2, '0')} — {t.cat.toUpperCase()}</span>
        <h3 className="atx-card-title">{t.title}</h3>
        <p className="atx-card-blurb">{t.blurb}</p>
      </div>

      <div className="atx-card-specs">
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Build</span>
          <span className="atx-card-spec-value">{t.nodes}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Setup</span>
          <span className="atx-card-spec-value">{t.effort}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Value</span>
          <span className="atx-card-spec-value">{t.saves}</span>
        </div>
        <div className="atx-card-spec">
          <span className="atx-card-spec-label">Compliance</span>
          <span className="atx-card-spec-value">{t.compliance}</span>
        </div>
      </div>

      <div className="atx-card-foot">
        <p className="atx-card-pull">&ldquo;{t.pull}&rdquo;</p>
        <Link to="/free-growth-audit" className="atx-btn atx-btn-primary atx-btn-sm" aria-label={`Get the ${t.title} workflow`}>
          Get this workflow <ArrowIcon size={14} />
        </Link>
      </div>
    </div>
  </li>
);

const Library = ({ visible }: { visible: Template[] }) => (
  <section className="atx-list" id="atx-list" aria-labelledby="atx-list-title">
    <div className="container-shell">
      <header className="adv-head det-head">
        <span className="adv-eyebrow">/ 03 &nbsp; The library</span>
        <h2 id="atx-list-title" className="adv-h2">Six workflows. Each one shipped as a spec.</h2>
        <p className="adv-intro">
          Browse the library. Every card has its own nodes, compliance posture,
          and time-saved baseline — pick the one your clinic will actually use first.
        </p>
      </header>

      {visible.length === 0 ? (
        <div className="atx-empty">
          <span className="atx-empty-icon" aria-hidden="true">∅</span>
          <p>
            No templates in this category yet —{' '}
            <Link to="/free-growth-audit">request a custom build</Link>.
          </p>
        </div>
      ) : (
        <ol className="atx-cards">
          {visible.map((t, i) => (
            <TemplateCard key={t.num} t={t} index={i} />
          ))}
        </ol>
      )}
    </div>
  </section>
);

export default Library;
