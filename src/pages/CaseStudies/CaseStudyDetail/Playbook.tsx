import type { CaseStudy } from '../caseStudies.data';

const Playbook = ({ study }: { study: CaseStudy }) => (
  <section className="csd-playbook" aria-labelledby="csd-playbook-title">
    <div className="container-shell">
      <header className="csd-playbook-head">
        <span className="csd-section-rail">02 - The engagement</span>
        <h2 id="csd-playbook-title" className="csd-playbook-title">
          How we got from week zero to the headline number.
        </h2>
        <p className="csd-playbook-sub">
          A three-phase narrative - what was broken, what we decided, and what shipped. No
          reverse-engineered storytelling. Pulled directly from the engagement notes.
        </p>
      </header>

      <ol className="csd-phases">
        {study.phases.map((phase, i) => {
          const phaseIcon = (
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.9}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {i === 0 && (
                <>
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </>
              )}
              {i === 1 && (
                <>
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-5 11.9c1 1.1 1.5 2.4 1.5 3.6V18h7v-.5c0-1.2.6-2.5 1.5-3.6A7 7 0 0 0 12 2z" />
                </>
              )}
              {i === 2 && (
                <>
                  <path d="M4.5 16.5C3 18 3 21 3 21s3 0 4.5-1.5C8.5 18.5 9 17 9 17l-2-2s-1.5.5-2.5 1.5z" />
                  <path d="M14 7l-1-1 7-4-1 7-4 1-1-1" />
                  <path d="M9 11c-1 1-2 3-2 4l2 2c1 0 3-1 4-2l5-5-4-4-5 5z" />
                </>
              )}
            </svg>
          );
          return (
            <li key={phase.label} className={`csd-phase csd-phase--${i + 1}`}>
              <div className="csd-phase-rail">
                <span className="csd-phase-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="csd-phase-line" aria-hidden="true" />
              </div>
              <div className="csd-phase-body">
                <span className="csd-phase-label">
                  <span className="csd-phase-label-ico" aria-hidden="true">
                    {phaseIcon}
                  </span>
                  {phase.label}
                </span>
                <h3 className="csd-phase-headline">{phase.headline}</h3>
                <p className="csd-phase-narrative">{phase.narrative}</p>
                <ul className="csd-phase-tactics">
                  {phase.tactics.map((t) => (
                    <li key={t}>
                      <span className="csd-tick" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="csd-toolstrip">
        <span className="csd-toolstrip-label">Tools in this engagement</span>
        <ul className="csd-tool-chips">
          {study.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Playbook;
