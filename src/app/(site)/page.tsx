import Link from "next/link";
import { Hero } from "@/components/Hero";
import { NominationCard } from "@/components/NominationCard";
import { formatTenge, getNominations, getSiteConfig } from "@/lib/data";

export default async function HomePage() {
  const [site, nominations] = await Promise.all([
    getSiteConfig(),
    getNominations(),
  ]);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero site={site} />

      {/* 2. «О ПРЕМИИ» Banner Bar */}
      <section className="relative z-10 -mt-2 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-[#f4ebe1] px-6 py-6 md:px-10 md:py-8 shadow-2xl text-ink">
            
            {/* Title with vertical divider */}
            <div className="flex items-center gap-6 shrink-0">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.12em] text-[#4d0b1a] uppercase whitespace-nowrap">
                О ПРЕМИИ
              </h2>
              <div className="hidden md:block h-12 w-px bg-[#4d0b1a]/25" />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-[#2a1b1e]/90 font-medium max-w-3xl">
              <strong className="text-[#4d0b1a]">Bloggers Awards Kazakhstan</strong> — масштабная национальная премия, признающая достижения лидеров мнений, развивающая культуру ответственного блогинга и формирующая профессиональное комьюнити инфлюенсеров страны.
            </p>

            {/* Arrow Button */}
            <Link
              href="/o-premii"
              aria-label="Подробнее о премии"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#4d0b1a]/30 bg-[#4d0b1a] text-[#f4ebe1] transition duration-300 hover:scale-105 hover:bg-[#6b1022] hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. «12 НОМИНАЦИЙ» Section */}
      <section id="nominacii" className="velvet-bg px-4 py-20 md:px-6">
        <div className="mx-auto max-w-7xl">
          
          {/* Centered Heading with Gold Lines */}
          <div className="mb-12 flex items-center justify-center gap-4 text-center">
            <span className="hidden sm:block h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-gold" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.22em] text-champagne uppercase font-medium">
              12 НОМИНАЦИЙ
            </h2>
            <span className="hidden sm:block h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* 12 Cards Grid: 6 columns on large screens */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
            {nominations.map((n) => (
              <NominationCard key={n.id} nomination={n} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/nominacii"
              className="inline-flex items-center gap-2 rounded-md border border-gold/50 bg-wine/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light transition duration-300 hover:bg-gold/20 hover:border-gold hover:text-white"
            >
              Все номинации и номинанты →
            </Link>
          </div>

        </div>
      </section>

      {/* 4. «АВТОРЫ И ОРГАНИЗАТОРЫ ПРОЕКТА» Section */}
      <section id="organizatory" className="relative overflow-hidden bg-[#f4ebe1] px-4 py-20 text-ink md:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-25 paper-texture" />

        <div className="relative mx-auto max-w-7xl">
          
          {/* Section Title */}
          <div className="mb-14 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.18em] text-[#4d0b1a] uppercase">
              АВТОРЫ И ОРГАНИЗАТОРЫ ПРОЕКТА
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Authors Grid */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            
            {/* Left Card: Автор проекта — Дуйсембаева Акмарал Серікқызы */}
            <div className="rounded-2xl border border-gold/40 bg-white/70 p-6 md:p-8 shadow-xl backdrop-blur-sm">
              <div className="grid gap-6 sm:grid-cols-12 items-center">
                
                {/* Photo */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-xl border border-gold/60 shadow-lg bg-[#2a050f]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/author-akmaral.jpg"
                      alt="Дуйсембаева Акмарал Серікқызы"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Info & Checklist */}
                <div className="sm:col-span-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b1028]">
                    Автор проекта
                  </p>
                  <h3 className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#4d0b1a] leading-tight">
                    ДУЙСЕНБАЕВА<br />
                    АКМАРАЛ<br />
                    СЕРІКҚЫЗЫ
                  </h3>

                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#2a1b1e]">
                    {[
                      "Автор проекта Bloggers Awards Kazakhstan",
                      "Основатель агентства DAS Media (7 лет на рынке)",
                      "Основатель сообщества Influencer Club (3 года развития)",
                      "Блогер-миллионник",
                      "Мама четверых детей",
                      "Член правления Ассоциации деловых женщин Казахстана",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#8b6a2e] font-bold text-xs">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-[#4d0b1a]/15 flex items-center gap-3">
                    <a
                      href={site.instagram.author}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8b1028] hover:text-[#4d0b1a]"
                    >
                      Instagram автора →
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Card: Со-организатор — Манепова (Моне) Алтынай */}
            <div className="rounded-2xl border border-gold/40 bg-white/70 p-6 md:p-8 shadow-xl backdrop-blur-sm">
              <div className="grid gap-6 sm:grid-cols-12 items-center">
                
                {/* Photo */}
                <div className="sm:col-span-5 flex justify-center">
                  <div className="relative aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-xl border border-gold/60 shadow-lg bg-[#2a050f]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/coorganizer-altynai.jpg"
                      alt="Манепова (Моне) Алтынай"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Info & Checklist */}
                <div className="sm:col-span-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b1028]">
                    Со-организатор проекта
                  </p>
                  <h3 className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#4d0b1a] leading-tight">
                    МАНЕПОВА<br />
                    АЛТЫНАЙ
                  </h3>
                  <p className="text-xs text-[#8b6a2e] font-medium tracking-wide">
                    (Моне Алтынай)
                  </p>

                  <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-[#2a1b1e]">
                    {[
                      "Со-организатор проекта Bloggers Awards Kazakhstan",
                      "Директор департамента Influence Marketing в агентстве DAS Media",
                      "Блогер",
                      "Маркетолог",
                      "Эксперт в сфере инфлюенсер-маркетинга и развития личного бренда",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-[#8b6a2e] font-bold text-xs">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-[#4d0b1a]/15 flex items-center gap-3">
                    <Link
                      href="/organizatory"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8b1028] hover:text-[#4d0b1a]"
                    >
                      Об организаторах →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Organizers Cards (DAS Media & Influencer Club) */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            
            {/* DAS MEDIA */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-[#3b0816] to-[#20040b] p-7 md:p-8 text-champagne shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-[0.14em] text-champagne">
                  DAS MEDIA
                </h3>
                <span className="rounded-full border border-gold/60 bg-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
                  7 ЛЕТ НА РЫНКЕ
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-gold-light leading-snug">
                Маркетинговое, influencer marketing и digital-агентство полного цикла.
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-champagne/75">
                SMM · PR · Инфлюенсер-маркетинг · Продакшн под ключ · Контент · Мероприятия · Подкасты · Собственная фотостудия DAS Photostudio
              </p>
              <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between">
                <a
                  href={site.instagram.das}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-light"
                >
                  @das_mediakz →
                </a>
              </div>
            </div>

            {/* INFLUENCER CLUB */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-[#3b0816] to-[#20040b] p-7 md:p-8 text-champagne shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-[0.14em] text-champagne">
                  INFLUENCER CLUB
                </h3>
                <span className="rounded-full border border-gold/60 bg-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-light">
                  3 ГОДА РАЗВИТИЯ
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-gold-light leading-snug">
                Сообщество для блогеров, инфлюенсеров и предпринимателей.
              </p>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-champagne/75">
                Обучение · Нетворкинг · Встречи с экспертами · Развитие личного бренда · Фотосессии · Сотрудничество с брендами
              </p>
              <div className="mt-6 pt-4 border-t border-gold/20 flex items-center justify-between">
                <a
                  href={site.instagram.club}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-light"
                >
                  @influencer.kz →
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Participation / Tickets CTA Section */}
      <section className="velvet-bg border-t border-gold/20 px-4 py-20 text-center md:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">
            Участие в премии
          </p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-champagne">
            Стоимость билета — {formatTenge(site.participationFee)}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-champagne/75">
            Красная дорожка в стиле Met Gala, профессиональная фото- и видеосъёмка, торжественная церемония награждения, гала-ужин, шоу-программа и эксклюзивные подарки от партнёров.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/uchastie"
              className="rounded-md bg-gradient-to-r from-[#d4af37] via-[#eed8a1] to-[#c29c3d] px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#1a050c] shadow-lg shadow-gold/25 transition duration-300 hover:brightness-110 hover:-translate-y-0.5"
            >
              Подать заявку на участие
            </Link>
            <Link
              href="/partnery#zayavka"
              className="rounded-md border border-gold/70 bg-black/40 px-8 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold-light transition duration-300 hover:bg-gold/20 hover:text-white hover:-translate-y-0.5"
            >
              Стать партнёром
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
