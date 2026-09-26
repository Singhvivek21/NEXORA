export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  businessOutcome: string;
  featured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    tagline: "Custom enterprise software built for scale",
    description: "Custom business applications, SaaS platforms, internal portals and enterprise software tailored to your specific operational workflows.",
    icon: "Code2",
    capabilities: [
      "Custom SaaS Platforms",
      "Enterprise Web Applications",
      "Internal Portals & Backoffices",
      "Microservices & API Architecture"
    ],
    businessOutcome: "Eliminates software bloat and scales operations without per-seat licensing traps.",
    featured: true
  },
  {
    id: "web-development",
    title: "Web Development",
    tagline: "High-performance digital flagships",
    description: "Corporate websites, high-converting landing experiences, e-commerce stores, and progressive web apps engineered for speed and conversion.",
    icon: "Globe",
    capabilities: [
      "Corporate & Brand Websites",
      "Conversion-Optimized Funnels",
      "Headless CMS Architecture",
      "Internationalization & Localization"
    ],
    businessOutcome: "Elevates brand authority and turns casual visitors into qualified inbound leads."
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    tagline: "Native & cross-platform applications",
    description: "Modern Android, iOS and cross-platform applications built with intuitive UX, offline resilience, and seamless cloud synchronization.",
    icon: "Smartphone",
    capabilities: [
      "iOS & Android Native / React Native",
      "Offline-first Sync Engines",
      "Biometrics & Secure Enclaves",
      "App Store & Play Store Lifecycle"
    ],
    businessOutcome: "Engages users on their primary devices with frictionless mobile touchpoints."
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    tagline: "Intelligent systems embedded in workflows",
    description: "Domain-specific AI assistants, customer intelligence, document processing pipelines, RAG engines, and tailored machine learning integration.",
    icon: "Cpu",
    capabilities: [
      "Custom Enterprise RAG & Knowledge Bases",
      "Autonomous AI Task Agents",
      "Document Intelligence & Data Extraction",
      "Conversational Support Copilots"
    ],
    businessOutcome: "Automates complex knowledge work and unlocks instant institutional answers.",
    featured: true
  },
  {
    id: "automation",
    title: "Automation",
    tagline: "Frictionless operational workflows",
    description: "Automated business workflows, cross-platform API integrations, webhook orchestration, notifications, and robotic process automation.",
    icon: "GitBranch",
    capabilities: [
      "Cross-SaaS Integrations (CRMs, ERPs, Billing)",
      "Automated Multi-Step Event Pipelines",
      "Omnichannel Notifications (WhatsApp, Slack, Email)",
      "Exception Handling & Audit Logging"
    ],
    businessOutcome: "Saves hundreds of manual employee hours each month and eliminates human error."
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    tagline: "Real-time visibility into business pulse",
    description: "Business intelligence systems, executive dashboards, predictive data models, warehouse pipelines, and data-driven decision engines.",
    icon: "BarChart3",
    capabilities: [
      "Executive KPI Dashboards",
      "Data Warehousing & ETL Pipelines",
      "Predictive Analytics & Forecasting",
      "Cohort & Retention Modeling"
    ],
    businessOutcome: "Replaces guesswork with real-time operational clarity and strategic metrics."
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    tagline: "Resilient, highly available infrastructure",
    description: "Cloud architecture, continuous deployment pipelines, containerization, database clustering, multi-region failover, and proactive 24/7 monitoring.",
    icon: "Cloud",
    capabilities: [
      "AWS, Google Cloud & Azure Architecture",
      "Zero-downtime CI/CD Pipelines",
      "Kubernetes & Docker Orchestration",
      "SOC2-Ready Security & Backup Posture"
    ],
    businessOutcome: "Guarantees 99.99% uptime, data durability, and effortless horizontal scaling."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Intuitive product design that converts",
    description: "Deep user research, wireframing, high-fidelity prototypes, complete design systems, and product interfaces designed for effortless adoption.",
    icon: "Layout",
    capabilities: [
      "User Journey Mapping & Architecture",
      "Interactive High-Fidelity Prototypes",
      "Design Systems & Token Libraries",
      "Usability Audits & Conversion CRO"
    ],
    businessOutcome: "Drastically lowers user churn and accelerates product onboarding velocity."
  }
];
