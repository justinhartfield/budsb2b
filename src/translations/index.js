// Central translation export
import { common as commonEn } from './en/common'
import { budsProPage as budsProPageEn } from './en/budsProPage'

import { common as commonDe } from './de/common'
import { budsProPage as budsProPageDe } from './de/budsProPage'

export const translations = {
  en: {
    common: commonEn,
    budsProPage: budsProPageEn
  },
  de: {
    common: commonDe,
    budsProPage: budsProPageDe
  }
}

// Helper to get translation with fallback
export const getTranslation = (language, namespace, key, fallback = '') => {
  try {
    const keys = key.split('.')
    let value = translations[language]?.[namespace]
    
    for (const k of keys) {
      if (value === undefined) return fallback || key
      value = value[k]
    }
    
    return value !== undefined ? value : (fallback || key)
  } catch (error) {
    console.warn(`Translation missing: ${language}.${namespace}.${key}`)
    return fallback || key
  }
}

