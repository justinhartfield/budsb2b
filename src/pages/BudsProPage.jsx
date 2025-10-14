import { motion } from 'framer-motion'
import { Crown, Zap, Calendar, CreditCard, Tag, Sticker, Gift, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import budsProBadge from '../assets/budspro-badge.png'

const BudsProPage = () => {
  const benefits = [
    {
      icon: Calendar,
      title: 'Backdated Buds',
      description: 'Get credit for all your past purchases - your loyalty history counts from day one'
    },
    {
      icon: Zap,
      title: '+1 Perks',
      description: 'Unlock an additional perk tier with exclusive benefits beyond standard rewards'
    },
    {
      icon: ArrowRight,
      title: 'Early Access',
      description: 'Be the first to purchase new and limited-edition products before anyone else'
    },
    {
      icon: CreditCard,
      title: 'Unique NFC Card',
      description: 'Exclusive black card with NFC technology - tap to collect your Buds in style'
    },
    {
      icon: Tag,
      title: 'Preferential Prices',
      description: 'Access member-only pricing and special discounts across the network'
    },
    {
      icon: Sticker,
      title: 'Sticker Packs and Emojis',
      description: 'Exclusive BudsPro digital stickers and custom emojis for your profile'
    },
    {
      icon: Gift,
      title: 'Pro Rewards',
      description: 'Access to exclusive Pro-tier rewards not available to standard members'
    },
    {
      icon: Lock,
      title: 'Invite Only Experiences',
      description: 'Private events, grow tours, and VIP experiences reserved for Pro members only'
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
              <img src={budsProBadge} alt="BudsPro" className="w-48 h-48 mx-auto" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                BUDSPRO
              </span>
            </h1>
            
            <p className="text-3xl text-gray-300 mb-4 font-light">
              Invite Only. Elevated Experience.
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              The insider's tier for true cannabis connoisseurs. More than just points—it's access to the heart of cannabis culture.
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
                  Invitation Required
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
              <h2 className="text-4xl font-black text-yellow-400 mb-4">Your Loyalty, Elevated.</h2>
              <p className="text-xl text-gray-300">
                You're not a casual fan. You're a connoisseur. BudsPro recognizes your dedication with exclusive access, premium perks, and experiences tailored to your passion.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-8 text-left">
              <h2 className="text-4xl font-black text-yellow-400 mb-4">Join the Inner Circle.</h2>
              <p className="text-xl text-gray-300">
                This is your invitation to join a curated community of cannabis experts and enthusiasts. Connect with the culture, share your knowledge, and enjoy the status you've earned.
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
            <h2 className="text-5xl font-black text-white mb-4">Pro Experience</h2>
            <p className="text-xl text-gray-400">Exclusive perks designed for our most dedicated members</p>
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
            <h2 className="text-5xl font-black text-white mb-4">How to Receive an Invitation</h2>
            <p className="text-xl text-gray-400">BudsPro is invite-only. Here's how you can earn your place.</p>
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
              <h3 className="text-2xl font-black text-yellow-400 mb-4">Top Spenders</h3>
              <p className="text-gray-400">Reach $1,000+ in annual purchases across the Buds network</p>
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
              <h3 className="text-2xl font-black text-yellow-400 mb-4">Community Leaders</h3>
              <p className="text-gray-400">Active engagement and contributions to the Buds community</p>
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
              <h3 className="text-2xl font-black text-yellow-400 mb-4">Partner Referrals</h3>
              <p className="text-gray-400">Exclusive nominations from our partner dispensaries and brands</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              Invitations are sent quarterly to qualifying members. Keep building your Buds balance and engaging with the community to increase your chances.
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
            <h2 className="text-5xl font-black text-white mb-4">Buds vs BudsPro</h2>
            <p className="text-xl text-gray-400">See what makes Pro different</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600/20 to-cyan-600/20 border border-green-500/30 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-black text-green-400 mb-6 text-center">Buds</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Standard points on all purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Access to rewards catalog</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Home dispensary double points</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Free to join</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Standard NFC card</span>
                </li>
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
              <h3 className="text-3xl font-black text-yellow-400 mb-6 text-center">BudsPro</h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Backdated Buds</strong> - credit for past purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>+1 Perks</strong> - additional benefit tier</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Early access</strong> to limited drops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Unique NFC card</strong> - exclusive black card</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Preferential prices</strong> - member discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Sticker packs & emojis</strong> - exclusive digital content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Pro Rewards</strong> - exclusive tier rewards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Invite only experiences</strong> - VIP events</span>
                </li>
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
              <img src={budsProBadge} alt="BudsPro Badge" className="w-32 h-32 mx-auto mb-6" />
              
              <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6">
                Earn Your Invitation
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                BudsPro is reserved for our most dedicated members. Build your Buds balance, engage with the community, and watch for your exclusive invitation.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-yellow-400 mb-8">
                <Lock className="w-6 h-6" />
                <span className="text-lg font-semibold">Invitation Only</span>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl shadow-yellow-500/50"
              >
                Start Earning Buds Today
              </Button>
              
              <p className="text-sm text-gray-500 mt-6">
                Available at launch • Summer 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BudsProPage

