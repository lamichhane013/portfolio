import { GithubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-900 py-8 px-6" style={{ zIndex: 2 }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-gray-500">
          <span className="text-[#00ff88]">BL://</span> Built by{" "}
          <span className="text-white">Bibek Lamichhane</span> © 2026
        </div>
        <div className="font-mono text-xs text-gray-700">
          Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00ff88] transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://linkedin.com/in/bibeklamichhane013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#00d4ff] transition-colors"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:bibeklamichhane013@gmail.com"
            className="text-gray-600 hover:text-[#00ff88] transition-colors"
          >
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
