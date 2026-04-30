import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import resumeData from "../docs/resume_data_2026.json";

const heroProjects = [
  {
    id: "calling",
    title: "Agentic AI Calling POC",
    summary: "Twilio + AWS calling agent for GTAA.",
    problem: "Manual call workflows needed a reliable automation path and clearer ownership.",
    role: "Led end-to-end design and delivery.",
    impact: "Validated an agentic workflow leadership could act on instead of a slide deck.",
    tags: ["agents", "Twilio", "AWS"],
  },
  {
    id: "assistant",
    title: "GenAI Assistant",
    summary: "RAG + LangChain + MCP with hybrid evaluation.",
    problem: "Troubleshooting tickets were slow, noisy, and hard to trust.",
    role: "Shipped the assistant and the evaluation approach.",
    impact: "Reduced ticket troubleshooting effort by about 60%.",
    tags: ["RAG", "LangChain", "MCP"],
  },
  {
    id: "migration",
    title: "Data Pipeline Migration",
    summary: "100+ Airflow/PySpark pipelines moved from Cloudera to HPE.",
    problem: "Critical data flows needed to move without breaking operations.",
    role: "Drove migration and kept the platform stable.",
    impact: "De-risked modernization while keeping pipelines alive.",
    tags: ["Airflow", "PySpark", "Data"],
  },
];

const principles = [
  {
    title: "Systems over features",
    summary: "Prefer workflows and primitives that keep paying off.",
    detail: "I gravitate toward foundations that reduce repeated work and make future changes cheaper.",
  },
  {
    title: "Speed with safety",
    summary: "Move quickly, but keep observability and rollback in reach.",
    detail: "Fast delivery only matters if the team can trust the result and recover from mistakes.",
  },
  {
    title: "Show, then talk",
    summary: "Ship something touchable, then improve it with feedback.",
    detail: "I prefer prototypes and working systems over abstract explanations or speculative decks.",
  },
];

const nowItems = [
  "Shipping agentic AI and developer tooling at Singtel.",
  "Working across data platforms, assistants, and production reliability.",
  "Turning messy processes into tools people can actually use.",
  "Favoring evaluation and iteration over vague AI claims.",
];

const experienceRows = [
  {
    company: "Singtel",
    role: "Fullstack AI Engineer (Management Associate)",
    period: "Jul 2024 - Present",
    note: "Agentic AI, GenAI assistants, and data migrations.",
  },
  {
    company: "nextnanoGmbH",
    role: "Software and Business Developer Intern",
    period: "Jul 2023 - Dec 2023",
    note: "Built automation, CI/CD, and internal delivery tooling.",
  },
  {
    company: "OneSanta",
    role: "Chief Technology Officer",
    period: "Nov 2020 - Jul 2023",
    note: "Scaled an education product and helped double sales.",
  },
  {
    company: "Internships",
    role: "Data / ML / Infra roles",
    period: "2020 - 2023",
    note: "Experience across Accenture, M1, AiPalette, Matchin, and DSTA.",
  },
];

function Tile({ label, title, description, expanded, onToggle, children, className = "" }) {
  return (
    <motion.article
      layout
      className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] border bg-white/[0.045] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-colors ${expanded ? "border-[#0d9488]/70 bg-white/[0.07]" : "border-white/10"} ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 text-left"
      >
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#0d9488]">{label}</div>
          <h2 className="mt-2 text-[clamp(1.2rem,1.5vw,1.85rem)] font-semibold tracking-tight text-white">{title}</h2>
          {description ? <p className="mt-2 max-w-lg text-sm leading-6 text-white/60">{description}</p> : null}
        </div>
        <div className="mt-1 flex flex-col items-end gap-2">
          <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/65">
            {expanded ? "Collapse" : "Expand"}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
        </div>
      </button>
      <div className="min-h-0 flex-1 px-5 py-4">{children}</div>
    </motion.article>
  );
}

