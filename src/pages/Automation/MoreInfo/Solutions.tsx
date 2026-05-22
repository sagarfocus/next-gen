import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../components/icons';
import { SOLUTIONS } from './data';

const Solutions = () => (
  <section
    className="amih-solutions"
    id="amih-solutions"
    aria-labelledby="amih-solutions-title"
  >
    <div className="container-shell">
      <header className="amih-section-head amih-section-head--split">
        <div>
          <span className="amih-section-label">/ 03 &nbsp; The library</span>
          <h2 id="amih-solutions-title" className="amih-h2">
            Three categories that recover the most time and revenue.
          </h2>
        </div>
        <p className="amih-section-sub">
          We start with whichever lane has the biggest leak in your
          clinic. The other two layer in once the first is running clean.
        </p>
      </header>
      <div className="amih-solutions-grid">
        {SOLUTIONS.map((s) => (
          <article key={s.title} className="amih-sol-card">
            <span className="amih-sol-tag">{s.tag}</span>
            <h3 className="amih-sol-title">{s.title}</h3>
            <p className="amih-sol-desc">{s.desc}</p>
            <Link to={s.to} className="amih-sol-link">
              Read the workflow <ArrowIcon size={14} strokeWidth={2.2} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
