import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react'
import { BUSINESS } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-espresso py-32 sm:py-44">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-6 font-sans text-[11px] uppercase tracking-[0.35em] text-gold">Контакты</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl font-light leading-[1.05] text-ivory sm:text-6xl">
              Ак-Сарай
            </h2>
          </Reveal>

          <div className="mt-14 space-y-10">
            <Reveal delay={0.2}>
              <div className="flex gap-5">
                <MapPin className="mt-1 shrink-0 text-gold" size={22} strokeWidth={1.2} />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/50">Адрес</p>
                  <p className="mt-2 font-display text-2xl text-ivory">{BUSINESS.address}</p>
                  <p className="mt-1 text-sm text-ivory/60">{BUSINESS.location}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex gap-5">
                <Clock className="mt-1 shrink-0 text-gold" size={22} strokeWidth={1.2} />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/50">Режим работы</p>
                  <p className="mt-2 font-display text-2xl text-ivory">{BUSINESS.hours}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex gap-5">
                <Phone className="mt-1 shrink-0 text-gold" size={22} strokeWidth={1.2} />
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/50">Телефон</p>
                  <a href={BUSINESS.phoneHref} className="mt-2 block font-display text-2xl text-ivory transition-colors hover:text-gold">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="group relative flex h-[420px] flex-col justify-between overflow-hidden border border-gold/20 bg-ink p-8 sm:h-[520px] sm:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(200,169,107,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.12) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/50 transition-transform duration-[1200ms] group-hover:scale-125" />
            <MapPin aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gold" size={28} strokeWidth={1.2} />

            <div className="relative">
              <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">Как добраться</p>
              <p className="mt-3 max-w-sm font-display text-2xl text-ivory">{BUSINESS.address}, {BUSINESS.location}</p>
            </div>

            <a
              href={BUSINESS.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex min-h-[52px] items-center gap-3 self-start border border-gold px-8 font-sans text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Открыть в Google Maps <ExternalLink size={14} strokeWidth={1.5} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
