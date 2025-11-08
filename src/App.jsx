import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-['Geist','Inter','IBM Plex Sans',system-ui,sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Tokenomics />
        <Roadmap />
        <footer className="border-t border-white/10 py-10 bg-black/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} CRAZYY — Built by the Internet</p>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white">Twitter</a>
              <span className="text-white/20">•</span>
              <a href="#" className="hover:text-white">Telegram</a>
              <span className="text-white/20">•</span>
              <a href="#security" className="hover:text-white">Contract</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
