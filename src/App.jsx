import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import NewsSection from './components/NewsSection'
import ArticleView from './components/ArticleView'
import Distinctions from './components/Distinctions'
import ServicesSection from './components/ServicesSection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations, newsArticlesTimeline } from './data/content'

function HomePage({ lang, t, activeSection, setActiveSection, onOpenArticle }) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const targetId = location.state && location.state.scrollTo
    if (targetId) {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate])

  return (
    <>
      <Hero
        lang={lang}
        t={t}
        onNavigate={(section) => {
          setActiveSection(section)
          const el = document.getElementById(section)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        onOpenArticle={onOpenArticle}
      />

      <About t={t} />

      <NewsSection
        articles={newsArticlesTimeline}
        lang={lang}
        t={t}
        onSelectArticle={(art) => navigate(`/actualites/${art.id}`)}
      />

      <Distinctions lang={lang} t={t} />

      <ServicesSection lang={lang} t={t} />

      <Skills lang={lang} t={t} />

      <Projects lang={lang} t={t} />

      <Contact lang={lang} t={t} />
    </>
  )
}

function ArticlePage({ lang, t }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = newsArticlesTimeline.find((a) => a.id === id)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!article) return <Navigate to="/" replace />

  return (
    <ArticleView
      article={article}
      lang={lang}
      t={t}
      onBack={() => navigate('/')}
    />
  )
}

export default function App() {
  const [lang, setLang] = useState('fr')
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const navigate = useNavigate()
  const location = useLocation()

  const t = translations[lang]

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handleOpenMainAdviceArticle = () => {
    navigate(`/actualites/${newsArticlesTimeline[0].id}`)
  }

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      setActiveSection(sectionId)
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        t={t}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onNavClick={handleNavClick}
        isArticlePage={location.pathname !== '/'}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                lang={lang}
                t={t}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onOpenArticle={handleOpenMainAdviceArticle}
              />
            }
          />
          <Route path="/actualites/:id" element={<ArticlePage lang={lang} t={t} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer t={t} />
    </div>
  )
}
