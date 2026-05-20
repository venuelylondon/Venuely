import { Routes, Route } from 'react-router-dom'
import VenuelyLanding from './VenuelyLanding'
import LegalPage from './LegalPage'
import BlogPage from './BlogPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<VenuelyLanding />} />
      <Route path="/privacy" element={<LegalPage page="privacy" />} />
      <Route path="/terms" element={<LegalPage page="terms" />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App
