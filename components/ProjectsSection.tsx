"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { SectionTitle } from "./AboutSection";
import { PROJECTS } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="projects.ls" title="Built & Deployed" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
