export const BOOT_LINES = [
  "[ OK ] Initializing BIOS...",
  "[ OK ] Loading kernel modules...",
  "[ OK ] Mounting filesystems...",
  "[ OK ] Starting network services...",
  "[ OK ] Loading portfolio.exe...",
  "[ OK ] Cybersecurity modules loaded",
  "[ OK ] AI systems ready",
  "[ OK ] Establishing secure connection...",
  ">> WELCOME // BIBEK LAMICHHANE",
];

export const TERMINAL_LINES = [
  { cmd: "whoami",          out: "bibek_lamichhane" },
  { cmd: "cat skills.txt",  out: "networking · linux · python · cybersec" },
  { cmd: "ls projects/",    out: "ai-predictor  yolo-traffic  php-tasks" },
  { cmd: "echo $STATUS",    out: "seeking_opportunities ✓" },
];

export const TYPEWRITER_TEXTS = [
  "AI Enthusiast",
  "Cybersecurity Learner",
  "IT Student",
  "Network Engineer",
  "Problem Solver",
  "Tech Explorer",
];

export const SKILLS = {
  Programming: {
    color: "#00ff88",
    items: [
      { name: "Python",     level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "C#",         level: 55 },
      { name: "PHP",        level: 60 },
      { name: "HTML / CSS", level: 80 },
      { name: "Bash",       level: 65 },
    ],
  },
  Cybersecurity: {
    color: "#00d4ff",
    items: [
      { name: "Networking (TCP/IP)", level: 78 },
      { name: "Linux Administration", level: 72 },
      { name: "Penetration Testing",  level: 50 },
      { name: "Kali Linux",           level: 55 },
      { name: "VPN / Firewalls",      level: 60 },
      { name: "VLAN / DHCP",          level: 70 },
    ],
  },
  "AI / Data": {
    color: "#7c3aed",
    items: [
      { name: "Machine Learning",  level: 55 },
      { name: "TensorFlow",        level: 45 },
      { name: "YOLO Detection",    level: 60 },
      { name: "OpenCV",            level: 55 },
    ],
  },
  Tools: {
    color: "#f59e0b",
    items: [
      { name: "Git / GitHub",      level: 75 },
      { name: "Docker",            level: 50 },
      { name: "Linux",             level: 72 },
      { name: "Supabase / Vercel", level: 60 },
    ],
  },
} as const;

export const PROJECTS = [
  {
    title: "AI Student Predictor",
    desc: "ML system to predict student performance and provide learning analytics using behavioural and academic data patterns.",
    tags: ["Python", "ML", "TensorFlow"],
    emoji: "🧠",
    accentColor: "#00ff88",
    github: "#",
    demo: "#",
  },
  {
    title: "YOLO Traffic Detection",
    desc: "Real-time traffic light detection using YOLOv8 and OpenCV for autonomous vehicle assistance and smart city applications.",
    tags: ["YOLO", "OpenCV", "Python"],
    emoji: "🚦",
    accentColor: "#00d4ff",
    github: "#",
    demo: "#",
  },
  {
    title: "PHP Task Manager",
    desc: "Full-stack task management app with user auth, CRUD operations and clean UI built with PHP and MySQL.",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    emoji: "📋",
    accentColor: "#7c3aed",
    github: "#",
    demo: "#",
  },
  {
    title: "Linux Networking Lab",
    desc: "Configured Linux servers, DNS/DHCP/VLAN services and wrote Bash automation scripts for infrastructure management.",
    tags: ["Linux", "Bash", "Networking"],
    emoji: "🐧",
    accentColor: "#22c55e",
    github: "#",
    demo: "#",
  },
  {
    title: "Cybersecurity Projects",
    desc: "Hands-on vulnerability assessments, Nmap scanning, Kali Linux pentesting and detailed security audit reports.",
    tags: ["Nmap", "Kali", "Security"],
    emoji: "🔐",
    accentColor: "#ef4444",
    github: "#",
    demo: "#",
  },
  {
    title: "Coming Soon",
    desc: "Exploring AI + cybersecurity — automated threat detection using behavioural analysis and machine learning.",
    tags: ["AI", "Security", "WIP"],
    emoji: "⚡",
    accentColor: "#f59e0b",
    github: "#",
    demo: "#",
  },
];

export const EXPERIENCE = [
  {
    role: "IT Intern",
    company: "Honeybee Networks",
    location: "Bankstown NSW",
    period: "Aug 2025 – Sep 2025",
    color: "#00ff88",
    items: [
      "Provided technical support & customer service for clients",
      "Performed OS installation troubleshooting and remote support",
      "Configured and set up desktops for user and business requirements",
    ],
  },
  {
    role: "Customer Service Representative",
    company: "Gebran Lebanese Cuisine",
    location: "Bankstown NSW",
    period: "Jun 2022 – Present",
    color: "#00d4ff",
    items: [
      "Delivered friendly customer service and handled payments accurately",
      "Managed reservations and resolved customer inquiries efficiently",
      "Developed strong communication and leadership skills",
    ],
  },
  {
    role: "SRC Member",
    company: "NAPS Sydney",
    location: "Sydney NSW",
    period: "2024 – Present",
    color: "#7c3aed",
    items: [
      "Assisted students in accessing college resources and support services",
      "Advocated for student needs and improved engagement between staff and students",
    ],
  },
];

export const EDUCATION = [
  { degree: "Bachelor of Information Technology", school: "NAPS Sydney",            period: "Nov 2024 – Jul 2026", status: "In Progress", color: "#00ff88" },
  { degree: "Advanced Diploma of IT",             school: "Western Sydney College",  period: "Mar 2023 – Sep 2024", status: "Completed",   color: "#00d4ff" },
  { degree: "Diploma of IT",                      school: "Western Sydney College",  period: "Mar 2022 – Mar 2023", status: "Completed",   color: "#7c3aed" },
  { degree: "High School Diploma (Science)",      school: "Southwestern State College", period: "2018 – 2020",     status: "Completed",   color: "#f59e0b" },
];

export const CERTS = [
  { name: "Programming for Everybody (Python)", provider: "Coursera",  status: "Completed"   },
  { name: "Foundations of Project Management",  provider: "Google",    status: "Completed"   },
  { name: "CompTIA Network+",                   provider: "CompTIA",   status: "In Progress" },
];

export const NAV_LINKS = ["Home","About","Skills","Projects","Experience","Education","Contact"];

export const CONTACT_LINKS = [
  { label: "Email",    value: "bibeklamichhane013@gmail.com",          href: "mailto:bibeklamichhane013@gmail.com",    color: "#00ff88" },
  { label: "LinkedIn", value: "linkedin.com/in/bibeklamichhane013",    href: "https://linkedin.com/in/bibeklamichhane013", color: "#00d4ff" },
  { label: "GitHub",   value: "github.com/lamichhane013",            href: "https://github.com/lamichhane013",                      color: "#7c3aed" },
  { label: "Location", value: "Bankstown, NSW 2200, Australia",        href: null,                                       color: "#f59e0b" },
];
