"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: form.get("login"),
        password: form.get("password"),
      }),
    });
    const json = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(json.error || "Ошибка входа");
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4 border border-gold/30 bg-[#1a0a10] p-8"
      >
        <h1 className="font-display text-3xl text-gold">Админ-панель</h1>
        <p className="text-sm text-champagne/60">Bloggers Awards Kazakhstan</p>
        <label className="block text-sm">
          Логин
          <input
            name="login"
            required
            className="mt-2 w-full border border-gold/25 bg-ink px-3 py-3 outline-none focus:border-gold"
          />
        </label>
        <label className="block text-sm">
          Пароль
          <input
            name="password"
            type="password"
            required
            className="mt-2 w-full border border-gold/25 bg-ink px-3 py-3 outline-none focus:border-gold"
          />
        </label>
        {error && <p className="text-sm text-red-300">{error}</p>}
        <button type="submit" className="gold-btn w-full" disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </button>
      </form>
    </div>
  );
}
