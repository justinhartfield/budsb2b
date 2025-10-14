import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Lock, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import budsLogo from '../assets/buds-logo.png'

const PartnerLoginPage = () => {
  const [email, setEmail] = useState('demo@greenvallley.com')
  const [password, setPassword] = useState('demo123')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Demo login - in production this would authenticate with backend
    navigate('/partners/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <img src={budsLogo} alt="Buds" className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-4xl font-black text-white mb-2">Partner Portal</h1>
          <p className="text-gray-400">Sign in to access your dashboard</p>
          
          <div className="mt-4 bg-green-500/20 border border-green-500/50 rounded-xl px-4 py-3 text-sm text-green-400">
            <p className="font-semibold">🎯 Demo Mode</p>
            <p className="text-green-300">Click "Sign In" to view the sample dashboard</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="partner@dispensary.com"
                  disabled
                  className="w-full pl-12 pr-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled
                  className="w-full pl-12 pr-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-gray-950" />
                Remember me
              </label>
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white text-lg py-6 rounded-xl font-bold"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              Not a partner yet?{' '}
              <a href="#" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                Apply to join
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Building2 className="w-4 h-4" />
            <span>Secure partner access</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PartnerLoginPage

