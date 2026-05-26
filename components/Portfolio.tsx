"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import MatrixRain from "./MatrixRain";
import Particles from "./Particles";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import TerminalEasterEgg from "./TerminalEasterEgg";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut: Ctrl+` to open terminal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setTerminalOpen((t) => !t);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <LoadingScreen onDone={() => setLoading(false)} />
      </AnimatePresence>
    );
  }

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ fontFamily: "Courier New, Courier, monospace" }}
    >
      {/* ── Background layers ── */}
      <MatrixRain />
      <Particles />
      {/* Solid dark veil so background never bleeds through cards */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1, background: "rgba(5,7,5,0.82)" }}
      />

      {/* ── Overlays ── */}
      <CustomCursor />
      <ScrollProgress />

      {/* Keyboard hint */}
      <div
        className="fixed bottom-6 right-6 text-xs font-mono text-gray-600 border border-gray-800 px-3 py-2 rounded-lg glass"
        style={{ zIndex: 100 }}
      >
        <span className="text-[#00ff88]">Ctrl+`</span> terminal
      </div>

      {/* ── Terminal easter egg ── */}
      <AnimatePresence>
        {terminalOpen && (
          <TerminalEasterEgg onClose={() => setTerminalOpen(false)} />
        )}
      </AnimatePresence>

      {/* ── Navigation ── */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* ── Page sections ── */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
