import { useState } from 'react';
import AutomationHero from './AutomationHero';
import WhatIsAutomation from './WhatIsAutomation';
import SolutionsLibrary from './SolutionsLibrary';
import ImpactBanner from './ImpactBanner';
import TemplatesSlider from './TemplatesSlider';
import UseCases from './UseCases';
import HowItWorks from './HowItWorks';
import BookingModal from '@/components/BookingModal';

const Automation = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <>
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
