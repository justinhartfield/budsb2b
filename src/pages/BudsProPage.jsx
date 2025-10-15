import { motion } from 'framer-motion'
import { Crown, Zap, Calendar, CreditCard, Tag, Sticker, Gift, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import budsProBadge from '../assets/budspro-badge.png'
import { useLanguage } from '../contexts/LanguageContext';
import { allTranslations } from '../data/allTranslations';

const BudsProPage = () => {
  const { language } = useLanguage();
  const t = allTranslations.budsPro[language];

  const benefits = [
    {
      icon: Calendar,
      title: t.sectionPerks.perks[0].title,
      description: t.sectionPerks.perks[0].description
    },
    {
      icon: Zap,
      title: t.sectionPerks.perks[1].title,
      description: t.sectionPerks.perks[1].description
    },
    {
      icon: ArrowRight,
      title: t.sectionPerks.perks[2].title,
      description: t.sectionPerks.perks[2].description
    },
    {
      icon: CreditCard,
      title: t.sectionPerks.perks[3].title,
      description: t.sectionPerks.perks[3].description
    },
    {
      icon: Tag,
      title: t.sectionPerks.perks[4].title,
      description: t.sectionPerks.perks[4].description
    },
    {
      icon: Sticker,
      title: t.sectionPerks.perks[5].title,
      description: t.sectionPerks.perks[5].description
    },
    {
      icon: Gift,
      title: t.sectionPerks.perks[6].title,
      description: t.sectionPerks.perks[6].description
    },
    {
      icon: Lock,
      title: t.sectionPerks.perks[7].title,
      description: t.sectionPerks.perks[7].description
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-black" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img src={budsProBadge} alt={t.hero.altText} className="w-48 h-48 mx-auto" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                {t.hero.title}
              </span>
            </h1>
            
            <p className="text-3xl text-gray-300 mb-4 font-light">
              {t.hero.tagline}
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {t.hero.description}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border border-yellow-500/50 rounded-2xl px-8 py-4">
                <p className="text-yellow-400 font-semibold text-lg flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  {t.hero.invitationRequired}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="border-l-4 border-yellow-400 pl-8 text-left">
              <h2 className="text-4xl font-black text-yellow-400 mb-4">{t.keyMessages.loyalty.title}</h2>
              <p className="text-xl text-gray-300">
                {t.keyMessages.loyalty.description}
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-8 text-left">
              <h2 className="text-4xl font-black text-yellow-400 mb-4">{t.keyMessages.innerCircle.title}</h2>
              <p className="text-xl text-gray-300">
                {t.keyMessages.innerCircle.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-white mb-4">{t.proExperience.title}</h2>
            <p className="text-xl text-gray-400">{t.proExperience.description}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500/10 to-transparent w-32 h-32 rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <benefit.icon className="w-12 h-12 text-yellow-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Invited Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-white mb-4">{t.howToGetInvited.title}</h2>
            <p className="text-xl text-gray-400">{t.howToGetInvited.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-900/30 to-black border border-yellow-500/30 rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4">{t.howToGetInvited.criteria.topSpenders.title}</h3>
              <p className="text-gray-400">{t.howToGetInvited.criteria.topSpenders.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-900/30 to-black border border-yellow-500/30 rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4">{t.howToGetInvited.criteria.communityLeaders.title}</h3>
              <p className="text-gray-400">{t.howToGetInvited.criteria.communityLeaders.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-900/30 to-black border border-yellow-500/30 rounded-3xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-black text-yellow-400 mb-4">{t.howToGetInvited.criteria.partnerReferrals.title}</h3>
              <p className="text-gray-400">{t.howToGetInvited.criteria.partnerReferrals.description}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              {t.howToGetInvited.note}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-white mb-4">{t.visualComparison.title}</h2>
            <p className="text-xl text-gray-400">{t.visualComparison.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600/20 to-cyan-600/20 border border-green-500/30 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-black text-green-400 mb-6 text-center">{t.visualComparison.buds.title}</h3>
              <ul className="space-y-4 text-gray-300">
                {t.visualComparison.buds.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-yellow-600/20 to-yellow-400/20 border-2 border-yellow-500/50 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Crown className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-black text-yellow-400 mb-6 text-center">{t.visualComparison.budsPro.title}</h3>
              <ul className="space-y-4 text-gray-200">
                {t.visualComparison.budsPro.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">★</span>
                    <span dangerouslySetInnerHTML={{__html: feature}} />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl p-12">
              <img src={budsProBadge} alt={t.finalCta.altText} className="w-32 h-32 mx-auto mb-6" />
              
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6">
                {t.finalCta.title}
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                {t.finalCta.description}
              </p>
              
              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-8">
                <Lock className="w-6 h-6" />
                <span className="text-lg font-semibold">{t.finalCta.invitationOnly}</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl shadow-yellow-500/50"
              >
                {t.finalCta.buttonText}
              </Button>
              
              <p className="text-sm text-gray-500 mt-6">
                {t.finalCta.availability}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BudsProPage