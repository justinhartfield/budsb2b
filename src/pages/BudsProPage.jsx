import { motion } from 'framer-motion'
import { Crown, Zap, Calendar, Users, Sparkles, Star, Trophy, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import budsProBadge from '../assets/budspro-badge.png'
import rewardsIcon from '../assets/rewards-icon.png'

const BudsProPage = () => {
  const benefits = [
    {
      icon: Zap,
      title: '1.5x Points Multiplier',
      description: 'Earn rewards 50% faster on every purchase across the Buds network',
      tier: 'Beta'
    },
    {
      icon: Calendar,
      title: 'Birthday Gift',
      description: 'Celebrate your special day with an exclusive reward from us',
      tier: 'Beta'
    },
    {
      icon: Star,
      title: 'Early Access to Drops',
      description: 'Be the first to purchase new and limited-edition products before anyone else',
      tier: 'Beta'
    },
    {
      icon: Sparkles,
      title: 'Exclusive Content',
      description: 'Access premium content, guides, and special partner offers',
      tier: 'Beta'
    },
    {
      icon: Crown,
      title: 'Digital Pro Badge',
      description: 'Show your status with an exclusive BudsPro badge in your profile',
      tier: 'Beta'
    },
    {
      icon: Users,
      title: 'VIP Community Access',
      description: 'Join a private community of cannabis connoisseurs and industry insiders',
      tier: 'Coming Soon'
    },
    {
      icon: Trophy,
      title: 'Exclusive Events',
      description: 'Invitations to private parties, grow tours, and industry events',
      tier: 'Coming Soon'
    },
    {
      icon: Lock,
      title: 'Concierge Service',
      description: 'Personalized recommendations and priority customer support',
      tier: 'Coming Soon'
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
              Go Pro. Get Closer.
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              The insider's tier for true cannabis connoisseurs. More than just points—it's access to the heart of cannabis culture.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl shadow-yellow-500/50"
              >
                Join BudsPro
              </Button>
              <p className="text-gray-400">
                $99/year or qualify with $1,000+ annual spend
              </p>
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
                You're not a casual fan. You're a connoisseur. BudsPro recognizes your dedication with accelerated rewards, exclusive access, and a premium experience tailored to your passion.
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
            <h2 className="text-5xl font-black text-white mb-4">Pro Benefits</h2>
            <p className="text-xl text-gray-400">Unlock exclusive perks designed for dedicated members</p>
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
                  <p className="text-gray-400 mb-4">{benefit.description}</p>
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    benefit.tier === 'Beta' 
                      ? 'bg-yellow-500/20 text-yellow-400' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {benefit.tier}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-black text-white mb-4">How to Qualify</h2>
            <p className="text-xl text-gray-400">Two pathways to Pro status</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-900/30 to-black border border-yellow-500/30 rounded-3xl p-10 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-black text-yellow-400 mb-4">Earn Your Status</h3>
              <p className="text-2xl text-white font-bold mb-2">$1,000+</p>
              <p className="text-gray-400">Annual spend across the Buds network</p>
              <p className="text-sm text-gray-500 mt-4">Automatic invitation when you reach the threshold</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-900/30 to-black border border-yellow-500/30 rounded-3xl p-10 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-3xl font-black text-yellow-400 mb-4">Instant Access</h3>
              <p className="text-2xl text-white font-bold mb-2">$99/year</p>
              <p className="text-gray-400">Immediate Pro benefits and status</p>
              <p className="text-sm text-gray-500 mt-4">Perfect for dedicated enthusiasts</p>
            </motion.div>
          </div>
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
                  <span>1x points on all purchases</span>
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
                  <span><strong>1.5x points</strong> on all purchases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Early access</strong> to limited drops</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Exclusive content</strong> and offers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Birthday gift</strong> and Pro badge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>VIP community</strong> access (coming soon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400 mt-1">★</span>
                  <span><strong>Exclusive events</strong> (coming soon)</span>
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
                Ready to Go Pro?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Join the inner circle of cannabis connoisseurs. Elevate your experience with BudsPro.
              </p>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black text-xl px-12 py-6 rounded-full font-bold shadow-2xl shadow-yellow-500/50"
              >
                Become a BudsPro Member
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