function App() {
  const [expandedPanel, setExpandedPanel] = useState("work");
  const [activeProject, setActiveProject] = useState(null);

  const contact = resumeData.personal.contact;
  const socialLinks = [
    {
      label: "GitHub",
      href: `https://github.com/${contact.github}`,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${contact.linkedin}`,
    },
    {
      label: "Email",
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <CustomThemeProvider>
      <HelmetProvider>
        <Helmet>
          <title>Allard Quek | Command Deck v1</title>
          <meta
            name="description"
            content="A one-screen command deck portfolio for Allard Quek, focused on clear navigation and concise information scent."
          />
        </Helmet>

        <div className="relative min-h-screen overflow-x-hidden bg-[#09100f] text-[#edf1ef] selection:bg-[#0d9488]/30">
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-75"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(13, 148, 136, 0.14) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(13, 148, 136, 0.14) 1px, transparent 1px),
                radial-gradient(circle at 20% 0%, rgba(13, 148, 136, 0.18), transparent 35%),
                radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.05), transparent 28%)
              `,
              backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%",
            }}
          />

          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#09100f]/92 backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#0d9488]">Allard Quek</div>
                <div className="mt-1 text-sm text-white/65">Software Engineer · Singapore</div>
              </div>

              <div className="hidden max-w-2xl text-center text-sm leading-6 text-white/72 lg:block">
                Software engineer building AI agents, infrastructure, and developer tooling.
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-full border border-white/10 px-3 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/70 transition-colors hover:border-[#0d9488]/60 hover:text-white"
                    target={link.label === "Email" ? undefined : "_blank"}
                    rel={link.label === "Email" ? undefined : "noreferrer"}
                  >
                    {link.label}
                  </a>
                ))}
                <span className="hidden rounded-full border border-[#0d9488]/35 bg-[#0d9488]/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9be9df] md:inline-flex">
                  ⌘K / Ctrl+K
                </span>
              </div>
            </nav>
          </header>

          <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:h-[calc(100vh-73px)] lg:overflow-hidden lg:py-4">
            <div className="grid gap-4 lg:h-full lg:grid-cols-[minmax(260px,0.92fr)_minmax(420px,1.45fr)_minmax(260px,0.92fr)]">
              <div className="grid gap-4 lg:h-full lg:grid-rows-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <Tile
                  label="About & Now"
                  title={resumeData.personal.name}
                  description="A concise view of the person behind the work."
                  expanded={expandedPanel === "about"}
                  onToggle={() => setExpandedPanel(expandedPanel === "about" ? null : "about")}
                >
                  <div className="flex h-full flex-col gap-4 text-sm leading-6 text-white/80">
                    <p>{resumeData.personal.motto}</p>
                    <p>
                      Fullstack / AI engineer at Singtel, working across agentic systems, data platforms, and production tooling.
                    </p>
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#0d9488]">Now</div>
                      <ul className="space-y-2">
                        {nowItems.map((item) => (
                          <li key={item} className="flex gap-2 text-white/72">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0d9488]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tile>

                <Tile
                  label="Principles"
                  title="How I work"
                  description="A small set of operating rules that shape the rest of the deck."
                  expanded={expandedPanel === "principles"}
                  onToggle={() => setExpandedPanel(expandedPanel === "principles" ? null : "principles")}
                >
                  <div className="flex h-full flex-col justify-between gap-3 text-sm leading-6 text-white/78">
                    {principles.map((principle) => (
                      <div key={principle.title} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">{principle.title}</div>
                        <p className="mt-2">{expandedPanel === "principles" ? principle.detail : principle.summary}</p>
                      </div>
                    ))}
                  </div>
                </Tile>
              </div>

              <Tile
                label="Selected Work"
                title="Projects"
                description="Click a project to open the detail sheet."
                expanded={expandedPanel === "work"}
                onToggle={() => setExpandedPanel(expandedPanel === "work" ? null : "work")}
                className="lg:min-h-0"
              >
                <div className="flex h-full flex-col gap-3">
                  <div className="hidden items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-white/45 lg:flex">
                    <span>Selected Projects</span>
                    <span>{activeProject ? activeProject.title : "Click a project"}</span>
                  </div>

                  <div className="grid gap-3">
                    {heroProjects.map((project) => {
                      const isActive = activeProject?.id === project.id;
                      return (
                        <button
                          key={project.id}
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className={`group rounded-2xl border px-4 py-4 text-left transition-colors ${
                            isActive ? "border-[#0d9488]/70 bg-[#0d9488]/10" : "border-white/10 bg-white/[0.035] hover:border-[#0d9488]/35"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#0d9488]">Project 0{heroProjects.indexOf(project) + 1}</div>
                              <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">{project.title}</h3>
                            </div>
                            <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                              Open
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-white/70">{project.summary}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/70">
                    {expandedPanel === "work"
                      ? "Projects are intentionally few. The detail sheet adds depth without hiding the overview."
                      : "Three projects are enough to establish the pattern: agents, infrastructure, and reliable delivery."}
                  </div>
                </div>
              </Tile>

              <div className="grid gap-4 lg:h-full lg:grid-rows-[minmax(0,1fr)_minmax(0,0.9fr)]">
                <Tile
                  label="Experience"
                  title="Timeline"
                  description="Major roles, kept compact for fast scanning."
                  expanded={expandedPanel === "experience"}
                  onToggle={() => setExpandedPanel(expandedPanel === "experience" ? null : "experience")}
                >
                  <div className="flex h-full flex-col gap-3 overflow-hidden">
                    {experienceRows.map((row) => (
                      <div key={row.company} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">{row.period}</div>
                            <div className="mt-1 text-base font-semibold text-white">{row.company}</div>
                          </div>
                          <div className="text-right text-[10px] font-mono uppercase tracking-[0.18em] text-white/45">{row.role}</div>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/68">
                          {expandedPanel === "experience" ? `${row.note} Focused on clear ownership and shipped outcomes.` : row.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </Tile>

                <Tile
                  label="Contact"
                  title="Get in touch"
                  description="Fastest path to reach me."
                  expanded={expandedPanel === "contact"}
                  onToggle={() => setExpandedPanel(expandedPanel === "contact" ? null : "contact")}
                >
                  <div className="flex h-full flex-col justify-between gap-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="rounded-[22px] border border-[#0d9488]/35 bg-[#0d9488]/10 px-4 py-4 text-left transition-colors hover:border-[#0d9488]/60 hover:bg-[#0d9488]/14"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#9be9df]">Primary action</div>
                      <div className="mt-2 text-xl font-semibold text-white">Email Allard</div>
                      <div className="mt-1 text-sm text-white/70">{contact.email}</div>
                    </a>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <a href={`https://github.com/${contact.github}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/75 transition-colors hover:border-[#0d9488]/40 hover:text-white">
                        GitHub · {contact.github}
                      </a>
                      <a href={`https://www.linkedin.com/in/${contact.linkedin}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/75 transition-colors hover:border-[#0d9488]/40 hover:text-white">
                        LinkedIn · {contact.linkedin}
                      </a>
                    </div>

                    <p className="text-sm leading-6 text-white/62">
                      {expandedPanel === "contact"
                        ? "Open to systems, agents, tooling, and product-minded engineering work. Singapore-based."
                        : "Open to systems, agents, tooling, and product-minded engineering work."}
                    </p>
                  </div>
                </Tile>
              </div>
            </div>
          </main>

          <AnimatePresence>
            {activeProject ? (
              <motion.div
                className="fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  type="button"
                  aria-label="Close project details"
                  className="absolute inset-0 bg-black/45"
                  onClick={() => setActiveProject(null)}
                />

                <motion.aside
                  className="absolute right-4 top-4 w-[min(92vw,32rem)] overflow-hidden rounded-[28px] border border-white/12 bg-[#0f1715]/96 text-[#edf1ef] shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:bottom-4 lg:top-4"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#0d9488]">Project detail</div>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{activeProject.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-[#0d9488]/50 hover:text-white"
                    >
                      Close
                    </button>
                  </div>

                  <div className="space-y-4 px-5 py-4 text-sm leading-6 text-white/75">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">Problem</div>
                      <p className="mt-2">{activeProject.problem}</p>
                    </div>

                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">What I did</div>
                      <p className="mt-2">{activeProject.role}</p>
                    </div>

                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">Impact</div>
                      <p className="mt-2">{activeProject.impact}</p>
                    </div>

                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0d9488]">Stack</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeProject.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/65">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.aside>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </HelmetProvider>
    </CustomThemeProvider>
  );
}

export default App;
