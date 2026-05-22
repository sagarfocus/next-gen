import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '../caseStudies.data';
import { ArrowOutIcon } from '@/components/icons';
import { ArrowLeft } from './icons';

const NotFoundCase = () => (
  <main className="csd" id="csd-top">
    <section className="csd-missing">
      <div className="container-shell">
        <p className="csd-missing-eyebrow">Case 404</p>
        <h1 className="csd-missing-h1">That case study has been retired or moved.</h1>
        <p className="csd-missing-sub">
          Pick a live engagement from the library below, or head back to the carousel.
        </p>
        <Link to="/case-studies#cs-all" className="csd-missing-link">
          <ArrowLeft /> Back to the case library
        </Link>
        <ul className="csd-missing-list">
          {CASE_STUDIES.map((c) => (
            <li key={c.id}>
              <Link to={`/case-studies/${c.id}`}>
                <span className="csd-missing-emoji" aria-hidden="true">
                  {c.emoji}
                </span>
                <span>{c.name}</span>
                <ArrowOutIcon strokeWidth={2} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </main>
);

export default NotFoundCase;
