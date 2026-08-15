import React, { useState, useEffect } from 'react'

export default function Header({
  lang,
  setLang,
  isDark,
  setIsDark,
  t,
  activeSection,
  onNavClick,
  isArticlePage,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'news', label: t.nav.news },
    { id: 'distinctions', label: t.nav.distinctions },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ]

  const handleNavClick = (id) => {
    setMobileMenuOpen(false)
    onNavClick(id)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg py-2.5'
          : 'bg-white dark:bg-slate-950 py-3.5 border-b border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Brand Logo / Name */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 text-white font-extrabold text-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            ED
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-slate-900 dark:text-white uppercase block leading-none">
              DEQUADER
            </span>
            <span className="text-[10px] tracking-widest text-slate-500 dark:text-slate-400 font-semibold uppercase">
              Full-Stack & Marketing
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1.5 rounded-full border border-slate-200 dark:border-slate-800"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeSection === item.id && !isArticlePage
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Toggle */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            aria-label="Changer la langue / Switch language"
            title="Changer de langue (FR / EN)"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span>{lang === 'fr' ? '🇫🇷 FR | EN' : '🇬🇧 EN | FR'}</span>
          </button>

          {/* Explicit Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
            aria-label="Basculer le thème"
            title="Changer le mode d'affichage"
          >
            {isDark ? (
              <>
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>{t.nav.themeLight}</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>{t.nav.themeDark}</span>
              </>
            )}
          </button>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 animate-slideDown">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                activeSection === item.id && !isArticlePage
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
