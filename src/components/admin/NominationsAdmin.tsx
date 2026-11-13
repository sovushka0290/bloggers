"use client";

import { useMemo, useState } from "react";
import type { Nomination, Nominee } from "@/lib/types";

export function NominationsAdmin({ initial }: { initial: Nomination[] }) {
  const [list, setList] = useState(initial);
  const [activeId, setActiveId] = useState(initial[0]?.id || "");
  const [status, setStatus] = useState("");
  const active = useMemo(
    () => list.find((n) => n.id === activeId) || list[0],
    [list, activeId],
  );

  function updateActive(patch: Partial<Nomination>) {
    if (!active) return;
    setList((prev) =>
      prev.map((n) => (n.id === active.id ? { ...n, ...patch } : n)),
    );
  }

  function updateNominee(nomineeId: string, patch: Partial<Nominee>) {
    if (!active) return;
    updateActive({
      nominees: active.nominees.map((n) =>
        n.id === nomineeId ? { ...n, ...patch } : n,
      ),
    });
  }

  function addNominee() {
    if (!active) return;
    const nominee: Nominee = {
      id: crypto.randomUUID(),
      name: "Новый номинант",
      instagram: "",
      bio: "",
      photo: "",
      order: active.nominees.length + 1,
      isWinner: false,
    };
    updateActive({ nominees: [...active.nominees, nominee] });
  }

  function removeNominee(id: string) {
    if (!active) return;
    updateActive({ nominees: active.nominees.filter((n) => n.id !== id) });
  }

  function moveNominee(id: string, dir: -1 | 1) {
    if (!active) return;
    const sorted = [...active.nominees].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((n) => n.id === id);
    const swap = idx + dir;
    if (swap < 0 || swap >= sorted.length) return;
    const a = sorted[idx];
    const b = sorted[swap];
    const orderA = a.order;
    a.order = b.order;
    b.order = orderA;
    updateActive({ nominees: sorted });
  }

  async function save() {
    setStatus("Сохранение...");
    const res = await fetch("/api/admin/nominations", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(list),
    });
    setStatus(res.ok ? "Сохранено" : "Ошибка сохранения");
  }

  if (!active) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="space-y-2">
        {list
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActiveId(n.id)}
              className={`block w-full border px-3 py-3 text-left text-sm ${
                n.id === active.id
                  ? "border-gold bg-wine/40 text-gold"
                  : "border-white/10 text-champagne/70"
              }`}
            >
              {n.code} {n.title}
            </button>
          ))}
      </aside>

      <div className="space-y-6 border border-gold/20 bg-[#1a0a10] p-5">
        <div className="grid gap-3 md:grid-cols-2">
          <label className="text-sm">
            Название
            <input
              value={active.title}
              onChange={(e) => updateActive({ title: e.target.value })}
              className="mt-1 w-full border border-gold/20 bg-ink px-3 py-2"
            />
          </label>
          <label className="text-sm">
            Подзаголовок
            <input
              value={active.subtitle}
              onChange={(e) => updateActive({ subtitle: e.target.value })}
              className="mt-1 w-full border border-gold/20 bg-ink px-3 py-2"
            />
          </label>
        </div>
        <label className="block text-sm">
          Описание
          <textarea
            value={active.description}
            onChange={(e) => updateActive({ description: e.target.value })}
            rows={3}
            className="mt-1 w-full border border-gold/20 bg-ink px-3 py-2"
          />
        </label>

        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-2xl text-champagne">Номинанты</h2>
          <button type="button" onClick={addNominee} className="ghost-btn !py-2 text-sm">
            + Добавить
          </button>
        </div>

        <div className="space-y-4">
          {[...active.nominees]
            .sort((a, b) => a.order - b.order)
            .map((nominee) => (
              <div key={nominee.id} className="border border-white/10 p-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={nominee.name}
                    onChange={(e) => updateNominee(nominee.id, { name: e.target.value })}
                    placeholder="Имя"
                    className="border border-gold/20 bg-ink px-3 py-2"
                  />
                  <input
                    value={nominee.instagram}
                    onChange={(e) =>
                      updateNominee(nominee.id, { instagram: e.target.value })
                    }
                    placeholder="@instagram"
                    className="border border-gold/20 bg-ink px-3 py-2"
                  />
                  <input
                    value={nominee.photo}
                    onChange={(e) => updateNominee(nominee.id, { photo: e.target.value })}
                    placeholder="/images/nominees/..."
                    className="border border-gold/20 bg-ink px-3 py-2 md:col-span-2"
                  />
                  <textarea
                    value={nominee.bio}
                    onChange={(e) => updateNominee(nominee.id, { bio: e.target.value })}
                    placeholder="Краткая биография"
                    rows={2}
                    className="border border-gold/20 bg-ink px-3 py-2 md:col-span-2"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <label className="flex items-center gap-2 text-sm text-gold">
                    <input
                      type="checkbox"
                      checked={!!nominee.isWinner}
                      onChange={(e) =>
                        updateNominee(nominee.id, { isWinner: e.target.checked })
                      }
                    />
                    WINNER 2026
                  </label>
                  <button
                    type="button"
                    className="text-xs text-champagne/60"
                    onClick={() => moveNominee(nominee.id, -1)}
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    className="text-xs text-champagne/60"
                    onClick={() => moveNominee(nominee.id, 1)}
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    className="ml-auto text-xs text-red-300"
                    onClick={() => removeNominee(nominee.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-4">
          <button type="button" onClick={save} className="gold-btn">
            Сохранить
          </button>
          {status && <span className="text-sm text-champagne/70">{status}</span>}
        </div>
      </div>
    </div>
  );
}
