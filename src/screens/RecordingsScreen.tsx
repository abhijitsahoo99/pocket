import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mic, Search } from 'lucide-react'
import RecordingCard from '../components/RecordingCard'
import RecordingDrawer from '../components/RecordingDrawer'
import { mockRecordings } from '../data/mockRecordings'
import type { Recording } from '../types'

export default function RecordingsScreen() {
  const navigate = useNavigate()
  const [activeRecording, setActiveRecording] = useState<Recording | null>(null)
  const [query, setQuery] = useState('')

  const filtered = mockRecordings.filter((r) =>
    r.title.toLowerCase().includes(query.toLowerCase())
  )

  function handleAskAI(recording: Recording) {
    navigate('/chat', { state: { recording } })
  }

  function handleSummarise(recording: Recording) {
    navigate('/chat', { state: { recording, mode: 'summarise' } })
  }

  return (
    <div className="flex flex-col min-h-dvh pb-24">
      {/* Header */}
      <div className="px-5 pt-14 pb-4">
        <h1 className="text-2xl font-bold text-primary tracking-tight">Pocket</h1>
        <p className="text-tertiary text-sm mt-0.5">Your conversation recordings</p>
      </div>

      {/* Search */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 bg-surface rounded-md px-3 py-2.5 border border-border shadow-sm">
          <Search size={15} className="text-tertiary shrink-0" />
          <input
            className="bg-transparent text-primary text-sm outline-none flex-1 placeholder:text-muted"
            placeholder="Search recordings…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* List */}
      <div className="px-5 flex flex-col gap-3 flex-1">
        {filtered.length === 0 && (
          <div className="text-center text-tertiary text-sm mt-16">No recordings found</div>
        )}
        {filtered.map((r) => (
          <RecordingCard
            key={r.id}
            recording={r}
            onActionPress={setActiveRecording}
          />
        ))}
      </div>

      {/* FAB — Record button */}
      <button className="fixed bottom-24 right-5 w-14 h-14 rounded-full bg-accent text-on-accent flex items-center justify-center shadow-lg active:scale-95 transition-transform">
        <Mic size={22} />
      </button>

      {/* Bottom Drawer */}
      <RecordingDrawer
        recording={activeRecording}
        onClose={() => setActiveRecording(null)}
        onSummarise={handleSummarise}
        onAskAI={handleAskAI}
      />
    </div>
  )
}
