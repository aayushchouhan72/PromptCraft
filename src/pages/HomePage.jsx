import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TOPICS } from '../data/topics'

const colorMap = {
  amber:  'border-amber-400/20 hover:border-amber-400/50 group-hover:text-amber-400',
  cyan:   'border-cyan-500/20 hover:border-cyan-500/50 group-hover:text-cyan-400',
  violet: 'border-violet-400/20 hover:border-violet-400/50 group-hover:text-violet-400',
}
const accentMap = {
  amber:  'bg-amber-400',
  cyan:   'bg-cyan-400',
  violet: 'bg-violet-400',
}

export default function HomePage({ visited }) {
  const navigate = useNavigate()
  const progress = Math.round((visited.size / TOPICS.length) * 100)

  return (
    <div className="min-h-screen grid-bg">
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-400/8 border border-amber-400/20 rounded-full px-4 py-1.5 text-amber-400 text-xs font-mono mb-8 animate-pulse-slow">
          <span className="w-2 h-2 bg-amber-400 rounded-full block animate-ping" />
          Free · 8 Topics · No Account Required
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight">
          <span className="shimmer-text">Prompt</span>
          <br />
          <span className="font-fraunces italic font-light text-paper/90">Engineering</span>
        </h1>

        <p className="text-xl text-paper/55 max-w-2xl mx-auto mb-10 leading-relaxed">
          The most important skill in the AI era. Learn to craft prompts that extract
          extraordinary results from language models — from first principles to advanced
          research-grade techniques.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => navigate('/intro')}
            className="flex items-center gap-2 bg-amber-400 text-ink font-bold px-8 py-3.5 rounded-xl
              hover:bg-amber-300 transition-all hover:-translate-y-1 shadow-lg shadow-amber-400/20"
          >
            🚀 Start Learning
          </button>
          <button
            onClick={() => navigate('/advanced')}
            className="flex items-center gap-2 border border-paper/15 text-paper px-8 py-3.5 rounded-xl
              hover:border-amber-400/30 transition-all hover:-translate-y-1"
          >
            ⚡ Advanced Topics
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-20">
          {[
            { val: '8',    label: 'Topics Covered' },
            { val: '40+',  label: 'Code Examples' },
            { val: `${progress}%`, label: 'Your Progress' },
            { val: '∞',   label: 'AI Potential' },
          ].map((s) => (
            <div key={s.label} className="bg-white/[0.04] border border-white/8 rounded-xl p-4">
              <div className="text-2xl font-black text-amber-400">{s.val}</div>
              <div className="text-xs text-paper/40 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Curriculum Grid ────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-paper">Curriculum</h2>
            <p className="text-paper/40 text-sm mt-1">
              A structured path from fundamentals to expert-level techniques
            </p>
          </div>
          <span className="text-xs font-mono text-paper/25 border border-white/8 px-3 py-1.5 rounded-lg">
            {visited.size}/{TOPICS.length} visited
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => navigate(t.path)}
              className={`group card-hover text-left bg-white/[0.03] border rounded-xl p-5 ${colorMap[t.color]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{t.icon}</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-paper/20">{t.num}</span>
                  {visited.has(t.id) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 block" />
                  )}
                </div>
              </div>
              <div className="font-bold text-paper text-sm leading-snug mb-3">{t.label}</div>
              <div className={`h-0.5 w-8 rounded-full opacity-50 ${accentMap[t.color]}`} />
            </button>
          ))}
        </div>
      </div>

      {/* ── What you'll learn ──────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="border border-white/8 rounded-2xl p-8 bg-white/[0.02]">
          <h2 className="text-xl font-black text-paper mb-2">What You'll Learn</h2>
          <p className="text-paper/40 text-sm mb-8">Core skills covered across all 8 topics</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: '🧠', title: 'Core Principles',     desc: 'The theory behind why prompts work — and why they fail.' },
              { icon: '🔬', title: 'Prompt Anatomy',       desc: 'The four components every effective prompt must include.' },
              { icon: '🎯', title: 'Prompting Strategies', desc: 'Zero-shot, few-shot, one-shot and when to use each.' },
              { icon: '🔗', title: 'Chain-of-Thought',     desc: 'Guide models to reason step-by-step for complex tasks.' },
              { icon: '⚡', title: 'Advanced Techniques',  desc: 'RAG, ReAct, prompt chaining, and self-consistency.' },
              { icon: '🌐', title: 'Real Applications',    desc: 'Production-ready prompts for dev, marketing, and data.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="font-bold text-paper text-sm">{item.title}</div>
                  <p className="text-paper/40 text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
