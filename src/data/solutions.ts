export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  metrics: string;
  previewType: "crm" | "bms" | "ecommerce" | "education" | "healthcare" | "booking" | "ai" | "saas";
}

export const solutionsData: SolutionItem[] = [
  {
    id: "crm-sales",
    title: "CRM & Sales Platforms",
    category: "Revenue Acceleration",
    description: "Multi-channel lead capture, visual deal pipelines, automated drip follow-ups, and sales velocity tracking tailored to your revenue model.",
    features: ["Intelligent Lead Scoring", "Automated Email & WhatsApp Follow-ups", "Sales Rep Activity Audits", "Pipeline Forecasting"],
    metrics: "Closes lead leakage & shortens sales cycle",
    previewType: "crm"
  },
  {
    id: "bms-operations",
    title: "Business Management Systems",
    category: "Operational Efficiency",
    description: "Unify fragmented operations into one mission control: inventory, invoicing, employee scheduling, vendor relations, and real-time P&L.",
    features: ["Real-time Inventory Tracking", "Automated GST/Tax Invoicing", "Role-Based Access Control", "Dynamic Profit/Loss Audits"],
    metrics: "Cuts operational overhead & eliminates spreadsheet chaos",
    previewType: "bms"
  },
  {
    id: "ecommerce-platforms",
    title: "E-Commerce Platforms",
    category: "Direct-to-Consumer & B2B",
    description: "High-speed digital commerce storefronts with multi-currency checkout, warehouse inventory sync, customer tiering, and return flows.",
    features: ["Sub-second Page Load Speeds", "Abandoned Cart Recovery Sequences", "Multi-Warehouse Inventory Sync", "Instant Checkout Gateways"],
    metrics: "Maximizes checkout conversion & customer lifetime value",
    previewType: "ecommerce"
  },
  {
    id: "education-platforms",
    title: "Education Platforms",
    category: "EdTech & Institutions",
    description: "Dedicated portals for students, instructors, parents, and administrative staff with live classes, attendance, grading, and fee management.",
    features: ["Student Progress Dashboards", "Automated Exam Grading & Reports", "Fee Payment Schedules & Reminders", "Interactive Resource Libraries"],
    metrics: "Streamlines institutional management across all stakeholders",
    previewType: "education"
  },
  {
    id: "healthcare-platforms",
    title: "Healthcare Platforms",
    category: "HealthTech & Clinics",
    description: "HIPAA-compliant patient portals, doctor consultation scheduling, electronic health records (EHR), prescription management, and tele-health.",
    features: ["Secure Patient Medical Records", "Doctor Schedule Synchronization", "Automated SMS/Email Reminders", "Diagnostic Report Dispatch"],
    metrics: "Minimizes appointment no-shows & safeguards patient data",
    previewType: "healthcare"
  },
  {
    id: "booking-platforms",
    title: "Booking & Scheduling Platforms",
    category: "Service Marketplaces",
    description: "Real-time calendar availability, service tier selection, upfront deposits, automated calendar invitations, and dynamic staff dispatch.",
    features: ["Timezone-Aware Booking Calendars", "Integrated Stripe/Razorpay Deposits", "Automated Rescheduling Workflows", "Staff Route & Availability Sync"],
    metrics: "Eliminates booking back-and-forth & secures advance payments",
    previewType: "booking"
  },
  {
    id: "ai-business-solutions",
    title: "AI Business Solutions",
    category: "Cognitive Automation",
    description: "Deploy private LLM copilots directly over your proprietary company files, databases, and customer support queries with zero data leaks.",
    features: ["Zero-Retention Enterprise Security", "Multi-Document Semantic Search", "Automated Ticket Classification", "Actionable Insight Synthesizer"],
    metrics: "Instantly queries company knowledge with audited citations",
    previewType: "ai"
  },
  {
    id: "saas-products",
    title: "SaaS Products",
    category: "Product Incubation",
    description: "Transform an internal business innovation or startup idea into a scalable, multi-tenant software subscription product ready for market launch.",
    features: ["Multi-Tenant Architecture", "Stripe Subscription Billing & Tiers", "Team Member Invitations & RBAC", "Comprehensive Admin Telemetry"],
    metrics: "Accelerates MVP time-to-market from quarters to weeks",
    previewType: "saas"
  }
];
