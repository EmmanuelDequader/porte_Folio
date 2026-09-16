import React from 'react'
import { Sun, Moon, Languages } from 'lucide-react'

export default function FloatingControls({ lang, setLang, isDark, setIsDark, t }) {
  return (
    <div className="fixed bottom-5 right-4 sm:right-5 z-50 flex flex-col items-center gap-3">
      <button
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950/90 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-900/10 backdrop-blur-md transition-all hover:scale-105 shrink-0"
        aria-label="Changer la langue / Switch language"
        title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
      >
        <Languages className="w-5 h-5" />
        <span className="absolute -bottom-1 -right-1 text-[9px] font-black leading-none bg-blue-600 text-white rounded-full px-1.5 py-0.5 shadow">
          {lang.toUpperCase()}
        </span>
      </button>

      <button
        onClick={() => setIsDark(!isDark)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur-md transition-all hover:scale-105 shrink-0"
        aria-label="Basculer le thème"
        title={isDark ? t.nav.themeLight : t.nav.themeDark}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </button>
    </div>
  )
}
