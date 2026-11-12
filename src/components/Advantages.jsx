import * as Icons from 'lucide-react'
import { motion } from 'framer-motion'
import { ADVANTAGES } from '../data.js'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

export default function Advantages() {
  return (
    <section id="advantages" className="relative bg-espresso py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Преимущества</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-light leading-[1.05] text-ivory sm:text-6xl">
                Продумано для <span className="italic text-gold">вашего комфорта</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-px bg-gold/15 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item, i) => {
            const Icon = Icons[item.icon] ?? Icons.Star
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <TiltCard strength={7} className="group h-full bg-espresso p-10 sm:p-12">
                  <motion.div
                    whileHover={{ rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink"
                  >
                    <Icon size={24} strokeWidth={1.2} />
                  </motion.div>
                  <h3 className="font-display text-3xl font-light text-ivory">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory/60">{item.text}</p>
                  <span className="mt-8 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-16" />
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
