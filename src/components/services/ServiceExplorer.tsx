"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Cpu, 
  GitBranch, 
  BarChart3, 
  Smartphone, 
  Cloud, 
  Layout, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Play,
  Layers,
  ShieldCheck,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

type ServiceCategory = "SOFTWARE" | "AI" | "AUTOMATION" | "DATA" | "MOBILE" | "CLOUD" | "DESIGN";

export default function ServiceExplorer() {
  const [selectedService, setSelectedService] = useState<ServiceCategory>("AI");

  const categories: { id: ServiceCategory; label: string; icon: React.ElementType; sub: string }[] = [
    { id: "SOFTWARE", label: "SOFTWARE", icon: Code2, sub: "Custom Business Platforms & SaaS" },
    { id: "AI", label: "AI", icon: Cpu, sub: "Enterprise RAG & Task Agents" },
    { id: "AUTOMATION", label: "AUTOMATION", icon: GitBranch, sub: "End-to-End Orchestrated Workflows" },
    { id: "DATA", label: "DATA", icon: BarChart3, sub: "Real-time Telemetry & Intelligence" },
    { id: "MOBILE", label: "MOBILE", icon: Smartphone, sub: "iOS, Android & Offline Sync" },
    { id: "CLOUD", label: "CLOUD", icon: Cloud, sub: "Resilient Infrastructure & DevOps" },
    { id: "DESIGN", label: "DESIGN", icon: Layout, sub: "High-Fidelity Product UI/UX" },
  ];

  return (
    <section id="service-explorer" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CAPABILITY EXPLORER</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            One team. Every layer of your product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Explore how Nexora engineers full-stack software, domain AI, and workflow automation into unified business systems.
          </p>
        </div>

        {/* Product Configurator Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Menu (4 Cols) */}
          <div className="lg:col-span-4 space-y-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedService === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedService(cat.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                    isActive
                      ? "bg-[#11172A] border-blue-500/50 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30"
                      : "bg-[#0A0E1A]/80 border-white/[0.06] hover:bg-[#0F1426] hover:border-white/15"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-[#141B30] text-slate-400 group-hover:text-white"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={cn("text-xs font-mono font-bold tracking-widest uppercase", isActive ? "text-white" : "text-slate-300 group-hover:text-white")}>
                        {cat.label}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-sans">
                        {cat.sub}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Interactive Miniature Panel (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0A0E1A] border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              {/* AI PANEL */}
              {selectedService === "AI" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-cyan-400">COGNITIVE SYSTEMS</span>
                      <h3 className="text-xl font-bold text-white mt-1">Autonomous Business AI</h3>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      RAG + LLM Orchestration
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                    <span className="p-2 rounded bg-[#11172A] border border-white/[0.06] text-slate-200">AI Assistants</span>
                    <span className="p-2 rounded bg-[#11172A] border border-white/[0.06] text-slate-200">Task Agents</span>
                    <span className="p-2 rounded bg-[#11172A] border border-white/[0.06] text-slate-200">Vector RAG</span>
                    <span className="p-2 rounded bg-[#11172A] border border-white/[0.06] text-slate-200">Document AI</span>
                    <span className="p-2 rounded bg-[#11172A] border border-white/[0.06] text-slate-200">NLP Analytics</span>
                  </div>

                  {/* Miniature working interface */}
                  <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.08] font-mono text-xs space-y-3">
                    <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/[0.06]">
                      <span className="text-cyan-400 font-bold">query_engine_v2.py</span>
                      <span>Latency: 420ms</span>
                    </div>
                    <div className="space-y-1.5 text-slate-300">
                      <p><span className="text-blue-400">&gt;</span> Ingesting 45,000 internal operational policies into pgvector...</p>
                      <p><span className="text-blue-400">&gt;</span> Prompt: &quot;Identify contract clauses with penalty clauses exceeding ₹5L&quot;</p>
                      <p className="text-emerald-400"><span className="text-blue-400">&gt;</span> Found 3 matching agreements [Agreement_884, SOW_2026_04, Vendor_MSA_09]</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0F1424] border border-cyan-500/30 text-white font-sans text-xs">
                      <strong>Executive Insight:</strong> Clause 8.2 of Vendor_MSA_09 carries a ₹6.5L SLA penalty for unannounced server downtime exceeding 60 minutes.
                    </div>
                  </div>
                </div>
              )}

              {/* AUTOMATION PANEL */}
              {selectedService === "AUTOMATION" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-indigo-400">EVENT PIPELINES</span>
                      <h3 className="text-xl font-bold text-white mt-1">Intelligent Event Orchestration</h3>
                    </div>
                    <span className="text-xs font-mono text-cyan-400">Zero Manual Handoff</span>
                  </div>

                  {/* Pipeline: TRIGGER → PROCESS → AI → ACTION → RESULT */}
                  <div className="grid grid-cols-5 gap-2 text-center">
                    <div className="p-3 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <p className="text-[10px] font-mono text-slate-400">01</p>
                      <p className="text-xs font-bold text-white mt-1">TRIGGER</p>
                      <p className="text-[9px] text-slate-400 mt-1">Webhook Inbound</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <p className="text-[10px] font-mono text-slate-400">02</p>
                      <p className="text-xs font-bold text-white mt-1">PROCESS</p>
                      <p className="text-[9px] text-slate-400 mt-1">Data Normalization</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#11172A] border border-indigo-500/40">
                      <p className="text-[10px] font-mono text-indigo-400">03</p>
                      <p className="text-xs font-bold text-white mt-1">AI</p>
                      <p className="text-[9px] text-indigo-300 mt-1">Intent Scoring</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <p className="text-[10px] font-mono text-slate-400">04</p>
                      <p className="text-xs font-bold text-white mt-1">ACTION</p>
                      <p className="text-[9px] text-slate-400 mt-1">Route &amp; Alert</p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#11172A] border border-emerald-500/40">
                      <p className="text-[10px] font-mono text-emerald-400">05</p>
                      <p className="text-xs font-bold text-white mt-1">RESULT</p>
                      <p className="text-[9px] text-emerald-300 mt-1">CRM + Deal Won</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#080C14] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span>Average Execution Roundtrip: <strong className="text-emerald-400">1.8 seconds</strong></span>
                    <span className="text-slate-400">Kafka + BullMQ Queue Engine</span>
                  </div>
                </div>
              )}

              {/* DATA PANEL */}
              {selectedService === "DATA" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-emerald-400">BUSINESS INTELLIGENCE</span>
                      <h3 className="text-xl font-bold text-white mt-1">Real-Time Data Visualization</h3>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">Live Pulse Telemetry</span>
                  </div>

                  {/* Animated charts */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-400">NET ARR</span>
                      <p className="text-lg font-bold text-white mt-1">₹1.84 Cr</p>
                      <div className="mt-3 flex items-end gap-1.5 h-12">
                        <div className="bg-blue-500/40 w-full h-[40%] rounded-t" />
                        <div className="bg-blue-500/60 w-full h-[65%] rounded-t" />
                        <div className="bg-blue-500/80 w-full h-[80%] rounded-t" />
                        <div className="bg-blue-500 w-full h-[100%] rounded-t" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-400">CONVERSION</span>
                      <p className="text-lg font-bold text-emerald-400 mt-1">4.8%</p>
                      <div className="mt-3 flex items-end gap-1.5 h-12">
                        <div className="bg-emerald-500/40 w-full h-[30%] rounded-t" />
                        <div className="bg-emerald-500/60 w-full h-[50%] rounded-t" />
                        <div className="bg-emerald-500/80 w-full h-[75%] rounded-t" />
                        <div className="bg-emerald-500 w-full h-[95%] rounded-t" />
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                      <span className="text-[10px] font-mono text-slate-400">QUERY TIME</span>
                      <p className="text-lg font-bold text-cyan-400 mt-1">18ms</p>
                      <div className="mt-3 flex items-end gap-1.5 h-12">
                        <div className="bg-cyan-500/40 w-full h-[90%] rounded-t" />
                        <div className="bg-cyan-500/60 w-full h-[60%] rounded-t" />
                        <div className="bg-cyan-500/80 w-full h-[30%] rounded-t" />
                        <div className="bg-cyan-500 w-full h-[15%] rounded-t" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* MOBILE PANEL */}
              {selectedService === "MOBILE" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-rose-400">MOBILE ECOSYSTEM</span>
                      <h3 className="text-xl font-bold text-white mt-1">Native &amp; Cross-Platform Apps</h3>
                    </div>
                    <span className="text-xs font-mono text-rose-400">iOS &amp; Android Sync</span>
                  </div>

                  {/* Animated mobile frame preview */}
                  <div className="max-w-xs mx-auto p-4 rounded-3xl bg-[#070A12] border-2 border-white/20 shadow-xl space-y-3">
                    <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2" />
                    <div className="p-3 rounded-xl bg-[#12182B] border border-white/[0.06] text-xs">
                      <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <span>Nexora Field App</span>
                        <span className="text-emerald-400 font-mono">Synced</span>
                      </div>
                      <p className="text-white font-bold mt-1">Dispatch #8849 En Route</p>
                      <div className="mt-2 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-4/5" />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#12182B] border border-white/[0.06] text-xs space-y-1">
                      <p className="text-slate-300">Biometric Touch ID: <strong className="text-white">Active</strong></p>
                      <p className="text-[10px] text-slate-400 font-mono">Offline-first local SQLite cache</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SOFTWARE PANEL */}
              {selectedService === "SOFTWARE" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-blue-400">CUSTOM PLATFORMS</span>
                      <h3 className="text-xl font-bold text-white mt-1">Enterprise Architecture</h3>
                    </div>
                    <span className="text-xs font-mono text-blue-400">Microservices Ready</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.08] font-mono text-xs text-slate-300 space-y-2">
                    <p className="text-blue-400 font-bold">// OpenAPI Microservices Specification</p>
                    <p>GET /api/v1/orders/{`{id}`}/reconcile → 200 OK (38ms)</p>
                    <p>POST /api/v1/tenants/provision → Subdomain Created (Vercel Edge)</p>
                    <p>PUT /api/v1/ledger/entry → ACID Postgres Transaction Verified</p>
                  </div>
                </div>
              )}

              {/* CLOUD PANEL */}
              {selectedService === "CLOUD" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-violet-400">INFRASTRUCTURE</span>
                      <h3 className="text-xl font-bold text-white mt-1">Multi-Region Cloud DevOps</h3>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">99.99% Guaranteed SLA</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-[#11172A] border border-white/[0.06]">
                      <span className="text-slate-400">Edge Point-of-Presence</span>
                      <p className="text-white font-bold mt-1">Mumbai, Singapore, Frankfurt</p>
                      <p className="text-emerald-400 text-[10px] mt-0.5">&lt; 14ms Latency</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#11172A] border border-white/[0.06]">
                      <span className="text-slate-400">Zero-Downtime Deploys</span>
                      <p className="text-white font-bold mt-1">Blue/Green Traffic Shifting</p>
                      <p className="text-blue-400 text-[10px] mt-0.5">Automated Rollbacks</p>
                    </div>
                  </div>
                </div>
              )}

              {/* DESIGN PANEL */}
              {selectedService === "DESIGN" && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <div>
                      <span className="text-xs font-mono uppercase text-amber-400">DESIGN SYSTEM</span>
                      <h3 className="text-xl font-bold text-white mt-1">Precision Product UI/UX</h3>
                    </div>
                    <span className="text-xs font-mono text-amber-300">Design Tokens</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-blue-600" />
                      <div className="w-6 h-6 rounded bg-indigo-600" />
                      <div className="w-6 h-6 rounded bg-cyan-500" />
                      <div className="w-6 h-6 rounded bg-[#0A0E1A] border border-white/20" />
                      <span className="text-xs font-mono text-slate-400">WCAG AAA Contrast Standard</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Every interface is crafted with cohesive typography scales, 8px rhythm grids, accessible interaction states, and fluid responsive motion.
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Card Action */}
              <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Want to explore how this applies to your technical architecture?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Inquire for {selectedService}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
