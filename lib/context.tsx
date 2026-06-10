'use client'

import React, { createContext, useContext, useState } from 'react'
import { translations, Language, Translations } from './translations'

type LangContextType = {
  lang: Language
  setLang: (l: Language) => void
  t: Translations
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations['en'],
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en')
  const t = translations[lang] as Translations
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
