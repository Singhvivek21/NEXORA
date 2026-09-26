import Hero from "@/components/hero/Hero";
import TrustStrip from "@/components/hero/TrustStrip";
import ScrollStorySpine from "@/components/ui/ScrollStorySpine";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import ProductArchitect from "@/components/architect/ProductArchitect";
import BusinessOSShowcase from "@/components/showcase/BusinessOSShowcase";
import AutomationNodeBuilder from "@/components/automation/AutomationNodeBuilder";
import AiAssistantExperience from "@/components/ai-section/AiAssistantExperience";
import TransformationSection from "@/components/transformation/TransformationSection";
import IndustryExperience from "@/components/industries/IndustryExperience";
import TechArchitecture from "@/components/tech-stack/TechArchitecture";
import WorkShowcase from "@/components/work/WorkShowcase";
import ProcessSection from "@/components/process/ProcessSection";
import EngagementSection from "@/components/engagement/EngagementSection";
import ContactSection from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#06080E]">
      {/* 01. Hero with Staggered Typography & Command Interface */}
      <Hero />
      <TrustStrip />

      {/* Story Narrative Spine: UNDERSTAND */}
      <ScrollStorySpine
        stepNumber="PHASE 01"
        label="UNDERSTAND"
        subtext="Auditing the core business problem"
      />

      {/* 02. Interactive Service Explorer (Replaces static cards) */}
      <ServiceExplorer />

      {/* Story Narrative Spine: DESIGN */}
      <ScrollStorySpine
        stepNumber="PHASE 02"
        label="DESIGN"
        subtext="Synthesizing dynamic system topology"
      />

      {/* 03. Interactive Product Architect ("What are you building?") */}
      <ProductArchitect />

      {/* Story Narrative Spine: ENGINEER */}
      <ScrollStorySpine
        stepNumber="PHASE 03"
        label="ENGINEER"
        subtext="Building production software platforms"
      />

      {/* 04. BusinessOS Product Showcase */}
      <BusinessOSShowcase />

      {/* Story Narrative Spine: AUTOMATE */}
      <ScrollStorySpine
        stepNumber="PHASE 04"
        label="AUTOMATE"
        subtext="Eliminating manual operational friction"
      />

      {/* 05. Node-Based Automation Flow Builder */}
      <AutomationNodeBuilder />

      {/* Story Narrative Spine: INTELLIGENCE */}
      <ScrollStorySpine
        stepNumber="PHASE 05"
        label="INTELLIGENCE"
        subtext="Embedding domain AI into business data"
      />

      {/* 06. Interactive AI Assistant Deep Experience */}
      <AiAssistantExperience />

      {/* 07. Visual Digital Transformation (Before vs With Nexora) */}
      <TransformationSection />

      {/* 08. Interactive Industry Experience Switcher */}
      <IndustryExperience />

      {/* 09. Full-Stack Layered Architecture Blueprint */}
      <TechArchitecture />

      {/* 10. Capability Showcase Demonstrations */}
      <WorkShowcase />

      {/* 11. 6-Step Delivery Process */}
      <ProcessSection />

      {/* 12. Engagement Frameworks & The Nexora Advantage */}
      <EngagementSection />

      {/* 13. High-Converting Contact Section */}
      <ContactSection />
    </div>
  );
}
