interface Stat {
  num: string;
  suffix?: string;
  label: string;
}

const STATS: Stat[] = [
  { num: '47', suffix: '+', label: 'Healthcare Clinics Helped' },
  { num: '$12M', suffix: '+', label: 'Total Client Revenue Driven' },
  { num: '210', suffix: '%', label: 'Average ROI Across Engagements' },
  { num: '500K', suffix: '+', label: 'Patient Appointments Booked' },
];

const StatsStrip = () => {
  return (
    <section className="cs-stats" aria-label="Agency results">
      <div className="container-shell">
        <div className="cs-stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="cs-stat-item">
              <div className="cs-stat-num">
                {stat.num}
                {stat.suffix && <em>{stat.suffix}</em>}
              </div>
              <div className="cs-stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
