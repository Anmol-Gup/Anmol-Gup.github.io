/**
 * All editable site content lives here.
 * Edit this file to update text — components in src/components render it.
 */
export const CONTENT = {
  meta: {
    name: "Surya Prakash Gupta",
    title: "Backend Engineer · API & Integrations · Automation Platforms",
    tagline:
      "I build the APIs, integrations, and automation platforms that run behind real, paying SaaS products.",
    email: "prakashsurya1204@gmail.com",
    phone: "+91 7317482162",
    location: "Lucknow, India",
    resumeFile: "resume.pdf",
  },

  socials: [
    { name: "GitHub", url: "https://github.com/Anmol-Gup", icon: "github" },
    { name: "Instagram", url: "https://www.instagram.com/gupta.anmol1204/", icon: "instagram" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100024963634024", icon: "facebook" },
    { name: "YouTube", url: "https://www.youtube.com/@suryagupta1999", icon: "youtube" },
  ],

  about: [
    "I'm a backend engineer who specializes in APIs, third-party integrations, and workflow automation — the kind of infrastructure that quietly runs plan upgrades, billing, and CRM sync for real customers every day.",
    "At CEDCOSS, I work across the MakeWebBetter Connect iPaaS platform: building connectors, automating billing with Stripe, and shipping production features like a policy-based referral and commission system.",
    "I've also built a full-stack RAG application with LangChain, Gemini, and Pinecone — because I like understanding the AI layer well enough to ship it, not just talk about it.",
  ],

  experience: [
    {
      title: "Software Developer",
      company: "CEDCOSS Technologies",
      location: "Lucknow, India",
      dates: "Oct 2024 – Present",
    },
    {
      title: "Associate Engineer (Data)",
      company: "Harman Connected Services",
      location: "Gurgaon, India",
      dates: "Mar 2022 – May 2023",
    },
  ],

  projects: [
    {
      name: "MakeWebBetter Connect",
      subtitle: "iPaaS Platform",
      description:
        "Production connectors and reusable workflow templates for multi-platform automation, plus a policy-based referral & commission system and Stripe-based billing lifecycle automation.",
      stack: ["Node.js", "REST APIs", "Stripe", "n8n", "Slack API"],
      impact: "Cut integration setup time by an estimated 60% · net-new revenue feature live in production billing",
    },
    {
      name: "Dynamics 365 ↔ HubSpot",
      subtitle: "2-Way CRM Sync",
      description:
        "Multi-tenant Node.js integration service enabling real-time bidirectional CRM sync between Dynamics 365 and HubSpot, with REST APIs for field mapping and per-tenant auth.",
      stack: ["Node.js", "BullMQ", "Redis", "REST APIs"],
      impact: "Real-time bidirectional sync · per-tenant configuration without code changes",
    },
    {
      name: "HubSpot ↔ NetSuite",
      subtitle: "Sync Integration",
      description:
        "Sync workflows mapping NetSuite Contacts, Estimates/Quotes, and Sales Orders into HubSpot Contacts and Deals — covering the full B2B sales lifecycle, with client-facing demos.",
      stack: ["HubSpot API", "NetSuite", "Workflow Automation"],
      impact: "Zero data gaps in production sync via failure-pattern monitoring and job retries",
    },
    {
      name: "RAG QA Bot",
      subtitle: "Full-Stack AI Application",
      description:
        "End-to-end document Q&A application with a RAG pipeline for context-aware, scalable document search and question-answering.",
      stack: ["Node.js", "Express", "React", "LangChain", "Gemini", "Pinecone"],
      impact: "Full ingestion-to-answer pipeline, built and shipped solo",
    },
  ],

  miniProjectsPlaylistUrl: "https://www.youtube.com/playlist?list=PLvBvMVnbcx7FXageODYapk8f0b2JBKEOq",

  miniProjects: [
    {
      title: "YouTube Chat Extension (RAG)",
      url: "https://www.youtube.com/watch?v=42ItVmyJbWw",
      tags: ["Chrome Extension", "RAG", "FAISS", "LLM"],
    },
    {
      title: "SaaS Testimonial Tool",
      url: "https://www.youtube.com/watch?v=3KrqyurI6sw",
      tags: ["Next.js", "Supabase", "AI"],
    },
    {
      title: "AI Resume Analyzer",
      url: "https://www.youtube.com/watch?v=W1Q_tCvhmXQ",
      tags: ["Gemini AI", "Node.js", "React"],
    },
    {
      title: "LinkedIn Post Generator",
      url: "https://www.youtube.com/watch?v=Ov8YMVFV-iE",
      tags: ["LangChain Agents", "Make.com", "Gemini"],
    },
    {
      title: "FAQ & Appointment Booking Agent",
      url: "https://www.youtube.com/watch?v=ghDTGPlo_lU",
      tags: ["n8n", "No-Code", "AI Agent"],
    },
    {
      title: "URL Shortener Chrome Extension",
      url: "https://www.youtube.com/watch?v=bmnG9f7CubI",
      tags: ["Chrome Extension", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Todo List App (MERN Stack)",
      url: "https://www.youtube.com/watch?v=AwElbEWC4kE",
      tags: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Portfolio Website (React + TS)",
      url: "https://www.youtube.com/watch?v=uKwmk5sWQuM",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Friendship Calculator",
      url: "https://www.youtube.com/watch?v=B3vx4vnRWms",
      tags: ["JavaScript"],
    },
    {
      title: "Quiz App",
      url: "https://www.youtube.com/watch?v=wCDFReddI9E",
      tags: ["JavaScript"],
    },
    {
      title: "Rock, Paper, Scissors",
      url: "https://www.youtube.com/watch?v=q-VK1NjUwlQ",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Typing Speed Website",
      url: "https://www.youtube.com/watch?v=loW9e8aqjSU",
      tags: ["React"],
    },
    {
      title: "Todo App",
      url: "https://www.youtube.com/watch?v=iUQMspsS0Jo",
      tags: ["Node.js", "Express"],
    },
    {
      title: "Discussion App",
      url: "https://www.youtube.com/watch?v=wYN09BMIb5Y",
      tags: ["JavaScript"],
    },
    {
      title: "Counter App",
      url: "https://www.youtube.com/watch?v=qd6LIgbB5QM",
      tags: ["JavaScript"],
    },
    {
      title: "Pomodoro Clock",
      url: "https://www.youtube.com/watch?v=5wDJEPhiXog",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Todo List with File Upload",
      url: "https://www.youtube.com/watch?v=_T3R3Y2aTZw",
      tags: ["Node.js", "Express", "Multer"],
    },
    {
      title: "Code Editor",
      url: "https://www.youtube.com/watch?v=nutP1TmxCxY",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Movie Website (OMDb API)",
      url: "https://www.youtube.com/watch?v=I6A335qegag",
      tags: ["React", "OMDb API"],
    },
    {
      title: "News Website",
      url: "https://www.youtube.com/watch?v=zjfL-zC2BoM",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Job Listing Website",
      url: "https://www.youtube.com/watch?v=Pm67O3ggKP8",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Netflix Clone",
      url: "https://www.youtube.com/watch?v=7hg_gdSpeqM",
      tags: ["React"],
    },
    {
      title: "URL Shortener (Firebase)",
      url: "https://www.youtube.com/watch?v=NnOnRM5hEtE",
      tags: ["React", "Firebase", "Tailwind CSS"],
    },
  ],

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "C++"],
    Backend: ["Node.js", "Express.js", "REST APIs", "BullMQ", "Redis"],
    Frontend: ["React.js", "Tailwind CSS", "Bootstrap"],
    Databases: ["PostgreSQL", "MySQL", "MS SQL Server", "MongoDB"],
    "Platforms & Tools": ["HubSpot CRM", "NetSuite", "n8n", "Zapier", "Postman", "Docker", "Azure", "Git"],
    "AI / ML": ["LangChain", "Pinecone", "Gemini API", "RAG Pipelines"],
  },

  certifications: [
    "HubSpot — Integrating With HubSpot I: Foundations",
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "Microsoft Certified: Azure Data Fundamentals (DP-900)",
  ],

  education: {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "United College of Engineering and Management, Prayagraj",
    dates: "2018 – 2022",
    cgpa: "8.8 / 10",
  },

  contactFormEmail: "contact.agbusinesssolutions@gmail.com",
};
