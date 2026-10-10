export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  problemSolved: string;
  clientDeliverable: string;
  businessValue: string;
  businessOutcome?: string;
  featured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering & Generative AI",
    tagline: "Domain-specific AI embedded directly into production workflows",
    description: "Design and implement production-ready language models, retrieval systems, and autonomous task agents that operate securely on proprietary business knowledge.",
    icon: "Cpu",
    capabilities: [
      "LLM-powered enterprise applications",
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Specialized AI assistants and task agents",
      "Automated document intelligence & extraction",
      "Custom AI integrations & API middleware"
    ],
    problemSolved: "Businesses struggle with generic chatbots that hallucinate, lack domain context, or leak confidential data outside enterprise security boundaries.",
    clientDeliverable: "Private, audit-logged AI services with sub-second retrieval, calibrated confidence scoring, and enterprise RBAC access control.",
    businessValue: "Transforms unstructured institutional archives into instant operational answers while automating high-cognitive knowledge workloads.",
    featured: true
  },
  {
    id: "automation",
    title: "Intelligent Workflow Automation",
    tagline: "End-to-end business process orchestration with human oversight",
    description: "Eliminate repetitive manual coordination across fragmented SaaS platforms, legacy backends, and communication channels with deterministic event pipelines.",
    icon: "GitBranch",
    capabilities: [
      "Multi-system workflow automation",
      "API-based webhook integrations (CRM, ERP, Billing)",
      "Business process orchestration engines",
      "Human-in-the-loop review and approval gates",
      "Real-time notifications & exception alerting"
    ],
    problemSolved: "Operational bottlenecks caused by manual data re-entry, unassigned leads, dropped follow-ups, and disconnected third-party software.",
    clientDeliverable: "Fault-tolerant orchestration pipelines with automated retry logic, dead-letter queues, and real-time execution telemetry dashboards.",
    businessValue: "Recovers hundreds of manual employee hours each month, cuts transaction turnaround times by 80%, and eliminates human entry errors.",
    featured: true
  },
  {
    id: "custom-software",
    title: "Custom Software & Full-Stack Development",
    tagline: "Engineered web applications, operations portals & scalable SaaS",
    description: "Architect and deliver high-performance digital products, internal operations platforms, and customer portals tailored exactly to your business logic.",
    icon: "Code2",
    capabilities: [
      "Modern full-stack web applications",
      "Business management platforms (ERP/CRM)",
      "Internal operational tools & admin portals",
      "Robust backend systems and microservices APIs",
      "Multi-tenant SaaS products with subscription billing"
    ],
    problemSolved: "Off-the-shelf software forces businesses to change their workflows, charges steep per-seat licenses, and cannot scale with complex edge cases.",
    clientDeliverable: "Clean, test-covered TypeScript/Next.js/Node/Go codebases with zero vendor lock-in, full client source ownership, and automated CI/CD.",
    businessValue: "Delivers proprietary software assets that fit your business model, accelerate daily operations, and scale smoothly under enterprise load."
  },
  {
    id: "data-analytics",
    title: "Data Engineering & Analytics",
    tagline: "Unified data pipelines, warehousing & real-time decision telemetry",
    description: "Transform fragmented data silos into reliable analytics pipelines, automated reporting dashboards, and actionable business intelligence.",
    icon: "BarChart3",
    capabilities: [
      "Resilient ETL/ELT data pipelines",
      "Multi-source data integration & cleansing",
      "Real-time executive reporting dashboards",
      "Business intelligence & KPI modeling",
      "Predictive analytics & cohort forecasting"
    ],
    problemSolved: "Decision-makers rely on outdated spreadsheets, conflicting department metrics, and unverified reports that hide unit economic risks.",
    clientDeliverable: "Centralized modern data warehouses, automated sync pipelines, and interactive executive dashboards with sub-50ms query speeds.",
    businessValue: "Provides leadership with a single source of truth for real-time revenue, operational pulse, and forward-looking business decisions."
  },
  {
    id: "mlops",
    title: "Machine Learning Operations (MLOps)",
    tagline: "Reliable model lifecycle management, monitoring & retraining pipelines",
    description: "Operationalize machine learning models from experimentation to production with automated registry tracking, latency profiling, and data drift detection.",
    icon: "Layers",
    capabilities: [
      "Model registry & semantic versioning",
      "Experiment tracking & evaluation benchmarking",
      "Blue/Green & Canary model deployment",
      "Real-time inference & data drift monitoring",
      "Automated retraining triggers & validation gates"
    ],
    problemSolved: "ML models degrade silently in production as real-world data shifts, lacking version control, monitoring, and reproducible deployment processes.",
    clientDeliverable: "Production-grade MLOps pipelines with automated Kolmogorov-Smirnov drift alerts, latency budgets, and continuous model governance.",
    businessValue: "Ensures production AI/ML systems maintain high accuracy, meet strict latency SLAs, and continuously adapt to evolving business conditions.",
    featured: true
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, DevOps & Reliability",
    tagline: "Zero-downtime deployment pipelines, containerization & 24/7 resilience",
    description: "Deploy and manage resilient cloud architecture across AWS, Google Cloud, and Azure with automated CI/CD, security hardening, and proactive telemetry.",
    icon: "Cloud",
    capabilities: [
      "Automated deployment & infrastructure as code (IaC)",
      "Containerization with Docker & Kubernetes",
      "Zero-downtime CI/CD continuous deployment",
      "Proactive infrastructure monitoring & log auditing",
      "Cloud system integration, caching & disaster recovery"
    ],
    problemSolved: "Server crashes, slow page response times, manual deployment blunders, and unexpected cloud infrastructure billing spikes.",
    clientDeliverable: "SOC2-ready cloud environments, automated GitHub Actions pipelines, multi-region failovers, and 99.99% availability SLAs.",
    businessValue: "Protects business continuity, reduces hosting overhead, and guarantees that customer-facing systems remain fast and secure 24/7."
  }
];
