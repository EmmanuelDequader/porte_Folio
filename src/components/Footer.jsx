import React from 'react'
import { profileData } from '../data/content'

export default function Footer({ t }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-white font-extrabold text-lg tracking-wider uppercase">
            {profileData.name} ({profileData.nickname})
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {t.footer.role}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-4 text-xs font-semibold">
            {profileData.socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="text-xs text-slate-500">
            <a href={`mailto:${profileData.email}`} className="hover:text-slate-300 transition-colors">
              {profileData.email}
            </a>
            {' • '}
            <span>{profileData.phones[0]}</span>
          </div>

          <div className="text-[11px] text-slate-600">
            © 2026 {profileData.name}. {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}
