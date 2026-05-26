"use client";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { SectionTitle } from "./AboutSection";
import { CodeIcon, ShieldIcon, CpuIcon, DatabaseIcon } from "./Icons";
import { SKILLS } from "@/lib/data";

const ICONS = [<CodeIcon key="code" />, <ShieldIcon key="shield" />, <CpuIcon key="cpu" />, <DatabaseIcon key="db" />];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="skills.map" title="Technical Arsenal" />
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([cat, { color, items }], ci) => (
            <motion.div
              key={cat}
              className="glass neon-border rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span style={{ color }}>{ICONS[ci]}</span>
                <h3 className="font-mono font-bold text-white">{cat}</h3>
              </div>
              <div className="space-y-3">
                {items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} color={color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
