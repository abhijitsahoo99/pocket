import { useEffect } from 'react'
import { Sparkles, MessageSquare, Share2, Trash2, X } from 'lucide-react'
import type { Recording } from '../types'

interface Props {
  recording: Recording | null
  onClose: () => void
  onSummarise: (r: Recording) => void
  onAskAI: (r: Recording) => void
}

export default function RecordingDrawer({ recording, onClose, onSummarise, onAskAI }: Props) {
  useEffect(() => {
    if (recording) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [recording])

  if (!recording) return null

  const actions = [
    {
      icon: <Sparkles size={20} />,
      label: 'Summarise',
      description: 'Get a quick summary of this recording',
      onClick: () => { onSummarise(recording); onClose() },
      color: 'text-violet',
    },
    {
      icon: <MessageSquare size={20} />,
      label: 'Ask AI',
      description: 'Ask anything about this recording',
      onClick: () => { onAskAI(recording); onClose() },
      color: 'text-sky',
    },
    {
      icon: <Share2 size={20} />,
      label: 'Share',
      description: 'Share transcript or summary',
      onClick: onClose,
      color: 'text-emerald',
    },
    {
      icon: <Trash2 size={20} />,
      label: 'Delete',
      description: 'Permanently delete this recording',
      onClick: onClose,
      color: 'text-danger',
    },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-backdrop z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-surface rounded-t-xl z-50 pb-8 shadow-xl">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-3 pb-4 border-b border-border">
          <div>
            <p className="font-semibold text-primary text-base">{recording.title}</p>
            <p className="text-tertiary text-xs mt-0.5">
              {new Date(recording.date).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric',
              })} · {formatDuration(recording.duration)}
            </p>
          </div>
          <button onClick={onClose} className="text-tertiary p-1 -mr-1">
            <X size={18} />
          </button>
        </div>

        {/* Actions */}
        <div className="px-3 pt-2">
          {actions.map((a) => (
            <button
              key={a.label}
              onClick={a.onClick}
              className="w-full flex items-center gap-4 px-3 py-4 rounded-md hover:bg-surface-alt active:bg-border-light transition-colors text-left"
            >
              <span className={a.color}>{a.icon}</span>
              <div>
                <p className="text-primary text-sm font-medium">{a.label}</p>
                <p className="text-tertiary text-xs">{a.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  if (m >= 60) {
    const h = Math.floor(m / 60)
    return `${h}h ${m % 60}m`
  }
  return `${m}:${String(s).padStart(2, '0')}`
}
