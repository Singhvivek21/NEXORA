"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Send,
  Database,
  Lock,
  BarChart,
  Bot
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function AiAssistantDemoPage() {
  const project = capabilityProjects.find((p) => p.slug === "ai-business-assistant")!;
  const [messages, setMessages] = useState([
    {
      sender: "user",
      text: "Which product generated the highest revenue this month?"
    },
    {
      sender: "ai",
      text: "Product A generated ₹4.82L in revenue, accounting for 19.6% of total sales. Sales grew 14.2% compared to last month following the revised tiered pricing strategy.",
      citations: ["Table: orders_2026_09", "Schema: stripe_reconciliation_v2"]
    }
  ]);

  const [inputVal, setInputVal] = useState("");

  const handleQuery = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text },
      {
        sender: "ai",
        text: `Analysis complete for: "${text}". Identified 3 significant correlation patterns across operational datasets. Verified zero leakage per enterprise role policies.`,
        citations: ["Warehouse: snowflake_prod.analytics", "Cache: redis_fast_rag"]
      }
    ]);
  };

  return (
    <div className="min-h-screen bg-[#06080F] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Capabilities</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-mono text-cyan-400 uppercase">Capability Showcase</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE CAPABILITY DEMONSTRATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base sm:text-lg text-slate-300">
              {project.tagline}
            </p>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wider transition-all shadow-lg shadow-blue-600/30 shrink-0"
          >
            <span>Request a Solution Like This</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {project.highlights.map((h, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#0B0F1D] border border-white/[0.08]">
              <p className="text-2xl font-bold text-white">{h.value}</p>
              <p className="text-xs font-semibold text-cyan-400 mt-0.5">{h.label}</p>
              <p className="text-[11px] text-slate-400 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive Application Simulator */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-white">Enterprise RAG Query Terminal</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>Zero Data-Retention Engine</span>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="py-6 space-y-4 max-h-[380px] overflow-y-auto">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-4 rounded-2xl max-w-xl text-sm ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-[#141B30] text-slate-200 border border-white/[0.08] rounded-tl-none space-y-2"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.citations && (
                    <div className="pt-2 border-t border-white/[0.08] flex flex-wrap gap-1 text-[10px] font-mono text-cyan-300">
                      <span>Citations: </span>
                      {m.citations.map((c, i) => (
                        <span key={i} className="bg-black/30 px-1.5 py-0.5 rounded text-slate-300">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}
          <div className="pt-4 border-t border-white/[0.08] space-y-2">
            <span className="text-xs font-mono text-slate-400">Sample leadership inquiries:</span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleQuery("Calculate customer churn rate for Q2 vs Q3")}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#141B30] hover:bg-blue-600/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                &quot;Calculate customer churn rate for Q2 vs Q3&quot;
              </button>
              <button
                type="button"
                onClick={() => handleQuery("Summarize contract risk clauses in pending vendor agreements")}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#141B30] hover:bg-blue-600/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                &quot;Summarize contract risk clauses in pending vendor agreements&quot;
              </button>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Architecture Blueprint</h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#141B30] border border-white/[0.08] text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
