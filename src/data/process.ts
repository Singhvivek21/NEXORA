export interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    tagline: "Understand business objectives, systems & constraints",
    description: "We analyze your business objectives, existing technology stack, data flows, operational constraints, and success criteria before designing solutions.",
    deliverables: [
      "Technical Feasibility & Requirements Document",
      "System Integration & Dependency Mapping",
      "Target Metrics & ROI Success Criteria"
    ],
    duration: "Week 1"
  },
  {
    step: "02",
    name: "Design",
    tagline: "Architecture, integrations, security & user experience",
    description: "We architect the solution end-to-end: data schemas, API contracts, security perimeters, AI models, and interactive high-fidelity user journeys.",
    deliverables: [
      "Full System Architecture Blueprint",
      "Interactive Figma Prototypes & Design Tokens",
      "Data Schemas & API Integration Contracts"
    ],
    duration: "Week 1 – 2"
  },
  {
    step: "03",
    name: "Build",
    tagline: "Full-stack development, AI capabilities & workflows",
    description: "Our engineers build clean, modular, test-covered code. We train or fine-tune models, construct deterministic workflows, and integrate backend databases.",
    deliverables: [
      "Weekly Staging Builds & Live Demos",
      "Modular Services with Strict Typing",
      "AI Pipelines & Vector Retrieval Services"
    ],
    duration: "Sprint-based"
  },
  {
    step: "04",
    name: "Validate",
    tagline: "Functionality, security, performance & data quality",
    description: "We run comprehensive end-to-end testing, security penetration reviews, automated regression suites, latency profiling, and data quality checks.",
    deliverables: [
      "Automated Test Coverage (Unit & Integration)",
      "Security & Vulnerability Assessment Report",
      "Latency, Load & Data Integrity Verification"
    ],
    duration: "Sprint Milestone"
  },
  {
    step: "05",
    name: "Deploy",
    tagline: "Controlled release & continuous production monitoring",
    description: "We deploy the system through controlled CI/CD pipelines, configure DNS/SSL routing, set up telemetry alerts, and train your internal operational team.",
    deliverables: [
      "Zero-Downtime Production Deployment",
      "24/7 Infrastructure & Model Monitoring Dashboards",
      "Operational Playbooks & Staff Documentation"
    ],
    duration: "Go-Live Window"
  },
  {
    step: "06",
    name: "Improve",
    tagline: "Performance monitoring, issue resolution & scaling",
    description: "Technology needs continuous refinement. We monitor real-world inference latency, detect data drift, address edge cases, and scale the system alongside your growth.",
    deliverables: [
      "SLA-Backed Technical Support & Incident Response",
      "Ongoing Model Monitoring & Drift Detection",
      "Continuous Optimization & Roadmap Iteration"
    ],
    duration: "Continuous"
  }
];
