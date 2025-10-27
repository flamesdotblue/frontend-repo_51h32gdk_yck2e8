import { Shield, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
            <Shield className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold text-white tracking-tight">APT Offensive</div>
            <div className="text-xs text-emerald-300/80">Cybersecurity Simulation</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#method" className="hover:text-white transition">Methodology</a>
          <a href="#cta" className="hover:text-white transition">Contact</a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-black font-medium px-4 py-2 transition">
          <Sparkles className="h-4 w-4" />
          Get a demo
        </button>
      </div>
    </header>
  );
}
