# NEXORA — Full-Service Technology Agency

> **We build what your business needs next.**  
> From websites and custom software to AI, workflow automation, data pipelines, and cloud architecture—we design and build technology around the way businesses actually work.

---

## 🌟 Overview

NEXORA is a production-grade, full-service technology agency web application engineered with an interactive digital product philosophy (benchmarked against Linear, Vercel, Stripe, and Raycast).

### Key Product Highlights:

* **Interactive Hero Command Interface**: Live architectural synthesizer that parses build prompts and plots module pipelines in real time.
* **Interactive Product Architect**: Selectable product types and technical requirements that dynamically generate visual system topologies and estimated timelines.
* **Interactive Service Explorer**: Replaces static service lists with a live configurator across Software, AI, Automation, Data, Mobile, Cloud, and Design.
* **BusinessOS Showcase**: Comprehensive browser-window command center featuring CRM pipelines, multi-hub inventory, revenue telemetry, and AI summaries.
* **AI Assistant Console**: Real-time natural language query synthesizer equipped with dynamic chart rendering and verified database citations.
* **Node-Based Automation Engine**: Visual event pipeline (*New Lead → CRM Enrich → AI Intent Score → WhatsApp Dispatch → Follow-up Cadence*) with live payload inspection.
* **Adaptive Industry Switcher**: Contextual UI previews for Healthcare, Education, Retail, Startups, and Professional Services.
* **Full-Stack Architecture Blueprint**: Decoupled 5-layer system overview detailing modern protocols, runtimes, and databases.
* **Global Command Palette (`⌘K` / `Ctrl+K`)**: Instant search and fast keyboard navigation.
* **Proof-of-Capability Showcases**: Dedicated routes for `/work/business-os`, `/work/ai-business-assistant`, `/work/ai-document-intelligence`, `/work/ecommerce`, and `/work/booking`.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Animations**: Framer Motion & CSS hardware-accelerated transitions
* **Theme**: Deep space dark aesthetic (`#06080E`) with linear glassmorphism and WCAG AAA contrast standard

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/<your-username>/nexora.git
cd nexora
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live application.

### 3. Production Build

```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```text
src/
├── app/
│   ├── layout.tsx                      # Root layout with CommandPalette & CustomCursor
│   ├── page.tsx                        # Flagship landing page with scroll storytelling spine
│   ├── robots.ts                       # SEO crawlers configuration
│   ├── sitemap.ts                      # XML sitemap generator
│   └── work/                           # Dedicated Capability Showcases
│       ├── business-os/
│       ├── ai-business-assistant/
│       ├── ai-document-intelligence/
│       ├── ecommerce/
│       └── booking/
├── components/
│   ├── navbar/Navbar.tsx               # Sticky header with ⌘K search trigger
│   ├── hero/                           # Hero section & Command Interface
│   ├── architect/                      # Interactive Product Architect
│   ├── services/                       # Interactive Service Explorer
│   ├── showcase/                       # BusinessOS browser mockup
│   ├── ai-section/                     # AI Assistant interactive console
│   ├── automation/                     # Node-based automation workflow builder
│   ├── industries/                     # Adaptive sector UI switcher
│   ├── tech-stack/                     # Full-stack layered architecture blueprint
│   ├── work/                           # Capability showcase cards
│   ├── transformation/                 # Before vs With Nexora visual comparison
│   ├── process/                        # 6-step engineering methodology
│   ├── engagement/                     # Collaboration models & Why Nexora
│   ├── contact/                        # High-converting lead form & confirmation
│   ├── footer/Footer.tsx               # Footer sitemap and status telemetry
│   └── ui/                             # CommandPalette, CustomCursor, StorySpine
├── data/                               # Modular data definitions
├── lib/                                # Utility helpers (cn)
└── styles/                             # Global CSS, typography tokens, glass effects
```

---

## 📄 License

© 2026 NEXORA. All rights reserved.
