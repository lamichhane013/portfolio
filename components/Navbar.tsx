"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, TerminalIcon } from "./Icons";
import { NAV_LINKS } from "@/lib/data";

interface Props {
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenTerminal }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-900 relative"
      style={{ background: "rgba(5,7,5,0.97)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-mono text-[#00ff88] font-bold text-lg glow-text select-none"
        >
          BL<span className="text-white">://</span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-all px-3 py-2 rounded hover:bg-[#00ff88]/5"
            >
              <span className="text-gray-600">//</span> {link}
            </button>
          ))}
          <button
            onClick={onOpenTerminal}
            className="ml-3 flex items-center gap-1.5 text-xs font-mono text-[#00ff88] border border-[#00ff88]/40 hover:bg-[#00ff88]/10 px-3 py-1.5 rounded transition-all"
          >
            <TerminalIcon /> term
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-900 overflow-hidden"
            style={{ background: "rgba(5,7,5,0.99)" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="w-full text-left text-sm font-mono text-gray-400 hover:text-[#00ff88] px-6 py-3 hover:bg-[#00ff88]/5 transition-colors"
              >
                // {link}
              </button>
            ))}
            <button
              onClick={() => { onOpenTerminal(); setMobileOpen(false); }}
              className="w-full text-left text-sm font-mono text-[#00ff88] px-6 py-3 hover:bg-[#00ff88]/5 transition-colors border-t border-gray-900"
            >
              // Terminal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
