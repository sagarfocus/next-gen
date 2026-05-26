import type { ReactNode } from 'react';

import phase1Img from '../../assets/nextgen-image/Analytics&report.png';
import phase2Img from '../../assets/nextgen-image/Strategy&planning.png';
import { PLACEHOLDER_IMAGE as phase3Img } from '@/lib/placeholderImage';

export interface Phase {
  num: string;
  phase: string;
  title: string;
  body: ReactNode;
  foot: string;
  href: string;
  image: string;
}

export const PHASES: Phase[] = [
  {
    num: '01',
    phase: 'Phase 1',
    title: 'Discovery & Technical Audit',
    href: '/methodology/phase-1',
    image: phase1Img,
    body: (
      <>
        We conduct a comprehensive audit of your existing digital infrastructure - website
        performance, SEO health, Google Business Profile optimization, paid media efficiency, and
        front-desk call handling capacity. This reveals exactly where patients are being lost in
        your funnel.
      </>
    ),
    foot: 'Audit - Week 1–2',
  },
  {
    num: '02',
    phase: 'Phase 2',
    title: 'Strategy & Infrastructure Build',
    href: '/methodology/phase-2',
    image: phase2Img,
    body: (
      <>
        We design your custom growth strategy mapping service-specific keywords, competitive
        positioning, and patient journey touchpoints. Simultaneously, our development team deploys
        the automation infrastructure - AI chatbots, digital intake forms, call tracking, and
        real-time analytics dashboards.
      </>
    ),
    foot: 'Build - Week 3–4',
  },
  {
    num: '03',
    phase: 'Phase 3',
    title: 'Launch & Accelerate',
    href: '/methodology/phase-3',
    image: phase3Img,
    body: (
      <>
        Within the first 30 days, we launch SEO optimizations, paid media campaigns across Google
        and Meta, social media content calendars, and healthcare content publishing. You will see
        tangible operational changes in patient inquiry volume and front-desk efficiency from week
        one.
      </>
    ),
    foot: 'Launch - Day 1–30',
  },
];
