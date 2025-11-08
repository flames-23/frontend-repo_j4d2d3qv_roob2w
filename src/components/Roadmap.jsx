import { CheckCircle2, Rocket, Sparkles } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1 — Ignition',
    points: ['Launch website + socials', 'Contract deploy + LP lock', '1,000 true degens in orbit'],
    icon: Rocket,
  },
  {
    title: 'Phase 2 — Distortion',
    points: ['Memetic partnerships', 'CEX listings radar', 'Community art drops'],
    icon: Sparkles,
  },
  {
    title: 'Phase 3 — Singularity',
    points: ['DAO vibes + governance', 'Cross-chain portals', 'Metaverse antics'],
    icon: CheckCircle2,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-tr from-white via-fuchsia-200 to-cyan-200 text-transparent bg-clip-text">
            The path to beautiful madness
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            A non-linear roadmap into the absurd. We ship what feels cosmic.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 p-[2px] mb-4">
                <div className="h-full w-full rounded-md bg-black flex items-center justify-center">
                  <phase.icon size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{phase.title}</h3>
              <ul className="mt-4 space-y-2 text-white/80">
                {phase.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
