import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { realProjects } from '../data/content'

// lucide-react no longer ships brand logos, so GitHub keeps its own inline mark.
function GithubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export default function Projects({ lang, t }) {
  const [activeCategory, setActiveCategory] = useState('Tous')

  const categories = ['Tous', 'Full-Stack', 'Java & Mobile', 'Data Science', 'Web & Design']

  const filteredProjects =
    activeCategory === 'Tous'
      ? realProjects
      : realProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.projects.subtitle}
          </p>
        </Reveal>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat === 'Tous' ? t.projects.filterAll : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => {
            const tagline = lang === 'fr' ? p.taglineFr : p.taglineEn
            const desc = lang === 'fr' ? p.descFr : p.descEn

            return (
              <Reveal
                key={p.id}
                delay={(idx % 3) * 100}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-md">
                      {p.category}
                    </span>
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                        title="GitHub"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 italic">
                    {tagline}
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tags.map((tagItem, i) => (
                      <span key={i} className="text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded-full">
                        {tagItem}
                      </span>
                    ))}
                  </div>

                  {p.githubUrl || p.demoUrl ? (
                    <div className="flex gap-2">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{t.projects.viewDemo}</span>
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>{t.projects.viewRepo}</span>
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="w-full py-2.5 bg-slate-50 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 border border-dashed border-slate-200 dark:border-slate-700">
                      <span>{t.projects.privateProject}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
