export function DevelopmentStatus({ stage, children }) {
  return <span className="tech-status development-status" data-stage={stage}>{children}</span>;
}

export default function ResearchCard({ area, index }) {
  const mechanicalSystem = ["engine-development", "chassis-development", "transmission-development"].includes(area.id);
  return <article className={`automotive-research-card${mechanicalSystem ? " technology-system-card" : ""}`} id={area.id} aria-labelledby={`${area.id}-title`}>
    <a className="technology-area-link" href={area.href} aria-labelledby={`${area.id}-title`}>
      <div className="technology-card-image"><img src={area.image} alt={area.imageAlt} width={area.width} height={area.height} loading="lazy" decoding="async" /><span className="technology-image-label">KONCEPČNÍ ILUSTRACE</span></div>
      <div className="technology-card-content">
        <div className="automotive-card-meta"><span className="technology-direction-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><DevelopmentStatus stage={area.stage}>{area.status}</DevelopmentStatus></div>
        <p className="automotive-card-label">{area.name}</p><h3 id={`${area.id}-title`}>{area.label}</h3><p>{area.description}</p>
        <ul className="project-tags" aria-label={`Zaměření: ${area.name}`}>{area.topics.map(topic => <li key={topic}>{topic}</li>)}</ul>
        <span className="technology-card-cta">{area.linkLabel}<span aria-hidden="true">↗</span></span>
      </div>
    </a>
  </article>;
}
