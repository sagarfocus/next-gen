import { useState } from 'react';
import ServicesHero from './ServicesHero';
import WhoWeServe from './WhoWeServe';
import ServicesList from './ServicesList';
import Process from './Process';
import TrustInfrastructure from './TrustInfrastructure';
import Pillars from './Pillars';
import { CUSTOM_SOFTWARE_PANES, AUTOMATION_PANES } from '@/content/services/pillars';
import FeaturePair from './FeaturePair';
import ServicesFAQ from './ServicesFAQ';
import CTABanner from './CTABanner';
import BookingModal from '@/components/BookingModal';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

// Service umbrella schema for the /services hub — lists each spoke as a
// nested Offer item. FAQPage schema is emitted by <ServicesFAQ /> itself
// (derived from the same data array it renders), so we don't duplicate
// it here.
const SERVICES_HUB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Marketing Services',
  serviceType: 'Healthcare Marketing',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: [
    { '@type': 'State', name: 'Texas' },
    { '@type': 'Country', name: 'United States' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare SEO', url: `${SITE.url}/services/seo` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Business Profile Management', url: `${SITE.url}/services/google-business-profile` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads for Healthcare', url: `${SITE.url}/services/google-ads` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Analytics & Reporting', url: `${SITE.url}/services/analytics-reporting` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Email & Lifecycle Campaigns', url: `${SITE.url}/services/email-drip-campaigns` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Brand Identity & Design', url: `${SITE.url}/services/brand-identity-design` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Website Design & Development', url: `${SITE.url}/services/website-design-dev` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Social Media Marketing', url: `${SITE.url}/services/social-media-marketing` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Healthcare Content & Copywriting', url: `${SITE.url}/services/content-copywriting` } },
    ],
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Services' },
]);

const Services = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Seo
        title="Healthcare Marketing Services — SEO, Ads, Websites & Automation"
        description="Full-service healthcare marketing for clinics, medspas, urgent care and ERs. SEO, Google Ads, websites, branding, content, email, and HIPAA-aware automation."
        path="/services"
        schema={[SERVICES_HUB_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <ServicesHero />
      <WhoWeServe />
      <ServicesList />
      <Process />
      <TrustInfrastructure />
      <Pillars
        id="custom-software"
        ariaTitleId="pillar-1-title"
        eyebrow="Engineering"
        title={<>Custom Software &amp; Vibe Coding.</>}
        sub="Tailored systems built on top of your marketing engine - from patient portals to API integrations that move clinical data securely."
        panes={CUSTOM_SOFTWARE_PANES}
      />
      <Pillars
        id="automation-ai"
        ariaTitleId="pillar-2-title"
        eyebrow="Automation"
        title={<>Automation &amp; AI for Clinical Workflows.</>}
        sub="Intelligent systems that handle routine clinical operations - freeing your staff to focus on patients, not paperwork."
        panes={AUTOMATION_PANES}
      />
      <FeaturePair />
      <ServicesFAQ onBook={openBooking} />
      <CTABanner onBook={openBooking} />

      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Services;
