import type { ReactElement } from 'react';
import { ClockIcon, UsersIcon } from '@/components/icons';

export interface InfraCard {
  featured?: boolean;
  tag: string;
  title: string;
  text: string;
  bullets: string[];
  icon: ReactElement;
  to: string;
}

export const CARDS: InfraCard[] = [
  {
    featured: true,
    tag: 'The Growth Team',
    title: 'Dedicated specialists driving patient volume.',
    text: 'A senior, healthcare-fluent team focused entirely on driving qualified patient volume to your facility - integrated into your operations.',
    bullets: [
      'Dedicated Ads Manager',
      'SEO & AEO Strategist',
      'Medical Content Writer',
      'Social Media Manager',
    ],
    to: '/infrastructure/growth-team',
    icon: (
      <UsersIcon />
    ),
  },
  {
    tag: 'Compliance Protocol',
    title: 'Built around healthcare data security.',
    text: 'We understand the regulatory environment of healthcare. Our infrastructure is engineered around data security from day one.',
    bullets: [
      'BAA Readiness & Execution',
      'Strict HIPAA Data Routing',
      'Encrypted Patient Intake',
      'Secure Cloud Architecture',
    ],
    to: '/infrastructure/compliance-protocol',
    icon: (
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
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    tag: 'Service Level Agreements',
    title: 'Rapid response is a clinical necessity.',
    text: 'In the medical sector, response time matters. We document guaranteed SLAs so you always know what to expect.',
    bullets: [
      'Under 4 Hours for Critical Updates',
      '24/7 Uptime Monitoring',
      'Real-Time Dashboard Access',
      'Documented Escalation Paths',
    ],
    to: '/infrastructure/service-level-agreements',
    icon: (
      <ClockIcon size={26} strokeWidth={1.7} />
    ),
  },
];
