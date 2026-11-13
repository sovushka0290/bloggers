import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Контакты",
};

export const dynamic = "force-static";

export default async function ContactsPage() {
  const site = await getSiteConfig();

  return (
    <div className="velvet-bg paper-texture pt-28">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Bloggers Awards Kazakhstan"
          title="Контакты"
          description={`${site.eventDateLabel}, ${site.city}. Организаторы — DAS Media и Influencer Club.`}
        />

        <div className="gold-frame space-y-6 bg-wine/30 p-8 md:p-10">
          <div>
            <p className="text-xs tracking-[0.2em] text-gold">INSTAGRAM</p>
            <ul className="mt-3 space-y-2 text-champagne/85">
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
              {site.instagram.official && (
                <li>
                  <a
                    href={site.instagram.official}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold"
                  >
                    Официальный аккаунт премии
                  </a>
                </li>
              )}
            </ul>
          </div>

          {(site.phone || site.whatsapp || site.email) && (
            <div>
              <p className="text-xs tracking-[0.2em] text-gold">СВЯЗЬ</p>
              <ul className="mt-3 space-y-2 text-champagne/85">
                {site.phone && <li>Телефон: {site.phone}</li>}
                {site.whatsapp && (
                  <li>
                    <a
                      href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gold"
                    >
                      WhatsApp
                    </a>
                  </li>
                )}
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`} className="hover:text-gold">
                      {site.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/partnery#zayavka" className="gold-btn">
              Стать партнёром
            </a>
            <a href="/uchastie" className="ghost-btn">
              Заявка на участие
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
