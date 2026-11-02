export const COOKIE_PREFERENCES_KEY = "pgex-cookie-preferences-v1";
export const COOKIE_PREFERENCES_VERSION = 1;
export const COOKIE_PREFERENCES_TTL = 180 * 24 * 60 * 60 * 1000;

export function parseCookiePreferences(raw, now = Date.now()) {
 try {
  const value = JSON.parse(raw);
  if (!value || typeof value !== "object" || Array.isArray(value) ||
      value.version !== COOKIE_PREFERENCES_VERSION || typeof value.maps !== "boolean" ||
      !Number.isFinite(value.savedAt) || !Number.isFinite(value.expiresAt) ||
      value.savedAt > now || value.expiresAt <= now ||
      value.expiresAt - value.savedAt !== COOKIE_PREFERENCES_TTL) return null;
  return { version: value.version, maps: value.maps, savedAt: value.savedAt, expiresAt: value.expiresAt };
 } catch { return null; }
}

export function createCookiePreferences(maps, now = Date.now()) {
 return { version: COOKIE_PREFERENCES_VERSION, maps: maps === true, savedAt: now, expiresAt: now + COOKIE_PREFERENCES_TTL };
}

export function readCookiePreferences(storage, now = Date.now()) {
 try { return parseCookiePreferences(storage?.getItem(COOKIE_PREFERENCES_KEY), now); }
 catch { return null; }
}

export function saveCookiePreferences(storage, value) {
 try { storage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(value)); return true; }
 catch { return false; }
}

export function canLoadGoogleMap(choice, now = Date.now()) {
 return parseCookiePreferences(JSON.stringify(choice), now)?.maps === true;
}
