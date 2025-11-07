import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Gift, 
  DollarSign,
  Calendar,
  MapPin,
  Award,
  ArrowUp,
  ArrowDown,
  Download,
  Filter,
  Search,
  LogOut,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import budsLogo from '../assets/buds-logo-new.png'

const PartnerDashboardPage = () => {
  const navigate = useNavigate()
  const [timeRange, setTimeRange] = useState('30d')

  const stats = [
    {
      icon: Users,
      label: 'Active Customers',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingCart,
      label: 'Total Purchases',
      value: '€142,580',
      change: '+8.2%',
      trend: 'up',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gift,
      label: 'Rewards Redeemed',
      value: '1,234',
      change: '+15.7%',
      trend: 'up',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      label: 'Avg. Customer Value',
      value: '€50.08',
      change: '-2.3%',
      trend: 'down',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const topProducts = [
    { name: 'Blue Dream 3.5g', purchases: 456, revenue: '€18,240', trend: 'up' },
    { name: 'Sour Diesel Pre-Roll', purchases: 389, revenue: '€11,670', trend: 'up' },
    { name: 'Hybrid Gummies 10pk', purchases: 312, revenue: '€9,360', trend: 'down' },
    { name: 'OG Kush 7g', purchases: 278, revenue: '€13,904', trend: 'up' },
    { name: 'CBD Tincture 1000mg', purchases: 245, revenue: '€12,250', trend: 'up' }
  ]

  const topRedemptions = [
    { reward: 'Free Pre-Roll', count: 234, cost: '500 Buds' },
    { reward: '$10 Off Purchase', count: 189, cost: '1000 Buds' },
    { reward: 'Limited Edition Merch', count: 145, cost: '2500 Buds' },
    { reward: 'VIP Event Ticket', count: 67, cost: '5000 Buds' },
    { reward: 'Grow Tour Experience', count: 23, cost: '10000 Buds' }
  ]

  const customerDemographics = [
    { age: '18-24', percentage: 18, count: 512 },
    { age: '25-34', percentage: 42, count: 1196 },
    { age: '35-44', percentage: 25, count: 712 },
    { age: '45-54', percentage: 10, count: 285 },
    { age: '55+', percentage: 5, count: 142 }
  ]

  const recentActivity = [
    { customer: 'Sarah M.', action: 'Redeemed', item: 'Free Pre-Roll', time: '2 min ago' },
    { customer: 'Mike T.', action: 'Purchased', item: 'Blue Dream 3.5g', time: '5 min ago' },
    { customer: 'Jessica L.', action: 'Earned', item: '50 Buds', time: '12 min ago' },
    { customer: 'David R.', action: 'Redeemed', item: '$10 Off Purchase', time: '18 min ago' },
    { customer: 'Emma K.', action: 'Purchased', item: 'Sour Diesel Pre-Roll', time: '23 min ago' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-xl border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={budsLogo} alt="Buds" className="h-10 w-auto" />
            <div className="h-8 w-px bg-gray-700" />
            <div>
              <h1 className="text-xl font-bold text-white">Green Valley Dispensary</h1>
              <p className="text-sm text-gray-400">Partner Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>

            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>

            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Purchase Trends Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-green-400" />
                Purchase Trends
              </h2>
              <Button variant="ghost" size="sm" className="text-gray-400">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 'Mon', amount: 85 },
                { day: 'Tue', amount: 92 },
                { day: 'Wed', amount: 78 },
                { day: 'Thu', amount: 95 },
                { day: 'Fri', amount: 100 },
                { day: 'Sat', amount: 88 },
                { day: 'Sun', amount: 70 }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-gray-400 w-12 text-sm">{item.day}</span>
                  <div className="flex-1 bg-gray-950 rounded-full h-8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.amount}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-end pr-3"
                    >
                      <span className="text-white text-xs font-bold">€{(item.amount * 200).toLocaleString()}</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Customer Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <PieChart className="w-6 h-6 text-purple-400" />
                Customer Demographics
              </h2>
            </div>
            
            <div className="space-y-4">
              {customerDemographics.map((demo, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">{demo.age}</span>
                    <span className="text-gray-400 text-sm">{demo.count} customers</span>
                  </div>
                  <div className="bg-gray-950 rounded-full h-6 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${demo.percentage}%` }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{demo.percentage}%</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Top Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-green-400" />
              Top Products
            </h2>
            
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-950 rounded-xl hover:bg-gray-900 transition-colors">
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{product.name}</p>
                    <p className="text-gray-400 text-xs">{product.purchases} purchases</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{product.revenue}</p>
                    <div className={`flex items-center gap-1 text-xs ${
                      product.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {product.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Redemptions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Gift className="w-6 h-6 text-purple-400" />
              Top Redemptions
            </h2>
            
            <div className="space-y-4">
              {topRedemptions.map((redemption, index) => (
                <div key={index} className="p-3 bg-gray-950 rounded-xl hover:bg-gray-900 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white font-semibold text-sm">{redemption.reward}</p>
                    <span className="text-purple-400 font-bold text-sm">{redemption.count}</span>
                  </div>
                  <p className="text-gray-400 text-xs">{redemption.cost}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-cyan-400" />
              Recent Activity
            </h2>
            
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-950 rounded-xl hover:bg-gray-900 transition-colors">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      <span className="font-semibold">{activity.customer}</span> {activity.action.toLowerCase()}
                    </p>
                    <p className="text-gray-400 text-xs">{activity.item}</p>
                  </div>
                  <span className="text-gray-500 text-xs whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Customer Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-400" />
              Customer Insights
            </h2>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  className="pl-10 pr-4 py-2 bg-gray-950 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-green-500"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Customer</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Total Purchases</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Buds Balance</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Last Visit</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold text-sm">Tier</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Sarah Martinez', purchases: '€2,450', buds: '3,240', lastVisit: 'Today', tier: 'Enterprise' },
                  { name: 'Mike Thompson', purchases: '€1,890', buds: '2,150', lastVisit: '2 days ago', tier: 'Basic' },
                  { name: 'Jessica Lee', purchases: '€3,120', buds: '4,680', lastVisit: 'Today', tier: 'Enterprise' },
                  { name: 'David Rodriguez', purchases: '€980', buds: '890', lastVisit: '1 week ago', tier: 'Growth' },
                  { name: 'Emma Kim', purchases: '€1,560', buds: '1,920', lastVisit: '3 days ago', tier: 'Growth' }
                ].map((customer, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                    <td className="py-3 px-4 text-white font-semibold">{customer.name}</td>
                    <td className="py-3 px-4 text-green-400">{customer.purchases}</td>
                    <td className="py-3 px-4 text-white">{customer.buds}</td>
                    <td className="py-3 px-4 text-gray-400">{customer.lastVisit}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
customer.tier === 'Enterprise' 
                           ? 'bg-yellow-500/20 text-yellow-400' 
                           : (customer.tier === 'Growth' ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-700 text-gray-300')
                      }`}>
                        {customer.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PartnerDashboardPage

