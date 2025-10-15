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
import { useLanguage } from '../contexts/LanguageContext';
import { allTranslations } from '../data/allTranslations';
import heroImage from '../assets/pharmacy-hero.png'

const PharmaciesPage = () => {
  const { language } = useLanguage();
  const t = allTranslations.pharmacies[language];

  const [openFaq, setOpenFaq] = useState(null)

  const pharmacyBenefits = [
    {
      icon: Heart,
      title: t.sectionBenefits.benefit1.title,
      description: t.sectionBenefits.benefit1.description,
      metric: t.sectionBenefits.benefit1.metric
    },
    {
      icon: TrendingUp,
      title: t.sectionBenefits.benefit2.title,
      description: t.sectionBenefits.benefit2.description,
      metric: t.sectionBenefits.benefit2.metric
    },
    {
      icon: Shield,
      title: t.sectionBenefits.benefit3.title,
      description: t.sectionBenefits.benefit3.description,
      metric: t.sectionBenefits.benefit3.metric
    },
    {
      icon: Users,
      title: t.sectionBenefits.benefit4.title,
      description: t.sectionBenefits.benefit4.description,
      metric: t.sectionBenefits.benefit4.metric
    }
  ]

  const eligibleProducts = {
    accepted: t.eligibleProducts.accepted,
    notAccepted: t.eligibleProducts.notAccepted
  }

  const complianceFeatures = [
    {
      title: t.complianceFeatures.feature1.title,
      description: t.complianceFeatures.feature1.description,
      icon: Lock
    },
    {
      title: t.complianceFeatures.feature2.title,
      description: t.complianceFeatures.feature2.description,
      icon: FileCheck
    },
    {
      title: t.complianceFeatures.feature3.title,
      description: t.complianceFeatures.feature3.description,
      icon: Shield
    },
    {
      title: t.complianceFeatures.feature4.title,
      description: t.complianceFeatures.feature4.description,
      icon: FileCheck
    }
  ]

  const pharmacyExamples = [
    {
      chain: t.pharmacyExamples.example1.chain,
      challenge: t.pharmacyExamples.example1.challenge,
      solution: t.pharmacyExamples.example1.solution,
      result: t.pharmacyExamples.example1.result,
      metric: t.pharmacyExamples.example1.metric
    },
    {
      chain: t.pharmacyExamples.example2.chain,
      challenge: t.pharmacyExamples.example2.challenge,
      solution: t.pharmacyExamples.example2.solution,
      result: t.pharmacyExamples.example2.result,
      metric: t.pharmacyExamples.example2.metric
    },
    {
      chain: t.pharmacyExamples.example3.chain,
      challenge: t.pharmacyExamples.example3.challenge,
      solution: t.pharmacyExamples.example3.solution,
      result: t.pharmacyExamples.example3.result,
      metric: t.pharmacyExamples.example3.metric
    }
  ]

  const integrationProcess = [
    {
      step: 1,
      title: t.integrationProcess.step1.title,
      description: t.integrationProcess.step1.description,
      duration: t.integrationProcess.step1.duration
    },
    {
      step: 2,
      title: t.integrationProcess.step2.title,
      description: t.integrationProcess.step2.description,
      duration: t.integrationProcess.step2.duration
    },
    {
      step: 3,
      title: t.integrationProcess.step3.title,
      description: t.integrationProcess.step3.description,
      duration: t.integrationProcess.step3.duration
    },
    {
      step: 4,
      title: t.integrationProcess.step4.title,
      description: t.integrationProcess.step4.description,
      duration: t.integrationProcess.step4.duration
    },
    {
      step: 5,
      title: t.integrationProcess.step5.title,
      description: t.integrationProcess.step5.description,
      duration: t.integrationProcess.step5.duration
    }
  ]

  const faqs = t.faqs

  return (
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
              {t.hero.badge}
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              {t.hero.headlinePart1}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                {t.hero.headlinePart2}
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-lg font-bold">
                {t.hero.applyButton} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-cyan-600 text-cyan-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-cyan-50">
                {t.hero.complianceButton}
              </Button>
              <Link to="/partners/dashboard">
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-6 text-lg rounded-lg font-bold hover:bg-blue-50">
                  {t.hero.dashboardButton}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pharmacy Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.sectionBenefits.title}</h2>
          
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.eligibleProducts.title}</h2>

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
                <h3 className="text-2xl font-bold text-gray-900">{t.eligibleProducts.acceptTitle}</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">{t.eligibleProducts.notAcceptTitle}</h3>
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-6">{t.complianceFeatures.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            {t.complianceFeatures.description}
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.pharmacyExamples.title}</h2>

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
                  <p className="text-sm font-semibold text-gray-500 mb-1">{t.pharmacyExamples.labels.challenge}</p>
                  <p className="text-sm text-gray-700 mb-3">{example.challenge}</p>
                  
                  <p className="text-sm font-semibold text-cyan-600 mb-1">{t.pharmacyExamples.labels.solution}</p>
                  <p className="text-sm text-gray-700 mb-3">{example.solution}</p>
                  
                  <p className="text-sm font-semibold text-gray-500 mb-1">{t.pharmacyExamples.labels.result}</p>
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
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.integrationProcess.title}</h2>

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
            <p className="text-lg text-gray-600 mb-6">{t.integrationProcess.totalTime} <span className="font-bold text-cyan-600">{t.integrationProcess.totalTimeValue}</span></p>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg rounded-lg font-bold">
              {t.integrationProcess.startButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-16">{t.faq.title}</h2>

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
            {t.finalCta.headline}
          </h2>
          <p className="text-xl text-cyan-100 mb-10">
            {t.finalCta.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg font-bold">
              {t.finalCta.applyButton} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/partners/dashboard">
              <Button size="lg" variant="outline" className="border-2 border-white text-white px-10 py-6 text-lg rounded-lg font-bold hover:bg-white/10">
                {t.finalCta.dashboardButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PharmaciesPage