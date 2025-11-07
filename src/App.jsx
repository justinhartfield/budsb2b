import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import BudsPage from './pages/BudsPage'
import BudsProPage from './pages/BudsProPage'
import PartnersPage from './pages/PartnersPage'
import PartnerLoginPage from './pages/PartnerLoginPage'
import PartnerDashboardPage from './pages/PartnerDashboardPage'
import ExistingLoyaltyPage from './pages/ExistingLoyaltyPage'
import PlatformsPage from './pages/PlatformsPage'
import PharmaciesPage from './pages/PharmaciesPage'
import ManufacturersPage from './pages/ManufacturersPage'
import ContactSalesPage from './pages/ContactSalesPage'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
        <Routes>
          {/* Main consumer routes with navigation */}
          <Route path="/" element={<><Navigation /><BudsPage /></>} />
          <Route path="/budspro" element={<><Navigation /><BudsProPage /></>} />
          
          {/* Partner routes without main navigation */}
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/partners/login" element={<PartnerLoginPage />} />
          <Route path="/partners/dashboard" element={<PartnerDashboardPage />} />
          <Route path="/existing-loyalty" element={<><Navigation /><ExistingLoyaltyPage /></>} />
          <Route path="/platforms" element={<><Navigation /><PlatformsPage /></>} />
          <Route path="/pharmacies" element={<><Navigation /><PharmaciesPage /></>} />
          <Route path="/manufacturers" element={<><Navigation /><ManufacturersPage /></>} />
          <Route path="/contact" element={<><Navigation /><ContactSalesPage /></>} />
        </Routes>
      </div>
    </Router>
    </LanguageProvider>
  )
}

export default App

