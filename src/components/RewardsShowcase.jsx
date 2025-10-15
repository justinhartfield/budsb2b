import { motion } from 'framer-motion'
import rewardSuitcase from '../assets/reward-suitcase.png'
import rewardTicket from '../assets/reward-ticket.png'
import rewardTshirt from '../assets/reward-tshirt.png'
import rewardVape from '../assets/reward-vape.png'
import rewardBasketball from '../assets/reward-basketball.png'
import rewardBox from '../assets/reward-box.png'

const rewards = [
  { image: rewardSuitcase, name: 'Travel & Experiences', delay: 0 },
  { image: rewardTicket, name: 'Event Tickets', delay: 0.1 },
  { image: rewardTshirt, name: 'Premium Merchandise', delay: 0.2 },
  { image: rewardVape, name: 'Cannabis Products', delay: 0.3 },
  { image: rewardBasketball, name: 'Sports & Recreation', delay: 0.4 },
  { image: rewardBox, name: 'Mystery Rewards', delay: 0.5 }
]

const RewardsShowcase = ({ title = "Reward Variety", subtitle = "From travel to merchandise, cannabis products to experiences", compact = false }) => {
  return (
    <div className={compact ? "py-12" : "py-20"}>
      <div className="text-center mb-12">
        <h3 className={`font-black text-gray-900 mb-2 ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
          {title}
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className={`grid ${compact ? 'grid-cols-3 md:grid-cols-6 gap-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'} max-w-7xl mx-auto`}>
        {rewards.map((reward, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reward.delay }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group"
          >
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl ${compact ? 'p-4' : 'p-6'} border-2 border-gray-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:shadow-green-100`}>
              <div className="aspect-square flex items-center justify-center mb-3">
                <img 
                  src={reward.image} 
                  alt={reward.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {!compact && (
                <p className="text-center text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                  {reward.name}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RewardsShowcase

