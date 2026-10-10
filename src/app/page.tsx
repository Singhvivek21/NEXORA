import Hero from "@/components/hero/Hero";
import TrustStrip from "@/components/hero/TrustStrip";
import ScrollStorySpine from "@/components/ui/ScrollStorySpine";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import ProductArchitect from "@/components/architect/ProductArchitect";
import SolutionsShowcase from "@/components/solutions/SolutionsShowcase";
import BusinessOSShowcase from "@/components/showcase/BusinessOSShowcase";
import IndustryExperience from "@/components/industries/IndustryExperience";
import TechArchitecture from "@/components/tech-stack/TechArchitecture";
import TransformationSection from "@/components/transformation/TransformationSection";
import ProcessSection from "@/components/process/ProcessSection";
import EngagementSection from "@/components/engagement/EngagementSection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06080E]">
      {/* 01. Hero with Staggered Editorial Typography & Command Synthesizer */}
      <Hero />
      <TrustStrip />

      {/* Story Narrative Spine: DISCOVER & SCOPE */}
      <ScrollStorySpine
        stepNumber="PHASE 01"
        label="CAPABILITIES"
        subtext="Six core technology capabilities"
      />

      {/* 02. Interactive Service Explorer (AI, Automation, Software, Data, MLOps, Cloud) */}
      <ServiceExplorer />

      {/* Story Narrative Spine: DESIGN & TOPOLOGY */}
      <ScrollStorySpine
        stepNumber="PHASE 02"
        label="ARCHITECT"
        subtext="Dynamic system topology & requirements"
      />

      {/* 03. Interactive Product Architect ("What are you building?") */}
      <ProductArchitect />

      {/* Story Narrative Spine: PROTOTYPES & SOLUTIONS */}
      <ScrollStorySpine
        stepNumber="PHASE 03"
        label="SOLUTIONS"
        subtext="Interactive capability demonstrations"
      />

      {/* 04. Solutions Showcase (3 Priority Interactive Demos: Document AI, Workflow Automation, MLOps Dashboard) */}
      <SolutionsShowcase />

      {/* 05. BusinessOS Operational Command Center Showcase */}
      <BusinessOSShowcase />

      {/* 06. Adaptive Industry Experience Switcher */}
      <IndustryExperience />

      {/* Story Narrative Spine: FULL-STACK BLUEPRINT */}
      <ScrollStorySpine
        stepNumber="PHASE 04"
        label="ENGINEERING"
        subtext="Layered full-stack architecture"
      />

      {/* 07. Full-Stack Layered Architecture Blueprint (#engineering) */}
      <TechArchitecture />

      {/* 08. Visual Transformation (Before Nexora vs With Nexora) */}
      <TransformationSection />

      {/* Story Narrative Spine: PROCESS & DELIVERY */}
      <ScrollStorySpine
        stepNumber="PHASE 05"
        label="DELIVERY"
        subtext="Disciplined six-stage methodology"
      />

      {/* 09. Engineering Approach & 6-Stage Process (#process) */}
      <ProcessSection />

      {/* 10. Engagement Models & The Nexora Advantage (#about) */}
      <EngagementSection />

      {/* 11. High-Converting Contact Section (#contact with Zod server validation) */}
      <ContactSection />
    </div>
  );
}
