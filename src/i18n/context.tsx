import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

function getSystemLocale(): Locale {
  const lang = navigator.language.toLowerCase()
  if (lang.startsWith("es")) return "es"
  return "en"
}

function getSavedLocale(): Locale | null {
  const saved = localStorage.getItem("blackstone-locale")
  if (saved === "en" || saved === "es") return saved
  return null
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    return getSavedLocale() ?? getSystemLocale()
  })

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("blackstone-locale", l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}
