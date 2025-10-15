import { motion } from 'framer-motion'
import { Crown, Zap, Calendar, CreditCard, Tag, Sticker, Gift, Lock, TrendingUp, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import budsProBadge from '../assets/budspro-badge.png'
import { useTranslation } from '../hooks/useTranslation'
import VideoBackground from '@/components/VideoBackground'

const BudsProPage = () => {
  const { t, tArray } = useTranslation('budsProPage')
  
  const iconMap = {
    0: Calendar,
    1: Zap,
    2: Lock,
    3: CreditCard,
    4: Tag,
    5: Sticker,
    6: Gift,
    7: Lock
  }
  
  const pathwayIcons = {
    0: TrendingUp,
    1: Users,
    2: Star
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <VideoBackground opacity={0.15} />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-black/50 to-black/70" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {t('hero.badge', 'Invitation Required')}
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img src={budsProBadge} alt="BudsPro" className="w-48 h-48 mx-auto" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                {t('hero.title', 'BUDSPRO')}
              </span>
            </h1>
            
            <p className="text-3xl text-gray-300 mb-4 font-light">
              {t('hero.subtitle', 'Go Pro. Get Closer.')}
            </p>
            
            <p className="text-xl text-yellow-400 mb-8 font-semibold">
              {t('hero.tagline', 'Your Loyalty, Elevated.')}
            </p>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description', 'Buds Pro is our invitation-only premium tier for true cannabis connoisseurs. Unlock exclusive perks, early access, and VIP experiences.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              {t('perks.title', 'What Buds Pro includes')}
            </h2>
            <p className="text-gray-400 text-lg">
              {t('perks.subtitle', 'Eight exclusive benefits for our most dedicated members')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tArray('perks.items').map((perk, index) => {
              const Icon = iconMap[index] || Gift
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{perk.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Get Invited Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              {t('invitation.title', 'How to get invited')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('invitation.subtitle', "Buds Pro is earned, not purchased. Here's how to receive an invitation:")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tArray('invitation.pathways').map((pathway, index) => {
              const Icon = pathwayIcons[index] || Star
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{pathway.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pathway.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Exclusive Community Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            {t('exclusive.title', 'Join the inner circle')}
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            {t('exclusive.subtitle', 'Buds Pro members are part of an exclusive community of cannabis enthusiasts')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {tArray('exclusive.features').map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-gray-800/50 p-4 rounded-lg border border-yellow-500/10"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-900/20 via-black to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            {t('cta.title', 'Interested in Buds Pro?')}
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {t('cta.subtitle', 'Stay engaged with Buds and our partners. Invitations are sent monthly to qualifying members.')}
          </p>
          
          <Link to="/">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-6 text-lg rounded-lg font-bold">
              {t('cta.button', 'Back to Buds')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BudsProPage

