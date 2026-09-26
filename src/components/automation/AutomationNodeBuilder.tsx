"use client";

import React, { useState } from "react";
import { 
  Zap, 
  Layers, 
  Cpu, 
  MessageSquare, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AutomationNode {
  id: string;
  step: string;
  name: string;
  category: string;
  icon: React.ElementType;
  payload: string;
  latency: string;
  detail: string;
}

export default function AutomationNodeBuilder() {
  const [activeNodeId, setActiveNodeId] = useState<string>("node-1");

  const nodes: AutomationNode[] = [
    {
      id: "node-1",
      step: "01",
      name: "NEW LEAD",
      category: "Inbound Hook",
      icon: Zap,
      payload: "{ source: 'web_form', budget: '₹15L-40L', urgency: 'high' }",
      latency: "T + 0.0s",
      detail: "Visitor submits project scope form. Webhook validates format and fires event."
    },
    {
      id: "node-2",
      step: "02",
      name: "CRM ENRICH",
      category: "Data Pipeline",
      icon: Layers,
      payload: "{ org: 'Apex Health', domain: 'apexhealth.in', employees: 85 }",
      latency: "T + 0.3s",
      detail: "Enriches domain data, verifies company registry, and logs contact record."
    },
    {
      id: "node-3",
      step: "03",
      name: "AI INTENT SCORE",
      category: "Cognitive Eval",
      icon: Cpu,
      payload: "{ score: 94, category: 'Enterprise HealthTech', priority: 'P1' }",
      latency: "T + 0.7s",
      detail: "Private LLM evaluates project scope, estimates complexity, and scores intent."
    },
    {
      id: "node-4",
      step: "04",
      name: "WHATSAPP DISPATCH",
      category: "Omnichannel API",
      icon: MessageSquare,
      payload: "{ template: 'welcome_deck', channel: 'whatsapp_cloud_api' }",
      latency: "T + 1.1s",
      detail: "Sends executive architecture brief & portfolio deck directly to client's WhatsApp."
    },
    {
      id: "node-5",
      step: "05",
      name: "FOLLOW-UP CADENCE",
      category: "Calendar Engine",
      icon: Calendar,
      payload: "{ checkpoint: '48h_reminder', assignedAE: 'Siddharth M.' }",
      latency: "T + 1.4s",
      detail: "Places a 48h checkpoint in account executive calendar. Triggers auto-nudge if needed."
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <section id="automation" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NODE-BASED WORKFLOW ENGINE</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Turn repetitive work into intelligent workflows.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A visual, node-based automation architecture. Click or hover any node to inspect execution payloads and real-time event telemetry.
          </p>
        </div>

        {/* Node Graph Display */}
        <div className="rounded-3xl bg-[#090D1A] border border-white/10 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 font-bold">
                PIPELINE STATUS: EXECUTING IN 1.4s
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Zero Human Friction
            </span>
          </div>

          {/* Node Flow (Desktop Horizontal / Mobile Stacked) */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeNodeId === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  className={cn(
                    "cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group relative",
                    isSelected
                      ? "bg-[#141C34] border-indigo-400 shadow-xl shadow-indigo-500/20 ring-2 ring-indigo-500/30 scale-105 z-10"
                      : "bg-[#0B0F1E] border-white/[0.07] hover:border-white/20"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
                          isSelected
                            ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40"
                            : "bg-[#141B30] text-slate-400 group-hover:text-white"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {node.latency}
                      </span>
                    </div>

                    <span className="text-[9px] font-mono uppercase text-indigo-400 font-bold block mb-1">
                      STAGE {node.step}
                    </span>
                    <h4 className="text-sm font-bold text-white tracking-tight font-mono">
                      {node.name}
                    </h4>
                    <p className="mt-1 text-[11px] text-slate-400">
                      {node.category}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail & Telemetry Console */}
          <div className="p-5 rounded-2xl bg-[#060810] border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold">
                  Selected Node: {currentNode.name}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-slate-400">{currentNode.latency}</span>
              </div>
              <p className="text-sm text-slate-200">
                {currentNode.detail}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0E1324] border border-white/[0.06] font-mono text-xs text-emerald-400 overflow-x-auto">
              <span className="text-[10px] text-slate-400 block mb-1">Live JSON Packet Payload:</span>
              <pre>{currentNode.payload}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
