import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import BudsPage from './pages/BudsPage'
import BudsProPage from './pages/BudsProPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<BudsPage />} />
          <Route path="/budspro" element={<BudsProPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

