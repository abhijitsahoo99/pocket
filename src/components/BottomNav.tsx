import { NavLink } from 'react-router-dom'
import { Mic, MessageSquare, Settings } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border flex items-center justify-around px-2 pb-safe">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-3 px-6 text-xs transition-colors ${
            isActive ? 'text-accent' : 'text-tertiary'
          }`
        }
      >
        <Mic size={22} />
        <span>Recordings</span>
      </NavLink>

      <NavLink
        to="/chat"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-3 px-6 text-xs transition-colors ${
            isActive ? 'text-accent' : 'text-tertiary'
          }`
        }
      >
        <MessageSquare size={22} />
        <span>AI Chat</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-3 px-6 text-xs transition-colors ${
            isActive ? 'text-accent' : 'text-tertiary'
          }`
        }
      >
        <Settings size={22} />
        <span>Settings</span>
      </NavLink>
    </nav>
  )
}
