"use client";

import React, { useState } from "react";
import { 
  Users, 
  Layers, 
  ShoppingCart, 
  GraduationCap, 
  HeartPulse, 
  Calendar, 
  Cpu, 
  CloudLightning,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  DollarSign,
  TrendingUp,
  FileText,
  Clock,
  Send
} from "lucide-react";
import { solutionsData, SolutionItem } from "@/data/solutions";
import { cn } from "@/lib/utils";

export default function SolutionsSection() {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>("crm-sales");

  const currentSolution = solutionsData.find((s) => s.id === selectedSolutionId) || solutionsData[0];

  const renderUIPreview = (type: string) => {
    switch (type) {
      case "crm":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Pipeline: Enterprise Q3</span>
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-mono">
                  14 Deals Active
                </span>
              </div>
              <span className="text-emerald-400 font-mono font-semibold">Total: ₹84,50,000</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {/* Column 1 */}
              <div className="bg-[#0F1424] p-3 rounded-lg border border-white/[0.06] space-y-2">
                <div className="flex justify-between items-center text-[11px] font-medium text-slate-400">
                  <span>Qualified</span>
                  <span className="text-slate-500">4</span>
                </div>
                <div className="p-2.5 rounded bg-[#161F33] border border-white/[0.06] space-y-1">
                  <div className="flex justify-between text-white font-semibold text-[11px]">
                    <span>Vertex Logistics</span>
                    <span className="text-blue-400">₹12.5L</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Auto follow-up scheduled</p>
                  <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-3/4" />
                  </div>
                </div>
                <div className="p-2.5 rounded bg-[#161F33] border border-white/[0.06] space-y-1">
                  <div className="flex justify-between text-white font-semibold text-[11px]">
                    <span>Apex Health</span>
                    <span className="text-blue-400">₹8.0L</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Inbound via landing page</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-[#0F1424] p-3 rounded-lg border border-white/[0.06] space-y-2">
                <div className="flex justify-between items-center text-[11px] font-medium text-slate-400">
                  <span>Proposal Sent</span>
                  <span className="text-slate-500">2</span>
                </div>
                <div className="p-2.5 rounded bg-[#161F33] border border-indigo-500/30 space-y-1">
                  <div className="flex justify-between text-white font-semibold text-[11px]">
                    <span>Nexus Retail</span>
                    <span className="text-indigo-400">₹24.0L</span>
                  </div>
                  <p className="text-[10px] text-indigo-300">Contract viewed 4x</p>
                  <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-5/6" />
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="bg-[#0F1424] p-3 rounded-lg border border-white/[0.06] space-y-2">
                <div className="flex justify-between items-center text-[11px] font-medium text-slate-400">
                  <span>Closed Won</span>
                  <span className="text-emerald-500">8</span>
                </div>
                <div className="p-2.5 rounded bg-[#13222E] border border-emerald-500/30 space-y-1">
                  <div className="flex justify-between text-white font-semibold text-[11px]">
                    <span>Starlight Edu</span>
                    <span className="text-emerald-400">₹40.0L</span>
                  </div>
                  <p className="text-[10px] text-emerald-300 font-mono">Invoice #1042 Paid</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "bms":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <p className="font-bold text-white text-sm">Enterprise Operations Hub</p>
                <p className="text-[10px] text-slate-400 font-mono">Live ERP Sync Active</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-300 text-[10px] border border-blue-500/20">3 Warehouses</span>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 text-[10px] border border-emerald-500/20">GST Auto-Filed</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div className="p-2.5 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Monthly Net P&L</p>
                <p className="text-sm font-bold text-emerald-400 mt-0.5">+₹18.4L</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Active Stock Units</p>
                <p className="text-sm font-bold text-white mt-0.5">14,290</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Pending Invoices</p>
                <p className="text-sm font-bold text-amber-400 mt-0.5">3 (₹1.8L)</p>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Staff Present</p>
                <p className="text-sm font-bold text-blue-400 mt-0.5">38 / 40</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-[#0E1527] border border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] text-slate-300">Automated ledger reconciliation executed at 06:00 AM UTC</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">0 Errors</span>
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Storefront Performance & Checkout</span>
              <span className="text-xs font-mono text-cyan-400">Cart Conversion: 4.8%</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Sub-second Speed</p>
                <p className="text-base font-extrabold text-white mt-1">420ms</p>
                <p className="text-[10px] text-emerald-400">Edge SSR hydrated</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Abandoned Recoveries</p>
                <p className="text-base font-extrabold text-indigo-400 mt-1">68.2%</p>
                <p className="text-[10px] text-slate-400">via WhatsApp webhook</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Inventory Sync</p>
                <p className="text-base font-extrabold text-cyan-400 mt-1">Real-time</p>
                <p className="text-[10px] text-slate-400">Shopify + Custom POS</p>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Unified Campus Portal (1,240 Enrolled)</span>
              <span className="text-xs font-mono text-emerald-400">Fee Collection: 94.2%</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded bg-[#0F1424] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Mid-term Examination Schedules</p>
                  <p className="text-[10px] text-slate-400">Automated SMS dispatches sent to 860 parents</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Delivered</span>
              </div>
              <div className="p-2.5 rounded bg-[#0F1424] border border-white/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">LMS Video Lectures & Quizzes</p>
                  <p className="text-[10px] text-slate-400">Adaptive learning analytics tracking completion rates</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">Active</span>
              </div>
            </div>
          </div>
        );

      case "healthcare":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Clinical Workflow & Patient EHR</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">HIPAA Compliant</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Today&apos;s Appointments</p>
                <p className="text-base font-bold text-white mt-0.5">34 Consultations</p>
                <p className="text-[10px] text-emerald-400">0 No-shows (Automated SMS)</p>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Diagnostic Reports</p>
                <p className="text-base font-bold text-white mt-0.5">28 Dispatched</p>
                <p className="text-[10px] text-blue-400">Encrypted portal delivery</p>
              </div>
            </div>
          </div>
        );

      case "booking":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Service Scheduling & Deposit Gateway</span>
              <span className="text-xs font-mono text-emerald-400">Deposit Rate: 100%</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0F1424] border border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Auto-synced across Google & Outlook</p>
                <p className="text-[10px] text-slate-400">Dynamic buffer times prevent staff scheduling overlap</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                Payment Held
              </span>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Enterprise RAG Knowledge Copilot</span>
              <span className="text-xs font-mono text-cyan-400">Zero Data Leak Policy</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0F1424] border border-cyan-500/30 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Query: &quot;What are our top 3 operational liabilities this quarter?&quot;</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Synthesized 42 internal PDF agreements and warehouse audits: 1. Delayed vendor shipment clause (Sec 4.2), 2. Expiring server licenses in Nov, 3. Unclaimed freight credits.
              </p>
            </div>
          </div>
        );

      case "saas":
      default:
        return (
          <div className="p-4 sm:p-6 bg-[#080C17] rounded-xl border border-white/[0.08] text-xs font-sans space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="font-bold text-white text-sm">Multi-Tenant SaaS Architecture</span>
              <span className="text-xs font-mono text-violet-400">MRR: ₹14.8L</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Tenants</p>
                <p className="text-sm font-bold text-white">128 Orgs</p>
              </div>
              <div className="p-2.5 rounded bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Churn</p>
                <p className="text-sm font-bold text-emerald-400">0.8%</p>
              </div>
              <div className="p-2.5 rounded bg-[#0F1424] border border-white/[0.06]">
                <p className="text-[10px] text-slate-400">Stripe Billing</p>
                <p className="text-sm font-bold text-blue-400">Automated</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="solutions" className="relative py-24 md:py-32 bg-[#080B14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE CAN BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From an idea to a working product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We build technology around your business—not the other way around.
          </p>
        </div>

        {/* Interactive Solutions Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector Tabs (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {solutionsData.map((sol) => {
              const isSelected = selectedSolutionId === sol.id;
              return (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => setSelectedSolutionId(sol.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                    isSelected
                      ? "bg-[#11172A] border-blue-500/50 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30"
                      : "bg-[#0B0F1D]/80 border-white/[0.06] hover:bg-[#0E1527] hover:border-white/[0.12]"
                  )}
                >
                  <div className="pr-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                        {sol.category}
                      </span>
                    </div>
                    <p className={cn("text-base font-bold", isSelected ? "text-white" : "text-slate-200 group-hover:text-white")}>
                      {sol.title}
                    </p>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {sol.description}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 shrink-0 transition-transform",
                      isSelected ? "text-blue-400 translate-x-1" : "text-slate-500 group-hover:text-slate-300"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Solution Deep-Dive Preview (Right: 7 cols) */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0C1122] border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    {currentSolution.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {currentSolution.title}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                  Production-Ready Blueprint
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentSolution.description}
              </p>

              {/* Dynamic UI Preview Frame */}
              <div className="mt-6">
                <p className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
                  Interactive Interface Preview
                </p>
                {renderUIPreview(currentSolution.previewType)}
              </div>

              {/* Features List */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                  Core Architectural Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSolution.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Impact & CTA */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-300">
                  <span className="text-blue-400 font-semibold">Impact: </span>
                  {currentSolution.metrics}
                </p>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold tracking-wide transition-colors shrink-0"
                >
                  <span>Build This Solution</span>
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
