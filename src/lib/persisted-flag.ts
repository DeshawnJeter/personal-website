const PREFIX = "cathedral:";

export function getFlag(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(PREFIX + key) === "1";
  } catch {
    return false;
  }
}

export function setFlag(key: string, value = true): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFIX + key, value ? "1" : "0");
  } catch {
    // localStorage unavailable (private mode, disabled) — fail silently,
    // the flag simply won't persist across visits.
  }
}
