import { useState } from 'react';
import ServicesHero from './ServicesHero';
import WhoWeServe from './WhoWeServe';
import ServicesList from './ServicesList';
import TrustInfrastructure from './TrustInfrastructure';
import Pillars, { CUSTOM_SOFTWARE_PANES, AUTOMATION_PANES } from './Pillars';
import FeaturePair from './FeaturePair';
import CTABanner from './CTABanner';
import BookingModal from '../../components/BookingModal';

const Services = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
      <ServicesHero />
      <WhoWeServe />
      <ServicesList />
      <TrustInfrastructure />
      <Pillars
        id="custom-software"
        ariaTitleId="pillar-1-title"
        eyebrow="Engineering"
        title={<>Custom Software &amp; Vibe Coding.</>}
        sub="Tailored systems built on top of your marketing engine — from patient portals to API integrations that move clinical data securely."
        panes={CUSTOM_SOFTWARE_PANES}
      />
      <Pillars
        id="automation-ai"
        ariaTitleId="pillar-2-title"
        eyebrow="Automation"
        title={<>Automation &amp; AI for Clinical Workflows.</>}
        sub="Intelligent systems that handle routine clinical operations — freeing your staff to focus on patients, not paperwork."
        panes={AUTOMATION_PANES}
      />
      <FeaturePair />
      <CTABanner onBook={openBooking} />

      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
};

export default Services;
