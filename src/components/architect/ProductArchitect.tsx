"use client";

import React, { useState } from "react";
import { 
  Zap, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  Database, 
  Cpu, 
  ShieldCheck, 
  BarChart, 
  CreditCard, 
  Bell, 
  Globe 
} from "lucide-react";
import { cn } from "@/lib/utils";

type ProductType = 
  | "Website" 
  | "Web Application" 
  | "Mobile App" 
  | "SaaS" 
  | "AI Product" 
  | "Automation" 
  | "Internal Business Tool" 
  | "Data Platform";

type RequirementKey = 
  | "Authentication" 
  | "Payments" 
  | "AI" 
  | "Analytics" 
  | "Admin Dashboard" 
  | "Notifications" 
  | "API Integrations";

export default function ProductArchitect() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>("SaaS");
  const [selectedReqs, setSelectedReqs] = useState<RequirementKey[]>([
    "Authentication",
    "Payments",
    "Analytics",
    "Admin Dashboard"
  ]);

  const productOptions: ProductType[] = [
    "Website",
    "Web Application",
    "Mobile App",
    "SaaS",
    "AI Product",
    "Automation",
    "Internal Business Tool",
    "Data Platform"
  ];

  const requirementOptions: RequirementKey[] = [
    "Authentication",
    "Payments",
    "AI",
    "Analytics",
    "Admin Dashboard",
    "Notifications",
    "API Integrations"
  ];

  const toggleReq = (req: RequirementKey) => {
    setSelectedReqs((prev) => 
      prev.includes(req) ? prev.filter((r) => r !== req) : [...prev, req]
    );
  };

  const getEstimatedTimeline = () => {
    const baseWeeks = 3;
    const reqWeeks = selectedReqs.length * 1.2;
    const minWeeks = Math.round(baseWeeks + reqWeeks);
    const maxWeeks = minWeeks + 3;
    return `${minWeeks}–${maxWeeks} Weeks`;
  };

  return (
    <section id="product-architect" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRODUCT ARCHITECT</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            What are you building?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select your product type and core technical requirements to watch Nexora dynamically construct your estimated system architecture.
          </p>
        </div>

        {/* Builder Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Product Type & Requirements (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Step 1: Selectable Product Types */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                1. Select Target Product:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {productOptions.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedProduct(type)}
                    className={cn(
                      "p-3 rounded-xl text-left border text-xs font-semibold transition-all",
                      selectedProduct === type
                        ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30"
                        : "bg-[#0E1324] text-slate-300 border-white/[0.06] hover:bg-[#141B30] hover:text-white"
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: What does it need? Requirement Chips */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                2. What does it need? (Select all that apply)
              </span>
              <div className="flex flex-wrap gap-2">
                {requirementOptions.map((req) => {
                  const isChecked = selectedReqs.includes(req);
                  return (
                    <button
                      key={req}
                      type="button"
                      onClick={() => toggleReq(req)}
                      className={cn(
                        "px-3.5 py-2 rounded-xl text-xs font-medium border transition-all flex items-center gap-1.5",
                        isChecked
                          ? "bg-indigo-600/30 text-indigo-300 border-indigo-400 shadow-sm shadow-indigo-500/20"
                          : "bg-[#0E1324] text-slate-400 border-white/[0.06] hover:text-white hover:bg-[#141B30]"
                      )}
                    >
                      <div
                        className={cn(
                          "w-3.5 h-3.5 rounded flex items-center justify-center text-[10px]",
                          isChecked ? "bg-indigo-500 text-white" : "border border-slate-600"
                        )}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{req}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimate telemetry banner */}
            <div className="p-4 rounded-xl bg-[#0B0F1E] border border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Estimated Delivery:</span>
              <span className="text-emerald-400 font-bold">{getEstimatedTimeline()}</span>
            </div>
          </div>

          {/* Dynamic Visual Architecture Diagram (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#090D1A] border border-white/10 shadow-2xl backdrop-blur-xl relative">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-cyan-300 font-bold tracking-wider">
                    DYNAMIC SYSTEM TOPOLOGY :: {selectedProduct}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {selectedReqs.length} Active Modules
                </span>
              </div>

              {/* Dynamic Diagram Node Canvas */}
              <div className="py-8 flex flex-col items-center justify-center space-y-5 font-mono">
                {/* Top Module: AI or Notifications if selected */}
                <div className="flex gap-4">
                  {selectedReqs.includes("AI") && (
                    <div className="px-4 py-2 rounded-xl bg-[#141B34] border border-cyan-400/50 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10 flex items-center gap-1.5 animate-in fade-in duration-300">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>AI COGNITIVE ENGINE (RAG)</span>
                    </div>
                  )}
                  {selectedReqs.includes("Notifications") && (
                    <div className="px-4 py-2 rounded-xl bg-[#141B34] border border-violet-400/50 text-violet-300 text-xs font-bold shadow-lg shadow-violet-500/10 flex items-center gap-1.5 animate-in fade-in duration-300">
                      <Bell className="w-3.5 h-3.5" />
                      <span>NOTIFICATIONS DISPATCH</span>
                    </div>
                  )}
                </div>

                {/* Vertical ray if top modules exist */}
                {(selectedReqs.includes("AI") || selectedReqs.includes("Notifications")) && (
                  <div className="w-px h-6 bg-gradient-to-b from-cyan-400 to-blue-500" />
                )}

                {/* Primary Pipeline Chain: USER → WEB APP / CLIENT → API GATEWAY → DATABASE */}
                <div className="w-full flex flex-wrap items-center justify-center gap-2 text-xs">
                  {/* Node 1: Client */}
                  <div className="p-3 rounded-xl bg-[#10162B] border border-white/20 text-white font-bold text-center">
                    <p className="text-[10px] text-slate-400 uppercase">Input</p>
                    <p>USER / CLIENT</p>
                  </div>

                  <span className="text-blue-400 font-bold">→</span>

                  {/* Node 2: App Surface */}
                  <div className="p-3 rounded-xl bg-[#10162B] border border-blue-500/40 text-blue-300 font-bold text-center shadow-lg shadow-blue-500/10">
                    <p className="text-[10px] text-slate-400 uppercase">Surface</p>
                    <p>{selectedProduct.toUpperCase()}</p>
                  </div>

                  <span className="text-blue-400 font-bold">→</span>

                  {/* Node 3: API Gateway */}
                  <div className="p-3 rounded-xl bg-[#10162B] border border-indigo-500/40 text-indigo-300 font-bold text-center shadow-lg shadow-indigo-500/10">
                    <p className="text-[10px] text-slate-400 uppercase">Orchestration</p>
                    <p>API GATEWAY</p>
                  </div>

                  <span className="text-blue-400 font-bold">→</span>

                  {/* Node 4: Database & Storage */}
                  <div className="p-3 rounded-xl bg-[#10162B] border border-emerald-500/40 text-emerald-300 font-bold text-center shadow-lg shadow-emerald-500/10">
                    <p className="text-[10px] text-slate-400 uppercase">Persistence</p>
                    <p>POSTGRES + REDIS</p>
                  </div>
                </div>

                {/* Vertical ray for bottom modules */}
                {(selectedReqs.includes("Analytics") || selectedReqs.includes("Payments") || selectedReqs.includes("Admin Dashboard")) && (
                  <div className="w-px h-6 bg-gradient-to-b from-blue-500 to-emerald-400" />
                )}

                {/* Bottom Modules */}
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedReqs.includes("Analytics") && (
                    <div className="px-3 py-1.5 rounded-lg bg-[#141B34] border border-emerald-400/50 text-emerald-300 text-xs font-bold flex items-center gap-1.5 animate-in fade-in duration-300">
                      <BarChart className="w-3 h-3" />
                      <span>ANALYTICS PIPELINE</span>
                    </div>
                  )}
                  {selectedReqs.includes("Payments") && (
                    <div className="px-3 py-1.5 rounded-lg bg-[#141B34] border border-amber-400/50 text-amber-300 text-xs font-bold flex items-center gap-1.5 animate-in fade-in duration-300">
                      <CreditCard className="w-3 h-3" />
                      <span>STRIPE / PAYMENTS GATEWAY</span>
                    </div>
                  )}
                  {selectedReqs.includes("Admin Dashboard") && (
                    <div className="px-3 py-1.5 rounded-lg bg-[#141B34] border border-blue-400/50 text-blue-300 text-xs font-bold flex items-center gap-1.5 animate-in fade-in duration-300">
                      <Layers className="w-3 h-3" />
                      <span>ADMIN TELEMETRY</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Callout & Action */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-300 text-center sm:text-left">
                  <strong className="text-white">This is the kind of system Nexora can design and build.</strong>
                </p>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wider shadow-lg shadow-blue-600/30 transition-all shrink-0"
                >
                  <span>Discuss Your Product</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
