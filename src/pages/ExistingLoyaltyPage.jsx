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
import PartnerTypeNav from '../components/PartnerTypeNav'
import { useTranslation } from '../hooks/useTranslation'
import dualLoyaltyCheckout from '../assets/dual-loyalty-checkout.png'

const ExistingLoyaltyPage = () => {
  const { t, tArray } = useTranslation('existingLoyaltyPage')
  const [openFaq, setOpenFaq] = useState(null)

  const objections = tArray('objections')
  const integrationModes = tArray('integrationModes')
  const comparisonData = tArray('comparisonTable.features')
  const useCases = tArray('useCases')
  const faqs = tArray('faqs')

  const iconMap = {
    X, DollarSign, Users, Layers, Shield, BarChart3
  }

  return (
    <div className="min-h-screen">
      <PartnerTypeNav />
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
              {t('hero.badge')}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t('hero.title')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {t('hero.subtitle')}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                {t('cta.seeIntegrationButton')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-purple-50">
                {t('cta.talkToExpertButton')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            {t('objections_section.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t('objections_section.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objections.map((item, index) => {
              const IconComponent = iconMap[item.icon] || X
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.objection}</h3>
                  <p className="text-purple-600 font-semibold mb-3">✓ {item.solution}</p>
                  <p className="text-sm text-gray-600">{item.details}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            {t('integration_modes.title')}
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

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <p className="text-sm text-purple-700 font-medium">{t('integration_modes.exampleLabel')}</p>
                  <p className="text-sm text-gray-700 mt-1">{mode.example}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dual Loyalty Checkout Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-2 border-purple-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t('dual_loyalty.title')}
            </h3>
            <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
              {t('dual_loyalty.description')}
            </p>
            <img 
              src={dualLoyaltyCheckout} 
              alt={t('dual_loyalty.imageAlt')}
              className="w-full rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            {t('comparison.title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            {t('comparison.subtitle')}
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-purple-200">
                    <th className="text-left py-4 px-4 font-bold text-gray-900">{t('comparison.featureColumn')}</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900">{t('comparison.yoursColumn')}</th>
                    <th className="text-center py-4 px-4 font-bold text-purple-600">Buds</th>
                    <th className="text-center py-4 px-4 font-bold text-green-600">{t('comparison.togetherColumn')}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-purple-100">
                      <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.yours ? <Check className="w-6 h-6 text-gray-600 mx-auto" /> : <X className="w-6 h-6 text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.buds ? <Check className="w-6 h-6 text-purple-600 mx-auto" /> : <X className="w-6 h-6 text-gray-300 mx-auto" />}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.together ? <Check className="w-6 h-6 text-green-600 mx-auto" /> : <X className="w-6 h-6 text-gray-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            {t('use_cases.title')}
          </h2>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-purple-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{useCase.brand}</h3>
                    <p className="text-gray-600">{t('use_cases.existingLabel')}: {useCase.existing}</p>
                  </div>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                    {useCase.metric}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-purple-600 mb-2">{t('use_cases.integrationLabel')}: {useCase.integration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">{t('use_cases.resultLabel')}</p>
                    <p className="text-gray-700">{useCase.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            {t('faqs.title')}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">{faq.question || faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer || faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-10 text-purple-100">
            {t('cta.subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/partners/login">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-bold">
                {t('cta.applyButton')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-purple-700 px-8 py-6 text-lg font-bold">
                {t('cta.dashboardButton')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default ExistingLoyaltyPage
