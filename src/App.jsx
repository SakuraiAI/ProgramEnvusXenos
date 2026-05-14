import { motion } from "framer-motion";
import SceneBackground from "./components/SceneBackground";
import SectionHeading from "./components/SectionHeading";
import FeatureCard from "./components/FeatureCard";
import PortfolioCard from "./components/PortfolioCard";
import RoadmapItem from "./components/RoadmapItem";

const navItems = [
  { key: "home", label: "Home", href: "./index.html" },
  { key: "systems", label: "Systems", href: "./systems.html" },
  { key: "portfolio", label: "Portfolio", href: "./portfolio.html" },
  { key: "marika", label: "Marika", href: "./marika.html" },
  { key: "contact", label: "Contact", href: "./contact.html" },
];

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

const portfolioLanes = [
  {
    key: "portfolio-unreal",
    title: "Unreal Engine",
    href: "./portfolio-unreal.html",
    label: "Worlds / cinematic systems / interactive space",
    description:
      "Environment design, atmospheric worlds, interaction prototypes, and simulation-minded scenes built with a dark cinematic feel.",
    tags: ["Environment art", "Systems design", "Cinematics", "Simulation mood"],
    lead: "Dedicated space for environments, level studies, interaction prototypes, and cinematic experiments.",
    body:
      "Use this page for renders, scene breakdowns, process notes, and project writeups so Unreal work feels like its own archive instead of one more block on a landing page.",
    featureTitle: "Featured world or scene",
    featureBody:
      "Place a hero environment render, a cinematic still, or a short project caption here. This large frame is meant for the strongest visual on the page.",
    focus: ["Environment composition", "Lighting and atmosphere", "Interactive systems", "World simulation mood"],
    gallery: [
      { title: "Hero render", body: "Main scene image, teaser frame, or key environment still." },
      { title: "Gameplay angle", body: "Show the world from a playable camera or exploration view." },
      { title: "Lighting pass", body: "Document mood, fog, emissives, or cinematic color work." },
      { title: "Blockout / breakdown", body: "Keep room for topology, modular kits, or level planning." },
    ],
    notes: [
      {
        title: "Project notes",
        body: "Write the idea behind the scene, what inspired it, and what kind of world or interaction it is meant to create.",
      },
      {
        title: "Pipeline",
        body: "Describe the tools, systems, shaders, blueprint setup, or production steps that made the piece possible.",
      },
      {
        title: "Next uploads",
        body: "Reserve this block for future maps, cinematic tests, gameplay clips, or expanded project pages.",
      },
    ],
  },
  {
    key: "portfolio-blender",
    title: "Blender",
    href: "./portfolio-blender.html",
    label: "3D forms / symbols / visual experiments",
    description:
      "Modeling, look development, sculptural forms, symbols, and concept visuals that connect software identity with a stronger artistic language.",
    tags: ["3D modeling", "Lookdev", "Motion stills", "Visual identity"],
    lead: "A lane for renders, forms, sigils, concept objects, and the more artistic side of the project.",
    body:
      "This page is prepared for hero renders, material studies, breakdown images, and visual experiments so Blender work has a dedicated gallery with its own voice.",
    featureTitle: "Featured render or object",
    featureBody:
      "Use this main frame for your strongest sculpt, product-style render, symbol, or atmospheric concept image.",
    focus: ["Modeling and sculpting", "Materials and lookdev", "Symbol and sigil design", "Render composition"],
    gallery: [
      { title: "Hero render", body: "A polished final frame, still life, or concept render." },
      { title: "Clay / wire view", body: "Topology, sculpt detail, or work-in-progress structure." },
      { title: "Material study", body: "Show metal, glass, emissive, fabric, or procedural surface tests." },
      { title: "Symbol close-up", body: "Detail shot for sigils, ornaments, or identity experiments." },
    ],
    notes: [
      {
        title: "Visual direction",
        body: "Explain the artistic mood, references, and why the piece belongs in the world of ProgramEnvusXenos.",
      },
      {
        title: "Process",
        body: "Add notes about sculpting, modifiers, geometry nodes, lighting, compositing, or iteration choices.",
      },
      {
        title: "Future series",
        body: "Keep room for expanding this lane into collections, studies, or separate project families later.",
      },
    ],
  },
  {
    key: "portfolio-vscode",
    title: "VS Code",
    href: "./portfolio-vscode.html",
    label: "AI systems / local tooling / architecture",
    description:
      "The coding layer behind LunaAI and ProgramEnvusXenos: local apps, agents, interfaces, automation, and OS-level experiments.",
    tags: ["React", "Python", "AI tooling", "System architecture"],
    lead: "A coding portfolio lane for interfaces, tools, local AI systems, automation, and architectural work.",
    body:
      "This page gives code projects their own home with room for UI screenshots, diagrams, writeups, and technical breakdowns instead of hiding them inside a general landing page.",
    featureTitle: "Featured app or interface",
    featureBody:
      "Use the main panel for a UI screenshot, architecture visual, editor mockup, or short description of your best system.",
    focus: ["Local AI workflows", "Desktop and web interfaces", "Automation and tools", "Architecture and reasoning layers"],
    gallery: [
      { title: "UI screenshot", body: "Show a desktop app view, dashboard, or landing page interface." },
      { title: "Code / system view", body: "Capture architecture snippets, folder logic, or agent flows." },
      { title: "Feature breakdown", body: "Document what the tool does, how it works, and how it helps." },
      { title: "Release notes", body: "Reserve space for changelogs, milestones, or future project cards." },
    ],
    notes: [
      {
        title: "System overview",
        body: "Explain the goal of the tool, what problem it solves, and how it fits into the wider ecosystem.",
      },
      {
        title: "Tech stack",
        body: "List the languages, frameworks, local integrations, or AI architecture behind the project.",
      },
      {
        title: "Expansion path",
        body: "Use this space for roadmap notes, future modules, or deeper technical articles when the portfolio grows.",
      },
    ],
  },
];

