"use client";

import React from "react";
import { 
  ArrowRight, 
  XCircle, 
  CheckCircle2, 
  Sparkles, 
  AlertTriangle, 
  Zap, 
  Layers,
  ArrowRightLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function TransformationSection() {
  const beforeItems = [
    { name: "Scattered Excel Sheets", problem: "Version conflicts, missing rows, zero audit trails" },
    { name: "WhatsApp Conversations", problem: "Lost client context, unassigned leads, zero accountability" },
    { name: "Unorganized Email Chains", problem: "Silos between departments, buried attachments" },
    { name: "Paper & Manual Forms", problem: "Slow turnaround, illegible handwriting, duplicate typing" },
    { name: "End-of-Month Manual Reports", problem: "Outdated insights by the time reports reach management" },
    { name: "Disconnected SaaS Systems", problem: "Paying 10 different subscriptions that never talk to each other" }
  ];

  const afterItems = [
    { name: "Unified Custom CRM", solution: "Instant lead capture, pipeline stages, automated scoring" },
    { name: "Automated Workflows", solution: "Trigger-based alerts, seamless client follow-ups" },
    { name: "Centralized Single Source of Truth", solution: "All departments operate off the exact same verified data" },
    { name: "Embedded AI Assistance", solution: "Query proprietary files and company metrics in plain English" },
    { name: "Real-time Executive Dashboards", solution: "Live revenue, unit economics, and operational pulse" },
    { name: "Fully Integrated Tech Ecosystem", solution: "APIs, webhooks, and cloud pipelines syncing continuously" }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The difference between chaos and clarity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We replace fragile manual workarounds with resilient, integrated digital architecture.
          </p>
        </div>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
          {/* Left Column: Before Nexora (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#100C12]/80 border border-rose-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-rose-500/15">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-rose-400">
                    The Pain Point
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    Before Nexora
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-400">
                Fragmented tools, manual copy-pasting, and disconnected communication that drain staff hours.
              </p>

              {/* Items List */}
              <div className="mt-6 space-y-3">
                {beforeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-rose-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span className="text-sm font-semibold text-slate-200">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 pl-6">
                      {item.problem}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-500/15 text-xs text-rose-300 font-mono flex items-center justify-between">
              <span>Status: Operational Friction</span>
              <span>High Churn Risk</span>
            </div>
          </div>

          {/* Center Column: Digital Transformation Badge (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="relative group flex lg:flex-col items-center justify-center gap-3">
              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-rose-500/30 to-blue-500/50" />
              <div className="p-3 sm:p-4 rounded-2xl bg-[#0F1629] border border-blue-500/40 shadow-xl shadow-blue-500/20 text-center flex flex-col items-center justify-center">
                <Zap className="w-5 h-5 text-blue-400 animate-pulse mb-1" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300 font-extrabold writing-mode-vertical lg:writing-mode-horizontal">
                  DIGITAL TRANSFORMATION
                </span>
              </div>
              <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-blue-500/50 to-emerald-500/30" />
            </div>
          </div>

          {/* Right Column: With Nexora (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[#091322]/80 border border-emerald-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-emerald-500/15">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400">
                    The Solution
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    With Nexora
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300">
                A purpose-built digital ecosystem engineered specifically around how your company actually operates.
              </p>

              {/* Items List */}
              <div className="mt-6 space-y-3">
                {afterItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 pl-6">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-500/15 text-xs text-emerald-300 font-mono flex items-center justify-between">
              <span>Status: Autonomous Scaling</span>
              <span>Predictable Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
