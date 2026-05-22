import { ArrowIcon } from '../../../components/icons';
import { STEPS } from './data';

const Process = () => (
  <section className="amih-process" aria-labelledby="amih-process-title">
    <div className="container-shell">
      <header className="amih-section-head amih-section-head--center">
        <span className="amih-section-label">/ 04 &nbsp; How we operate</span>
        <h2 id="amih-process-title" className="amih-h2">
          From audit to live in four deliberate moves.
        </h2>
      </header>
      <ol className="amih-process-grid">
        {STEPS.map((s, i) => (
          <li key={s.num} className="amih-step">
            <span className="amih-step-num">{s.num}</span>
            <h3 className="amih-step-title">{s.title}</h3>
            <p className="amih-step-desc">{s.desc}</p>
            {i < STEPS.length - 1 && (
              <span className="amih-step-arrow" aria-hidden="true">
                <ArrowIcon size={14} strokeWidth={2.2} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
