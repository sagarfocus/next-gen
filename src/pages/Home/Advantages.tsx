import { CountUp } from '../../lib/motion';
import advantagesImg from '../../assets/ouradvanbtage.png';

interface AdvantageStat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

interface AdvantageCard {
  title: string;
  desc: string;
  icon: 'hand' | 'price' | 'manager' | 'shield';
}

const STATS: AdvantageStat[] = [
  { value: 98, suffix: '%', label: 'Client retention rate' },
  { value: 200, suffix: '+', label: 'Healthcare practices grown' },
  { value: 30, prefix: '≤', suffix: ' Days', label: 'To first qualified leads' },
];

const CARDS_LEFT: AdvantageCard[] = [
  {
    icon: 'hand',
    title: 'Everything under one roof',
    desc: 'SEO, paid media, content, automation, and reporting — one team, one source of truth. No vendor stitching, no finger-pointing across agencies.',
  },
  {
    icon: 'manager',
    title: 'Your dedicated growth lead',
    desc: 'A single accountable strategist who owns your roadmap, runs weekly reviews, and is reachable when patient volume needs to move now — not next sprint.',
  },
];

const CARDS_RIGHT: AdvantageCard[] = [
  {
    icon: 'price',
    title: 'Fixed pricing & clear timelines',
    desc: 'Transparent monthly plans with milestones you can map to your board. No surprise invoices, no buried retainer creep — what you sign is what you pay.',
  },
  {
    icon: 'shield',
    title: 'HIPAA-aware specialists',
    desc: 'Every campaign, pixel, and intake form is built by healthcare-trained operators using BAA-ready stacks and server-side tracking. Compliance is the default, not an afterthought.',
  },
];

const Icon = ({ name }: { name: AdvantageCard['icon'] }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'hand':
      return (
        <svg {...common}>
          <path d="M7 11V6a2 2 0 0 1 4 0v5" />
          <path d="M11 11V4a2 2 0 0 1 4 0v7" />
          <path d="M15 11V6a2 2 0 0 1 4 0v9a6 6 0 0 1-6 6h-2a6 6 0 0 1-5-2.7L4 16a2 2 0 0 1 3-2.7l2 1.7" />
        </svg>
      );
    case 'price':
      return (
        <svg {...common}>
          <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
          <circle cx="8" cy="8" r="1.6" />
        </svg>
      );
    case 'manager':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20a7 7 0 0 1 14 0" />
          <path d="M16.5 4.5a3 3 0 0 1 0 5" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
};

const Advantages = () => {
  return (
    <section
      className="adv-section"
      id="advantages"
      aria-labelledby="adv-title"
    >
      <div className="container-shell">
        <div className="adv-head">
          <span className="adv-eyebrow">Our Advantages</span>
          <h2 id="adv-title" className="adv-h2">
            One partner for healthcare growth.
          </h2>
          <p className="adv-intro">
            SEO, paid media, automation, and reporting under one roof &mdash;
            so your team has one accountable partner, not five disconnected
            vendors.
          </p>
        </div>

        <div className="adv-stats">
          {STATS.map((s) => (
            <div key={s.label} className="adv-stat">
              <p className="adv-stat-num">
                <CountUp
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={1.8}
                />
              </p>
              <p className="adv-stat-label">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="adv-grid">
          <div className="adv-col adv-col--left">
            {CARDS_LEFT.map((c) => (
              <article key={c.title} className="adv-card">
                <span className="adv-card-icon" aria-hidden="true">
                  <Icon name={c.icon} />
                </span>
                <h3 className="adv-card-title">{c.title}</h3>
                <p className="adv-card-desc">{c.desc}</p>
              </article>
            ))}
          </div>

          <div className="adv-media" aria-hidden="true">
            <div className="adv-media-frame">
              <img src={advantagesImg} alt="" loading="lazy" />
            </div>
          </div>

          <div className="adv-col adv-col--right">
            {CARDS_RIGHT.map((c) => (
              <article key={c.title} className="adv-card">
                <span className="adv-card-icon" aria-hidden="true">
                  <Icon name={c.icon} />
                </span>
                <h3 className="adv-card-title">{c.title}</h3>
                <p className="adv-card-desc">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
