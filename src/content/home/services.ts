import fieldImg from '../../assets/nextgen-image/Onsitefieldmarketing.png';
import autoImg from '../../assets/nextgen-image/Medicalautomationimg.png';
import seoImg from '../../assets/nextgen-image/Seoimg.png';
import socialImg from '../../assets/nextgen-image/Socialmediaimg.png';
import emailImg from '../../assets/nextgen-image/Emailcampingimg.png';
import adsImg from '../../assets/nextgen-image/googleadsimg.png';

/**
 * Home page — "Marketing built for healthcare practices." section.
 *
 * The GSAP scroll-pin / horizontal track behavior lives in
 * `src/pages/Home/Services.tsx`. This file just supplies the card data
 * and the section's header copy.
 */

export interface HomeServiceCard {
  tag: string;
  title: string;
  sub: string;
  ariaLabel: string;
  image: string;
  imgFocus?: 'left' | 'right' | 'center';
  to: string;
}

export const HOME_SERVICES_HEAD = {
  eyebrow: 'Services',
  title: 'Marketing built for healthcare practices.',
  sub: 'Six core capabilities - one integrated growth engine for clinics, medspas, and wellness brands.',
  allLinkText: 'View all services',
  allLinkTo: '/services',
} as const;

export const HOME_SERVICES: readonly HomeServiceCard[] = [
  {
    tag: 'Search',
    title: 'SEO Services',
    sub: 'Full-suite SEO - technical, on-page, off-page, local, AEO, content.',
    ariaLabel: 'SEO Services',
    image: seoImg,
    to: '/services/seo',
  },
  {
    tag: 'Social',
    title: 'Social Media Marketing',
    sub: 'Show up where your patients spend their time - consistently.',
    ariaLabel: 'Social Media Marketing',
    image: socialImg,
    to: '/services/social-media-marketing',
  },
  {
    tag: 'Paid Media',
    title: 'Google Ads',
    sub: 'Search, PMax, Display, YouTube, Shopping, LSA - tuned weekly against ROAS.',
    ariaLabel: 'Google Ads',
    image: adsImg,
    to: '/services/google-ads',
  },
  {
    tag: 'Field',
    title: 'Onsite Field Marketing',
    sub: 'In-clinic activations and community presence that convert locally.',
    ariaLabel: 'Onsite Field Marketing',
    image: fieldImg,
    to: '/onsite-field-marketing',
  },
  {
    tag: 'Automation',
    title: 'Medical Automation',
    sub: 'n8n & custom workflows that handle intake, follow-up, and reporting.',
    ariaLabel: 'Medical Automation',
    image: autoImg,
    imgFocus: 'left',
    to: '/medical-automation',
  },
  {
    tag: 'Lifecycle',
    title: 'Email & Drip Campaigns',
    sub: 'Nurture leads, recover no-shows, and re-engage past patients.',
    ariaLabel: 'Email and Drip Campaigns',
    image: emailImg,
    to: '/services/email-drip-campaigns',
  },
];
