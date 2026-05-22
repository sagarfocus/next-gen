export interface ProcessStep {
  num: string;
  title: string;
  desc: string;
  active?: boolean;
}

export const STEPS: ProcessStep[] = [
  {
    num: '/01',
    title: 'Discovery & Audit',
    desc: 'We dive into your current marketing, identify gaps, and learn about your patients.',
  },
  {
    num: '/02',
    title: 'Custom Strategy',
    desc: 'You get a tailored marketing plan based on real data, not guesswork.',
  },
  {
    num: '/03',
    title: 'Build & Setup',
    desc: 'We deploy your tech stack - landing pages, tracking, automation, and dashboards.',
  },
  {
    num: '/04',
    title: 'Launch',
    desc: 'We execute campaigns across every channel - search, social, and email.',
    active: true,
  },
  {
    num: '/05',
    title: 'Optimize',
    desc: 'We run A/B tests, analyze results, and refine your campaigns weekly.',
  },
  {
    num: '/06',
    title: 'Scale',
    desc: 'When we find what works, we double down to boost your patient volume.',
  },
];
