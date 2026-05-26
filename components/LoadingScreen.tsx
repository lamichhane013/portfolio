"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BOOT_LINES } from "@/lib/data";

interface Props {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: Props) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        const line = BOOT_LINES[i];
        setLines((l) => [...l, line]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onDone, 600);
      }
    }, 280);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ zIndex: 10000 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-mono text-sm max-w-lg w-full px-8">
        <div className="text-[#00ff88] mb-4 text-lg font-bold">BIBEK_OS v2026.1</div>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={
              line.indexOf("WELCOME") !== -1
                ? "text-[#00ff88] font-bold text-base mt-2"
                : "text-gray-400"
            }
          >
            {line}
          </motion.div>
        ))}
        {lines.length < BOOT_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#00ff88] ml-1 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}
