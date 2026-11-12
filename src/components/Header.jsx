import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS, NAV_ITEMS } from '../data.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 250)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-ink/85 py-3 backdrop-blur-xl border-b border-gold/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="font-display text-2xl tracking-[0.2em] text-ivory">
            АК<span className="text-gold">—</span>САРАЙ
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="group relative font-sans text-[11px] uppercase tracking-[0.22em] text-ivory/80 transition-colors hover:text-gold min-h-[44px]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="hidden items-center gap-2 font-sans text-xs tracking-wider text-ivory/80 transition-colors hover:text-gold xl:flex min-h-[44px]"
            >
              <Phone size={14} strokeWidth={1.5} /> {BUSINESS.phone}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Открыть меню"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink lg:hidden"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink"
            role="dialog"
            aria-modal="true"
            aria-label="Меню"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="font-display text-2xl tracking-[0.2em] text-ivory">АК<span className="text-gold">—</span>САРАЙ</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Закрыть меню"
                className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Мобильная навигация">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(item.id)}
                  className="min-h-[56px] py-2 text-left font-display text-4xl font-light text-ivory transition-colors hover:text-gold"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="flex flex-col gap-3 px-8 pb-10">
              <a href={BUSINESS.phoneHref} className="flex min-h-[52px] items-center justify-center gap-2 border border-gold bg-gold font-sans text-xs uppercase tracking-[0.2em] text-ink">
                <Phone size={16} strokeWidth={1.5} /> Позвонить
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
