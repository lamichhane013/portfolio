"use client";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

interface Props {
  title: string;
  desc: string;
  tags: string[];
  emoji: string;
  accentColor: string;
  github: string;
  demo: string;
}

export default function ProjectCard({ title, desc, tags, emoji, accentColor, github, demo }: Props) {
  return (
    <motion.div
      className="relative border border-gray-800 rounded-xl overflow-hidden group h-full"
      style={{ background: "rgba(8,11,8,0.97)" }}
      whileHover={{ y: -6, borderColor: `${accentColor}55` }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentColor}33)` }} />
      <div className="p-6 flex flex-col h-full">
        <div className="text-3xl mb-3">{emoji}</div>
        <h3 className="text-white font-bold text-base mb-2 font-mono">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded font-mono"
              style={{
                background: `${accentColor}15`,
                color: accentColor,
                border: `1px solid ${accentColor}33`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#00ff88] transition-colors border border-gray-700 hover:border-[#00ff88]/50 px-3 py-1.5 rounded"
          >
            <GithubIcon /> Code
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#00d4ff] transition-colors border border-gray-700 hover:border-[#00d4ff]/50 px-3 py-1.5 rounded"
          >
            <ExternalLinkIcon /> Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
