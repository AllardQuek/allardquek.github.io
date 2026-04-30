import React from 'react';
import { motion } from 'framer-motion';

const BioNucleus = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl text-center relative z-10"
    >
      <div className="font-mono text-[9px] tracking-[0.4em] text-[#0055FF] mb-6 uppercase opacity-70">
        Digital Architect / 2026_CORE
      </div>
      
      <h1 className="text-7xl md:text-9xl font-serif tracking-tighter mb-12 leading-[0.85] text-white">
        Building Intelligent <br />
        <span className="italic text-white/90">Systems.</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-white/5 pt-12">
        {[
          { label: 'Performance', value: 'Zero-Jank' },
          { label: 'Intelligence', value: 'ML/NLP' },
          { label: 'Scalability', value: '99% Optimized' }
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left group cursor-default">
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 mb-2 group-hover:text-[#0055FF] transition-colors">
              {stat.label}
            </div>
            <div className="text-xl font-serif text-white/80 group-hover:text-white transition-colors">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 text-[13px] text-white/40 leading-relaxed font-mono max-w-lg mx-auto uppercase tracking-tighter">
        Bridging high-performance fullstack engineering with deep research in AI and Cybersecurity.
      </p>

      {/* Decorative Blueprint Markers */}
      <div className="absolute -top-10 -left-10 w-20 h-20 border-l border-t border-[#0055FF]/20 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 border-r border-b border-[#0055FF]/20 pointer-events-none" />
    </motion.div>
  );
};

export default BioNucleus;
