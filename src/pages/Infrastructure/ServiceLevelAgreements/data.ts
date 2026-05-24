import { SITE } from '@/content/site';

export interface Tier {
  level: string;
  label: string;
  desc: string;
  ack: string;
  resolve: string;
  channel: string;
  tone: 'critical' | 'high' | 'standard' | 'low';
}

export const TIERS: Tier[] = [
  {
    level: 'SEV-0',
    label: 'Critical',
    desc: 'Production down, security event, or PHI exposure suspected.',
    ack: '< 15 min',
    resolve: '< 4 hr',
    channel: 'Phone + pager',
    tone: 'critical',
  },
  {
    level: 'SEV-1',
    label: 'High',
    desc: 'Booking funnel broken, ad-spend pacing off, or analytics blind spot.',
    ack: '< 1 hr',
    resolve: '< 12 hr',
    channel: 'Slack + email',
    tone: 'high',
  },
  {
    level: 'SEV-2',
    label: 'Standard',
    desc: 'Performance regression, content correction, or scheduled change.',
    ack: '< 4 hr',
    resolve: '< 2 business days',
    channel: 'Slack thread',
    tone: 'standard',
  },
  {
    level: 'SEV-3',
    label: 'Low',
    desc: 'Nice-to-have, exploratory, or strategic question.',
    ack: '< 1 business day',
    resolve: 'Next sprint',
    channel: 'Email + weekly review',
    tone: 'low',
  },
];

export interface RecordEntry {
  eyebrow: string;
  value: string;
  target: string;
  delta: 'up' | 'down' | 'flat';
  note: string;
}

export const RECORDS: RecordEntry[] = [
  {
    eyebrow: 'Uptime',
    value: '99.94%',
    target: 'vs 99.9% target',
    delta: 'up',
    note: 'Across all four monitored domains, measured by external monitor.',
  },
  {
    eyebrow: 'SEV-0 Acknowledgement',
    value: '11 min',
    target: 'vs <15 min target',
    delta: 'down',
    note: 'Median acknowledgement time across all critical incidents.',
  },
  {
    eyebrow: 'SEV-0 Resolution',
    value: '2.8 hr',
    target: 'vs <4 hr target',
    delta: 'down',
    note: 'Median time from acknowledgement to incident closure.',
  },
  {
    eyebrow: 'Compliance Escalations',
    value: '0',
    target: 'held at zero',
    delta: 'flat',
    note: 'Incidents escalated to legal counsel or regulators.',
  },
];

export interface FlowStep {
  num: string;
  label: string;
  title: string;
  body: string;
}

export const ESCALATION: FlowStep[] = [
  {
    num: '01',
    label: 'Signal',
    title: 'Issue detected',
    body: 'Automated monitor, user report, or proactive scan flags an anomaly. A ticket opens with full context.',
  },
  {
    num: '02',
    label: 'Triage',
    title: 'Severity assigned',
    body: 'Account director triages within minutes, assigns SEV-0 through SEV-3, and routes to the owning specialist.',
  },
  {
    num: '03',
    label: 'Own',
    title: 'Specialist resolves',
    body: 'The named owner takes the work. Status updates ship on the channel agreed at signing - phone, Slack, or email.',
  },
  {
    num: '04',
    label: 'Close',
    title: 'Post-mortem',
    body: 'SEV-0 / SEV-1 incidents close with a written post-mortem indexed for the engagement. Patterns drive sprint priorities.',
  },
];

export const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Service Level Agreements - Healthcare Marketing',
  serviceType: 'Documented SLA & Response Time Commitment',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: 'Multi-location healthcare practices, networks',
};
