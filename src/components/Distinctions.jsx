import React from 'react'
import { distinctionsData } from '../data/content'

export default function Distinctions({ lang, t }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return (
          <svg className="w-7 h-7 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a5 5 0 100-10 5 5 0 000 10zm0 0v6m-3-2.5l-2 3M15 18.5l2 3M9.5 8.5l-2-2M14.5 8.5l2-2" />
          </svg>
        )
      case 'certificate':
        return (
          <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )
      case 'users':
        return (
          <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5a4 4 0 11-8 0 4 4 0 018 0zm6 2a4 4 0 10-4-4" />
          </svg>
        )
      case 'briefcase':
        return (
          <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5h6v2H9V5z" />
          </svg>
        )
      case 'heart':
        return (
          <svg className="w-7 h-7 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )
      default:
        return (
          <svg className="w-7 h-7 text-slate-600 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
        )
    }
  }

  return (
    <section id="distinctions" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">
            {t.distinctions.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            {t.distinctions.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.distinctions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {distinctionsData.map((item) => {
            const title = lang === 'fr' ? item.titleFr : item.titleEn
            const desc = lang === 'fr' ? item.descFr : item.descEn
            const date = lang === 'fr' ? item.dateFr : item.dateEn
            const issuer = lang === 'fr' ? item.issuerFr : item.issuerEn

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <div className="flex flex-col gap-0.5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="font-semibold">{date}</span>
                  <span>{issuer}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
