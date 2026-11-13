import type { Metadata } from "next";
import { ParticipantForm } from "@/components/ParticipantForm";
import { SectionHeading } from "@/components/SectionHeading";
import { formatTenge, getSiteConfig } from "@/lib/data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Участие",
};

export default async function ParticipationPage() {
  const site = await getSiteConfig();

  return (
    <div className="velvet-bg paper-texture pt-28">
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Участие в премии"
          title={formatTenge(site.participationFee)}
          description="Онлайн-оплата на первом этапе необязательна — заявки поступают организаторам."
        />

        <ul className="mb-12 grid gap-3 md:grid-cols-2">
          {[
            "Участие в премии",
            "Профессиональная фото- и видеосъёмка",
            "Шоу-программа",
            "Гала-ужин",
            "Подарки партнёров",
          ].map((item) => (
            <li key={item} className="gold-frame bg-wine/25 px-5 py-4 text-sm text-champagne/80">
              {item}
            </li>
          ))}
        </ul>

        <ParticipantForm />
      </section>
    </div>
  );
}
