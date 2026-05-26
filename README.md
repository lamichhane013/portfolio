# Bibek Lamichhane — Portfolio

Dark hacker-terminal aesthetic personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- 🖥️ Matrix rain background (canvas)
- ⌨️ Typewriter cycling hero text
- 🖱️ Custom neon cursor
- 📊 Animated skill progress bars
- 🃏 Interactive project cards
- 🔖 Timeline for experience & education
- 💻 Interactive terminal easter egg (`Ctrl+\`` to open)
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Next.js 14 App Router + Server Components

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
bibek-portfolio/
├── app/
│   ├── globals.css       # Tailwind + custom styles
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Entry page (server component)
├── components/
│   ├── Portfolio.tsx     # Main client orchestrator
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── TerminalWindow.tsx
│   ├── TerminalEasterEgg.tsx
│   ├── TypeWriter.tsx
│   ├── SkillBar.tsx
│   ├── ProjectCard.tsx
│   ├── MatrixRain.tsx
│   ├── Particles.tsx
│   ├── CustomCursor.tsx
│   ├── ScrollProgress.tsx
│   └── Icons.tsx
├── lib/
│   └── data.ts           # All content data (skills, projects, etc.)
└── public/
    └── resume.pdf        # ← Drop your resume here
```

---

## Customisation

All content lives in **`lib/data.ts`** — edit skills, projects, experience, education and contact info there without touching component files.

To add your resume, drop a `resume.pdf` into the `public/` folder.

---

## Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
