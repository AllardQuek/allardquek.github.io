import { useState, useEffect } from "react";
import { SiGithub, SiYoutube, SiSubstack } from "react-icons/si";
import { FaLinkedinIn, FaMediumM, FaEnvelope } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import resumeData from "../docs/resume_data_2026.json";
import { heroProjects, principles } from "./data/content";
import Tile from "./components/Tile";
import AboutCard from "./components/AboutCard";
import CommandPalette from "./components/CommandPalette";
import ResumeModal from "./components/ResumeModal";

function SocialIcon({ href, icon: Icon, label, brandColor, email }) {
  const [hovered, setHovered] = useState(false);
  const sharedProps = {
    "aria-label": label,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    className: "rounded-full p-2 transition-colors duration-200 cursor-pointer",
    style: { color: hovered ? brandColor : "rgba(255,255,255,0.32)" },
  };
  if (email) {
    return (
      <button
        type="button"
        onClick={() => navigator.clipboard.writeText(email)}
        title={`Copy ${email}`}
        {...sharedProps}
      >
        <Icon size={16} />
      </button>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" {...sharedProps}>
      <Icon size={16} />
    </a>
  );
}

// Full-time + CTO roles only (Singtel, nextnanoGmbH, OneSanta)
const experienceRows = resumeData.experience.slice(0, 3).map((job) => ({
  company: job.company,
  role: job.role,
  period: job.period,
  summary: job.key_achievements[0],
  achievements: job.key_achievements,
}));

function App() {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeTagFilter, setActiveTagFilter] = useState(null);

  const filteredProjects = activeTagFilter
    ? heroProjects.filter((p) => p.tags.includes(activeTagFilter))
    : heroProjects;

  const contact = resumeData.personal.contact;

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      } else if (e.key === "Escape" && cmdOpen) {
        setCmdOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [cmdOpen]);

  const socialLinks = [
    { label: "GitHub",   href: `https://github.com/${contact.github}`,              icon: SiGithub,   brandColor: "#e6edf3" },
    { label: "LinkedIn", href: `https://www.linkedin.com/in/${contact.linkedin}`,    icon: FaLinkedinIn,  brandColor: "#0A66C2" },
    { label: "YouTube",  href: `https://www.youtube.com/@${contact.youtube}`,        icon: SiYoutube,   brandColor: "#FF0000" },
    { label: "Substack", href: `https://${contact.substack}.substack.com`,           icon: SiSubstack,  brandColor: "#FF6719" },
    { label: "Medium",   href: `https://medium.com/@${contact.medium}`,              icon: FaMediumM,   brandColor: "#00AB6C" },
    { label: "Email",    href: null,                                                  icon: FaEnvelope,  brandColor: "#0d9488", email: contact.email },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>Allard Quek | Command Deck v1</title>
        <meta name="description" content="Allard Quek — AI engineer at Singtel, productivity nerd, and builder based in Singapore." />
      </Helmet>

      <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30">
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-75"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(13,148,136,0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(13,148,136,0.14) 1px, transparent 1px),
              radial-gradient(circle at 20% 0%, rgba(13,148,136,0.18), transparent 35%),
              radial-gradient(circle at 80% 10%, rgba(255,255,255,0.05), transparent 28%)
            `,
            backgroundSize: "80px 80px, 80px 80px, 100% 100%, 100% 100%",
          }}
        />

        <header className="sticky top-0 z-30 border-b border-white/10 bg-background/92 backdrop-blur-xl">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">Allard Quek</div>
              <div className="mt-1 text-sm text-white/65">Software Engineer · Singapore</div>
            </div>
            <div className="hidden max-w-2xl text-center text-sm leading-6 text-white/72 lg:block">
              I make slow things fast and complex things legible.
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} {...link} />
              ))}
              <button
                type="button"
                onClick={() => setCmdOpen(true)}
                className="hidden rounded-full border border-accent/35 bg-accent/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-muted transition-colors hover:border-accent/60 md:inline-flex"
              >
                ⌘K / Ctrl+K
              </button>
            </div>
          </nav>
        </header>

        <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:h-[calc(100vh-73px)] lg:overflow-hidden">
          <div className="grid gap-4 lg:h-full lg:grid-rows-1 lg:grid-cols-[minmax(240px,0.82fr)_minmax(460px,1.6fr)_minmax(240px,0.82fr)]">

            {/* Left column: compact About card + Principles */}
            <div className="flex flex-col gap-4 lg:h-full lg:min-h-0">
              <AboutCard />
              <div className="min-h-0 flex-1">
                <Tile
                  label="Principles"
                  className="h-full"
                  title="How I work"
                >
                  <div className="flex flex-col gap-3 text-sm leading-6 text-white/78">
                    {principles.map((p) => (
                      <div key={p.title} className="accent-rule pl-4 py-1">
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{p.title}</div>
                        <p className="mt-1.5">{p.summary}</p>
                      </div>
                    ))}
                  </div>
                </Tile>
              </div>
            </div>

            {/* Center column: Experience dominant */}
            <Tile
              label="Experience"
              title="Timeline"
              expanded={expandedPanel === "experience"}
              onToggle={() => setExpandedPanel(expandedPanel === "experience" ? null : "experience")}
              className="lg:h-full"
            >
              <div className="flex flex-col gap-4">
                {experienceRows.map((row) => (
                  <div key={row.company} className="accent-rule pl-4 py-2">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{row.period}</div>
                    <div className="mt-1 text-lg font-semibold text-white">{row.company}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">{row.role}</div>
                    <AnimatePresence mode="wait" initial={false}>
                      {expandedPanel === "experience" ? (
                        <motion.ul
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-3 space-y-2 overflow-hidden"
                        >
                          {row.achievements.map((a) => (
                            <li key={a} className="flex gap-2 text-sm leading-6 text-white/70">
                              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </motion.ul>
                      ) : (
                        <motion.p
                          key="collapsed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.12 }}
                          className="mt-2 text-sm leading-6 text-white/58"
                        >
                          {row.summary}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </Tile>

            {/* Right column: Projects (hackathon) */}
            <Tile label="Selected Work" title="Projects" className="lg:h-full">
                {activeTagFilter && (
                  <div className="mb-3 flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">filter</span>
                    <button
                      type="button"
                      onClick={() => setActiveTagFilter(null)}
                      className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-accent-muted transition-colors hover:border-accent/70"
                    >
                      {activeTagFilter} <span className="text-white/40">×</span>
                    </button>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="accent-rule pl-4 py-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">{project.award}</div>
                          <h3 className="mt-1 text-base font-semibold tracking-tight text-white">{project.title}</h3>
                        </div>
                        <span className="shrink-0 font-mono text-[9px] text-white/30">{project.date}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/65">{project.description}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.15em] text-white/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </Tile>

          </div>
        </main>

        <AnimatePresence>
          {cmdOpen && (
            <CommandPalette
              open={cmdOpen}
              onClose={() => setCmdOpen(false)}
              onOpenResume={() => setResumeOpen(true)}
              activeTagFilter={activeTagFilter}
              setActiveTagFilter={setActiveTagFilter}
            />
          )}
        </AnimatePresence>
        <ResumeModal
          open={resumeOpen}
          onClose={() => setResumeOpen(false)}
          data={resumeData}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
