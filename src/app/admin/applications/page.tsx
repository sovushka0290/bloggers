import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getApplications } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminApplicationsPage() {
  const role = await getAdminSession();
  if (!role) redirect("/admin/login");
  const apps = await getApplications();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/admin" className="text-sm text-gold">
        ← Назад
      </Link>
      <h1 className="font-display mt-4 text-4xl text-gold">Заявки</h1>

      <section className="mt-10">
        <h2 className="font-display text-2xl text-champagne">Партнёры</h2>
        <div className="mt-4 overflow-x-auto border border-gold/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-wine/30 text-gold">
              <tr>
                <th className="px-3 py-2">Дата</th>
                <th className="px-3 py-2">Компания</th>
                <th className="px-3 py-2">Контакт</th>
                <th className="px-3 py-2">Пакет</th>
                <th className="px-3 py-2">Статус</th>
              </tr>
            </thead>
            <tbody>
              {apps.partners.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-champagne/50">
                    Пока нет заявок
                  </td>
                </tr>
              )}
              {apps.partners.map((a) => (
                <tr key={a.id} className="border-t border-white/5">
                  <td className="px-3 py-2 whitespace-nowrap">
                    {new Date(a.createdAt).toLocaleString("ru-RU")}
                  </td>
                  <td className="px-3 py-2">{a.company}</td>
                  <td className="px-3 py-2">
                    {a.contactName}
                    <br />
                    {a.phone} · {a.email}
                  </td>
                  <td className="px-3 py-2">{a.package}</td>
                  <td className="px-3 py-2">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-champagne">Участники</h2>
        <div className="mt-4 overflow-x-auto border border-gold/20">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-wine/30 text-gold">
              <tr>
                <th className="px-3 py-2">Дата</th>
                <th className="px-3 py-2">ФИО</th>
                <th className="px-3 py-2">Instagram</th>
                <th className="px-3 py-2">Формат</th>
                <th className="px-3 py-2">Статус</th>
              </tr>
            </thead>
            <tbody>
              {apps.participants.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-champagne/50">
                    Пока нет заявок
                  </td>
                </tr>
              )}
              {apps.participants.map((a) => (
                <tr key={a.id} className="border-t border-white/5">
                  <td className="px-3 py-2 whitespace-nowrap">
                    {new Date(a.createdAt).toLocaleString("ru-RU")}
                  </td>
                  <td className="px-3 py-2">
                    {a.fullName}
                    <br />
                    {a.phone}
                  </td>
                  <td className="px-3 py-2">{a.instagram}</td>
                  <td className="px-3 py-2">{a.format}</td>
                  <td className="px-3 py-2">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
