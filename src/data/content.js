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

  skills: {
    Languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS", "C++"],
    Backend: ["Node.js", "Express.js", "REST APIs", "BullMQ", "Redis"],
    Frontend: ["React.js", "Tailwind CSS", "Bootstrap"],
    Databases: ["PostgreSQL", "MySQL", "MS SQL Server", "MongoDB"],
    "Platforms & Tools": ["HubSpot CRM", "NetSuite", "n8n", "Zapier", "Postman", "Docker", "Azure", "Git"],
    "AI / ML": ["LangChain", "Pinecone", "Gemini API", "RAG Pipelines"],
    "AI Tools": ["Claude Code", "Claude Desktop", "OpenAI Codex", "ChatGPT", "Antigravity"],
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
