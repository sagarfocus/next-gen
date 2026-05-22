import type { ReactNode } from 'react';

export interface PillarPane {
  id: string;
  num: string;
  /** Short tag shown next to the number (e.g. "Patient Portal"). */
  tag: string;
  /** Tab label in the left list. */
  listTitle: string;
  /** Subtitle in the left list. */
  listSub: string;
  /** Detail title (right pane). */
  detailTitle: string;
  /** Detail body. */
  detailText: ReactNode;
  /** Bullet list. Use <strong> for emphasis. */
  bullets: ReactNode[];
  /** Footer label (timeline). */
  foot: string;
}

export const CUSTOM_SOFTWARE_PANES: PillarPane[] = [
  {
    id: 'p1-1',
    num: '01',
    tag: 'Patient Portal',
    listTitle: 'Custom Patient Portals',
    listSub: 'Secure portals for intake, records, and telehealth.',
    detailTitle: 'Custom Patient Portals',
    detailText:
      'Secure, branded portals built around your clinical workflows - intake, records access, prescription requests, and telehealth all in one place. Designed to reduce front-desk load while improving patient experience.',
    bullets: [
      <>
        <strong>HIPAA-aware</strong> data handling and BAA-ready hosting
      </>,
      <>
        <strong>Telehealth</strong> sessions with secure video and chat
      </>,
      <>
        <strong>Digital intake</strong> forms with insurance verification
      </>,
      <>
        <strong>Records &amp; results</strong> accessible on any device
      </>,
    ],
    foot: 'Build - Week 4–8',
  },
  {
    id: 'p1-2',
    num: '02',
    tag: 'Integrations',
    listTitle: 'Integrations & APIs',
    listSub: 'EHR, billing, and analytics integrations via secure APIs.',
    detailTitle: 'Integrations & APIs',
    detailText:
      'Connect your EHR, billing platform, CRM, and analytics stack through secure, well-documented APIs. We engineer reliable data flows that eliminate manual work and keep every system in sync.',
    bullets: [
      <>
        <strong>EHR connectors</strong> for Epic, Cerner, Athena, and more
      </>,
      <>
        <strong>Billing &amp; payments</strong> integrated with claims workflows
      </>,
      <>
        <strong>Analytics piping</strong> from source systems to dashboards
      </>,
      <>
        <strong>Webhook orchestration</strong> with retry &amp; observability
      </>,
    ],
    foot: 'Integration - Week 6–12',
  },
];

export const AUTOMATION_PANES: PillarPane[] = [
  {
    id: 'p2-1',
    num: '01',
    tag: 'AI Intake',
    listTitle: 'AI Intake Automation',
    listSub: 'Secure, conversational intake that verifies insurance and obtains consent.',
    detailTitle: 'AI Intake Automation',
    detailText:
      'Conversational intake that handles new-patient onboarding 24/7 - verifies insurance eligibility in real time, obtains digital consent, and routes complete records to your EHR before the appointment.',
    bullets: [
      <>
        <strong>Real-time eligibility</strong> checks against major payers
      </>,
      <>
        <strong>Digital consent</strong> with audit-ready signatures
      </>,
      <>
        <strong>Multi-language</strong> support for diverse patient bases
      </>,
      <>
        <strong>EHR sync</strong> - intake lands in the chart, not a PDF
      </>,
    ],
    foot: 'Live - Day 14–21',
  },
  {
    id: 'p2-2',
    num: '02',
    tag: 'Scheduling',
    listTitle: 'Automated Scheduling',
    listSub: 'Real-time availability and reminders to reduce no-shows.',
    detailTitle: 'Automated Scheduling',
    detailText:
      'Real-time availability surfaces directly on your site, ad landing pages, and Google Business Profile. Smart reminders - SMS, email, and voice - cut no-show rates dramatically without adding staff.',
    bullets: [
      <>
        <strong>Real-time slots</strong> synced to provider calendars
      </>,
      <>
        <strong>Smart reminders</strong> via SMS, email, and voice
      </>,
      <>
        <strong>Self-service rescheduling</strong> reduces phone volume
      </>,
      <>
        <strong>No-show prediction</strong> flags high-risk appointments
      </>,
    ],
    foot: 'Live - Day 7–14',
  },
];
