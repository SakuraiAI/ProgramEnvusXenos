import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { COOKIE_PREFERENCES_KEY, canLoadGoogleMap, createCookiePreferences, readCookiePreferences, saveCookiePreferences } from "./cookiePreferencesModel.js";
import "./cookie-preferences.css";

const CookieContext = createContext({ mapsAllowed: false, openPreferences: () => {} });
function localStorageOrNull() { try { return window.localStorage; } catch { return null; } }

export function CookiePreferencesProvider({ children }) {
 const [choice, setChoice] = useState(() => readCookiePreferences(localStorageOrNull()));
 const [settingsOpen, setSettingsOpen] = useState(false);
 const [mapSelection, setMapSelection] = useState(false);
 const [stored, setStored] = useState(true);
 const dialog = useRef(null), dialogTitle = useRef(null), trigger = useRef(null);
 const mapsAllowed = canLoadGoogleMap(choice);

 const openPreferences = useCallback(element => {
  trigger.current = element || document.activeElement;
  setMapSelection(canLoadGoogleMap(choice));
  setSettingsOpen(true);
 }, [choice]);
 const closePreferences = useCallback(() => setSettingsOpen(false), []);
 const choose = useCallback(maps => {
  const next = createCookiePreferences(maps);
  setStored(saveCookiePreferences(localStorageOrNull(), next));
  setChoice(next);
  setSettingsOpen(false);
 }, []);

 useEffect(() => {
  if (!settingsOpen) return;
  const node = dialog.current;
  node.showModal();
  dialogTitle.current?.focus();
  return () => { node.close(); if (trigger.current?.isConnected) trigger.current.focus(); };
 }, [settingsOpen]);

 useEffect(() => {
  // A changed choice in another tab also removes an already mounted map here.
  const sync = event => {
   if (event.key === COOKIE_PREFERENCES_KEY || event.key === null) setChoice(readCookiePreferences(localStorageOrNull()));
  };
  const checkExpiry = () => setChoice(previous => previous && previous.expiresAt <= Date.now() ? null : previous);
  window.addEventListener("storage", sync);
  window.addEventListener("focus", checkExpiry);
  const timer = window.setInterval(checkExpiry, 60_000);
  return () => { window.removeEventListener("storage", sync); window.removeEventListener("focus", checkExpiry); window.clearInterval(timer); };
 }, []);

 return <CookieContext.Provider value={{ mapsAllowed, openPreferences }}>
  {children}
  {!choice && <section className="cookie-banner" aria-label="Soukromí a cookies">
   <div><h2>Vaše soukromí</h2><p>Web funguje bez sledovacích cookies. Google mapu načteme jen s vaším svolením; při načtení získá Google také vaši IP adresu. <a href="/cookies.html">Podrobnosti o cookies</a></p></div>
   <div className="cookie-actions"><button type="button" onClick={() => choose(false)}>Pouze nezbytné</button><button type="button" onClick={() => choose(true)}>Povolit Google mapu</button><button type="button" className="cookie-text-button" onClick={event => openPreferences(event.currentTarget)}>Nastavení</button></div>
  </section>}
  <dialog className="cookie-dialog" ref={dialog} aria-labelledby="cookie-settings-title" onCancel={event => { event.preventDefault(); closePreferences(); }}>
   <header><h2 id="cookie-settings-title" tabIndex={-1} ref={dialogTitle}>Nastavení soukromí</h2><button type="button" className="cookie-dialog-close" aria-label="Zavřít nastavení soukromí" onClick={closePreferences}>×</button></header>
   <p>Rozhodnutí můžete kdykoli změnit v patičce webu. Volitelné mapy nejsou potřeba k odeslání servisní poptávky.</p>
   <div className="cookie-category"><div><h3>Nezbytné úložiště</h3><p>Pamatuje tuto volbu po dobu 180 dnů. Nepoužívá se pro reklamu ani měření návštěvnosti.</p></div><span className="cookie-always">Vždy aktivní</span></div>
   <div className="cookie-category cookie-map-choice"><div><label htmlFor="cookie-google-maps"><strong>Google mapy</strong></label><p id="cookie-google-maps-description">Vložená mapa pro hledání cesty do servisu. Google může zpracovat IP adresu, údaje o prohlížeči a používat vlastní cookies. <a href="https://policies.google.com/privacy?hl=cs" target="_blank" rel="noopener noreferrer">Zásady Google ↗</a></p></div><input id="cookie-google-maps" type="checkbox" checked={mapSelection} onChange={event => setMapSelection(event.target.checked)} aria-describedby="cookie-google-maps-description"/></div>
   {!stored && <p className="cookie-storage-note" role="status">Prohlížeč nedovolil uložit volbu. Platí v této otevřené stránce; při příští návštěvě se zeptáme znovu.</p>}
   <div className="cookie-actions"><button type="button" onClick={() => choose(false)}>Pouze nezbytné</button><button type="button" onClick={() => choose(mapSelection)}>Uložit nastavení</button></div>
   <p className="cookie-policy-links"><a href="/cookies.html">Cookies a místní úložiště</a><a href="/ochrana-osobnich-udaju.html">Ochrana osobních údajů</a></p>
  </dialog>
 </CookieContext.Provider>;
}

export function CookieSettingsButton() {
 const { openPreferences } = useContext(CookieContext);
 return <button type="button" className="cookie-settings-link" onClick={event => openPreferences(event.currentTarget)}>Nastavení cookies</button>;
}

export function GoogleMapEmbed({ query }) {
 const { mapsAllowed, openPreferences } = useContext(CookieContext);
 return <div className="workshop-map-area">
  {mapsAllowed ? <iframe className="workshop-map" title="Google mapa — Suchdolská 710, Horoměřice" src={`https://maps.google.com/maps?q=${query}&z=16&output=embed`} width="600" height="360" loading="lazy" referrerPolicy="no-referrer" allowFullScreen /> : <div className="workshop-map-placeholder"><span aria-hidden="true">⌖</span><h3>Mapa až s vaším svolením</h3><p>Adresu najdete vedle. Vložená mapa se připojí ke Googlu až po povolení.</p><button type="button" onClick={event => openPreferences(event.currentTarget)}>Nastavit zobrazení mapy</button></div>}
  {mapsAllowed && <button type="button" className="cookie-map-manage" onClick={event => openPreferences(event.currentTarget)}>Změnit souhlas s mapou</button>}
 </div>;
}
