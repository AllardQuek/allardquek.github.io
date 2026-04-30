import React from "react";

const BioCluster = ({ personal, skills }) => {
  return (
    <div className="w-[520px] bg-[#080808]/90 backdrop-blur-3xl border border-white/10 rounded-sm p-10 shadow-2xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#0088FF]">BIO_CORE</div>
          <h2 className="text-4xl font-serif text-white mt-2 tracking-tight">{personal.name}</h2>
          <p className="text-[12px] font-mono text-white/50 uppercase tracking-[0.2em] mt-2">
            Digital Architect
          </p>
        </div>
        <div className="text-right">
          <div className="font-mono text-[9px] text-white/40">SIGNAL</div>
          <div className="font-mono text-[10px] text-[#0088FF]">STABLE</div>
        </div>
      </div>

      <p className="text-[15px] font-serif text-white/80 leading-relaxed">
        {personal.motto}
      </p>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">CONTACT</div>
        <div className="mt-3 grid grid-cols-2 gap-y-2 text-[12px] font-mono text-white/70">
          <div>{personal.contact.email}</div>
          <div>{personal.contact.github}</div>
          <div>{personal.contact.phone}</div>
          <div>{personal.contact.linkedin}</div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">CORE STACK</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.frontend.slice(0, 4).map((item) => (
            <span
              key={`fe-${item}`}
              className="text-[10px] font-mono text-white/70 border border-white/10 px-2 py-1 rounded-sm"
            >
              {item}
            </span>
          ))}
          {skills.backend.slice(0, 4).map((item) => (
            <span
              key={`be-${item}`}
              className="text-[10px] font-mono text-white/70 border border-white/10 px-2 py-1 rounded-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioCluster;
