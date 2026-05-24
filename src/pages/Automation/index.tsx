import { useState } from 'react';
import AutomationHero from './AutomationHero';
import WhatIsAutomation from './WhatIsAutomation';
import SolutionsLibrary from './SolutionsLibrary';
import ImpactBanner from './ImpactBanner';
import TemplatesSlider from './TemplatesSlider';
import UseCases from './UseCases';
import HowItWorks from './HowItWorks';
import BookingModal from '@/components/BookingModal';
import Seo from '@/components/Seo';
import { buildBreadcrumbList } from '@/lib/schema';
import { SITE } from '@/content/site';

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Automation Workflows',
  serviceType: 'Healthcare Workflow Automation · HIPAA-Aware',
  provider: { '@id': `${SITE.url}#organization` },
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'Audience',
    audienceType: 'Healthcare practices, clinics, hospital networks',
  },
};

const BREADCRUMB_SCHEMA = buildBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Automation' },
]);

const Automation = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <Seo
        title="Healthcare Automation Library — Free HIPAA-Aware Workflows"
        description="Save your front desk 20+ hours a week. Drop-in workflows for patient intake, reminders, reviews, insurance verification, and AI chat — HIPAA-aware, free, live in under an hour."
        path="/automation"
        schema={[SERVICE_SCHEMA, BREADCRUMB_SCHEMA]}
      />

      <AutomationHero onBook={openBooking} />
      <WhatIsAutomation />
      <UseCases />
      <SolutionsLibrary />
      <HowItWorks />
      <ImpactBanner />
      <TemplatesSlider />

      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Automation;
