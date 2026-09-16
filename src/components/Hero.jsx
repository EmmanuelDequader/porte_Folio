import React from 'react'
import Reveal from './Reveal'
import { profileData } from '../data/content'

export default function Hero({ lang, t, onNavigate, onOpenArticle }) {
  const title = lang === 'fr' ? profileData.titleFr : profileData.titleEn

  return (
    <section id="hero" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Column */}
          {/* pr-14 on mobile keeps content clear of the fixed lang/theme buttons at bottom-right */}
          <div className="lg:w-7/12 text-center lg:text-left pr-14 lg:pr-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t.hero.status}</span>
            </div>

            <Reveal as="h1" className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              {t.hero.greeting}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                {profileData.name}
              </span>
            </Reveal>

            <Reveal as="h2" delay={120} className="text-lg md:text-xl font-bold text-slate-700 dark:text-slate-300 mb-6">
              {title}
            </Reveal>

            <Reveal as="p" delay={240} className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {t.hero.tagline}
            </Reveal>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
              >
                <span>{t.hero.ctaProjects}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={onOpenArticle}
                className="px-6 py-3.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-800 dark:border-slate-700 shadow-md transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{t.hero.ctaAdvice}</span>
              </button>

              <a
                href={profileData.cvUrl}
                download="cv-dequader.pdf"
                className="px-5 py-3.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold rounded-xl border border-slate-300 dark:border-slate-700 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{t.hero.ctaCv}</span>
              </a>
            </div>
          </div>

          {/* Profile Card Column */}
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative w-72 sm:w-80 h-96 rounded-3xl p-4 bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-slate-900 overflow-hidden relative group">
                <img
                  src="/photo-emmanuel.jpg"
                  alt="Emmanuel Junior TJADE II"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-end text-white">
                  <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider mb-1">
                    Emmanuel Junior TJADE II (Dequader)
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    Dschang, Cameroun
                  </div>
                  <div className="mt-3 flex gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full">Software Engineering</span>
                    <span className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full">Full-Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
