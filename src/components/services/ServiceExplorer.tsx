"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  GitBranch, 
  Code2, 
  BarChart3, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  Activity,
  AlertTriangle,
  FileCheck,
  ShieldCheck
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  GitBranch,
  Code2,
  BarChart3,
  Layers,
  Cloud,
};

export default function ServiceExplorer() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("ai-engineering");

  const currentService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];
  const CurrentIcon = iconMap[currentService.icon] || Cpu;

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#06080E] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="section-headline font-extrabold text-white tracking-tight">
            Six disciplined technology capabilities.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From modern generative AI and MLOps to fault-tolerant automation and custom software—we engineer practical, production-ready solutions.
          </p>
        </div>

        {/* 6 Services Split Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Service Menu (4 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {servicesData.map((service, idx) => {
              const Icon = iconMap[service.icon] || Cpu;
              const isSelected = selectedServiceId === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                    isSelected
                      ? "bg-[#11172A] border-blue-500/60 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/30"
                      : "bg-[#0A0E1A]/80 border-white/[0.06] hover:bg-[#0F1426] hover:border-white/15"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0",
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-[#141B30] text-slate-400 group-hover:text-white"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-500">
                          0{idx + 1}
                        </span>
                        <p className={cn("text-xs sm:text-sm font-bold tracking-tight", isSelected ? "text-white" : "text-slate-300 group-hover:text-white")}>
                          {service.title}
                        </p>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-sans line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform shrink-0",
                      isSelected ? "text-blue-400 translate-x-1" : "text-slate-600 group-hover:text-slate-400"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Deep-Dive Detail (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0A0E1A] border border-white/10 shadow-2xl backdrop-blur-xl relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                      DELIVERABLE SPECIFICATION
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {currentService.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  Production-Ready
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {currentService.description}
              </p>

              {/* Core Deliverable Checklist */}
              <div className="mt-6">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-2 font-semibold">
                  Key Deliverables &amp; Architectural Components:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Solved vs Client Deliverable vs Business Value Grid */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-3 font-sans text-xs">
                {/* Problem Solved */}
                <div className="p-3.5 rounded-xl bg-[#101526] border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-3 h-3" />
                    Problem Solved
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentService.problemSolved}
                  </p>
                </div>

                {/* Client Deliverable */}
                <div className="p-3.5 rounded-xl bg-[#101526] border border-white/[0.06] space-y-1">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold flex items-center gap-1.5">
                    <FileCheck className="w-3 h-3" />
                    Client Deliverable
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {currentService.clientDeliverable}
                  </p>
                </div>

                {/* Business Value */}
                <div className="p-3.5 rounded-xl bg-[#101526] border border-emerald-500/20 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3" />
                    Measurable Business Value
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {currentService.businessValue}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Ready to assess your organization&apos;s technical scope?
                </span>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide transition-all shadow-md shrink-0"
                >
                  <span>Discuss This Capability</span>
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
