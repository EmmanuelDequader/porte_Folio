import React, { useState } from 'react'
import Reveal from './Reveal'

export default function NewsSection({ articles, lang, t, onSelectArticle }) {
  const [showAll, setShowAll] = useState(false)

  if (!articles || articles.length === 0) return null

  const visibleArticles = showAll ? articles : articles.slice(0, 3)

  return (
    <section id="news" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12" as="div">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3.5 py-1.5 rounded-full">
              {t.news.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4">
              {t.news.title}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mt-4 md:mt-0 text-sm md:text-base">
            {t.news.subtitle}
          </p>
        </Reveal>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((art, idx) => {
            const title = lang === 'fr' ? art.titleFr : art.titleEn
            const lead = lang === 'fr' ? art.leadFr : art.leadEn
            const category = lang === 'fr' ? art.categoryFr : art.categoryEn
            const date = lang === 'fr' ? art.dateFr : art.dateEn
            const readTime = lang === 'fr' ? art.readTimeFr : art.readTimeEn

            return (
              <Reveal key={art.id} delay={(idx % 3) * 100} className="h-full">
              <article
                onClick={() => onSelectArticle(art)}
                className="h-full group bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Hero Banner with Year Badge */}
                  {art.heroImage && (
                    <div className="h-48 relative overflow-hidden bg-slate-900">
                      <img
                        src={art.heroImage}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-lg shadow-md">
                          {art.year}
                        </span>
                        <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold rounded-lg">
                          {category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span>{date}</span>
                      <span>•</span>
                      <span>{readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-snug">
                      {title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 line-clamp-3 text-sm leading-relaxed mb-4">
                      {lead}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-slate-700/40">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 text-white font-bold text-[10px] flex items-center justify-center">
                      ED
                    </div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {art.author}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectArticle(art)
                    }}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5 group-hover:translate-x-1"
                  >
                    <span>{t.news.readMore}</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>
              </Reveal>
            )
          })}
        </div>

        {!showAll && articles.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {t.news.showMore}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
