import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LanguageNotice = () => {
  const { language, setLanguage } = useLanguage()
  
  // Only show if German is selected
  if (language !== 'de') return null
  
  return (
    <div className="bg-blue-50 border-b border-blue-200 py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <p className="text-sm text-blue-900">
            <strong>Diese Seite ist derzeit nur auf Englisch verfügbar.</strong> Die Hauptseiten sind vollständig auf Deutsch verfügbar.
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setLanguage('en')}
          className="border-blue-300 text-blue-700 hover:bg-blue-100 whitespace-nowrap"
        >
          Switch to English
        </Button>
      </div>
    </div>
  )
}

export default LanguageNotice

