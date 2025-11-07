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
import { useTranslation } from '../hooks/useTranslation'
import PartnerTypeNav from '../components/PartnerTypeNav'
import platformHero from '../assets/platform-hero.png'

const PlatformsPage = () => {
  const { t, tArray } = useTranslation('platformsPage')
  const [openFaq, setOpenFaq] = useState(null)

  const iconMap = {
    0: TrendingUp,
    1: Store,
    2: Users,
    3: Shield
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
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  {t('cta.applyButton')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  {t('cta.dashboardButton')}
                </Button>
              </Link>
            </div>

            <img 
              src={platformHero} 
              alt="Platform Integration" 
              className="mt-16 rounded-2xl shadow-2xl mx-auto max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('benefits.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {tArray('benefits.items').map((benefit, index) => {
              const Icon = iconMap[index]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{benefit.title}</h3>
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          {benefit.metric}
                        </span>
                      </div>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('integrationOptions.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-6">{t('integrationOptions.subtitle')}</p>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">{t('integrationOptions.description')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tArray('integrationOptions.items').map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="space-y-3 mb-6">
                  {option.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    <strong>Best for:</strong> {option.bestFor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Models */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('revenueModels.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{t('revenueModels.subtitle')}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tArray('revenueModels.items').map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-xl border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <h3 className="text-xl font-bold">{model.model}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{model.description}</p>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-700 font-mono">{model.example}</p>
                </div>
                
                <div className="space-y-2">
                  {model.pros.map((pro, pIndex) => (
                    <div key={pIndex} className="flex items-center gap-2">
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

      {/* Success Stories */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('examples.title')}</h2>
          
          <div className="space-y-8">
            {tArray('examples.items').map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{example.platform}</h3>
                      <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                        {example.sellers}
                      </span>
                      <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {example.integration}
                      </span>
                    </div>
                    <p className="text-gray-700">{example.result}</p>
                  </div>
                  <div className="text-3xl font-black text-green-600">
                    {example.metric}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t('technicalSpecs.title')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{t('technicalSpecs.subtitle')}</p>
          
          <div className="space-y-6">
            {tArray('technicalSpecs.items').map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{spec.category}</h3>
                    <p className="text-gray-600">{spec.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t('faqs.title')}</h2>
          
          <div className="space-y-4">
            {tArray('faqs.items').map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta.subtitle')}</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                {t('cta.applyButton')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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

export default PlatformsPage

