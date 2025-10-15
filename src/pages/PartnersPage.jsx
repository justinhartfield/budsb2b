import { motion } from 'framer-motion'
import { Building2, TrendingUp, Users, BarChart3, Shield, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import VideoBackground from '@/components/VideoBackground'
import RewardsShowcase from '@/components/RewardsShowcase'

const PartnersPage = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track customer behavior, purchases, and redemptions with live data dashboards'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Understand your customers better with detailed demographics and preferences'
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Monitor your ROI, engagement rates, and loyalty program effectiveness'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full compliance for cannabis industry regulations'
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Seamless integration with your existing POS and e-commerce systems'
    },
    {
      icon: Building2,
      title: 'Multi-Location Support',
      description: 'Manage multiple dispensaries or retail locations from one dashboard'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <VideoBackground opacity={0.2} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                PARTNER WITH BUDS
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the cannabis loyalty revolution. Give your customers rewards that hit different and gain powerful insights into their behavior.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/partners/login">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white text-xl px-12 py-6 rounded-full font-bold"
                >
                  Partner Login
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-xl px-12 py-6 rounded-full font-bold"
              >
                Become a Partner
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">Partner Portal Features</h2>
            <p className="text-xl text-gray-400">Everything you need to understand and engage your customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <RewardsShowcase 
            title="Diverse Reward Catalog"
            subtitle="Give your customers access to thousands of premium rewards across multiple categories"
          />
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-white mb-4">Powerful Partner Dashboard</h2>
            <p className="text-xl text-gray-400">Get actionable insights at a glance</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 rounded-3xl p-8 shadow-2xl"
          >
            <div className="aspect-video bg-gray-950 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-24 h-24 text-green-400 mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">Interactive Dashboard Preview</p>
                <p className="text-gray-400 mt-2">Track purchases, redemptions, and customer behavior in real-time</p>
                <Link to="/partners/login">
                  <Button className="mt-6 bg-green-500 hover:bg-green-600 text-white">
                    View Demo Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-900/30 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-6">Ready to Join?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're a dispensary, manufacturer, or cannabis-friendly brand, let's talk about how Buds can help you build lasting customer loyalty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-xl px-12 py-6 rounded-full font-bold"
              >
                Schedule a Demo
              </Button>
              <Link to="/partners/login">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black text-xl px-12 py-6 rounded-full font-bold"
                >
                  Partner Login
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage

