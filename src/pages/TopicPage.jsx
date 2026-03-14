import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TOPICS, TOPIC_CONTENT } from '../data/topics'
import SectionRenderer from '../components/SectionRenderer'

const badgeStyles = {
  amber:  'badge-amber',
  cyan:   'badge-cyan',
  violet: 'badge-violet',
  green:  'badge-green',
}

export default function TopicPage({ markVisited }) {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const data = TOPIC_CONTENT[topicId]

  const topicIndex = TOPICS.findIndex(t => t.id === topicId)
  const prev = topicIndex > 0 ? TOPICS[topicIndex - 1] : null
  const next = topicIndex < TOPICS.length - 1 ? TOPICS[topicIndex + 1] : null

  useEffect(() => {
    if (topicId) markVisited(topicId)
    window.scrollTo(0, 0)
  }, [topicId, markVisited])

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-paper/40">
        <div className="text-4xl mb-4">🔍</div>
        <p className="font-mono">Topic not found: {topicId}</p>
        <button onClick={() => navigate('/')} className="mt-4 text-amber-400 hover:underline text-sm">
          ← Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      {/* Header */}
      <div className="mb-12">
        <span className={`inline-flex items-center text-xs font-mono px-3 py-1 rounded-full mb-4 ${badgeStyles[data.badgeColor]}`}>
          {data.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-paper mb-3 leading-tight">
          {data.title}
        </h1>
        <p className="text-paper/45 text-lg">{data.subtitle}</p>
        <div className="mt-4 h-px bg-gradient-to-r from-amber-400/30 via-cyan-400/20 to-transparent" />
      </div>

      {/* Sections */}
      {data.sections.map((section, i) => (
        <SectionRenderer key={i} section={section} />
      ))}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-10 mt-10 border-t border-white/8">
        {prev ? (
          <button
            onClick={() => navigate(prev.path)}
            className="flex items-center gap-3 text-paper/50 hover:text-paper transition-colors group text-sm"
          >
            <span className="group-hover:-translate-x-1 transition-transform text-base">←</span>
            <div className="text-left">
              <div className="text-[10px] text-paper/25 font-mono uppercase tracking-wider mb-0.5">Previous</div>
              <div className="font-medium">{prev.label}</div>
            </div>
          </button>
        ) : <div />}

        {next ? (
          <button
            onClick={() => navigate(next.path)}
            className="flex items-center gap-3 text-paper/50 hover:text-paper transition-colors group text-sm"
          >
            <div className="text-right">
              <div className="text-[10px] text-paper/25 font-mono uppercase tracking-wider mb-0.5">Next</div>
              <div className="font-medium">{next.label}</div>
            </div>
            <span className="group-hover:translate-x-1 transition-transform text-base">→</span>
          </button>
        ) : (
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
          >
            🏠 Back to Home
          </button>
        )}
      </div>
    </div>
  )
}
