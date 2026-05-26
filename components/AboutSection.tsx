"use client";
import { motion } from "framer-motion";
import { ShieldIcon, CpuIcon, CodeIcon, MapPinIcon, MailIcon } from "./Icons";

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-14 text-center">
      <div className="inline-flex items-center gap-2 text-[#00ff88] font-mono text-sm mb-3 px-3 py-1 border border-[#00ff88]/30 rounded-full">
        <span className="text-gray-500">//</span> {label}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#00ff88] to-transparent mx-auto" />
    </div>
  );
}

export { SectionTitle };

export default function AboutSection() {
  const cards = [
    { icon: <ShieldIcon />, title: "Cybersecurity", desc: "Networking, Linux, VPNs, firewalls, Kali Linux", color: "#00ff88" },
    { icon: <CpuIcon />,    title: "AI & ML",        desc: "YOLO, TensorFlow, Python, OpenCV",            color: "#00d4ff" },
    { icon: <CodeIcon />,   title: "Development",    desc: "Python, PHP, JavaScript, Git, Docker",        color: "#7c3aed" },
  ];

  return (
    <section id="about" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="about.me" title="Who Am I?" />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass neon-border rounded-xl p-8 space-y-4"
          >
            <div className="text-[#00ff88] font-mono text-xs mb-4">// profile.json</div>
            <p className="text-gray-200 leading-relaxed">
              I&apos;m{" "}
              <span className="text-[#00ff88]">Bibek Lamichhane</span>, an IT student based in{" "}
              <span className="text-[#00d4ff]">Bankstown, Sydney</span> passionate about
              cybersecurity, AI, and networking. I enjoy building practical systems and exploring
              how technology solves real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Currently pursuing a Bachelor of IT at NAPS Sydney while working at Gebran Lebanese
              Cuisine and gaining hands-on experience through an IT internship at Honeybee Networks.
              I&apos;m also an active member of the Student Representative Council at NAPS.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Constantly learning — from networking fundamentals and Linux administration to machine
              learning and YOLO-based object detection. My goal is to break into an entry-level IT
              networking or cybersecurity role.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#00ff88]"><MapPinIcon /></span> Bankstown, NSW 2200
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="text-[#00ff88]"><MailIcon /></span> bibeklamichhane013@gmail.com
              </div>
            </div>
          </motion.div>

          {/* Specialty cards */}
          <div className="space-y-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 transition-all"
                style={{ border: `1px solid ${card.color}33` }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${card.color}22` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span style={{ color: card.color }}>{card.icon}</span>
                  <span className="font-mono font-bold text-white text-sm">{card.title}</span>
                </div>
                <p className="text-gray-400 text-xs">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
