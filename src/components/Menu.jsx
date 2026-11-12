import { MENU_CATEGORIES } from '../data.js'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

export default function Menu() {
  return (
    <section id="menu" className="relative bg-ink py-32 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Меню</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl font-light leading-[1.02] text-ivory sm:text-7xl">
                Вкус каждого <span className="italic text-gold">мгновения</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-ivory/55">
              Полный состав и цены уточняйте у администратора. Блюда халяль.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {MENU_CATEGORIES.map((cat, i) => {
            const layout =
              i === 0 ? 'lg:col-span-7 lg:row-span-2 h-[480px] lg:h-[640px]'
              : i === 1 ? 'lg:col-span-5 h-[300px]'
              : i === 2 ? 'lg:col-span-5 h-[300px]'
              : 'lg:col-span-6 h-[260px]'
            return (
              <Reveal key={cat.title} delay={i * 0.08} className={layout}>
                <TiltCard strength={5} className="group relative h-full w-full border border-gold/10">
                  <img
                    src={cat.image}
                    alt={`${cat.title} (иллюстрация)`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-opacity duration-700 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold">Категория</p>
                    <h3 className="mt-2 font-display text-3xl font-light text-ivory sm:text-4xl">{cat.title}</h3>
                    <p className="mt-2 max-w-sm text-sm text-ivory/60 opacity-0 transition-all duration-700 group-hover:opacity-100">
                      {cat.text}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
