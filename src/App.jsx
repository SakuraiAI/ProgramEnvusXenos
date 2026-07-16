import { useId } from "react";
import { motion } from "framer-motion";

const BRAND = {
  name: "Program Envus Xenos",
  short: "PGEX",
  tagline: "Engineering the future",
};

const BOOK_SERVICE_HREF = "./portfolio-vscode.html";
const MAPS_HREF = "https://www.google.com/maps/search/?api=1&query=K+Letisti+123%2C+252+25+Jinocany%2C+Czech+Republic";

const REFERENCES = {
  logo: "./infinity-logo.png",
};

const PAGE_GROUP = {
  home: "home",
  systems: "services",
  portfolio: "technology",
  "portfolio-unreal": "projects",
  marika: "marika",
  "portfolio-blender": "about",
  contact: "contact",
  "portfolio-vscode": "booking",
};

const NAV_ITEMS = [
  { key: "home", label: "Home", href: "./index.html", group: "home" },
  { key: "systems", label: "Services", href: "./systems.html", group: "services" },
  { key: "portfolio", label: "Technology", href: "./portfolio.html", group: "technology" },
  { key: "portfolio-unreal", label: "Projects", href: "./portfolio-unreal.html", group: "projects" },
  { key: "marika", label: "Marika", href: "./marika.html", group: "marika" },
  { key: "portfolio-blender", label: "About", href: "./portfolio-blender.html", group: "about" },
  { key: "contact", label: "Contact", href: "./contact.html", group: "contact" },
];

const FOOTER_NAV = [
  { label: "Home", href: "./index.html" },
  { label: "Services", href: "./systems.html" },
  { label: "Technology", href: "./portfolio.html" },
  { label: "Projects", href: "./portfolio-unreal.html" },
  { label: "Marika", href: "./marika.html" },
  { label: "About", href: "./portfolio-blender.html" },
  { label: "Contact", href: "./contact.html" },
];

const HOME_STATS = [
  { icon: "brain", label: "AI Systems", value: "3", note: "Core intelligences" },
  { icon: "cube", label: "Projects", value: "12+", note: "Active developments" },
  { icon: "gear", label: "Engineering", value: "100%", note: "Built with passion" },
  { icon: "infinity", label: "Vision", value: "∞", note: "Beyond limits" },
];

const SERVICE_HIGHLIGHTS = [
  { icon: "wrench", label: "Expert technicians", value: "100%", note: "Certified" },
  { icon: "target", label: "Precision work", value: "0%", note: "Compromise" },
  { icon: "shield", label: "Quality parts", value: "100%", note: "Premium" },
  { icon: "clock", label: "Fast turnaround", value: "On time", note: "Every time" },
];

const CORE_TECH = [
  { icon: "brain", title: "Machine learning", text: "Adaptive models that learn and improve continuously." },
  { icon: "network", title: "Neural systems", text: "Deep learning architectures for complex problem solving." },
  { icon: "cube", title: "Simulation engine", text: "Real-time physics and system simulation for testing limits." },
  { icon: "database", title: "Data infrastructure", text: "High-performance storage, processing and data pipelines." },
  { icon: "shield", title: "Cyber security", text: "End-to-end security for systems, data and networks." },
  { icon: "cloud", title: "Cloud architecture", text: "Scalable, distributed and resilient cloud environments." },
];

const ABOUT_VALUES = [
  { icon: "car", title: "Automotive", text: "Service, maintenance and performance solutions." },
  { icon: "code", title: "Software", text: "Custom software, system architecture and development." },
  { icon: "brain", title: "AI Systems", text: "Artificial intelligence, machine learning and intelligent solutions." },
  { icon: "gear", title: "Engineering", text: "Design, simulation and engineering excellence." },
  { icon: "search", title: "Research", text: "Continuous research and innovation for the future." },
];

const PHILOSOPHY = [
  { icon: "heart", title: "Passion", text: "We love what we do and it shows in our work." },
  { icon: "diamond", title: "Quality", text: "We never compromise on quality and reliability." },
  { icon: "bulb", title: "Innovation", text: "We constantly push boundaries and create new paths." },
  { icon: "shield", title: "Integrity", text: "Honesty, respect and transparency guide every step we take." },
];

const CONTACT_CHANNELS = [
  { icon: "mail", title: "Email", text: "info@programenvusxenos.com", meta: "We respond within 24h" },
  { icon: "phone", title: "Phone", text: "+420 123 456 789", meta: "Mon – Fri: 9:00 – 18:00" },
  { icon: "pin", title: "Workshop", text: "K Letisti 123, 252 25 Jinocany, Czech Republic", meta: "PGEX Workshop" },
  { icon: "clock", title: "Business hours", text: "Monday – Friday 9:00 – 18:00", meta: "Saturday by appointment" },
];

const BOOKING_STEPS = [
  "Choose service",
  "Vehicle",
  "Date & time",
  "Your details",
  "Confirmation",
];

const SERVICE_OPTIONS = [
  {
    icon: "chip",
    title: "Diagnostics",
    features: ["Full vehicle diagnostics", "Error code reading", "System check"],
    pricing: ["Labour", "from 1 000 Kc"],
    scene: "diagnostics",
  },
  {
    icon: "disc",
    title: "Brake Service",
    features: ["Brake pads / discs", "System inspection", "Safety check"],
    pricing: ["Est. total", "from 4 700 Kc"],
    scene: "brakes",
    active: true,
  },
  {
    icon: "engine",
    title: "Engine Service",
    features: ["Oil & filter change", "Engine inspection", "Performance check"],
    pricing: ["Labour", "from 2 000 Kc"],
    scene: "engine",
  },
  {
    icon: "suspension",
    title: "Suspension",
    features: ["Shock absorbers", "Control arms", "Alignment check"],
    pricing: ["Labour", "from 1 800 Kc"],
    scene: "suspension",
  },
  {
    icon: "bolt",
    title: "Electrical",
    features: ["Diagnostics", "Electrical repairs", "Coding & adaptation"],
    pricing: ["Labour", "from 1 200 Kc"],
    scene: "electrical",
  },
  {
    icon: "gauge",
    title: "Performance",
    features: ["Performance upgrades", "Exhaust systems", "ECU tuning"],
    pricing: ["Price", "Individual"],
    scene: "performance",
  },
];

const INTELLIGENCE_CARDS = [
  {
    title: "Marika",
    subtitle: "Core AGI",
    text: "The central intelligence. Research, reasoning and decision making at the highest level.",
    points: ["Advanced reasoning", "Self-improvement", "Scientific research", "System orchestration"],
    href: "./marika.html",
    cta: "Discover Marika",
    accent: "gold",
    image: "./characters/marika.jpg",
    imagePosition: "center top",
  },
  {
    title: "Luna",
    subtitle: "Communication AI",
    text: "The voice between systems and humans. Natural language, planning and information flow.",
    points: ["Natural conversation", "Data translation", "Planning & scheduling", "Interface management"],
    href: "./portfolio.html",
    cta: "Discover Luna",
    accent: "blue",
    image: "./characters/luna.jpg",
    imagePosition: "center top",
  },
  {
    title: "Xeno",
    subtitle: "Engineering AI",
    text: "The engineer within. Design, simulation and optimization of complex systems.",
    points: ["Engineering design", "Simulation & testing", "Optimization", "Predictive analysis"],
    href: "./portfolio-unreal.html",
    cta: "Discover Xeno",
    accent: "silver",
    image: "./characters/xeno.png",
    imagePosition: "center top",
    contentSide: "right",
  },
];

const HOME_WORKSHOP_SERVICES = [
  { icon: "chip", title: "Diagnostics", text: "Advanced vehicle diagnostics." },
  { icon: "wrench", title: "Engine Service", text: "Maintenance and engine repairs." },
  { icon: "disc", title: "Brakes", text: "Brake system inspection and repair." },
  { icon: "suspension", title: "Suspension", text: "Suspension and chassis service." },
  { icon: "bolt", title: "Electrical", text: "Electrical system diagnostics." },
  { icon: "gear", title: "Performance", text: "Performance tuning and optimization." },
];

