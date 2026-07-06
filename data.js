// ============================================================
//  PORTFOLIO DATA — edit this file to update your portfolio
//  No coding knowledge required. Just change the text values.
// ============================================================

window.PORTFOLIO_DATA = {

  // ── Personal info ─────────────────────────────────────────
  meta: {
    name:     "Rakshitha Cherukuri",
    tagline:  "Software Engineering Grad · Full-Stack Developer",
    bio:      "Software Engineering graduate specializing in backend and full-stack development, with experience in scalable APIs, GraphQL, and AI-enabled applications. Strong fundamentals in data structures, databases, and system design.",
    email:    "rakshithacherukuri8124@gmail.com",
    phone:    "+91-9100838712",
    github:   "https://github.com/ChRakshitha",        // your GitHub profile URL
    linkedin: "https://www.linkedin.com/in/rakshitha-ch-104364414/",   // your LinkedIn URL
    initials: "RC"                           // shown in avatar circle
  },

  // ── About page paragraphs ──────────────────────────────────
  about: {
    lead: "Software Developer & CS Graduate. I work mostly with JavaScript/TypeScript and Python, building full-stack applications with a focus on performance and scalable APIs.",
    paragraphs: [
      "I'm Rakshitha Cherukuri, a Computer Science & Systems Engineering graduate at Lendi Institute of Engineering and Technology. I specialize in backend systems and full-stack development, building production-grade APIs and AI-integrated applications.",
      "During my internship, I designed and implemented GraphQL APIs for large-scale systems and built RESTful APIs integrated into hybrid mobile applications. I care deeply about schema design, query optimization, and writing clean, maintainable code.",
      "Outside of coding, I founded my department's coding club, organize peer-learning sessions, and execute technical events. I'm currently GATE 2025 qualified and maintaining a 9.1 CGPA."
    ]
  },

  // ── Skills ────────────────────────────────────────────────
  // Grouped by category. Add/remove items or rename categories freely.
  skills: {
    "Languages":        ["TypeScript", "JavaScript", "Python", "C", "Java"],
    "Frontend":         ["React Native", "Redux", "HTML", "CSS", "Gluestack UI"],
    "Backend & APIs":   ["GraphQL", "REST APIs", "JWT Authentication"],
    "Database & Tools": ["MongoDB", "Git", "GitHub", "Postman", "NGROK", "Tableau"],
    "CS Concepts":      ["DSA", "OOP", "DBMS", "Operating Systems", "SDLC"]
  },

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      degree:      "B.Tech — Computer Science & Systems Engineering",
      institution: "Lendi Institute of Engineering and Technology",
      period:      "2022 – 2026",
      detail:      "CGPA: 9.1 · Participated in 5+ hackathons with multiple teams building in constrained time periods and with new techs · Organized department and college level events, showcasing planning, managing and leaderhsip abilities."
    },
    {
      degree:      "Senior Secondary (Class XII)",
      institution: "Kendriya Vidyalaya, Vizianagaram",
      period:      "2011 – 2022",
      detail:      "Score: 85%"
    }
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      role:    "Software Engineering Intern",
      company: "Full Stack Development",
      period:  "2024",
      bullets: [
        "Designed and implemented production-grade GraphQL APIs for a large-scale system, focusing on schema design, query optimization, and data validation.",
        "Developed and integrated RESTful APIs into a hybrid mobile application, contributing across frontend (React Native) and backend systems.",
        "Collaborated in a fast-paced environment, participated in code reviews, and followed version control practices using Git/GitHub."
      ]
    }
  ],

  // ── Projects ───────────────────────────────────────────────
  // role: "tech"    → shows under the "Tech" filter
  // role: "product" → shows under the "Product" filter
  // Leave repo/demo as "" if you don't have links yet
  //
  // To add a new project, copy this template and paste it after the last one:
  // {
  //   title:       "Project Title",
  //   year:        "2025",
  //   role:        "tech",            // "tech" or "product"
  //   status:      "Completed",       // "Completed", "In Progress", or "Ideation Stage"
  //   description: "What you built and why it matters.",
  //   tags:        ["React", "Node.js"],
  //   note:        "",                // e.g. "Hackathon project" or ""
  //   repo:        "",                // GitHub URL or ""
  //   demo:        ""                 // Live URL or ""
  // },
  projects: [
    {
      title:       "Vidya — AI Education Platform",
      year:        "December, 2025",
      role:        "product",
      status:      "Completed",
      description: "Architected backend workflows integrating OpenAI to generate questions, flashcards, FAQs and a subject-specific chatbot. Authored and optimized prompts to improve relevance and accuracy of AI-generated content.",
      tags:        ["React", "Python", "Prompt Engineering", "REST APIs"],
      note:        "Hackathon project",
      repo:        "https://github.com/ChRakshitha/vidya",
      demo:        ""
    },
    {
      title:       "Surakshit — Ephemeral Chat Platform",
      year:        "June, 2026",
      role:        "fullstack",
      status:      "In-Progress",
      description: "Built a privacy-first anonymous chat platform where strangers are matched in real-time and communicate in end-to-end encrypted, self-destructing rooms. Engineered a room lifecycle system with grace periods, panic close, and max-duration expiry backed by Redis. Implemented E2EE key exchange over WebSockets, JWT + Argon2 authentication, rate limiting, and a Socket.IO Redis adapter for horizontal scaling. Designed automated nightly cleanup with soft and hard delete for inactive accounts.",
      tags:        ["TypeScript", "Node.js", "Socket.IO", "MongoDB", "Redis", "WebRTC", "JWT", "Argon2"],
      note:        "",
      repo:        "https://github.com/ChRakshitha/surakshit",
      demo:        ""
    },
    {
      title:       "Reunite AI — Missing Child Identification",
      year:        "2024",
      role:        "product",
      status:      "Completed",
      description: `Built Kinnect, a system to reunite missing persons with families using facial recognition. Designed a FastAPI + PostgreSQL/pgvector backend with ArcFace-based face embedding and cosine-similarity matching, Cloudinary for image storage, and Firebase push notifications for family alerts. Built a companion React web app for unauthenticated "quick report" sightings (camera capture, geolocation, live face matching) and a JWT-secured admin dashboard for case management.`,
      tags:        ["FastAPI", "PostgreSQL", "SQLAlchemy", "React", "TypeScript", "Tailwind CSS", "Firebase (FCM)", "JWT Auth"],
      note:        "Hackathon project",
      repo:        "",
      demo:        ""
    },
    {
      title:       "Sudoku Journey — A premium, fully offline Sudoku app",
      year:        "June, 2026",
      role:        "product",
      status:      "Completed",
      description: `Designed and built a full mobile game from scratch, including a custom puzzle-generation engine, on-device persistence, and a progression system modeled after Elo ratings. All gameplay history, streaks, and achievements are stored locally in SQLite — no backend, no account, no network dependency.`,
      tags:        ["React Native", "Expo", "TypeScript", "Algorithmic Design", "SQLite", "State Management", "Mobile UI/UX"],
      note:        "",
      repo:        "",
      demo:        ""
    },
    
  ],

  // ── Leadership ─────────────────────────────────────────────
  leadership: [
    "Founded the department coding club; organized peer-learning sessions and technical workshops.",
    "Executed college-level technical events with cross-college student and faculty coordination."
  ]
};
