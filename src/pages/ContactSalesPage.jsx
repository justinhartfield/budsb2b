import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const ContactSalesPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    monthlyOrders: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-black text-gray-900 mb-4">Contact Sales</h1>
            <p className="text-lg text-gray-600">Tell us a bit about your business and well reach out shortly.</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" required value={formData.company} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">Website</label>
                    <input id="website" name="website" type="url" placeholder="https://" value={formData.website} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="monthlyOrders">Monthly orders</label>
                  <select id="monthlyOrders" name="monthlyOrders" required value={formData.monthlyOrders} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">Choose</option>
                    <option value="<1k">Under 1,000</option>
                    <option value="1k-10k">1,000  10,000</option>
                    <option value=">10k">Over 10,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Share goals, timelines, or questions" />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">By submitting, you agree to be contacted about Buds membership.</p>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Submit</Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-16">
                <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3 }}>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Thanks! Well be in touch</h2>
                  <p className="text-gray-600">Our team will reach out to {formData.email || 'your email'} within 1 2 business days.</p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSalesPage


