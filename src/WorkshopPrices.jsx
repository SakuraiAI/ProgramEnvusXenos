import { useState } from "react";
import priceGroups from "./workshop-prices.json";
const formatPrice = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 2 });
const normalize = value => value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLocaleLowerCase("cs").trim();
const total = priceGroups.reduce((count, group) => count + group.items.length, 0);

export default function WorkshopPrices() {
 const [query, setQuery] = useState("");
 const [expanded, setExpanded] = useState(() => new Set([priceGroups[0].category]));
 const [collapsedMatches, setCollapsedMatches] = useState(() => new Set());
 const terms = normalize(query).split(/\s+/).filter(Boolean);
 const groups = priceGroups.map(group => ({ ...group, items: group.items.filter(item => {
  const text = normalize(`${group.category} ${item.name}`);
  return terms.every(term => text.includes(term));
 }) })).filter(group => group.items.length);
 const count = groups.reduce((sum, group) => sum + group.items.length, 0);
 const searching = terms.length > 0;
 function toggle(category) {
  const update = searching ? setCollapsedMatches : setExpanded;
  update(previous => {
   const next = new Set(previous);
   if (next.has(category)) next.delete(category); else next.add(category);
   return next;
  });
 }
 return <>
  <div className="workshop-price-search">
   <label htmlFor="price-search">Najděte službu v ceníku</label>
   <div><input id="price-search" type="search" value={query} onChange={event => { setQuery(event.target.value); setCollapsedMatches(new Set()); }} placeholder="Např. brzdy, olej nebo diagnostika" maxLength={100} aria-describedby="price-search-result"/>{query && <button type="button" onClick={() => setQuery("")}>Vymazat</button>}</div>
   <p id="price-search-result" role="status">{searching ? `Nalezeno: ${count} z ${total} služeb` : `${total} služeb · můžete hledat i bez háčků a čárek.`}</p>
  </div>
  {count === 0 ? <div className="workshop-price-empty"><p>Takovou službu jsme v ceníku nenašli.</p><a href="/poptavka">Popište nám, co potřebujete vyřešit →</a></div> : <div className="workshop-price-groups">{groups.map(group => <details key={group.category} open={searching ? !collapsedMatches.has(group.category) : expanded.has(group.category)}>
   <summary onClick={event => { event.preventDefault(); toggle(group.category); }}>{group.category}<span>{group.items.length} {group.items.length === 1 ? "položka" : group.items.length < 5 ? "položky" : "položek"}</span></summary>
   <dl className="workshop-price-list">{group.items.map(item => <div key={item.name}>
    <dt>{item.name}</dt><dd><span>{item.onRequest ? "Cena na dotaz" : `od ${formatPrice.format(item.price)} Kč`}</span><a href={`/poptavka?sluzba=${encodeURIComponent(item.name)}`} aria-label={`Poptat službu: ${item.name}`}>Poptat službu <span aria-hidden="true">→</span></a></dd>
   </div>)}</dl>
  </details>)}</div>}
 </>;
}
