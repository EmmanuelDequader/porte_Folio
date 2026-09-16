import React from 'react'
import Reveal from './Reveal'

export default function About({ t }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">
              {t.about.title}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              {t.about.subtitle}
            </h2>
          </Reveal>

          <div className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 100} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {t.about.stats.map((stat, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="text-center bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60"
            >
              <div className="text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
