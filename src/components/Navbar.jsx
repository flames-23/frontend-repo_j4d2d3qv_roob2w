import { Rocket, Coins, Shield, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 p-[2px]">
            <div className="h-full w-full rounded-md bg-black flex items-center justify-center text-white">
              <Rocket size={18} />
            </div>
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold tracking-wide">CRAZYY</div>
            <div className="text-xs text-white/60 uppercase tracking-widest">Meme Protocol</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#tokenomics" className="hover:text-white transition-colors inline-flex items-center gap-2">
            <Coins size={16} /> Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-white transition-colors inline-flex items-center gap-2">
            <Zap size={16} /> Roadmap
          </a>
          <a href="#security" className="hover:text-white transition-colors inline-flex items-center gap-2">
            <Shield size={16} /> Security
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white/90 border border-white/15 hover:border-white/30 transition-colors">
            <span>Litepaper</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-black bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 hover:from-fuchsia-400 hover:via-cyan-300 hover:to-violet-500 transition-colors">
            Launch App
          </button>
        </div>
      </div>
    </header>
  );
}
