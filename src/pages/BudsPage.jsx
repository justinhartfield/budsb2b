import { motion } from 'framer-motion'
import { Sparkles, Gift, Home, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import budsLogo from '../assets/buds-logo.png'
import heroObjects from '../assets/hero-objects.png'
import bong from '../assets/bong.png'
import rewardsIcon from '../assets/rewards-icon.png'

const BudsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-cyan-400 to-purple-500">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img src={budsLogo} alt="Buds" className="h-24 w-auto mx-auto mb-8" />
            
            <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-6 leading-none">
              REWARDS THAT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-cyan-700">
                HIT DIFFERENT
              </span>
            </h1>
            
            <p className="text-2xl text-gray-800 mb-12 font-medium">
              Welcome to cannabis loyalty, launching summer 2026.
            </p>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 mb-16"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl flex items-center gap-4">
                <img src={budsLogo} alt="Buds" className="h-12 w-auto" />
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-green-600" />
                  <span className="text-5xl font-black text-gray-900">50</span>
                </div>
              </div>
            </motion.div>

            <img src={heroObjects} alt="Rewards" className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6">
                <img src={bong} alt="Collect" className="w-48 h-48 mx-auto object-contain" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Collect Buds</h3>
              <p className="text-xl text-gray-800">when you buy weed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-6">
                <Gift className="w-48 h-48 mx-auto text-purple-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Redeem Buds</h3>
              <p className="text-xl text-gray-800">for exclusive rewards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-6">
                <Home className="w-48 h-48 mx-auto text-cyan-600" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Set Your Home</h3>
              <p className="text-xl text-gray-800">Get double Buds at your favorite dispensary</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Buds Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-8 text-center">MEET BUDS</h2>
            
            <div className="space-y-6 text-lg text-gray-800">
              <p className="text-center">
                <strong>Build your balance wherever you buy weed.</strong> If you buy online, simply link your account to collect Buds at checkout. In-person, tap your Buds card to collect your Buds and hear that 'Ka-ching!'.
              </p>
              
              <p className="text-center">
                <strong>Cash in at your home dispensary.</strong> Loyalty pays. Set your home dispensary in the app and get double Buds every time you shop there. A win for your favourite budtender. A win for you too.
              </p>
              
              <p className="text-center">
                <strong>Save up or spend big on exclusive rewards.</strong> See and browse all rewards in the Buds app. From grow tours to merch, smoke gear to group dining, cash in early for smaller perks, or save big for one-of-a-kind experiences.
              </p>
            </div>

            <div className="mt-12 text-center">
              <img src={rewardsIcon} alt="Rewards" className="w-full max-w-2xl mx-auto rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-5xl font-black text-white mb-6">You in?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Buds is pre-launch right now, building our network of partners to bring you rewards that hit different wherever you shop for cannabis. Show your support by signing up for launch notifications and we'll hook you up with 420 bonus Buds when the time comes.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white text-xl px-12 py-6 rounded-full font-bold">
              Sign Up for Launch
            </Button>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link to="/budspro" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-lg font-semibold transition-colors">
                Want the ultimate experience? Check out BudsPro
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">Become A Buds Partner</h2>
          <p className="text-xl text-gray-800 mb-8">
            Is your business part of the cannabis community? From dispensaries and manufacturers to clothing brands, smoke gear and cannabis-friendly venues, let's talk.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/partners">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6 rounded-full font-bold">
                Partner With Us
              </Button>
            </Link>
            <Link to="/partners/login">
              <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-full font-bold">
                Partner Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BudsPage

