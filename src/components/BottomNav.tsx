import { NavLink } from 'react-router-dom'
import { Mic, MessageSquare, Settings } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-[#111] border-t border-white/8 flex items-center justify-around px-2 pb-safe">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-3 px-6 text-xs transition-colors ${
            isActive ? 'text-white' : 'text-white/40'
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
            isActive ? 'text-white' : 'text-white/40'
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
            isActive ? 'text-white' : 'text-white/40'
          }`
        }
      >
        <Settings size={22} />
        <span>Settings</span>
      </NavLink>
    </nav>
  )
}
