import React from 'react'
import { skillGroups } from '../data/content'

export default function Skills({ lang, t }) {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">
            {t.skills.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            {t.skills.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => {
            const category = lang === 'fr' ? group.categoryFr : group.categoryEn

            return (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/60 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-700/60">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-800 dark:text-slate-200 font-medium text-sm md:text-base">
                        {item.name}
                      </span>
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-2.5 py-1 rounded-md">
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
