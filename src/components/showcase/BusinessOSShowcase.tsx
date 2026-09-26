"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  GitBranch, 
  Cpu, 
  Settings, 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Search,
  Bell,
  ArrowRight,
  ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = 
  | "Overview" 
  | "CRM" 
  | "Sales" 
  | "Customers" 
  | "Inventory" 
  | "Automation" 
  | "Analytics" 
  | "AI Assistant" 
  | "Settings";

export default function BusinessOSShowcase() {
  const [activeNav, setActiveNav] = useState<NavItem>("Overview");

  const sidebarItems: { id: NavItem; icon: React.ElementType }[] = [
    { id: "Overview", icon: BarChart3 },
    { id: "CRM", icon: Users },
    { id: "Sales", icon: TrendingUp },
    { id: "Customers", icon: Users },
    { id: "Inventory", icon: Package },
    { id: "Automation", icon: GitBranch },
    { id: "Analytics", icon: BarChart3 },
    { id: "AI Assistant", icon: Cpu },
    { id: "Settings", icon: Settings },
  ];

  return (
    <section id="businessos" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCT BENCHMARK</span>
            </div>
            <h2 className="section-headline font-extrabold text-white tracking-tight">
              BusinessOS: The unified operations command center.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              How we consolidate disconnected software, spreadsheets, and manual tracking into a single production-grade interface.
            </p>
          </div>

          <Link
            href="/work/business-os"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold tracking-wider border border-white/10 transition-colors shrink-0"
          >
            <span>Launch Dedicated Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Large Browser-Window Mockup */}
        <div className="rounded-3xl bg-[#080C16] border border-white/15 shadow-2xl shadow-blue-950/60 overflow-hidden">
          {/* Top Browser Bar */}
          <div className="px-5 py-3 bg-[#05070D] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-[#101526] border border-white/[0.06] text-xs font-mono text-slate-400">
                <span className="text-emerald-400">https://</span>app.business-os.nexora.internal/dashboard
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="hidden sm:inline">Org: Apex Enterprise</span>
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
            </div>
          </div>

          {/* Browser Workspace Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            {/* Sidebar (3 Cols) */}
            <div className="md:col-span-3 p-4 bg-[#070A14] border-r border-white/[0.08] flex flex-col justify-between">
              <div className="space-y-1">
                <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  WORKSPACE MODULES
                </div>
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeNav === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveNav(item.id)}
                      className={cn(
                        "w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left",
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.id}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live sync badge in sidebar */}
              <div className="p-3 rounded-xl bg-[#0F1424] border border-white/[0.06] text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real-time Sync Active</span>
                </div>
                <span>Postgres replicas in sync</span>
              </div>
            </div>

            {/* Main Content Area (9 Cols) */}
            <div className="md:col-span-9 p-6 sm:p-8 space-y-6 bg-[#080C17]">
              {/* Top KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-xl bg-[#0E1424] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">MONTHLY NET REV</span>
                  <p className="text-xl font-bold text-white mt-1">₹48,25,000</p>
                  <span className="text-[10px] font-mono text-emerald-400">+19.6% MoM</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1424] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">ACTIVE DEALS</span>
                  <p className="text-xl font-bold text-white mt-1">42 In Pipeline</p>
                  <span className="text-[10px] font-mono text-blue-400">₹1.28 Cr Value</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1424] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">INVENTORY UNITS</span>
                  <p className="text-xl font-bold text-white mt-1">14,290</p>
                  <span className="text-[10px] font-mono text-cyan-400">3 Hubs Synced</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0E1424] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">AUTO-ACTIONS</span>
                  <p className="text-xl font-bold text-white mt-1">12,480</p>
                  <span className="text-[10px] font-mono text-violet-400">Zero errors</span>
                </div>
              </div>

              {/* Chart & Sales Funnel Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Revenue Trend Chart (7 Cols) */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-[#0E1424] border border-white/[0.06] space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-white">Revenue Growth Velocity</span>
                      <p className="text-[10px] font-mono text-slate-400">Q1 - Q3 Trajectory</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Target: ₹60L/mo
                    </span>
                  </div>

                  {/* SVG Line / Bar Visualization */}
                  <div className="h-40 flex items-end justify-between gap-3 pt-6 px-2">
                    {[
                      { month: "Apr", val: "35%", amount: "₹24L" },
                      { month: "May", val: "50%", amount: "₹31L" },
                      { month: "Jun", val: "62%", amount: "₹38L" },
                      { month: "Jul", val: "58%", amount: "₹36L" },
                      { month: "Aug", val: "78%", amount: "₹42L" },
                      { month: "Sep", val: "95%", amount: "₹48.2L" },
                    ].map((bar, i) => (
                      <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full bg-[#182038] rounded-t-lg h-32 flex items-end overflow-hidden">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all duration-700 group-hover:brightness-125"
                            style={{ height: bar.val }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sales Funnel (5 Cols) */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0E1424] border border-white/[0.06] space-y-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Conversion Funnel</span>
                    <span className="text-[10px] font-mono text-slate-400">Avg Cycle: 14 Days</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">1. Inbound Leads</span>
                        <span className="text-white font-mono font-bold">142</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-full" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">2. Qualified Proposals</span>
                        <span className="text-white font-mono font-bold">48</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-3/4" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-300">3. Closed Won</span>
                        <span className="text-emerald-400 font-mono font-bold">18</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-2/5" />
                      </div>
                    </div>
                  </div>

                  {/* AI Insight Box */}
                  <div className="p-3 rounded-xl bg-[#141C33] border border-blue-500/20 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 text-blue-400 font-bold mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AI Diagnostic</span>
                    </div>
                    Automated follow-up reminders reduced lead drop-off by 42% in step 2.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
