import { ChevronRight, Mic, Cpu, Bell, Shield, Info } from 'lucide-react'

const SETTINGS_SECTIONS = [
  {
    title: 'Recording',
    items: [
      { icon: <Mic size={16} />, label: 'Voice registration', description: 'Re-record your voice for identification' },
    ],
  },
  {
    title: 'AI',
    items: [
      { icon: <Cpu size={16} />, label: 'Default model', description: 'Claude 3.5 Sonnet' },
    ],
  },
  {
    title: 'App',
    items: [
      { icon: <Bell size={16} />, label: 'Notifications', description: 'Transcription complete alerts' },
      { icon: <Shield size={16} />, label: 'Privacy', description: 'Data storage and retention' },
      { icon: <Info size={16} />, label: 'About', description: 'Version 0.1.0' },
    ],
  },
]

export default function SettingsScreen() {
  return (
    <div className="flex flex-col min-h-dvh pb-24">
      {/* Header */}
      <div className="px-5 pt-14 pb-6">
        <h1 className="text-2xl font-bold text-primary tracking-tight">Settings</h1>
      </div>

      {/* Profile */}
      <div className="mx-5 mb-6 bg-surface border border-border rounded-lg p-4 flex items-center gap-3 shadow-sm">
        <div className="w-11 h-11 rounded-full bg-accent-light flex items-center justify-center text-accent font-semibold text-base shrink-0">
          A
        </div>
        <div>
          <p className="text-primary font-semibold text-sm">Abhijit Sahoo</p>
          <p className="text-tertiary text-xs">Voice registered</p>
        </div>
      </div>

      {/* Sections */}
      <div className="px-5 flex flex-col gap-6">
        {SETTINGS_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="text-tertiary text-xs uppercase tracking-wider mb-2 px-1">{section.title}</p>
            <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
              {section.items.map((item, i) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-surface-alt active:bg-border-light transition-colors text-left ${
                    i < section.items.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <span className="text-secondary">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-primary text-sm">{item.label}</p>
                    <p className="text-tertiary text-xs">{item.description}</p>
                  </div>
                  <ChevronRight size={15} className="text-muted" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
