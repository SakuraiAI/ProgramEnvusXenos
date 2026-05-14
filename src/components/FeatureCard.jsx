import { motion } from "framer-motion";

export default function FeatureCard({ title, description, accent, index }) {
  return (
    <motion.article
      className="sigil-frame glass-panel monochrome-frame group relative overflow-hidden rounded-[1.75rem] p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.05 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-60 transition duration-500 group-hover:opacity-100`} />
      <div className="absolute -right-10 top-8 h-24 w-24 rounded-full bg-white/10 blur-3xl transition duration-500 group-hover:bg-neon-blue/20" />

      <div className="relative">
        <div className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/45">
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="font-display text-3xl text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/68">{description}</p>
      </div>
    </motion.article>
  );
}
