function Tile({ label, title, expanded, onToggle, children, className = "" }) {
  return (
    <article
      className={`flex flex-col rounded-[28px] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-colors ${
        expanded ? "bg-white/[0.07]" : "bg-white/[0.045]"
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">{label}</div>
          <h2 className="mt-1.5 text-[clamp(1.05rem,1.3vw,1.5rem)] font-semibold tracking-tight text-white">{title}</h2>
        </div>
        {onToggle && (
          <button
            type="button"
            onClick={onToggle}
            aria-label={expanded ? "Collapse" : "Expand"}
            className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] leading-none text-white/55 transition-colors hover:border-accent/40 hover:text-white"
          >
            {expanded ? "−" : "+"}
          </button>
        )}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">{children}</div>
    </article>
  );
}

export default Tile;
