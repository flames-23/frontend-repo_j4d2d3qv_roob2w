import { Coins, Percent, Wallet } from 'lucide-react';

export default function Tokenomics() {
  const items = [
    {
      icon: Coins,
      title: 'Supply: 1,000,000,000',
      desc: 'Fixed supply. No mint, no nonsense. Pure chaos distribution.'
    },
    {
      icon: Percent,
      title: 'Tax: 0% forever',
      desc: 'Trade without friction. Velocity over fees. Let the market roar.'
    },
    {
      icon: Wallet,
      title: 'Liquidity Locked',
      desc: 'LP sealed in the void. Contract verified. Rug-proof mechanics.'
    }
  ];

  return (
    <section id="tokenomics" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_40%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-tr from-white via-fuchsia-200 to-cyan-200 text-transparent bg-clip-text">
            Tokenomics engineered for velocity
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Built to move fast and break reality. No taxes, no shady mechanics — just raw energy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-white overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-violet-600/20 blur-2xl" aria-hidden />
              <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 p-[2px] mb-4">
                <div className="h-full w-full rounded-md bg-black flex items-center justify-center">
                  <Icon className="text-white" size={20} />
                </div>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
