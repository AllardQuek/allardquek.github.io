import { useState, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import BioNucleus from "./components/BioNucleus";
import BioCluster from "./components/BioCluster";
import WorkConstellation from "./components/WorkConstellation";
import LabCluster from "./components/LabCluster";

// High-fidelity data from the resume extraction
import resumeData from "../docs/resume_data_2026.json";

function App() {
  const [viewState, setViewState] = useState({ x: 0, y: 0, scale: 1, activeNode: 'origin' });

  // The 'x' and 'y' values in viewState are for the CAMERA (the container transform).
  // Keep jumps short and directional for a clear spatial journey.
  const coords = {
    origin: { x: 0, y: 0, scale: 1 },
    bio: { x: 0, y: -260, scale: 1.02 }, 
    work: { x: -900, y: -200, scale: 0.96 }, 
    labs: { x: 900, y: 200, scale: 0.96 },  
  };

  const flyTo = (nodeId) => {
    const target = coords[nodeId] || coords.origin;
    setViewState({
      ...target,
      activeNode: nodeId
    });
  };

  return (
    <CustomThemeProvider>
      <HelmetProvider>
        <div className="App w-screen min-h-screen overflow-x-hidden bg-[#050505] text-white selection:bg-[#0088FF]">
          {/* Global Background Layer */}
          <motion.div 
            className="fixed inset-0 z-0 pointer-events-none"
            animate={{ 
              x: viewState.x * 0.03, 
              y: viewState.y * 0.03, 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 140, 
              damping: 20,
              mass: 0.9
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(90deg, rgba(0, 136, 255, 0.25) 0 1px, transparent 1px 80px),
                  repeating-linear-gradient(0deg, rgba(0, 136, 255, 0.25) 0 1px, transparent 1px 80px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,136,255,0.18) 0%, transparent 55%)',
              }}
            />
          </motion.div>

          {/* Spatial Canvas */}
          <motion.div 
            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
            animate={{ 
              x: viewState.x, 
              y: viewState.y, 
              scale: viewState.scale 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 160, 
              damping: 22,
              mass: 0.9
            }}
          >
            {/* The actual information nodes */}
            <div className="relative w-full h-full flex items-center justify-center">
               
               {/* Origin: The Bio Nucleus */}
               <div className="absolute pointer-events-auto">
                 <BioNucleus />
               </div>

               {/* Bio Cluster (Profile Node) */}
               <motion.div
                 className="absolute pointer-events-auto"
                 style={{
                   left: '50%',
                   top: '50%',
                   transform: 'translate(-50%, -50%) translate(0px, 260px)',
                   perspective: 3000
                 }}
                 animate={{ opacity: viewState.activeNode === 'bio' ? 1 : 0.25 }}
                 transition={{ duration: 0.3 }}
               >
                 <BioCluster personal={resumeData.personal} skills={resumeData.skill_taxonomy} />
               </motion.div>

               {/* Work Constellation (Positioned at 900, 200) */}
               <motion.div 
                 className="absolute pointer-events-auto"
                 style={{ 
                   left: '900px',
                   top: '200px',
                   transform: 'translate(-50%, -50%) translate(100px, 1500px)',
                   perspective: 3000 
                 }}
               >
                 <WorkConstellation experience={resumeData.experience} />
               </motion.div>

               {/* Lab Cluster (Positioned at -900, -200) */}
               <motion.div 
                 className="absolute pointer-events-auto"
                 style={{ 
                   left: '-900px',
                   top: '-200px',
                   transform: 'translate(-50%, -50%) translate(500px, 500px)',
                   perspective: 3000 
                 }}
               >
                 <LabCluster 
                   education={resumeData.education} 
                   certifications={resumeData.certifications} 
                   awards={resumeData.awards} 
                 />
               </motion.div>
            </div>
          </motion.div>

          {/* Efficiency HUD (Navigation) */}
          <div className="fixed inset-0 pointer-events-none z-50 p-8 flex flex-col justify-between">
            {/* Top HUD: Coordinates & Status */}
            <div className="flex justify-between items-start">
              <div className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                <div className="text-[#0088FF]">SEC: {viewState.activeNode}</div>
                <div>POS: {Math.round(viewState.x)} / {Math.round(viewState.y)}</div>
              </div>
              <div className="font-mono text-[10px] tracking-widest text-[#0088FF] animate-pulse font-bold">
                SYSTEM_STABLE
              </div>
            </div>

            {/* Bottom HUD: Navigation */}
            <div className="flex justify-center pointer-events-auto pb-4">
              <nav className="flex items-center gap-1 p-1.5 bg-black/80 backdrop-blur-3xl border border-white/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {['origin', 'bio', 'work', 'labs'].map((id) => (
                  <button
                    key={id}
                    onClick={() => flyTo(id)}
                    className={`
                      px-8 py-2.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500
                      ${viewState.activeNode === id 
                        ? 'bg-[#0088FF] text-white shadow-[0_0_25px_rgba(0,136,255,0.7)] scale-105' 
                        : 'text-white/40 hover:text-white hover:bg-white/10'}
                    `}
                  >
                    {id}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </HelmetProvider>
    </CustomThemeProvider>
  );
}

export default App;

