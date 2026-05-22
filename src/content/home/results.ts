/**
 * Home page — "Proof of Work" section content.
 *
 * The featured stat's giant inline SVG illustration (Instagram post mockup,
 * growth curve, analytics bars) stays in `src/pages/Home/Results.tsx` —
 * it's bespoke rendering, not data.
 */

export interface HomeSmallStat {
  tag: string;
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  ariaLabel: string;
}

export const HOME_RESULTS_HEAD = {
  eyebrow: 'Proof of Work',
  title: 'Real results.',
  // `don’t` uses U+2019 (right single quote), preserved from JSX `&rsquo;`.
  sub: 'We don’t just talk - we deliver measurable outcomes for healthcare practices.',
} as const;

export const HOME_RESULTS_FEATURED = {
  tag: 'MedSpa',
  value: 312,
  suffix: '%',
  duration: 2,
  // `90 days` keeps U+00A0 (NBSP) between the number and `days`,
  // preserved from JSX `&nbsp;`.
  label:
    'Increase in Instagram leads in 90 days - from a single optimized funnel and creative refresh.',
  ariaLabel: '312% increase in Instagram leads - MedSpa',
} as const;

export const HOME_RESULTS_SMALL_STATS: readonly HomeSmallStat[] = [
  {
    tag: 'Emergency Room',
    value: 47,
    suffix: '%',
    label: 'Increase in walk-in patients in six months.',
    ariaLabel: '47% increase in walk-in patients - Emergency Room',
  },
  {
    tag: 'Urgent Care',
    value: 2.8,
    suffix: '×',
    decimals: 1,
    label: 'Return on ad spend in the first quarter.',
    ariaLabel: '2.8x return on ad spend - Urgent Care',
  },
  {
    tag: 'MedSpa Network',
    value: 1.2,
    prefix: '$',
    suffix: 'M',
    decimals: 1,
    label: 'Revenue generated from Facebook ads in 12 months.',
    ariaLabel: '$1.2M revenue generated - MedSpa Network',
  },
];
