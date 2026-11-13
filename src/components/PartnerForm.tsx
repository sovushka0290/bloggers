"use client";

import { FormEvent, useState } from "react";

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/applications/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Ошибка отправки");
      setStatus("ok");
      setMessage("Заявка отправлена. Мы свяжемся с вами.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Не удалось отправить");
    }
  }

  return (
    <form onSubmit={onSubmit} className="gold-frame space-y-4 bg-burgundy/50 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Компания" name="company" required />
        <Field label="Контактное лицо" name="contactName" required />
        <Field label="Телефон" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <label className="block text-sm text-champagne/80">
        Пакет
        <select
          name="package"
          required
          className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
          defaultValue="official"
        >
          <option value="general">Генеральный спонсор — 4 000 000 ₸</option>
          <option value="official">Официальный спонсор — 2 000 000 ₸</option>
          <option value="other">Другое / обсудить</option>
        </select>
      </label>
      <label className="block text-sm text-champagne/80">
        Комментарий
        <textarea
          name="comment"
          rows={4}
          className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
        />
      </label>
      {/* honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" className="gold-btn" disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Отправить заявку"}
      </button>
      {message && (
        <p className={`text-sm ${status === "ok" ? "text-gold" : "text-red-300"}`}>{message}</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm text-champagne/80">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
      />
    </label>
  );
}
