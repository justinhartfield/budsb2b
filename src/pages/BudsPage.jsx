import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  TrendingUp, 
  Package, 
  Star, 
  Shield,
  Truck,
  FileText,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { partnerContent, sectionContent } from '../data/partnerContent'
import partnerHero from '../assets/partner-hero.png'
import RewardsShowcase from '@/components/RewardsShowcase'
import TextWithBrandLogo from '../components/TextWithBrandLogo'

const BudsPage = () => {
  const navigate = useNavigate()
  const { language, setLanguage } = useLanguage()
  const [gmv, setGmv] = useState(100000)
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTab, setActiveTab] = useState('partners')

  const handleTabClick = (tab) => {
    if (tab === 'existing') {
      navigate('/existing-loyalty')
    } else if (tab === 'platforms') {
      navigate('/platforms')
    } else if (tab === 'pharmacies') {
      navigate('/pharmacies')
    } else if (tab === 'manufacturers') {
      navigate('/manufacturers')
    } else {
      setActiveTab(tab)
    }
  }

  // Get current content based on active tab and language
  const currentContent = partnerContent[activeTab][language]
  const currentSections = {
    whatYouGet: sectionContent.whatYouGet[language],
    howDonationsWork: sectionContent.howDonationsWork[language],
    cta: sectionContent.cta[language]
  }

  const copackTarget = gmv * 0.008
  const copackCredit = copackTarget * 1.25
  const centralTarget = gmv * 0.01
  const centralCredit = centralTarget

  const faqs = [
    { q: 'What is "Buds‑engaged GMV"?', a: 'Orders where the Buds widget was engaged (opened, reward viewed, or redeemed).' },
    { q: 'Do we ever pay a fee?', a: 'No. Buds is 100% free to join and use. You only donate overstock inventory.' },
    { q: 'How is our donation valued?', a: 'Based on your COGS (Cost of Goods Sold). Co-pack gets 1.25x credit, central gets 1.0x credit.' },
    { q: "What's the difference between co‑pack and central?", a: 'Co-pack: you ship from your facility (1.25x credit). Central: ship to our 3PL (1.0x credit).' },
    { q: "What if we can't donate every month?", a: 'Your Donor Score will decrease, affecting widget placement. You can catch up the following month.' },
    { q: 'Returns & damages?', a: 'Co-pack: you handle. Central: we handle and deduct from your credit balance.' },
    { q: 'Can pharmacies participate?', a: 'Yes! Non-Rx wellness items, supplements, and health accessories are eligible.' },
    { q: 'What insights do we get?', a: 'Aggregated analytics on engagement, redemptions, and performance. Higher Donor Score = deeper insights.' },
    { q: 'What SKUs are ineligible?', a: 'Cannabis/THC products, nicotine/vapes, prescription medicines, and hazardous goods.' },
    { q: 'How do we get featured in the newsletter?', a: 'Maintain a Donor Score of 1.2+ for priority placement and 1.5+ for top featured spots.' },
    { q: 'How fast can we go live?', a: '5-minute plugin installation. Start donating and earning Donor Score immediately.' },
    { q: 'Can we limit rewards by geography or product lines?', a: 'Yes, configure targeting in your partner dashboard settings.' },
    { q: 'How do customers see the reward?', a: 'Buds widget appears at checkout when cart value meets threshold. Members can browse and add rewards.' },
    { q: "What happens to donated stock that doesn't move?", a: 'We rotate inventory and may offer it to other partners or donate to community programs.' },
    { q: 'Can platforms (e.g., Weed.de) join?', a: 'Yes! Contact us about platform-specific integration options.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Tabs & Language Switcher */}
      <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-3 md:px-6 py-2 md:py-4">
          <div className="flex items-center justify-between flex-wrap gap-2 md:gap-4">
            {/* Navigation Tabs */}
            <div className="flex items-center gap-1 md:gap-2 flex-wrap">
              <button
                onClick={() => handleTabClick('partners')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  activeTab === 'partners'
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                }`}
              >
                Partners
                <span className="hidden md:block text-xs font-normal">For retailers & brands</span>
              </button>
              
              <button
                onClick={() => handleTabClick('platforms')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  activeTab === 'platforms'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                Platforms
                <span className="hidden md:block text-xs font-normal">For marketplaces</span>
              </button>
              
              <button
                onClick={() => handleTabClick('pharmacies')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  activeTab === 'pharmacies'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
                }`}
              >
                Pharmacies
                <span className="hidden md:block text-xs font-normal">For pharmacy chains</span>
              </button>
              
              <button
                onClick={() => handleTabClick('manufacturers')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  activeTab === 'manufacturers'
                    ? 'bg-pink-500 text-white'
                    : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                }`}
              >
                Manufacturers
                <span className="hidden md:block text-xs font-normal">For pharma companies</span>
              </button>
              
              <button
                onClick={() => handleTabClick('existing')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                  activeTab === 'existing'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                Existing Loyalty?
                <span className="hidden md:block text-xs font-normal">Augment your program</span>
              </button>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base font-semibold transition-colors flex items-center gap-1 md:gap-2 ${
                  language === 'en'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base font-semibold transition-colors flex items-center gap-1 md:gap-2 ${
                  language === 'de'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🇩🇪 Deutsch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-8 text-sm font-semibold">
              {currentContent.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {currentContent.headline}
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {currentContent.description}
            </p>

            <div className="mb-10">
              <img src={partnerHero} alt="Partner Network" className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg font-bold">
                {currentSections.cta.applyToPartner} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-lg font-bold hover:bg-gray-50">
                {currentSections.cta.integrationDocs}
              </Button>
              <Link to="/partners/login">
                <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 px-8 py-6 text-lg rounded-lg font-bold hover:bg-red-50">
                  {currentSections.cta.contactSales}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{currentSections.whatYouGet.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, ...currentSections.whatYouGet.benefits[0] },
              { icon: Package, ...currentSections.whatYouGet.benefits[1] },
              { icon: Star, ...currentSections.whatYouGet.benefits[2] },
              { icon: Shield, ...currentSections.whatYouGet.benefits[3] }
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

      {/* Rewards Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <RewardsShowcase 
            title="Premium Rewards Your Customers Will Love"
            subtitle="Travel experiences, event tickets, merchandise, cannabis products, and more"
          />
        </div>
      </section>

      {/* How Donations Work */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{currentSections.howDonationsWork.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <h3 className="text-2xl font-bold text-gray-900">{currentSections.howDonationsWork.copack.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{currentSections.howDonationsWork.copack.description}</p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-green-800 font-semibold">
                  {currentSections.howDonationsWork.copack.credit}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-blue-300 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{currentSections.howDonationsWork.central.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{currentSections.howDonationsWork.central.description}</p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-800 font-semibold">
                  {currentSections.howDonationsWork.central.credit}
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

      {/* Checkout Integration */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Checkout Integration</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            <TextWithBrandLogo text="See how Buds Rewards appears naturally in real Shopify and WooCommerce checkout flows, featuring exclusive [VIBES] branded products and seamless user experience." logoSize="sm" />
          </p>

          {/* Checkout Mockups */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before - Non-member */}
            <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                <p className="text-xs text-gray-600">checkout.shopify.com/wellness-store</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Checkout</h4>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">CBD Wellness Tea</span>
                    <span className="font-semibold">€24.90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Hemp Seed Oil</span>
                    <span className="font-semibold">€35.60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Aromatherapy Kit</span>
                    <span className="font-semibold">€27.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-sm">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold">€87.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-semibold">€4.99</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-cyan-50 border-2 border-green-400 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">Unlock Exclusive Rewards</h5>
                    <span className="text-xs text-green-600 font-semibold">- Add as member reward</span>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white mb-2">Join Buds - It's Free</Button>
                  <p className="text-center text-xs text-gray-600 mb-1">Already a member? <a href="#" className="text-green-600 font-semibold">Sign in</a></p>
                  <p className="text-center text-xs text-gray-500">Quick signup • No purchase required • Cancel anytime</p>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>€92.49</span>
                </div>
              </div>
            </div>

            {/* After - Member with reward */}
            <div className="bg-white rounded-2xl border-2 border-green-400 overflow-hidden shadow-lg">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-300">
                <p className="text-xs text-gray-600">checkout.shopify.com/wellness-store</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-gray-900">Checkout</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">JD</div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">John Doe</p>
                      <p className="text-xs text-green-600">Buds Member</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-400 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs font-semibold text-yellow-900">Gold Tier</p>
                      <p className="text-xs text-yellow-700">Next tier: Platinum (53 credits away)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-yellow-900">247</p>
                      <p className="text-xs text-yellow-700">Buds Credits</p>
                    </div>
                  </div>
                  <p className="text-xs text-yellow-700">€31.25 Credit Value</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">CBD Wellness Tea</span>
                    <span className="font-semibold">€24.90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Hemp Seed Oil</span>
                    <span className="font-semibold">€35.60</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Aromatherapy Kit</span>
                    <span className="font-semibold">€27.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-sm">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold">€87.50</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">Shipping</span>
                    <span className="font-semibold">€4.99</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-cyan-50 border-2 border-green-400 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">Buds Reward Available!</h5>
                    <span className="text-xs text-green-600 font-semibold">- Add as member reward</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 flex items-center gap-1">
                    <Check className="w-3 h-3 text-green-600" />
                    <TextWithBrandLogo text="Exclusive access to [VIBES] branded products & your favorite brands" logoSize="xs" />
                  </p>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Add Reward</Button>
                </div>

                <div className="border-t border-gray-200 pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>€92.49</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Quick Signup Flow', desc: 'Frictionless registration process during checkout' },
              { title: 'Instant Rewards', desc: 'Immediate access to exclusive [VIBES] products upon signup', useLogo: true },
              { title: 'Member Status', desc: 'Clear visual indication of membership status and benefits' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  {item.useLogo ? <TextWithBrandLogo text={item.desc} logoSize="xs" className="justify-center" /> : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Encouragement System */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Smart Encouragement System</h2>
          <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
            Advanced psychology-driven features that naturally encourage customers to increase their cart value for exclusive rewards.
          </p>
          <p className="text-center text-green-600 font-semibold mb-12">
            Progressive tiers and AI recommendations drive 23% higher AOV
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Progressive Tiers', desc: 'Multiple reward levels encourage larger purchases' },
              { title: 'Smart Suggestions', desc: 'AI-powered recommendations to reach reward thresholds' },
              { title: 'Exclusive Access', desc: '[VIBES] branded products only available through rewards', useLogo: true }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.useLogo ? <TextWithBrandLogo text={item.desc} logoSize="sm" /> : item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Seamless Technical Integration</h2>
          <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
            Enterprise-grade plugin that installs in minutes with zero performance impact on your existing store infrastructure.
          </p>
          <p className="text-center text-green-600 font-semibold mb-12">
            5-minute setup • &lt;50ms load time • 99.9% uptime
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { num: '1', title: 'Install Plugin', desc: 'Shopify App Store → Search "Buds Rewards"\nWooCommerce → Plugins → Upload "buds-rewards.zip"' },
              { num: '2', title: 'Connect Account', desc: 'API key auto-sync → Partner dashboard linked' },
              { num: '3', title: 'Configure Display', desc: '✓ Widget placement: Checkout page\n✓ Trigger: Cart value ≥ €25\n✓ Geography: EU only' },
              { num: '4', title: 'Go Live', desc: 'Widget active → Start collecting engagement data' }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Quick Setup', desc: '5-minute installation across all platforms' },
              { title: 'Zero Impact', desc: 'Minimal performance impact on your store' },
              { title: 'No Coding', desc: 'Plugin handles all technical implementation' },
              { title: 'Real-time', desc: 'Instant sync with partner dashboard' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement & Perks */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Placement & perks (how we rank)</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donor Score</h3>
              <p className="text-gray-600">We compute a monthly Donor Score = (credited donations / target).</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higher Scores</h3>
              <p className="text-gray-600">Higher Donor Scores → top widget placement, more newsletter slots, and deeper insights.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tiebreakers</h3>
              <p className="text-gray-600">Ties are broken by recent click‑through performance.</p>
            </div>
          </div>

          {/* Newsletter & Widget Mockup */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">Top Donors Get Prime Exposure</h3>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              See how high-performing partners get featured in our weekly newsletter and receive top widget placement across the Buds network.
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Newsletter Mockup */}
              <div className="bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg">
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-sm font-semibold text-gray-700">Gmail</span>
                  </div>
                  <span className="text-xs text-gray-500">•••</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-gray-900">Buds Weekly Newsletter</h4>
                      <p className="text-sm text-gray-600">hello@budsrewards.com</p>
                    </div>
                    <span className="text-xs text-gray-500">Today, 8:00 AM</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">To: you@example.com</p>
                  
                  <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-xl p-6 mb-4">
                    <h5 className="text-xl font-black text-gray-900 mb-2">Buds Weekly</h5>
                    <p className="text-sm text-gray-600 mb-4">Partner Spotlight Edition</p>
                    
                    <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 mb-4">
                      <p className="text-xs font-semibold text-yellow-800">SPONSORED CONTENT</p>
                      <p className="text-xs text-yellow-700"><TextWithBrandLogo text="This content is sponsored by [VIBES] - Premium tobacco accessories" logoSize="xs" /></p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <p className="text-xs font-semibold text-purple-600 mb-2">FEATURED ADVERTISER PARTNER</p>
                      <h6 className="font-bold text-gray-900 mb-2"><TextWithBrandLogo text="[VIBES] Signature Series" logoSize="sm" /></h6>
                      <p className="text-xs text-gray-600 mb-3"><TextWithBrandLogo text="Our advertising partner [VIBES] is offering exclusive rolling papers and accessories as Buds rewards." logoSize="xs" /></p>
                      
                      <div className="bg-green-50 border border-green-200 rounded p-2">
                        <p className="text-xs font-semibold text-green-800">Advertiser Exclusive Offer</p>
                        <p className="text-xs text-green-700">Donor Score 1.2+ gets priority access</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-900 mb-3">This Week's Top Donors</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                            <span className="text-xs font-semibold">Partner Store A</span>
                          </div>
                          <span className="text-xs text-green-600 font-semibold">Score: 1.8</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                            <span className="text-xs font-semibold">Partner Store B</span>
                          </div>
                          <span className="text-xs text-green-600 font-semibold">Score: 1.5</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-orange-300 text-orange-900 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                            <span className="text-xs font-semibold">Partner Store C</span>
                          </div>
                          <span className="text-xs text-green-600 font-semibold">Score: 1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center">Sent to 12,450+ cannabis enthusiasts across EU</p>
                </div>
              </div>

              {/* Widget Placement Hierarchy */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Widget Placement</h4>
                <p className="text-sm text-gray-600 mb-6">Donor Score Hierarchy</p>
                
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-yellow-800">Top Placement</span>
                    <span className="text-xs font-bold text-yellow-900">Score: 1.5+</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2"><TextWithBrandLogo text="[VIBES] Signature Series Kit" logoSize="sm" /></h5>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" /> First position in widget
                    </p>
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" /> Featured in newsletter
                    </p>
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-600" /> Premium analytics
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-800">Mid Placement</span>
                    <span className="text-xs font-bold text-blue-900">Score: 1.0-1.4</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Partner Store B - Premium Accessories</h5>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-blue-600" /> Standard widget position
                    </p>
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-blue-600" /> Monthly newsletter mention
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-700">Standard Placement</span>
                    <span className="text-xs font-bold text-gray-900">Score: 0.8-0.9</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Partner Store C - Basic Rewards</h5>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-600" /> Rotation-based display
                    </p>
                    <p className="text-xs text-gray-700 flex items-center gap-1">
                      <Check className="w-3 h-3 text-gray-600" /> Basic analytics
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-red-800">Below Target</span>
                    <span className="text-xs font-bold text-red-900">Score: &lt;0.8</span>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Reduced visibility until catch-up</h5>
                  <p className="text-xs text-red-700">⚠ Limited display • Catch-up plan required</p>
                </div>

                <p className="text-center text-sm font-semibold text-gray-900 mt-6">
                  Higher Donor Score = Better Placement & More Features
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top Donor Benefits</h3>
            <ul className="space-y-3 max-w-3xl mx-auto">
              {[
                'First position in Buds reward widgets across all partner sites',
                'Featured product spotlights in weekly newsletter sent to 12,450+ subscribers',
                'Premium analytics and performance insights',
                'Exclusive access to limited-time promotional campaigns',
                'Priority co-marketing opportunities with other top brands',
                'Direct feedback line to product development team'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What Counts as Overstock */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">What counts as "overstock"</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-green-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">We accept</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• New or like‑new products: prior season colorways, size runs, misprints, sample stock, over‑orders</li>
                <li>• Categories: apparel, bags, non‑Rx wellness items, culture/art</li>
                <li>• Smoking accessories labeled "for tobacco/herbal use" (18+)</li>
                <li>• Non‑electronic grinders/trays/ashtrays, protective cases</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-red-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">We do not accept</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Cannabis/THC products</li>
                <li>• Nicotine/vapes</li>
                <li>• Prescription medicines</li>
                <li>• Hazardous goods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">Compliance (Germany‑first)</h2>
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Compliance Information</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>No cannabis products or advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Online sale/delivery of cannabis remains prohibited</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Buds rewards are merch, accessories (18+ where applicable), and education only</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Age‑verified delivery used where required</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Start in 3 Steps */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Start in 3 steps</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { num: '1', title: 'Apply', desc: 'Tell us your catalog + overstock categories' },
              { num: '2', title: 'Install the Buds widget', desc: 'Shopify/Woo plug‑in installation' },
              { num: '3', title: 'Donate', desc: 'Co‑pack (best) or ship to our EU 3PL. Start earning Donor Score and placement' }
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg rounded-lg font-bold">
              Apply to Partner <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 px-10 py-6 text-lg rounded-lg font-bold hover:bg-gray-50">
              Integration Docs
            </Button>
            <Link to="/partners/login">
              <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-500 px-10 py-6 text-lg rounded-lg font-bold hover:bg-red-50">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Partner FAQ</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-black mb-4">Buds Rewards</h3>
              <p className="text-gray-400">Partner with us to turn excess inventory into customer loyalty rewards.</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Partner Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Integration Docs</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><Link to="/partners/login" className="hover:text-white">Partner Portal</Link></li>
                <li><Link to="/partners/dashboard" className="hover:text-white font-semibold text-green-400">View Sample Dashboard</Link></li>
                <li><a href="#" className="hover:text-white">Support Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">GDPR Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:partners@budsrewards.com" className="hover:text-white">partners@budsrewards.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+49 (0) 30 123 456 78</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Berlin, Germany</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400 mb-4">
              Buds rewards are limited to merchandise, accessories (18+ where applicable), and education. No cannabis for sale or advertising. Age‑verified delivery may be required for some items. GDPR‑aligned (joint‑controller addendum + DPA available).
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-gray-500">© 2025 Buds Rewards. All rights reserved.</p>
              <div className="flex items-center gap-3">
                <Link to="/partners/dashboard">
                  <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                    View Sample Dashboard →
                  </Button>
                </Link>
                <Link to="/partners/login">
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                    Partner Login →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BudsPage

