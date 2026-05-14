import { motion } from "framer-motion";
import SceneBackground from "./components/SceneBackground";
import SectionHeading from "./components/SectionHeading";
import FeatureCard from "./components/FeatureCard";
import PortfolioCard from "./components/PortfolioCard";
import RoadmapItem from "./components/RoadmapItem";

const systems = [
  {
    title: "Agent",
    description: "Performs actions on your PC and turns language into direct execution.",
    accent: "from-white/14 via-white/4 to-transparent",
  },
  {
    title: "Vision",
    description: "Understands the screen, windows, and visible context as part of the workflow.",
    accent: "from-white/10 via-neon-blue/10 to-transparent",
  },
  {
    title: "Voice",
    description: "Speech input and output for a more natural local interface.",
    accent: "from-white/10 via-neon-violet/10 to-transparent",
  },
  {
    title: "Memory",
    description: "Short and long-term context so the system can keep continuity over time.",
    accent: "from-white/12 via-neon-mint/10 to-transparent",
  },
  {
    title: "Luna",
    description: "The communication layer: present, clear, local, and personal.",
    accent: "from-white/14 via-white/6 to-transparent",
  },
  {
    title: "Xeno",
    description: "Reasoning and planning layer for structure, strategy, and future steps.",
    accent: "from-white/10 via-neon-rose/10 to-transparent",
  },
];

const roadmap = [
  "Agent layer",
  "Vision",
  "Voice",
  "Blender / Unreal integration",
  "Simulation systems",
  "OS-level AI layer",
];

