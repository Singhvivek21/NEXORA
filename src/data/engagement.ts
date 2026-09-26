export interface EngagementModel {
  id: string;
  title: string;
  badge?: string;
  bestFor: string;
  description: string;
  deliverables: string[];
  ctaText: string;
  popular?: boolean;
}

export const engagementModels: EngagementModel[] = [
  {
    id: "project-based",
    title: "Project-Based",
    badge: "Fixed Scope & Timeline",
    bestFor: "Specific product build, MVP, website or defined application",
    description: "Have a specific product, redesign, or automation requirement? We deliver complete end-to-end execution with defined milestones, clear deliverables, and guaranteed delivery dates.",
    deliverables: [
      "Fixed scope and transparent milestones",
      "Dedicated Project Lead & weekly demos",
      "Full source code ownership upon completion",
      "30-day post-launch warranty & bug fixes"
    ],
    ctaText: "Start a Project",
    popular: false
  },
  {
    id: "dedicated-team",
    title: "Dedicated Development Team",
    badge: "Agile Scale",
    bestFor: "Growing businesses needing fast technical velocity",
    description: "Need dedicated senior engineers, designers, or AI practitioners to extend your in-house team? Get a full-time, high-velocity technical squad working directly in your sprints.",
    deliverables: [
      "Vetted senior full-stack & AI engineers",
      "Seamless integration into Slack, Jira & GitHub",
      "Flexible monthly retainers with zero hiring overhead",
      "Direct technical standups and sprint planning"
    ],
    ctaText: "Build Your Team",
    popular: true
  },
  {
    id: "technology-partner",
    title: "Technology Partner",
    badge: "Fractional CTO & Tech Department",
    bestFor: "Non-technical founders & SMEs without internal IT leadership",
    description: "Don't have an internal IT department? Use Nexora as your fractional CTO and complete technology wing. We handle architecture, security, vendors, development, and ongoing growth.",
    deliverables: [
      "Fractional CTO strategic advisory",
      "Continuous system development & maintenance",
      "Infrastructure security & compliance oversight",
      "Priority emergency incident response SLA"
    ],
    ctaText: "Talk to Us",
    popular: false
  }
];

export interface WhyNexoraItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export const whyNexoraData: WhyNexoraItem[] = [
  {
    id: "business-first",
    title: "Business First",
    tagline: "Problem before technology",
    description: "We start with unit economics, conversion bottlenecks, and operational friction—not buzzwords. Technology is merely the instrument to generate business leverage.",
    icon: "Target"
  },
  {
    id: "end-to-end",
    title: "End-to-End",
    tagline: "One unified accountability partner",
    description: "No dealing with one agency for UI design, a separate freelancer for code, and another team for cloud DevOps. Nexora manages the entire chain seamlessly.",
    icon: "Layers"
  },
  {
    id: "flexible",
    title: "Flexible",
    tagline: "Tailored to your budget & growth stage",
    description: "From lean seed-stage MVPs to complex enterprise modernization, we structure architectures and roadmaps that align with your financial cadence.",
    icon: "Sliders"
  },
  {
    id: "scalable",
    title: "Scalable",
    tagline: "Architecture that doesn't collapse under load",
    description: "We engineer systems with modular microservices, clean database indexing, and elastic cloud infrastructure that smoothly handles 10x traffic spikes.",
    icon: "TrendingUp"
  },
  {
    id: "long-term",
    title: "Long-Term",
    tagline: "Persistent partnership after deployment",
    description: "We don't hand off code and disappear. We maintain, audit, benchmark, and iteratively improve your software as your enterprise scales.",
    icon: "ShieldCheck"
  }
];
