import { useState, useEffect } from 'react'

const STORAGE_KEY = 'promptcraft_visited'

export function useProgress() {
  const [visited, setVisited] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? new Set(JSON.parse(stored)) : new Set()
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...visited]))
    } catch {
      // ignore
    }
  }, [visited])

  const markVisited = (id) => setVisited(v => new Set([...v, id]))

  const resetProgress = () => {
    setVisited(new Set())
    localStorage.removeItem(STORAGE_KEY)
  }

  return { visited, markVisited, resetProgress }
}
