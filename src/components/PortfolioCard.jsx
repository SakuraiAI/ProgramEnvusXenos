import { motion } from "framer-motion";

export default function PortfolioCard({ title, label, description, tags, index, href, cta = "Open lane" }) {
  const baseClassName =
    "sigil-frame glass-panel monochrome-frame relative overflow-hidden rounded-[1.9rem] p-6 transition hover:bg-white/[0.045] md:p-7";
  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/[0.06] blur-3xl" />

      <div className="relative">
        <div className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/40">
          {String(index + 1).padStart(2, "0")} // Portfolio Lane
        </div>

        <h3 className="font-display text-4xl tracking-[-0.03em] text-white">{title}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.16em] text-white/48">{label}</p>
        <p className="mt-5 text-sm leading-7 text-white/68">{description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/56"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <div className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/58">
            <span>{cta}</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/75 to-transparent" />
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClassName}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, delay: index * 0.06 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.article
      className={baseClassName}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.06 }}
    >
      {content}
    </motion.article>
  );
}
