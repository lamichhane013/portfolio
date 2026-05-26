"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./AboutSection";
import { AwardIcon } from "./Icons";
import { EDUCATION, CERTS } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="education.tree" title="Academic Path" />

        {/* Degree cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-xl p-5"
              style={{ border: `1px solid ${edu.color}33` }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded"
                  style={{
                    background: `${edu.color}22`,
                    color: edu.color,
                    border: `1px solid ${edu.color}44`,
                  }}
                >
                  {edu.status}
                </span>
                <span className="text-xs font-mono text-gray-500 text-right">{edu.period}</span>
              </div>
              <h3 className="font-bold text-white font-mono text-sm mb-1">{edu.degree}</h3>
              <div className="text-gray-400 text-xs">{edu.school}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-5 text-[#00ff88] font-mono text-sm">
            <AwardIcon /> Certifications
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {CERTS.map((cert, i) => (
              <div key={i} className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                <div className="text-white text-sm font-mono font-bold mb-1">{cert.name}</div>
                <div className="text-gray-500 text-xs mb-2">{cert.provider}</div>
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded ${
                    cert.status === "In Progress"
                      ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                      : "bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20"
                  }`}
                >
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
