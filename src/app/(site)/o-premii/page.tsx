import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { getSiteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "О премии",
};

export default async function AboutPage() {
  const site = await getSiteConfig();

  return (
    <div className="velvet-bg paper-texture pt-28">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow={`${site.eventDateLabel} · ${site.city}`}
          title="О премии"
          description="Bloggers Awards Kazakhstan — масштабная премия, объединяющая ведущих блогеров, инфлюенсеров, экспертов, предпринимателей и создателей цифрового контента Казахстана."
        />
        <div className="gold-frame space-y-6 bg-wine/25 p-8 text-base leading-relaxed text-champagne/80 md:p-10 md:text-lg">
          <p>
            Премия создана для признания достижений лидеров мнений, поддержки талантливых авторов и
            развития профессиональной блогерской индустрии страны.
          </p>
          <p>
            Миссия — формирование культуры ответственного блогинга, продвижение правильных ценностей,
            развитие профессионального сообщества и повышение значимости инфлюенсеров. Премия
            объединяет людей, бренды, бизнес и новые возможности.
          </p>
          <p className="font-display text-2xl text-gold">
            Стиль мероприятия — {site.style}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Красная дорожка",
              text: "Профессиональная фото- и видеосъёмка участников и гостей.",
            },
            {
              title: "Церемония",
              text: "Награждение и шоу-программа в премиальной эстетике.",
            },
            {
              title: "Гала-ужин",
              text: "Нетворкинг и подарки от партнёров премии.",
            },
          ].map((item) => (
            <article key={item.title} className="gold-frame bg-burgundy/50 p-6">
              <h3 className="font-display text-xl text-gold-light">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-champagne/70">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link href="/nominacii" className="gold-btn">
            Номинации
          </Link>
          <Link href="/uchastie" className="ghost-btn">
            Участие
          </Link>
        </div>
      </section>
    </div>
  );
}
