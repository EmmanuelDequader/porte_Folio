import React, { useState, useEffect, useRef } from 'react'
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
import SectionTabGroup from './components/SectionTabGroup'
import FloatingControls from './components/FloatingControls'
import { translations, newsArticlesTimeline } from './data/content'

const JOURNEY_TAB_IDS = ['news', 'distinctions']
const OFFER_TAB_IDS = ['services', 'skills', 'projects']

function HomePage({ lang, t, activeSection, setActiveSection, onOpenArticle }) {
  const navigate = useNavigate()
  const location = useLocation()
  const isFirstRender = useRef(true)

  // Handle deep-link scroll target coming from another route (e.g. back from an article)
  useEffect(() => {
    const targetId = location.state && location.state.scrollTo
    if (targetId) {
      setActiveSection(targetId)
      navigate(location.pathname, { replace: true, state: {} })
    }
  }, [location, navigate, setActiveSection])

  // Single place that scrolls to the active section, always after the
  // matching tab (if any) has already switched in the same render.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const el = document.getElementById(activeSection)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [activeSection])

  const parcoursTab = JOURNEY_TAB_IDS.includes(activeSection) ? activeSection : 'news'
  const offreTab = OFFER_TAB_IDS.includes(activeSection) ? activeSection : 'services'

  return (
    <>
      <Hero lang={lang} t={t} onNavigate={setActiveSection} onOpenArticle={onOpenArticle} />

      <About t={t} />

      {/* Parcours : Actualités & Distinctions regroupées sous onglets */}
      <div className="py-4">
        <SectionTabGroup
          tabs={[
            { id: 'news', label: t.nav.news },
            { id: 'distinctions', label: t.nav.distinctions },
          ]}
          activeId={parcoursTab}
          onTabChange={setActiveSection}
        />
        <div className={parcoursTab === 'news' ? 'block' : 'hidden'}>
          <NewsSection
            articles={newsArticlesTimeline}
            lang={lang}
            t={t}
            onSelectArticle={(art) => navigate(`/actualites/${art.id}`)}
          />
        </div>
        <div className={parcoursTab === 'distinctions' ? 'block' : 'hidden'}>
          <Distinctions lang={lang} t={t} />
        </div>
      </div>

      {/* Offre : Services, Compétences & Projets regroupés sous onglets */}
      <div className="py-4">
        <SectionTabGroup
          tabs={[
            { id: 'services', label: t.nav.services },
            { id: 'skills', label: t.nav.skills },
            { id: 'projects', label: t.nav.projects },
          ]}
          activeId={offreTab}
          onTabChange={setActiveSection}
        />
        <div className={offreTab === 'services' ? 'block' : 'hidden'}>
          <ServicesSection lang={lang} t={t} />
        </div>
        <div className={offreTab === 'skills' ? 'block' : 'hidden'}>
          <Skills lang={lang} t={t} />
        </div>
        <div className={offreTab === 'projects' ? 'block' : 'hidden'}>
          <Projects lang={lang} t={t} />
        </div>
      </div>

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
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      <Header
        t={t}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isArticlePage={location.pathname !== '/'}
      />

      <FloatingControls lang={lang} setLang={setLang} isDark={isDark} setIsDark={setIsDark} t={t} />

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
