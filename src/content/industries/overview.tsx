import type { ReactElement } from 'react';
import emergencyImg from '../../assets/nextgen-image/Erofwhiterockimg.jpg';
import urgentCareImg from '../../assets/nextgen-image/Irvingmedspaimg.webp';
import medspaImg from '../../assets/nextgen-image/Napervilleimg.jpg';

export interface OverviewCard {
  slug: string;
  ariaId: string;
  meta: string;
  titleText: string;
  title: ReactElement;
  text: string;
  image: string;
  imageAlt: string;
}

export const CARDS: OverviewCard[] = [
  {
    slug: 'freestanding-er',
    ariaId: 'ov-1',
    meta: 'High Acuity',
    titleText: 'Freestanding Emergency Rooms',
    title: <>Freestanding Emergency Rooms</>,
    text: 'Patient acquisition built for trauma searches, immediate visibility, and competitor overflow capture.',
    image: emergencyImg,
    imageAlt: 'Freestanding emergency room illustration',
  },
  {
    slug: 'urgent-care',
    ariaId: 'ov-2',
    meta: 'Walk-In Volume',
    titleText: 'Urgent Care & Walk-in Clinics',
    title: <>Urgent Care &amp; Walk-in Clinics</>,
    text: 'Volume-driven patient acquisition with reputation systems and wait-time transparency.',
    image: urgentCareImg,
    imageAlt: 'Urgent care clock illustration',
  },
  {
    slug: 'medspa',
    ariaId: 'ov-3',
    meta: 'Longevity',
    titleText: 'MedSpas & Wellness Clinics',
    title: <>MedSpas &amp; Wellness Clinics</>,
    text: 'High-LTV patient acquisition with social-led lead generation and automated retention sequences.',
    image: medspaImg,
    imageAlt: 'MedSpa wellness illustration',
  },
];
