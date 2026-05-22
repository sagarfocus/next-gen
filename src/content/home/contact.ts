/**
 * Home page — Contact section content.
 *
 * Site-wide contact info (email, phone, social, address parts) lives in
 * `content/site.ts`. This file holds the page-local section copy and the
 * map URLs that are bespoke to the Home → Contact section rendering.
 */

export const HOME_CONTACT_HEAD = {
  eyebrow: 'Visit Us',
  title: 'Find us in Irving, Texas.',
  // `we’re` uses U+2019 (right single quote), `Clinic Growth OS`
  // uses U+00A0 (NBSP) — both preserved from the original JSX entities.
  sub: 'Stop by the office or reach our team anytime - we’re happy to walk you through the Clinic Growth OS in person or over a call.',
} as const;

export const HOME_CONTACT_CARD = {
  mapChip: 'Office Location',
  headquartersEyebrow: 'Headquarters',
  cityRegionHeading: 'Irving, TX',
  hqName: 'TheNextGen HQ',
  hoursLabel: 'Mon–Fri, 9:00am–6:00pm CT',
  countryName: 'United States',
  mapLinkAriaLabel: 'Open location in Google Maps',
  getDirectionsText: 'Get Directions',
} as const;

export const HOME_CONTACT_MAP_URLS = {
  embed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.9323492505287!2d-96.98322979999999!3d32.8735093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e82728572860b%3A0xd7e7c0a9ee1d6a04!2s3001%20Skyway%20Cir%20N%2C%20Irving%2C%20TX%2075038%2C%20USA!5e0!3m2!1sen!2snp!4v1777236289640!5m2!1sen!2snp',
  directions:
    'https://www.google.com/maps/dir/?api=1&destination=3001+Skyway+Cir+N+Irving+TX+75038',
} as const;
