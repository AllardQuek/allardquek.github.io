function AboutCard() {
  return (
    <div className="rounded-[28px] bg-white/[0.08] px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-white/[0.11] hover:shadow-[0_22px_70px_rgba(0,0,0,0.28)] hover:ring-1 hover:ring-accent/20">
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">About</div>
      <p className="mt-2 text-sm leading-6 text-white/78">
        AI engineer at Singtel. NUS Computer Science, NUS College. NOC at TUM. Previously CTO at OneSanta.
      </p>
    </div>
  );
}

export default AboutCard;
