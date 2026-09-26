"use client";

import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Database, 
  ShieldCheck, 
  Activity 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BuildScenario {
  id: string;
  name: string;
  query: string;
  requirements: string[];
  architecture: string[];
  latency: string;
  costModel: string;
}

export default function HeroCommandInterface() {
  const scenarios: BuildScenario[] = [
    {
      id: "ai-support",
      name: "AI Customer Support Platform",
      query: "AI customer support & ticket triage platform",
      requirements: ["Private LLM Agent", "Omnichannel Webhooks", "Zero-Leak Vector DB", "Human Escalation Engine", "Real-Time Telemetry"],
      architecture: ["React Client", "FastAPI Gateway", "pgvector RAG", "PostgreSQL Replicas"],
      latency: "1.2s avg response",
      costModel: "Zero per-seat licensing"
    },
    {
      id: "b2b-saas",
      name: "Multi-Tenant Enterprise SaaS",
      query: "High-scale B2B SaaS with role-based auth & billing",
      requirements: ["Next.js App Router", "Stripe Subscriptions", "Multi-Tenant RBAC", "Audit Log Pipeline", "Custom Subdomains"],
      architecture: ["Next.js Edge", "Node / Go Microservices", "PostgreSQL + Prisma", "Redis Cluster"],
      latency: "< 35ms edge render",
      costModel: "Elastic auto-scaling"
    },
    {
      id: "automation-hub",
      name: "Logistics Automation Engine",
      query: "Real-time dispatch, warehouse sync & invoice OCR",
      requirements: ["Computer Vision OCR", "WhatsApp Business API", "ERP Two-Way Sync", "Driver Geofencing", "Dead-Stock Alerting"],
      architecture: ["Mobile PWA", "Event-Driven Worker", "Vision Pipeline", "Kafka Queue"],
      latency: "Sub-second event dispatch",
      costModel: "85% manual hours saved"
    }
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const current = scenarios[activeScenarioIdx];

  const handleSelectScenario = (idx: number) => {
    if (idx === activeScenarioIdx) return;
    setAnalyzing(true);
    setTimeout(() => {
      setActiveScenarioIdx(idx);
      setAnalyzing(false);
    }, 350);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-[#090D1A]/90 border border-white/15 backdrop-blur-2xl shadow-2xl shadow-blue-950/50 overflow-hidden text-left font-mono">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-[#070A14]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            NEXORA SYSTEM :: ARCHITECTURAL SYNTHESIZER
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-bold">READY</span>
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Scenario Switcher Tabs */}
        <div>
          <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
            Select what you want to build:
          </span>
          <div className="flex flex-wrap gap-2">
            {scenarios.map((sc, i) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => handleSelectScenario(i)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs transition-all font-sans font-medium flex items-center gap-1.5",
                  activeScenarioIdx === i
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-[#11172A] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-[#161F36]"
                )}
              >
                <span>{sc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Input prompt query */}
        <div className="p-3.5 rounded-xl bg-[#060810] border border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-cyan-400 font-bold">&gt;</span>
            <span className="text-xs sm:text-sm text-slate-200">
              {current.query}
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-blue-400 shrink-0 font-bold ml-2">
            {analyzing ? "ANALYZING..." : "COMPILED"}
          </span>
        </div>

        {/* Analyzed Requirements & Estimated Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          {/* Left: Requirements Checklist */}
          <div className="p-4 rounded-xl bg-[#0E1324] border border-white/[0.06] space-y-2.5">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold block">
              ANALYZED REQUIREMENTS
            </span>
            <div className="space-y-1.5">
              {current.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Estimated Architecture Pipeline */}
          <div className="p-4 rounded-xl bg-[#0E1324] border border-blue-500/25 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold block mb-2">
                ESTIMATED ARCHITECTURE FLOW
              </span>
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-white">
                {current.architecture.map((arch, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2 py-1 rounded bg-[#161F38] border border-white/10 text-[11px] font-bold">
                      {arch}
                    </span>
                    {idx < current.architecture.length - 1 && (
                      <span className="text-blue-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
              <span>Performance: <strong className="text-emerald-400">{current.latency}</strong></span>
              <span>Model: <strong className="text-cyan-300">{current.costModel}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Link to Contact with pre-selected query */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 font-sans">
            Ready to architect a solution tailored to your operational constraints?
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold font-sans transition-colors"
          >
            <span>Review Full Architecture Specification</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
