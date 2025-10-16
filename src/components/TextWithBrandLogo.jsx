import React from 'react'
import BrandLogo from './BrandLogo'

const TextWithBrandLogo = ({ text, brand = 'vibes', logoSize = 'xs', className = '' }) => {
  // Replace brand name placeholders with actual logos
  const parts = text.split(/(\[VIBES\]|\[COOKIES\]|\[WEEDMAPS\])/g)
  
  return (
    <span className={className} style={{ display: 'inline' }}>
      {parts.map((part, index) => {
        if (part === '[VIBES]') {
          return <BrandLogo key={index} brand="vibes" size={logoSize} inline={true} />
        } else if (part === '[COOKIES]') {
          return <BrandLogo key={index} brand="cookies" size={logoSize} inline={true} />
        } else if (part === '[WEEDMAPS]') {
          return <BrandLogo key={index} brand="weedmaps" size={logoSize} inline={true} />
        }
        return <span key={index} style={{ display: 'inline' }}>{part}</span>
      })}
    </span>
  )
}

export default TextWithBrandLogo

