'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations, T } from './i18n/translations'

interface LanguageContextValue {
  lang: Language
  setLang: (l: Language) => void
  t: T
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  useEffect(() => {
    const stored = localStorage.getItem('disha-lang') as Language
    if (stored && ['en', 'fr', 'de', 'lb'].includes(stored)) {
      setLangState(stored)
    }
  }, [])

  const setLang = (l: Language) => {
    setLangState(l)
    localStorage.setItem('disha-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
