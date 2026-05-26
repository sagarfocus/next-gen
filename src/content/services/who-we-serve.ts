import clinicsImg from '../../assets/nextgen-image/Clinicalimg1.png';
import medspaImg from '../../assets/nextgen-image/Medspas&wellnessimg.png';
import emergencyImg from '../../assets/nextgen-image/Erimg.png';

export interface ServeCard {
  ariaId: string;
  image: string;
  imgPosition?: string;
  tag: string;
  title: string;
  desc: string;
  points: string[];
  accent: string;
  to: string;
  stat: string;
  cta: string;
}

export const CARDS: ServeCard[] = [
  {
    ariaId: 'serve-1',
    image: clinicsImg,
    tag: 'Clinical',
    title: 'Clinics & Multi-Specialty Practices',
    desc: 'Search, paid, and patient-acquisition systems engineered for single offices and multi-location networks alike.',
    points: ['Family Practice', 'Cardiology', 'Dental', 'Pediatrics'],
    accent: '#7AA1E8',
    to: '/industries/clinics',
    stat: '200+ clinics served',
    cta: 'Explore clinics',
  },
  {
    ariaId: 'serve-2',
    image: medspaImg,
    tag: 'Aesthetic',
    title: 'MedSpas & Wellness Brands',
    desc: 'High-volume social, Meta campaigns, and conversion-engineered sites tuned for elective and aesthetic services.',
    points: ['MedSpa', 'Aesthetics', 'IV Therapy', 'Wellness'],
    accent: '#E6B98C',
    to: '/industries/medspas',
    stat: '40+ medspas activated',
    cta: 'Explore medspas',
  },
  {
    ariaId: 'serve-3',
    image: emergencyImg,
    imgPosition: 'left center',
    tag: 'Acuity',
    title: 'Specialty & Emergency Care',
    desc: 'Compliance-aware, urgency-first patient acquisition for ERs, urgent care, and specialty practices.',
    points: ['Emergency', 'Urgent Care', 'Orthopedics', 'Oncology'],
    accent: '#A8D5A8',
    to: '/industries/specialty-emergency',
    stat: '12+ ER & specialty networks',
    cta: 'Explore specialty',
  },
];
