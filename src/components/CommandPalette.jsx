import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heroProjects } from "../data/content";

const allTags = [...new Set(heroProjects.flatMap((p) => p.filterTags))];

function CommandPalette({ open, onClose, onOpenResume, activeTagFilter, setActiveTagFilter }) {
  const [query, setQuery] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const tagCommands = allTags.map((tag) => ({
    label: `Projects · ${tag}`,
    hint: activeTagFilter === tag ? "active" : "filter",
    action: () => setActiveTagFilter(activeTagFilter === tag ? null : tag),
  }));

  const commands = [
    {
      label: "View Resume",
      hint: "open",
      action: () => onOpenResume(),
    },
    {
      label: "View source",
      hint: "link",
      action: () => window.open("https://github.com/AllardQuek/allardquek.github.io", "_blank"),
    },
    ...tagCommands,
    ...(activeTagFilter
      ? [{ label: "Clear project filter", hint: "clear", action: () => setActiveTagFilter(null) }]
      : []),
  ];

  const filtered = query
    ? commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  useEffect(() => {
    if (open) {
      setQuery("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => { setIdx(0); }, [query]);

  const run = (cmd) => {
    cmd.action();
    onClose();
  };

  const handleKey = (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && filtered[idx]) run(filtered[idx]);
    if (e.key === "Escape") onClose();
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[18vh]" onMouseDown={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: -8 }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-[min(92vw,28rem)] overflow-hidden rounded-[20px] border border-white/12 bg-[#0d1512]/96 shadow-[0_32px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="font-mono text-[11px] text-accent">⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search commands…"
            className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/40">esc</kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-sm text-white/40">No commands match.</li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.label}>
              <button
                type="button"
                onClick={() => run(cmd)}
                onMouseEnter={() => setIdx(i)}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                  i === idx ? "bg-accent/15 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                <span>{cmd.label}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">{cmd.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default CommandPalette;
