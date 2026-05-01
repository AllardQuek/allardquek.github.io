import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ResumeModal({ open, onClose, data }) {
  const [view, setView] = useState("formatted");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    setView("formatted");
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const { personal, education, experience, certifications, awards_and_projects } = data;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            className="relative z-10 w-[min(92vw,42rem)] max-h-[85vh] overflow-y-auto rounded-[20px] border border-white/12 bg-[#0d1512]/96 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Sticky header */}
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0d1512]/96 px-6 py-4 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Resume</div>
                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">{personal.name}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${personal.contact.email}`}
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
                    >
                      Email
                    </a>
                    <a
                      href={`https://github.com/${personal.contact.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
                    >
                      GitHub
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/${personal.contact.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent transition-colors hover:text-white"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close resume"
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] leading-none text-white/55 transition-colors hover:border-accent/40 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>
              {/* View toggle */}
              <div className="mt-3 flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-0.5 w-fit">
                <button
                  type="button"
                  onClick={() => setView("formatted")}
                  className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors ${
                    view === "formatted"
                      ? "bg-accent/20 text-accent-muted"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  Formatted
                </button>
                <button
                  type="button"
                  onClick={() => setView("raw")}
                  className={`rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors ${
                    view === "raw"
                      ? "bg-accent/20 text-accent-muted"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  For agents
                </button>
              </div>
            </div>

            {view === "raw" ? (
              <div className="px-6 py-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Copy and paste into any AI to review
                  </p>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:border-accent/40 hover:text-accent-muted"
                  >
                    {copied ? "Copied!" : "Copy JSON"}
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-[12px] border border-white/8 bg-black/30 p-4 font-mono text-[11px] leading-5 text-white/65 whitespace-pre-wrap break-words">
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            ) : (
            <div className="space-y-8 px-6 py-6">
              {/* Education */}
              <section>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Education</div>
                <div className="accent-rule pl-4">
                  <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{education.period}</div>
                  <div className="mt-1 text-sm font-semibold text-white">{education.institution}</div>
                  <div className="mt-0.5 text-xs text-white/60">{education.degree}</div>
                  <ul className="mt-2 space-y-1">
                    {education.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-xs leading-5 text-white/60">
                        <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Experience */}
              <section>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Experience</div>
                <div className="space-y-5">
                  {experience.map((job) => (
                    <div key={job.company} className="accent-rule pl-4">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{job.period}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{job.company}</div>
                      <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">{job.role}</div>
                      <ul className="mt-2 space-y-1">
                        {job.key_achievements.map((a) => (
                          <li key={a} className="flex gap-2 text-xs leading-5 text-white/65">
                            <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Certifications</div>
                <ul className="space-y-1.5">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-2 text-xs leading-5 text-white/65">
                      <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Awards & Projects */}
              <section>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-accent">Awards &amp; Projects</div>
                <div className="space-y-4">
                  {awards_and_projects.slice(0, 6).map((a) => (
                    <div key={a.title} className="accent-rule pl-4">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{a.date}</div>
                      <div className="mt-1 text-sm font-semibold text-white">{a.project}</div>
                      <div className="mt-0.5 text-[11px] text-white/50">{a.title}</div>
                      <p className="mt-1 text-xs leading-5 text-white/50">{a.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResumeModal;
