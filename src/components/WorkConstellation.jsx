import React from 'react';
import { motion } from 'framer-motion';

const NodeConnector = ({ x1, y1, x2, y2 }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none">
    <motion.line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke="rgba(0, 85, 255, 0.2)"
      strokeWidth="1"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </svg>
);

const WorkNode = ({ data, index }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}
      className="bg-[#080808]/90 backdrop-blur-3xl border border-white/10 p-10 rounded-sm w-[460px] group transition-all duration-500 hover:border-[#0088FF]/50 shadow-2xl"
    >
      <div className="font-mono text-[9px] text-[#0088FF] mb-8 uppercase tracking-[0.3em] flex justify-between items-center">
        <span className="opacity-80 font-bold">{data.period}</span>
        <span className="border border-[#0088FF]/30 px-3 py-1 rounded-sm text-[8px] bg-[#0088FF]/5">STRATUM_0{index + 1}</span>
      </div>
      
      <h3 className="text-5xl font-serif text-white mb-2 leading-none tracking-tighter">{data.company}</h3>
      <p className="text-[11px] font-mono text-white/50 uppercase tracking-[0.2em] mb-10 pb-6 border-b border-white/10 italic">{data.role}</p>
      
      <div className="space-y-8">
        {data.key_achievements.slice(0, 3).map((achievement, i) => (
          <div key={i} className="group/item">
            <div className="text-[9px] font-mono text-[#0088FF] mb-2 tracking-widest uppercase font-bold flex items-center gap-2">
              <div className="w-1 h-1 bg-[#0088FF]" />
              LOG_CORE_{i+1}
            </div>
            <p className="text-[15px] text-white/90 leading-relaxed font-serif">
              {achievement}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-2 h-2 rounded-full bg-[#0088FF] animate-pulse" />
          <span className="font-mono text-[8px] uppercase tracking-widest text-white/40">DATA_INTEGRITY: SECURE</span>
        </div>
        <button className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#0088FF] font-bold border border-[#0088FF]/30 px-4 py-2 hover:bg-[#0088FF] hover:text-white transition-all duration-300">
          DECRYPT
        </button>
      </div>
    </motion.div>
  );
};

const WorkConstellation = ({ experience }) => {
  return (
    <div className="grid grid-cols-2 gap-x-32 gap-y-16 items-start max-w-[1600px] py-16">
      {experience.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={i % 2 !== 0 ? "translate-y-[80px]" : "translate-y-[-40px]"}
        >
          <WorkNode data={job} index={i} />
        </motion.div>
      ))}
    </div>
  );
};

export default WorkConstellation;
