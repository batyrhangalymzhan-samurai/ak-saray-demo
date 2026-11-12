import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal.jsx'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-espresso py-32 sm:py-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <div className="relative lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              style={{ y: imgY }}
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=70"
              alt="Интерьер ресторана (иллюстрация)"
              loading="lazy"
              className="absolute inset-0 h-[116%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
          </div>
          <Reveal className="absolute -bottom-10 -right-4 hidden w-40 bg-ink p-5 sm:block lg:-right-10">
            <p className="font-display text-sm italic leading-snug text-ivory/80">Иллюстративное фото. Не отражает реальный интерьер.</p>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <Reveal>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">О ресторане</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-light leading-[1.05] text-ivory sm:text-6xl">
              Место, где встречаются <span className="italic text-gold">традиции</span> и атмосфера
            </h2>
          </Reveal>
          <div className="hairline my-10 h-px w-24" />
          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-ivory/70">
              Ак-Сарай — ресторан и банкетный зал в Бесагаше. Здесь рады семьям, большим компаниям и всем, кто ценит спокойную, тёплую атмосферу.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/70">
              Блюда халяль. Есть бесплатная парковка, доступный вход и места для гостей с ограниченными возможностями.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
