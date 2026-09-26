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
    tagline: "Deep audit of the core business problem",
    description: "We don't jump into code blindly. We analyze your workflows, bottleneck friction, customer touchpoints, and business objectives to define the exact problem.",
    deliverables: ["Technical Feasibility Study", "Problem Definition Canvas", "ROI & Impact Assessment"],
    duration: "Week 1"
  },
  {
    step: "02",
    name: "Strategize",
    tagline: "Architecture blueprint & milestone roadmap",
    description: "We architect the entire system: tech stack selection, data schemas, API contracts, security models, and sprint milestones tailored to your timeline.",
    deliverables: ["System Architecture Diagram", "Technical Specification (PRD)", "Phased Delivery Roadmap"],
    duration: "Week 1 - 2"
  },
  {
    step: "03",
    name: "Design",
    tagline: "Clickable prototypes & design systems",
    description: "We craft intuitive user journeys, interactive wireframes, and high-fidelity interfaces in dark/light modes that reflect your brand authority.",
    deliverables: ["Interactive Figma Prototypes", "Design Token Library", "User Journey Flowcharts"],
    duration: "Week 2 - 3"
  },
  {
    step: "04",
    name: "Build",
    tagline: "Production-grade engineering & tests",
    description: "Our engineers build clean, test-covered, modular code with continuous integration. You receive weekly demo builds to test real working software early.",
    deliverables: ["Weekly Staging Deployments", "Automated Test Suites", "Clean, Documented Codebase"],
    duration: "Sprint-based"
  },
  {
    step: "05",
    name: "Launch",
    tagline: "Zero-downtime deployment & onboarding",
    description: "We configure production cloud infrastructure, domain routing, SSL certificates, load balancers, and monitoring. Then we execute smooth cutover.",
    deliverables: ["Production Cloud Environment", "Staff Training & Documentation", "Go-Live Monitoring & Audits"],
    duration: "Launch Day"
  },
  {
    step: "06",
    name: "Support",
    tagline: "Continuous scaling, telemetry & upgrades",
    description: "Technology doesn't stop at deployment. We monitor latency, uptime, security patches, and iterate based on real user behavioral metrics.",
    deliverables: ["24/7 Health Monitoring", "SLA-Backed Response Times", "Continuous Feature Iteration"],
    duration: "Ongoing"
  }
];
