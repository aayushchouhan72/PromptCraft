import React from 'react'
import { useLocation } from 'react-router-dom'
import { TOPICS } from '../data/topics'

export default function TopBar({ visited, sidebarOpen, setSidebarOpen }) {
  const location = useLocation()
  const current = TOPICS.find(t => t.path === location.pathname)
  const progress = Math.round((visited.size / TOPICS.length) * 100)

  return (
    <header className="sticky top-0 z-20 bg-ink/80 backdrop-blur-md border-b border-white/5 h-14 flex items-center px-4 gap-4">
      {/* Hamburger */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-1.5 text-paper/60 hover:text-paper transition-colors"
        aria-label="Toggle menu"
      >
        <span className="block w-5 h-0.5 bg-current" />
        <span className="block w-5 h-0.5 bg-current" />
        <span className="block w-5 h-0.5 bg-current" />
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-paper/40 font-mono">
        <span className="hidden sm:block">PromptCraft</span>
        {current && (
          <>
            <span className="hidden sm:block text-paper/20">/</span>
            <span className="text-paper/70">{current.label}</span>
          </>
        )}
      </div>

      <div className="flex-1" />

      {/* Progress */}
      <div className="hidden sm:flex items-center gap-3">
        <span className="text-xs text-paper/30 font-mono">
          {visited.size}/{TOPICS.length} complete
        </span>
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="progress-gradient h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  )
}
