import Hero from './Hero';
import WhatWeDo from '../../components/service/WhatWeDo';
import HowItWorks from '../../components/service/HowItWorks';
import Results from '../../components/service/Results';
import ServiceCTA from '../../components/service/ServiceCTA';
import type { DoCard } from '../../components/service/WhatWeDo';
import type { HowStep } from '../../components/service/HowItWorks';
import type { ResultStat } from '../../components/service/Results';

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);
const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);
const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 14.5 9 21 9.5 16 14 17.5 21 12 17.5 6.5 21 8 14 3 9.5 9.5 9" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="20" x2="4" y2="11" />
    <line x1="10" y1="20" x2="10" y2="4" />
    <line x1="16" y1="20" x2="16" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const DO_CARDS: DoCard[] = [
  { name: 'Content Strategy', desc: 'Patient-led editorial calendar mapped to your specialties and revenue goals.', icon: <PinIcon /> },
  { name: 'Reels & Creatives', desc: 'Short-form video, carousels, and graphics produced in-house — clinically reviewed.', icon: <LinkIcon /> },
  { name: 'Paid Amplification', desc: 'Boosted posts and dark-post campaigns layered on top of your organic reach.', icon: <FileIcon /> },
  { name: 'Community Growth', desc: 'DM responses, comment moderation, follower-list nurturing on a daily SLA.', icon: <NetworkIcon /> },
  { name: 'Compliance Review', desc: 'Every post pre-screened for HIPAA, HHS, and state board guidelines.', icon: <StarIcon /> },
  { name: 'Performance Reporting', desc: 'Reach, engagement, leads, and bookings tracked back to every post.', icon: <ChartIcon /> },
];

const STEPS: HowStep[] = [
  { num: '01', name: 'Audit', desc: 'Channel mix, content types, and competitor benchmark.' },
  { num: '02', name: 'Strategy', desc: 'Editorial calendar and creative system locked.' },
  { num: '03', name: 'Execution', desc: 'Daily posting, paid amplification, community management.' },
  { num: '04', name: 'Optimization', desc: 'Top-performer doubling, format A/B tests, monthly retro.' },
];

const STATS: ResultStat[] = [
  {
    num: (
      <>
        312<em>%</em>
      </>
    ),
    label: 'Avg reach lift',
  },
  {
    num: (
      <>
        5.8<em>%</em>
      </>
    ),
    label: 'Engagement rate',
  },
  {
    num: (
      <>
        8.2K<em>+</em>
      </>
    ),
    label: 'Followers gained',
  },
  {
    num: (
      <>
        47<em>+</em>
      </>
    ),
    label: 'Monthly bookings',
  },
];

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Social Media Marketing',
  provider: {
    '@type': 'Organization',
    name: 'TheNextGen Healthcare Marketing',
  },
  serviceType: 'Social Media Marketing',
};

const SocialMedia = () => {
  return (
    <>
      <Hero />
      <WhatWeDo cards={DO_CARDS} />
      <HowItWorks steps={STEPS} />
      <Results stats={STATS} />
      <ServiceCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
    </>
  );
};

export default SocialMedia;
