import type { Project, Skill, Experience, ThemeConfig, ThemeColor } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "SHASHANK VISHWAKARMA",
  title: "Associate Software Engineer & Frontend Developer",
  tagline: "Building modern, scalable web applications with Next.js 14, React, TypeScript, and AI-accelerated workflows (Google Antigravity).",
  about: "Results-driven Associate Software Engineer at ProDesk IT and BCA Graduate with expertise in building modern, scalable web applications and managing operational workflows. Proficient in Next.js 14, React.js, TypeScript, Tailwind CSS, and MySQL, with hands-on experience leveraging AI-accelerated development tools (Google Antigravity) to deliver production-ready software efficiently. Strong track record in full-stack sprint delivery, data reconciliation, and project coordination.",
  location: "Varanasi, Uttar Pradesh, India",
  email: "shashankv9565@gmail.com",
  phone: "+91-9565548075",
  github: "https://github.com/shashank113333",
  linkedin: "https://linkedin.com/in/shashankv01",
  instagram: "https://instagram.com",
  twitter: "https://github.com/shashank113333",
  status: "🟢 Associate Software Engineer at ProDesk IT",
  stats: [
    { label: "Production Apps", value: "8+" },
    { label: "Lighthouse Score", value: "95%+" },
    { label: "BCA Score", value: "72%" },
    { label: "AI Workflows", value: "Antigravity" }
  ]
};

export const THEME_CONFIGS: Record<ThemeColor, ThemeConfig> = {
  cyberpunk: {
    name: 'cyberpunk',
    primary: '#00f0ff',
    secondary: '#a855f7',
    accent: '#ff007f',
    bgGlow: 'rgba(0, 240, 255, 0.15)'
  },
  matrix: {
    name: 'matrix',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#34d399',
    bgGlow: 'rgba(16, 185, 129, 0.15)'
  },
  sunset: {
    name: 'sunset',
    primary: '#f97316',
    secondary: '#e11d48',
    accent: '#facc15',
    bgGlow: 'rgba(249, 115, 22, 0.15)'
  },
  cosmos: {
    name: 'cosmos',
    primary: '#6366f1',
    secondary: '#3b82f6',
    accent: '#ec4899',
    bgGlow: 'rgba(99, 102, 241, 0.15)'
  }
};

