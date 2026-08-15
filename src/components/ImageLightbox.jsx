import React, { useEffect } from 'react'

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out transition-all duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10"
        aria-label="Fermer la vue de l'image"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <img
        src={image.url}
        alt={image.alt || 'Agrandissement'}
        className="max-h-[88vh] max-w-[94vw] w-auto h-auto object-contain shadow-2xl rounded-lg cursor-default"
        onClick={(e) => e.stopPropagation()}
      />

      {image.caption && (
        <p
          className="mt-4 px-4 text-slate-300 text-sm text-center max-w-2xl cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          {image.caption}
        </p>
      )}
    </div>
  )
}
