import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/lib/nav";
import type { SiteConfig } from "@/lib/types";

export function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="border-t border-gold/20 bg-[#0c0508] paper-texture">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <Image
            src="/images/logo-gold.svg"
            alt="Bloggers Awards Kazakhstan"
            width={200}
            height={84}
            className="mb-4 h-14 w-auto"
          />
          <p className="max-w-sm text-sm leading-relaxed text-champagne/70">
            Официальный сайт премии блогеров, инфлюенсеров и креаторов Казахстана.
          </p>
          <p className="mt-4 text-sm text-gold">
            {site.eventDateLabel} · {site.city}
          </p>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg text-gold-light">Навигация</h3>
          <ul className="space-y-2 text-sm text-champagne/75">
            {mainNav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/uchastie" className="hover:text-gold">
                Участие
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg text-gold-light">Контакты</h3>
          <ul className="space-y-2 text-sm text-champagne/75">
            <li>
              <a href={site.instagram.author} target="_blank" rel="noreferrer" className="hover:text-gold">
                @akmaral_duisembaeva
              </a>
            </li>
            <li>
              <a href={site.instagram.das} target="_blank" rel="noreferrer" className="hover:text-gold">
                @das_mediakz
              </a>
            </li>
            <li>
              <a href={site.instagram.club} target="_blank" rel="noreferrer" className="hover:text-gold">
                @influencer.kz
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
          <p className="mt-6 text-xs text-champagne/45">
            Организаторы: DAS Media и Influencer Club
          </p>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-champagne/40">
        © {site.year} Bloggers Awards Kazakhstan. Все права защищены.
      </div>
    </footer>
  );
}
