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
    cta: sectionContent.cta[language]
  }

  const copackTarget = gmv * 0.008
  const copackCredit = copackTarget * 1.25
  const centralTarget = gmv * 0.01
  const centralCredit = centralTarget

  const faqs = [
    { q: 'What is "Buds‑engaged GMV"?', a: 'Orders where the Buds widget was engaged (opened, reward viewed, or redeemed).' },
    { q: 'What are the membership fees?', a: 'We offer flexible membership tiers ranging from €500 to €5,000 per month. Choose the plan that fits your business needs.' },
    { q: 'Are product donations required?', a: 'No, product donations are completely optional and do not affect your membership tier or benefits. They are tracked manually in Airtable.' },
    { q: 'What rewards are available?', a: '80% standard vouchers (Amazon, travel, experiences) via Comarch and 20% premium cannabis products (manually curated, limited inventory).' },
    
    { q: 'Returns & damages?', a: 'For optional product donations, you handle returns. For all other rewards, Buds handles returns and customer service.' },
    { q: 'Can pharmacies participate?', a: 'Yes! Non-Rx wellness items, supplements, and health accessories are eligible.' },
    { q: 'What insights do we get?', a: 'All partners receive access to a standard analytics dashboard with insights on engagement, redemptions, and performance.' },
    { q: 'What SKUs are ineligible?', a: 'Cannabis/THC products, nicotine/vapes, prescription medicines, and hazardous goods.' },
    { q: 'How do we get featured in the newsletter?', a: 'Partners in our Growth and Enterprise tiers get featured in our newsletter.' },
    { q: 'How fast can we go live?', a: '5-minute plugin installation. Once you select a membership tier, you can go live immediately.' },
    { q: 'Can we limit rewards by geography or product lines?', a: 'Yes, configure targeting in your partner dashboard settings.' },
    { q: 'How do customers see the reward?', a: 'Buds widget appears at checkout when cart value meets threshold. Members can browse and add rewards.' },
    { q: 'How are rewards managed?', a: 'Standard vouchers are managed through Comarch. Premium cannabis products are manually curated with limited inventory.' },
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
                📦 Partners
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
                🌐 Platforms
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
                💊 Pharmacies
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
                🏭 Manufacturers
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
                🎁 Existing Loyalty?
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
              <Link to="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-lg font-bold">
                  {currentSections.cta.applyToPartner} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-lg font-bold hover:bg-gray-50">
                {currentSections.cta.integrationDocs}
              </Button>
              <Link to="/contact">
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



      {/* 80/20 Model Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            The 80/20 Split: Standard vs. Premium Rewards
          </h2>
          
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our hybrid model combines a standard coalition loyalty program with a premium, high-margin revenue stream powered by brand sponsorships.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Buds (80% of Catalog)</h3>
              <p className="text-gray-600 mb-6">The foundation of our loyalty program is a standard coalition model where partners contribute to a shared reward pool. This allows us to offer a wide variety of rewards to all Buds members at no cost to the platform.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2 text-xl">✓</span>
                  <span><span className="font-bold">Funding Source:</span> Partner-donated inventory (overstock and promotional items)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-green-500 mr-2 text-xl">✓</span>
                  <span><span className="font-bold">Availability:</span> All Buds members</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg shadow-md border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buds Pro Exclusives (20% of Catalog)</h3>
              <p className="text-gray-600 mb-6">The premium tier of our program, Buds Pro, offers exclusive access to high-end products and experiences. This is where we generate the majority of our revenue and provide a unique value proposition for our top members and brand partners.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-2 text-xl">✓</span>
                  <span><span className="font-bold">Funding Source:</span> Brand sponsorships and Buds procurement</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-yellow-600 mr-2 text-xl">✓</span>
                  <span><span className="font-bold">Availability:</span> Only Buds Pro members (Our Top 10% of Customers)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Integration */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">🛍️ Checkout Integration</h2>
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
                    <h5 className="font-bold text-gray-900">🎁 Unlock Exclusive Rewards</h5>
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">🧠 Smart Encouragement System</h2>
          <p className="text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
            Advanced psychology-driven features that naturally encourage customers to increase their cart value for exclusive rewards.
          </p>
          <p className="text-center text-green-600 font-semibold mb-12">
            Progressive tiers and AI recommendations drive 23% higher AOV
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '📈 Progressive Tiers', desc: 'Multiple reward levels encourage larger purchases' },
              { title: '🤖 Smart Suggestions', desc: 'AI-powered recommendations to reach reward thresholds' },
              { title: '⭐ Exclusive Access', desc: '[VIBES] branded products only available through rewards', useLogo: true }
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">🔧 Seamless Technical Integration</h2>
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

      {/* Membership Tier Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">Membership tier benefits</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">All tiers include the Buds loyalty widget and standard analytics. Higher tiers add visibility and support benefits.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Basic</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Loyalty widget</li>
                <li>✓ Standard analytics dashboard</li>
                <li>✓ Email support</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Everything in Basic</li>
                <li>✓ Newsletter mentions</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Everything in Growth</li>
                <li>✓ Premium placement</li>
                <li>✓ Dedicated support</li>
              </ul>
            </div>
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
              { num: '3', title: 'Go Live', desc: 'Select your membership tier and go live. Optional product donations can be managed via Airtable.' }
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
            <Link to="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-lg rounded-lg font-bold">
                Apply to Partner <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-900 px-10 py-6 text-lg rounded-lg font-bold hover:bg-gray-50">
              Integration Docs
            </Button>
            <Link to="/contact">
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
              <p className="text-gray-400">The coalition loyalty program for the cannabis industry, powered by brand sponsorships.</p>
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

