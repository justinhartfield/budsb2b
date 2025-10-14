import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, 
  Package, 
  Star, 
  Shield,
  Truck,
  FileText,
  ArrowRight,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const BudsPage = () => {
  const [gmv, setGmv] = useState(100000)

  const copackTarget = gmv * 0.008
  const copackCredit = copackTarget * 1.25
  const centralTarget = gmv * 0.01
  const centralCredit = centralTarget

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              🎁 Partner Rewards Program 📈
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Free to join. No fees. Donate overstock to power Buds rewards.
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Turn excess inventory into conversions—without public discounting. Partners simply donate monthly overstock (co‑pack or send to our 3PL). Top donors get prime widget placement and newsletter features.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg font-bold">
                Apply to Partner <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-lg font-bold hover:bg-gray-50">
                Integration Docs
              </Button>
              <Link to="/partners/login">
                <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 px-8 py-6 text-lg rounded-lg font-bold hover:bg-red-50">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">What you get</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Higher Conversion & AOV',
                description: 'Boost checkout conversion and average order value via Buds rewards (no couponing required).'
              },
              {
                icon: Package,
                title: 'Quiet Stock Relief',
                description: 'Transform dead stock into valuable loyalty rewards without public discounting.'
              },
              {
                icon: Star,
                title: 'Prime Exposure',
                description: 'Get top widget placement and features in Buds weekly newsletter.'
              },
              {
                icon: Shield,
                title: 'Privacy-Safe Insights',
                description: 'Access aggregated, GDPR-aligned analytics and performance data.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Donations Work */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">How donations work</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Co-pack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-green-400 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-3 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Recommended
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Co-pack (preferred)</h3>
              </div>
              
              <p className="text-gray-600 mb-6">You ship the Reward from your own facility.</p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-800 font-semibold">
                  €1 of your COGS = €1.25 of donation credit
                </p>
              </div>
            </motion.div>

            {/* Central */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-blue-300 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Central (Buds 3PL)</h3>
              </div>
              
              <p className="text-gray-600 mb-6">Send stock to our EU 3PL; we fulfill redemptions across the network.</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800 font-semibold">
                  €1 COGS = €1.00 credit
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monthly Target Calculator */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            Monthly target (simple rule of thumb)
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-4 max-w-3xl mx-auto">
            Aim to donate COGS ≈ 0.8% of your Buds‑engaged GMV if co‑packing, or ≈ 1.0% if using central fulfillment.
          </p>
          
          <p className="text-sm text-gray-500 text-center mb-12">
            Buds‑engaged GMV = orders where the Buds widget was engaged (opened, reward viewed, or redeemed).
          </p>

          {/* Interactive Calculator */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Calculator</h3>
            <p className="text-gray-600 text-center mb-6">Adjust your Buds-engaged GMV to see donation targets</p>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Monthly Buds-engaged GMV: {gmv.toLocaleString()} €
              </label>
              <input
                type="range"
                min="10000"
                max="500000"
                step="10000"
                value={gmv}
                onChange={(e) => setGmv(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>€10k</span>
                <span>€250k</span>
                <span>€500k</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="text-sm font-semibold text-green-700 mb-2">Co-pack Target (0.8%)</h4>
                <p className="text-3xl font-black text-green-600 mb-1">{Math.round(copackTarget).toLocaleString()} €</p>
                <p className="text-sm text-green-600">Credit: {Math.round(copackCredit).toLocaleString()} €</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="text-sm font-semibold text-blue-700 mb-2">Central Target (1.0%)</h4>
                <p className="text-3xl font-black text-blue-600 mb-1">{Math.round(centralTarget).toLocaleString()} €</p>
                <p className="text-sm text-blue-600">Credit: {Math.round(centralCredit).toLocaleString()} €</p>
              </div>
            </div>
          </div>

          {/* Static Examples */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Static Examples</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Buds-engaged GMV</p>
                    <p className="text-2xl font-bold text-gray-900">€50,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Co-pack target</p>
                    <p className="text-lg font-semibold text-green-600">€400 COGS</p>
                    <p className="text-xs text-gray-500">(e.g., ~40 tees @ €10)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Central target</p>
                    <p className="text-lg font-semibold text-blue-600">€500 COGS</p>
                    <p className="text-xs text-gray-500">(e.g., ~50 tees @ €10)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Buds-engaged GMV</p>
                    <p className="text-2xl font-bold text-gray-900">€250,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Co-pack target</p>
                    <p className="text-lg font-semibold text-green-600">€2,000 COGS</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Central target</p>
                    <p className="text-lg font-semibold text-blue-600">€2,500 COGS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Ready to become a partner?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join the Buds network and start turning your excess inventory into customer loyalty.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg rounded-lg font-bold">
              Apply to Partner <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/login">
              <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 px-10 py-6 text-lg rounded-lg font-bold hover:bg-gray-900 hover:text-white">
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

