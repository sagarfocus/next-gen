import { SITE } from '../../../content/site';

export const buildWalkthroughMailto = (form: HTMLFormElement) => {
  const data = new FormData(form);
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const clinic = String(data.get('clinic') ?? '').trim();
  const task = String(data.get('task') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  const subject = `Automation walkthrough request${clinic ? ` - ${clinic}` : ''}`;
  const body = [
    name ? `Name: ${name}` : null,
    email ? `Email: ${email}` : null,
    clinic ? `Clinic: ${clinic}` : null,
    task ? `Top manual task: ${task}` : null,
    '',
    message ? `What I would automate first:\n${message}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const PILLARS = [
  {
    num: '01',
    title: 'Workflow first',
    desc: 'Every automation maps a real clinical workflow - intake, follow-up, reminders, billing - not a generic SaaS use case.',
  },
  {
    num: '02',
    title: 'HIPAA-aware',
    desc: 'Encrypted transport, BAA-ready vendor stack, server-side tracking. Compliance is the default, never a retrofit.',
  },
  {
    num: '03',
    title: 'Ships in days',
    desc: 'Import the template, connect your stack, go live. Most clinics move from kickoff to first automated patient in under a week.',
  },
];

export const CHECKLIST = [
  'Plug-and-play templates for N8N, Zapier and Make',
  'Pre-built integrations with leading PM / EHR systems',
  'Audit logs and consent capture out of the box',
  'Documented escalation paths for human takeover',
  'Quarterly compliance review with our growth team',
  'Drop-in replacements for 20+ manual front-desk tasks',
];

export const SOLUTIONS = [
  {
    tag: 'Front Desk',
    title: 'Patient intake & verification',
    desc: 'Forms, insurance capture, eligibility checks, and chart prep - all complete before the patient walks in.',
    to: '/medical-automation',
  },
  {
    tag: 'Reminders',
    title: 'Two-way SMS & email reminders',
    desc: 'Multi-touch reminder cadences with auto-rescheduling links. Recover 18% of no-shows in the first 60 days.',
    to: '/automation/templates',
  },
  {
    tag: 'Revenue',
    title: 'Reviews, recalls & reactivation',
    desc: 'HIPAA-aware review requests, recall campaigns, and dormant-patient re-engagement that compounds month over month.',
    to: '/reviews-reputation',
  },
];

export const STEPS = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We map every manual task and rank it by hours saved and revenue impact.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'We configure templates inside your stack - EHR, PM, calendar, messaging.',
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'Go live with a single touchpoint, then layer the next once it is stable.',
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'We tune cadences, copy, and triggers weekly. You own the data and dashboards.',
  },
];
