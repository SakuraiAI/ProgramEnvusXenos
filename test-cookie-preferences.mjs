import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";
import { COOKIE_PREFERENCES_KEY, COOKIE_PREFERENCES_TTL, parseCookiePreferences, createCookiePreferences, readCookiePreferences, saveCookiePreferences, canLoadGoogleMap } from "./src/cookiePreferencesModel.js";

const now = 1_800_000_000_000;
const storage = () => { const data = new Map(); return { getItem:key => data.get(key) ?? null, setItem:(key,value) => data.set(key,value) }; };

test("acceptance and rejection expire equally and never extend merely by reading", () => {
 for (const accepted of [true, false]) {
  const record = createCookiePreferences(accepted, now), raw = JSON.stringify(record);
  assert.equal(record.expiresAt, now + COOKIE_PREFERENCES_TTL);
  assert.deepEqual(parseCookiePreferences(raw, now + 60_000), record);
  assert.equal(parseCookiePreferences(raw, record.expiresAt), null);
  assert.equal(canLoadGoogleMap(record, record.expiresAt), false);
 }
});

test("missing, malformed, future and unsupported records never authorize a map", () => {
 const valid = createCookiePreferences(true, now);
 for (const value of [null, "broken", "[]", "true", "{}", JSON.stringify({...valid,maps:"true"}), JSON.stringify({...valid,version:2}), JSON.stringify({...valid,savedAt:now+1}), JSON.stringify({...valid,expiresAt:now+COOKIE_PREFERENCES_TTL+1})]) {
  assert.equal(parseCookiePreferences(value, now), null);
 }
 assert.equal(canLoadGoogleMap(null, now), false);
});

test("revoking replaces permission and storage failures do not silently authorize", () => {
 const store = storage();
 assert.equal(readCookiePreferences(store, now), null);
 assert.equal(saveCookiePreferences(store, createCookiePreferences(true, now)), true);
 assert.equal(canLoadGoogleMap(readCookiePreferences(store, now), now), true);
 saveCookiePreferences(store, createCookiePreferences(false, now));
 assert.equal(canLoadGoogleMap(readCookiePreferences(store, now), now), false);
 const denied = { getItem(){ throw Error("blocked"); }, setItem(){ throw Error("blocked"); } };
 assert.equal(readCookiePreferences(denied, now), null);
 assert.equal(saveCookiePreferences(denied, createCookiePreferences(true, now)), false);
});

test("the rendered map has no iframe before opt-in, after rejection, expiry or revocation", async () => {
 const server = await createServer({ server:{ middlewareMode:true, hmr:false }, appType:"custom" });
 const priorWindow = globalThis.window;
 try {
  const {CookiePreferencesProvider,GoogleMapEmbed} = await server.ssrLoadModule("/src/CookiePreferences.jsx");
  const store=storage();globalThis.window={localStorage:store};
  const html = () => renderToStaticMarkup(createElement(CookiePreferencesProvider,null,createElement(GoogleMapEmbed,{query:"Horomerice"})));
  assert.doesNotMatch(html(), /<iframe/);
  saveCookiePreferences(store,createCookiePreferences(false));
  assert.doesNotMatch(html(), /<iframe/);
  saveCookiePreferences(store,createCookiePreferences(true));
  assert.match(html(), /<iframe[^>]+src="https:\/\/maps\.google\.com\/maps/);
  saveCookiePreferences(store,createCookiePreferences(false));
  assert.doesNotMatch(html(), /<iframe/);
  saveCookiePreferences(store,createCookiePreferences(true,Date.now()-COOKIE_PREFERENCES_TTL-1));
  assert.doesNotMatch(html(), /<iframe/);
  store.setItem(COOKIE_PREFERENCES_KEY,"not-json");
  assert.doesNotMatch(html(), /<iframe/);
 } finally { globalThis.window=priorWindow;await server.close(); }
});

test("published font styles reference only bundled font assets", async () => {
 const css=await readFile(new URL("./public/fonts/pgex-fonts.css",import.meta.url),"utf8");
 const urls=[...css.matchAll(/url\(([^)]+)\)/g)].map(match=>match[1]);
 assert.ok(urls.length>=12);
 for(const url of new Set(urls)) {
  assert.match(url,/^\/fonts\/[^/]+\.woff2$/);
  const bytes=await readFile(new URL("./public"+url,import.meta.url));
  assert.equal(bytes.subarray(0,4).toString(),"wOF2");
 }
 const entry=await readFile(new URL("./src/index.css",import.meta.url),"utf8");
 assert.doesNotMatch(entry,/fonts\.(googleapis|gstatic)\.com/);
});
