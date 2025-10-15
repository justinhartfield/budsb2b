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
import { useLanguage } from '../contexts/LanguageContext';
import { allTranslations } from '../data/allTranslations';

const PlatformsPage = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const { language } = useLanguage();
  const t = allTranslations.platforms[language];

  const platformBenefits = [
    {
      icon: TrendingUp,
      title: t.sectionBenefits.benefits[0].title,
      description: t.sectionBenefits.benefits[0].description,
      metric: t.sectionBenefits.benefits[0].metric
    },
    {
      icon: Store,
      title: t.sectionBenefits.benefits[1].title,
      description: t.sectionBenefits.benefits[1].description,
      metric: t.sectionBenefits.benefits[1].metric
    },
    {
      icon: Users,
      title: t.sectionBenefits.benefits[2].title,
      description: t.sectionBenefits.benefits[2].description,
      metric: t.sectionBenefits.benefits[2].metric
    },
    {
      icon: Shield,
      title: t.sectionBenefits.benefits[3].title,
      description: t.sectionBenefits.benefits[3].description,
      metric: t.sectionBenefits.benefits[3].metric
    }
  ]

  const integrationOptions = [
    {
      title: t.sectionIntegration.options[0].title,
      description: t.sectionIntegration.options[0].description,
      features: t.sectionIntegration.options[0].features,
      bestFor: t.sectionIntegration.options[0].bestFor
    },
    {
      title: t.sectionIntegration.options[1].title,
      description: t.sectionIntegration.options[1].description,
      features: t.sectionIntegration.options[1].features,
      bestFor: t.sectionIntegration.options[1].bestFor
    },
    {
      title: t.sectionIntegration.options[2].title,
      description: t.sectionIntegration.options[2].description,
      features: t.sectionIntegration.options[2].features,
      bestFor: t.sectionIntegration.options[2].bestFor
    }
  ]

  const revenueModels = [
    {
      model: t.sectionRevenue.models[0].model,
      description: t.sectionRevenue.models[0].description,
      example: t.sectionRevenue.models[0].example,
      pros: t.sectionRevenue.models[0].pros
    },
    {
      model: t.sectionRevenue.models[1].model,
      description: t.sectionRevenue.models[1].description,
      example: t.sectionRevenue.models[1].example,
      pros: t.sectionRevenue.models[1].pros
    },
    {
      model: t.sectionRevenue.models[2].model,
      description: t.sectionRevenue.models[2].description,
      example: t.sectionRevenue.models[2].example,
      pros: t.sectionRevenue.models[2].pros
    }
  ]

  const platformExamples = [
    {
      platform: t.sectionExamples.examples[0].platform,
      sellers: t.sectionExamples.examples[0].sellers,
      integration: t.sectionExamples.examples[0].integration,
      result: t.sectionExamples.examples[0].result,
      metric: t.sectionExamples.examples[0].metric
    },
    {
      platform: t.sectionExamples.examples[1].platform,
      sellers: t.sectionExamples.examples[1].sellers,
      integration: t.sectionExamples.examples[1].integration,
      result: t.sectionExamples.examples[1].result,
      metric: t.sectionExamples.examples[1].metric
    },
    {
      platform: t.sectionExamples.examples[2].platform,
      sellers: t.sectionExamples.examples[2].sellers,
      integration: t.sectionExamples.examples[2].integration,
      result: t.sectionExamples.examples[2].result,
      metric: t.sectionExamples.examples[2].metric
    }
  ]

  const technicalSpecs = [
    {
      category: t.sectionTechnical.specs[0].category,
      details: t.sectionTechnical.specs[0].details
    },
    {
      category: t.sectionTechnical.specs[1].category,
      details: t.sectionTechnical.specs[1].details
    },
    {
      category: t.sectionTechnical.specs[2].category,
      details: t.sectionTechnical.specs[2].details
    },
    {
      category: t.sectionTechnical.specs[3].category,
      details: t.sectionTechnical.specs[3].details
    },
    {
      category: t.sectionTechnical.specs[4].category,
      details: t.sectionTechnical.specs[4].details
    }
  ]

  const faqs = t.sectionFaq.faqs

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
              {t.hero.headlinePart1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                {t.hero.headlinePart2}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                {t.hero.buttons.viewIntegrationOptions} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-purple-50">
                {t.hero.buttons.apiDocumentation}
              </Button>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-2 border-indigo-600 text-indigo-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-indigo-50">
                  {t.hero.buttons.platformDemo}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionBenefits.title}</h2>
          
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionIntegration.title}</h2>

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
                  <p className="text-xs font-semibold text-purple-700 mb-1">{t.sectionIntegration.bestForLabel}</p>
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">{t.sectionRevenue.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t.sectionRevenue.description}
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionExamples.title}</h2>

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
                  <p className="text-sm text-purple-600 font-semibold">{t.sectionExamples.integrationLabel}: {example.integration}</p>
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionTechnical.title}</h2>

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
              {t.sectionTechnical.apiButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionFaq.title}</h2>

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
            {t.sectionFinalCta.headline}
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            {t.sectionFinalCta.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              {t.sectionFinalCta.buttons.scheduleDemo} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg rounded-lg font-bold hover:bg-white/10">
                {t.sectionFinalCta.buttons.viewDashboard}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlatformsPage