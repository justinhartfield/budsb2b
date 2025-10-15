import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export const useTranslation = (page) => {
  const { language } = useLanguage()
  
  const t = (key) => {
    if (!page) return key
    
    const keys = key.split('.')
    let value = translations[page]?.[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }
  
  const tArray = (key) => {
    const keys = key.split('.')
    let value = translations[page]?.[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return Array.isArray(value) ? value : []
  }
  
  return { t, tArray, language }
}

