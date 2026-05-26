"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./AboutSection";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="experience.log" title="Work History" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88] via-[#00d4ff] to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Dot */}
              <div
                className="absolute left-4 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: exp.color, background: "#050705" }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
              </div>

              <div
                className="glass rounded-xl p-5"
                style={{ border: `1px solid ${exp.color}33` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-white font-mono">{exp.role}</h3>
                    <div className="text-sm mt-0.5" style={{ color: exp.color }}>
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.items.map((item, j) => (
                    <li key={j} className="text-gray-300 text-sm flex items-start gap-2">
                      <span style={{ color: exp.color }} className="mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
