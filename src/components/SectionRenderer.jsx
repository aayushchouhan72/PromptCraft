import React from 'react'
import CodeBlock from './CodeBlock'

/* ── Glossary Table ─────────────────────────────────────────── */
function GlossaryTable({ items }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden my-5">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex gap-4 px-4 py-3 hover:bg-white/[0.03] transition-colors
            ${i < items.length - 1 ? 'border-b border-white/5' : ''}`}
        >
          <span className="font-mono text-amber-400 text-sm font-medium w-36 flex-shrink-0">
            {item.term}
          </span>
          <span className="text-paper/65 text-sm leading-relaxed">{item.def}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Highlights/Stats ───────────────────────────────────────── */
function Highlights({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4 my-5">
      {items.map((h, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
          <div className="text-3xl font-black text-amber-400">{h.value}</div>
          <div className="text-xs font-bold text-paper mt-1">{h.label}</div>
          <div className="text-[11px] text-paper/40 mt-0.5">{h.desc}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Four-component grid ─────────────────────────────────────── */
function ComponentsGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
      {items.map((c, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
            <span className="font-bold text-paper text-sm">{c.name}</span>
          </div>
          <p className="text-paper/55 text-xs mb-2 leading-relaxed">{c.desc}</p>
          <code className="text-xs text-paper/45 font-mono">{c.example}</code>
        </div>
      ))}
    </div>
  )
}

/* ── Annotated prompt ─────────────────────────────────────────── */
function AnnotatedCode({ annotated }) {
  const blocks = [
    { label: '// [INSTRUCTION]',   key: 'instruction',  color: 'text-amber-400' },
    { label: '// [CONTEXT]',       key: 'context',      color: 'text-cyan-400' },
    { label: '// [INPUT DATA]',    key: 'inputData',    color: 'text-violet-400' },
    { label: '// [OUTPUT FORMAT]', key: 'outputFormat', color: 'text-green-400' },
  ]
  return (
    <div className="code-block rounded-xl overflow-hidden my-5 p-5 space-y-4">
      {blocks.map((b) => (
        <div key={b.key}>
          <div className={`text-[11px] font-mono mb-1 ${b.color}`}>{b.label}</div>
          <pre className="text-sm text-paper/75 font-mono whitespace-pre-wrap leading-relaxed">
            {annotated[b.key]}
          </pre>
        </div>
      ))}
    </div>
  )
}

/* ── Comparisons ─────────────────────────────────────────────── */
function Comparisons({ items }) {
  return (
    <div className="space-y-3 my-5">
      {items.map((c, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
          <div className="bg-white/[0.03] px-4 py-2 text-[11px] font-mono text-paper/35">
            {c.label}
          </div>
          <div className="grid grid-cols-2 divide-x divide-white/10">
            <div className="p-4">
              <div className="text-[11px] text-red-400 font-mono mb-1.5">❌ Avoid</div>
              <p className="text-sm text-paper/55 italic">"{c.bad}"</p>
            </div>
            <div className="p-4">
              <div className="text-[11px] text-green-400 font-mono mb-1.5">✅ Better</div>
              <p className="text-sm text-paper/80 italic">"{c.good}"</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Table ───────────────────────────────────────────────────── */
function DataTable({ table }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden my-5">
      <div className={`grid border-b border-white/10 bg-white/[0.03]`}
        style={{ gridTemplateColumns: `repeat(${table.headers.length}, 1fr)` }}>
        {table.headers.map((h, i) => (
          <div key={i} className="px-4 py-3 text-[11px] font-mono text-paper/40 uppercase tracking-wider">
            {h}
          </div>
        ))}
      </div>
      {table.rows.map((row, ri) => (
        <div
          key={ri}
          className={`grid ${ri < table.rows.length - 1 ? 'border-b border-white/5' : ''}`}
          style={{ gridTemplateColumns: `repeat(${table.headers.length}, 1fr)` }}
        >
          {row.map((cell, ci) => (
            <div key={ci} className={`px-4 py-3 text-sm
              ${ci === 0 ? 'text-amber-400 font-bold font-mono' : 'text-paper/65'}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ── Trigger badges ─────────────────────────────────────────── */
function Triggers({ triggers }) {
  return (
    <div className="flex flex-wrap gap-2 my-5">
      {triggers.map((t, i) => (
        <span key={i}
          className="bg-amber-400/8 border border-amber-400/20 text-amber-400 text-xs font-mono px-3 py-2 rounded-lg">
          {t}
        </span>
      ))}
    </div>
  )
}

/* ── Role types ─────────────────────────────────────────────── */
function RoleTypes({ items }) {
  const powerColor = { High: 'badge-amber', Medium: 'badge-cyan', Low: 'bg-white/10 text-paper/50' }
  return (
    <div className="space-y-3 my-5">
      {items.map((r, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-paper text-sm">{r.type}</span>
            <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${powerColor[r.power] || 'bg-white/10 text-paper/50'}`}>
              {r.power}
            </span>
          </div>
          <p className="text-paper/45 text-xs mb-2.5">{r.use}</p>
          <code className="text-xs text-paper/55 font-mono bg-black/30 px-3 py-2 rounded-lg block leading-relaxed">
            {r.example}
          </code>
        </div>
      ))}
    </div>
  )
}

/* ── Ingredients ─────────────────────────────────────────────── */
function Ingredients({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-5">
      {items.map((ing, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1.5">{ing.emoji}</div>
          <div className="text-xs font-bold text-paper leading-tight">{ing.label}</div>
          <div className="text-[10px] text-paper/35 mt-1 leading-snug">{ing.desc}</div>
        </div>
      ))}
    </div>
  )
}

/* ── PCTF Framework ─────────────────────────────────────────── */
function Framework({ items }) {
  return (
    <div className="space-y-3 my-5">
      {items.map((f, i) => (
        <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-4">
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-lg text-ink"
            style={{ background: f.color }}
          >
            {f.letter}
          </div>
          <div>
            <div className="font-bold text-paper mb-1">{f.word}</div>
            <p className="text-paper/60 text-sm leading-relaxed">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Mistakes list ──────────────────────────────────────────── */
function MistakesList({ items }) {
  return (
    <div className="space-y-2 my-5">
      {items.map((m, i) => (
        <div key={i} className="flex gap-3 items-start bg-white/5 border border-white/10 rounded-xl p-3">
          <span className="w-6 h-6 bg-red-500/15 text-red-400 rounded text-xs font-mono flex items-center justify-center flex-shrink-0 font-bold">
            {m.num}
          </span>
          <div className="flex-1 min-w-0 text-sm">
            <span className="text-paper/80 font-medium">{m.mistake}</span>
            <span className="text-paper/30 mx-2">→</span>
            <span className="text-green-400">{m.fix}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Process steps ──────────────────────────────────────────── */
function ProcessSteps({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-2 my-5">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-paper/75">
            {step}
          </div>
          {i < steps.length - 1 && (
            <span className="text-amber-400 font-mono text-sm">→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

/* ── Use-Cases ──────────────────────────────────────────────── */
function UseCases({ items }) {
  return (
    <div className="space-y-4 my-5">
      {items.map((uc, i) => (
        <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-white/5 bg-white/[0.03]">
            <span className="text-sm font-bold text-paper">{uc.title}</span>
          </div>
          <div className="p-4">
            <p className="text-xs text-paper/55 font-mono leading-relaxed">{uc.prompt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Note/callout ───────────────────────────────────────────── */
function Note({ note }) {
  return (
    <div className="bg-cyan-400/5 border border-cyan-500/20 rounded-xl p-4 text-sm text-paper/65 font-mono leading-relaxed my-5">
      {note}
    </div>
  )
}

/* ── MASTER SECTION RENDERER ────────────────────────────────── */
export default function SectionRenderer({ section }) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">{section.icon}</span>
        <h2 className="text-xl font-black text-paper">{section.heading}</h2>
      </div>

      {section.body && (
        <p className="text-paper/65 leading-relaxed mb-4 whitespace-pre-line text-[15px]">
          {section.body}
        </p>
      )}

      {section.code       && <CodeBlock title={section.codeTitle} code={section.code} />}
      {section.glossary   && <GlossaryTable items={section.glossary} />}
      {section.highlights && <Highlights items={section.highlights} />}
      {section.components && <ComponentsGrid items={section.components} />}
      {section.annotatedCode && <AnnotatedCode annotated={section.annotatedCode} />}
      {section.comparisons   && <Comparisons items={section.comparisons} />}
      {section.table         && <DataTable table={section.table} />}
      {section.triggers      && <Triggers triggers={section.triggers} />}
      {section.roleTypes     && <RoleTypes items={section.roleTypes} />}
      {section.ingredients   && <Ingredients items={section.ingredients} />}
      {section.framework     && <Framework items={section.framework} />}
      {section.mistakes      && <MistakesList items={section.mistakes} />}
      {section.steps         && <ProcessSteps steps={section.steps} />}
      {section.useCases      && <UseCases items={section.useCases} />}
      {section.note          && <Note note={section.note} />}
    </div>
  )
}
