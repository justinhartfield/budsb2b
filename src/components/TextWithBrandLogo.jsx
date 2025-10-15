import React from 'react'
import BrandLogo from './BrandLogo'

const TextWithBrandLogo = ({ text, brand = 'vibes', logoSize = 'xs', className = '' }) => {
  // Replace brand name placeholders with actual logos
  const parts = text.split(/(\[VIBES\]|\[COOKIES\]|\[WEEDMAPS\])/g)
  
  return (
    <span className={`inline-flex items-center flex-wrap gap-1 ${className}`}>
      {parts.map((part, index) => {
        if (part === '[VIBES]') {
          return <BrandLogo key={index} brand="vibes" size={logoSize} className="inline-block" />
        } else if (part === '[COOKIES]') {
          return <BrandLogo key={index} brand="cookies" size={logoSize} className="inline-block" />
        } else if (part === '[WEEDMAPS]') {
          return <BrandLogo key={index} brand="weedmaps" size={logoSize} className="inline-block" />
        }
        return <span key={index}>{part}</span>
      })}
    </span>
  )
}

export default TextWithBrandLogo

