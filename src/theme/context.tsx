import { createContext, useContext, useEffect, type ReactNode } from "react"

const ThemeContext = createContext<null>(null)

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme() {
  const resolved = getSystemTheme()
  document.documentElement.classList.toggle("dark", resolved === "dark")
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    applyTheme()
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => applyTheme()
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <ThemeContext.Provider value={null}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  useContext(ThemeContext)
}
