import { motion } from "framer-motion";

export default function RoadmapItem({ item, index }) {
  return (
    <motion.div
      className="sigil-frame glass-panel monochrome-frame flex items-center justify-between rounded-[1.5rem] px-5 py-5"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs text-white/55">
          {String(index + 1).padStart(2, "0")}
        </div>
        <span className="font-display text-2xl text-white/82 md:text-[1.9rem]">{item}</span>
      </div>

      <div className="h-px w-16 bg-gradient-to-r from-white/80 to-transparent" />
    </motion.div>
  );
}
