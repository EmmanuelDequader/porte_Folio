import React from 'react'

export default function SectionTabGroup({ tabs, activeId, onTabChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
            activeId === tab.id
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
