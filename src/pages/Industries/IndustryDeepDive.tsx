import type { ReactElement } from 'react';
import { ClockIcon } from '@/components/icons';

interface SubCard {
  num: string;
  category: string;
  title: string;
  text: string;
}

interface IndustryBlock {
  id: string;
  num: string;
  badge: string;
  iconClass: string;
  icon: ReactElement;
  title: ReactElement;
  desc: string;
  tags: string[];
  subs: SubCard[];
}

const ERIcon = () => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const BLOCKS: IndustryBlock[] = [
  {
    id: 'emergency-room',
    num: '01',
    badge: 'High Acuity',
    iconClass: 'ind-block-icon cta-blue',
    icon: <ERIcon />,
    title: <>Freestanding ERs (FSEDs)</>,
    desc: 'High-acuity patient acquisition where every minute matters. Built for visibility, urgency, and trust at the moment of crisis.',
    tags: ['Trauma', 'Local Pack', 'Geofencing'],
    subs: [
      {
        num: '/01',
        category: 'Visibility',
        title: 'Zero-Click Maps',
        text: 'Dominating the Local Pack for immediate visibility when seconds matter.',
      },
      {
        num: '/02',
        category: 'Search Intent',
        title: 'High-Acuity Keywords',
        text: 'Bidding on trauma and severe symptom searches with dedicated landing pages.',
      },
      {
        num: '/03',
        category: 'Capture',
        title: 'Competitor Geofencing',
        text: 'Capturing overflow from saturated urgent cares with geo-targeted messaging.',
      },
      {
        num: '/04',
        category: 'Reputation',
        title: 'Trust at First Click',
        text: 'Authority signals and social proof for crisis-moment decision-making.',
      },
    ],
  },
  {
    id: 'urgent-care',
    num: '02',
    badge: 'Walk-In Volume',
    iconClass: 'ind-block-icon',
    icon: <ClockIcon size={26} strokeWidth={1.7} />,
    title: <>Urgent Care &amp; Walk-in Clinics</>,
    desc: 'Convenience-driven patient acquisition built for high-volume throughput, transparency, and reputation at scale.',
    tags: ['Volume', 'Reviews', 'Wait Times'],
    subs: [
      {
        num: '/01',
        category: 'Throughput',
        title: 'Volume Optimization',
        text: 'Scaling patient acquisition efficiently without sacrificing quality of care.',
      },
      {
        num: '/02',
        category: 'Trust',
        title: 'Reputation Management',
        text: 'Automated review generation that builds trust at scale across every location.',
      },
      {
        num: '/03',
        category: 'Convenience',
        title: 'Wait-Time Marketing',
        text: 'Promoting transparency to win convenience-driven patients over competitors.',
      },
      {
        num: '/04',
        category: 'Coverage',
        title: 'Multi-Location SEO',
        text: 'Hyper-local content per location with consistent NAP citations across directories.',
      },
    ],
  },
  {
    id: 'wellness',
    num: '03',
    badge: 'Longevity',
    iconClass: 'ind-block-icon tan',
    icon: <HeartIcon />,
    title: <>Wellness &amp; Longevity Clinics</>,
    desc: 'High-LTV patient acquisition for elective and aesthetic services, with retention systems built around recurring revenue.',
    tags: ['High LTV', 'Social-Led', 'Retention'],
    subs: [
      {
        num: '/01',
        category: 'Acquisition',
        title: 'Lead Generation',
        text: 'Capturing high-intent prospects via social media with conversion-focused funnels.',
      },
      {
        num: '/02',
        category: 'Nurture',
        title: 'Automated Nurture',
        text: 'Building trust through educational email sequences that convert leads to bookings.',
      },
      {
        num: '/03',
        category: 'Retention',
        title: 'LTV Maximization',
        text: 'Focusing on recurring revenue and patient retention beyond first treatment.',
      },
      {
        num: '/04',
        category: 'Brand',
        title: 'Aesthetic Branding',
        text: 'Visual identity and content systems that signal premium, transformative outcomes.',
      },
    ],
  },
];

const IndustryDeepDive = () => {
  return (
    <section className="ind-deep" id="deep-dive" aria-labelledby="ind-deep-title">
      <div className="container-shell">
        <div className="ind-deep-head">
          <span className="ind-deep-eyebrow">Industry Playbooks</span>
          <h2 id="ind-deep-title" className="ind-deep-h2">
            Specialized strategies for each vertical.
          </h2>
          <p className="ind-deep-sub">
            Click any subtype to see the exact tactics, channels, and KPIs we
            deploy - built around the specific patient psychology of your
            industry.
          </p>
        </div>

        {BLOCKS.map((block) => (
          <article key={block.id} className="ind-block" id={block.id}>
            <header className="ind-block-head">
              <span className="ind-block-num">
                <span className="num">{block.num}</span>
                {block.badge}
              </span>
              <span className={block.iconClass} aria-hidden="true">
                {block.icon}
              </span>
              <h3 className="ind-block-title">{block.title}</h3>
              <p className="ind-block-desc">{block.desc}</p>
              <div className="ind-block-meta">
                {block.tags.map((tag) => (
                  <span key={tag} className="ind-block-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="ind-block-cards">
              {block.subs.map((sub) => (
                <div key={sub.num} className="ind-sub">
                  <span className="ind-sub-num">
                    {sub.num} &nbsp; {sub.category}
                  </span>
                  <h4 className="ind-sub-title">{sub.title}</h4>
                  <p className="ind-sub-text">{sub.text}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IndustryDeepDive;
