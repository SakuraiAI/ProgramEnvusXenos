import { useEffect } from "react";
import { categoryLabels, getNewsArticle, newsArticles } from "./newsData";
import "./news.css";

const newsArticleHref = (article) => `/novinky/${article.slug}`;
const countLabel = (count) => count === 1 ? "příspěvek" : count >= 2 && count <= 4 ? "příspěvky" : "příspěvků";

function Arrow({ diagonal = false }) {
 return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function NewsVisual({ article, eager = false }) {
 const identity = article.image.endsWith(".svg");
 return <div className={`news-visual${identity ? " news-visual--identity" : ""}`}><img src={article.image} alt={article.imageAlt} width="1536" height="1024" loading={eager ? "eager" : "lazy"}/>{identity && <span aria-hidden="true">PROGRAM ENVUS XENOS</span>}</div>;
}

function NewsCard({ article, featured = false, compact = false }) {
 return <a className={`news-card${featured ? " news-card--featured" : ""}${compact ? " news-card--compact" : ""}`} href={newsArticleHref(article)} aria-labelledby={`news-card-${article.slug}`}>
  <NewsVisual article={article} eager={featured}/>
  <div className="news-card-copy">
   <div className="news-meta"><span>{categoryLabels[article.category]}</span><time dateTime={article.date}>{article.dateLabel}</time></div>
   {featured && <p className="news-feature-label">NEJNOVĚJŠÍ PŘÍSPĚVEK</p>}
   <h2 id={`news-card-${article.slug}`}>{article.cardTitle || article.title}</h2>
   <p className="news-card-excerpt">{article.excerpt}</p>
   <span className="news-read">Číst článek <span className="news-read-arrow"><Arrow diagonal/></span></span>
  </div>
 </a>;
}

export function NewsPage() {
 const requestedCategory = new URLSearchParams(window.location.search).get("tema");
 const activeCategory = Object.hasOwn(categoryLabels, requestedCategory) ? requestedCategory : "all";
 const articles = activeCategory === "all" ? newsArticles : newsArticles.filter(article => article.category === activeCategory);
 useEffect(() => {
  const legacyArticle = newsArticles.find(article => article.legacyHash && window.location.hash === `#${article.legacyHash}`);
  if (legacyArticle) window.location.replace(newsArticleHref(legacyArticle));
 }, []);
 return <div className="tech-page news-page">
  <header className="news-intro"><div><p className="portal-eyebrow">ZE SVĚTA PGEX</p><h1>Novinky.</h1><p className="news-intro-copy">Na čem pracujeme.<br/>Co se mění. Kam směřujeme.</p></div><p className="news-intro-note">Z vývoje, dílny a zákulisí projektů.<br/>Vše důležité na jednom místě.</p></header>
  <section id="novinky" aria-label="Přehled článků">
   <div className="news-toolbar"><nav className="news-filters" aria-label="Témata novinek"><a href="/novinky" aria-current={activeCategory === "all" ? "page" : undefined}>Vše</a>{Object.entries(categoryLabels).map(([key, label]) => <a key={key} href={`/novinky?tema=${key}`} aria-current={activeCategory === key ? "page" : undefined}>{label}</a>)}</nav><span className="news-count">{String(articles.length).padStart(2, "0")} <span>{countLabel(articles.length)}</span></span></div>
   <div className="news-grid">{articles.map((article, index) => <NewsCard key={article.slug} article={article} featured={index === 0}/>)}</div>
  </section>
  <div className="news-endnote"><span className="news-end-line" aria-hidden="true"/><p>Každý projekt má svůj příběh.<br/><a href="/projekty">Poznejte projekty PGEX <Arrow/></a></p></div>
 </div>;
}

export function NewsArticlePage({ slug }) {
 const article = getNewsArticle(slug);
 if (!article) return <section className="tech-page news-missing"><p className="portal-eyebrow">NOVINKY PGEX</p><h1>Článek jsme nenašli.</h1><p>Odkaz může být neúplný nebo už není aktuální. Všechny příspěvky najdete v přehledu novinek.</p><a className="gateway-button outline" href="/novinky">Zpět na novinky <Arrow/></a></section>;
 const { Content } = article;
 const articleIndex = newsArticles.findIndex(item => item.slug === article.slug);
 const newer = newsArticles[articleIndex - 1];
 const older = newsArticles[articleIndex + 1];
 return <article className="tech-page news-article">
  <header className="news-article-header"><a className="news-back" href="/novinky"><span aria-hidden="true">←</span> Všechny novinky</a><div className="news-meta"><a href={`/novinky?tema=${article.category}`}>{categoryLabels[article.category]}</a><time dateTime={article.date}>{article.dateLabel}</time></div><h1>{article.title}</h1><p className="news-article-deck">{article.excerpt}</p><p className="news-byline">PGEX <span aria-hidden="true">/</span> Program Envus Xenos</p></header>
  <div className="news-article-cover"><NewsVisual article={article} eager/></div>
  <div className="news-reading-layout"><aside className="news-reading-aside">{article.sections?.length ? <details className="news-toc" open={article.sections.length <= 3}><summary><span>V tomto článku</span><span className="news-toc-toggle" aria-hidden="true">+</span></summary><nav aria-label="Obsah článku">{article.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav></details> : <><p className="portal-eyebrow">V TOMTO ČLÁNKU</p><p>Novinka ze světa PGEX.</p></>}<a className="news-back" href="/novinky">← Zpět na přehled</a></aside><div className="news-article-body"><Content/></div></div>
  <footer className="news-article-footer"><div className="news-section-heading"><div><p className="portal-eyebrow">POKRAČOVAT VE ČTENÍ</p><h2>Další ze světa PGEX.</h2></div><a className="news-back" href="/novinky">Všechny novinky <Arrow/></a></div><div className="news-related">{newer && <div><p className="news-adjacent-label">NOVĚJŠÍ ČLÁNEK</p><NewsCard article={newer} compact/></div>}{older && <div><p className="news-adjacent-label">STARŠÍ ČLÁNEK</p><NewsCard article={older} compact/></div>}</div></footer>
 </article>;
}
