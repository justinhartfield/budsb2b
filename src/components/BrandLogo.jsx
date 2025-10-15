import cookiesLogo from '../assets/brand-cookies.jpg'
import vibesLogo from '../assets/brand-vibes.png'
import weedmapsLogo from '../assets/brand-weedmaps.jpg'

const brandLogos = {
  cookies: cookiesLogo,
  vibes: vibesLogo,
  weedmaps: weedmapsLogo
}

const BrandLogo = ({ brand, size = 'md', showTM = true, className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  }

  const brandNames = {
    cookies: 'Cookies',
    vibes: 'VIBES',
    weedmaps: 'WeedMaps'
  }

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      <img 
        src={brandLogos[brand]} 
        alt={`${brandNames[brand]} logo`}
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
      {showTM && (
        <span className="text-xs text-gray-400 align-super">™</span>
      )}
    </div>
  )
}

export default BrandLogo

