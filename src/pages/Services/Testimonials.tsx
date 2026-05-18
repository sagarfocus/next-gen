interface Quote {
  text: string;
  name: string;
  role: string;
  practice: string;
  initials: string;
  tone: 'gold' | 'sage' | 'blue';
  metric: { v: string; l: string };
}

const QUOTES: Quote[] = [
  {
    text: 'They rebuilt our entire patient acquisition funnel in eight weeks. By day 90 our CPA was down 41% and our show rate hit 88%. No agency we had worked with before delivered weekly numbers like this.',
    name: 'Dr. Sarah Mitchell',
    role: 'Medical Director',
    practice: 'SunCrest Freestanding ER',
    initials: 'SM',
    tone: 'gold',
    metric: { v: '−41%', l: 'CPA in 90 days' },
  },
  {
    text: 'What we wanted was honesty about what was actually working. We finally got it. A senior strategist on every call, no account-exec runaround, and the numbers ship every Friday at 9am like clockwork.',
    name: 'Michael Rivera',
    role: 'Owner',
    practice: 'VitalSpa Aesthetics',
    initials: 'MR',
    tone: 'sage',
    metric: { v: '+62%', l: 'AOV, six months' },
  },
  {
    text: 'Seven locations, seven sets of broken dashboards. They consolidated everything in three weeks, and now our regional VP can see per-clinic pipeline in real time. Worth every dollar.',
    name: 'Jennifer Park',
    role: 'Chief Operating Officer',
    practice: 'NorthLake Dental',
    initials: 'JP',
    tone: 'blue',
    metric: { v: '−48%', l: 'Cost per patient' },
  },
];

const QuoteMark = () => (
  <svg
    width={36}
    height={28}
    viewBox="0 0 36 28"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M0 28V16C0 7.2 5.6 1.6 14 0v6.4c-3.2 1.6-4.8 4.4-4.8 8.4H14V28H0zm22 0V16C22 7.2 27.6 1.6 36 0v6.4c-3.2 1.6-4.8 4.4-4.8 8.4H36V28H22z" />
  </svg>
);

const StarRow = () => (
  <div className="svc-quote-stars" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width={14}
        height={14}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section className="svc-quotes" aria-labelledby="svc-quotes-title">
    <div className="container-shell">
      <header className="svc-quotes-head">
        <span className="svc-quotes-eyebrow">Trusted by 200+ practices</span>
        <h2 id="svc-quotes-title" className="svc-quotes-h2">
          What practices say after the first 90 days.
        </h2>
        <p className="svc-quotes-sub">
          Real words from medical directors and practice owners we have shipped for.
          Outcomes verified against their own EHR and PM-system data.
        </p>
      </header>

      <div className="svc-quotes-grid">
        {QUOTES.map((q) => (
          <article key={q.name} className={`svc-quote-card tone-${q.tone}`}>
            <span className="svc-quote-mark" aria-hidden="true"><QuoteMark /></span>
            <StarRow />
            <p className="svc-quote-text">{q.text}</p>

            <div className="svc-quote-metric">
              <strong>{q.metric.v}</strong>
              <span>{q.metric.l}</span>
            </div>

            <footer className="svc-quote-foot">
              <span className={`svc-quote-avatar tone-${q.tone}`} aria-hidden="true">{q.initials}</span>
              <span className="svc-quote-by">
                <span className="svc-quote-name">{q.name}</span>
                <span className="svc-quote-role">{q.role} · {q.practice}</span>
              </span>
            </footer>
          </article>
        ))}
      </div>

      <div className="svc-quotes-strip" aria-label="Aggregate proof">
        <div>
          <strong>200+</strong>
          <span>Healthcare practices served</span>
        </div>
        <div>
          <strong>4.9 / 5</strong>
          <span>Average client rating</span>
        </div>
        <div>
          <strong>$24M+</strong>
          <span>Pipeline moved this year</span>
        </div>
        <div>
          <strong>4.1×</strong>
          <span>Median client ROAS</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
