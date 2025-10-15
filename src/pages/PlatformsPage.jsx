import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Store,
  Users,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Check,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Network,
  Rocket,
  Globe
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const PlatformsPage = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const platformBenefits = [
    {
      icon: TrendingUp,
      title: "Increase Marketplace GMV",
      description: "Sellers using Buds see 23% higher AOV. More revenue per transaction = more platform fees for you.",
      metric: "+23% AOV"
    },
    {
      icon: Store,
      title: "Attract & Retain Sellers",
      description: "Offer a ready-made loyalty solution. Sellers get enterprise-grade rewards without building it themselves.",
      metric: "Seller USP"
    },
    {
      icon: Users,
      title: "Cross-Seller Discovery",
      description: "Customers redeeming rewards from Seller A discover Seller B. Network effects drive marketplace growth.",
      metric: "Network Effect"
    },
    {
      icon: Shield,
      title: "No Platform Liability",
      description: "Buds handles all reward fulfillment, customer service, and compliance. Zero operational burden on your platform.",
      metric: "Zero Ops"
    }
  ]

  const integrationOptions = [
    {
      title: "White-Label Integration",
      description: "Buds runs under your platform brand",
      features: [
        "Your branding throughout",
        "Seamless UX in your checkout",
        "Platform-controlled reward catalog",
        "Custom commission structure"
      ],
      bestFor: "Large marketplaces with strong brand"
    },
    {
      title: "Co-Branded Integration",
      description: "Powered by Buds, featured on your platform",
      features: [
        "Buds + Your brand together",
        "Shared marketing materials",
        "Standard reward catalog",
        "Revenue share model"
      ],
      bestFor: "Growing marketplaces seeking quick value"
    },
    {
      title: "API-Only Integration",
      description: "Build your own UI on Buds infrastructure",
      features: [
        "Full API access",
        "Custom frontend implementation",
        "Flexible reward logic",
        "Developer-friendly docs"
      ],
      bestFor: "Technical platforms with custom needs"
    }
  ]

  const revenueModels = [
    {
      model: "Commission on Redemptions",
      description: "Earn % of reward value when customers redeem",
      example: "Customer redeems €50 reward → Platform earns €5 (10%)",
      pros: ["Performance-based", "No upfront cost", "Scales with usage"]
    },
    {
      model: "Seller Subscription Upsell",
      description: "Charge sellers for Buds access as premium feature",
      example: "€49/month for Buds integration in Pro plan",
      pros: ["Recurring revenue", "Increases plan value", "Predictable income"]
    },
    {
      model: "Hybrid Model",
      description: "Base subscription + commission on high-value redemptions",
      example: "€29/month + 5% on rewards >€100",
      pros: ["Balanced risk/reward", "Multiple revenue streams", "Flexible pricing"]
    }
  ]

  const platformExamples = [
    {
      platform: "Multi-Vendor Fashion Marketplace",
      sellers: "450 sellers",
      integration: "Co-Branded",
      result: "Sellers using Buds had 31% higher repeat purchase rate. Platform GMV increased 18% with zero additional marketing spend.",
      metric: "+18% GMV"
    },
    {
      platform: "Wellness & CBD Platform",
      sellers: "120 sellers",
      integration: "White-Label",
      result: "Positioned as platform-exclusive benefit. Seller churn reduced 40%, new seller signups increased 55%.",
      metric: "-40% churn"
    },
    {
      platform: "Local Delivery Network",
      sellers: "280 sellers",
      integration: "API-Only",
      result: "Built custom reward tiers by delivery zone. Cross-seller discovery up 67%, average basket size +€12.",
      metric: "+€12 basket"
    }
  ]

  const technicalSpecs = [
    {
      category: "Authentication",
      details: "OAuth 2.0, JWT tokens, Webhook support for real-time events"
    },
    {
      category: "Reward Catalog API",
      details: "Filter by category, value, seller, geography. Real-time inventory updates"
    },
    {
      category: "Redemption Flow",
      details: "Checkout widget embed or API-driven custom UI. Co-pack or central fulfillment"
    },
    {
      category: "Analytics & Reporting",
      details: "Platform dashboard, seller dashboards, CSV exports, custom reporting API"
    },
    {
      category: "Compliance",
      details: "GDPR/DSGVO compliant, age verification hooks, geo-restriction support"
    }
  ]

  const faqs = [
    { q: "Do our sellers need to donate inventory?", a: "No. Sellers can participate purely by offering partner rewards to their customers. Donating inventory improves their reward placement, but it's optional." },
    { q: "How do we control which rewards appear on our platform?", a: "Full control via platform admin panel. Approve/reject rewards, set categories, filter by value range, restrict by geography, or curate specific collections." },
    { q: "What's our revenue share?", a: "Flexible based on integration type. Typical range: 10-20% commission on redemptions, or seller subscription model (€29-99/month). Custom deals for large platforms." },
    { q: "How does fulfillment work?", a: "Buds handles it. Either co-pack (seller ships directly) or central (our 3PL ships). Your platform has zero fulfillment burden or customer service load." },
    { q: "Can we white-label this completely?", a: "Yes, for white-label integration. Buds branding is removed, replaced with yours. Requires minimum platform GMV threshold." },
    { q: "What if a seller leaves our platform?", a: "Their donated inventory stays in the Buds network but stops appearing on your platform. No impact on other sellers or customers." },
    { q: "How long does integration take?", a: "Co-branded: 1-2 weeks. White-label: 4-6 weeks. API-only: Depends on your dev team, typically 2-4 weeks with our support." },
    { q: "Do you compete with our platform?", a: "Never. Buds is B2B infrastructure only. We don't operate consumer-facing marketplaces. You're our customer, not our competitor." }
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
              🚀 Platform Integration Program 🌐
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Power your marketplace with<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Buds loyalty rewards
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Integrate Buds into your platform to offer sellers a ready-made loyalty solution. Your merchants donate overstock, their customers earn rewards, and you increase marketplace GMV without discounting.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                View Integration Options <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-purple-50">
                API Documentation
              </Button>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-indigo-50">
                  Platform Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Why platforms choose Buds</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {platformBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Choose your integration model</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {integrationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-xs font-semibold text-purple-700 mb-1">Best for:</p>
                  <p className="text-sm text-purple-900">{option.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Monetize Buds on your platform</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Multiple revenue models to fit your business strategy
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {revenueModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.model}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                
                <div className="bg-white border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">{model.example}</p>
                </div>

                <div className="space-y-2">
                  {model.pros.map((pro, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">{pro}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Examples */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Platform success stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {platformExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-purple-200"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{example.platform}</h3>
                  <p className="text-sm text-gray-500 mb-1">{example.sellers}</p>
                  <p className="text-sm text-purple-600 font-semibold">Integration: {example.integration}</p>
                </div>

                <p className="text-gray-700 mb-4">{example.result}</p>

                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4">
                  <p className="text-2xl font-black text-purple-600">{example.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Technical specifications</h2>

          <div className="space-y-6">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{spec.category}</h3>
                <p className="text-gray-600">{spec.details}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg rounded-lg font-bold">
              Access API Documentation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Platform FAQ</h2>

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
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to power your marketplace?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Join leading platforms offering Buds to their sellers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              Schedule Platform Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg rounded-lg font-bold hover:bg-white/10">
                View Dashboard Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlatformsPage

