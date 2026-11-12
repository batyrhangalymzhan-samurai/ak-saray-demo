import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BANQUETS } from '../data.js'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

function BanquetCard({ item, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <Reveal delay={index * 0.15} className={index === 1 ? 'md:mt-24' : ''}>
      <TiltCard strength={6} className="group h-[520px] border border-gold/15 sm:h-[600px]">
        <div ref={ref} className="relative h-full w-full">
          <motion.img
            src={item.image}
            alt={`${item.title} (иллюстрация)`}
            loading="lazy"
            style={{ scale: imgScale, y: imgY }}
            className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.35em] text-gold">
              0{index + 1}
            </p>
            <h3 className="font-display text-4xl font-light leading-tight text-ivory transition-transform duration-700 group-hover:-translate-y-1 sm:text-5xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">{item.text}</p>
            <span className="mt-6 block h-px w-0 bg-gold transition-all duration-700 group-hover:w-20" />
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default function Banquets() {
  return (
    <section id="banquets" className="relative bg-ink py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Банкеты</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-20 max-w-4xl font-display text-5xl font-light leading-[1.02] text-ivory sm:text-7xl">
            Ваши <span className="italic text-gold">особенные</span> события
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {BANQUETS.map((item, i) => (
            <BanquetCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-xl font-sans text-sm leading-relaxed text-ivory/50">
            Пространство подходит для семей, праздничных ужинов и больших компаний. Детали уточняйте по телефону или в WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
