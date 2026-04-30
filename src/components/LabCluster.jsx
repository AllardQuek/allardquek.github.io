import React from 'react';

const LabCluster = ({ education, certifications, awards }) => {
  const normalizedCerts = certifications.map((cert) => {
    if (typeof cert === 'string') {
      const match = cert.match(/^(.*)\((.*)\)$/);
      if (!match) {
        return { organization: 'Certification', name: cert, date: 'Recent' };
      }

      return {
        organization: 'Certification',
        name: match[1].trim(),
        date: match[2].trim(),
      };
    }

    return cert;
  });

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-10">
        <div>
          <div className="font-mono text-[10px] text-[#0088FF] mb-3 uppercase tracking-[0.3em]">ACADEMIC_LOG</div>
          <h3 className="text-4xl font-serif mb-6 text-white tracking-tight">Accolades</h3>
          <div className="space-y-4">
            {education.achievements.map((ach, i) => (
              <div key={i} className="group cursor-default p-4 bg-[#080808]/90 border border-white/10 rounded-sm hover:border-[#0088FF]/30 transition-all">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-1 h-1 rounded-full bg-[#0088FF]/60" />
                  <div className="h-[1px] w-0 group-hover:w-8 bg-[#0088FF]/60 transition-all duration-500" />
                </div>
                <p className="text-[16px] font-serif text-white/75 group-hover:text-white transition-colors leading-relaxed">{ach}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] text-[#0088FF] mb-3 uppercase tracking-[0.3em]">CERTIFICATIONS</div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {normalizedCerts.map((cert, i) => (
            <article key={i} className="p-5 bg-[#080808]/90 backdrop-blur-3xl border border-white/10 rounded-sm transition-all hover:border-[#0088FF]/35">
              <div className="font-mono text-[8px] text-[#0088FF]/70 uppercase tracking-[0.25em] mb-3">{cert.organization}</div>
              <div className="text-[13px] font-mono leading-relaxed text-white/85 min-h-[40px]">{cert.name}</div>
              <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] font-mono text-white/35 uppercase tracking-widest">{cert.date}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0088FF]/70" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabCluster;
