import React, { useState } from 'react'

export default function CodeBlock({ title, code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard?.writeText(code).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block rounded-xl overflow-hidden my-5">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-amber-400/10 bg-white/[0.02]">
        <span className="text-xs text-amber-400 font-mono">{title || 'Example'}</span>
        <button
          onClick={handleCopy}
          className={`text-xs font-mono transition-colors px-2 py-0.5 rounded
            ${copied ? 'text-green-400' : 'text-paper/30 hover:text-paper/70'}`}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-5 text-sm text-paper/75 font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed">
        {code}
      </pre>
    </div>
  )
}