export const SKILLS_DATA: Skill[] = [
  // Frontend Frameworks & Libraries
  { name: "Next.js 14", category: "Frontend", level: 95, iconName: "Atom", color: "#61dafb" },
  { name: "React.js", category: "Frontend", level: 95, iconName: "Atom", color: "#61dafb" },
  { name: "TypeScript", category: "Frontend", level: 92, iconName: "Code2", color: "#3178c6" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 92, iconName: "Code2", color: "#f7df1e" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, iconName: "Palette", color: "#38bdf8" },
  { name: "Zustand State Management", category: "Frontend", level: 90, iconName: "Boxes", color: "#a855f7" },
  { name: "HTML5 & CSS3", category: "Frontend", level: 95, iconName: "Code2", color: "#e34f26" },
  
  // Database & Data Handling
  { name: "MySQL", category: "Backend", level: 88, iconName: "Database", color: "#00758f" },
  { name: "REST API Integration", category: "Backend", level: 92, iconName: "Network", color: "#e11d48" },
  { name: "Local Storage & JSON API", category: "Backend", level: 90, iconName: "Server", color: "#22c55e" },

  // AI & Developer Tools
  { name: "Google Antigravity AI", category: "3D / Design", level: 95, iconName: "Sparkles", color: "#00f0ff" },
  { name: "GitHub Copilot & Prompt Eng.", category: "3D / Design", level: 92, iconName: "Sparkles", color: "#a855f7" },
  { name: "Vercel Deployment", category: "DevOps & Tools", level: 92, iconName: "Cloud", color: "#ffffff" },
  { name: "Git & GitHub", category: "DevOps & Tools", level: 90, iconName: "GitBranch", color: "#f97316" },

  // Operations & Business Tools
  { name: "MS Excel (VLOOKUP, Pivot)", category: "DevOps & Tools", level: 88, iconName: "Container", color: "#107c41" },
  { name: "Data Reconciliation", category: "DevOps & Tools", level: 90, iconName: "Terminal", color: "#eab308" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "taskmatrix",
    title: "1. TaskMatrix — Enterprise Agile Task Management System",
    description: "Enterprise-grade Agile & Kanban project management dashboard for task tracking, sprint planning, and team collaboration. Capstone Project (Sprint 16).",
    fullDetails: "Architected and delivered TaskMatrix (Sprint 16 Capstone), featuring Zustand global state management, protected route guards for authentication pipelines, sprint planning, and interactive Kanban boards.",
    category: "Full Stack",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Zustand", "Google Antigravity", "Vercel"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://prodesk-capstone-taskmatrix-sprint-inky.vercel.app/",
    githubUrl: "https://github.com/shashank113333/prodesk-capstone-taskmatrix-Sprint-16",
    featured: true,
    stats: { stars: 25, metrics: "Sprint 16 Capstone" }
  },
  {
    id: "ai-cover-letter",
    title: "2. AI Cover Letter Generator",
    description: "AI-powered utility application that generates tailored, professional cover letters dynamically based on user prompts.",
    fullDetails: "Integrated Generative AI models to dynamically synthesize personalized, high-converting cover letters with prompt engineering optimization.",
    category: "AI & ML",
    tags: ["React.js", "Next.js", "Generative AI Integration", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://ai-cover-letter-generator-liart.vercel.app/",
    githubUrl: "https://github.com/shashank113333/Ai-cover-letter-generator",
    featured: true,
    stats: { metrics: "Generative AI Integration" }
  },
  {
    id: "cashflow-tracker",
    title: "3. Cash Flow Tracker (Sprint 2)",
    description: "Real-time financial analytics dashboard for tracking daily income, expenses, and cash flow visualizations.",
    fullDetails: "Engineered responsive data visualization charts and income/expense breakdown ledgers with client-side state persistence.",
    category: "Full Stack",
    tags: ["React.js", "Financial Analytics", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://cash-flow-tracker-sprint-2.vercel.app/",
    githubUrl: "https://github.com/shashank113333/cash-flow-tracker-sprint-2",
    featured: true,
    stats: { metrics: "Real-Time Financial Analytics" }
  },
  {
    id: "cinestream",
    title: "4. CineStream — Media Streaming Portal (Sprint 11)",
    description: "Interactive video streaming web platform featuring dynamic content feeds, category filtering, and responsive design.",
    fullDetails: "Engineered REST API integrations for fetching media catalogues, category filtering, search feeds, and fluid video streaming UI.",
    category: "Full Stack",
    tags: ["React.js", "REST API Integration", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://sprint-11-cine-stream.vercel.app/",
    githubUrl: "https://github.com/shashank113333/sprint-11-cine-stream",
    featured: true,
    stats: { metrics: "REST API Integration" }
  },
  {
    id: "shopzone",
    title: "5. ShopZone E-Commerce SPA",
    description: "E-commerce single-page application featuring product catalog filtering, interactive cart state, and smooth UI transitions.",
    fullDetails: "Developed an e-commerce single-page application featuring product catalog filtering, interactive cart state, and smooth UI transitions.",
    category: "Full Stack",
    tags: ["React.js", "State Management", "E-Commerce UI", "Vercel"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://shopzone-spa-seven.vercel.app/",
    githubUrl: "https://github.com/shashank113333/shopzone-spa",
    featured: true,
    stats: { metrics: "E-Commerce SPA" }
  },
  {
    id: "prodesk-brand",
    title: "6. ProDesk Corporate Brand Portal (Sprint 1)",
    description: "Corporate brand portal showcasing executive services, brand identity, and enterprise web architecture.",
    fullDetails: "Built for ProDesk IT as Sprint 1 corporate portal with modern layout, high Lighthouse scores, and responsive components.",
    category: "Full Stack",
    tags: ["Next.js 14", "Tailwind CSS", "Corporate Branding", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://prodesk-corporate-brand.vercel.app/",
    githubUrl: "https://github.com/shashank113333/prodesk-sprint-1",
    featured: false,
    stats: { metrics: "ProDesk Corporate Brand" }
  },
  {
    id: "registration-wizard",
    title: "7. Registration Wizard",
    description: "Multi-step interactive form wizard with client-side validation, state retention, and smooth step transitions.",
    fullDetails: "Designed multi-stage input workflow with dynamic form state management, validation error triggers, and accessibility compliance.",
    category: "Frontend",
    tags: ["React.js", "Form Validation", "UX Architecture", "Vercel"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://registration-wizard-six.vercel.app/",
    githubUrl: "https://github.com/shashank113333/registration-wizard",
    featured: false,
    stats: { metrics: "Multi-Step Form Wizard" }
  },
  {
    id: "dev-detective",
    title: "8. Dev Detective",
    description: "GitHub developer profile search engine utilizing GitHub REST API to fetch real-time user stats, repos, and bios.",
    fullDetails: "Built Developer search app fetching GitHub user data, profile metrics, repositories, location, and social links with light/dark theme toggle.",
    category: "Frontend",
    tags: ["JavaScript", "GitHub REST API", "Dark/Light Mode", "Vercel"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://dev-detective-sooty.vercel.app/",
    githubUrl: "https://github.com/shashank113333/dev-detective",
    featured: false,
    stats: { metrics: "GitHub API Search Engine" }
  },
  {
    id: "kanban-board",
    title: "9. Kanban Board",
    description: "Drag-and-drop Kanban task management tool for organizing workflows into To-Do, In Progress, and Completed columns.",
    fullDetails: "Implemented interactive drag-and-drop task management UI with local storage persistence and dynamic category columns.",
    category: "Frontend",
    tags: ["React.js", "Drag and Drop", "Task Management", "Vercel"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://kanban-board-six-eta-14.vercel.app/",
    githubUrl: "https://github.com/shashank113333/kanban-board",
    featured: false,
    stats: { metrics: "Drag & Drop Task Board" }
  },
  {
    id: "rms-python",
    title: "10. RMS — Student Result Management System",
    description: "Desktop GUI Application for Student & Course Result Management built with Python Tkinter and MySQL database.",
    fullDetails: "Engineered desktop application featuring full CRUD operations for student registration, course enrollment, marksheets calculation, and MySQL relational database integration.",
    category: "Backend",
    tags: ["Python", "Tkinter GUI", "MySQL Database", "Desktop App"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://github.com/shashank113333/RMS",
    githubUrl: "https://github.com/shashank113333/RMS",
    featured: false,
    stats: { metrics: "Python & MySQL Desktop App" }
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp-1",
    role: "Associate Software Engineer",
    company: "ProDesk IT — Varanasi, UP",
    period: "2025 – Present",
    description: [
      "Full-Stack Development & AI Workflows: Engineered and deployed 8+ production web applications using Next.js 14, React, TypeScript, and AI-accelerated workflows (Google Antigravity).",
      "Sprint Execution & Agile Capstone: Architected and delivered TaskMatrix (Sprint 15 Capstone), an enterprise-grade Agile project management dashboard with Zustand state management and protected route guards.",
      "UI/UX & Performance Optimization: Built responsive dark/light mode interfaces using Tailwind CSS, ensuring 95%+ Lighthouse performance scores and cross-device compatibility.",
      "Process Coordination & Data Integrity: Managed technical project deliverables alongside administrative workflows, ensuring data accuracy, process alignment, and technical documentation."
    ],
    skills: ["Next.js 14", "React.js", "TypeScript", "Google Antigravity", "Tailwind CSS", "Zustand", "MySQL"],
    type: "Work"
  },
  {
    id: "edu-1",
    role: "Bachelor of Computer Applications (BCA)",
    company: "Microtek College, Varanasi (Score: 72%)",
    period: "2023 – 2026 (Completed)",
    description: [
      "Completed Bachelor of Computer Applications with 72% aggregate.",
      "Specialized in Software Engineering, Web Development, Next.js, and Database Systems."
    ],
    skills: ["BCA", "Computer Applications", "Web Development", "MySQL", "Algorithms"],
    type: "Education"
  },
  {
    id: "edu-2",
    role: "Senior Secondary (12th) & High School (10th)",
    company: "DAV Inter College & Govt. Queens Inter College, Varanasi",
    period: "2021 – 2023",
    description: [
      "Senior Secondary (12th): DAV Inter College, Varanasi (57% | 2023)",
      "High School (10th): Govt. Queens Inter College, Varanasi (74% | 2021)"
    ],
    skills: ["12th (57%)", "10th (74%)", "Varanasi"],
    type: "Education"
  },
  {
    id: "cert-1",
    role: "Certifications & Hackathon Achievements",
    company: "Technical Certifications & Extracurriculars",
    period: "2023 – 2025",
    description: [
      "Technical Certifications: Prompt Engineering with GitHub Copilot | Intro to Generative AI | Gemini for Google Workspace",
      "Professional Certifications: Project Management 101 | Effective Presentation | Microsoft Digital Literacy",
      "Smart India Hackathon (SIH): Managed team documentation, project deadlines, and data coordination under pressure.",
      "IIT Patna Cultural Event: Represented college in cultural competitions, demonstrating teamwork and adaptability."
    ],
    skills: ["GitHub Copilot", "Generative AI", "Project Management", "SIH Hackathon", "IIT Patna Event"],
    type: "Hackathon"
  }
];
