import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Plus,
  Layers,
  TrendingUp,
  Users,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Gift,
  Target,
  RefreshCw
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const ExistingLoyaltyPage = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const objections = [
    {
      icon: X,
      objection: "We already have a loyalty program",
      solution: "Buds doesn't replace it—we enhance it",
      details: "Your existing points, tiers, and rewards stay exactly as they are. Buds runs alongside as a supplementary reward layer, giving your customers more value without changing your current system."
    },
    {
      icon: DollarSign,
      objection: "We can't afford another loyalty program",
      solution: "Buds costs you nothing",
      details: "Zero setup fees, zero monthly costs, zero per-transaction fees. Partners donate overstock inventory—you simply integrate the widget. Your customers get more rewards, you pay nothing extra."
    },
    {
      icon: Users,
      objection: "Our customers are already engaged",
      solution: "Make them even more engaged",
      details: "Buds adds 23% higher AOV and increases redemption rates by offering exclusive rewards from partner brands. Your engaged customers become super-engaged with access to a wider reward catalog."
    },
    {
      icon: Layers,
      objection: "Integration will be too complex",
      solution: "5-minute plugin installation",
      details: "Our Shopify/WooCommerce plugin installs in minutes and works alongside your existing loyalty platform. No API conflicts, no data migration, no technical headaches."
    },
    {
      icon: Shield,
      objection: "We don't want to share customer data",
      solution: "Your data stays yours",
      details: "Buds is GDPR-compliant and never accesses your customer data. We only track widget engagement (anonymous). Your customer relationships and data remain 100% under your control."
    },
    {
      icon: BarChart3,
      objection: "Our program already drives results",
      solution: "Stack the results even higher",
      details: "Keep your current ROI and add Buds on top. Partners see average 15% increase in checkout conversion when Buds rewards are available alongside their existing program."
    }
  ]

  const integrationModes = [
    {
      title: "Parallel Mode (Recommended)",
      description: "Buds runs alongside your existing program",
      features: [
        "Your points system stays unchanged",
        "Buds rewards appear as bonus options",
        "Customers can use both programs",
        "Zero conflict, maximum value"
      ],
      example: "Customer earns your points + can redeem Buds rewards"
    },
    {
      title: "Hybrid Mode",
      description: "Convert your points to Buds credits",
      features: [
        "Optional points conversion at checkout",
        "Expand your reward catalog instantly",
        "Maintain your point economy",
        "Buds handles fulfillment"
      ],
      example: "1000 your points = 100 Buds credits for partner rewards"
    },
    {
      title: "Augmented Mode",
      description: "Buds rewards unlock at higher tiers",
      features: [
        "Reserve Buds for VIP/top tiers",
        "Create aspirational tier benefits",
        "Incentivize tier progression",
        "Exclusive partner brand access"
      ],
      example: "Gold tier+ members get access to Buds reward catalog"
    }
  ]

  const comparisonData = [
    { feature: "Your existing points", yours: true, buds: false, together: true },
    { feature: "Your existing rewards", yours: true, buds: false, together: true },
    { feature: "Your tier system", yours: true, buds: false, together: true },
    { feature: "Your customer data", yours: true, buds: false, together: true },
    { feature: "Partner brand rewards", yours: false, buds: true, together: true },
    { feature: "Zero-cost reward expansion", yours: false, buds: true, together: true },
    { feature: "Overstock relief for you", yours: false, buds: true, together: true },
    { feature: "Network effect benefits", yours: false, buds: true, together: true }
  ]

  const useCases = [
    {
      brand: "Fashion Retailer",
      existing: "Points-based program with tier system",
      integration: "Parallel Mode",
      result: "Added VIBES™ accessories as bonus rewards. 18% increase in AOV, zero cannibalization of existing point redemptions.",
      metric: "+18% AOV"
    },
    {
      brand: "Wellness Platform",
      existing: "Subscription-based rewards",
      integration: "Augmented Mode",
      result: "Reserved Buds rewards for Premium tier members. Tier upgrade rate increased 34%, member retention up 22%.",
      metric: "+34% upgrades"
    },
    {
      brand: "Multi-brand Marketplace",
      existing: "Cashback program",
      integration: "Hybrid Mode",
      result: "Allowed cashback conversion to Buds credits. Expanded reward catalog 10x without inventory cost.",
      metric: "10x catalog"
    }
  ]

  const faqs = [
    { q: "Will Buds confuse our customers?", a: "No. Buds appears as a clearly labeled 'bonus reward' option. Customers understand it's an additional benefit, not a replacement. Our UX is designed to complement, not compete." },
    { q: "Can we control which Buds rewards appear?", a: "Yes. You have full control over which partner rewards display to your customers. Filter by category, brand, value, or exclude entirely." },
    { q: "What if we want to stop using Buds?", a: "Simply uninstall the plugin. No contracts, no penalties, no data migration needed. Your existing program continues unchanged." },
    { q: "Do we need to donate inventory to use Buds?", a: "No. You can integrate Buds purely to offer partner rewards to your customers. Donating inventory gets you better placement, but it's optional." },
    { q: "How do customers redeem Buds rewards?", a: "At checkout, they see available Buds rewards alongside your existing options. One click adds it to their order. We handle fulfillment (co-pack or central)." },
    { q: "Will this cannibalize our existing reward redemptions?", a: "Data shows no cannibalization. Buds rewards are additive—customers redeem both. Think of it as expanding your reward catalog without expanding your costs." },
    { q: "Can we white-label Buds?", a: "Not currently, but Buds branding is minimal. The widget clearly shows it's a partner reward network, which customers appreciate as added value." },
    { q: "What platforms does this work with?", a: "Shopify, WooCommerce, and most major loyalty platforms (Smile.io, LoyaltyLion, Yotpo, etc.). We integrate via checkout widget, not direct platform integration." }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              🔄 Loyalty Augmentation Program ✨
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Already have a loyalty program?<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Don't replace it. Supercharge it.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Buds integrates alongside your existing loyalty program to offer additional rewards from partner brands. Your customers get more value, you get more engagement, zero extra cost.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                See Integration Options <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-purple-50">
                Talk to Integration Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            We hear you: "We already have a loyalty program"
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            That's exactly why Buds exists. We don't compete with your program—we make it better.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.objection}</h3>
                <p className="text-purple-600 font-semibold mb-3">✓ {item.solution}</p>
                <p className="text-sm text-gray-600">{item.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            How Buds works with your existing program
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {integrationModes.map((mode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{mode.title}</h3>
                <p className="text-gray-600 mb-6">{mode.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {mode.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1">Example:</p>
                  <p className="text-sm text-purple-900">{mode.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Your program + Buds = Best of both worlds
          </h2>

          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-bold text-gray-900">Feature</div>
              <div className="p-4 font-bold text-gray-900 text-center">Your Program</div>
              <div className="p-4 font-bold text-purple-600 text-center">Buds Alone</div>
              <div className="p-4 font-bold text-green-600 text-center">Together ✨</div>
            </div>

            {comparisonData.map((row, index) => (
              <div key={index} className={`grid grid-cols-4 border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="p-4 text-gray-700">{row.feature}</div>
                <div className="p-4 text-center">
                  {row.yours ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                </div>
                <div className="p-4 text-center">
                  {row.buds ? <Check className="w-5 h-5 text-purple-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                </div>
                <div className="p-4 text-center">
                  {row.together ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-gray-300 mx-auto" />}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8 text-lg">
            Keep everything you have. Add everything Buds offers. <span className="font-bold text-purple-600">Zero compromise.</span>
          </p>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            Real brands, real results
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            See how brands with existing loyalty programs successfully integrated Buds
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-purple-200"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.brand}</h3>
                  <p className="text-sm text-gray-500 mb-1">Existing: {useCase.existing}</p>
                  <p className="text-sm text-purple-600 font-semibold">Mode: {useCase.integration}</p>
                </div>

                <p className="text-gray-700 mb-4">{useCase.result}</p>

                <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                  <p className="text-2xl font-black text-purple-600">{useCase.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Works with your existing tech stack
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compatible Platforms</h3>
              <ul className="space-y-3">
                {[
                  'Smile.io',
                  'LoyaltyLion',
                  'Yotpo',
                  'Stamped.io',
                  'Growave',
                  'S Loyalty',
                  'Custom-built programs',
                  'Any points/tier system'
                ].map((platform, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{platform}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integration Method</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Install Buds widget</p>
                    <p className="text-sm text-gray-600">Shopify/WooCommerce plugin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">Choose integration mode</p>
                    <p className="text-sm text-gray-600">Parallel, Hybrid, or Augmented</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Configure display rules</p>
                    <p className="text-sm text-gray-600">Control when/how Buds appears</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-gray-900">Go live</p>
                    <p className="text-sm text-gray-600">Both programs work together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Zero conflict guarantee
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Buds is designed to coexist. We've integrated with hundreds of existing loyalty programs without a single technical conflict or data issue. If we can't integrate cleanly, we don't integrate at all.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            Questions from brands like yours
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-purple-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to supercharge your loyalty program?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join 500+ brands who enhanced their existing programs with Buds
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              Schedule Integration Call <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg rounded-lg font-bold hover:bg-white/10">
                View Sample Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExistingLoyaltyPage

