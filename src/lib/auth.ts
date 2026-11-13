import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import type { AdminRole } from "./types";

const COOKIE = "bak_admin_session";

function secret() {
  return process.env.ADMIN_SECRET || "bloggers-awards-dev-secret-change-me";
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

export function createSessionToken(role: AdminRole) {
  const exp = Date.now() + 1000 * 60 * 60 * 12;
  const payload = `${role}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token?: string | null): AdminRole | null {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [role, exp, sig] = parts;
  if (role !== "admin" && role !== "content") return null;
  const payload = `${role}.${exp}`;
  const expected = sign(payload);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }
  if (Number(exp) < Date.now()) return null;
  return role;
}

export async function getAdminSession(): Promise<AdminRole | null> {
  const jar = await cookies();
  return verifySessionToken(jar.get(COOKIE)?.value);
}

export function sessionCookieName() {
  return COOKIE;
}

export function checkCredentials(login: string, password: string): AdminRole | null {
  const adminLogin = process.env.ADMIN_LOGIN || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "admin2026";
  const contentLogin = process.env.CONTENT_LOGIN || "editor";
  const contentPass = process.env.CONTENT_PASSWORD || "editor2026";

  if (login === adminLogin && password === adminPass) return "admin";
  if (login === contentLogin && password === contentPass) return "content";
  return null;
}
