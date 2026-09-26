"use client";

import React, { useState } from "react";
import { 
  Bot, 
  Sparkles, 
  Send, 
  BarChart, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PromptScenario {
  prompt: string;
  response: string;
  chartType: "revenue" | "leads" | "weekly" | "sales";
  metricLabel: string;
  metricValue: string;
  statBadge: string;
}

export default function AiAssistantExperience() {
  const scenarios: PromptScenario[] = [
    {
      prompt: "Show this month's revenue.",
      response: "Revenue increased 18.4% compared with last month, totaling ₹48.25L across all active customer accounts. High-tier SaaS subscriptions contributed 62% of net expansion.",
      chartType: "revenue",
      metricLabel: "Net Expansion",
      metricValue: "+₹7.45L",
      statBadge: "Verified by PostgreSQL Ledger"
    },
    {
      prompt: "Which leads need follow-up?",
      response: "Identified 4 enterprise leads with proposals viewed in the last 48 hours without a confirmed response: Apex Health (₹12L), Starlight Edu (₹8L), Vertex Logistics (₹24L), and Horizon Retail (₹15L). Automated draft emails queued.",
      chartType: "leads",
      metricLabel: "Pending Pipeline Value",
      metricValue: "₹59.0L",
      statBadge: "CRM Health Audit"
    },
    {
      prompt: "What changed this week?",
      response: "Three operational changes logged: 1. Warehouse B API latency normalized from 180ms to 24ms. 2. Two new enterprise contracts executed. 3. Zero failed background webhook retries.",
      chartType: "weekly",
      metricLabel: "System Stability",
      metricValue: "99.98%",
      statBadge: "CloudWatch Telemetry"
    },
    {
      prompt: "Summarize sales performance.",
      response: "Sales velocity improved by 3.2 days. Average deal size rose from ₹8.5L to ₹11.2L following the introduction of multi-year enterprise SLA tiers.",
      chartType: "sales",
      metricLabel: "Avg Deal Size",
      metricValue: "₹11.2L",
      statBadge: "Revenue Ops Validated"
    }
  ];

  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const activeScenario = scenarios[activeScenarioIdx];

  const handleSelectPrompt = (idx: number) => {
    if (idx === activeScenarioIdx) return;
    setIsTyping(true);
    setTimeout(() => {
      setActiveScenarioIdx(idx);
      setIsTyping(false);
    }, 450);
  };

  return (
    <section id="ai-assistant-deep" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DOMAIN-SPECIFIC INTELLIGENCE</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Put intelligence inside your workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A conversational interface over your proprietary company data, ledgers, and inventory. Click any leadership prompt below to test real-time synthesis.
          </p>
        </div>

        {/* Interactive Chat Console Workspace */}
        <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* Header of the AI Terminal */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Nexora Enterprise Copilot
                </h3>
                <p className="text-[10px] font-mono text-slate-400">
                  Model: Sandboxed Domain RAG // Zero Data Leak Policy
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ACID Verified Telemetry</span>
            </div>
          </div>

          {/* Interactive Prompt Buttons */}
          <div className="py-5 border-b border-white/[0.06] space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
              Select Executive Inquiries:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {scenarios.map((sc, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSelectPrompt(i)}
                  className={cn(
                    "p-3 rounded-xl text-left border text-xs font-medium transition-all",
                    activeScenarioIdx === i
                      ? "bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30"
                      : "bg-[#0E1324] text-slate-300 border-white/[0.06] hover:bg-[#141B30] hover:text-white"
                  )}
                >
                  &quot;{sc.prompt}&quot;
                </button>
              ))}
            </div>
          </div>

          {/* Response & Visualization Area */}
          <div className="pt-6 space-y-6">
            {/* User message */}
            <div className="flex justify-end">
              <div className="px-4 py-3 rounded-2xl bg-blue-600 text-white text-xs sm:text-sm max-w-md shadow-md rounded-tr-none">
                {activeScenario.prompt}
              </div>
            </div>

            {/* AI synthesized response */}
            <div className="flex justify-start">
              <div className="p-5 rounded-2xl bg-[#0F1528] border border-white/10 text-xs sm:text-sm text-slate-200 max-w-2xl space-y-4 rounded-tl-none shadow-xl">
                {isTyping ? (
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Synthesizing operational warehouse data...</span>
                  </div>
                ) : (
                  <>
                    <p className="leading-relaxed">{activeScenario.response}</p>

                    {/* Dynamic Data Visualization embedded directly into the response */}
                    <div className="p-4 rounded-xl bg-[#080B14] border border-white/[0.08] space-y-3 font-mono">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{activeScenario.metricLabel}:</span>
                        <span className="text-lg font-bold text-emerald-400">{activeScenario.metricValue}</span>
                      </div>

                      {/* Visual representation depending on query */}
                      {activeScenario.chartType === "revenue" && (
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] text-slate-400">
                            <span>Last Month: ₹40.8L</span>
                            <span>This Month: ₹48.25L (+18.4%)</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 w-full animate-in slide-in-from-left duration-500" />
                          </div>
                        </div>
                      )}

                      {activeScenario.chartType === "leads" && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px]">
                          <span className="p-1.5 bg-[#121930] rounded text-center">Apex Health (₹12L)</span>
                          <span className="p-1.5 bg-[#121930] rounded text-center">Starlight Edu (₹8L)</span>
                          <span className="p-1.5 bg-[#121930] rounded text-center">Vertex Log (₹24L)</span>
                          <span className="p-1.5 bg-[#121930] rounded text-center">Horizon Ret (₹15L)</span>
                        </div>
                      )}

                      {activeScenario.chartType === "weekly" && (
                        <div className="flex items-center justify-between text-[10px] text-emerald-300">
                          <span>0 Downtime Incidents</span>
                          <span>24ms Normalized Latency</span>
                        </div>
                      )}

                      {activeScenario.chartType === "sales" && (
                        <div className="flex justify-between text-[10px] text-blue-300">
                          <span>Sales Cycle: 14.2 Days (-3.2d)</span>
                          <span>Deal Size: +31.7%</span>
                        </div>
                      )}

                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-slate-500">
                        <span>Source: {activeScenario.statBadge}</span>
                        <span>Confidence: 99.8%</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
