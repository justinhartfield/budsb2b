import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const PartnerTypeNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { language, setLanguage } = useLanguage()

  const getActiveTab = () => {
    const path = location.pathname
    if (path === '/platforms') return 'platforms'
    if (path === '/pharmacies') return 'pharmacies'
    if (path === '/manufacturers') return 'manufacturers'
    if (path === '/existing-loyalty') return 'existing'
    if (path === '/budspro') return 'budspro'
    return 'partners'
  }

  const activeTab = getActiveTab()

  const handleTabClick = (tab) => {
    if (tab === 'existing') {
      navigate('/existing-loyalty')
    } else if (tab === 'platforms') {
      navigate('/platforms')
    } else if (tab === 'pharmacies') {
      navigate('/pharmacies')
    } else if (tab === 'manufacturers') {
      navigate('/manufacturers')
    } else if (tab === 'partners') {
      navigate('/')
    }
  }

  return (
    <div className="fixed top-20 left-0 right-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-2 md:py-4">
        <div className="flex items-center justify-between flex-wrap gap-2 md:gap-4">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 md:gap-2 flex-wrap">
            <button
              onClick={() => handleTabClick('partners')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'partners'
                  ? 'bg-orange-500 text-white'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}
            >
              <div>Partners</div>
              <div className="hidden md:block text-xs font-normal">For retailers & brands</div>
            </button>
            
            <button
              onClick={() => handleTabClick('platforms')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'platforms'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              <div>Platforms</div>
              <div className="hidden md:block text-xs font-normal">For marketplaces</div>
            </button>
            
            <button
              onClick={() => handleTabClick('pharmacies')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'pharmacies'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
              }`}
            >
              <div>Pharmacies</div>
              <div className="hidden md:block text-xs font-normal">For pharmacy chains</div>
            </button>
            
            <button
              onClick={() => handleTabClick('manufacturers')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'manufacturers'
                  ? 'bg-pink-500 text-white'
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
            >
              <div>Manufacturers</div>
              <div className="hidden md:block text-xs font-normal">For pharma companies</div>
            </button>
            
            <button
              onClick={() => handleTabClick('existing')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${
                activeTab === 'existing'
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              <div>Existing Loyalty?</div>
              <div className="hidden md:block text-xs font-normal">Augment your program</div>
            </button>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base font-semibold transition-colors flex items-center gap-1 md:gap-2 ${
                language === 'en'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🇬🇧 <span className="hidden md:inline">English</span>
            </button>
            <button
              onClick={() => setLanguage('de')}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-base font-semibold transition-colors flex items-center gap-1 md:gap-2 ${
                language === 'de'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🇩🇪 <span className="hidden md:inline">Deutsch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartnerTypeNav

