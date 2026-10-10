"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Cpu, 
  GitBranch, 
  BarChart3, 
  Cloud, 
  Layout,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  GitBranch,
  BarChart3,
  Cloud,
  Layout,
};

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#06080F]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE SERVICES & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything you need to build and scale digitally.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            From a high-converting website to a complete business platform, Nexora provides end-to-end technology capabilities under one roof.
          </p>
        </div>

        {/* 8 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Code2;
            const isHovered = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "relative rounded-2xl p-6 bg-[#0B0F1D] border transition-all duration-300 flex flex-col justify-between group",
                  service.featured
                    ? "border-blue-500/30 bg-gradient-to-b from-[#0F1629] to-[#0A0E1A]"
                    : "border-white/[0.08] hover:border-white/20",
                  isHovered && "shadow-2xl shadow-blue-500/10 -translate-y-1"
                )}
              >
                {/* Subtle card glow overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#141B30] border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-cyan-300 group-hover:border-blue-500/40 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    {service.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-slate-400">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-5 pt-4 border-t border-white/[0.07] space-y-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                      Key Deliverables
                    </p>
                    <ul className="space-y-1.5">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Business Outcome Box at bottom */}
                <div className="mt-6 pt-3 border-t border-white/[0.06]">
                  <p className="text-[11px] text-slate-400 leading-snug">
                    <span className="text-emerald-400 font-medium">Outcome: </span>
                    {service.businessValue || service.businessOutcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0F1424]/70 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
            <p className="text-sm text-slate-300">
              Not sure which service suits your current stage? We provide a complimentary technical roadmap audit.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold tracking-wide border border-white/10 transition-colors shrink-0"
          >
            <span>Request Roadmap Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
