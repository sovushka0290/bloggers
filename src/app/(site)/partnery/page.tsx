import type { Metadata } from "next";
import { PartnerForm } from "@/components/PartnerForm";
import { SectionHeading } from "@/components/SectionHeading";
import { getPartners } from "@/lib/data";

export const metadata: Metadata = {
  title: "Партнёры",
};

export const dynamic = "force-static";

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div className="bg-[#12060b] pt-28">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Спонсорство"
          title="Партнёры и спонсоры"
          description="Станьте частью национальной премии: LED-экраны, публикации, Reels, рекламные материалы и интеграции в программу."
        />

        <div className="mb-14 grid gap-5 md:grid-cols-2">
          <article className="gold-frame bg-gradient-to-br from-wine/50 to-burgundy/60 p-8">
            <p className="text-xs tracking-[0.25em] text-gold">ГЕНЕРАЛЬНЫЙ СПОНСОР</p>
            <p className="font-display mt-4 text-4xl gold-text">4 000 000 ₸</p>
            <p className="mt-4 text-sm leading-relaxed text-champagne/70">
              Максимальная видимость бренда на сцене, в медиа и digital-интеграциях премии.
              Точный состав пакета предоставляется организаторами отдельно.
            </p>
          </article>
          <article className="gold-frame bg-wine/35 p-8">
            <p className="text-xs tracking-[0.25em] text-gold">ОФИЦИАЛЬНЫЙ СПОНСОР</p>
            <p className="font-display mt-4 text-4xl text-champagne">2 000 000 ₸</p>
            <p className="mt-4 text-sm leading-relaxed text-champagne/70">
              Сильный пакет присутствия: публикации, Reels, материалы и участие в программе
              мероприятия.
            </p>
          </article>
        </div>

        {partners.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display mb-6 text-center text-2xl text-gold-light">Наши партнёры</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {partners.map((p) => (
                <div
                  key={p.id}
                  className="flex aspect-[3/2] items-center justify-center gold-frame bg-ink/40 p-4"
                >
                  {p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} className="max-h-16 object-contain" />
                  ) : (
                    <span className="text-sm text-champagne/60">{p.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div id="zayavka" className="mx-auto max-w-3xl scroll-mt-28">
          <SectionHeading
            eyebrow="Заявка"
            title="Стать партнёром"
            description="Оставьте заявку — организаторы свяжутся с вами для согласования пакета."
          />
          <PartnerForm />
        </div>
      </section>
    </div>
  );
}
