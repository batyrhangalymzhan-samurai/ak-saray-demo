import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { GALLERY } from '../data.js'
import Reveal from './Reveal.jsx'

const SPAN_CLASS = {
  tall: 'row-span-2 aspect-[3/4] md:aspect-auto',
  wide: 'col-span-2 aspect-[16/9] md:aspect-auto',
  square: 'aspect-square',
}

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  const item = GALLERY[index]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр фото"
      onClick={onClose}
    >
      <button
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold"
      >
        <X size={20} strokeWidth={1.5} />
      </button>
      <button
        aria-label="Предыдущее фото"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold sm:left-8"
      >
        <ChevronLeft size={22} strokeWidth={1.5} />
      </button>
      <button
        aria-label="Следующее фото"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/40 text-gold sm:right-8"
      >
        <ChevronRight size={22} strokeWidth={1.5} />
      </button>

      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-h-full max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={item.src} alt={item.alt} className="max-h-[78vh] w-auto object-contain" />
          <figcaption className="mt-4 text-center font-sans text-xs tracking-wider text-ivory/60">
            Иллюстративное фото. Не отражает реальный интерьер ресторана.
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </motion.div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState(null)

  const prev = () => setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length)
  const next = () => setActive((i) => (i + 1) % GALLERY.length)

  return (
    <section id="gallery" className="relative bg-espresso py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Галерея</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-6 max-w-4xl font-display text-5xl font-light leading-[1.02] text-ivory sm:text-7xl">
            Атмосфера, которую <span className="italic text-gold">хочется почувствовать</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mb-16 max-w-xl text-sm leading-relaxed text-ivory/50">
            Все изображения ниже — иллюстративные стоковые фото. Они не являются фотографиями реального ресторана.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px] md:gap-5">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 4) * 0.08} className={SPAN_CLASS[item.span]}>
              <button
                onClick={() => setActive(i)}
                aria-label={`Открыть фото: ${item.alt}`}
                className="group relative block h-full w-full overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/30" />
                <span className="absolute bottom-4 left-4 font-sans text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Открыть
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox index={active} onClose={() => setActive(null)} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </section>
  )
}
