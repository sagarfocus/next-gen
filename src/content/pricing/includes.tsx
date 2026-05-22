import type { ReactElement, ReactNode } from 'react';
import { UsersIcon } from '../../components/icons';

export interface IncludeCard {
  tag: string;
  title: string;
  text: ReactNode;
  bullets: ReactNode[];
  icon: ReactElement;
}

export const CARDS: IncludeCard[] = [
  {
    tag: 'Full-Stack Team',
    title: 'An entire growth department.',
    text: (
      <>
        Dedicated Ads Manager, SEO Strategist, Medical Content Writer, and
        Social Media Manager - not isolated freelancers.
      </>
    ),
    bullets: [
      'Senior practitioners only',
      'Healthcare-fluent from day one',
      'Real analytics infrastructure',
    ],
    icon: (
      <UsersIcon size={22} strokeWidth={1.8} />
    ),
  },
  {
    tag: '30-Day Launch Sprint',
    title: 'Tangible results in month one.',
    text: (
      <>
        Technical audit, CRM/EHR integration, HIPAA-compliant call tracking,
        AI chatbot deployment, and first campaign launches - all in 30
        days.
      </>
    ),
    bullets: [
      'Structured onboarding flow',
      'Operational improvements visible',
      'First wave of campaigns live',
    ],
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    tag: 'HIPAA Infrastructure',
    title: 'Compliance built in, not billed extra.',
    text: (
      <>
        BAAs signed at signup, encrypted servers, secure data routing -
        full HIPAA compliance with zero hidden fees.
      </>
    ),
    bullets: [
      'BAAs included by default',
      'Encrypted data infrastructure',
      'See case studies',
    ],
    icon: (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 L 4 6 V 12 C 4 16.5 7.5 20.7 12 22 C 16.5 20.7 20 16.5 20 12 V 6 Z" />
        <path d="M9 12 L 11 14 L 15 10" />
      </svg>
    ),
  },
];
