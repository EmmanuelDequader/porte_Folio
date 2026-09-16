import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Home,
  User,
  Newspaper,
  Award,
  FolderGit2,
  Wrench,
  Briefcase,
  Mail,
} from 'lucide-react'

export default function Header({ t, activeSection, onNavClick, isArticlePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const journeyItems = [
    { id: 'hero', label: t.nav.home, icon: Home },
    { id: 'about', label: t.nav.about, icon: User },
    { id: 'news', label: t.nav.news, icon: Newspaper },
    { id: 'distinctions', label: t.nav.distinctions, icon: Award },
  ]

  const offerItems = [
    { id: 'projects', label: t.nav.projects, icon: FolderGit2 },
    { id: 'skills', label: t.nav.skills, icon: Wrench },
    { id: 'services', label: t.nav.services, icon: Briefcase },
    { id: 'contact', label: t.nav.contact, icon: Mail },
  ]

  const navItems = [...journeyItems, ...offerItems]

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

        {/* Mobile Drawer Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 animate-slideDown">
          <p className="px-4 pt-1 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {t.nav.groupJourney}
          </p>
          <div className="space-y-1">
            {journeyItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors flex items-center gap-3 ${
                  activeSection === item.id && !isArticlePage
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <p className="px-4 pt-4 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {t.nav.groupOffer}
          </p>
          <div className="space-y-1">
            {offerItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 text-sm font-semibold rounded-xl transition-colors flex items-center gap-3 ${
                  activeSection === item.id && !isArticlePage
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
