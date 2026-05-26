"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { XIcon } from "./Icons";

interface Props {
  onClose: () => void;
}

interface HistoryItem {
  type: "sys" | "input" | "out";
  text: string;
}

export default function TerminalEasterEgg({ onClose }: Props) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "sys", text: 'Type "help" for available commands.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    let result: string[] = [];

    if (cmd === "help")     result = ["about, skills, projects, contact, clear, exit"];
    else if (cmd === "about")    result = ["Bibek Lamichhane — IT Student based in Bankstown, Sydney.", "Passionate about cybersecurity, networking and AI."];
    else if (cmd === "skills")   result = ["Python · Linux · TCP/IP · Networking · Git · Docker · Security"];
    else if (cmd === "projects") result = ["→ AI Student Predictor", "→ YOLO Traffic Light Detection", "→ PHP Task Manager", "→ Linux Networking Lab", "→ Cybersecurity Projects"];
    else if (cmd === "contact")  result = ["Email: bibeklamichhane013@gmail.com", "LinkedIn: linkedin.com/in/bibeklamichhane013", "Location: Bankstown, NSW 2200"];
    else if (cmd === "clear")    { setHistory([]); setInput(""); return; }
    else if (cmd === "exit")     { onClose(); return; }
    else if (cmd !== "")         result = [`Command not found: ${cmd}. Type "help".`];

    setHistory((h) => [
      ...h,
      { type: "input", text: `$ ${raw}` },
      ...result.map((t) => ({ type: "out" as const, text: t })),
    ]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm"
      style={{ zIndex: 9000 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-xl bg-[#0a0a0a] border border-[#00ff88]/50 rounded-xl overflow-hidden font-mono shadow-[0_0_50px_rgba(0,255,136,0.2)]">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-[#00ff88]/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
          </div>
          <span className="text-gray-500 text-xs">interactive terminal</span>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <XIcon />
          </button>
        </div>
        {/* Output */}
        <div className="p-4 h-64 overflow-y-auto text-sm space-y-1">
          {history.map((h, i) => (
            <div
              key={i}
              className={
                h.type === "input" ? "text-[#00ff88]" :
                h.type === "sys"   ? "text-yellow-400" :
                "text-gray-300"
              }
            >
              {h.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        {/* Input */}
        <div className="flex items-center border-t border-[#00ff88]/20 px-4 py-2">
          <span className="text-[#00ff88] mr-2">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") runCommand(input); }}
            className="flex-1 bg-transparent text-white outline-none text-sm placeholder-gray-700"
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