const SERVICES_GRID = [
  { icon: "chip", title: "Diagnostics", text: "Advanced diagnostic solutions for all vehicle systems using professional equipment.", scene: "diagnostics" },
  { icon: "engine", title: "Engine Service", text: "Complete engine maintenance, repairs and performance optimization.", scene: "engine" },
  { icon: "disc", title: "Brakes", text: "Brake system inspection, repair and upgrade for maximum safety and performance.", scene: "brakes" },
  { icon: "suspension", title: "Suspension", text: "Suspension setup, repairs and upgrades for better handling and comfort.", scene: "suspension" },
  { icon: "bolt", title: "Electrical", text: "Electrical system, diagnostics, repairs and custom solutions.", scene: "electrical" },
  { icon: "gauge", title: "Performance", text: "Performance tuning, upgrades and custom builds to unlock your vehicle's potential.", scene: "performance" },
];

const PROJECT_FILTERS = [
  "All Projects",
  "Automotive",
  "AI & Software",
  "Engineering",
  "Space & Aerospace",
  "Robotics",
];

const PROJECT_CARDS = [
  {
    category: "Automotive",
    title: "Xenos X2",
    subtitle: "Hypersport concept",
    text: "1800 HP hybrid hypercar with hydrogen / e-fuel technology and 5 electric motors.",
    status: "In development",
    href: "./systems.html",
    image: "./vehicles/xenos-x2.jpg",
    imagePosition: "center center",
    accent: "gold",
  },
  {
    category: "AI & Software",
    title: "Marika",
    subtitle: "Core AGI system",
    text: "Central Artificial General Intelligence. Reasoning, learning and decision making at the highest level.",
    status: "In progress",
    href: "./marika.html",
    image: "./characters/marika.jpg",
    imagePosition: "center top",
    accent: "blue",
  },
  {
    category: "Engineering",
    title: "PGEX Core",
    subtitle: "Infrastructure",
    text: "High performance servers, simulation environments and secure data infrastructure.",
    status: "Active",
    href: "./portfolio.html",
    scene: "server-stack",
    accent: "gold",
  },
  {
    category: "Robotics",
    title: "Xeno Unit",
    subtitle: "Engineering robotics",
    text: "Advanced robotic systems for manufacturing, prototyping and complex tasks.",
    status: "In development",
    href: "./portfolio.html",
    scene: "robot-arm",
    accent: "gold",
  },
  {
    category: "Space & Aerospace",
    title: "Xenos Starship",
    subtitle: "Space transport system",
    text: "Next generation reusable spacecraft for long distance travel and payload delivery.",
    status: "Research",
    href: "./contact.html",
    scene: "starship",
    accent: "blue",
  },
  {
    category: "Automotive",
    title: "X1 Performance",
    subtitle: "Sports car",
    text: "High performance sports car with a perfect balance of power and control.",
    status: "In development",
    href: "./systems.html",
    scene: "sportscar",
    accent: "gold",
  },
];

const ABOUT_TIMELINE = [
  { year: "2026", title: "The workshop", text: "It all started in a small workshop with a big dream and passion for vehicles." },
  { year: "", title: "Automotive parts", text: "We learned, improved and started creating our own high quality parts and solutions." },
  { year: "", title: "AI systems", text: "Expanding our knowledge into software, systems and artificial intelligence." },
  { year: "", title: "Marika project", text: "Creating our core AGI – the intelligence that connects everything." },
  { year: "", title: "Xenos vehicles", text: "Building our own vehicles with advanced technology and performance." },
  { year: "", title: "Space technologies", text: "Our vision goes beyond Earth. We build for the future of humanity." },
];

const MARIKA_PILLARS = [
  { icon: "brain", title: "Reasoning core", text: "Long horizon planning, inference and systems thinking." },
  { icon: "message", title: "Language layer", text: "Dialogue, translation, explanation and human coordination." },
  { icon: "gear", title: "Execution engine", text: "Tool use, workflow orchestration and engineering assistance." },
  { icon: "database", title: "Memory system", text: "Structured context, persistent knowledge and adaptive recall." },
];

const MARIKA_STACK = [
  { icon: "message", title: "Luna communication", text: "Natural conversation, translation and interaction design." },
  { icon: "gear", title: "Xeno engineering", text: "Design, simulation and optimization of complex systems." },
  { icon: "brain", title: "Marika orchestration", text: "Reasoning across the entire PGEX ecosystem." },
  { icon: "shield", title: "Secure core", text: "Private, local-first and resilient by design." },
];

const CONTACT_FOOTER = {
  email: "info@programenvusxenos.com",
  phone: "+420 123 456 789",
  address: "K Letisti 123, 252 25 Jinocany, Czech Republic",
};

