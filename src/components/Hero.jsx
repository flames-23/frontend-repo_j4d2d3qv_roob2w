import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),rgba(0,0,0,0.85))] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
            Live on the chain — zero chill, max vibes
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-tr from-white via-fuchsia-200 to-cyan-200 text-transparent bg-clip-text leading-[0.95]">
            CRAZYY — the meme coin from another dimension
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/80">
            A hyper-surreal experiment blending internet culture, cosmic aesthetics, and degen energy. Touch the ribbon. Join the orbit. Become insane.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#tokenomics" className="inline-flex justify-center items-center px-6 py-3 rounded-md text-black font-semibold bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-violet-600 hover:from-fuchsia-400 hover:via-cyan-300 hover:to-violet-500 transition-colors">
              Buy $CRAZYY
            </a>
            <a href="#roadmap" className="inline-flex justify-center items-center px-6 py-3 rounded-md font-semibold text-white border border-white/15 hover:border-white/30 transition-colors">
              Explore the madness
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] bg-gradient-to-tr from-fuchsia-500/20 via-cyan-400/10 to-violet-600/20 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
