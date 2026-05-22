import type { ReactElement } from 'react';

export interface TrustCardData {
  featured?: boolean;
  ariaId: string;
  icon: ReactElement;
  tag: string;
  title: string;
  text: string;
  bullets: string[];
  to: string;
}

const StarShieldIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 L 14.6 9 L 22 9.5 L 16.5 14 L 18 21.5 L 12 17.5 L 6 21.5 L 7.5 14 L 2 9.5 L 9.4 9 Z" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
    <path d="M9 12 L 11 14 L 15 10" />
  </svg>
);

export const TRUST_CARDS: TrustCardData[] = [
  {
    featured: true,
    ariaId: 'trust-1',
    icon: <StarShieldIcon />,
    tag: 'Patient Trust',
    title: 'Reputation Management',
    text: 'Active monitoring and response across Google, Healthgrades, and Vitals - turning patient feedback into a competitive advantage.',
    bullets: [
      'Review monitoring & response automation',
      'Sentiment analysis dashboards',
      'HIPAA-compliant response templates',
      'Multi-platform reputation scoring',
    ],
    to: '/reviews-reputation',
  },
  {
    ariaId: 'trust-2',
    icon: <ShieldCheckIcon />,
    tag: 'Compliance',
    title: 'HIPAA-Compliant Web Design',
    text: 'Secure, accessible websites engineered for the healthcare standard - encrypted forms, BAA-ready hosting, and ADA accessibility.',
    bullets: [
      'SSL encryption & secure form handling',
      'BAA-ready hosting infrastructure',
      'WCAG 2.1 AA accessibility compliance',
      'Annual security audits & updates',
    ],
    to: '/hipaa-compliance',
  },
];
