import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useMotionPrefs } from '../hooks/useMotionPrefs.js'
import { BUSINESS } from '../data.js'

const Hero3D = lazy(() => import('./Hero3D.jsx'))

// Запасной фон, если WebGL недоступен или включено снижение эффектов
function StaticFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(60% 50% at 50% 40%, rgba(200,169,107,0.18), transparent 70%), radial-gradient(40% 40% at 80% 70%, rgba(33,27,23,0.9), transparent 70%)',
      }}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-[42%] h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40" />
      <div className="absolute left-1/2 top-[44%] h-[38vmin] w-[38vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25" />
    </div>
  )
}

export default function Hero() {
  const { reduced, mobile, webgl } = useMotionPrefs()
  const sectionRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)

  // Плавный параллакс текста от положения мыши
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const titleX = useTransform(sx, (v) => v * -14)
  const titleY = useTransform(sy, (v) => v * -10)

  useEffect(() => {
    if (reduced || mobile) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mouse.current = { x, y }
      mx.set(x)
      my.set(y)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, mobile, mx, my])

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const showWebGL = webgl && !reduced

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        {showWebGL ? (
          <Suspense fallback={<StaticFallback />}>
            <Hero3D mouse={mouse} reduced={reduced} mobile={mobile} />
          </Suspense>
        ) : (
          <StaticFallback />
        )}
      </div>

      {/* Затемнение для читаемости текста */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink" />

      <motion.div
        style={reduced || mobile ? undefined : { x: titleX, y: titleY }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={ready ? { opacity: 1, letterSpacing: '0.35em' } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-sans text-[11px] uppercase text-gold sm:text-xs"
        >
          Бесагаш · Ресторан и банкеты
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[15vw] font-light leading-[0.9] tracking-tight text-ivory sm:text-[11vw] lg:text-[9rem]"
        >
          <span className="gold-text">АК</span>-САРАЙ
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={ready ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hairline my-7 h-px w-40 origin-center sm:w-64"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-display text-2xl italic text-ivory/90 sm:text-3xl"
        >
          Искусство особенных моментов
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/70 sm:text-base"
        >
          Пространство для незабываемых встреч, семейных торжеств и тёплых вечеров.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('reservations')}
            className="group relative overflow-hidden border border-gold bg-gold px-10 py-4 font-sans text-xs uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-transparent hover:text-gold min-h-[48px]"
          >
            <span className="relative z-10">Забронировать</span>
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="min-h-[48px] border border-ivory/30 px-10 py-4 font-sans text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            О ресторане
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="h-14 w-px origin-top animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  )
}
