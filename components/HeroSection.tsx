"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import TerminalWindow from "./TerminalWindow";
import { DownloadIcon, ChevronDownIcon, GithubIcon, LinkedInIcon } from "./Icons";
import { TYPEWRITER_TEXTS } from "@/lib/data";

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00ff88] border border-[#00ff88]/30 px-3 py-1.5 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-mono"
          >
            Hi, I&apos;m<br />
            <span className="text-white glow-text">Bibek </span>
            <span className="text-[#00ff88] glow-text">Lamichhane</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-mono"
          >
            <TypeWriter texts={TYPEWRITER_TEXTS} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-300 text-sm leading-relaxed max-w-md"
          >
            IT professional in Sydney, building expertise in networking, cybersecurity
            and AI. Currently pursuing a Bachelor of IT at NAPS Sydney.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-[#00ff88] text-black font-bold text-sm font-mono rounded hover:bg-[#00ff88]/90 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              <DownloadIcon /> Resume
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 px-5 py-2.5 border border-[#00ff88]/40 text-[#00ff88] font-mono text-sm rounded hover:bg-[#00ff88]/10 transition-all"
            >
              Projects
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 font-mono text-sm rounded transition-all"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/bibeklamichhane013"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-gray-700 text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/50 font-mono text-sm rounded transition-all"
            >
              <LinkedInIcon />
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#00ff88]/20 blur-2xl scale-110 animate-pulse" />
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-[#00ff88]/50 shadow-[0_0_40px_rgba(0,255,136,0.3)] bg-[#0a0a0a]">
                <Image
                  src="https://www.naps.edu.au/src_images/bibek.jpg"
                  alt="Bibek Lamichhane"
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#00ff88] text-black text-xs font-bold font-mono px-2 py-1 rounded shadow-lg">
                IT &apos;26
              </div>
            </div>
          </div>

          <TerminalWindow />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDownIcon />
      </motion.div>
    </section>
  );
}
