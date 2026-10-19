import priceGroups from "./workshop-prices.json";
const formatPrice = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 2 });

export default function WorkshopPrices() {
 return <div className="workshop-price-groups">{priceGroups.map(group => <details key={group.category}>
  <summary>{group.category}<span>{group.items.length} {group.items.length === 1 ? "položka" : group.items.length < 5 ? "položky" : "položek"}</span></summary>
  <dl className="workshop-price-list">{group.items.map(item => <div key={item.name}>
   <dt>{item.name}</dt><dd>{item.onRequest ? "Cena na dotaz" : item.unit === "hour" ? `${formatPrice.format(item.price)} Kč/h` : `od ${formatPrice.format(item.price)} Kč`}</dd>
  </div>)}</dl>
 </details>)}</div>;
}
