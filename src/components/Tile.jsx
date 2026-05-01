function Tile({ label, title, expanded, onToggle, children, className = "" }) {
  return (
    <article
      className={`group flex flex-col rounded-[28px] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-200 hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] hover:ring-1 hover:ring-accent/20 ${
        expanded ? "bg-white/[0.13]" : "bg-white/[0.08] hover:bg-white/[0.11]"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-b border-white/10 px-5 py-4 ${onToggle ? "cursor-pointer select-none" : ""}`}
        onClick={onToggle}
        role={onToggle ? "button" : undefined}
        aria-expanded={onToggle ? expanded : undefined}
      >
        <div className="flex-1 min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">{label}</div>
          <h2 className="mt-1.5 text-[clamp(1.05rem,1.3vw,1.5rem)] font-semibold tracking-tight text-white">{title}</h2>
        </div>
        {onToggle && (
          <div className="shrink-0 flex flex-col items-center gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" viewBox="0 0 10 10"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="text-accent transition-transform duration-200 group-hover:scale-110"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <polyline points="2,3.5 5,6.5 8,3.5" />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent/70 group-hover:text-accent transition-colors duration-200">
              {expanded ? "less" : "more"}
            </span>
          </div>
        )}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
    </article>
  );
}

export default Tile;
