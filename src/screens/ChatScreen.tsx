import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Send, Sparkles, ChevronDown } from 'lucide-react'
import type { Recording } from '../types'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const MODELS = ['Claude 3.5 Sonnet', 'GPT-4o', 'Gemini 1.5 Pro']

export default function ChatScreen() {
  const location = useLocation()
  const state = location.state as { recording?: Recording; mode?: string } | null

  const [messages, setMessages] = useState<Message[]>(() => {
    if (state?.recording && state.mode === 'summarise') {
      return [
        {
          id: '0',
          role: 'assistant',
          text: state.recording.summary
            ? `Here's a summary of **${state.recording.title}**:\n\n${state.recording.summary}`
            : `Summarising **${state.recording.title}**… (connect AI to generate)`,
        },
      ]
    }
    if (state?.recording) {
      return [
        {
          id: '0',
          role: 'assistant',
          text: `I have context from **${state.recording.title}**. What would you like to know?`,
        },
      ]
    }
    return [
      {
        id: '0',
        role: 'assistant',
        text: 'Hi! I can answer questions about any of your recordings, or just chat. What do you need?',
      },
    ]
  })

  const [input, setInput] = useState('')
  const [model, setModel] = useState(MODELS[0])
  const [showModelPicker, setShowModelPicker] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function send() {
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text }
    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: 'This is a mock response. Connect the AI backend to get real answers.',
    }
    setMessages((prev) => [...prev, userMsg, aiMsg])
    setInput('')
  }

  return (
    <div className="flex flex-col min-h-dvh pb-20">
      {/* Header */}
      <div className="px-5 pt-14 pb-3 flex items-center justify-between border-b border-border bg-surface">
        <div>
          <h1 className="text-lg font-bold text-primary">AI Chat</h1>
          {state?.recording && (
            <p className="text-tertiary text-xs">Context: {state.recording.title}</p>
          )}
        </div>

        {/* Model selector */}
        <div className="relative">
          <button
            onClick={() => setShowModelPicker(!showModelPicker)}
            className="flex items-center gap-1.5 bg-surface-alt border border-border rounded-md px-3 py-1.5 text-xs text-secondary"
          >
            <Sparkles size={12} className="text-accent" />
            {model}
            <ChevronDown size={12} />
          </button>
          {showModelPicker && (
            <div className="absolute right-0 top-full mt-1 bg-surface border border-border rounded-md overflow-hidden z-10 min-w-[160px] shadow-lg">
              {MODELS.map((m) => (
                <button
                  key={m}
                  onClick={() => { setModel(m); setShowModelPicker(false) }}
                  className={`w-full text-left px-4 py-2.5 text-xs hover:bg-surface-alt transition-colors ${
                    m === model ? 'text-accent font-medium' : 'text-secondary'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-5 py-4 flex flex-col gap-4 overflow-y-auto">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-accent text-on-accent rounded-br-sm'
                  : 'bg-surface-alt text-primary rounded-bl-sm border border-border'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="fixed bottom-16 left-0 right-0 px-4 pb-3 bg-bg">
        <div className="flex items-end gap-2 bg-surface border border-border rounded-lg px-3 py-2 shadow-sm">
          <textarea
            className="flex-1 bg-transparent text-primary text-sm outline-none resize-none placeholder:text-muted max-h-28 leading-relaxed"
            placeholder="Ask about your recordings…"
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                send()
              }
            }}
          />
          <button
            onClick={send}
            disabled={!input.trim()}
            className="w-8 h-8 rounded-sm bg-accent text-on-accent flex items-center justify-center shrink-0 disabled:opacity-30 transition-opacity"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
