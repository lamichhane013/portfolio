"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TERMINAL_LINES } from "@/lib/data";

export default function TerminalWindow() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown < TERMINAL_LINES.length) {
      const t = setTimeout(() => setShown((s) => s + 1), 900);
      return () => clearTimeout(t);
    }
  }, [shown]);

  return (
    <div className="bg-[#0a0a0a] border border-[#00ff88]/30 rounded-lg overflow-hidden font-mono text-sm shadow-[0_0_30px_rgba(0,255,136,0.1)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border-b border-[#00ff88]/20">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-gray-500 text-xs ml-2">terminal — bibek@portfolio:~</span>
      </div>
      {/* Body */}
      <div className="p-4 space-y-2 min-h-[180px]">
        {TERMINAL_LINES.slice(0, shown).map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-0.5"
          >
            <div>
              <span className="text-[#00ff88]">$ </span>
              <span className="text-white">{l.cmd}</span>
            </div>
            <div className="text-gray-400 pl-2">{l.out}</div>
          </motion.div>
        ))}
        {shown >= TERMINAL_LINES.length && (
          <div>
            <span className="text-[#00ff88]">$ </span>
            <span className="blink text-[#00ff88]">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
