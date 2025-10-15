import { useLanguage } from '../contexts/LanguageContext'
import { translations, getTranslation } from '../translations'

/**
 * Custom hook for accessing translations with error handling
 * @param {string} namespace - The translation namespace (e.g., 'common', 'budsProPage')
 * @returns {object} Translation function and language info
 */
export const useTranslation = (namespace) => {
  const { language } = useLanguage()
  
  /**
   * Get translation by key with fallback support
   * @param {string} key - Dot-notation key (e.g., 'hero.title')
   * @param {string} fallback - Fallback text if translation not found
   * @returns {string|array|object} Translated content
   */
  const t = (key, fallback = '') => {
    return getTranslation(language, namespace, key, fallback)
  }
  
  /**
   * Get array translation (helper for lists)
   * @param {string} key - Dot-notation key
   * @returns {array} Translated array or empty array
   */
  const tArray = (key) => {
    const value = getTranslation(language, namespace, key, [])
    return Array.isArray(value) ? value : []
  }
  
  /**
   * Check if a translation key exists
   * @param {string} key - Dot-notation key
   * @returns {boolean} True if translation exists
   */
  const hasTranslation = (key) => {
    try {
      const value = getTranslation(language, namespace, key, null)
      return value !== null && value !== key
    } catch {
      return false
    }
  }
  
  /**
   * Get all translations for current namespace
   * @returns {object} All translations in namespace
   */
  const getAllTranslations = () => {
    try {
      return translations[language]?.[namespace] || {}
    } catch {
      return {}
    }
  }
  
  return {
    t,
    tArray,
    hasTranslation,
    getAllTranslations,
    language,
    isGerman: language === 'de',
    isEnglish: language === 'en'
  }
}

