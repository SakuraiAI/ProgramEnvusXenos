import { motion } from "framer-motion";

export default function SectionHeading({ kicker, title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <div className="section-kicker">{kicker}</div>
      <h2 className="font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">{body}</p>
    </motion.div>
  );
}
