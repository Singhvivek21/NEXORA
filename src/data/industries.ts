export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keySolutions: string[];
  icon: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "startups",
    name: "Startups & Scaleups",
    tagline: "Rapid MVPs & scalable product foundations",
    description: "We help high-ambition founders translate product visions into scalable, investor-ready MVPs with robust tech architecture built to handle rapid growth.",
    keySolutions: ["Rapid MVP Prototyping", "Full-Stack SaaS Architecture", "Seed-to-Series A Tech Roadmap"],
    icon: "Rocket"
  },
  {
    id: "education",
    name: "Education & EdTech",
    tagline: "Engaging portals for schools, academies & universities",
    description: "Modernized digital infrastructure connecting learners, educators, and administrators with smooth billing, interactive classrooms, and grade tracking.",
    keySolutions: ["Learning Management Systems (LMS)", "Parent-Teacher Portals", "Student Fee Gateways"],
    icon: "GraduationCap"
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    tagline: "Compliant digital health & patient management",
    description: "Secure, intuitive software for clinics, diagnostic centers, and wellness platforms designed to enhance patient experience and streamline operations.",
    keySolutions: ["EHR & Medical Records", "Telemedicine Workflows", "Doctor Availability & Booking"],
    icon: "Stethoscope"
  },
  {
    id: "retail",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel commerce & inventory synchronization",
    description: "Connected shopping platforms that harmonize online storefronts, physical POS systems, warehouse stock, and automated logistics tracking.",
    keySolutions: ["Headless E-commerce", "Unified Warehouse Inventory", "Loyalty & Repeat Purchase Systems"],
    icon: "ShoppingBag"
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Client portals, billing & streamlined operations",
    description: "Custom software for legal, accounting, consulting, and advisory firms to automate time logging, client communication, and document vaults.",
    keySolutions: ["Secure Client File Portals", "Automated Retainer Invoicing", "Contract Lifecycle Management"],
    icon: "Briefcase"
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "Property management, listings & booking portals",
    description: "Digital tools for brokers, property developers, and asset managers to showcase properties, manage tenant leasing, and automate payment collections.",
    keySolutions: ["Interactive Property Showcase", "Tenant Lease Portals", "Automated Maintenance Dispatch"],
    icon: "Building2"
  },
  {
    id: "finance",
    name: "Finance & FinTech",
    tagline: "Secure portals, ledgers & compliance dashboards",
    description: "High-security digital applications for asset managers, fintech services, and wealth advisories with multi-factor authentication and precision audits.",
    keySolutions: ["Client Portfolio Dashboards", "Transaction Ledgers", "Automated KYC Verification Workflows"],
    icon: "Coins"
  },
  {
    id: "smes",
    name: "SMEs & Local Enterprises",
    tagline: "Digitization & operational centralization",
    description: "Transitioning traditional businesses from fragmented paper and WhatsApp coordination into sleek, centralized digital platforms.",
    keySolutions: ["Centralized Operations Portal", "Supplier & Order Tracking", "Automated Billing & WhatsApp Alerts"],
    icon: "Factory"
  }
];
