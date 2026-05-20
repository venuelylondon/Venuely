import { Routes, Route } from 'react-router-dom'
import VenuelyLanding from './VenuelyLanding'
import LegalPage from './LegalPage'
import BlogPage from './BlogPage'
import FAQPage from './FAQPage'
import HowItWorksPage from './HowItWorksPage'
import PartnersPage from './PartnersPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<VenuelyLanding />} />
      <Route path="/privacy" element={<LegalPage page="privacy" />} />
      <Route path="/terms" element={<LegalPage page="terms" />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/how-it-works" element={<HowItWorksPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/partners" element={<PartnersPage />} />
    </Routes>
  )
}

export default App
