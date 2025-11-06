import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Factory,
  TrendingUp,
  Users,
  BarChart3,
  Check,
  ArrowRight,
  ChevronDown,
  Package,
  Target,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import PartnerTypeNav from '../components/PartnerTypeNav'
import LanguageNotice from '../components/LanguageNotice'

const ManufacturersPage = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const manufacturerBenefits = [
    {
      icon: Target,
      title: "Increased Brand Awareness",
      description: "Get your products in front of a large, engaged audience of cannabis consumers.",
      metric: "Zero conflict"
    },
    {
      icon: Lightbulb,
      title: "Optional Product Donations",
      description: "Optionally donate products to our reward catalog to increase brand visibility. This is tracked manually in Airtable.",
      metric: "New customers"
    },
    {
      icon: BarChart3,
      title: "Standard Analytics",
      description: "Access our standard analytics dashboard to track redemption patterns and consumer engagement.",
      metric: "Rich data"
    },
    {
      icon: Package,
      title: "Engage with Customers",
      description: "Connect with your customers through a fun and rewarding loyalty program.",
      metric: "Maintain value"
    }
  ]

  const channelStrategy = [
    {
      title: "Retail Partner Protection",
      description: "Buds rewards don't compete with retail",
      points: [
        "Samples & trial sizes (not full retail products)",
        "Overstock & discontinued items only",
        "Geo-restrictions to protect territories",
        "Retailer consent for specific products"
      ]
    },
    {
      title: "Consumer Acquisition",
      description: "Turn rewards into loyal customers",
      points: [
        "Sample-to-purchase conversion tracking",
        "Retargeting via Buds network",
        "Co-marketing with retail partners",
        "Brand preference analytics"
      ]
    },
    {
      title: "Market Testing",
      description: "Test products before full launch",
      points: [
        "Limited release to Buds network",
        "Real consumer feedback at scale",
        "Regional preference insights",
        "Pre-launch demand validation"
      ]
    }
  ]

  const manufacturerTypes = [
    {
      type: "Pharma & Wellness Brands",
      examples: ["Supplement manufacturers", "OTC wellness products", "Natural remedy brands"],
      useCase: "Distribute samples of new formulations, move overstock vitamins, gather consumer feedback on product efficacy.",
      result: "Average 12% sample-to-purchase conversion"
    },
    {
      type: "CBD & Cannabis Brands",
      examples: ["Licensed CBD producers", "Cannabis accessory makers", "Wellness cannabis brands"],
      useCase: "Introduce new strains/products, clear seasonal inventory, build brand recognition in new markets.",
      result: "3x faster market penetration"
    },
    {
      type: "Health & Beauty Manufacturers",
      examples: ["Skincare brands", "Aromatherapy producers", "Natural cosmetics"],
      useCase: "Sample distribution, limited edition releases, cross-promotion with wellness retailers.",
      result: "45% increase in brand awareness"
    }
  ]

  const dataInsights = [
    {
      insight: "Redemption Analytics",
      description: "Track which products are redeemed most, by whom, and where. Understand consumer preferences at granular level.",
      metrics: ["Redemption rate by SKU", "Geographic distribution", "Demographic breakdowns", "Time-to-redemption"]
    },
    {
      insight: "Conversion Tracking",
      description: "See how many reward recipients become paying customers. Measure ROI of sampling campaigns.",
      metrics: ["Sample-to-purchase rate", "Customer lifetime value", "Repeat purchase frequency", "Cross-sell opportunities"]
    },
    {
      insight: "Market Intelligence",
      description: "Compare performance across regions, retailers, and consumer segments. Inform product development and marketing.",
      metrics: ["Regional preferences", "Competitive insights", "Seasonal trends", "Product feedback scores"]
    }
  ]

  const pricingModels = [
    {
      model: "Basic Tier",
      description: "€500/month",
      details: "Standard analytics and widget placement.",
      bestFor: "Getting started with loyalty."
    },
    {
      model: "Growth Tier",
      description: "€1,500/month",
      details: "Enhanced analytics and newsletter features.",
      bestFor: "Expanding your reach."
    },
    {
      model: "Enterprise Tier",
      description: "€5,000/month",
      details: "Comprehensive analytics and premium placement.",
      bestFor: "Large-scale businesses."
    }
  ]

  const manufacturerExamples = [
    {
      brand: "Premium CBD Manufacturer",
      challenge: "New market entry in Germany, zero brand awareness, retail hesitant to stock unknown brand",
      solution: "Joined the Buds coalition loyalty program and offered products as rewards.",
      result: "38% sample-to-purchase conversion. 12 retail partners signed based on consumer demand. €180K revenue in 6 months.",
      metric: "€180K revenue"
    },
    {
      brand: "Vitamin & Supplement Brand",
      challenge: "€95K in overstock seasonal vitamins (immunity boosters post-winter)",
    solution: "Became a partner in the Buds loyalty program and offered products to members.",
      result: "Cleared 100% of inventory in 8 weeks. No brand damage. Acquired 2,400 new customers from redemptions.",
      metric: "2,400 customers"
    },
    {
      brand: "Natural Skincare Manufacturer",
      challenge: "Launching new product line, needed consumer feedback before full retail rollout",
      solution: "Joined the Buds program to gain customer feedback and increase brand engagement.",
      result: "92% positive feedback. Adjusted packaging based on insights. Retail launch exceeded projections by 45%.",
      metric: "+45% vs. plan"
    }
  ]

  const faqs = [
    { q: "Will this undercut our retail partners?", a: "No. You control what products appear (samples, overstock, discontinued items only). Geo-restrictions prevent territory conflicts. Many brands require retailer consent before listing products." },
    { q: "How do we get consumer data?", a: "Aggregated, GDPR-compliant analytics via manufacturer dashboard. See redemption patterns, demographics, and conversion rates. No individual consumer PII shared." },
    {q: "What are the membership fees?", a: "We offer flexible membership tiers with monthly fees ranging from €500 to €5,000. Choose the plan that best fits your needs." },
    { q: "Can we target specific consumer segments?", a: "Yes. Target by age, location, purchase history, or loyalty tier. Sampling campaigns can be hyper-targeted to your ideal customer profile." },
    { q: "How does fulfillment work?", a: "For optional product donations, you can ship directly to consumers or send inventory to our EU 3PL. For all standard rewards, fulfillment is handled by the Buds network." },
    { q: "What if products don't get redeemed?", a: "Inventory rotates based on demand. Low-performing products can be withdrawn. For central fulfillment, we return unsold inventory after 90 days (your choice)." },
    { q: "Can we A/B test products?", a: "Yes. Distribute variant A to one segment, variant B to another. Compare redemption rates and feedback to inform product decisions." },
    { q: "Do you work with international manufacturers?", a: "Yes, if you can fulfill to EU addresses. Many non-EU brands use our central 3PL to handle EU distribution and compliance." }
  ]

  return (
    <>
      <LanguageNotice />
    <div className="min-h-screen">
      <PartnerTypeNav />
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              🏭 Manufacturer Partnership Program 📦
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Direct-to-consumer rewards<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                without channel conflict
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Manufacturers can join our coalition loyalty program to increase brand awareness and customer engagement. Offer your products as rewards and gain valuable insights through our standard analytics.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                Apply as Manufacturer <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-pink-600 text-pink-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-pink-50">
                Channel Strategy Guide
              </Button>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-2 border-rose-600 text-rose-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-rose-50">
                  Manufacturer Dashboard Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturer Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Why manufacturers choose Buds</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <div className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Strategy */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Channel-safe strategy</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Reach consumers directly while protecting retail partnerships
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {channelStrategy.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border-2 border-pink-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.title}</h3>
                <p className="text-gray-600 mb-6">{strategy.description}</p>
                
                <ul className="space-y-3">
                  {strategy.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Who we work with</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {manufacturerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.type}</h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-700">• {example}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Use Case:</p>
                  <p className="text-sm text-gray-700">{type.useCase}</p>
                </div>

                <div className="bg-pink-100 border border-pink-300 rounded-lg p-3">
                  <p className="text-sm font-semibold text-pink-700">{type.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Insights */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Consumer insights you'll gain</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {dataInsights.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-pink-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{data.insight}</h3>
                <p className="text-gray-600 mb-6">{data.description}</p>
                
                <div className="space-y-2">
                  {data.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-pink-600" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Models */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Flexible pricing models</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingModels.map((pricing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pricing.model}</h3>
                <p className="text-gray-600 mb-4">{pricing.description}</p>
                
                <div className="bg-white border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">{pricing.details}</p>
                </div>

                <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-700 mb-1">Best for:</p>
                  <p className="text-sm text-green-900">{pricing.bestFor}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Examples */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Manufacturer success stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {manufacturerExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-pink-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{example.brand}</h3>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">Challenge:</p>
                  <p className="text-sm text-gray-700 mb-3">{example.challenge}</p>
                  
                  <p className="text-sm font-semibold text-pink-600 mb-1">Solution:</p>
                  <p className="text-sm text-gray-700 mb-3">{example.solution}</p>
                  
                  <p className="text-sm font-semibold text-gray-500 mb-1">Result:</p>
                  <p className="text-sm text-gray-700">{example.result}</p>
                </div>

                <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-4">
                  <p className="text-2xl font-black text-pink-600">{example.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Manufacturer FAQ</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-pink-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-pink-50 transition-colors"
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
      <section className="py-20 px-6 bg-gradient-to-br from-pink-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to reach consumers directly?
          </h2>
          <p className="text-xl text-pink-100 mb-10">
            Join manufacturers using Buds for sampling, brand awareness, and overstock relief
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              Apply as Manufacturer <ArrowRight className="ml-2 w-5 h-5" />
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
    </div>
    </>
  )
}

export default ManufacturersPage

