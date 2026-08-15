import React, { useState } from 'react'
import ImageLightbox from './ImageLightbox'

export default function ArticleView({ article, lang, t, onBack }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [linkCopied, setLinkCopied] = useState(false)

  if (!article) return null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  const title = lang === 'fr' ? article.titleFr : article.titleEn
  const lead = lang === 'fr' ? article.leadFr : article.leadEn
  const category = lang === 'fr' ? article.categoryFr : article.categoryEn
  const date = lang === 'fr' ? article.dateFr : article.dateEn
  const readTime = lang === 'fr' ? article.readTimeFr : article.readTimeEn
  const content = lang === 'fr' ? article.contentFr : article.contentEn
  const heroCaption = lang === 'fr' ? article.heroCaptionFr : article.heroCaptionEn

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-12 animate-fadeIn">
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate-500 dark:text-slate-400 font-sans flex flex-wrap items-center justify-between gap-3">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <button
              onClick={onBack}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {t.nav.home}
            </button>
          </li>
          <li>/</li>
          <li>
            <button
              onClick={onBack}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {t.nav.news}
            </button>
          </li>
          <li>/</li>
          <li className="text-slate-900 dark:text-slate-100 font-bold truncate max-w-[200px] md:max-w-md">
            {title}
          </li>
        </ol>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-all shrink-0"
        >
          {linkCopied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t.news.linkCopied}</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" />
              </svg>
              <span>{t.news.copyLink}</span>
            </>
          )}
        </button>
      </nav>

      {/* Article Header */}
      <header className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-8 font-sans">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-black rounded-lg shadow-sm">
            {article.year}
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{date}</span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-serif leading-relaxed mb-6">
          {lead}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
            ED
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">{article.author}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{t.news.authorTitle}</div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      {article.heroImage && (
        <figure className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-900">
          <img
            src={article.heroImage}
            alt={title}
            className="w-full h-[320px] md:h-[450px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => setSelectedImage({ url: article.heroImage, caption: heroCaption, alt: title })}
          />
          {heroCaption && (
            <figcaption className="p-3 bg-slate-950 text-xs text-center text-slate-400 italic font-sans">
              {heroCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Article Body */}
      <div className="space-y-8 font-serif text-slate-800 dark:text-slate-200 text-base md:text-lg leading-relaxed">
        {/* Why Note Section */}
        {content.whyNote && (
          <section className="bg-slate-50 dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 font-sans">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Context & Vision
            </h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
              {content.whyNote}
            </p>
          </section>
        )}

        {/* Central Idea */}
        {content.centralIdea && (
          <section className="my-8 font-sans">
            <blockquote className="p-6 bg-blue-50/80 dark:bg-blue-950/40 border-l-4 border-blue-600 rounded-r-2xl text-slate-800 dark:text-blue-100 text-lg leading-relaxed shadow-sm">
              <strong className="block text-blue-900 dark:text-blue-300 font-bold mb-2 uppercase text-xs tracking-wider">
                Core Principle
              </strong>
              {content.centralIdea}
            </blockquote>
          </section>
        )}

        {/* Principles Table */}
        {content.principlesTable && content.principlesTable.length > 0 && (
          <section className="my-10 font-sans">
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-4 w-1/3">Principle</th>
                    <th className="p-4 w-2/3">Practical Meaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  {content.principlesTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                      <td className="p-4 font-semibold text-blue-600 dark:text-blue-400">{row.principle}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Detailed Sections */}
        {content.sections && (
          <div className="space-y-6 font-sans">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="border-l-2 border-slate-300 dark:border-slate-700 pl-4 md:pl-6 py-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {sec.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Checklist */}
        {content.checklist && (
          <section className="my-10 p-6 md:p-8 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl shadow-xl font-sans">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.news.checklistTitle}
            </h3>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <span className="font-bold text-emerald-300 uppercase text-xs block mb-1">
                  {t.news.beforeStart}
                </span>
                <p className="text-slate-200">{content.checklist.before}</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <span className="font-bold text-blue-300 uppercase text-xs block mb-1">
                  {t.news.duringWork}
                </span>
                <p className="text-slate-200">{content.checklist.during}</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <span className="font-bold text-purple-300 uppercase text-xs block mb-1">
                  {t.news.afterDelivery}
                </span>
                <p className="text-slate-200">{content.checklist.after}</p>
              </div>
            </div>
            {content.summaryFormula && (
              <div className="mt-6 pt-6 border-t border-white/20 text-center italic text-slate-300 text-sm">
                « {content.summaryFormula} »
              </div>
            )}
          </section>
        )}

        {/* Gallery */}
        {content.gallery && content.gallery.length > 0 && (
          <section className="my-10 font-sans">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              {t.news.galleryTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.gallery.map((img, idx) => (
                <figure
                  key={idx}
                  className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 cursor-pointer shadow-md"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <figcaption className="p-3 bg-slate-950 text-slate-300 text-xs italic">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer Back Button */}
      <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center font-sans">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.news.backToNews}
        </button>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </article>
  )
}
