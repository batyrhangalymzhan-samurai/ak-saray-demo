import { MessageCircle, Phone } from 'lucide-react'
import { BUSINESS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Reservations() {
  return (
    <section id="reservations" className="relative overflow-hidden bg-ink py-32 sm:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/15" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Бронирование</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-6xl font-light leading-[0.95] text-ivory sm:text-8xl">
            Создайте свой <span className="gold-text italic">особенный</span> вечер
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-ivory/65">
            Свяжитесь с нами удобным способом — ответим и подскажем, как лучше организовать ваш визит или торжество.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[56px] min-w-[260px] items-center justify-center gap-3 border border-gold bg-gold px-10 font-sans text-xs uppercase tracking-[0.25em] text-ink transition-all duration-500 hover:bg-transparent hover:text-gold"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Написать в WhatsApp
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="flex min-h-[56px] min-w-[260px] items-center justify-center gap-3 border border-ivory/30 px-10 font-sans text-xs uppercase tracking-[0.25em] text-ivory transition-all duration-500 hover:border-gold hover:text-gold"
            >
              <Phone size={18} strokeWidth={1.5} />
              Позвонить
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 font-sans text-sm tracking-wider text-ivory/50">{BUSINESS.phone}</p>
        </Reveal>
      </div>
    </section>
  )
}
