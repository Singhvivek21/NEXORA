export interface CapabilityProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  architecture: string[];
  techStack: string[];
  demoRoute: string;
  highlights: {
    label: string;
    value: string;
    sub: string;
  }[];
}

export const capabilityProjects: CapabilityProject[] = [
  {
    id: "business-os",
    slug: "business-os",
    title: "BusinessOS",
    category: "Enterprise Platform",
    tagline: "Unified operations, CRM, analytics & inventory command center",
    description: "An all-in-one business management platform that consolidates fragmented spreadsheets and disjointed tools into a single operational interface.",
    longDescription: "BusinessOS is designed to illustrate how a modern business centralizes pipeline management, live stock movement, invoice reconciliations, and executive intelligence. Equipped with role-based dashboards, automated alerts, and real-time ledger sync.",
    tags: ["CRM", "Analytics", "Inventory", "AI"],
    features: [
      "Real-time pipeline & lead stage tracker",
      "Multi-location stock & inventory monitoring",
      "Automated tax-compliant invoice generator",
      "Role-based permission hierarchy for teams",
      "Instant executive P&L and revenue forecasting"
    ],
    architecture: [
      "Next.js App Router for server-rendered dashboards",
      "PostgreSQL with Prisma ORM for relational integrity",
      "Redis caching layer for sub-50ms analytics queries",
      "Tailwind CSS with responsive glassmorphism UI"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis"],
    demoRoute: "/work/business-os",
    highlights: [
      { label: "Query Speed", value: "< 45ms", sub: "Cached analytics response" },
      { label: "Workflows", value: "18+", sub: "Prebuilt operational templates" },
      { label: "Data Integrity", value: "100%", sub: "ACID compliant ledger sync" }
    ]
  },
  {
    id: "ai-business-assistant",
    slug: "ai-business-assistant",
    title: "AI Business Assistant",
    category: "Cognitive Intelligence",
    tagline: "Natural-language conversational interface over business data",
    description: "Empowers leadership and teams to ask complex questions about sales, inventory, and operations in plain English and receive instant verifiable answers.",
    longDescription: "Instead of clicking through dozens of reporting filters, users converse with an enterprise-secured LLM agent wired directly to data lakes and operational tables with granular access policies.",
    tags: ["AI", "Data", "RAG"],
    features: [
      "Natural language to SQL conversion with security guards",
      "Interactive data charts generated in conversational flow",
      "Complete source attribution and citation trail",
      "Multi-turn context retention for complex investigations",
      "Strict data boundary enforcement per department"
    ],
    architecture: [
      "LangChain / LlamaIndex retrieval orchestration",
      "Vector embeddings stored in pgvector database",
      "Streaming responses via Server-Sent Events (SSE)",
      "Sandboxed SQL execution engine with read-only replicas"
    ],
    techStack: ["Python / FastAPI", "Next.js", "pgvector", "LangChain", "OpenAI / Anthropic"],
    demoRoute: "/work/ai-business-assistant",
    highlights: [
      { label: "Latency", value: "1.2s", sub: "Average RAG query roundtrip" },
      { label: "Accuracy", value: "99.4%", sub: "Verified SQL translation rate" },
      { label: "Privacy", value: "Zero Retention", sub: "Enterprise data firewall" }
    ]
  },
  {
    id: "ai-document-intelligence",
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence",
    category: "Workflow Automation",
    tagline: "Automated OCR, data extraction & classification for complex documents",
    description: "Converts messy invoices, legal contracts, purchase orders, and medical reports into clean, validated JSON schemas in seconds.",
    longDescription: "This capability demonstration highlights an automated multi-stage pipeline: ingest raw PDF/scans, run optical character recognition, parse unstructured tables, validate against business rules, and export into ERPs.",
    tags: ["AI", "OCR", "Automation"],
    features: [
      "Table & multi-column financial extraction",
      "Confidence scoring per extracted field",
      "Human-in-the-loop review interface for edge cases",
      "Instant ERP/Accounting software export format",
      "Supports multi-page contracts, receipts, and invoices"
    ],
    architecture: [
      "Custom OCR pre-processing with image normalization",
      "Vision-Language model for structured schema extraction",
      "Zod schema validation engine for data sanitization",
      "Background worker queues with BullMQ and Redis"
    ],
    techStack: ["Next.js", "TypeScript", "Vision AI", "BullMQ", "Tailwind CSS", "Zod"],
    demoRoute: "/work/ai-document-intelligence",
    highlights: [
      { label: "Extraction Speed", value: "3.4s", sub: "Average per 10-page document" },
      { label: "Field Accuracy", value: "99.1%", sub: "Validated against golden sets" },
      { label: "Manual Effort", value: "-85%", sub: "Reduction in manual data entry" }
    ]
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    title: "E-Commerce Platform",
    category: "Digital Commerce",
    tagline: "High-conversion commerce engine with live inventory & analytics",
    description: "A headless, modern e-commerce platform built for speed, effortless checkout, automated inventory sync, and intelligent product recommendations.",
    longDescription: "Engineered to deliver sub-second page transitions, dynamic cart calculations, multi-currency checkout, and deep back-office inventory sync across multiple physical and digital stores.",
    tags: ["Web", "Payments", "Commerce"],
    features: [
      "Sub-second catalog browsing and instant filtering",
      "One-click accelerated checkout flows",
      "Dynamic bundle discounts & promotional rule engine",
      "Multi-warehouse stock allocation and alerts",
      "Customer lifetime value & cohort analysis dashboards"
    ],
    architecture: [
      "Next.js App Router with incremental static regeneration",
      "Stripe / Razorpay webhooks for instant order confirmation",
      "Algolia / Meilisearch for sub-50ms product search",
      "Edge caching via Cloudflare / Vercel Edge Network"
    ],
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "Meilisearch", "PostgreSQL"],
    demoRoute: "/work/ecommerce",
    highlights: [
      { label: "Page Speed", value: "98/100", sub: "Google Lighthouse Mobile" },
      { label: "Checkout Time", value: "< 25s", sub: "Average completion duration" },
      { label: "Inventory Sync", value: "Instant", sub: "WebSocket live stock status" }
    ]
  },
  {
    id: "booking",
    slug: "booking",
    title: "Booking Platform",
    category: "Scheduling & SaaS",
    tagline: "Automated appointments, payment holds, and calendar coordination",
    description: "A modern appointment and service scheduling platform that coordinates availability, handles advance deposits, and dispatches automated notifications.",
    longDescription: "Eliminates double bookings and missed appointments. Provides clients with an effortless booking flow while offering administrators comprehensive team shift management and revenue reporting.",
    tags: ["SaaS", "Automation", "Payments"],
    features: [
      "Timezone-intelligent interactive availability calendar",
      "Deposit collection & flexible refund workflows",
      "Automated WhatsApp & SMS reminder sequences",
      "Google Calendar, Outlook & Apple Calendar two-way sync",
      "Staff capacity allocation and buffer time rules"
    ],
    architecture: [
      "Event-driven architecture using webhook triggers",
      "Calendar delta synchronization engine",
      "Twilio / WhatsApp Business Cloud API integration",
      "Tailwind CSS and Framer Motion microinteractions"
    ],
    techStack: ["Next.js", "TypeScript", "Twilio API", "Stripe", "Framer Motion"],
    demoRoute: "/work/booking",
    highlights: [
      { label: "No-Show Drop", value: "-65%", sub: "Through automated multi-channel nudges" },
      { label: "Sync Delay", value: "< 2s", sub: "Calendar two-way reconciliation" },
      { label: "Booking Time", value: "45s", sub: "From landing to confirmed slot" }
    ]
  }
];
