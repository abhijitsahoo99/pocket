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
        <h1 className="text-2xl font-bold text-white tracking-tight">Settings</h1>
      </div>

      {/* Profile */}
      <div className="mx-5 mb-6 bg-white/6 border border-white/8 rounded-2xl p-4 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-base shrink-0">
          A
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Abhijit Sahoo</p>
          <p className="text-white/40 text-xs">Voice registered ✓</p>
        </div>
      </div>

      {/* Sections */}
      <div className="px-5 flex flex-col gap-6">
        {SETTINGS_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="text-white/30 text-xs uppercase tracking-wider mb-2 px-1">{section.title}</p>
            <div className="bg-white/6 border border-white/8 rounded-2xl overflow-hidden">
              {section.items.map((item, i) => (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-white/5 active:bg-white/8 transition-colors text-left ${
                    i < section.items.length - 1 ? 'border-b border-white/6' : ''
                  }`}
                >
                  <span className="text-white/40">{item.icon}</span>
                  <div className="flex-1">
                    <p className="text-white text-sm">{item.label}</p>
                    <p className="text-white/40 text-xs">{item.description}</p>
                  </div>
                  <ChevronRight size={15} className="text-white/20" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
