import { Routes, Route } from 'react-router-dom'
import VenuelyLanding from './VenuelyLanding'
import LegalPage from './LegalPage'

function App() {
  return (
      <Routes>
            <Route path="/" element={<VenuelyLanding />} />
                  <Route path="/privacy" element={<LegalPage page="privacy" />} />
                        <Route path="/terms" element={<LegalPage page="terms" />} />
                            </Routes>
                              )
                              }

                              export default App