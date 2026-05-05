import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
import Automation from './pages/Automation';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="shell">
      <div className="grid-overlay" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
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
        <Route path="/automation" element={<Automation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