const SOCIALS = [
  { label: "IG", href: "#" },
  { label: "YT", href: "#" },
  { label: "DS", href: "#" },
  { label: "X", href: "#" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function App({ page = "home" }) {
  const group = PAGE_GROUP[page] || "home";

  return (
    <SiteLayout page={page} group={group}>
      {page === "home" && <HomePage />}
      {page === "systems" && <ServicesPage />}
      {page === "portfolio" && <TechnologyPage />}
      {page === "portfolio-unreal" && <ProjectsPage />}
      {page === "marika" && <MarikaPage />}
      {page === "portfolio-blender" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {page === "portfolio-vscode" && <BookingPage />}
    </SiteLayout>
  );
}

function SiteLayout({ group, children }) {
  return (
    <div className="pgex-page">
      <div className="bg-mesh" />
      <div className="bg-noise" />

      <header className="site-shell topbar-wrap">
        <div className="topbar">
          <a href="./index.html" className="brand-lockup">
            <img src={REFERENCES.logo} alt="Program Envus Xenos logo" className="brand-logo" />
            <div>
              <div className="brand-name">{BRAND.name}</div>
              <div className="brand-sub">{BRAND.short}</div>
            </div>
          </a>

          <nav className="nav-list">
            {NAV_ITEMS.map((item) => (
              <a key={item.key} href={item.href} className={`nav-link ${item.group === group ? "is-active" : ""}`}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href={BOOK_SERVICE_HREF} className={`nav-cta ${group === "booking" ? "is-active" : ""}`}>
            Book Service
            <span className="nav-cta-arrow">›</span>
          </a>
        </div>
      </header>

      <main className="site-shell page-main">{children}</main>
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSplit
        eyebrow="Engineering the future"
        lines={["Program", "Envus Xenos"]}
        goldLines={[1]}
        description="Building intelligent systems that combine automotive engineering, artificial intelligence and advanced technology."
        primary={{ label: "Explore PGEX", href: "./portfolio-unreal.html" }}
        secondary={{ label: "Our Services", href: "./systems.html" }}
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
      />

      <StatStrip items={HOME_STATS} />

      <section className="section-block">
        <CenteredHeading eyebrow="The three intelligences" title="Core identities inside the system." />
        <div className="intelligence-grid">
          {INTELLIGENCE_CARDS.map((card, index) => (
            <IntelligenceCard key={card.title} card={card} index={index} compact />
          ))}
        </div>
      </section>

      <section className="section-block section-split">
        <div className="panel workshop-panel">
          <div className="section-mini-label">PGEX Service</div>
          <h2 className="panel-heading center">Automotive Workshop</h2>
          <div className="service-mini-grid">
            {HOME_WORKSHOP_SERVICES.map((item, index) => (
              <IconFeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="panel promo-panel">
          <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="promo-media" />
          <div className="promo-copy">
            <h3>
              Precision.
              <br />
              Performance.
              <br />
              <span>Innovation.</span>
            </h3>
            <p>Professional service built on technology and experience.</p>
            <a className="btn btn-primary" href={BOOK_SERVICE_HREF}>
              Book a Service
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Services"
        lines={["Precision.", "Performance.", "Innovation."]}
        goldLines={[2]}
        description="Professional automotive service built on technology, experience and passion."
        primary={{ label: "Book a Service", href: BOOK_SERVICE_HREF }}
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
      />

      <StatStrip items={SERVICE_HIGHLIGHTS} />

      <section className="section-block">
        <CenteredHeading eyebrow="What we do" title="Our services" />
        <div className="service-card-grid">
          {SERVICES_GRID.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block split-columns">
        <div className="panel list-panel">
          <div className="section-mini-label">Why choose PGEX service</div>
          <ul className="bullet-list">
            <li>Advanced technology and equipment</li>
            <li>Experienced and certified technicians</li>
            <li>Premium quality parts and fluids</li>
            <li>Transparent pricing and honest advice</li>
            <li>Customer satisfaction is our priority</li>
          </ul>
        </div>

        <div className="panel visual-panel">
          <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="lineart-preview" />
        </div>

        <div className="panel promise-panel">
          <div className="section-mini-label">Our promise</div>
          <p>We treat every vehicle as if it were our own.</p>
          <p>Precision, quality and performance are at the heart of everything we do.</p>
          <div className="signature">Envus Xenos</div>
        </div>
      </section>

      <CtaStrip
        title="Ready to get started?"
        text="Book your service appointment today and experience the PGEX difference."
        action={{ label: "Book a Service", href: BOOK_SERVICE_HREF }}
      />
    </>
  );
}

function TechnologyPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Technology"
        lines={["Engineering", "Intelligence."]}
        goldLines={[1]}
        description="At PGEX, technology is more than code and hardware. It is the foundation of everything we build – systems that think, learn and evolve."
        primary={{ label: "Explore our systems", href: "./marika.html" }}
        image="./characters/marika.jpg"
        imagePosition="center top"
        callouts={[
          { title: "Infrastructure", text: "Scalable and secure system architecture.", position: "left-top" },
          { title: "Data & security", text: "Protecting what matters most.", position: "left-bottom" },
          { title: "AI systems", text: "Intelligent algorithms and learning models.", position: "right-top" },
          { title: "Engineering", text: "Advanced simulation and development.", position: "right-mid" },
          { title: "Automotive", text: "Performance, safety and innovation.", position: "right-bottom" },
        ]}
      />

      <section className="section-block">
        <CenteredHeading eyebrow="The three intelligences" title="The minds behind the platform." />
        <div className="intelligence-grid">
          {INTELLIGENCE_CARDS.map((card, index) => (
            <IntelligenceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <CenteredHeading eyebrow="Core technologies" title="Built for performance and scale." />
        <div className="tech-grid">
          {CORE_TECH.map((item, index) => (
            <TechCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="panel infrastructure-banner">
          <div className="infrastructure-copy">
            <div className="section-mini-label">Built on powerful infrastructure</div>
            <h2 className="panel-heading">
              Speed. Security. Scale.
            </h2>
            <p>
              Our infrastructure is designed for extreme performance and reliability. Every system is built to scale, adapt and withstand the demands of tomorrow.
            </p>
            <div className="infrastructure-stats">
              <span>99.99% uptime</span>
              <span>Global distribution</span>
              <span>256-bit encryption</span>
              <span>Real-time monitoring</span>
            </div>
          </div>
          <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="infrastructure-media" />
        </div>
      </section>

      <section className="section-block">
        <div className="panel vision-strip">
          <ImageFrame src="./space/planet.jpg" position="right center" className="vision-media" />
          <div className="vision-copy">
            <div className="section-mini-label">Our vision</div>
            <h2 className="panel-heading">
              Beyond limits
            </h2>
            <p>Technology is our way to explore the unknown, solve the impossible and build a future where humanity reaches further than ever before.</p>
            <a href="./portfolio-unreal.html" className="btn btn-secondary">
              View our projects
            </a>
          </div>
          <div className="vision-points">
            <ValuePill icon="car" title="Automotive innovation" text="Pushing performance and safety to the edge." />
            <ValuePill icon="brain" title="AI for humanity" text="Creating intelligent systems that serve and empower." />
            <ValuePill icon="rocket" title="Space exploration" text="Technologies designed for Earth and beyond." />
            <ValuePill icon="infinity" title="Endless future" text="We build today what defines tomorrow." />
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Projects"
        lines={["Building the future.", "One project at a time."]}
        goldLines={[1]}
        description="From high performance vehicles to artificial intelligence and space technologies – every project is a step towards a smarter, faster and more advanced future."
        primary={{ label: "Explore all projects", href: "./portfolio-unreal.html" }}
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
      />

      <section className="section-block tight-top">
        <div className="filter-bar panel">
          <div className="filter-list">
            {PROJECT_FILTERS.map((item, index) => (
              <button key={item} className={`filter-pill ${index === 0 ? "is-active" : ""}`} type="button">
                {item}
              </button>
            ))}
          </div>
          <div className="sort-box">Latest ▾</div>
        </div>
      </section>

      <section className="section-block">
        <div className="project-grid">
          {PROJECT_CARDS.map((card, index) => (
            <ProjectCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="panel metrics-banner">
          <div className="metrics-brand">
            <img src={REFERENCES.logo} alt="" className="metrics-logo" />
            <div>
              <div>Building tomorrow,</div>
              <div>starting today.</div>
            </div>
          </div>
          <div className="metrics-grid">
            <MetricItem icon="cube" label="Projects" value="12+" note="Active developments" />
            <MetricItem icon="team" label="Engineers" value="25+" note="Experts worldwide" />
            <MetricItem icon="chart" label="R&D investment" value="100%" note="Reinvested in innovation" />
            <MetricItem icon="clock" label="Testing hours" value="50K+" note="Simulation & real world" />
            <MetricItem icon="document" label="Patents" value="Pending" note="Multiple technologies" />
          </div>
        </div>
      </section>
    </>
  );
}

function MarikaPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Marika"
        lines={["Core intelligence.", "Architected to think."]}
        goldLines={[1]}
        description="Marika is the central intelligence behind PGEX systems – connecting research, language, planning, memory and execution into one evolving mind."
        primary={{ label: "Explore PGEX systems", href: "./portfolio.html" }}
        secondary={{ label: "See all projects", href: "./portfolio-unreal.html" }}
        image="./characters/marika.jpg"
        imagePosition="center top"
      />

      <section className="section-block">
        <CenteredHeading eyebrow="Central pillars" title="What makes Marika different." />
        <div className="tech-grid four-up">
          {MARIKA_PILLARS.map((item, index) => (
            <TechCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="panel marika-spotlight">
          <div className="marika-copy">
            <div className="section-mini-label">System focus</div>
            <h2 className="panel-heading">Research. Reasoning. Orchestration.</h2>
            <p>
              Marika is not just another assistant. It is designed as the reasoning core that connects communication, engineering and strategic execution across the entire PGEX ecosystem.
            </p>
            <ul className="bullet-list compact">
              <li>Long-horizon planning and structured thinking</li>
              <li>Context continuity across tools and environments</li>
              <li>Decision support for engineering and research</li>
              <li>Coordination between Luna and Xeno layers</li>
            </ul>
          </div>
          <ImageFrame src="./characters/marika.jpg" position="center top" className="marika-media" />
        </div>
      </section>

      <section className="section-block">
        <CenteredHeading eyebrow="Connected minds" title="Marika, Luna and Xeno work as one stack." />
        <div className="intelligence-grid">
          {INTELLIGENCE_CARDS.map((card, index) => (
            <IntelligenceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <CenteredHeading eyebrow="System stack" title="Built to scale across the whole platform." />
        <div className="tech-grid four-up">
          {MARIKA_STACK.map((item, index) => (
            <TechCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <HeroSplit
        eyebrow="About us"
        lines={["Our story.", "Our purpose."]}
        goldLines={[1]}
        description="Program Envus Xenos was founded on a simple idea – use technology, passion and hard work to build intelligent systems that make a difference."
        primary={{ label: "Explore our projects", href: "./portfolio-unreal.html" }}
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
        signature="Envus Xenos"
      />

      <section className="section-block split-history">
        <div className="panel timeline-card">
          <div className="section-mini-label">Our journey</div>
          <div className="timeline-list">
            {ABOUT_TIMELINE.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} last={index === ABOUT_TIMELINE.length - 1} />
            ))}
          </div>
        </div>

        <div className="story-stack">
          <div className="panel story-panel">
            <div className="section-mini-label">Our beginning</div>
            <h2 className="panel-heading">It started in a workshop.</h2>
            <p>We did not start in a laboratory. We started with tools, curiosity and a will to understand how things truly work.</p>
            <p>Every repair, every modification and every challenge made us better. This is where PGEX began.</p>
            <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="story-media" />
          </div>

          <div className="panel values-panel">
            <div className="section-mini-label">What we do today</div>
            <h2 className="panel-heading">More than a workshop.</h2>
            <p>We combine automotive expertise with advanced technology to create systems that perform, learn and evolve.</p>
            <div className="value-grid">
              {ABOUT_VALUES.map((item, index) => (
                <TechCard key={item.title} item={item} index={index} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="panel vision-strip">
          <ImageFrame src="./space/planet.jpg" position="right center" className="vision-media" />
          <div className="vision-copy">
            <div className="section-mini-label">Our vision</div>
            <h2 className="panel-heading">Beyond today&apos;s technology.</h2>
            <p>Our goal is to create technology that improves life on Earth and helps us explore what&apos;s beyond it.</p>
          </div>
          <div className="vision-points">
            <ValuePill icon="brain" title="Artificial intelligence" text="" />
            <ValuePill icon="network" title="Robotics" text="" />
            <ValuePill icon="car" title="Automotive engineering" text="" />
            <ValuePill icon="rocket" title="Aerospace" text="" />
            <ValuePill icon="leaf" title="Sustainable future" text="" />
          </div>
        </div>
      </section>

      <section className="section-block">
        <CenteredHeading eyebrow="The three intelligences" title="The minds that define PGEX." />
        <div className="intelligence-grid">
          {INTELLIGENCE_CARDS.map((card, index) => (
            <IntelligenceCard key={card.title} card={card} index={index} compact />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="panel philosophy-strip">
          <div className="philosophy-copy">
            <div className="section-mini-label">Our philosophy</div>
            <h2 className="panel-heading">
              We don&apos;t chase trends.
              <br />
              <span>We build technology for the future.</span>
            </h2>
          </div>
          <div className="philosophy-grid">
            {PHILOSOPHY.map((item) => (
              <ValuePill key={item.title} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="panel journey-banner">
          <div className="journey-copy">
            <div className="section-mini-label">From the workshop</div>
            <h2 className="panel-heading">
              To the stars.
            </h2>
            <p>Every great vision begins with a single step. This is ours.</p>
            <a href="./portfolio-unreal.html" className="btn btn-secondary">
              Join our journey
            </a>
          </div>
          <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="journey-media" />
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Contact us"
        lines={["Let’s build", "the future."]}
        goldLines={[1]}
        description="Have a question, a project in mind, or need our workshop services? We are here to help. Get in touch with us."
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
        signature="PGEX team"
      />

      <section className="section-block contact-grid">
        <div className="panel form-panel">
          <div className="section-mini-label">Send us a message</div>
          <h2 className="panel-heading">Let&apos;s talk.</h2>
          <p>Fill out the form and we will get back to you as soon as possible.</p>
          <div className="contact-form-grid">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" className="full" />
            <textarea placeholder="Your Message" rows={7} className="full" />
          </div>
          <button className="btn btn-primary" type="button">
            Send Message
          </button>
        </div>

        <div className="panel info-panel">
          <div className="section-mini-label">Get in touch</div>
          <p>You can also reach us directly through any of the following channels.</p>
          <div className="contact-channel-list">
            {CONTACT_CHANNELS.map((channel) => (
              <ContactChannel key={channel.title} item={channel} />
            ))}
          </div>
          <div className="social-row">
            {SOCIALS.map((item) => (
              <a key={item.label} href={item.href} className="social-chip">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block location-grid">
        <div className="panel location-copy">
          <div className="section-mini-label">Our location</div>
          <h2 className="panel-heading">Visit our workshop</h2>
          <p>We are located near Prague and ready to provide the best service for your vehicle.</p>
          <a href={MAPS_HREF} className="btn btn-secondary" target="_blank" rel="noreferrer">
            Get Directions
          </a>
          <div className="location-card">
            <div className="location-card-title">PGEX Workshop</div>
            <ul className="bullet-list compact">
              <li>Professional equipment</li>
              <li>Experienced engineers</li>
              <li>High quality standards</li>
              <li>Passion for technology</li>
            </ul>
          </div>
        </div>

        <div className="panel map-panel">
          <SceneFrame scene="map-grid" accent="gold" className="map-media" />
          <div className="map-badge">
            <img src={REFERENCES.logo} alt="" />
            <div>
              <strong>PGEX Workshop</strong>
              <span>K Letisti 123</span>
              <span>252 25 Jinocany</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="panel vision-strip">
          <ImageFrame src="./space/planet.jpg" position="right center" className="vision-media" />
          <div className="vision-copy">
            <div className="section-mini-label">Have a big project</div>
            <h2 className="panel-heading">
              Or a bold idea?
            </h2>
            <p>We are always open to new challenges and partnerships. Let&apos;s create something exceptional.</p>
            <a href={BOOK_SERVICE_HREF} className="btn btn-primary">
              Start a Project
            </a>
          </div>
          <div className="vision-points">
            <ValuePill icon="bulb" title="Innovative solutions" text="" />
            <ValuePill icon="chip" title="Advanced technologies" text="" />
            <ValuePill icon="team" title="Reliable partner" text="" />
            <ValuePill icon="infinity" title="Beyond limits" text="" />
          </div>
        </div>
      </section>
    </>
  );
}

function BookingPage() {
  return (
    <>
      <HeroSplit
        eyebrow="Book service"
        lines={["Book your", "service."]}
        goldLines={[1]}
        description="Professional care. Advanced technology. Built for performance."
        image="./vehicles/xenos-x2.jpg"
        imagePosition="center center"
      />

      <section className="section-block tight-top">
        <div className="booking-steps panel">
          {BOOKING_STEPS.map((step, index) => (
            <div key={step} className={`booking-step ${index === 0 ? "is-active" : ""}`}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block booking-grid">
        <div className="panel booking-services">
          <div className="section-mini-label">Choose a service</div>
          <h2 className="panel-heading">Select the service you need.</h2>
          <p>Transparent pricing, no hidden fees.</p>
          <div className="booking-service-grid">
            {SERVICE_OPTIONS.map((item) => (
              <BookingServiceCard key={item.title} item={item} />
            ))}
          </div>
          <div className="custom-request">
            <div>
              <div className="custom-title">Custom request</div>
              <p>Don&apos;t see the service you need? Tell us more about your issue.</p>
            </div>
            <a href="./contact.html" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="booking-side">
          <div className="panel why-panel">
            <div className="section-mini-label">Why choose PGEX?</div>
            <div className="stacked-points">
              <ValueRow icon="badge" title="Transparent pricing" text="You always know what you pay for." />
              <ValueRow icon="shield" title="OEM quality parts" text="We use high quality parts only." />
              <ValueRow icon="gear" title="Expert technicians" text="Certified and experienced team." />
              <ValueRow icon="chip" title="Modern equipment" text="Latest diagnostic technology." />
              <ValueRow icon="suspension" title="Passion for engineering" text="Built with precision and care." />
            </div>
          </div>

          <div className="panel help-panel">
            <div className="section-mini-label">Need help?</div>
            <ul className="contact-mini-list">
              <li>{CONTACT_FOOTER.phone}</li>
              <li>{CONTACT_FOOTER.email}</li>
              <li>{CONTACT_FOOTER.address}</li>
            </ul>
          <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="help-media" />
          </div>
        </div>
      </section>

      <section className="section-block booking-detail-grid">
        <div className="panel process-visual">
          <a href="./systems.html" className="subtle-link">‹ Back to Services</a>
          <div className="process-hero">
            <ImageFrame src="./vehicles/xenos-x2.jpg" position="center center" className="brake-media" />
            <div className="process-copy">
              <div className="section-mini-label">Brake Service</div>
              <h2 className="panel-heading">Maximum safety and control.</h2>
              <p>We ensure your braking system is in perfect condition for maximum safety and performance.</p>
            </div>
          </div>
        </div>

        <div className="panel process-list">
          <div className="section-mini-label">Our process</div>
          <ol>
            <li><strong>Diagnostics</strong><span>We diagnose the braking system and identify any issues.</span></li>
            <li><strong>Inspection</strong><span>We inspect brake pads, discs, calipers and fluid condition.</span></li>
            <li><strong>Consultation</strong><span>We discuss the findings and provide a clear quote.</span></li>
            <li><strong>Repair</strong><span>Work begins after your approval using quality parts.</span></li>
            <li><strong>Test drive</strong><span>We test the vehicle to ensure everything works perfectly.</span></li>
            <li><strong>Vehicle handover</strong><span>We return your car in perfect condition.</span></li>
          </ol>
        </div>

        <div className="panel summary-card">
          <div className="section-mini-label">Booking summary</div>
          <div className="summary-rows">
            <div><span>Service</span><strong>Brake Service</strong></div>
            <div><span>Parts</span><strong>3 200 Kc</strong></div>
            <div><span>Labour</span><strong>1 500 Kc</strong></div>
            <div className="total-row"><span>Estimated total</span><strong>from 4 700 Kc</strong></div>
          </div>
          <div className="notice-box">Final price depends on the vehicle model and repair scope. A quote is always confirmed before work begins.</div>
          <a href="./contact.html" className="btn btn-primary btn-wide">
            Continue to Vehicle
          </a>
        </div>
      </section>

      <section className="section-block">
        <div className="panel trust-banner">
          <div className="trust-copy">
            <strong>No hidden fees.</strong>
            <span>Every repair is discussed with the customer before work begins.</span>
          </div>
          <div className="trust-copy right">Quality. Transparency. Trust.</div>
        </div>
      </section>
    </>
  );
}

function HeroSplit({
  eyebrow,
  lines,
  goldLines = [],
  description,
  primary,
  secondary,
  scene,
  image,
  imagePosition = "center",
  callouts,
  signature,
}) {
  return (
    <section className="hero-block">
      <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="display-title">
          {lines.map((line, index) => (
            <span key={line} className={`display-line ${goldLines.includes(index) ? "is-gold" : ""}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="lead-copy">{description}</p>
        <div className="button-row">
          {primary && (
            <a href={primary.href} className="btn btn-primary">
              {primary.label}
            </a>
          )}
          {secondary && (
            <a href={secondary.href} className="btn btn-secondary">
              {secondary.label}
            </a>
          )}
        </div>
        {signature && <div className="hero-signature">{signature}</div>}
      </motion.div>

      <motion.div className="hero-visual panel" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
        {image ? (
          <ImageFrame src={image} position={imagePosition} className="hero-media" />
        ) : (
          <SceneFrame scene={scene} accent="gold" className="hero-media" />
        )}
        <div className="hero-brand-badge">
          <img src={REFERENCES.logo} alt="" />
          <div>
            <strong>{BRAND.short}</strong>
            <span>{BRAND.name}</span>
          </div>
        </div>
        {callouts && (
          <div className="hero-callouts">
            {callouts.map((callout) => (
              <div key={callout.title} className={`callout-pill ${callout.position}`}>
                <strong>{callout.title}</strong>
                <span>{callout.text}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

function StatStrip({ items }) {
  return (
    <section className="section-block tight-top">
      <div className="stat-strip panel">
        {items.map((item, index) => (
          <div key={item.label} className={`stat-cell ${index === items.length - 1 ? "is-last" : ""}`}>
            <div className="stat-icon"><Icon name={item.icon} /></div>
            <div>
              <div className="stat-label">{item.label}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-note">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CenteredHeading({ eyebrow, title }) {
  return (
    <div className="section-heading center">
      <div className="eyebrow centered">{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  );
}

function IntelligenceCard({ card, index, compact = false }) {
  return (
    <motion.article
      className={`panel intelligence-card accent-${card.accent} ${card.image ? "has-character-image" : ""} ${card.contentSide === "right" ? "content-right" : ""} ${compact ? "is-compact" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      {card.image ? (
        <div className="intelligence-media character-media" aria-hidden="true">
          <img src={card.image} alt="" style={{ objectPosition: card.imagePosition }} />
        </div>
      ) : (
        <SceneFrame scene={card.scene} accent={card.accent} className="intelligence-media" />
      )}
      <div className="intelligence-content">
        <h3>{card.title}</h3>
        <div className="card-kicker">{card.subtitle}</div>
        <p>{card.text}</p>
        {!compact && (
          <ul className="card-points">
            {card.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <a href={card.href} className={`btn ${card.accent === "blue" ? "btn-outline-blue" : "btn-secondary"} btn-small`}>
          {card.cta}
        </a>
      </div>
    </motion.article>
  );
}

function IconFeatureCard({ item, index }) {
  return (
    <motion.div
      className="panel feature-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="feature-icon"><Icon name={item.icon} /></div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </motion.div>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.article
      className="panel service-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <SceneFrame scene={service.scene} accent="gold" className="service-media" />
      <div className="service-body">
        <div className="service-badge"><Icon name={service.icon} /></div>
        <h3>{service.title}</h3>
        <p>{service.text}</p>
        <a href={BOOK_SERVICE_HREF} className="subtle-link">Learn more ›</a>
      </div>
    </motion.article>
  );
}

function TechCard({ item, index, compact = false }) {
  return (
    <motion.article
      className={`panel tech-card ${compact ? "is-compact" : ""}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="tech-icon"><Icon name={item.icon} /></div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </motion.article>
  );
}

function ProjectCard({ card, index }) {
  return (
    <motion.article
      className={`panel project-card accent-${card.accent}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      {card.image ? (
        <ImageFrame src={card.image} position={card.imagePosition} className="project-media" />
      ) : (
        <SceneFrame scene={card.scene} accent={card.accent} className="project-media" />
      )}
      <div className="project-content">
        <div className="card-kicker">{card.category}</div>
        <h3>{card.title}</h3>
        <div className="project-subtitle">{card.subtitle}</div>
        <p>{card.text}</p>
        <div className="project-actions">
          <a href={card.href} className="btn btn-secondary btn-small">View Project</a>
          <span className="project-status">{card.status}</span>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineItem({ item, index, last }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <span className="timeline-dot"><Icon name={index === 0 ? "wrench" : index === 1 ? "gear" : index === 2 ? "brain" : index === 3 ? "infinity" : index === 4 ? "car" : "rocket"} /></span>
        {!last && <i />}
      </div>
      <div className="timeline-copy">
        {item.year && <div className="timeline-year">{item.year}</div>}
        <strong>{item.title}</strong>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

function ValuePill({ icon, title, text }) {
  return (
    <div className="value-pill">
      <div className="value-icon"><Icon name={icon} /></div>
      <div>
        <strong>{title}</strong>
        {text ? <span>{text}</span> : null}
      </div>
    </div>
  );
}

function ValueRow({ icon, title, text }) {
  return (
    <div className="value-row">
      <div className="value-icon"><Icon name={icon} /></div>
      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
    </div>
  );
}

function MetricItem({ icon, label, value, note }) {
  return (
    <div className="metric-item">
      <div className="metric-icon"><Icon name={icon} /></div>
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-note">{note}</div>
    </div>
  );
}

function ContactChannel({ item }) {
  return (
    <div className="contact-channel">
      <div className="contact-channel-icon"><Icon name={item.icon} /></div>
      <div>
        <strong>{item.title}</strong>
        <span>{item.text}</span>
        <small>{item.meta}</small>
      </div>
    </div>
  );
}

function BookingServiceCard({ item }) {
  return (
    <div className={`booking-service-card ${item.active ? "is-active" : ""}`}>
      <SceneFrame scene={item.scene} accent="gold" className="booking-card-art" />
      <div className="booking-service-header">
        <div className="value-icon"><Icon name={item.icon} /></div>
        <div>
          <strong>{item.title}</strong>
        </div>
        {item.active ? <span className="booking-check">●</span> : null}
      </div>
      <ul>
        {item.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="booking-price">
        <span>{item.pricing[0]}</span>
        <strong>{item.pricing[1]}</strong>
      </div>
    </div>
  );
}

function CtaStrip({ title, text, action }) {
  return (
    <section className="section-block">
      <div className="panel cta-strip">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a href={action.href} className="btn btn-primary">
          {action.label}
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-shell footer-shell">
      <div className="footer-grid panel">
        <div className="footer-brand">
          <img src={REFERENCES.logo} alt="Program Envus Xenos logo" className="brand-logo" />
          <div>
            <div className="brand-name">{BRAND.name}</div>
            <div className="brand-sub">{BRAND.short}</div>
            <div className="footer-tagline">{BRAND.tagline}</div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          {FOOTER_NAV.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          {["Diagnostics", "Engine Service", "Brakes", "Suspension", "Electrical", "Performance"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <span>{CONTACT_FOOTER.email}</span>
          <span>{CONTACT_FOOTER.phone}</span>
          <span>{CONTACT_FOOTER.address}</span>
        </div>

        <div className="footer-column">
          <h4>Follow PGEX</h4>
          <div className="social-row footer-socials">
            {SOCIALS.map((item) => (
              <a key={item.label} href={item.href} className="social-chip">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Program Envus Xenos. All rights reserved.</span>
        <span>Engineering • AI • Technology • Space</span>
      </div>
    </footer>
  );
}

function SceneFrame({ scene, accent = "gold", className = "" }) {
  return (
    <div className={`scene-frame accent-${accent} ${className}`.trim()}>
      <div className={`scene-art scene-art-${scene}`.trim()} aria-hidden="true" />
    </div>
  );
}

function ImageFrame({ src, alt = "", position = "center", className = "" }) {
  return (
    <div className={`scene-frame image-frame ${className}`.trim()}>
      <img className="scene-image" src={src} alt={alt} style={{ objectPosition: position }} />
    </div>
  );
}

function SceneArtwork({ variant, accent = "gold" }) {
  const uid = useId().replace(/:/g, "");
  const palette = SCENE_PALETTES[accent] || SCENE_PALETTES.gold;
  const bgId = `${uid}-bg`;
  const gridId = `${uid}-grid`;
  const glowId = `${uid}-glow`;

  return (
    <svg viewBox="0 0 600 420" className="scene-svg" aria-hidden="true">
      <defs>
        <linearGradient id={bgId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050507" />
          <stop offset="55%" stopColor="#0c0c10" />
          <stop offset="100%" stopColor="#040405" />
        </linearGradient>
        <radialGradient id={glowId} cx="78%" cy="18%" r="58%">
          <stop offset="0%" stopColor={palette.glow} stopOpacity="0.52" />
          <stop offset="48%" stopColor={palette.stroke} stopOpacity="0.14" />
          <stop offset="100%" stopColor={palette.stroke} stopOpacity="0" />
        </radialGradient>
        <pattern id={gridId} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke={palette.stroke} strokeOpacity="0.15" strokeWidth="0.75" />
        </pattern>
      </defs>

      <rect width="600" height="420" fill={`url(#${bgId})`} />
      <rect width="600" height="420" fill={`url(#${gridId})`} opacity="0.38" />
      <circle cx="492" cy="70" r="170" fill={`url(#${glowId})`} />

      <g fill="none" stroke={palette.stroke} strokeOpacity="0.18">
        <path d="M54 74H546" />
        <path d="M64 344H536" />
        <ellipse cx="300" cy="314" rx="210" ry="58" />
      </g>

      <g fill={palette.node}>
        <circle cx="128" cy="90" r="2.5" opacity="0.8" />
        <circle cx="466" cy="116" r="2.5" opacity="0.75" />
        <circle cx="502" cy="158" r="2" opacity="0.8" />
      </g>

      {renderSceneVariant(variant, palette)}
    </svg>
  );
}

function renderSceneVariant(variant, palette) {
  switch (variant) {
    case "garage":
    case "service-bay":
    case "contact-bay":
    case "booking-bay":
    case "workshop-bay":
    case "covered-car":
    case "hypercar":
    case "sportscar":
      return <CarScene palette={palette} variant={variant} />;
    case "tech-spire":
    case "server-stack":
      return <SystemScene palette={palette} variant={variant} />;
    case "marika-core":
    case "marika-portrait":
    case "luna-portrait":
    case "xeno-portrait":
      return <MindScene palette={palette} variant={variant} />;
    case "diagnostics":
    case "engine":
    case "brakes":
    case "suspension":
    case "electrical":
    case "performance":
      return <ModuleScene palette={palette} variant={variant} />;
    case "robot-arm":
      return <RobotScene palette={palette} />;
    case "starship":
      return <StarshipScene palette={palette} />;
    case "map-grid":
      return <MapScene palette={palette} />;
    case "tool-wall":
      return <ToolWallScene palette={palette} />;
    case "future-route":
      return <RouteScene palette={palette} />;
    default:
      return <SystemScene palette={palette} variant="tech-spire" />;
  }
}

function CarScene({ palette, variant }) {
  const covered = variant === "covered-car";
  const lifted = variant === "workshop-bay";
  const sporty = variant === "hypercar" || variant === "sportscar";
  const baseY = lifted ? 250 : 292;
  const roofY = lifted ? 206 : 244;

  return (
    <>
      <g opacity="0.88">
        <rect x="102" y="84" width="12" height={lifted ? 208 : 176} rx="6" fill={palette.glow} opacity="0.78" />
        <rect x="486" y="84" width="12" height={lifted ? 208 : 176} rx="6" fill={palette.glow} opacity="0.78" />
        <rect x="294" y="92" width="8" height="150" rx="4" fill={palette.glow} opacity="0.52" />
      </g>
      <g fill="none" stroke={palette.stroke} strokeOpacity="0.28">
        <path d={`M74 ${baseY + 34}H526`} />
        <path d={`M118 ${baseY + 16}H482`} />
      </g>
      {covered ? (
        <path
          d="M154 286 C182 210 244 172 314 172 C392 172 458 214 484 280 C434 298 380 304 308 306 C242 308 190 304 154 286 Z"
          fill={palette.stroke}
          fillOpacity="0.12"
          stroke={palette.glow}
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
      ) : (
        <>
          <path d={`M132 ${baseY} C180 ${roofY} 236 ${roofY - 16} 306 ${roofY - 14} C378 ${roofY - 10} 438 ${roofY + 8} 488 ${baseY}`} fill="none" stroke={palette.glow} strokeWidth={sporty ? "4.4" : "3.7"} strokeLinecap="round" />
          <path d={`M162 ${baseY - 44} C206 ${roofY - 16} 252 ${roofY - 26} 320 ${roofY - 22} C380 ${roofY - 18} 426 ${roofY - 2} 456 ${baseY - 24}`} fill="none" stroke={palette.stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d={`M152 ${baseY + 4}H474`} fill="none" stroke={palette.glow} strokeWidth="3" strokeLinecap="round" />
          <path d={`M458 ${baseY - 16}l24 8`} fill="none" stroke={palette.glow} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      <circle cx="214" cy={baseY + 10} r={sporty ? "34" : "30"} fill="none" stroke={palette.glow} strokeWidth="3.2" />
      <circle cx="214" cy={baseY + 10} r="11" fill="none" stroke={palette.stroke} strokeWidth="2" />
      <circle cx="412" cy={baseY + 10} r={sporty ? "34" : "30"} fill="none" stroke={palette.glow} strokeWidth="3.2" />
      <circle cx="412" cy={baseY + 10} r="11" fill="none" stroke={palette.stroke} strokeWidth="2" />
      {variant === "contact-bay" ? (
        <g stroke={palette.stroke} strokeOpacity="0.34">
          <path d="M124 114H226M124 136H250M420 118H494M404 140H494" />
        </g>
      ) : null}
      {variant === "booking-bay" ? (
        <g fill="none" stroke={palette.stroke} strokeOpacity="0.34">
          <circle cx="138" cy="118" r="16" />
          <path d="M170 118H316M334 118H438" />
        </g>
      ) : null}
    </>
  );
}

function SystemScene({ palette, variant }) {
  if (variant === "server-stack") {
    return (
      <>
        <g fill={palette.stroke} fillOpacity="0.08" stroke={palette.stroke} strokeOpacity="0.34">
          <rect x="118" y="102" width="110" height="210" rx="12" />
          <rect x="246" y="86" width="108" height="226" rx="12" />
          <rect x="372" y="108" width="110" height="204" rx="12" />
        </g>
        <g stroke={palette.glow} strokeOpacity="0.48">
          {Array.from({ length: 7 }).map((_, index) => (
            <g key={index}>
              <path d={`M138 ${122 + index * 26}H206`} />
              <path d={`M264 ${108 + index * 28}H336`} />
              <path d={`M392 ${128 + index * 24}H462`} />
            </g>
          ))}
        </g>
      </>
    );
  }

  return (
    <>
      <g fill="none" stroke={palette.stroke} strokeOpacity="0.24">
        <ellipse cx="334" cy="210" rx="176" ry="92" />
        <ellipse cx="334" cy="210" rx="138" ry="70" />
        <ellipse cx="334" cy="210" rx="100" ry="48" />
      </g>
      <g fill={palette.stroke} fillOpacity="0.08" stroke={palette.glow} strokeOpacity="0.42">
        <rect x="286" y="94" width="96" height="188" rx="14" />
        <rect x="306" y="52" width="56" height="64" rx="10" />
        <rect x="318" y="24" width="32" height="42" rx="8" />
      </g>
    </>
  );
}

function MindScene({ palette, variant }) {
  const crown = variant === "marika-core" || variant === "marika-portrait";
  const waves = variant === "luna-portrait";
  const diagonals = variant === "xeno-portrait";

  return (
    <>
      <g fill="none" stroke={palette.stroke} strokeOpacity="0.22">
        <circle cx="300" cy="130" r="80" />
        <circle cx="300" cy="130" r="108" />
      </g>
      <g fill={palette.stroke} fillOpacity="0.1" stroke={palette.glow} strokeOpacity="0.42">
        <path d="M256 186 C264 132 282 102 300 100 C320 102 338 132 344 186 C328 208 316 216 300 218 C284 216 270 208 256 186 Z" />
        <path d="M224 320 C236 258 268 226 300 226 C332 226 364 258 376 320 C344 334 322 340 300 340 C278 340 256 334 224 320 Z" />
      </g>
      <path d="M272 150 C282 136 292 130 300 128 C308 130 318 136 328 150" fill="none" stroke={palette.glow} strokeWidth="2.8" strokeLinecap="round" />
      {crown ? <path d="M258 84 L300 54 L342 84 M282 78 L300 36 L318 78" fill="none" stroke={palette.glow} strokeWidth="2.8" strokeLinecap="round" /> : null}
      {waves ? <path d="M194 116 C238 126 250 180 226 228 M406 116 C362 126 350 180 374 228" fill="none" stroke={palette.stroke} strokeOpacity="0.48" strokeWidth="2.3" /> : null}
      {diagonals ? <path d="M196 122 L250 170 M178 248 L244 214 M352 176 L424 116 M346 248 L418 262" fill="none" stroke={palette.stroke} strokeOpacity="0.46" strokeWidth="2.2" /> : null}
    </>
  );
}

function ModuleScene({ palette, variant }) {
  switch (variant) {
    case "engine":
      return (
        <>
          <rect x="168" y="152" width="224" height="116" rx="24" fill={palette.stroke} fillOpacity="0.08" stroke={palette.glow} strokeWidth="3" />
          <path d="M208 138V152M352 138V152M154 188H194M154 228H194M392 186H436M392 228H436" fill="none" stroke={palette.glow} strokeWidth="3" strokeLinecap="round" />
          <rect x="226" y="182" width="104" height="56" rx="16" fill="none" stroke={palette.stroke} strokeWidth="3" />
        </>
      );
    case "brakes":
      return (
        <>
          <circle cx="300" cy="214" r="94" fill={palette.stroke} fillOpacity="0.08" stroke={palette.glow} strokeWidth="3.4" />
          <circle cx="300" cy="214" r="52" fill="none" stroke={palette.stroke} strokeWidth="3" />
          <circle cx="300" cy="214" r="18" fill="none" stroke={palette.glow} strokeWidth="3" />
        </>
      );
    case "suspension":
      return (
        <>
          <path d="M300 110V314" fill="none" stroke={palette.glow} strokeWidth="4" strokeLinecap="round" />
          <path d="M248 138 C288 160 312 160 352 138 C312 180 288 180 248 202 C288 224 312 224 352 202 C312 246 288 246 248 270 C288 292 312 292 352 270" fill="none" stroke={palette.stroke} strokeWidth="3.4" strokeLinecap="round" />
        </>
      );
    case "electrical":
      return <path d="M310 104L234 224H292L278 318L366 192H306L310 104Z" fill={palette.stroke} fillOpacity="0.16" stroke={palette.glow} strokeWidth="3" strokeLinejoin="round" />;
    case "performance":
      return (
        <>
          <path d="M186 274 A114 114 0 0 1 414 274" fill="none" stroke={palette.glow} strokeWidth="4" strokeLinecap="round" />
          <path d="M300 274 L384 178" fill="none" stroke={palette.glow} strokeWidth="4" strokeLinecap="round" />
          <circle cx="300" cy="274" r="16" fill={palette.stroke} fillOpacity="0.16" stroke={palette.glow} strokeWidth="3" />
        </>
      );
    default:
      return (
        <>
          <rect x="230" y="144" width="140" height="140" rx="28" fill={palette.stroke} fillOpacity="0.08" stroke={palette.glow} strokeWidth="3.2" />
          <path d="M258 116V144M300 104V144M342 116V144M230 186H184M230 232H184M370 186H416M370 232H416M258 284V314M300 284V328M342 284V314" fill="none" stroke={palette.glow} strokeWidth="3" strokeLinecap="round" />
        </>
      );
  }
}

function RobotScene({ palette }) {
  return (
    <>
      <rect x="168" y="286" width="110" height="44" rx="12" fill={palette.stroke} fillOpacity="0.08" stroke={palette.glow} strokeWidth="3" />
      <circle cx="254" cy="254" r="28" fill={palette.stroke} fillOpacity="0.1" stroke={palette.glow} strokeWidth="3" />
      <circle cx="326" cy="196" r="22" fill={palette.stroke} fillOpacity="0.1" stroke={palette.glow} strokeWidth="3" />
      <path d="M278 238L308 212L344 212L378 166" fill="none" stroke={palette.glow} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function StarshipScene({ palette }) {
  return (
    <>
      <path d="M40 338 C148 280 238 258 340 266 C430 274 514 300 586 346" fill="none" stroke={palette.stroke} strokeOpacity="0.34" strokeWidth="2.8" />
      <path d="M220 278L378 126L416 164L264 292Z" fill={palette.stroke} fillOpacity="0.12" stroke={palette.glow} strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M394 144L470 110L428 188" fill="none" stroke={palette.glow} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function MapScene({ palette }) {
  return (
    <>
      <g stroke={palette.stroke} strokeOpacity="0.34" fill="none" strokeLinecap="round">
        <path d="M78 356L220 62" strokeWidth="3" />
        <path d="M152 336L340 104" strokeWidth="2" />
        <path d="M312 362L496 84" strokeWidth="3" />
      </g>
      <path d="M338 208c0-26 20-46 46-46s46 20 46 46c0 34-46 82-46 82s-46-48-46-82Z" fill={palette.stroke} fillOpacity="0.18" stroke={palette.glow} strokeWidth="3.2" />
      <circle cx="384" cy="208" r="14" fill="none" stroke={palette.glow} strokeWidth="3" />
    </>
  );
}

function ToolWallScene({ palette }) {
  return (
    <>
      <g fill={palette.stroke} fillOpacity="0.06" stroke={palette.stroke} strokeOpacity="0.24">
        <rect x="88" y="112" width="136" height="196" rx="16" />
        <rect x="236" y="132" width="128" height="176" rx="16" />
        <rect x="376" y="100" width="136" height="208" rx="16" />
      </g>
      <g stroke={palette.glow} strokeWidth="3" strokeLinecap="round">
        <path d="M152 146V220M140 162H164" />
        <path d="M172 184L186 214" />
        <path d="M290 164L322 222" />
        <path d="M426 154V222M410 172H442M418 212H434" />
      </g>
    </>
  );
}

function RouteScene({ palette }) {
  return (
    <>
      <path d="M30 306 C154 238 258 214 366 222 C468 230 544 264 590 298" fill="none" stroke={palette.stroke} strokeOpacity="0.34" strokeWidth="3.2" />
      <path d="M112 302 C164 256 232 234 306 232 C388 230 454 252 502 296" fill="none" stroke={palette.glow} strokeWidth="3.8" strokeLinecap="round" />
      <circle cx="504" cy="72" r="28" fill={palette.glow} opacity="0.65" />
    </>
  );
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" className="icon-svg" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name) {
  switch (name) {
    case "brain":
      return (
        <>
          <path d="M8 7a3 3 0 0 1 6 0 3 3 0 0 1 2 5 3 3 0 0 1-2 5H10a3 3 0 0 1-2-5 3 3 0 0 1 0-5Z" />
          <path d="M12 5v14M9.5 9.5H12m-2 4H12m0-4h2.5m-2 4h2" />
        </>
      );
    case "cube":
      return (
        <>
          <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="M12 3v18M5 7l7 4 7-4" />
        </>
      );
    case "gear":
      return (
        <>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.8v2.4M12 18.8v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.8 12h2.4M18.8 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
        </>
      );
    case "infinity":
      return <path d="M7.2 15.5c2.2 0 3.2-2.2 4.8-4 1.3-1.5 2.4-3 4.8-3 2.3 0 4 1.5 4 3.5s-1.7 3.5-4 3.5c-2.4 0-3.5-1.5-4.8-3-1.6-1.8-2.6-4-4.8-4-2.3 0-4 1.5-4 3.5s1.7 3.5 4 3.5Z" />;
    case "wrench":
      return <path d="m14.5 4.5 5 5-2 2-5-5a3.5 3.5 0 1 0-5 5l-4 4 3 3 4-4a3.5 3.5 0 0 0 5-5Z" />;
    case "target":
      return (
        <>
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 4.5V2.5M12 21.5v-2M4.5 12H2.5M21.5 12h-2" />
        </>
      );
    case "shield":
      return (
        <>
          <path d="M12 3.5 18 6v5c0 4-2.7 7-6 9-3.3-2-6-5-6-9V6l6-2.5Z" />
          <path d="m9.5 12 1.6 1.6 3-3.2" />
        </>
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5v5l3 2" />
        </>
      );
    case "bolt":
      return <path d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z" />;
    case "car":
      return (
        <>
          <path d="M5 14h14l-1.4-4.2A3 3 0 0 0 14.8 8H9.2a3 3 0 0 0-2.8 1.8L5 14Z" />
          <path d="M4.5 14.5v2.5h1.8M17.7 17h1.8v-2.5M7.5 17a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Zm9 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z" />
        </>
      );
    case "network":
      return (
        <>
          <circle cx="12" cy="4.5" r="1.6" />
          <circle cx="5" cy="9" r="1.6" />
          <circle cx="19" cy="9" r="1.6" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
          <path d="M12 6v3M6.5 10l4 2M17.5 10l-4 2M8 16l3-2M16 16l-3-2" />
        </>
      );
    case "database":
      return (
        <>
          <ellipse cx="12" cy="5.5" rx="6.5" ry="2.5" />
          <path d="M5.5 5.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6M5.5 11.5v6c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-6" />
        </>
      );
    case "chip":
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="1.8" />
          <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" />
        </>
      );
    case "cloud":
      return <path d="M8.5 18h8.2a3.8 3.8 0 0 0 .3-7.6 5.5 5.5 0 0 0-10.6 1.4A3.4 3.4 0 0 0 8.5 18Z" />;
    case "code":
      return <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 5l-2 14" />;
    case "search":
      return (
        <>
          <circle cx="10.5" cy="10.5" r="5.5" />
          <path d="m15 15 5 5" />
        </>
      );
    case "rocket":
      return (
        <>
          <path d="M14 4c3 1 5 4 6 7l-4 1-4 4-1 4c-3-1-6-3-7-6l4-1 4-4 1-5Z" />
          <path d="M9 15 5 19M6 14l-2 4M10 20l4-2" />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="3.5" y="6.5" width="17" height="11" rx="2" />
          <path d="m5.5 8.5 6.5 5 6.5-5" />
        </>
      );
    case "phone":
      return <path d="M8 4.5c0 6 5.5 11.5 11.5 11.5l2-2.2c.4-.4.5-1 .2-1.5l-1.8-3c-.3-.5-.9-.7-1.4-.5l-2.5 1a15 15 0 0 1-4-4l1-2.5c.2-.5 0-1.1-.5-1.4l-3-1.8c-.5-.3-1.1-.2-1.5.2L8 4.5Z" />;
    case "pin":
      return (
        <>
          <path d="M12 21s6-5.8 6-10.3a6 6 0 1 0-12 0C6 15.2 12 21 12 21Z" />
          <circle cx="12" cy="10.5" r="2.2" />
        </>
      );
    case "message":
      return (
        <>
          <rect x="4" y="5" width="16" height="11" rx="2.5" />
          <path d="M8 19h8" />
        </>
      );
    case "disc":
      return (
        <>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
        </>
      );
    case "suspension":
      return <path d="M12 3v18M8 6l4 2 4-2M8 12l4 2 4-2M8 18l4-2 4 2" />;
    case "gauge":
      return (
        <>
          <path d="M5 16a7 7 0 1 1 14 0" />
          <path d="m12 12 4-3" />
        </>
      );
    case "engine":
      return (
        <>
          <path d="M5 9h9l2 2h3v5h-3l-2 2H8l-3-3V9Z" />
          <path d="M9 7v2M13 7v2" />
        </>
      );
    case "heart":
      return <path d="M12 20s-7-4.7-7-10.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7 2.8C19 15.3 12 20 12 20Z" />;
    case "diamond":
      return <path d="M7 5h10l3 4-8 10L4 9l3-4Z" />;
    case "bulb":
      return (
        <>
          <path d="M9 18h6M10 21h4M8 10a4 4 0 1 1 8 0c0 1.7-.8 2.8-1.8 3.8-.7.7-1.2 1.3-1.2 2.2h-2c0-.9-.5-1.5-1.2-2.2C8.8 12.8 8 11.7 8 10Z" />
        </>
      );
    case "badge":
      return (
        <>
          <path d="M12 3.5 18 6v5c0 4-2.7 7-6 9-3.3-2-6-5-6-9V6l6-2.5Z" />
          <circle cx="12" cy="11" r="1.6" />
        </>
      );
    case "team":
      return (
        <>
          <circle cx="8" cy="9" r="2.5" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M4 18c0-2.5 2-4 4-4M20 18c0-2.5-2-4-4-4M8 18c0-2.5 1.8-4 4-4s4 1.5 4 4" />
        </>
      );
    case "chart":
      return <path d="M5 18V8M12 18V5M19 18v-9M3 20h18" />;
    case "document":
      return (
        <>
          <path d="M7 3.5h7l4 4V20H7Z" />
          <path d="M14 3.5V8h4M9 12h6M9 16h6" />
        </>
      );
    case "leaf":
      return <path d="M19 5c-8 0-12 5-12 11 0 1.5.5 2.5 1.5 3.5C16 18 19 11 19 5ZM7.5 19.5C8 15 11 11 15.5 8.5" />;
    default:
      return <circle cx="12" cy="12" r="7" />;
  }
}
