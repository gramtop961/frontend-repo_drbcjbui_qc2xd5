import { Menu, X, Calendar, SwapHorizontal, Shield } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Dashboard", icon: Calendar },
    { label: "Marketplace", icon: SwapHorizontal },
    { label: "Security", icon: Shield },
  ];

  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-600" />
          <span className="font-semibold text-gray-900">SlotSwapper</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.label} href="#" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
              <l.icon className="h-4 w-4" />
              {l.label}
            </a>
          ))}
          <a href="#" className="text-sm font-medium text-white bg-gray-900 hover:bg-black rounded-md px-3 py-2 transition">
            Login
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.label} href="#" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
                <l.icon className="h-4 w-4" />
                {l.label}
              </a>
            ))}
            <a href="#" className="inline-block text-sm font-medium text-white bg-gray-900 hover:bg-black rounded-md px-3 py-2 transition">
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
