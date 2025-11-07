import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart,
  Shield,
  Users,
  TrendingUp,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  Pill,
  Stethoscope,
  FileCheck,
  Lock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import PartnerTypeNav from '../components/PartnerTypeNav'
import LanguageNotice from '../components/LanguageNotice'

const PharmaciesPage = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const pharmacyBenefits = [
    {
      icon: Heart,
      title: "Patient Retention & Loyalty",
      description: "Increase patient loyalty and repeat visits by offering a wide range of rewards.",
      metric: "+34% retention"
    },
    {
      icon: TrendingUp,
      title: "Move Non-Rx Inventory",
      description: "Offer your patients access to a diverse reward catalog, including standard vouchers and premium products.",
      metric: "Zero waste"
    },
    {
      icon: Shield,
      title: "Pharmacy-Safe Compliance",
      description: "GDPR/DSGVO compliant, no Rx data sharing, age verification built-in. Designed for pharmacy regulatory requirements.",
      metric: "100% compliant"
    },
    {
      icon: Users,
      title: "Cross-Chain Network",
      description: "Join our coalition loyalty program and provide your patients with more value through a shared rewards network.",
      metric: "Network effect"
    }
  ]

  const eligibleProducts = {
    accepted: [
      "Vitamins & supplements",
      "OTC wellness products",
      "Health & beauty items",
      "Medical accessories (non-Rx)",
      "Fitness & recovery products",
      "Aromatherapy & essential oils",
      "Natural remedies & homeopathy",
      "Health monitoring devices"
    ],
    notAccepted: [
      "Prescription medications",
      "Controlled substances",
      "Expired products",
      "Recalled items",
      "Medical devices requiring prescription",
      "Products with patient data",
      "Compounded medications",
      "Refrigerated biologics"
    ]
  }

  const complianceFeatures = [
    {
      title: "GDPR/DSGVO Compliance",
      description: "No patient data sharing. Anonymous redemption tracking only. Full data sovereignty.",
      icon: Lock
    },
    {
      title: "Age Verification",
      description: "Built-in age gates for 18+ products. Configurable by product category and local regulations.",
      icon: FileCheck
    },
    {
      title: "Pharmacy License Verification",
      description: "Only licensed pharmacies can join. Verification process ensures network integrity.",
      icon: Shield
    },
    {
      title: "Audit Trail",
      description: "Complete donation and redemption logs. Regulatory audit-ready reporting.",
      icon: FileCheck
    }
  ]

  const pharmacyExamples = [
    {
      chain: "Regional Pharmacy Chain (45 locations)",
      challenge: "€120K in slow-moving vitamin inventory, patient churn to online competitors",
      solution: "Offered Buds rewards to patients, increasing engagement and loyalty.",
      result: "Cleared 80% of slow inventory in 3 months. Patient retention increased 34%. New patient signups +22%.",
      metric: "+34% retention"
    },
    {
      chain: "Independent Pharmacy Group (8 locations)",
      challenge: "Competing with big-box stores on wellness products, thin margins",
      solution: "Integrated Buds to provide patients with a wider selection of rewards.",
      result: "Positioned as wellness destination. Average transaction value +€18. Zero additional inventory cost.",
      metric: "+€18 ATV"
    },
    {
      chain: "Wellness-Focused Pharmacy (3 locations)",
      challenge: "Premium positioning, needed to differentiate from discount pharmacies",
      solution: "Utilized Buds to create a premium patient experience with exclusive rewards.",
      result: "Premium patient tier grew 156%. Became known for exclusive wellness access.",
      metric: "+156% VIP tier"
    }
  ]

  const integrationProcess = [
    {
      step: 1,
      title: "License Verification",
      description: "Submit pharmacy license and regulatory documentation. We verify within 48 hours.",
      duration: "2 days"
    },
    {
      step: 2,
      title: "Inventory Assessment",
      description: "Choose your membership tier and integrate our loyalty widget.",
      duration: "1 week"
    },
    {
      step: 3,
      title: "System Integration",
      description: "Install checkout widget or integrate via pharmacy management system API.",
      duration: "3-5 days"
    },
    {
      step: 4,
      title: "Staff Training",
      description: "We provide training materials and support for pharmacy staff. Simple, patient-friendly.",
      duration: "2 days"
    },
    {
      step: 5,
      title: "Go Live",
      description: "Launch rewards program. Start offering Buds to patients. Monitor via dashboard.",
      duration: "1 day"
    }
  ]

  const faqs = [
    { q: "Is this legal for pharmacies in Germany/EU?", a: "Yes. Buds only handles non-prescription wellness products. No Rx data is shared, no prescription rewards. Fully compliant with pharmacy regulations and GDPR/DSGVO." },
    { q: "Are product donations required?", a: "No, product donations are completely optional and do not affect your membership tier or benefits." },
    { q: "How do patients redeem rewards?", a: "At checkout (in-store or online), they see available rewards. One click adds it to their order. We handle fulfillment—either you ship (co-pack) or our 3PL ships (central)." },
    { q: "What about patient privacy?", a: "Zero patient data sharing. We only track anonymous redemption events. Your patient relationships and data remain 100% private and under your control." },
    { q: "Can we control which products appear as rewards?", a: "Yes. Full control via pharmacy admin panel. Approve/reject products, set categories, exclude brands, or curate specific collections for your patients." },
    { q: "What if a product is recalled?", a: "Immediate network-wide removal. We monitor regulatory databases and remove recalled products within hours. Audit trail shows all actions taken." },
    { q: "How does this work with our existing loyalty program?", a: "Buds integrates alongside your current program. Patients can use both. Think of it as expanding your reward catalog without expanding your costs." },
    { q: "What are the membership fees?", a: "We offer flexible membership tiers with monthly fees ranging from €500 to €5,000. Choose the plan that best fits your pharmacy's needs." }
  ]

  return (
    <>
      <LanguageNotice />
    <div className="min-h-screen">
      <PartnerTypeNav />
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              💊 Pharmacy Rewards Program 🏥
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Turn wellness overstock into<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                patient loyalty rewards
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Pharmacies can donate non-Rx wellness items, supplements, and health accessories as Buds rewards. Increase patient retention and move slow-moving inventory without public discounting. GDPR-compliant and pharmacy-safe.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                  Apply as Pharmacy <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-cyan-50">
                Compliance Documentation
              </Button>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-blue-50">
                  Pharmacy Dashboard Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pharmacy Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Why pharmacies choose Buds</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pharmacyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 mb-3">{benefit.description}</p>
                    <div className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {benefit.metric}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible Products */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">What counts as eligible inventory</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-green-400"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">We Accept</h3>
              </div>

              <ul className="space-y-3">
                {eligibleProducts.accepted.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border-2 border-red-400"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">We Do Not Accept</h3>
              </div>

              <ul className="space-y-3">
                {eligibleProducts.notAccepted.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Pharmacy-safe compliance</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Built specifically for pharmacy regulatory requirements
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacy Examples */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Pharmacy success stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pharmacyExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-cyan-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{example.chain}</h3>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-500 mb-1">Challenge:</p>
                  <p className="text-sm text-gray-700 mb-3">{example.challenge}</p>
                  
                  <p className="text-sm font-semibold text-cyan-600 mb-1">Solution:</p>
                  <p className="text-sm text-gray-700 mb-3">{example.solution}</p>
                  
                  <p className="text-sm font-semibold text-gray-500 mb-1">Result:</p>
                  <p className="text-sm text-gray-700">{example.result}</p>
                </div>

                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-4">
                  <p className="text-2xl font-black text-cyan-600">{example.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">How to get started</h2>

          <div className="space-y-6">
            {integrationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-gradient-to-r from-cyan-50 to-white rounded-xl p-6 border border-cyan-200"
              >
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                    <span className="text-sm text-cyan-600 font-semibold">{step.duration}</span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Total time to launch: <span className="font-bold text-cyan-600">2-3 weeks</span></p>
            <Link to="/contact">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg rounded-lg font-bold">
                Start Application <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">Pharmacy FAQ</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-cyan-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-cyan-50 transition-colors"
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
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to enhance patient loyalty?
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            Join pharmacy chains using Buds to increase retention and move wellness inventory
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
                Apply as Pharmacy <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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

export default PharmaciesPage

