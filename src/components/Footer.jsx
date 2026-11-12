import { BUSINESS, NAV_ITEMS } from '../data.js'

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-gold/10 bg-ink px-6 py-16 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-[0.2em] text-ivory">
            АК<span className="text-gold">—</span>САРАЙ
          </p>
          <p className="mt-3 text-sm text-ivory/50">Ресторан и банкетный зал</p>
        </div>

        <nav aria-label="Навигация в подвале" className="grid grid-cols-2 gap-x-12 gap-y-3">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="min-h-[40px] text-left font-sans text-xs uppercase tracking-[0.2em] text-ivory/60 transition-colors hover:text-gold"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-2 text-sm text-ivory/60">
          <a href={BUSINESS.phoneHref} className="block transition-colors hover:text-gold">{BUSINESS.phone}</a>
          <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-gold">WhatsApp</a>
          <p>{BUSINESS.address}</p>
          <p>Круглосуточно</p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-gold/10 pt-8 text-xs text-ivory/35 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Ак-Сарай</p>
        <p>Неофициальный демонстрационный концепт сайта.</p>
      </div>
    </footer>
  )
}
