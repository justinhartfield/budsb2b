import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import budsLogo from '../assets/buds-logo.png'

const Navigation = () => {
  const location = useLocation()
  const isProPage = location.pathname === '/budspro'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isProPage ? 'bg-black/90 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={budsLogo} alt="Buds" className="h-10 w-auto" />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-lg font-semibold transition-all duration-300 hover:scale-105 ${
              isProPage
                ? 'text-white/70 hover:text-white'
                : 'text-gray-800 hover:text-green-600'
            }`}
          >
            Buds
          </Link>
          
          <Link
            to="/budspro"
            className={`text-lg font-semibold transition-all duration-300 hover:scale-105 relative ${
              isProPage
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200'
                : 'text-gray-800 hover:text-yellow-600'
            }`}
          >
            BudsPro
            {isProPage && (
              <motion.div
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200"
              />
            )}
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

