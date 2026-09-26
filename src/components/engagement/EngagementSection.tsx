"use client";

import React from "react";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Layers, 
  Sliders, 
  TrendingUp, 
  ShieldCheck,
  Users,
  Briefcase,
  Cpu
} from "lucide-react";
import { engagementModels, whyNexoraData } from "@/data/engagement";
import { cn } from "@/lib/utils";

const whyIcons: Record<string, React.ElementType> = {
  Target,
  Layers,
  Sliders,
  TrendingUp,
  ShieldCheck,
};

export default function EngagementSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#06080F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engagement Models Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-medium text-blue-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLABORATION FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work with us your way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Flexible collaboration structures designed around your business cadence, budget, and internal capabilities.
          </p>
        </div>

        {/* 3 Engagement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-28">
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className={cn(
                "rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group",
                model.popular
                  ? "bg-gradient-to-b from-[#111933] to-[#0A0F1F] border-blue-500/40 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/30"
                  : "bg-[#0B0F1D] border-white/[0.08] hover:border-white/20"
              )}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/25">
                    {model.badge}
                  </span>
                  {model.popular && (
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      Most Selected
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {model.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Best for: {model.bestFor}
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {model.description}
                </p>

                {/* Key Inclusions */}
                <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-2.5">
                  <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Model Highlights:
                  </p>
                  {model.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-5 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  className={cn(
                    "w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-xs tracking-wider transition-all",
                    model.popular
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10"
                  )}
                >
                  <span>{model.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section 20: WHY NEXORA */}
        <div className="pt-16 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE NEXORA ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why business leaders choose Nexora.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              No generic buzzwords or hollow metrics. Just disciplined engineering tied directly to operational ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyNexoraData.map((item) => {
              const Icon = whyIcons[item.icon] || Target;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#0B0F1D] border border-white/[0.07] hover:border-white/20 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#141B30] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
