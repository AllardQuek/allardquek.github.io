import React from 'react';

const WorkNode = ({ data, index }) => {
  return (
    <article className="bg-[#080808]/90 backdrop-blur-3xl border border-white/10 p-8 rounded-sm w-full group transition-all duration-300 hover:border-[#0088FF]/50">
      <div className="font-mono text-[10px] text-[#0088FF] mb-6 uppercase tracking-[0.25em] flex justify-between items-center">
        <span className="opacity-80 font-bold">{data.period}</span>
        <span className="border border-[#0088FF]/30 px-3 py-1 rounded-sm text-[9px] bg-[#0088FF]/5">STRATUM_{String(index + 1).padStart(2, '0')}</span>
      </div>

      <h3 className="text-4xl font-serif text-white mb-2 leading-none tracking-tight">{data.company}</h3>
      <p className="text-[11px] font-mono text-white/55 uppercase tracking-[0.2em] mb-7 pb-5 border-b border-white/10 italic">{data.role}</p>

      <div className="space-y-5">
        {data.key_achievements.slice(0, 3).map((achievement, i) => (
          <div key={i} className="group/item">
            <div className="text-[10px] font-mono text-[#0088FF] mb-1.5 tracking-widest uppercase font-bold flex items-center gap-2">
              <div className="w-1 h-1 bg-[#0088FF]" />
              LOG_CORE_{i+1}
            </div>
            <p className="text-[16px] text-white/90 leading-relaxed font-serif">
              {achievement}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-[#0088FF]" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">DATA_INTEGRITY: SECURE</span>
        </div>
        <button className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0088FF] font-bold border border-[#0088FF]/30 px-4 py-2 hover:bg-[#0088FF] hover:text-white transition-all duration-300">
          DECRYPT
        </button>
      </div>
    </article>
  );
};

const WorkConstellation = ({ experience }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {experience.map((job, i) => (
        <div key={i}>
          <WorkNode data={job} index={i} />
        </div>
      ))}
    </div>
  );
};

export default WorkConstellation;
