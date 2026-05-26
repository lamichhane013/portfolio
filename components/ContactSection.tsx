"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./AboutSection";
import { MailIcon, LinkedInIcon, GithubIcon, MapPinIcon, SendIcon } from "./Icons";
import { CONTACT_LINKS } from "@/lib/data";

const ICON_MAP: Record<string, JSX.Element> = {
  Email:    <MailIcon />,
  LinkedIn: <LinkedInIcon />,
  GitHub:   <GithubIcon />,
  Location: <MapPinIcon />,
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle label="contact.init" title="Get In Touch" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-sm">
              Open to entry-level IT networking, cybersecurity, or support roles. Let&apos;s connect
              and explore opportunities together.
            </p>
            {CONTACT_LINKS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}33` }}
                >
                  <span style={{ color: c.color }}>{ICON_MAP[c.label]}</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-mono">{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-[#00ff88] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="text-sm text-gray-300">{c.value}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <div className="glass neon-border rounded-xl p-6">
            <div className="text-[#00ff88] font-mono text-xs mb-5">// send_message.init</div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="text-4xl mb-3">✅</div>
                <div className="text-[#00ff88] font-mono font-bold">Message transmitted!</div>
                <div className="text-gray-400 text-sm mt-2">I&apos;ll get back to you shortly.</div>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {(["name", "email", "message"] as const).map((field) => (
                  <div key={field}>
                    <label className="text-xs font-mono text-gray-500 mb-1 block">
                      {field}.input
                    </label>
                    {field === "message" ? (
                      <textarea
                        rows={4}
                        value={form[field]}
                        onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                        className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#00ff88]/50 rounded-lg px-4 py-3 text-sm text-white outline-none font-mono resize-none transition-colors placeholder-gray-700"
                        placeholder={`Enter ${field}...`}
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                        className="w-full bg-[#0a0a0a] border border-gray-700 focus:border-[#00ff88]/50 rounded-lg px-4 py-3 text-sm text-white outline-none font-mono transition-colors placeholder-gray-700"
                        placeholder={`Enter ${field}...`}
                      />
                    )}
                  </div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#00ff88] text-black font-bold font-mono text-sm rounded-lg hover:bg-[#00ff88]/90 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                >
                  <SendIcon /> transmit_message()
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
