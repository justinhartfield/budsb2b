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
import { useLanguage } from '../contexts/LanguageContext';
import { allTranslations } from '../data/allTranslations';

const ExistingLoyaltyPage = () => {
  const { language } = useLanguage();
  const t = allTranslations.existingLoyalty[language];

  const [openFaq, setOpenFaq] = useState(null)

  const objections = [
    {
      icon: X,
      objection: t.objections[0].objection,
      solution: t.objections[0].solution,
      details: t.objections[0].details
    },
    {
      icon: DollarSign,
      objection: t.objections[1].objection,
      solution: t.objections[1].solution,
      details: t.objections[1].details
    },
    {
      icon: Users,
      objection: t.objections[2].objection,
      solution: t.objections[2].solution,
      details: t.objections[2].details
    },
    {
      icon: Layers,
      objection: t.objections[3].objection,
      solution: t.objections[3].solution,
      details: t.objections[3].details
    },
    {
      icon: Shield,
      objection: t.objections[4].objection,
      solution: t.objections[4].solution,
      details: t.objections[4].details
    },
    {
      icon: BarChart3,
      objection: t.objections[5].objection,
      solution: t.objections[5].solution,
      details: t.objections[5].details
    }
  ]

  const integrationModes = [
    {
      title: t.integrationModes[0].title,
      description: t.integrationModes[0].description,
      features: t.integrationModes[0].features,
      example: t.integrationModes[0].example
    },
    {
      title: t.integrationModes[1].title,
      description: t.integrationModes[1].description,
      features: t.integrationModes[1].features,
      example: t.integrationModes[1].example
    },
    {
      title: t.integrationModes[2].title,
      description: t.integrationModes[2].description,
      features: t.integrationModes[2].features,
      example: t.integrationModes[2].example
    }
  ]

  const comparisonData = [
    { feature: t.comparisonTable.features[0], yours: true, buds: false, together: true },
    { feature: t.comparisonTable.features[1], yours: true, buds: false, together: true },
    { feature: t.comparisonTable.features[2], yours: true, buds: false, together: true },
    { feature: t.comparisonTable.features[3], yours: true, buds: false, together: true },
    { feature: t.comparisonTable.features[4], yours: false, buds: true, together: true },
    { feature: t.comparisonTable.features[5], yours: false, buds: true, together: true },
    { feature: t.comparisonTable.features[6], yours: false, buds: true, together: true },
    { feature: t.comparisonTable.features[7], yours: false, buds: true, together: true }
  ]

  const useCases = [
    {
      brand: t.useCases[0].brand,
      existing: t.useCases[0].existing,
      integration: t.useCases[0].integration,
      result: t.useCases[0].result,
      metric: t.useCases[0].metric
    },
    {
      brand: t.useCases[1].brand,
      existing: t.useCases[1].existing,
      integration: t.useCases[1].integration,
      result: t.useCases[1].result,
      metric: t.useCases[1].metric
    },
    {
      brand: t.useCases[2].brand,
      existing: t.useCases[2].existing,
      integration: t.useCases[2].integration,
      result: t.useCases[2].result,
      metric: t.useCases[2].metric
    }
  ]

  const faqs = t.faqs

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
              {t.hero.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t.hero.headlineLine1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                {t.hero.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-purple-50">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            {t.problem.title}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t.problem.description}
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
            {t.howItWorks.title}
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
                  <p className="text-xs font-semibold text-purple-700 mb-1">{t.howItWorks.exampleLabel}</p>
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
            {t.comparisonTable.title}
          </h2>

          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-4 font-bold text-gray-900">{t.comparisonTable.columns.feature}</div>
              <div className="p-4 font-bold text-gray-900 text-center">{t.comparisonTable.columns.yours}</div>
              <div className="p-4 font-bold text-purple-600 text-center">{t.comparisonTable.columns.buds}</div>
              <div className="p-4 font-bold text-green-600 text-center">{t.comparisonTable.columns.together}</div>
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
            {t.comparisonTable.footerText1} <span className="font-bold text-purple-600">{t.comparisonTable.footerText2}</span>
          </p>
        </div>
      </section>

      {/* Real Examples */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">
            {t.realExamples.title}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t.realExamples.description}
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
                  <p className="text-sm text-gray-500 mb-1">{t.realExamples.existingLabel} {useCase.existing}</p>
                  <p className="text-sm text-purple-600 font-semibold">{t.realExamples.integrationLabel} {useCase.integration}</p>
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
            {t.technicalIntegration.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.technicalIntegration.compatiblePlatformsTitle}</h3>
              <ul className="space-y-3">
                {t.technicalIntegration.compatiblePlatformsList.map((platform, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{platform}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.technicalIntegration.integrationMethodTitle}</h3>
              <div className="space-y-4">
                {t.technicalIntegration.integrationSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.number}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{step.title}</p>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {t.technicalIntegration.zeroConflictGuarantee.title}
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t.technicalIntegration.zeroConflictGuarantee.description}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">
            {t.faq.title}
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
            {t.finalCta.headline}
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            {t.finalCta.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              {t.finalCta.primaryButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg rounded-lg font-bold hover:bg-white/10">
                {t.finalCta.secondaryButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExistingLoyaltyPage