import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageTransition, SmoothScroll, useAutoReveal } from './lib/motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SEOLocalSearch from './pages/SEOLocalSearch';
import GoogleBusinessProfile from './pages/GoogleBusinessProfile';
import GoogleAds from './pages/GoogleAds';
import Analytics from './pages/Analytics';
import EmailCampaigns from './pages/EmailCampaigns';
import Branding from './pages/Branding';
import WebsiteDesign from './pages/WebsiteDesign';
import SocialMedia from './pages/SocialMedia';
import ContentMarketing from './pages/ContentMarketing';
import Team from './pages/Team';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import HealthcareNews from './pages/HealthcareNews';
import HealthcareContent from './pages/HealthcareContent';
import GrowthPlan from './pages/GrowthPlan';
import MetaAds from './pages/MetaAds';
import HipaaCompliance from './pages/HipaaCompliance';
import ReviewsReputation from './pages/ReviewsReputation';
import PatientExperience from './pages/PatientExperience';
import CitationBuilding from './pages/CitationBuilding';
import HyperLocalContent from './pages/HyperLocalContent';
import AeoSchema from './pages/AeoSchema';
import Automation from './pages/Automation';
import OnsiteFieldMarketing from './pages/OnsiteFieldMarketing';
import MedicalAutomation from './pages/MedicalAutomation';
import FreeGrowthAudit from './pages/FreeGrowthAudit';
import OurWork from './pages/OurWork';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Phase1 from './pages/Phases/Phase1';
import Phase2 from './pages/Phases/Phase2';
import Phase3 from './pages/Phases/Phase3';
import IndustryClinics from './pages/Industries/Clinics';
import IndustryMedSpas from './pages/Industries/MedSpas';
import IndustrySpecialtyEmergency from './pages/Industries/SpecialtyEmergency';
import GrowthTeam from './pages/Infrastructure/GrowthTeam';
import ComplianceProtocol from './pages/Infrastructure/ComplianceProtocol';
import ServiceLevelAgreements from './pages/Infrastructure/ServiceLevelAgreements';
import NotFound from './pages/NotFound';

const App = () => {
  // Auto-attach scroll-reveal observers to known structural patterns
  // (sections, headers, card grids) on every route mount.
  useAutoReveal();

  return (
    <div className="shell">
      <div className="grid-overlay" aria-hidden="true" />
      <ScrollToTop />
      <SmoothScroll />
      <Navbar />
      <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/seo-local-search" element={<SEOLocalSearch />} />
        <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
        <Route path="/services/google-ads" element={<GoogleAds />} />
        <Route path="/services/analytics-reporting" element={<Analytics />} />
        <Route path="/services/email-drip-campaigns" element={<EmailCampaigns />} />
        <Route path="/services/brand-identity-design" element={<Branding />} />
        <Route path="/services/website-design-dev" element={<WebsiteDesign />} />
        <Route path="/services/social-media-marketing" element={<SocialMedia />} />
        <Route path="/services/content-copywriting" element={<ContentMarketing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/healthcare-news" element={<HealthcareNews />} />
        <Route path="/healthcare-content" element={<HealthcareContent />} />
        <Route path="/growth-plan" element={<GrowthPlan />} />
        <Route path="/meta-ads" element={<MetaAds />} />
        <Route path="/hipaa-compliance" element={<HipaaCompliance />} />
        <Route path="/reviews-reputation" element={<ReviewsReputation />} />
        <Route path="/patient-experience" element={<PatientExperience />} />
        <Route path="/citation-building" element={<CitationBuilding />} />
        <Route path="/hyper-local-content" element={<HyperLocalContent />} />
        <Route path="/aeo-schema" element={<AeoSchema />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/onsite-field-marketing" element={<OnsiteFieldMarketing />} />
        <Route path="/medical-automation" element={<MedicalAutomation />} />
        <Route path="/free-growth-audit" element={<FreeGrowthAudit />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/methodology/phase-1" element={<Phase1 />} />
        <Route path="/methodology/phase-2" element={<Phase2 />} />
        <Route path="/methodology/phase-3" element={<Phase3 />} />
        <Route path="/industries/clinics" element={<IndustryClinics />} />
        <Route path="/industries/medspas" element={<IndustryMedSpas />} />
        <Route path="/industries/specialty-emergency" element={<IndustrySpecialtyEmergency />} />
        <Route path="/infrastructure/growth-team" element={<GrowthTeam />} />
        <Route path="/infrastructure/compliance-protocol" element={<ComplianceProtocol />} />
        <Route path="/infrastructure/service-level-agreements" element={<ServiceLevelAgreements />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default App;
