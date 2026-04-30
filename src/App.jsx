import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider as CustomThemeProvider } from "./context/ThemeContext";
import BioCluster from "./components/BioCluster";
import WorkConstellation from "./components/WorkConstellation";
import LabCluster from "./components/LabCluster";

// High-fidelity data from the resume extraction
import resumeData from "../docs/resume_data_2026.json";

function App() {
  return (
    <CustomThemeProvider>
      <HelmetProvider>
        <div className="App min-h-screen bg-[#050505] text-white selection:bg-[#0088FF]">
          <div
            className="fixed inset-0 z-0 pointer-events-none opacity-70"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, rgba(0, 136, 255, 0.12) 0 1px, transparent 1px 80px),
                repeating-linear-gradient(0deg, rgba(0, 136, 255, 0.12) 0 1px, transparent 1px 80px),
                radial-gradient(circle at 50% 20%, rgba(0,136,255,0.2), transparent 55%)
              `,
            }}
          />

          <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0088FF]">Allard Quek</div>
              <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                <a href="#origin" className="hover:text-white">Origin</a>
                <a href="#bio" className="hover:text-white">Bio</a>
                <a href="#work" className="hover:text-white">Work</a>
                <a href="#labs" className="hover:text-white">Labs</a>
              </div>
            </nav>
          </header>

          <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-14">
            <section id="origin" className="pt-8">
              <div className="max-w-3xl">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-[#0088FF]">Digital Architect / 2026_Core</p>
                <h1 className="text-6xl font-serif leading-[0.95] tracking-tight md:text-8xl">Building Intelligent Systems.</h1>
                <p className="mt-8 max-w-2xl text-lg text-white/75">
                  Bridging high-performance fullstack engineering with deep research in AI and Cybersecurity.
                </p>
              </div>
            </section>

            <section id="bio" className="scroll-mt-28">
              <BioCluster personal={resumeData.personal} skills={resumeData.skill_taxonomy} />
            </section>

            <section id="work" className="scroll-mt-28">
              <div className="mb-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#0088FF]">Professional Experience</p>
                <h2 className="mt-2 text-4xl font-serif md:text-5xl">Work</h2>
              </div>
              <WorkConstellation experience={resumeData.experience} />
            </section>

            <section id="labs" className="scroll-mt-28 pb-10">
              <div className="mb-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-[#0088FF]">Academic + Learning</p>
                <h2 className="mt-2 text-4xl font-serif md:text-5xl">Labs</h2>
              </div>
              <LabCluster
                education={resumeData.education}
                certifications={resumeData.certifications}
                awards={resumeData.awards}
              />
            </section>
          </main>

          <footer className="relative z-10 border-t border-white/10 py-6">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
              <span>System_Stable</span>
              <span>{resumeData.personal.contact.email}</span>
            </div>
          </footer>
        </div>
      </HelmetProvider>
    </CustomThemeProvider>
  );
}

export default App;

