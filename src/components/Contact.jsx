import React, { useState } from 'react'
import Reveal from './Reveal'
import { profileData } from '../data/content'

export default function Contact({ lang, t }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)

    // Open WhatsApp directly with form message
    const textMsg = encodeURIComponent(
      `Bonjour Emmanuel Dequader,\n\nNom: ${formData.name}\nEmail: ${formData.email}\nSujet: ${formData.subject}\nMessage: ${formData.message}`
    )
    window.open(`https://wa.me/237690624051?text=${textMsg}`, '_blank')

    setTimeout(() => {
      setSent(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t.contact.directEmail}</h3>
                <a href={`mailto:${profileData.email}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  {profileData.email}
                </a>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4">
              <div className="p-3 bg-emerald-600 text-white rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t.contact.phones}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {profileData.phones.join(' / ')}
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4">
              <div className="p-3 bg-purple-600 text-white rounded-xl">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t.contact.location}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  {profileData.location}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/237690624051"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex items-start gap-4 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors"
            >
              <div className="p-3 bg-emerald-500 text-white rounded-xl">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">WhatsApp</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm font-medium">
                  +237 690 624 051
                </p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/60 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            {sent ? (
              <div className="p-6 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-xl text-center font-semibold">
                {t.contact.successMsg}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">{t.contact.formName}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">{t.contact.formEmail}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">{t.contact.formSubject}</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase mb-2">{t.contact.formMessage}</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/25 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>{t.contact.formSubmit}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