const pageCards = [
  {
    title: "Systems",
    href: "./systems.html",
    description: "A full look at the local system stack: agent behavior, reasoning, memory, vision, and voice.",
  },
  {
    title: "Portfolio",
    href: "./portfolio.html",
    description: "Unreal Engine, Blender, and VS Code detail pages with room for visuals, notes, and future projects.",
  },
  {
    title: "Marika",
    href: "./marika.html",
    description: "The larger vision for intelligent systems, simulation, software architecture, and future technology.",
  },
  {
    title: "Contact",
    href: "./contact.html",
    description: "GitHub, communication paths, and a cleaner entry point for people following the project.",
  },
];

const marikaPrinciples = [
  "Local intelligence before cloud dependence",
  "Software with atmosphere, not corporate sameness",
  "AI layers that move from chat into action and systems",
  "Simulation and worldbuilding as part of future interfaces",
];

const portfolioPanels = [
  {
    title: "Visual-ready",
    body: "Each portfolio lane has a featured frame and gallery structure for renders, screenshots, hero images, and key visuals.",
  },
  {
    title: "Project notes",
    body: "There is room beside the visuals for breakdowns, process notes, tool lists, and context, so the work feels authored rather than dropped into empty cards.",
  },
  {
    title: "Expand later",
    body: "These pages can grow into deeper case studies, devlogs, or multiple projects per lane without rebuilding the whole site structure again.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function App({ page = "home" }) {
  const portfolioLane = portfolioLanes.find((item) => item.key === page);

  return (
    <SiteLayout page={page}>
      {page === "home" && <HomePage />}
      {page === "systems" && <SystemsPage />}
      {page === "portfolio" && <PortfolioPage />}
      {page === "marika" && <MarikaPage />}
      {page === "contact" && <ContactPage />}
      {portfolioLane && <PortfolioDetailPage lane={portfolioLane} />}
    </SiteLayout>
  );
}

function SiteLayout({ page, children }) {
  return (
    <div className="relative overflow-hidden bg-void text-white">
      <SceneBackground />

      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:92px_92px] opacity-[0.03]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-60" />
      <div className="goth-sigil-layer" aria-hidden="true">
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-main" />
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-left" />
        <img src="./cybersigilism.jpeg" alt="" className="goth-sigil-image sigil-right" />
      </div>

      <header className="section-shell sticky top-0 z-30 py-5">
        <div className="glass-panel monochrome-frame site-nav-shell rounded-[1.8rem] px-5 py-3">
          <div className="site-nav-row">
            <a href="./index.html" className="flex items-center gap-3">
              <img src="./infinity-logo.png" alt="Infinity logo" className="h-8 w-8 rounded-full object-cover opacity-90" />
              <span className="text-sm font-medium uppercase tracking-[0.26em] text-white/82">ProgramEnvusXenos</span>
            </a>

            <nav className="site-nav-desktop">
              {navItems.map((item) => {
                const active = item.key === "portfolio" ? page.startsWith("portfolio") : item.key === page;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="site-nav-mobile">
            <div className="site-nav-mobile-wrap">
              {navItems.map((item) => {
                const active = item.key === "portfolio" ? page.startsWith("portfolio") : item.key === page;
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="section-shell relative z-10 pb-12">
        <div className="glass-panel monochrome-frame flex flex-col gap-4 rounded-[1.6rem] px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-white/36">ProgramEnvusXenos</div>
            <div className="mt-2 text-sm text-white/58">
              Expanded into multiple pages with dedicated portfolio lanes for images, notes, and deeper project pages.
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-sm">
            {navItems.map((item) => {
              const active = item.key === "portfolio" ? page.startsWith("portfolio") : item.key === page;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className={`rounded-full px-4 py-2 transition ${
                    active ? "bg-white/[0.08] text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
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

            <motion.h1
              className="title-glow font-display text-6xl leading-[0.86] tracking-[-0.07em] text-white sm:text-7xl md:text-8xl xl:text-[8.6rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
            >
              ProgramEnvusXenos
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
              A local-first environment for LunaAI, creative tooling, simulation workflows, and the
              longer Marika direction. Built to live close to your machine, not only inside a browser tab.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36 }}
            >
              <a
                href="./portfolio.html"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-neon-blue hover:text-black"
              >
                View Portfolio
              </a>
              <a
                href="./systems.html"
                className="glass-panel inline-flex items-center justify-center rounded-full border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                Open Systems
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
                className="absolute inset-0 h-full w-full object-cover opacity-[0.1] grayscale"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_26%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/65" />
              <div className="absolute left-1/2 top-0 h-48 w-px -translate-x-1/2 bg-gradient-to-b from-white/70 via-white/15 to-transparent" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.28em] text-white/42">Constellation hub</span>
                  <span className="h-2 w-2 rounded-full bg-white shadow-glow" />
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute top-[-1.5rem] h-32 w-32 rounded-full border border-white/10" />
                  <div className="absolute top-[-0.5rem] h-56 w-56 rounded-full border border-white/[0.06]" />
                  <img
                    src="./infinity-logo.png"
                    alt="Infinity logo"
                    className="relative z-10 w-full max-w-[21rem] object-contain opacity-95"
                  />
                </div>

                <div className="mt-8 grid gap-4">
                  {pageCards.slice(0, 3).map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="glass-panel rounded-2xl border-white/8 bg-black/25 px-4 py-4 text-sm leading-7 text-white/72 transition hover:border-white/18 hover:bg-white/[0.05]"
                    >
                      <div className="font-display text-2xl text-white">{item.title}</div>
                      <div className="mt-1 text-white/58">{item.description}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
        <SectionHeading
          kicker="Explore"
          title="More than one page, so the project can breathe."
          body="The site now opens into a calmer multi-page structure. Instead of stacking everything into one long scroll, each part gets its own dedicated space."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pageCards.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              className="sigil-frame glass-panel monochrome-frame rounded-[1.7rem] p-6 transition hover:bg-white/[0.045]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/36">Page {String(index + 1).padStart(2, "0")}</div>
              <div className="mt-4 font-display text-4xl text-white">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-white/64">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}

function SystemsPage() {
  return (
    <>
      <PageHero
        kicker="Systems"
        title="The operating layers behind the local system."
        lead="A local stack with memory, action, communication, perception, and planning."
        body="This page separates the core architecture from the rest of the site, so people can understand the stack quickly without digging through branding or portfolio content."
      />

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
        <SectionHeading
          kicker="Core Stack"
          title="Every layer has a distinct job."
          body="The goal is not a vague all-in-one AI promise. Each layer is treated like a real component in a larger operating system."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {systems.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </section>

      <section className="section-shell page-section">
        <div className="grid gap-6 lg:grid-cols-2">
          <InfoPanel
            title="Local intelligence"
            body="The system is shaped around the machine itself: screen context, tool context, user routines, and a more personal relationship with the operating environment."
          />
          <InfoPanel
            title="Creative integrations"
            body="Unreal, Blender, and code tooling turn the system into something usable inside real production flows, not only inside a single assistant window."
          />
        </div>
      </section>
    </>
  );
}

function PortfolioPage() {
  return (
    <>
      <PageHero
        kicker="Portfolio"
        title="Three dedicated lanes with room for real content."
        lead="Unreal Engine, Blender, and VS Code each get their own page for images, notes, and future projects."
        body="This turns the portfolio into a real structure instead of a single section. You can now keep visuals, writeups, and expansions inside their own space."
      />

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
        <SectionHeading
          kicker="Portfolio Lanes"
          title="Choose the lane you want to build out."
          body="Each card opens its own page, so Unreal work, Blender visuals, and VS Code systems can grow separately without feeling cramped."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {portfolioLanes.map((item, index) => (
            <PortfolioCard key={item.key} {...item} index={index} href={item.href} cta="Open page" />
          ))}
        </div>
      </section>

      <section className="section-shell page-section">
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioPanels.map((item) => (
            <InfoPanel key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </section>
    </>
  );
}

function PortfolioDetailPage({ lane }) {
  return (
    <>
      <PageHero kicker={`Portfolio / ${lane.title}`} title={lane.title} lead={lane.lead} body={lane.body} />

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-kicker">Featured Frame</div>
            <div className="portfolio-placeholder rounded-[1.5rem] p-7 md:p-10">
              <div className="text-[10px] uppercase tracking-[0.32em] text-white/34">{lane.featureTitle}</div>
              <div className="mt-5 font-display text-5xl tracking-[-0.04em] text-white md:text-6xl">{lane.title}</div>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-white/64 md:text-base">{lane.featureBody}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {lane.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/56"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <InfoPanel title="About this lane" body={lane.description} />

            <motion.div
              className="sigil-frame glass-panel monochrome-frame rounded-[1.8rem] p-7 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="section-kicker">Focus</div>
              <div className="portfolio-focus-list mt-2">
                {lane.focus.map((item, index) => (
                  <div key={item} className="portfolio-focus-item">
                    <span className="text-white/34">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
        <SectionHeading
          kicker="Gallery Slots"
          title="Gallery frames for images, breakdowns, and progress."
          body="Replace these frames with screenshots, renders, process images, or future uploads. The structure is already here, so adding real work stays simple."
        />

        <div className="placeholder-grid mt-12">
          {lane.gallery.map((item, index) => (
            <PlaceholderTile key={item.title} index={index} title={item.title} body={item.body} />
          ))}
        </div>
      </section>

      <section className="section-shell page-section">
        <div className="grid gap-6 lg:grid-cols-3">
          {lane.notes.map((item) => (
            <InfoPanel key={item.title} title={item.title} body={item.body} />
          ))}
        </div>

        <div className="mt-8 flex">
          <a
            href="./portfolio.html"
            className="portfolio-backlink glass-panel inline-flex items-center gap-3 rounded-full px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white/68 transition hover:bg-white/[0.06] hover:text-white"
          >
            <span>Back to Portfolio</span>
            <span className="h-px w-10 bg-gradient-to-r from-white/75 to-transparent" />
          </a>
        </div>
      </section>
    </>
  );
}

function MarikaPage() {
  return (
    <>
      <PageHero
        kicker="Project Marika"
        title="The long vision behind the local system."
        lead="Intelligent systems, simulation, software architecture, and future interfaces."
        body="ProgramEnvusXenos is the current environment. LunaAI is one local layer inside it. Marika carries the deeper long-form direction around intelligence, simulation, and future interfaces."
      />

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <InfoPanel
            title="Long-form direction"
            body="Marika is where AI, atmosphere, simulation, and local software identity converge. It is not only a feature roadmap, but a larger design language and technical intention."
          />

          <div className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-8 md:p-10">
            <div className="section-kicker">Principles</div>
            <div className="grid gap-4">
              {marikaPrinciples.map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4 text-sm leading-7 text-white/68">
                  <span className="mr-3 text-white/34">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-left" />
        <SectionHeading
          kicker="Roadmap"
          title="The path from local AI to system architecture."
          body="The roadmap belongs here naturally because Marika is the page where the wider trajectory makes the most sense."
        />

        <div className="mt-12 grid gap-4">
          {roadmap.map((item, index) => (
            <RoadmapItem key={item} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Follow the signal without digging through one long page."
        lead="A clean page for GitHub, contact, and current project status."
        body="This keeps the end of the site simple: real links, current direction, and one clear place to continue following the work."
      />

      <section className="section-shell sigil-section relative page-section">
        <img src="./cybersigilism.jpeg" alt="" className="section-sigil section-sigil-right" />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="sigil-frame glass-panel monochrome-frame rounded-[2rem] p-8 md:p-10">
            <div className="section-kicker">GitHub / Contact</div>
            <h2 className="font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
              Keep the connection points clean.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/66 md:text-lg">
              Use this page for the real public links you want to share: GitHub, email, social profiles,
              or project updates. It works best when it stays focused and minimal.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="sigil-frame glass-panel monochrome-frame rounded-[1.6rem] p-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/36">GitHub</div>
              <div className="mt-4 font-display text-4xl text-white">Add your real link</div>
              <div className="mt-3 text-sm leading-7 text-white/64">Replace the generic placeholder with your actual GitHub profile or project repository before publishing.</div>
            </div>

            <div className="sigil-frame glass-panel monochrome-frame rounded-[1.6rem] p-6">
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/36">Contact</div>
              <div className="mt-4 font-display text-4xl text-white">Add your contact path</div>
              <div className="mt-3 text-sm leading-7 text-white/64">Replace the fake email with the channel you actually want to share: email, Discord, X, or another direct contact route.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ kicker, title, lead, body }) {
  return (
    <section className="section-shell noise-overlay page-hero flex min-h-[70svh] items-center py-16 md:py-24">
      <motion.div
        className="hero-copy-shell relative isolate max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="./cybersigilism.jpeg" alt="" className="hero-title-sigil" />
        <div className="section-kicker">{kicker}</div>
        <h1 className="title-glow font-display text-5xl leading-[0.88] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl xl:text-[7.4rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-2xl text-white/82 md:text-3xl">{lead}</p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/60 md:text-lg">{body}</p>
      </motion.div>
    </section>
  );
}

function InfoPanel({ title, body }) {
  return (
    <motion.div
      className="sigil-frame glass-panel monochrome-frame rounded-[1.8rem] p-7 md:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-4xl tracking-[-0.03em] text-white">{title}</div>
      <p className="mt-4 text-sm leading-8 text-white/66 md:text-base">{body}</p>
    </motion.div>
  );
}

function PlaceholderTile({ index, title, body }) {
  return (
    <motion.div
      className="placeholder-tile sigil-frame glass-panel monochrome-frame rounded-[1.7rem] p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className="text-[10px] uppercase tracking-[0.3em] text-white/34">Frame {String(index + 1).padStart(2, "0")}</div>
      <div className="mt-5 font-display text-4xl tracking-[-0.03em] text-white">{title}</div>
      <p className="mt-4 text-sm leading-8 text-white/64">{body}</p>
    </motion.div>
  );
}
