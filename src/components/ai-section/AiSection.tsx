"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Sparkles, 
  FileText, 
  MessageSquare, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Send,
  AlertCircle,
  FileCheck,
  UserCheck,
  BellRing,
  Bot
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AiSection() {
  const [activeTab, setActiveTab] = useState<"assistant" | "document" | "support" | "workflow">("assistant");

  // Mock chat state for AI Assistant
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "user",
      text: "Which product generated the highest revenue this month?"
    },
    {
      sender: "ai",
      text: "Product A generated ₹4.82L in revenue, accounting for 19.6% of total sales (up 14.2% from last month). Would you like to view the top 3 margin drivers as well?",
      metric: { label: "Revenue Share", value: "19.6%", total: "₹4.82L" }
    }
  ]);
  const [customInput, setCustomInput] = useState("");

  const sampleQueries = [
    "Compare Q3 revenue vs Q2 target",
    "Identify customers with overdue invoices > 30 days",
    "Which regional warehouse has highest dead inventory?"
  ];

  const handleSendSample = (query: string) => {
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: query },
      { 
        sender: "ai", 
        text: `Synthesized operational database for: "${query}". Found 2 key anomalies and generated actionable report with audited source tables.`,
        metric: { label: "Confidence", value: "99.8%", total: "Verified" }
      }
    ]);
  };

  return (
    <section id="ai-automation" className="relative py-24 md:py-32 bg-[#06080F]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRACTICAL ENTERPRISE AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI that works inside your business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t just add chatbots. We integrate AI into real business workflows.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#0F1424] border border-white/[0.08] max-w-2xl mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("assistant")}
            className={cn(
              "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
              activeTab === "assistant"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <Bot className="w-4 h-4" />
            <span>AI Assistant</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("document")}
            className={cn(
              "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
              activeTab === "document"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <FileText className="w-4 h-4" />
            <span>Document AI</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("support")}
            className={cn(
              "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
              activeTab === "support"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Customer Support</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("workflow")}
            className={cn(
              "flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2",
              activeTab === "workflow"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
            )}
          >
            <Workflow className="w-4 h-4" />
            <span>Workflow Agent</span>
          </button>
        </div>

        {/* Demo 1: AI Business Assistant */}
        {activeTab === "assistant" && (
          <div className="rounded-2xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">Natural-Language Data Agent</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Enterprise BI Assistant</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Connected to ERP & CRM Databases</span>
              </div>
            </div>

            {/* Chat Box */}
            <div className="mt-6 space-y-4 max-h-96 overflow-y-auto pr-2">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex flex-col max-w-xl text-sm leading-relaxed",
                    msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-4 rounded-2xl",
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-[#141B2D] text-slate-200 border border-white/[0.08] rounded-tl-none space-y-3"
                    )}
                  >
                    <p>{msg.text}</p>
                    {msg.metric && (
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300">
                        <span>{msg.metric.label}: <strong>{msg.metric.value}</strong></span>
                        <span className="text-emerald-400 font-bold">{msg.metric.total}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 px-1">
                    {msg.sender === "user" ? "Leadership Query" : "Verified by AI RAG"}
                  </span>
                </div>
              ))}
            </div>

            {/* Sample Queries */}
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <p className="text-xs text-slate-400 font-mono mb-2">Click to test instant queries:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendSample(q)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#141B30] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-400/30 text-slate-300 hover:text-white transition-all text-left"
                  >
                    &quot;{q}&quot;
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Demo 2: AI Document Intelligence */}
        {activeTab === "document" && (
          <div className="rounded-2xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">Automated Pipeline</span>
                <h3 className="text-xl font-bold text-white mt-0.5">AI Document Intelligence</h3>
              </div>
              <span className="text-xs font-mono text-blue-400">99.1% Field Accuracy</span>
            </div>

            {/* Pipeline Step Sequence: PDF uploaded ↓ AI extraction ↓ Structured information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stage 1 */}
              <div className="p-5 rounded-xl bg-[#0F1424] border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400">Stage 01</span>
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">PDF Uploaded</h4>
                  <p className="text-xs text-slate-400 mt-1">Multi-page vendor invoice / bill of lading.</p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-[#151D33] border border-white/[0.06] font-mono text-[11px] text-slate-300">
                  <p className="text-blue-300 font-semibold">Vendor_Invoice_8492.pdf</p>
                  <p className="text-[10px] text-slate-400">4.2 MB • Scanned Document</p>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="p-5 rounded-xl bg-[#0F1424] border border-cyan-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400">Stage 02</span>
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">AI Extraction</h4>
                  <p className="text-xs text-slate-400 mt-1">OCR table parsing + entity extraction.</p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-[#151D33] border border-cyan-500/20 font-mono text-[11px] text-cyan-300 space-y-1">
                  <p className="flex justify-between">
                    <span>Parsing line items:</span>
                    <span className="text-emerald-400">Done (12/12)</span>
                  </p>
                  <p className="flex justify-between">
                    <span>GSTIN Tax Validation:</span>
                    <span className="text-emerald-400">Valid</span>
                  </p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="p-5 rounded-xl bg-[#0F1424] border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400">Stage 03</span>
                    <FileCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">Structured Information</h4>
                  <p className="text-xs text-slate-400 mt-1">Directly injected into ERP database.</p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-[#102027] border border-emerald-500/20 font-mono text-[10px] text-emerald-300 space-y-0.5">
                  <p>vendor: &quot;Apex Heavy Goods&quot;</p>
                  <p>totalAmount: 384500</p>
                  <p>taxDue: 69210</p>
                  <p>status: &quot;AUTO_APPROVED&quot;</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Demo 3: AI Customer Support */}
        {activeTab === "support" && (
          <div className="rounded-2xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">Intelligent Triage</span>
                <h3 className="text-xl font-bold text-white mt-0.5">AI Support & Escalation</h3>
              </div>
              <span className="text-xs font-mono text-indigo-400">Human-in-the-Loop Safeguards</span>
            </div>

            {/* Sequence: Customer question ↓ AI response ↓ Human escalation */}
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-xl bg-[#0F1424] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-white">1. Customer Question</span>
                  <span className="text-[10px] font-mono text-slate-400">WhatsApp Inbound</span>
                </div>
                <p className="text-sm text-slate-300">&quot;My shipment #NX-4912 has been stuck in transit for 4 days. Can I get an emergency replacement or refund?&quot;</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141B30] border border-blue-500/30">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-blue-300">2. AI Copilot Response</span>
                  <span className="text-[10px] font-mono text-blue-400">Sentiment: High Priority (Frustrated)</span>
                </div>
                <p className="text-sm text-slate-200">&quot;I apologize for the delay, Rahul. I verified tracking #NX-4912—it is currently held at Mumbai Central Hub due to weather clearance. Since this exceeds our 48-hour delivery guarantee, I have prepared a replacement order voucher and forwarded this directly to our dispatch supervisor.&quot;</p>
              </div>

              <div className="p-4 rounded-xl bg-[#191924] border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">3. Human Escalation Triggered</p>
                    <p className="text-[11px] text-slate-400">Senior agent Priya assigned with full context summary + one-click refund authorization.</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 px-2 py-1 rounded">
                  Escalated in 8s
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Demo 4: AI Workflow Automation */}
        {activeTab === "workflow" && (
          <div className="rounded-2xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-3">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400">Autonomous Orchestration</span>
                <h3 className="text-xl font-bold text-white mt-0.5">AI Workflow Automation</h3>
              </div>
              <span className="text-xs font-mono text-emerald-400">Zero Manual Friction</span>
            </div>

            {/* Sequence: Trigger ↓ AI processing ↓ Action ↓ Notification */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#0F1424] border border-white/[0.08]">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-mono text-xs font-bold mb-2">
                  01
                </div>
                <p className="text-xs font-mono text-blue-400 uppercase">Trigger</p>
                <h4 className="text-sm font-bold text-white mt-1">High-Value Lead Form</h4>
                <p className="text-xs text-slate-400 mt-1">Visitor requests custom enterprise ERP quotation.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1424] border border-cyan-500/30">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold mb-2">
                  02
                </div>
                <p className="text-xs font-mono text-cyan-400 uppercase">AI Processing</p>
                <h4 className="text-sm font-bold text-white mt-1">Intent & Budget Scorer</h4>
                <p className="text-xs text-slate-400 mt-1">Enriches company domain, predicts deal probability.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1424] border border-indigo-500/30">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold mb-2">
                  03
                </div>
                <p className="text-xs font-mono text-indigo-400 uppercase">Action</p>
                <h4 className="text-sm font-bold text-white mt-1">Calendar & CRM Routing</h4>
                <p className="text-xs text-slate-400 mt-1">Creates deal card, assigns AE, reserves slot in calendar.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0F1424] border border-emerald-500/30">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono text-xs font-bold mb-2">
                  04
                </div>
                <p className="text-xs font-mono text-emerald-400 uppercase">Notification</p>
                <h4 className="text-sm font-bold text-white mt-1">Instant Alert Dispatch</h4>
                <p className="text-xs text-slate-400 mt-1">Pushes meeting briefing to Slack & WhatsApp in under 3 seconds.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
