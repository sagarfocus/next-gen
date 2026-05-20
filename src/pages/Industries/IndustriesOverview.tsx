import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import emergencyImg from '../../assets/freestandingemergency.png';
import urgentCareImg from "../../assets/urgentcare'.png";
import medspaImg from '../../assets/medddsspa.png';
import { industryDetailHref } from './details.data';

interface OverviewCard {
  slug: string;
  ariaId: string;
  meta: string;
  titleText: string;
  title: ReactElement;
  text: string;
  image: string;
  imageAlt: string;
}

const ArrowIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const CARDS: OverviewCard[] = [
  {
    slug: 'freestanding-er',
    ariaId: 'ov-1',
    meta: 'High Acuity',
    titleText: 'Freestanding Emergency Rooms',
    title: <>Freestanding Emergency Rooms</>,
    text: 'Patient acquisition built for trauma searches, immediate visibility, and competitor overflow capture.',
    image: emergencyImg,
    imageAlt: 'Freestanding emergency room illustration',
  },
  {
    slug: 'urgent-care',
    ariaId: 'ov-2',
    meta: 'Walk-In Volume',
    titleText: 'Urgent Care & Walk-in Clinics',
    title: <>Urgent Care &amp; Walk-in Clinics</>,
    text: 'Volume-driven patient acquisition with reputation systems and wait-time transparency.',
    image: urgentCareImg,
    imageAlt: 'Urgent care clock illustration',
  },
  {
    slug: 'medspa',
    ariaId: 'ov-3',
    meta: 'Longevity',
    titleText: 'MedSpas & Wellness Clinics',
    title: <>MedSpas &amp; Wellness Clinics</>,
    text: 'High-LTV patient acquisition with social-led lead generation and automated retention sequences.',
    image: medspaImg,
    imageAlt: 'MedSpa wellness illustration',
  },
];

const IndustriesOverview = () => (
  <section className="ind-overview" aria-labelledby="ind-ov-title">
    <div className="container-shell">
      <div className="ind-ov-head">
        <span className="ind-ov-eyebrow">Who We Serve</span>
        <h2 id="ind-ov-title" className="ind-ov-h2">
          We currently serve three healthcare verticals.
        </h2>
        <p className="ind-ov-sub">
          Each industry has its own patient psychology, regulatory landscape,
          and acquisition dynamics. We build playbooks - not templates
          - for each one.
        </p>
        <a href="#deep-dive" className="ind-ov-link">
          Explore industry deep-dives
          <span className="ico" aria-hidden="true">
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      </div>

      <div className="ind-ov-grid">
        {CARDS.map((card) => (
          <Link
            key={card.ariaId}
            to={industryDetailHref(card.slug)}
            className="ind-ov-card"
            aria-labelledby={card.ariaId}
            aria-label={`Read more about ${card.titleText}`}
          >
            <div className="ind-ov-img has-img">
              <img
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                decoding="async"
              />
              <span className="ind-ov-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </div>
            <span className="ind-ov-meta">
              <span className="date">{card.meta}</span>
            </span>
            <h3 id={card.ariaId} className="ind-ov-title">
              {card.title}
            </h3>
            <p className="ind-ov-sub-text">{card.text}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesOverview;
