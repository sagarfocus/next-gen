/**
 * Home page — Testimonials section content.
 *
 * Pure data — the carousel rendering (scroll snap, chevrons, progress bar)
 * lives in `src/pages/Home/Testimonials.tsx`.
 */

export interface HomeTestimonial {
  initials: string;
  text: string;
  name: string;
  title: string;
}

export const HOME_TESTIMONIALS_HEAD = {
  eyebrow: 'Testimonials',
  title: 'Trusted by healthcare leaders.',
  sub: 'Join the practices that have transformed their patient acquisition with TheNextGen.',
} as const;

export const HOME_TESTIMONIALS: readonly HomeTestimonial[] = [
  {
    initials: 'SC',
    text: 'TheNextGen rebuilt our entire patient pipeline. In 90 days, consults tripled and our cost per lead dropped by half.',
    name: 'Dr. Sarah Chen',
    title: 'Owner, Beverly Hills MedSpa',
  },
  {
    initials: 'MR',
    text: 'Their HIPAA-aware paid media let us scale with confidence. We’ve seen consistent month-over-month growth for over a year.',
    name: 'Mark Reynolds',
    title: 'Practice Director, Premier Dental',
  },
  {
    initials: 'ER',
    text: 'Every decision is backed by clear reporting. The weekly optimization keeps our funnel sharp and our team aligned.',
    name: 'Dr. Emily Rodriguez',
    title: 'Founder, Wellness Collective',
  },
  {
    initials: 'JP',
    text: 'They understand healthcare. Compliance was seamless and ROI showed up in our very first quarter.',
    name: 'James Park',
    title: 'CEO, Urgent Care Network',
  },
];
