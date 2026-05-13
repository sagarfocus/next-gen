interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  active?: boolean;
}

const STEPS: ProcessStep[] = [
  {
    num: '/01',
    title: 'Discovery & Audit',
    desc: 'We dive into your current marketing, identify gaps, and learn about your patients.',
  },
  {
    num: '/02',
    title: 'Custom Strategy',
    desc: 'You get a tailored marketing plan based on real data, not guesswork.',
  },
  {
    num: '/03',
    title: 'Build & Setup',
    desc: 'We deploy your tech stack — landing pages, tracking, automation, and dashboards.',
  },
  {
    num: '/04',
    title: 'Launch',
    desc: 'We execute campaigns across every channel — search, social, and email.',
    active: true,
  },
  {
    num: '/05',
    title: 'Optimize',
    desc: 'We run A/B tests, analyze results, and refine your campaigns weekly.',
  },
  {
    num: '/06',
    title: 'Scale',
    desc: 'When we find what works, we double down to boost your patient volume.',
  },
];

const Process = () => {
  return (
    <section
      className="process-section"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container-shell">
        <div className="process-head">
          <span className="process-eyebrow">Our Process</span>
          <h2 id="process-title" className="process-h2">
            A clear path from audit to scale.
          </h2>
          <p className="process-intro">
            A repeatable, data-driven system designed for clinics, medspas, and
            wellness brands ready to grow predictably.
          </p>
        </div>

        <ol className="process-steps process-steps--curved">
          {/* Decorative wave connector — replaces the old straight dashed line */}
          <svg
            className="process-curve"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 100 60 C 200 60, 200 140, 300 140 S 400 60, 500 60 S 600 140, 700 140 S 800 60, 900 60 S 1000 140, 1100 140"
              fill="none"
              stroke="#B38B6D"
              strokeWidth="1.4"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          {STEPS.map(({ num, title, desc, active }) => (
            <li key={num} className={`step${active ? ' is-active' : ''}`}>
              <div className="step-circle" aria-hidden="true">
                <span>
                  <span className="step-num">{num}</span>
                  <span className="step-title-visible">{title}</span>
                </span>
              </div>
              {/* Screen-reader-only heading; the visible title above is hidden via aria-hidden */}
              <h3 className="sr-only">{title}</h3>
              <p className="step-desc">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
