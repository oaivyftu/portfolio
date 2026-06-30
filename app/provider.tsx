"use client"

import * as React from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  resolvedTheme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

const storageKey = "theme"

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  document.documentElement.style.colorScheme = theme
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
}) {
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>(defaultTheme)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey)
    const initialTheme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : defaultTheme

    setResolvedTheme(initialTheme)
    applyTheme(initialTheme)
  }, [defaultTheme])

  const setTheme = React.useCallback((theme: Theme) => {
    localStorage.setItem(storageKey, theme)
    setResolvedTheme(theme)
    applyTheme(theme)
  }, [])

  return (
    <ThemeContext.Provider value={{resolvedTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
