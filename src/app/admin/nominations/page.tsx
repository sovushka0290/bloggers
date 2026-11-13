import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminSession } from "@/lib/auth";
import { getNominations } from "@/lib/data";
import { NominationsAdmin } from "@/components/admin/NominationsAdmin";

export default async function AdminNominationsPage() {
  const role = await getAdminSession();
  if (!role) redirect("/admin/login");
  const nominations = await getNominations();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/admin" className="text-sm text-gold">
        ← Назад
      </Link>
      <h1 className="font-display mt-4 text-4xl text-gold">Номинации и номинанты</h1>
      <p className="mt-2 text-sm text-champagne/60">
        Управляйте карточками, Instagram, фото и порядком. Отметка WINNER 2026 доступна для каждого
        номинанта.
      </p>
      <div className="mt-8">
        <NominationsAdmin initial={nominations} />
      </div>
    </div>
  );
}
