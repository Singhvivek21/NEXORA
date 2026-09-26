"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Package, 
  DollarSign, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  Clock
} from "lucide-react";
import { capabilityProjects } from "@/data/projects";

export default function BusinessOSDemoPage() {
  const project = capabilityProjects.find((p) => p.slug === "business-os")!;
  const [activeTab, setActiveTab] = useState<"overview" | "crm" | "inventory" | "ledger">("overview");

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
          <span className="text-xs font-mono text-blue-400 uppercase">Capability Showcase</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
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
              <p className="text-xs font-semibold text-blue-400 mt-0.5">{h.label}</p>
              <p className="text-[11px] text-slate-400 mt-1">{h.sub}</p>
            </div>
          ))}
        </div>

        {/* Interactive Application Simulator */}
        <div className="rounded-3xl bg-[#0B0F1D] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {/* Simulator Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                app.business-os.nexora.internal // LIVE PREVIEW
              </span>
            </div>

            {/* Tab navigation */}
            <div className="flex gap-1.5 p-1 rounded-xl bg-[#141B30] border border-white/[0.08] text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "overview" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Executive Pulse
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("crm")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "crm" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Pipeline Kanban
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("inventory")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === "inventory" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                Inventory Sync
              </button>
            </div>
          </div>

          {/* Simulator Content */}
          <div className="mt-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                    <span className="text-xs text-slate-400">Gross Monthly Revenue</span>
                    <p className="text-xl font-bold text-white mt-1">₹48,25,000</p>
                    <span className="text-[10px] text-emerald-400 font-mono">+18.4% vs last month</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                    <span className="text-xs text-slate-400">Active Deals in Funnel</span>
                    <p className="text-xl font-bold text-white mt-1">42 Deals</p>
                    <span className="text-[10px] text-blue-400 font-mono">Weighted: ₹1.28 Cr</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                    <span className="text-xs text-slate-400">Inventory Units Managed</span>
                    <p className="text-xl font-bold text-white mt-1">28,940</p>
                    <span className="text-[10px] text-emerald-400 font-mono">3 Warehouses synced</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06]">
                    <span className="text-xs text-slate-400">Automated Actions Run</span>
                    <p className="text-xl font-bold text-white mt-1">12,480</p>
                    <span className="text-[10px] text-violet-400 font-mono">Zero manual entry</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F1424] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-sm font-bold text-white">AI Financial Summary</p>
                      <p className="text-xs text-slate-400">
                        Operational efficiency increased 24% after centralizing client invoicing and warehouse dispatch into BusinessOS.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                    Audit Passed
                  </span>
                </div>
              </div>
            )}

            {activeTab === "crm" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Discovery (6 Deals)</span>
                  <div className="p-3 rounded-lg bg-[#161F33] border border-white/[0.06] space-y-1">
                    <p className="text-sm font-bold text-white">Global Logistics Corp</p>
                    <p className="text-xs text-blue-400 font-mono">₹14.5L • Multi-tenant ERP</p>
                    <p className="text-[10px] text-slate-400">Assigned: Siddharth • Call at 4 PM</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Proposal Sent (3 Deals)</span>
                  <div className="p-3 rounded-lg bg-[#161F33] border border-indigo-500/30 space-y-1">
                    <p className="text-sm font-bold text-white">Prime Care Hospital</p>
                    <p className="text-xs text-indigo-400 font-mono">₹28.0L • Patient Portal</p>
                    <p className="text-[10px] text-indigo-300">Reviewed NDA &amp; Architecture</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
                  <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Won &amp; Invoiced (12 Deals)</span>
                  <div className="p-3 rounded-lg bg-[#13222E] border border-emerald-500/30 space-y-1">
                    <p className="text-sm font-bold text-white">Edutech Academy</p>
                    <p className="text-xs text-emerald-400 font-mono">₹18.0L • LMS Platform</p>
                    <p className="text-[10px] text-emerald-300">Milestone 1 Payment Received</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "inventory" && (
              <div className="p-5 rounded-xl bg-[#11172A] border border-white/[0.06] space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
                  <span>Item Name &amp; SKU</span>
                  <span>Warehouse</span>
                  <span>Stock Status</span>
                  <span>Auto-Reorder</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white">
                  <span>Smart Terminal NX-100</span>
                  <span className="text-slate-400 font-mono">Mumbai Hub</span>
                  <span className="text-emerald-400 font-mono">1,420 units (Adequate)</span>
                  <span className="text-blue-400">Trigger at 200</span>
                </div>
                <div className="flex justify-between items-center text-xs text-white">
                  <span>Thermal Sensor Hub S4</span>
                  <span className="text-slate-400 font-mono">Bangalore DC</span>
                  <span className="text-amber-400 font-mono">84 units (Low Stock)</span>
                  <span className="text-amber-300">PO #849 Dispatched</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <div className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Architecture Blueprint</h3>
            <ul className="space-y-3">
              {project.architecture.map((arch, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
            <p className="mt-6 text-xs text-slate-400 leading-relaxed">
              Every system built by Nexora is deployed with full source code ownership, complete documentation, automated test suites, and high availability configuration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
