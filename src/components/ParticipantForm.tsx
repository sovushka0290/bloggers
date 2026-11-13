"use client";

import { FormEvent, useState } from "react";

export function ParticipantForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/applications/participant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Ошибка отправки");
      setStatus("ok");
      setMessage("Заявка принята. Организаторы свяжутся с вами.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Не удалось отправить");
    }
  }

  return (
    <form onSubmit={onSubmit} className="gold-frame space-y-4 bg-burgundy/50 p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="ФИО" name="fullName" required />
        <Field label="Instagram" name="instagram" required placeholder="@username" />
        <Field label="Телефон" name="phone" type="tel" required />
        <label className="block text-sm text-champagne/80">
          Формат участия
          <select
            name="format"
            required
            className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
            defaultValue="participant"
          >
            <option value="participant">Участник премии</option>
            <option value="nominee">Номинант</option>
            <option value="guest">Гость / гала-ужин</option>
          </select>
        </label>
      </div>
      <label className="block text-sm text-champagne/80">
        Комментарий
        <textarea
          name="comment"
          rows={4}
          className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
        />
      </label>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <button type="submit" className="gold-btn" disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Оставить заявку"}
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm text-champagne/80">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-gold/30 bg-ink/60 px-3 py-3 text-champagne outline-none focus:border-gold"
      />
    </label>
  );
}
