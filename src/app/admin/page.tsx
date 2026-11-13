import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getApplications, getNominations, getPartners, getGallery } from "@/lib/data";

export default async function AdminHomePage() {
  const role = await getAdminSession();
  if (!role) redirect("/admin/login");

  const [nominations, apps, partners, gallery] = await Promise.all([
    getNominations(),
    getApplications(),
    getPartners(),
    getGallery(),
  ]);

  const nomineesCount = nominations.reduce((acc, n) => acc + n.nominees.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl text-gold">Панель управления</h1>
          <p className="mt-1 text-sm text-champagne/60">
            Роль: {role === "admin" ? "Администратор" : "Контент-менеджер"}
          </p>
        </div>
        <form action="/api/admin/logout" method="post">
          <LogoutButton />
        </form>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Номинации", value: nominations.length },
          { label: "Номинанты", value: nomineesCount },
          { label: "Заявки партнёров", value: apps.partners.length },
          { label: "Заявки участников", value: apps.participants.length },
        ].map((card) => (
          <div key={card.label} className="border border-gold/25 bg-[#1a0a10] p-5">
            <p className="text-xs tracking-[0.2em] text-gold/70">{card.label}</p>
            <p className="font-display mt-2 text-4xl text-champagne">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <AdminLink href="/admin/nominations" title="Номинации и номинанты" text="Добавление, редактирование, порядок и WINNER 2026" />
        <AdminLink href="/admin/applications" title="Заявки" text="Партнёры и участники премии" />
        <AdminLink href="/admin/partners" title="Партнёры" text={`Логотипы и описание · сейчас ${partners.length}`} />
        <AdminLink href="/admin/gallery" title="Галерея" text={`Медиа-контент · сейчас ${gallery.length}`} />
      </div>
    </div>
  );
}

function AdminLink({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link href={href} className="border border-gold/25 bg-[#1a0a10] p-6 transition hover:border-gold">
      <h2 className="font-display text-2xl text-champagne">{title}</h2>
      <p className="mt-2 text-sm text-champagne/60">{text}</p>
    </Link>
  );
}

function LogoutButton() {
  return (
    <button
      formAction={async () => {
        "use server";
        const { cookies } = await import("next/headers");
        const { sessionCookieName } = await import("@/lib/auth");
        const jar = await cookies();
        jar.set(sessionCookieName(), "", { path: "/", maxAge: 0 });
        redirect("/admin/login");
      }}
      className="ghost-btn !py-2 text-sm"
    >
      Выйти
    </button>
  );
}