const portfolio = [
  {
    title: "Unreal Engine",
    label: "Worlds / cinematic systems / interactive space",
    description:
      "Environment design, atmospheric worlds, interaction prototypes, and simulation-minded scenes built with a dark cinematic feel.",
    tags: ["Environment art", "Systems design", "Cinematics", "Simulation mood"],
  },
  {
    title: "Blender",
    label: "3D forms / symbols / visual experiments",
    description:
      "Modeling, look development, sculptural forms, symbols, and concept visuals that connect software identity with a stronger artistic language.",
    tags: ["3D modeling", "Lookdev", "Motion stills", "Visual identity"],
  },
  {
    title: "VS Code",
    label: "AI systems / local tooling / architecture",
    description:
      "The coding layer behind LunaAI and Project Marika: local apps, agents, interfaces, automation, and OS-level experiments.",
    tags: ["React", "Python", "AI tooling", "System architecture"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="relative overflow-hidden bg-void text-white">
      <SceneBackground />

      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:92px_92px] opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-60" />
      <div className="goth-sigil-layer" aria-hidden="true">
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-main" />
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-left" />
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-right" />
      </div>

      <header className="section-shell sticky top-0 z-30 py-5">
        <div className="glass-panel monochrome-frame flex items-center justify-between rounded-full px-5 py-3">
          <div className="flex items-center gap-3">
            <img src="./infinity-logo.png" alt="Infinity logo" className="h-8 w-8 rounded-full object-cover opacity-90" />
            <span className="text-sm font-medium uppercase tracking-[0.26em] text-white/82">
              ProgramEnvusXenos
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/55 md:flex">
            <a href="#systems" className="transition hover:text-white">
              Systems
            </a>
            <a href="#portfolio" className="transition hover:text-white">
              Portfolio
            </a>
            <a href="#marika" className="transition hover:text-white">
              Marika
            </a>
            <a href="#roadmap" className="transition hover:text-white">
              Roadmap
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <section className="section-shell noise-overlay flex min-h-[100svh] items-center py-16 md:py-24">
          <div className="grid w-full gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div
              className="hero-copy-shell relative isolate max-w-4xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="./cybersigilism.jpeg" alt="" className="hero-title-sigil" />
              <div className="section-kicker">Black signal // Local intelligence // Cosmic systems</div>

              <motion.div
                className="mb-5 text-[11px] uppercase tracking-[0.44em] text-white/28"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.02 }}
              >
                personal AI / ritual minimal / dark future
              </motion.div>

              <motion.h1
                className="title-glow font-display text-6xl leading-[0.86] tracking-[-0.07em] text-white sm:text-7xl md:text-8xl xl:text-[8.6rem]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08 }}
              >
                LunaAI
              </motion.h1>

              <motion.p
                className="mt-6 max-w-2xl text-2xl text-white/84 md:text-3xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building intelligent systems
              </motion.p>

              <motion.p
                className="mt-4 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
              >
                Local AI system that works on your PC. LunaAI is the near form. Project Marika is the
                larger vision: intelligent systems, AI, technology, simulation, and space.
              </motion.p>

              <motion.div
                className="mt-9 flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.36 }}
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-neon-blue hover:text-black"
                >
                  View GitHub
                </a>
                <a
                  href="#marika"
                  className="glass-panel inline-flex items-center justify-center rounded-full border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                >
                  Learn More
                </a>
              </motion.div>

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-3 text-sm text-white/55"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.44 }}
              >
                <span className="glass-panel rounded-full px-4 py-2">Building intelligent systems AI • Technology • Space 🚀</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="justify-self-end"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.16 }}
            >
              <div className="hero-reliquary sigil-frame glass-panel monochrome-frame relative w-full max-w-xl overflow-hidden rounded-[2rem] border-white/8 bg-black/35 p-6 md:p-8">
                <img
                  src="./angel-reference.png"
                  alt="Angelic reference mood"
                  className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen grayscale"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_26%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/65" />
                <div className="absolute left-1/2 top-0 h-48 w-px -translate-x-1/2 bg-gradient-to-b from-white/70 via-white/15 to-transparent" />
                <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.28em] text-white/42">Signal sigil</span>
                    <span className="h-2 w-2 rounded-full bg-white shadow-glow" />
                  </div>

                  <div className="relative flex justify-center">
                    <div className="absolute top-[-1.5rem] h-32 w-32 rounded-full border border-white/10" />
                    <div className="absolute top-[-0.5rem] h-56 w-56 rounded-full border border-white/[0.06]" />
                    <img
                      src="./infinity-logo.png"
                      alt="Infinity logo"
                      className="relative z-10 w-full max-w-[21rem] object-contain opacity-95 drop-shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                    />
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "LunaAI is a local AI presence that lives on the machine, not only in the browser.",
                      "Project Marika expands that into a larger architecture for intelligent systems and future technology.",
                      "The identity mixes darkness, precision, mystery, and a calm cosmic atmosphere.",
                    ].map((line) => (
                      <div
                        key={line}
                        className="glass-panel rounded-2xl border-white/8 bg-black/25 px-4 py-4 text-sm leading-7 text-white/72"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="systems" className="section-shell sigil-section relative py-24 md:py-32">
          <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
          <SectionHeading
            kicker="What It Does"
            title="A local intelligence stack with action, perception, memory, and planning."
            body="LunaAI is not framed like a clean corporate dashboard product. It is a personal system architecture with layers that can act, perceive, speak, remember, and reason."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {systems.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </section>

        <section id="portfolio" className="section-shell sigil-section relative py-24 md:py-32">
          <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
          <SectionHeading
            kicker="Portfolio"
            title="Three creative and technical lanes: Unreal, Blender, and VS Code."
            body="This is where the visual identity meets the actual work: dark environments, 3D forms, and code-driven intelligent systems built as one connected portfolio."
          />

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {portfolio.map((item, index) => (
              <PortfolioCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </section>

        <section id="marika" className="section-shell sigil-section relative py-24 md:py-32">
          <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
            >
              <div className="section-kicker">Project Marika</div>
              <h2 className="font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
                The larger vision behind LunaAI.
              </h2>
            </motion.div>

            <motion.div
              className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-8 text-base leading-8 text-white/72 md:p-10 md:text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              <p>
                Project Marika is the long-term direction for intelligent systems, technology, simulation,
                and space-oriented design. LunaAI is the immediate system on the PC. Marika is the wider
                architecture around what that system can become.
              </p>
              <p className="mt-5">
                It is about building layers that move from chat into action, vision, memory, voice,
                creative tool integrations, simulations, and eventually a more complete OS-level AI
                presence.
              </p>
              <p className="mt-5">
                The feeling matters as much as the function: premium, dark, mysterious, personal, and
                futuristic without becoming a generic startup aesthetic.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="roadmap" className="section-shell sigil-section relative py-24 md:py-32">
          <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
          <SectionHeading
            kicker="Roadmap"
            title="From local AI project to a deeper intelligent system layer."
            body="The path starts on the desktop, but it is already aimed toward broader coordination, simulation, and system-level intelligence."
          />

          <div className="mt-12 grid gap-4">
            {roadmap.map((item, index) => (
              <RoadmapItem key={item} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell sigil-section relative py-24 md:py-32">
          <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
          <motion.div
            className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-8 md:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="section-kicker">GitHub / Contact</div>
                <h2 className="font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
                  Follow the signal as the system grows.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
                  LunaAI is the present layer. Project Marika is the long horizon. This page is designed
                  to feel like the visual shell around both.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-neon-blue"
                >
                  GitHub
                </a>
                <a
                  href="mailto:hello@lunaai.local"
                  className="glass-panel inline-flex items-center justify-center rounded-full border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/[0.07]"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
