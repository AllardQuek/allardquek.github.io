import React from 'react';
import { motion } from 'framer-motion';

const LabCluster = ({ education, certifications, awards }) => {
  return (
    <div className="flex gap-12 max-w-[1200px] items-start py-12">
      {/* Education & Awards Column */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-16 w-[450px]"
      >
        <div>
          <div className="font-mono text-[8px] text-[#0088FF] mb-4 uppercase tracking-[0.4em]">ACADEMIC_LOG</div>
          <h2 className="text-6xl font-serif italic mb-10 text-white tracking-tighter">Accolades.</h2>
          <div className="space-y-8">
            {education.achievements.map((ach, i) => (
              <div key={i} className="group cursor-default p-4 bg-white/5 border border-white/5 rounded-sm hover:border-[#0088FF]/30 transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-1 rounded-full bg-[#0088FF]/60" />
                  <div className="h-[1px] w-0 group-hover:w-8 bg-[#0088FF]/60 transition-all duration-500" />
                </div>
                <p className="text-[14px] font-serif text-white/50 group-hover:text-white transition-colors leading-relaxed">{ach}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-2 gap-6 translate-y-6">
        {certifications.map((cert, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -5, borderColor: "rgba(0, 136, 255, 0.3)", backgroundColor: "rgba(0, 136, 255, 0.05)" }}
            className="p-6 bg-[#080808]/90 backdrop-blur-3xl border border-white/10 rounded-sm w-[260px] group transition-all shadow-2xl"
          >
            <div className="font-mono text-[7px] text-[#0088FF]/60 uppercase tracking-[0.3em] mb-4">{cert.organization}</div>
            <div className="text-[11px] font-mono leading-relaxed text-white/80 group-hover:text-white transition-colors">{cert.name}</div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-[7px] font-mono text-white/20 uppercase tracking-widest">{cert.date}</span>
              <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#0088FF] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LabCluster;
