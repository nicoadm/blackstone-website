import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "system" | "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getSavedTheme(): Theme | null {
  const saved = localStorage.getItem("blackstone-theme")
  if (saved === "system" || saved === "light" || saved === "dark") return saved
  return null
}

function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? getSystemTheme() : theme
  document.documentElement.classList.toggle("dark", resolved === "dark")
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getSavedTheme() ?? "system"
  })

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem("blackstone-theme", t)
    applyTheme(t)
  }

  useEffect(() => {
    applyTheme(theme)
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      if (theme === "system") applyTheme("system")
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
