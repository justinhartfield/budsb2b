import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import BudsPage from './pages/BudsPage'
import BudsProPage from './pages/BudsProPage'
import PartnersPage from './pages/PartnersPage'
import PartnerLoginPage from './pages/PartnerLoginPage'
import PartnerDashboardPage from './pages/PartnerDashboardPage'
import './App.css'

function App() {
  return (
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
        </Routes>
      </div>
    </Router>
  )
}

export default App

