import { ChevronRight, Clock, Users, Globe } from 'lucide-react'
import type { Recording } from '../types'

interface Props {
  recording: Recording
  onActionPress: (r: Recording) => void
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  if (m >= 60) {
    const h = Math.floor(m / 60)
    return `${h}h ${m % 60}m`
  }
  return `${m} min`
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  const now = new Date()
  const diff = now.getTime() - d.getTime()
  if (diff < 86400000) {
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
  }
  if (diff < 7 * 86400000) {
    return d.toLocaleDateString('en-IN', { weekday: 'short' })
  }
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
}

export default function RecordingCard({ recording, onActionPress }: Props) {
  return (
    <div className="bg-[#161616] rounded-2xl p-4 border border-white/6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-sm truncate">{recording.title}</p>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Clock size={11} />
              {formatDuration(recording.duration)}
            </span>
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Users size={11} />
              {recording.speakers.length} {recording.speakers.length === 1 ? 'speaker' : 'speakers'}
            </span>
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Globe size={11} />
              {recording.language}
            </span>
          </div>

          {recording.summary && (
            <p className="text-white/50 text-xs mt-2.5 line-clamp-2 leading-relaxed">
              {recording.summary}
            </p>
          )}
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="text-white/30 text-xs">{formatDate(recording.date)}</span>
          <button
            onClick={() => onActionPress(recording)}
            className="flex items-center gap-1 bg-white/8 hover:bg-white/12 active:bg-white/16 text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
          >
            Actions
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  )
}
