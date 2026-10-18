export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function kes(cents: number) {
  return `KSh ${(cents / 100).toLocaleString("en-KE", {
    maximumFractionDigits: 0,
  })}`;
}

export function minToLabel(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const hh = h % 12 || 12;
  return `${hh}:${String(m).padStart(2, "0")} ${ampm}`;
}

export function durationLabel(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : h === 1 ? "1 hour" : `${h} hrs`;
}

export function dateLabel(date: string) {
  const [y, mo, d] = date.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d)).toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "Now" in Africa/Nairobi as a local Date (server runs UTC). */
export function nowNairobi() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi" }));
}

export function todayNairobiStr() {
  const n = nowNairobi();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}

export function minutesNowNairobi() {
  const n = nowNairobi();
  return n.getHours() * 60 + n.getMinutes();
}

export function bookingRef() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  for (let i = 0; i < 6; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return `LVS-${s}`;
}

export function giftCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = () =>
    Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `QUEEN-${part()}-${part()}`;
}

export function normalizePhone(p: string) {
  return p.replace(/[^0-9+]/g, "");
}
